import cosmosjs from "@cosmostation/cosmosjs";
import { LcdClient, setupAuthExtension } from "@cosmjs/launchpad";

const apiUrl = "https://api.cosmos.network";

const client = LcdClient.withExtensions({ apiUrl }, setupAuthExtension);

// Get all pools function from Gravity Dex
const getPools = async () => {
    var pools = [];
    var res = await client.get("cosmos/liquidity/v1beta1/pools");
    pools = pools.concat(res.pools);
    while (pools.length < res.pagination.total) {
        console.log(pools.length)
        res = await client.get("cosmos/liquidity/v1beta1/pools", {"pagination.offset": pools.length});
        pools = pools.concat(res.pools);
    }
    return pools
}

//Get balances/liquidity amount from pool account address
const getBalanceFromPoolAddress = async (address) => {
    var res = await client.get("cosmos/bank/v1beta1/balances/" + address);
    return res;
}

//Get liquidity details from 
const getLiquidityDetails = async () => {
    var res = await client.get("cosmos/liquidity/v1beta1/params");
    return res;
}

// Get pool details
const getPoolDetails = async (pool_id, tokenInDenom, tokenInAmount) => {
    var poolres = await client.get("cosmos/liquidity/v1beta1/pools/" + pool_id);
    var poolbalances = await getBalanceFromPoolAddress(poolres.pool.reserve_account_address);
    var liqDetails = await getLiquidityDetails();
    var price = null;
    var tokenOutDenom = null;
    if(poolbalances.balances[0].denom == tokenInDenom) {
        tokenOutDenom = poolbalances.balances[1].denom
        price =  poolbalances.balances[1].amount/ poolbalances.balances[0].amount
    }
    if(poolbalances.balances[1].denom == tokenInDenom) {
        tokenOutDenom = poolbalances.balances[0].denom
        price =  poolbalances.balances[0].amount/ poolbalances.balances[1].amount
    }
    var tokenOutAmount = (price * (Number(tokenInAmount)/1000000));
    var swapFeeBase = Number(liqDetails.params.swap_fee_rate);
    var exitFeeBase = Number(liqDetails.params.withdraw_fee_rate);
    var swapFee = swapFeeBase * tokenOutAmount;
    var exitFee = exitFeeBase * tokenOutAmount;
    var tokenInDenomDetails = null;
    var tokenOutDenomDetails = null;
    if(tokenInDenom != "uatom") { tokenInDenomDetails = await getDenomDetails(tokenInDenom) };
    if(tokenOutDenom != "uatom") { tokenOutDenomDetails = await getDenomDetails(tokenOutDenom) };
    var response = {
        "price": price, 
        "tokenOutAmount": tokenOutAmount,
        "tokenOutAmountMinusFees": tokenOutAmount - swapFee - exitFee,
        "tokenInDenom": tokenInDenom,
        "tokenInDenomDetails": tokenInDenomDetails,
        "tokenOutDenom": tokenOutDenom,
        "tokenOutDenomDetails": tokenOutDenomDetails,
        "pool_id": pool_id,
        "swapFee": swapFee,
        "exitFee": exitFee,
        "swapFeeBase": swapFeeBase,
        "exitFeeBase": exitFeeBase
    };
    return response;
}

// Get ibc denom details
const getDenomDetails = async (denom) => {
    var hash = denom.split("ibc/")[1];
    var res = await client.get("/ibc/applications/transfer/v1beta1/denom_traces/" + hash);
    return res
}

export class CosmosPools {
    async pools() {
        const pools = await getPools();
        return pools;
    }
    async poolDetails(pool_id, tokenInDenom, tokenInAmount) {
        return getPoolDetails(pool_id, tokenInDenom, tokenInAmount)
    }
}

const cosmos = new CosmosPools()

console.log(await getPoolDetails("1", "ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC", 1000000))

//console.log(await cosmos.pools())
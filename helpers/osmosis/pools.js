import cosmosjs from "@cosmostation/cosmosjs";
import { LcdClient, setupAuthExtension } from "@cosmjs/launchpad";

const apiUrl = "http://143.244.174.87:1317";

const client = LcdClient.withExtensions({ apiUrl }, setupAuthExtension);

// Get all pools function from Osmosis
const getPools = async () => {
    var pools = [];
    var res = await client.get("osmosis/gamm/v1beta1/pools");
    pools = pools.concat(res.pools);
    while (pools.length < res.pagination.total) {
        res = await client.get("osmosis/gamm/v1beta1/pools", {"pagination.offset": pools.length});
        pools = pools.concat(res.pools);
    }
    return pools
}

// Get ibc denom details
const getDenomDetails = async (denom) => {
    var hash = denom.split("ibc/")[1];
    var res = await client.get("/ibc/applications/transfer/v1beta1/denom_traces/" + hash);
    return res
}

// Get pool details
const getPoolDetails = async (pool_id, tokenInDenom, tokenInAmount) => {
    var pools = [];
    var res = await client.get("osmosis/gamm/v1beta1/pools/" + pool_id);
    var price = null;
    var tokenOutDenom = null;
    if(res.pool.poolAssets[0].token.denom == tokenInDenom) {
        tokenOutDenom = res.pool.poolAssets[1].token.denom
        price = res.pool.poolAssets[1].token.amount/res.pool.poolAssets[0].token.amount
    }
    if(res.pool.poolAssets[1].token.denom == tokenInDenom) {
        tokenOutDenom = res.pool.poolAssets[0].token.denom
        price = res.pool.poolAssets[0].token.amount/res.pool.poolAssets[1].token.amount
    }
    var tokenOutAmount = (price * (Number(tokenInAmount)/1000000));
    var swapFee = res.pool.poolParams.swapFee * tokenOutAmount;
    var exitFee = res.pool.poolParams.exitFee * tokenOutAmount;
    var tokenInDenomDetails = null;
    var tokenOutDenomDetails = null;
    if(tokenInDenom != "uosmo") { tokenInDenomDetails = await getDenomDetails(tokenInDenom) };
    if(tokenOutDenom != "uosmo") { tokenOutDenomDetails = await getDenomDetails(tokenOutDenom) };
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
        "swapFeeBase": res.pool.poolParams.swapFee,
        "exitFeeBase": res.pool.poolParams.exitFee
    };
    return response;
}

export class OsmosisPools {
    async pools() {
        const pools = await getPools();
        return pools;
    }
    async poolDetails(pool_id, tokenInDenom, tokenInAmount) {
        return getPoolDetails(pool_id, tokenInDenom, tokenInAmount)
    }
}

const osmosis = new OsmosisPools()

console.log(await osmosis.poolDetails("1", "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2", "10000000"))
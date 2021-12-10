import cosmosjs from "@cosmostation/cosmosjs";
import { LcdClient, setupAuthExtension } from "@cosmjs/launchpad";

const apiUrl = "https://api.cosmos.network";

const client = LcdClient.withExtensions({ apiUrl }, setupAuthExtension);


const getPools = async () => {
    var res = await client.get("cosmos/liquidity/v1beta1/pools");
    return res.pools
}

console.log(await getPools())
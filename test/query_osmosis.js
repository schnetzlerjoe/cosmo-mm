import cosmosjs from "@cosmostation/cosmosjs";
import { LcdClient, setupAuthExtension } from "@cosmjs/launchpad";

const apiUrl = "http://143.244.174.87:1317";

const client = LcdClient.withExtensions({ apiUrl }, setupAuthExtension);

var get = await client.get("osmosis/gamm/v1beta1/pools/1")

console.log(get)
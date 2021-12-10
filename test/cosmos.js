import cosmosjs from "@cosmostation/cosmosjs";

const mnemonic = process.env.MNEMONIC;
const chainId = "cosmos-4";
const cosmos = cosmosjs.network("https://api.cosmos.network", chainId);
const address = cosmos.getAddress(mnemonic);
const privKey = cosmos.getECPairPriv(mnemonic);

cosmos.getAccounts(address).then(data => {
	let stdSignMsg = cosmos.newStdMsg({
		msgs: [
			{
				type: "cosmos/liquidity/v1beta1/MsgSwapWithinBatch",
				value: {
					"swap_requester_address": address.toString(),
					"pool_id": "1",
					"swap_type_id": 1,
					"offer_coin": {
					"denom": "uatom",
					"amount": "100000"
					},
					"demand_coin_denom": "ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC",
					"offer_coin_fee": {
					"denom": "uatom",
					"amount": "150"
					},
					"order_price": "5.080679999999999197"
				}
			}
		],
		chain_id: chainId,
		fee: {
			gas: "500000",
			amount: [
			  {
				amount: "5000",
				denom: "uatom"
			  }
			]
		  },
		memo: "Simulate test",
		account_number: String(data.result.value.account_number),
		sequence: String(data.result.value.sequence)
	});

	const signedTx = cosmos.sign(stdSignMsg, privKey);
    console.log(signedTx.msg);
	console.log(signedTx.signatures)
	cosmos.broadcast(signedTx).then(response => console.log(response));
})
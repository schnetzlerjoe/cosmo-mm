import cosmosjs from "@cosmostation/cosmosjs";

const mnemonic = process.env.MNEMONIC;
const chainId = "osmosis-1";
const osmosis = cosmosjs.network("https://api-osmosis.imperator.co", chainId);
osmosis.setBech32MainPrefix("osmo");
osmosis.setPath("m/44'/118'/0'/0/0");
const address = osmosis.getAddress(mnemonic);
const privKey = osmosis.getECPairPriv(mnemonic);

osmosis.getAccounts(address).then(data => {
	let stdSignMsg = osmosis.newStdMsg({
		msgs: [
			{
				type: "osmosis/gamm/swap-exact-amount-in",
				value: {
					sender: "osmo1v8ezz6fslyd0rcxm9kh4q8zlwehh6q68mp3t4r",
					routes: [
						{
							poolId: "1",
							tokenOutDenom: "uosmo"
						}
					],
					tokenIn: {
						denom: "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
						amount: "1000000"
					},
					tokenOutMinAmount: "5187054"
				}
			}
		],
		chain_id: chainId,
		fee: { amount: [ { amount: String(0), denom: "uosmo" } ], gas: String(200000) },
		memo: "Script test",
		account_number: String(data.result.value.account_number),
		sequence: String(data.result.value.sequence)
	});

	console.log(stdSignMsg.json.fee);

	const signedTx = osmosis.sign(stdSignMsg, privKey);
    console.log(signedTx.tx.signatures);
	//osmosis.broadcast(signedTx).then(response => console.log(response));
}) 
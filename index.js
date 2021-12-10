import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, SigningStargateClient } from "@cosmjs/stargate";
import { MsgSwapWithinBatch } from "./liquidity/src/tendermint/liquidity/v1beta1/tx.js";

const registry = new Registry();
registry.register("/tendermint.liquidity.v1beta1.MsgSwapWithinBatch", MsgSwapWithinBatch)

const mnemonic = process.env.MNEMONIC
const signer = await DirectSecp256k1HdWallet.fromMnemonic(mnemonic);
const [account] = await signer.getAccounts();

const client = await SigningStargateClient.connectWithSigner(
  "https://rpc.cosmos.network/",
  signer,
  { registry: registry },
);

console.log(account.address)

const rawMessage = {
  swapRequesterAddress: account.address.toString(),
  poolId: "1",
  swapTypeId: 1,
  offerCoin: {
    denom: "uatom",
    amount: "50000"
  },
  demandCoinDenom: "ibc/14F9BC3E44B8A9C1BE1FB08980FAB87034C9905EF17CF2F5008FC085218811CC",
  offerCoinFee: {
    denom: "uatom",
    amount: "75"
  },
  orderPrice: "5"
}

const typeMsg = MsgSwapWithinBatch.fromPartial(rawMessage)

const message = {
  typeUrl: "/tendermint.liquidity.v1beta1.MsgSwapWithinBatch",
  value: MsgSwapWithinBatch.fromPartial(rawMessage),
};

const fee = {
  gas: "500000",
  amount: [
    {
      amount: "5000",
      denom: "uatom"
    }
  ]
};

const response = await client.signAndBroadcast(account.address, [message], fee, "Test");
console.log(response);
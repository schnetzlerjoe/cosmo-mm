import { DirectSecp256k1HdWallet, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, SigningStargateClient } from "@cosmjs/stargate";
import { MsgSwapWithinBatch } from "./liquidity/src/tendermint/liquidity/v1beta1/tx";

const myRegistry = new Registry([
  ...defaultRegistryTypes,
  ["/my.custom.MsgXxx", MsgXxx], // Replace with your own type URL and Msg class
]);

const mnemonic = process.env.MNEMONIC

const signer = await DirectSecp256k1HdWallet.fromMnemonic(
  mnemonic,
  { prefix: "myprefix" }, // Replace with your own Bech32 address prefix
);
const client = await SigningStargateClient.connectWithSigner(
  "my.endpoint.com", // Replace with your own RPC endpoint
  signer,
  { registry: myRegistry },
);
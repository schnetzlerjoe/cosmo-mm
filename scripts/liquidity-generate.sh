COSMOS_PROTO_DIR="$HOME/liquidity/proto"
THIRD_PARTY_PROTO_DIR="$HOME/liquidity/third_party/proto"

protoc \
  --plugin="$HOME/cosmo-mm/node_modules/.bin/protoc-gen-ts_proto" \
  --ts_proto_out="$HOME/cosmo-mm/liquidity/src" \
  --proto_path="$COSMOS_PROTO_DIR" \
  --proto_path="$THIRD_PARTY_PROTO_DIR" \
  --ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=true" \
  "$THIRD_PARTY_PROTO_DIR/gogoproto/gogo.proto" \
  "$THIRD_PARTY_PROTO_DIR/cosmos_proto/coin.proto" \
  "$THIRD_PARTY_PROTO_DIR/protoc-gen-openapiv2/options/annotations.proto" \
  "$COSMOS_PROTO_DIR/tendermint/liquidity/v1beta1/tx.proto" \
  "$COSMOS_PROTO_DIR/tendermint/liquidity/v1beta1/query.proto" \
  "$COSMOS_PROTO_DIR/tendermint/liquidity/v1beta1/liquidity.proto"
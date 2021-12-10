#!/usr/bin/env bash
rm -r $HOME/cosmo-mm/proto
rm -r $HOME/cosmo-mm/proto-thirdparty
cp -r $HOME/liquidity/proto $HOME/cosmo-mm/proto
cp -r $HOME/liquidity/third_party/proto $HOME/cosmo-mm/proto-thirdparty
rm -r $HOME/cosmo-mm/proto-thirdparty/protoc-gen-openapiv2

proto_dirs=$(find ./proto -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
proto_files=()

for dir in $proto_dirs; do
  proto_files=("${proto_files[@]} $(find "${dir}" -maxdepth 1 -name '*.proto')")
done

npx pbjs \
  -o $HOME/cosmo-mm/liquidity/src/proto.cjs \
  -t static-module \
  --force-long \
  --keep-case \
  --no-create \
  --path=$HOME/cosmo-mm/proto \
  --path=$HOME/cosmo-mm/proto-thirdparty \
  --root="cosmo-mm/liquidity/src" \
  ${proto_files[@]}

npx pbjs \
  -o $HOME/cosmo-mm/liquidity/src/proto.js \
  -t static-module \
  -w es6 \
  --es6 \
  --force-long \
  --keep-case \
  --no-create \
  --path=$HOME/cosmo-mm/proto \
  --path=$HOME/cosmo-mm/proto-thirdparty \
  --root="cosmo-mm/liquidity/src" \
  ${proto_files[@]}

npx pbts \
  -o $HOME/cosmo-mm/liquidity/src/proto.d.ts \
  $HOME/cosmo-mm/liquidity/src/proto.js

rm -r $HOME/cosmo-mm/proto
rm -r $HOME/cosmo-mm/proto-thirdparty
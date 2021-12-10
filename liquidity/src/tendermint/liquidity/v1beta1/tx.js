/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Coin } from "../../../cosmos_proto/coin.js";
export const protobufPackage = "tendermint.liquidity.v1beta1";
const baseMsgCreatePool = { poolCreatorAddress: "", poolTypeId: 0 };
export const MsgCreatePool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.poolCreatorAddress !== "") {
            writer.uint32(10).string(message.poolCreatorAddress);
        }
        if (message.poolTypeId !== 0) {
            writer.uint32(16).uint32(message.poolTypeId);
        }
        for (const v of message.depositCoins) {
            Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePool };
        message.depositCoins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolCreatorAddress = reader.string();
                    break;
                case 2:
                    message.poolTypeId = reader.uint32();
                    break;
                case 4:
                    message.depositCoins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePool };
        message.poolCreatorAddress =
            object.poolCreatorAddress !== undefined &&
                object.poolCreatorAddress !== null
                ? String(object.poolCreatorAddress)
                : "";
        message.poolTypeId =
            object.poolTypeId !== undefined && object.poolTypeId !== null
                ? Number(object.poolTypeId)
                : 0;
        message.depositCoins = (object.depositCoins ?? []).map((e) => Coin.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolCreatorAddress !== undefined &&
            (obj.poolCreatorAddress = message.poolCreatorAddress);
        message.poolTypeId !== undefined && (obj.poolTypeId = message.poolTypeId);
        if (message.depositCoins) {
            obj.depositCoins = message.depositCoins.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.depositCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePool };
        message.poolCreatorAddress = object.poolCreatorAddress ?? "";
        message.poolTypeId = object.poolTypeId ?? 0;
        message.depositCoins =
            object.depositCoins?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
const baseMsgCreatePoolResponse = {};
export const MsgCreatePoolResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePoolResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreatePoolResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreatePoolResponse };
        return message;
    },
};
const baseMsgDepositWithinBatch = {
    depositorAddress: "",
    poolId: Long.UZERO,
};
export const MsgDepositWithinBatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositorAddress !== "") {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        for (const v of message.depositCoins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDepositWithinBatch };
        message.depositCoins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositorAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.depositCoins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDepositWithinBatch };
        message.depositorAddress =
            object.depositorAddress !== undefined && object.depositorAddress !== null
                ? String(object.depositorAddress)
                : "";
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromString(object.poolId)
                : Long.UZERO;
        message.depositCoins = (object.depositCoins ?? []).map((e) => Coin.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.depositorAddress !== undefined &&
            (obj.depositorAddress = message.depositorAddress);
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || Long.UZERO).toString());
        if (message.depositCoins) {
            obj.depositCoins = message.depositCoins.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.depositCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDepositWithinBatch };
        message.depositorAddress = object.depositorAddress ?? "";
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromValue(object.poolId)
                : Long.UZERO;
        message.depositCoins =
            object.depositCoins?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
const baseMsgDepositWithinBatchResponse = {};
export const MsgDepositWithinBatchResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDepositWithinBatchResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgDepositWithinBatchResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDepositWithinBatchResponse,
        };
        return message;
    },
};
const baseMsgWithdrawWithinBatch = {
    withdrawerAddress: "",
    poolId: Long.UZERO,
};
export const MsgWithdrawWithinBatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.withdrawerAddress !== "") {
            writer.uint32(10).string(message.withdrawerAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.poolCoin !== undefined) {
            Coin.encode(message.poolCoin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgWithdrawWithinBatch };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawerAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.poolCoin = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgWithdrawWithinBatch };
        message.withdrawerAddress =
            object.withdrawerAddress !== undefined &&
                object.withdrawerAddress !== null
                ? String(object.withdrawerAddress)
                : "";
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromString(object.poolId)
                : Long.UZERO;
        message.poolCoin =
            object.poolCoin !== undefined && object.poolCoin !== null
                ? Coin.fromJSON(object.poolCoin)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.withdrawerAddress !== undefined &&
            (obj.withdrawerAddress = message.withdrawerAddress);
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.poolCoin !== undefined &&
            (obj.poolCoin = message.poolCoin
                ? Coin.toJSON(message.poolCoin)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgWithdrawWithinBatch };
        message.withdrawerAddress = object.withdrawerAddress ?? "";
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromValue(object.poolId)
                : Long.UZERO;
        message.poolCoin =
            object.poolCoin !== undefined && object.poolCoin !== null
                ? Coin.fromPartial(object.poolCoin)
                : undefined;
        return message;
    },
};
const baseMsgWithdrawWithinBatchResponse = {};
export const MsgWithdrawWithinBatchResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgWithdrawWithinBatchResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgWithdrawWithinBatchResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgWithdrawWithinBatchResponse,
        };
        return message;
    },
};
const baseMsgSwapWithinBatch = {
    swapRequesterAddress: "",
    poolId: Long.UZERO,
    swapTypeId: 0,
    demandCoinDenom: "",
    orderPrice: "",
};
export const MsgSwapWithinBatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.swapRequesterAddress !== "") {
            writer.uint32(10).string(message.swapRequesterAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.swapTypeId !== 0) {
            writer.uint32(24).uint32(message.swapTypeId);
        }
        if (message.offerCoin !== undefined) {
            Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
        }
        if (message.demandCoinDenom !== "") {
            writer.uint32(42).string(message.demandCoinDenom);
        }
        if (message.offerCoinFee !== undefined) {
            Coin.encode(message.offerCoinFee, writer.uint32(50).fork()).ldelim();
        }
        if (message.orderPrice !== "") {
            writer.uint32(58).string(message.orderPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSwapWithinBatch };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapRequesterAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.swapTypeId = reader.uint32();
                    break;
                case 4:
                    message.offerCoin = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.demandCoinDenom = reader.string();
                    break;
                case 6:
                    message.offerCoinFee = Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.orderPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSwapWithinBatch };
        message.swapRequesterAddress =
            object.swapRequesterAddress !== undefined &&
                object.swapRequesterAddress !== null
                ? String(object.swapRequesterAddress)
                : "";
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromString(object.poolId)
                : Long.UZERO;
        message.swapTypeId =
            object.swapTypeId !== undefined && object.swapTypeId !== null
                ? Number(object.swapTypeId)
                : 0;
        message.offerCoin =
            object.offerCoin !== undefined && object.offerCoin !== null
                ? Coin.fromJSON(object.offerCoin)
                : undefined;
        message.demandCoinDenom =
            object.demandCoinDenom !== undefined && object.demandCoinDenom !== null
                ? String(object.demandCoinDenom)
                : "";
        message.offerCoinFee =
            object.offerCoinFee !== undefined && object.offerCoinFee !== null
                ? Coin.fromJSON(object.offerCoinFee)
                : undefined;
        message.orderPrice =
            object.orderPrice !== undefined && object.orderPrice !== null
                ? String(object.orderPrice)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.swapRequesterAddress !== undefined &&
            (obj.swapRequesterAddress = message.swapRequesterAddress);
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.swapTypeId !== undefined && (obj.swapTypeId = message.swapTypeId);
        message.offerCoin !== undefined &&
            (obj.offerCoin = message.offerCoin
                ? Coin.toJSON(message.offerCoin)
                : undefined);
        message.demandCoinDenom !== undefined &&
            (obj.demandCoinDenom = message.demandCoinDenom);
        message.offerCoinFee !== undefined &&
            (obj.offerCoinFee = message.offerCoinFee
                ? Coin.toJSON(message.offerCoinFee)
                : undefined);
        message.orderPrice !== undefined && (obj.orderPrice = message.orderPrice);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSwapWithinBatch };
        message.swapRequesterAddress = object.swapRequesterAddress ?? "";
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromValue(object.poolId)
                : Long.UZERO;
        message.swapTypeId = object.swapTypeId ?? 0;
        message.offerCoin =
            object.offerCoin !== undefined && object.offerCoin !== null
                ? Coin.fromPartial(object.offerCoin)
                : undefined;
        message.demandCoinDenom = object.demandCoinDenom ?? "";
        message.offerCoinFee =
            object.offerCoinFee !== undefined && object.offerCoinFee !== null
                ? Coin.fromPartial(object.offerCoinFee)
                : undefined;
        message.orderPrice = object.orderPrice ?? "";
        return message;
    },
};
const baseMsgSwapWithinBatchResponse = {};
export const MsgSwapWithinBatchResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSwapWithinBatchResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgSwapWithinBatchResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgSwapWithinBatchResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreatePool = this.CreatePool.bind(this);
        this.DepositWithinBatch = this.DepositWithinBatch.bind(this);
        this.WithdrawWithinBatch = this.WithdrawWithinBatch.bind(this);
        this.Swap = this.Swap.bind(this);
    }
    CreatePool(request) {
        const data = MsgCreatePool.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Msg", "CreatePool", data);
        return promise.then((data) => MsgCreatePoolResponse.decode(new _m0.Reader(data)));
    }
    DepositWithinBatch(request) {
        const data = MsgDepositWithinBatch.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Msg", "DepositWithinBatch", data);
        return promise.then((data) => MsgDepositWithinBatchResponse.decode(new _m0.Reader(data)));
    }
    WithdrawWithinBatch(request) {
        const data = MsgWithdrawWithinBatch.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Msg", "WithdrawWithinBatch", data);
        return promise.then((data) => MsgWithdrawWithinBatchResponse.decode(new _m0.Reader(data)));
    }
    Swap(request) {
        const data = MsgSwapWithinBatch.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Msg", "Swap", data);
        return promise.then((data) => MsgSwapWithinBatchResponse.decode(new _m0.Reader(data)));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
//# sourceMappingURL=tx.js.map
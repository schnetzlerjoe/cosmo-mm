/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos_proto/coin";
import { MsgDepositWithinBatch, MsgWithdrawWithinBatch, MsgSwapWithinBatch, } from "../../../tendermint/liquidity/v1beta1/tx";
export const protobufPackage = "tendermint.liquidity.v1beta1";
const basePoolType = {
    id: 0,
    name: "",
    minReserveCoinNum: 0,
    maxReserveCoinNum: 0,
    description: "",
};
export const PoolType = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.minReserveCoinNum !== 0) {
            writer.uint32(24).uint32(message.minReserveCoinNum);
        }
        if (message.maxReserveCoinNum !== 0) {
            writer.uint32(32).uint32(message.maxReserveCoinNum);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePoolType };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.minReserveCoinNum = reader.uint32();
                    break;
                case 4:
                    message.maxReserveCoinNum = reader.uint32();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePoolType };
        message.id =
            object.id !== undefined && object.id !== null ? Number(object.id) : 0;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.minReserveCoinNum =
            object.minReserveCoinNum !== undefined &&
                object.minReserveCoinNum !== null
                ? Number(object.minReserveCoinNum)
                : 0;
        message.maxReserveCoinNum =
            object.maxReserveCoinNum !== undefined &&
                object.maxReserveCoinNum !== null
                ? Number(object.maxReserveCoinNum)
                : 0;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.minReserveCoinNum !== undefined &&
            (obj.minReserveCoinNum = message.minReserveCoinNum);
        message.maxReserveCoinNum !== undefined &&
            (obj.maxReserveCoinNum = message.maxReserveCoinNum);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePoolType };
        message.id = object.id ?? 0;
        message.name = object.name ?? "";
        message.minReserveCoinNum = object.minReserveCoinNum ?? 0;
        message.maxReserveCoinNum = object.maxReserveCoinNum ?? 0;
        message.description = object.description ?? "";
        return message;
    },
};
const baseParams = {
    minInitDepositAmount: "",
    initPoolCoinMintAmount: "",
    maxReserveCoinAmount: "",
    swapFeeRate: "",
    withdrawFeeRate: "",
    maxOrderAmountRatio: "",
    unitBatchHeight: 0,
    circuitBreakerEnabled: false,
};
export const Params = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.poolTypes) {
            PoolType.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.minInitDepositAmount !== "") {
            writer.uint32(18).string(message.minInitDepositAmount);
        }
        if (message.initPoolCoinMintAmount !== "") {
            writer.uint32(26).string(message.initPoolCoinMintAmount);
        }
        if (message.maxReserveCoinAmount !== "") {
            writer.uint32(34).string(message.maxReserveCoinAmount);
        }
        for (const v of message.poolCreationFee) {
            Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.swapFeeRate !== "") {
            writer.uint32(50).string(message.swapFeeRate);
        }
        if (message.withdrawFeeRate !== "") {
            writer.uint32(58).string(message.withdrawFeeRate);
        }
        if (message.maxOrderAmountRatio !== "") {
            writer.uint32(66).string(message.maxOrderAmountRatio);
        }
        if (message.unitBatchHeight !== 0) {
            writer.uint32(72).uint32(message.unitBatchHeight);
        }
        if (message.circuitBreakerEnabled === true) {
            writer.uint32(80).bool(message.circuitBreakerEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams };
        message.poolTypes = [];
        message.poolCreationFee = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolTypes.push(PoolType.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.minInitDepositAmount = reader.string();
                    break;
                case 3:
                    message.initPoolCoinMintAmount = reader.string();
                    break;
                case 4:
                    message.maxReserveCoinAmount = reader.string();
                    break;
                case 5:
                    message.poolCreationFee.push(Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.swapFeeRate = reader.string();
                    break;
                case 7:
                    message.withdrawFeeRate = reader.string();
                    break;
                case 8:
                    message.maxOrderAmountRatio = reader.string();
                    break;
                case 9:
                    message.unitBatchHeight = reader.uint32();
                    break;
                case 10:
                    message.circuitBreakerEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseParams };
        message.poolTypes = (object.poolTypes ?? []).map((e) => PoolType.fromJSON(e));
        message.minInitDepositAmount =
            object.minInitDepositAmount !== undefined &&
                object.minInitDepositAmount !== null
                ? String(object.minInitDepositAmount)
                : "";
        message.initPoolCoinMintAmount =
            object.initPoolCoinMintAmount !== undefined &&
                object.initPoolCoinMintAmount !== null
                ? String(object.initPoolCoinMintAmount)
                : "";
        message.maxReserveCoinAmount =
            object.maxReserveCoinAmount !== undefined &&
                object.maxReserveCoinAmount !== null
                ? String(object.maxReserveCoinAmount)
                : "";
        message.poolCreationFee = (object.poolCreationFee ?? []).map((e) => Coin.fromJSON(e));
        message.swapFeeRate =
            object.swapFeeRate !== undefined && object.swapFeeRate !== null
                ? String(object.swapFeeRate)
                : "";
        message.withdrawFeeRate =
            object.withdrawFeeRate !== undefined && object.withdrawFeeRate !== null
                ? String(object.withdrawFeeRate)
                : "";
        message.maxOrderAmountRatio =
            object.maxOrderAmountRatio !== undefined &&
                object.maxOrderAmountRatio !== null
                ? String(object.maxOrderAmountRatio)
                : "";
        message.unitBatchHeight =
            object.unitBatchHeight !== undefined && object.unitBatchHeight !== null
                ? Number(object.unitBatchHeight)
                : 0;
        message.circuitBreakerEnabled =
            object.circuitBreakerEnabled !== undefined &&
                object.circuitBreakerEnabled !== null
                ? Boolean(object.circuitBreakerEnabled)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.poolTypes) {
            obj.poolTypes = message.poolTypes.map((e) => e ? PoolType.toJSON(e) : undefined);
        }
        else {
            obj.poolTypes = [];
        }
        message.minInitDepositAmount !== undefined &&
            (obj.minInitDepositAmount = message.minInitDepositAmount);
        message.initPoolCoinMintAmount !== undefined &&
            (obj.initPoolCoinMintAmount = message.initPoolCoinMintAmount);
        message.maxReserveCoinAmount !== undefined &&
            (obj.maxReserveCoinAmount = message.maxReserveCoinAmount);
        if (message.poolCreationFee) {
            obj.poolCreationFee = message.poolCreationFee.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.poolCreationFee = [];
        }
        message.swapFeeRate !== undefined &&
            (obj.swapFeeRate = message.swapFeeRate);
        message.withdrawFeeRate !== undefined &&
            (obj.withdrawFeeRate = message.withdrawFeeRate);
        message.maxOrderAmountRatio !== undefined &&
            (obj.maxOrderAmountRatio = message.maxOrderAmountRatio);
        message.unitBatchHeight !== undefined &&
            (obj.unitBatchHeight = message.unitBatchHeight);
        message.circuitBreakerEnabled !== undefined &&
            (obj.circuitBreakerEnabled = message.circuitBreakerEnabled);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseParams };
        message.poolTypes =
            object.poolTypes?.map((e) => PoolType.fromPartial(e)) || [];
        message.minInitDepositAmount = object.minInitDepositAmount ?? "";
        message.initPoolCoinMintAmount = object.initPoolCoinMintAmount ?? "";
        message.maxReserveCoinAmount = object.maxReserveCoinAmount ?? "";
        message.poolCreationFee =
            object.poolCreationFee?.map((e) => Coin.fromPartial(e)) || [];
        message.swapFeeRate = object.swapFeeRate ?? "";
        message.withdrawFeeRate = object.withdrawFeeRate ?? "";
        message.maxOrderAmountRatio = object.maxOrderAmountRatio ?? "";
        message.unitBatchHeight = object.unitBatchHeight ?? 0;
        message.circuitBreakerEnabled = object.circuitBreakerEnabled ?? false;
        return message;
    },
};
const basePool = {
    id: Long.UZERO,
    typeId: 0,
    reserveCoinDenoms: "",
    reserveAccountAddress: "",
    poolCoinDenom: "",
};
export const Pool = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.typeId !== 0) {
            writer.uint32(16).uint32(message.typeId);
        }
        for (const v of message.reserveCoinDenoms) {
            writer.uint32(26).string(v);
        }
        if (message.reserveAccountAddress !== "") {
            writer.uint32(34).string(message.reserveAccountAddress);
        }
        if (message.poolCoinDenom !== "") {
            writer.uint32(42).string(message.poolCoinDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePool };
        message.reserveCoinDenoms = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.typeId = reader.uint32();
                    break;
                case 3:
                    message.reserveCoinDenoms.push(reader.string());
                    break;
                case 4:
                    message.reserveAccountAddress = reader.string();
                    break;
                case 5:
                    message.poolCoinDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePool };
        message.id =
            object.id !== undefined && object.id !== null
                ? Long.fromString(object.id)
                : Long.UZERO;
        message.typeId =
            object.typeId !== undefined && object.typeId !== null
                ? Number(object.typeId)
                : 0;
        message.reserveCoinDenoms = (object.reserveCoinDenoms ?? []).map((e) => String(e));
        message.reserveAccountAddress =
            object.reserveAccountAddress !== undefined &&
                object.reserveAccountAddress !== null
                ? String(object.reserveAccountAddress)
                : "";
        message.poolCoinDenom =
            object.poolCoinDenom !== undefined && object.poolCoinDenom !== null
                ? String(object.poolCoinDenom)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || Long.UZERO).toString());
        message.typeId !== undefined && (obj.typeId = message.typeId);
        if (message.reserveCoinDenoms) {
            obj.reserveCoinDenoms = message.reserveCoinDenoms.map((e) => e);
        }
        else {
            obj.reserveCoinDenoms = [];
        }
        message.reserveAccountAddress !== undefined &&
            (obj.reserveAccountAddress = message.reserveAccountAddress);
        message.poolCoinDenom !== undefined &&
            (obj.poolCoinDenom = message.poolCoinDenom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePool };
        message.id =
            object.id !== undefined && object.id !== null
                ? Long.fromValue(object.id)
                : Long.UZERO;
        message.typeId = object.typeId ?? 0;
        message.reserveCoinDenoms = object.reserveCoinDenoms?.map((e) => e) || [];
        message.reserveAccountAddress = object.reserveAccountAddress ?? "";
        message.poolCoinDenom = object.poolCoinDenom ?? "";
        return message;
    },
};
const basePoolMetadata = { poolId: Long.UZERO };
export const PoolMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.poolCoinTotalSupply !== undefined) {
            Coin.encode(message.poolCoinTotalSupply, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.reserveCoins) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePoolMetadata };
        message.reserveCoins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.poolCoinTotalSupply = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.reserveCoins.push(Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePoolMetadata };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromString(object.poolId)
                : Long.UZERO;
        message.poolCoinTotalSupply =
            object.poolCoinTotalSupply !== undefined &&
                object.poolCoinTotalSupply !== null
                ? Coin.fromJSON(object.poolCoinTotalSupply)
                : undefined;
        message.reserveCoins = (object.reserveCoins ?? []).map((e) => Coin.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.poolCoinTotalSupply !== undefined &&
            (obj.poolCoinTotalSupply = message.poolCoinTotalSupply
                ? Coin.toJSON(message.poolCoinTotalSupply)
                : undefined);
        if (message.reserveCoins) {
            obj.reserveCoins = message.reserveCoins.map((e) => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.reserveCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePoolMetadata };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromValue(object.poolId)
                : Long.UZERO;
        message.poolCoinTotalSupply =
            object.poolCoinTotalSupply !== undefined &&
                object.poolCoinTotalSupply !== null
                ? Coin.fromPartial(object.poolCoinTotalSupply)
                : undefined;
        message.reserveCoins =
            object.reserveCoins?.map((e) => Coin.fromPartial(e)) || [];
        return message;
    },
};
const basePoolBatch = {
    poolId: Long.UZERO,
    index: Long.UZERO,
    beginHeight: Long.ZERO,
    depositMsgIndex: Long.UZERO,
    withdrawMsgIndex: Long.UZERO,
    swapMsgIndex: Long.UZERO,
    executed: false,
};
export const PoolBatch = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.index.isZero()) {
            writer.uint32(16).uint64(message.index);
        }
        if (!message.beginHeight.isZero()) {
            writer.uint32(24).int64(message.beginHeight);
        }
        if (!message.depositMsgIndex.isZero()) {
            writer.uint32(32).uint64(message.depositMsgIndex);
        }
        if (!message.withdrawMsgIndex.isZero()) {
            writer.uint32(40).uint64(message.withdrawMsgIndex);
        }
        if (!message.swapMsgIndex.isZero()) {
            writer.uint32(48).uint64(message.swapMsgIndex);
        }
        if (message.executed === true) {
            writer.uint32(56).bool(message.executed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePoolBatch };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.index = reader.uint64();
                    break;
                case 3:
                    message.beginHeight = reader.int64();
                    break;
                case 4:
                    message.depositMsgIndex = reader.uint64();
                    break;
                case 5:
                    message.withdrawMsgIndex = reader.uint64();
                    break;
                case 6:
                    message.swapMsgIndex = reader.uint64();
                    break;
                case 7:
                    message.executed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePoolBatch };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromString(object.poolId)
                : Long.UZERO;
        message.index =
            object.index !== undefined && object.index !== null
                ? Long.fromString(object.index)
                : Long.UZERO;
        message.beginHeight =
            object.beginHeight !== undefined && object.beginHeight !== null
                ? Long.fromString(object.beginHeight)
                : Long.ZERO;
        message.depositMsgIndex =
            object.depositMsgIndex !== undefined && object.depositMsgIndex !== null
                ? Long.fromString(object.depositMsgIndex)
                : Long.UZERO;
        message.withdrawMsgIndex =
            object.withdrawMsgIndex !== undefined && object.withdrawMsgIndex !== null
                ? Long.fromString(object.withdrawMsgIndex)
                : Long.UZERO;
        message.swapMsgIndex =
            object.swapMsgIndex !== undefined && object.swapMsgIndex !== null
                ? Long.fromString(object.swapMsgIndex)
                : Long.UZERO;
        message.executed =
            object.executed !== undefined && object.executed !== null
                ? Boolean(object.executed)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.index !== undefined &&
            (obj.index = (message.index || Long.UZERO).toString());
        message.beginHeight !== undefined &&
            (obj.beginHeight = (message.beginHeight || Long.ZERO).toString());
        message.depositMsgIndex !== undefined &&
            (obj.depositMsgIndex = (message.depositMsgIndex || Long.UZERO).toString());
        message.withdrawMsgIndex !== undefined &&
            (obj.withdrawMsgIndex = (message.withdrawMsgIndex || Long.UZERO).toString());
        message.swapMsgIndex !== undefined &&
            (obj.swapMsgIndex = (message.swapMsgIndex || Long.UZERO).toString());
        message.executed !== undefined && (obj.executed = message.executed);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePoolBatch };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromValue(object.poolId)
                : Long.UZERO;
        message.index =
            object.index !== undefined && object.index !== null
                ? Long.fromValue(object.index)
                : Long.UZERO;
        message.beginHeight =
            object.beginHeight !== undefined && object.beginHeight !== null
                ? Long.fromValue(object.beginHeight)
                : Long.ZERO;
        message.depositMsgIndex =
            object.depositMsgIndex !== undefined && object.depositMsgIndex !== null
                ? Long.fromValue(object.depositMsgIndex)
                : Long.UZERO;
        message.withdrawMsgIndex =
            object.withdrawMsgIndex !== undefined && object.withdrawMsgIndex !== null
                ? Long.fromValue(object.withdrawMsgIndex)
                : Long.UZERO;
        message.swapMsgIndex =
            object.swapMsgIndex !== undefined && object.swapMsgIndex !== null
                ? Long.fromValue(object.swapMsgIndex)
                : Long.UZERO;
        message.executed = object.executed ?? false;
        return message;
    },
};
const baseDepositMsgState = {
    msgHeight: Long.ZERO,
    msgIndex: Long.UZERO,
    executed: false,
    succeeded: false,
    toBeDeleted: false,
};
export const DepositMsgState = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.msgHeight.isZero()) {
            writer.uint32(8).int64(message.msgHeight);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        if (message.executed === true) {
            writer.uint32(24).bool(message.executed);
        }
        if (message.succeeded === true) {
            writer.uint32(32).bool(message.succeeded);
        }
        if (message.toBeDeleted === true) {
            writer.uint32(40).bool(message.toBeDeleted);
        }
        if (message.msg !== undefined) {
            MsgDepositWithinBatch.encode(message.msg, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseDepositMsgState };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgHeight = reader.int64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                case 3:
                    message.executed = reader.bool();
                    break;
                case 4:
                    message.succeeded = reader.bool();
                    break;
                case 5:
                    message.toBeDeleted = reader.bool();
                    break;
                case 6:
                    message.msg = MsgDepositWithinBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseDepositMsgState };
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? Long.fromString(object.msgHeight)
                : Long.ZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? Long.fromString(object.msgIndex)
                : Long.UZERO;
        message.executed =
            object.executed !== undefined && object.executed !== null
                ? Boolean(object.executed)
                : false;
        message.succeeded =
            object.succeeded !== undefined && object.succeeded !== null
                ? Boolean(object.succeeded)
                : false;
        message.toBeDeleted =
            object.toBeDeleted !== undefined && object.toBeDeleted !== null
                ? Boolean(object.toBeDeleted)
                : false;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? MsgDepositWithinBatch.fromJSON(object.msg)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.msgHeight !== undefined &&
            (obj.msgHeight = (message.msgHeight || Long.ZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
        message.executed !== undefined && (obj.executed = message.executed);
        message.succeeded !== undefined && (obj.succeeded = message.succeeded);
        message.toBeDeleted !== undefined &&
            (obj.toBeDeleted = message.toBeDeleted);
        message.msg !== undefined &&
            (obj.msg = message.msg
                ? MsgDepositWithinBatch.toJSON(message.msg)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseDepositMsgState };
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? Long.fromValue(object.msgHeight)
                : Long.ZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? Long.fromValue(object.msgIndex)
                : Long.UZERO;
        message.executed = object.executed ?? false;
        message.succeeded = object.succeeded ?? false;
        message.toBeDeleted = object.toBeDeleted ?? false;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? MsgDepositWithinBatch.fromPartial(object.msg)
                : undefined;
        return message;
    },
};
const baseWithdrawMsgState = {
    msgHeight: Long.ZERO,
    msgIndex: Long.UZERO,
    executed: false,
    succeeded: false,
    toBeDeleted: false,
};
export const WithdrawMsgState = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.msgHeight.isZero()) {
            writer.uint32(8).int64(message.msgHeight);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        if (message.executed === true) {
            writer.uint32(24).bool(message.executed);
        }
        if (message.succeeded === true) {
            writer.uint32(32).bool(message.succeeded);
        }
        if (message.toBeDeleted === true) {
            writer.uint32(40).bool(message.toBeDeleted);
        }
        if (message.msg !== undefined) {
            MsgWithdrawWithinBatch.encode(message.msg, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseWithdrawMsgState };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgHeight = reader.int64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                case 3:
                    message.executed = reader.bool();
                    break;
                case 4:
                    message.succeeded = reader.bool();
                    break;
                case 5:
                    message.toBeDeleted = reader.bool();
                    break;
                case 6:
                    message.msg = MsgWithdrawWithinBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseWithdrawMsgState };
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? Long.fromString(object.msgHeight)
                : Long.ZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? Long.fromString(object.msgIndex)
                : Long.UZERO;
        message.executed =
            object.executed !== undefined && object.executed !== null
                ? Boolean(object.executed)
                : false;
        message.succeeded =
            object.succeeded !== undefined && object.succeeded !== null
                ? Boolean(object.succeeded)
                : false;
        message.toBeDeleted =
            object.toBeDeleted !== undefined && object.toBeDeleted !== null
                ? Boolean(object.toBeDeleted)
                : false;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? MsgWithdrawWithinBatch.fromJSON(object.msg)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.msgHeight !== undefined &&
            (obj.msgHeight = (message.msgHeight || Long.ZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
        message.executed !== undefined && (obj.executed = message.executed);
        message.succeeded !== undefined && (obj.succeeded = message.succeeded);
        message.toBeDeleted !== undefined &&
            (obj.toBeDeleted = message.toBeDeleted);
        message.msg !== undefined &&
            (obj.msg = message.msg
                ? MsgWithdrawWithinBatch.toJSON(message.msg)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseWithdrawMsgState };
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? Long.fromValue(object.msgHeight)
                : Long.ZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? Long.fromValue(object.msgIndex)
                : Long.UZERO;
        message.executed = object.executed ?? false;
        message.succeeded = object.succeeded ?? false;
        message.toBeDeleted = object.toBeDeleted ?? false;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? MsgWithdrawWithinBatch.fromPartial(object.msg)
                : undefined;
        return message;
    },
};
const baseSwapMsgState = {
    msgHeight: Long.ZERO,
    msgIndex: Long.UZERO,
    executed: false,
    succeeded: false,
    toBeDeleted: false,
    orderExpiryHeight: Long.ZERO,
};
export const SwapMsgState = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.msgHeight.isZero()) {
            writer.uint32(8).int64(message.msgHeight);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        if (message.executed === true) {
            writer.uint32(24).bool(message.executed);
        }
        if (message.succeeded === true) {
            writer.uint32(32).bool(message.succeeded);
        }
        if (message.toBeDeleted === true) {
            writer.uint32(40).bool(message.toBeDeleted);
        }
        if (!message.orderExpiryHeight.isZero()) {
            writer.uint32(48).int64(message.orderExpiryHeight);
        }
        if (message.exchangedOfferCoin !== undefined) {
            Coin.encode(message.exchangedOfferCoin, writer.uint32(58).fork()).ldelim();
        }
        if (message.remainingOfferCoin !== undefined) {
            Coin.encode(message.remainingOfferCoin, writer.uint32(66).fork()).ldelim();
        }
        if (message.reservedOfferCoinFee !== undefined) {
            Coin.encode(message.reservedOfferCoinFee, writer.uint32(74).fork()).ldelim();
        }
        if (message.msg !== undefined) {
            MsgSwapWithinBatch.encode(message.msg, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSwapMsgState };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgHeight = reader.int64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                case 3:
                    message.executed = reader.bool();
                    break;
                case 4:
                    message.succeeded = reader.bool();
                    break;
                case 5:
                    message.toBeDeleted = reader.bool();
                    break;
                case 6:
                    message.orderExpiryHeight = reader.int64();
                    break;
                case 7:
                    message.exchangedOfferCoin = Coin.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.remainingOfferCoin = Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.reservedOfferCoinFee = Coin.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.msg = MsgSwapWithinBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSwapMsgState };
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? Long.fromString(object.msgHeight)
                : Long.ZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? Long.fromString(object.msgIndex)
                : Long.UZERO;
        message.executed =
            object.executed !== undefined && object.executed !== null
                ? Boolean(object.executed)
                : false;
        message.succeeded =
            object.succeeded !== undefined && object.succeeded !== null
                ? Boolean(object.succeeded)
                : false;
        message.toBeDeleted =
            object.toBeDeleted !== undefined && object.toBeDeleted !== null
                ? Boolean(object.toBeDeleted)
                : false;
        message.orderExpiryHeight =
            object.orderExpiryHeight !== undefined &&
                object.orderExpiryHeight !== null
                ? Long.fromString(object.orderExpiryHeight)
                : Long.ZERO;
        message.exchangedOfferCoin =
            object.exchangedOfferCoin !== undefined &&
                object.exchangedOfferCoin !== null
                ? Coin.fromJSON(object.exchangedOfferCoin)
                : undefined;
        message.remainingOfferCoin =
            object.remainingOfferCoin !== undefined &&
                object.remainingOfferCoin !== null
                ? Coin.fromJSON(object.remainingOfferCoin)
                : undefined;
        message.reservedOfferCoinFee =
            object.reservedOfferCoinFee !== undefined &&
                object.reservedOfferCoinFee !== null
                ? Coin.fromJSON(object.reservedOfferCoinFee)
                : undefined;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? MsgSwapWithinBatch.fromJSON(object.msg)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.msgHeight !== undefined &&
            (obj.msgHeight = (message.msgHeight || Long.ZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
        message.executed !== undefined && (obj.executed = message.executed);
        message.succeeded !== undefined && (obj.succeeded = message.succeeded);
        message.toBeDeleted !== undefined &&
            (obj.toBeDeleted = message.toBeDeleted);
        message.orderExpiryHeight !== undefined &&
            (obj.orderExpiryHeight = (message.orderExpiryHeight || Long.ZERO).toString());
        message.exchangedOfferCoin !== undefined &&
            (obj.exchangedOfferCoin = message.exchangedOfferCoin
                ? Coin.toJSON(message.exchangedOfferCoin)
                : undefined);
        message.remainingOfferCoin !== undefined &&
            (obj.remainingOfferCoin = message.remainingOfferCoin
                ? Coin.toJSON(message.remainingOfferCoin)
                : undefined);
        message.reservedOfferCoinFee !== undefined &&
            (obj.reservedOfferCoinFee = message.reservedOfferCoinFee
                ? Coin.toJSON(message.reservedOfferCoinFee)
                : undefined);
        message.msg !== undefined &&
            (obj.msg = message.msg
                ? MsgSwapWithinBatch.toJSON(message.msg)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSwapMsgState };
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? Long.fromValue(object.msgHeight)
                : Long.ZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? Long.fromValue(object.msgIndex)
                : Long.UZERO;
        message.executed = object.executed ?? false;
        message.succeeded = object.succeeded ?? false;
        message.toBeDeleted = object.toBeDeleted ?? false;
        message.orderExpiryHeight =
            object.orderExpiryHeight !== undefined &&
                object.orderExpiryHeight !== null
                ? Long.fromValue(object.orderExpiryHeight)
                : Long.ZERO;
        message.exchangedOfferCoin =
            object.exchangedOfferCoin !== undefined &&
                object.exchangedOfferCoin !== null
                ? Coin.fromPartial(object.exchangedOfferCoin)
                : undefined;
        message.remainingOfferCoin =
            object.remainingOfferCoin !== undefined &&
                object.remainingOfferCoin !== null
                ? Coin.fromPartial(object.remainingOfferCoin)
                : undefined;
        message.reservedOfferCoinFee =
            object.reservedOfferCoinFee !== undefined &&
                object.reservedOfferCoinFee !== null
                ? Coin.fromPartial(object.reservedOfferCoinFee)
                : undefined;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? MsgSwapWithinBatch.fromPartial(object.msg)
                : undefined;
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
//# sourceMappingURL=liquidity.js.map
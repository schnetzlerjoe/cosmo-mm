/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Pool, PoolBatch, Params, SwapMsgState, DepositMsgState, WithdrawMsgState, } from "../../../tendermint/liquidity/v1beta1/liquidity";
import { PageRequest, PageResponse } from "../../../cosmos_proto/pagination";
export const protobufPackage = "tendermint.liquidity.v1beta1";
const baseQueryLiquidityPoolRequest = { poolId: Long.UZERO };
export const QueryLiquidityPoolRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLiquidityPoolRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryLiquidityPoolRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromString(object.poolId)
                : Long.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLiquidityPoolRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromValue(object.poolId)
                : Long.UZERO;
        return message;
    },
};
const baseQueryLiquidityPoolResponse = {};
export const QueryLiquidityPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pool !== undefined) {
            Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLiquidityPoolResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = Pool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryLiquidityPoolResponse,
        };
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? Pool.fromJSON(object.pool)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined &&
            (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLiquidityPoolResponse,
        };
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? Pool.fromPartial(object.pool)
                : undefined;
        return message;
    },
};
const baseQueryLiquidityPoolByPoolCoinDenomRequest = {
    poolCoinDenom: "",
};
export const QueryLiquidityPoolByPoolCoinDenomRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.poolCoinDenom !== "") {
            writer.uint32(10).string(message.poolCoinDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLiquidityPoolByPoolCoinDenomRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = {
            ...baseQueryLiquidityPoolByPoolCoinDenomRequest,
        };
        message.poolCoinDenom =
            object.poolCoinDenom !== undefined && object.poolCoinDenom !== null
                ? String(object.poolCoinDenom)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolCoinDenom !== undefined &&
            (obj.poolCoinDenom = message.poolCoinDenom);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLiquidityPoolByPoolCoinDenomRequest,
        };
        message.poolCoinDenom = object.poolCoinDenom ?? "";
        return message;
    },
};
const baseQueryLiquidityPoolByReserveAccRequest = { reserveAcc: "" };
export const QueryLiquidityPoolByReserveAccRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.reserveAcc !== "") {
            writer.uint32(10).string(message.reserveAcc);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLiquidityPoolByReserveAccRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reserveAcc = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryLiquidityPoolByReserveAccRequest,
        };
        message.reserveAcc =
            object.reserveAcc !== undefined && object.reserveAcc !== null
                ? String(object.reserveAcc)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.reserveAcc !== undefined && (obj.reserveAcc = message.reserveAcc);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLiquidityPoolByReserveAccRequest,
        };
        message.reserveAcc = object.reserveAcc ?? "";
        return message;
    },
};
const baseQueryLiquidityPoolBatchRequest = { poolId: Long.UZERO };
export const QueryLiquidityPoolBatchRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLiquidityPoolBatchRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryLiquidityPoolBatchRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromString(object.poolId)
                : Long.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLiquidityPoolBatchRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromValue(object.poolId)
                : Long.UZERO;
        return message;
    },
};
const baseQueryLiquidityPoolBatchResponse = {};
export const QueryLiquidityPoolBatchResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.batch !== undefined) {
            PoolBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLiquidityPoolBatchResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = PoolBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryLiquidityPoolBatchResponse,
        };
        message.batch =
            object.batch !== undefined && object.batch !== null
                ? PoolBatch.fromJSON(object.batch)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.batch !== undefined &&
            (obj.batch = message.batch ? PoolBatch.toJSON(message.batch) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLiquidityPoolBatchResponse,
        };
        message.batch =
            object.batch !== undefined && object.batch !== null
                ? PoolBatch.fromPartial(object.batch)
                : undefined;
        return message;
    },
};
const baseQueryLiquidityPoolsRequest = {};
export const QueryLiquidityPoolsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLiquidityPoolsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryLiquidityPoolsRequest,
        };
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLiquidityPoolsRequest,
        };
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryLiquidityPoolsResponse = {};
export const QueryLiquidityPoolsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pools) {
            Pool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryLiquidityPoolsResponse,
        };
        message.pools = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(Pool.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryLiquidityPoolsResponse,
        };
        message.pools = (object.pools ?? []).map((e) => Pool.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map((e) => (e ? Pool.toJSON(e) : undefined));
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryLiquidityPoolsResponse,
        };
        message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromJSON(object.params)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        message.params =
            object.params !== undefined && object.params !== null
                ? Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchSwapMsgsRequest = { poolId: Long.UZERO };
export const QueryPoolBatchSwapMsgsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPoolBatchSwapMsgsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryPoolBatchSwapMsgsRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromString(object.poolId)
                : Long.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolBatchSwapMsgsRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromValue(object.poolId)
                : Long.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchSwapMsgRequest = {
    poolId: Long.UZERO,
    msgIndex: Long.UZERO,
};
export const QueryPoolBatchSwapMsgRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPoolBatchSwapMsgRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryPoolBatchSwapMsgRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromString(object.poolId)
                : Long.UZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? Long.fromString(object.msgIndex)
                : Long.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolBatchSwapMsgRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromValue(object.poolId)
                : Long.UZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? Long.fromValue(object.msgIndex)
                : Long.UZERO;
        return message;
    },
};
const baseQueryPoolBatchSwapMsgsResponse = {};
export const QueryPoolBatchSwapMsgsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.swaps) {
            SwapMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPoolBatchSwapMsgsResponse,
        };
        message.swaps = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swaps.push(SwapMsgState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryPoolBatchSwapMsgsResponse,
        };
        message.swaps = (object.swaps ?? []).map((e) => SwapMsgState.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.swaps) {
            obj.swaps = message.swaps.map((e) => e ? SwapMsgState.toJSON(e) : undefined);
        }
        else {
            obj.swaps = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolBatchSwapMsgsResponse,
        };
        message.swaps = object.swaps?.map((e) => SwapMsgState.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchSwapMsgResponse = {};
export const QueryPoolBatchSwapMsgResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.swap !== undefined) {
            SwapMsgState.encode(message.swap, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPoolBatchSwapMsgResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swap = SwapMsgState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryPoolBatchSwapMsgResponse,
        };
        message.swap =
            object.swap !== undefined && object.swap !== null
                ? SwapMsgState.fromJSON(object.swap)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.swap !== undefined &&
            (obj.swap = message.swap ? SwapMsgState.toJSON(message.swap) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolBatchSwapMsgResponse,
        };
        message.swap =
            object.swap !== undefined && object.swap !== null
                ? SwapMsgState.fromPartial(object.swap)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchDepositMsgsRequest = { poolId: Long.UZERO };
export const QueryPoolBatchDepositMsgsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPoolBatchDepositMsgsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryPoolBatchDepositMsgsRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromString(object.poolId)
                : Long.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolBatchDepositMsgsRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromValue(object.poolId)
                : Long.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchDepositMsgRequest = {
    poolId: Long.UZERO,
    msgIndex: Long.UZERO,
};
export const QueryPoolBatchDepositMsgRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPoolBatchDepositMsgRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryPoolBatchDepositMsgRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromString(object.poolId)
                : Long.UZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? Long.fromString(object.msgIndex)
                : Long.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolBatchDepositMsgRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromValue(object.poolId)
                : Long.UZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? Long.fromValue(object.msgIndex)
                : Long.UZERO;
        return message;
    },
};
const baseQueryPoolBatchDepositMsgsResponse = {};
export const QueryPoolBatchDepositMsgsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.deposits) {
            DepositMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPoolBatchDepositMsgsResponse,
        };
        message.deposits = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits.push(DepositMsgState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryPoolBatchDepositMsgsResponse,
        };
        message.deposits = (object.deposits ?? []).map((e) => DepositMsgState.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map((e) => e ? DepositMsgState.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolBatchDepositMsgsResponse,
        };
        message.deposits =
            object.deposits?.map((e) => DepositMsgState.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchDepositMsgResponse = {};
export const QueryPoolBatchDepositMsgResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.deposit !== undefined) {
            DepositMsgState.encode(message.deposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPoolBatchDepositMsgResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposit = DepositMsgState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryPoolBatchDepositMsgResponse,
        };
        message.deposit =
            object.deposit !== undefined && object.deposit !== null
                ? DepositMsgState.fromJSON(object.deposit)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deposit !== undefined &&
            (obj.deposit = message.deposit
                ? DepositMsgState.toJSON(message.deposit)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolBatchDepositMsgResponse,
        };
        message.deposit =
            object.deposit !== undefined && object.deposit !== null
                ? DepositMsgState.fromPartial(object.deposit)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchWithdrawMsgsRequest = { poolId: Long.UZERO };
export const QueryPoolBatchWithdrawMsgsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPoolBatchWithdrawMsgsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryPoolBatchWithdrawMsgsRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromString(object.poolId)
                : Long.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolBatchWithdrawMsgsRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromValue(object.poolId)
                : Long.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchWithdrawMsgRequest = {
    poolId: Long.UZERO,
    msgIndex: Long.UZERO,
};
export const QueryPoolBatchWithdrawMsgRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPoolBatchWithdrawMsgRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryPoolBatchWithdrawMsgRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromString(object.poolId)
                : Long.UZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? Long.fromString(object.msgIndex)
                : Long.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || Long.UZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolBatchWithdrawMsgRequest,
        };
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? Long.fromValue(object.poolId)
                : Long.UZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? Long.fromValue(object.msgIndex)
                : Long.UZERO;
        return message;
    },
};
const baseQueryPoolBatchWithdrawMsgsResponse = {};
export const QueryPoolBatchWithdrawMsgsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.withdraws) {
            WithdrawMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPoolBatchWithdrawMsgsResponse,
        };
        message.withdraws = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdraws.push(WithdrawMsgState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryPoolBatchWithdrawMsgsResponse,
        };
        message.withdraws = (object.withdraws ?? []).map((e) => WithdrawMsgState.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.withdraws) {
            obj.withdraws = message.withdraws.map((e) => e ? WithdrawMsgState.toJSON(e) : undefined);
        }
        else {
            obj.withdraws = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolBatchWithdrawMsgsResponse,
        };
        message.withdraws =
            object.withdraws?.map((e) => WithdrawMsgState.fromPartial(e)) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchWithdrawMsgResponse = {};
export const QueryPoolBatchWithdrawMsgResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.withdraw !== undefined) {
            WithdrawMsgState.encode(message.withdraw, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryPoolBatchWithdrawMsgResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdraw = WithdrawMsgState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryPoolBatchWithdrawMsgResponse,
        };
        message.withdraw =
            object.withdraw !== undefined && object.withdraw !== null
                ? WithdrawMsgState.fromJSON(object.withdraw)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.withdraw !== undefined &&
            (obj.withdraw = message.withdraw
                ? WithdrawMsgState.toJSON(message.withdraw)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryPoolBatchWithdrawMsgResponse,
        };
        message.withdraw =
            object.withdraw !== undefined && object.withdraw !== null
                ? WithdrawMsgState.fromPartial(object.withdraw)
                : undefined;
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.LiquidityPools = this.LiquidityPools.bind(this);
        this.LiquidityPool = this.LiquidityPool.bind(this);
        this.LiquidityPoolByPoolCoinDenom =
            this.LiquidityPoolByPoolCoinDenom.bind(this);
        this.LiquidityPoolByReserveAcc = this.LiquidityPoolByReserveAcc.bind(this);
        this.LiquidityPoolBatch = this.LiquidityPoolBatch.bind(this);
        this.PoolBatchSwapMsgs = this.PoolBatchSwapMsgs.bind(this);
        this.PoolBatchSwapMsg = this.PoolBatchSwapMsg.bind(this);
        this.PoolBatchDepositMsgs = this.PoolBatchDepositMsgs.bind(this);
        this.PoolBatchDepositMsg = this.PoolBatchDepositMsg.bind(this);
        this.PoolBatchWithdrawMsgs = this.PoolBatchWithdrawMsgs.bind(this);
        this.PoolBatchWithdrawMsg = this.PoolBatchWithdrawMsg.bind(this);
        this.Params = this.Params.bind(this);
    }
    LiquidityPools(request) {
        const data = QueryLiquidityPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPools", data);
        return promise.then((data) => QueryLiquidityPoolsResponse.decode(new _m0.Reader(data)));
    }
    LiquidityPool(request) {
        const data = QueryLiquidityPoolRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPool", data);
        return promise.then((data) => QueryLiquidityPoolResponse.decode(new _m0.Reader(data)));
    }
    LiquidityPoolByPoolCoinDenom(request) {
        const data = QueryLiquidityPoolByPoolCoinDenomRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPoolByPoolCoinDenom", data);
        return promise.then((data) => QueryLiquidityPoolResponse.decode(new _m0.Reader(data)));
    }
    LiquidityPoolByReserveAcc(request) {
        const data = QueryLiquidityPoolByReserveAccRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPoolByReserveAcc", data);
        return promise.then((data) => QueryLiquidityPoolResponse.decode(new _m0.Reader(data)));
    }
    LiquidityPoolBatch(request) {
        const data = QueryLiquidityPoolBatchRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPoolBatch", data);
        return promise.then((data) => QueryLiquidityPoolBatchResponse.decode(new _m0.Reader(data)));
    }
    PoolBatchSwapMsgs(request) {
        const data = QueryPoolBatchSwapMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchSwapMsgs", data);
        return promise.then((data) => QueryPoolBatchSwapMsgsResponse.decode(new _m0.Reader(data)));
    }
    PoolBatchSwapMsg(request) {
        const data = QueryPoolBatchSwapMsgRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchSwapMsg", data);
        return promise.then((data) => QueryPoolBatchSwapMsgResponse.decode(new _m0.Reader(data)));
    }
    PoolBatchDepositMsgs(request) {
        const data = QueryPoolBatchDepositMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchDepositMsgs", data);
        return promise.then((data) => QueryPoolBatchDepositMsgsResponse.decode(new _m0.Reader(data)));
    }
    PoolBatchDepositMsg(request) {
        const data = QueryPoolBatchDepositMsgRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchDepositMsg", data);
        return promise.then((data) => QueryPoolBatchDepositMsgResponse.decode(new _m0.Reader(data)));
    }
    PoolBatchWithdrawMsgs(request) {
        const data = QueryPoolBatchWithdrawMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchWithdrawMsgs", data);
        return promise.then((data) => QueryPoolBatchWithdrawMsgsResponse.decode(new _m0.Reader(data)));
    }
    PoolBatchWithdrawMsg(request) {
        const data = QueryPoolBatchWithdrawMsgRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchWithdrawMsg", data);
        return promise.then((data) => QueryPoolBatchWithdrawMsgResponse.decode(new _m0.Reader(data)));
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
//# sourceMappingURL=query.js.map
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos_proto/coin";
export declare const protobufPackage = "tendermint.liquidity.v1beta1";
/**
 * MsgCreatePool defines an sdk.Msg type that supports submitting a create liquidity pool tx.
 *
 * See: https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgCreatePool {
    poolCreatorAddress: string;
    /** id of the target pool type, must match the value in the pool. Only pool-type-id 1 is supported. */
    poolTypeId: number;
    /** reserve coin pair of the pool to deposit. */
    depositCoins: Coin[];
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponse {
}
/**
 * `MsgDepositWithinBatch defines` an `sdk.Msg` type that supports submitting
 * a deposit request to the batch of the liquidity pool.
 * Deposit is submitted to the batch of the Liquidity pool with the specified
 * `pool_id`, `deposit_coins` for reserve.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other requests.
 *
 * See: https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgDepositWithinBatch {
    depositorAddress: string;
    /** id of the target pool */
    poolId: Long;
    /** reserve coin pair of the pool to deposit */
    depositCoins: Coin[];
}
/** MsgDepositWithinBatchResponse defines the Msg/DepositWithinBatch response type. */
export interface MsgDepositWithinBatchResponse {
}
/**
 * `MsgWithdrawWithinBatch` defines an `sdk.Msg` type that supports submitting
 * a withdraw request to the batch of the liquidity pool.
 * Withdraw is submitted to the batch from the Liquidity pool with the
 * specified `pool_id`, `pool_coin` of the pool.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other requests.
 *
 * See: https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgWithdrawWithinBatch {
    withdrawerAddress: string;
    /** id of the target pool */
    poolId: Long;
    poolCoin?: Coin;
}
/** MsgWithdrawWithinBatchResponse defines the Msg/WithdrawWithinBatch response type. */
export interface MsgWithdrawWithinBatchResponse {
}
/**
 * `MsgSwapWithinBatch` defines an sdk.Msg type that supports submitting a swap offer request to the batch of the liquidity pool.
 * Submit swap offer to the liquidity pool batch with the specified the `pool_id`, `swap_type_id`,
 * `demand_coin_denom` with the coin and the price you're offering
 * and `offer_coin_fee` must be half of offer coin amount * current `params.swap_fee_rate` and ceil for reservation to pay fees.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other requests.
 * You must request the same fields as the pool.
 * Only the default `swap_type_id` 1 is supported.
 *
 * See: https://github.com/tendermint/liquidity/tree/develop/doc
 * https://github.com/tendermint/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgSwapWithinBatch {
    /** address of swap requester */
    swapRequesterAddress: string;
    /** id of swap type, must match the value in the pool. Only `swap_type_id` 1 is supported. */
    poolId: Long;
    /** id of swap type. Must match the value in the pool. */
    swapTypeId: number;
    /** offer sdk.coin for the swap request, must match the denom in the pool. */
    offerCoin?: Coin;
    /** denom of demand coin to be exchanged on the swap request, must match the denom in the pool. */
    demandCoinDenom: string;
    /** half of offer coin amount * params.swap_fee_rate and ceil for reservation to pay fees. */
    offerCoinFee?: Coin;
    /**
     * limit order price for the order, the price is the exchange ratio of X/Y
     * where X is the amount of the first coin and Y is the amount
     * of the second coin when their denoms are sorted alphabetically.
     */
    orderPrice: string;
}
/** MsgSwapWithinBatchResponse defines the Msg/Swap response type. */
export interface MsgSwapWithinBatchResponse {
}
export declare const MsgCreatePool: {
    encode(message: MsgCreatePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreatePool;
    fromJSON(object: any): MsgCreatePool;
    toJSON(message: MsgCreatePool): unknown;
    fromPartial<I extends {
        poolCreatorAddress?: string | undefined;
        poolTypeId?: number | undefined;
        depositCoins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        poolCreatorAddress?: string | undefined;
        poolTypeId?: number | undefined;
        depositCoins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["depositCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["depositCoins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreatePool>, never>>(object: I): MsgCreatePool;
};
export declare const MsgCreatePoolResponse: {
    encode(_: MsgCreatePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreatePoolResponse;
    fromJSON(_: any): MsgCreatePoolResponse;
    toJSON(_: MsgCreatePoolResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreatePoolResponse;
};
export declare const MsgDepositWithinBatch: {
    encode(message: MsgDepositWithinBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDepositWithinBatch;
    fromJSON(object: any): MsgDepositWithinBatch;
    toJSON(message: MsgDepositWithinBatch): unknown;
    fromPartial<I extends {
        depositorAddress?: string | undefined;
        poolId?: string | number | Long.Long | undefined;
        depositCoins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        depositorAddress?: string | undefined;
        poolId?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["poolId"], keyof Long.Long>, never>) | undefined;
        depositCoins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["depositCoins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["depositCoins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgDepositWithinBatch>, never>>(object: I): MsgDepositWithinBatch;
};
export declare const MsgDepositWithinBatchResponse: {
    encode(_: MsgDepositWithinBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDepositWithinBatchResponse;
    fromJSON(_: any): MsgDepositWithinBatchResponse;
    toJSON(_: MsgDepositWithinBatchResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDepositWithinBatchResponse;
};
export declare const MsgWithdrawWithinBatch: {
    encode(message: MsgWithdrawWithinBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgWithdrawWithinBatch;
    fromJSON(object: any): MsgWithdrawWithinBatch;
    toJSON(message: MsgWithdrawWithinBatch): unknown;
    fromPartial<I extends {
        withdrawerAddress?: string | undefined;
        poolId?: string | number | Long.Long | undefined;
        poolCoin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        withdrawerAddress?: string | undefined;
        poolId?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["poolId"], keyof Long.Long>, never>) | undefined;
        poolCoin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["poolCoin"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgWithdrawWithinBatch>, never>>(object: I): MsgWithdrawWithinBatch;
};
export declare const MsgWithdrawWithinBatchResponse: {
    encode(_: MsgWithdrawWithinBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgWithdrawWithinBatchResponse;
    fromJSON(_: any): MsgWithdrawWithinBatchResponse;
    toJSON(_: MsgWithdrawWithinBatchResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgWithdrawWithinBatchResponse;
};
export declare const MsgSwapWithinBatch: {
    encode(message: MsgSwapWithinBatch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgSwapWithinBatch;
    fromJSON(object: any): MsgSwapWithinBatch;
    toJSON(message: MsgSwapWithinBatch): unknown;
    fromPartial<I extends {
        swapRequesterAddress?: string | undefined;
        poolId?: string | number | Long.Long | undefined;
        swapTypeId?: number | undefined;
        offerCoin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        demandCoinDenom?: string | undefined;
        offerCoinFee?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        orderPrice?: string | undefined;
    } & {
        swapRequesterAddress?: string | undefined;
        poolId?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["poolId"], keyof Long.Long>, never>) | undefined;
        swapTypeId?: number | undefined;
        offerCoin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["offerCoin"], keyof Coin>, never>) | undefined;
        demandCoinDenom?: string | undefined;
        offerCoinFee?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["offerCoinFee"], keyof Coin>, never>) | undefined;
        orderPrice?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgSwapWithinBatch>, never>>(object: I): MsgSwapWithinBatch;
};
export declare const MsgSwapWithinBatchResponse: {
    encode(_: MsgSwapWithinBatchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgSwapWithinBatchResponse;
    fromJSON(_: any): MsgSwapWithinBatchResponse;
    toJSON(_: MsgSwapWithinBatchResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSwapWithinBatchResponse;
};
/** Msg defines the liquidity Msg service. */
export interface Msg {
    /** Submit a create liquidity pool message. */
    CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    /** Submit a deposit to the liquidity pool batch. */
    DepositWithinBatch(request: MsgDepositWithinBatch): Promise<MsgDepositWithinBatchResponse>;
    /** Submit a withdraw from the liquidity pool batch. */
    WithdrawWithinBatch(request: MsgWithdrawWithinBatch): Promise<MsgWithdrawWithinBatchResponse>;
    /** Submit a swap to the liquidity pool batch. */
    Swap(request: MsgSwapWithinBatch): Promise<MsgSwapWithinBatchResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    DepositWithinBatch(request: MsgDepositWithinBatch): Promise<MsgDepositWithinBatchResponse>;
    WithdrawWithinBatch(request: MsgWithdrawWithinBatch): Promise<MsgWithdrawWithinBatchResponse>;
    Swap(request: MsgSwapWithinBatch): Promise<MsgSwapWithinBatchResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};

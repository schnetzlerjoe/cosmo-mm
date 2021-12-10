/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.base.query.v1beta1";
const basePageRequest = {
    offset: Long.UZERO,
    limit: Long.UZERO,
    countTotal: false,
};
export const PageRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (!message.offset.isZero()) {
            writer.uint32(16).uint64(message.offset);
        }
        if (!message.limit.isZero()) {
            writer.uint32(24).uint64(message.limit);
        }
        if (message.countTotal === true) {
            writer.uint32(32).bool(message.countTotal);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePageRequest };
        message.key = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.offset = reader.uint64();
                    break;
                case 3:
                    message.limit = reader.uint64();
                    break;
                case 4:
                    message.countTotal = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePageRequest };
        message.key =
            object.key !== undefined && object.key !== null
                ? bytesFromBase64(object.key)
                : new Uint8Array();
        message.offset =
            object.offset !== undefined && object.offset !== null
                ? Long.fromString(object.offset)
                : Long.UZERO;
        message.limit =
            object.limit !== undefined && object.limit !== null
                ? Long.fromString(object.limit)
                : Long.UZERO;
        message.countTotal =
            object.countTotal !== undefined && object.countTotal !== null
                ? Boolean(object.countTotal)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.offset !== undefined &&
            (obj.offset = (message.offset || Long.UZERO).toString());
        message.limit !== undefined &&
            (obj.limit = (message.limit || Long.UZERO).toString());
        message.countTotal !== undefined && (obj.countTotal = message.countTotal);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePageRequest };
        message.key = object.key ?? new Uint8Array();
        message.offset =
            object.offset !== undefined && object.offset !== null
                ? Long.fromValue(object.offset)
                : Long.UZERO;
        message.limit =
            object.limit !== undefined && object.limit !== null
                ? Long.fromValue(object.limit)
                : Long.UZERO;
        message.countTotal = object.countTotal ?? false;
        return message;
    },
};
const basePageResponse = { total: Long.UZERO };
export const PageResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nextKey.length !== 0) {
            writer.uint32(10).bytes(message.nextKey);
        }
        if (!message.total.isZero()) {
            writer.uint32(16).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePageResponse };
        message.nextKey = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextKey = reader.bytes();
                    break;
                case 2:
                    message.total = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePageResponse };
        message.nextKey =
            object.nextKey !== undefined && object.nextKey !== null
                ? bytesFromBase64(object.nextKey)
                : new Uint8Array();
        message.total =
            object.total !== undefined && object.total !== null
                ? Long.fromString(object.total)
                : Long.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nextKey !== undefined &&
            (obj.nextKey = base64FromBytes(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
        message.total !== undefined &&
            (obj.total = (message.total || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePageResponse };
        message.nextKey = object.nextKey ?? new Uint8Array();
        message.total =
            object.total !== undefined && object.total !== null
                ? Long.fromValue(object.total)
                : Long.UZERO;
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
//# sourceMappingURL=pagination.js.map
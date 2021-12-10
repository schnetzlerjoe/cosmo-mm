/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "google.api";
const baseHttp = { fullyDecodeReservedExpansion: false };
export const Http = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rules) {
            HttpRule.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fullyDecodeReservedExpansion === true) {
            writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttp };
        message.rules = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rules.push(HttpRule.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fullyDecodeReservedExpansion = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHttp };
        message.rules = (object.rules ?? []).map((e) => HttpRule.fromJSON(e));
        message.fullyDecodeReservedExpansion =
            object.fullyDecodeReservedExpansion !== undefined &&
                object.fullyDecodeReservedExpansion !== null
                ? Boolean(object.fullyDecodeReservedExpansion)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.rules) {
            obj.rules = message.rules.map((e) => e ? HttpRule.toJSON(e) : undefined);
        }
        else {
            obj.rules = [];
        }
        message.fullyDecodeReservedExpansion !== undefined &&
            (obj.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHttp };
        message.rules = object.rules?.map((e) => HttpRule.fromPartial(e)) || [];
        message.fullyDecodeReservedExpansion =
            object.fullyDecodeReservedExpansion ?? false;
        return message;
    },
};
const baseHttpRule = { selector: "", body: "", responseBody: "" };
export const HttpRule = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.selector !== "") {
            writer.uint32(10).string(message.selector);
        }
        if (message.get !== undefined) {
            writer.uint32(18).string(message.get);
        }
        if (message.put !== undefined) {
            writer.uint32(26).string(message.put);
        }
        if (message.post !== undefined) {
            writer.uint32(34).string(message.post);
        }
        if (message.delete !== undefined) {
            writer.uint32(42).string(message.delete);
        }
        if (message.patch !== undefined) {
            writer.uint32(50).string(message.patch);
        }
        if (message.custom !== undefined) {
            CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
        }
        if (message.body !== "") {
            writer.uint32(58).string(message.body);
        }
        if (message.responseBody !== "") {
            writer.uint32(98).string(message.responseBody);
        }
        for (const v of message.additionalBindings) {
            HttpRule.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHttpRule };
        message.additionalBindings = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.selector = reader.string();
                    break;
                case 2:
                    message.get = reader.string();
                    break;
                case 3:
                    message.put = reader.string();
                    break;
                case 4:
                    message.post = reader.string();
                    break;
                case 5:
                    message.delete = reader.string();
                    break;
                case 6:
                    message.patch = reader.string();
                    break;
                case 8:
                    message.custom = CustomHttpPattern.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.body = reader.string();
                    break;
                case 12:
                    message.responseBody = reader.string();
                    break;
                case 11:
                    message.additionalBindings.push(HttpRule.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHttpRule };
        message.selector =
            object.selector !== undefined && object.selector !== null
                ? String(object.selector)
                : "";
        message.get =
            object.get !== undefined && object.get !== null
                ? String(object.get)
                : undefined;
        message.put =
            object.put !== undefined && object.put !== null
                ? String(object.put)
                : undefined;
        message.post =
            object.post !== undefined && object.post !== null
                ? String(object.post)
                : undefined;
        message.delete =
            object.delete !== undefined && object.delete !== null
                ? String(object.delete)
                : undefined;
        message.patch =
            object.patch !== undefined && object.patch !== null
                ? String(object.patch)
                : undefined;
        message.custom =
            object.custom !== undefined && object.custom !== null
                ? CustomHttpPattern.fromJSON(object.custom)
                : undefined;
        message.body =
            object.body !== undefined && object.body !== null
                ? String(object.body)
                : "";
        message.responseBody =
            object.responseBody !== undefined && object.responseBody !== null
                ? String(object.responseBody)
                : "";
        message.additionalBindings = (object.additionalBindings ?? []).map((e) => HttpRule.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.selector !== undefined && (obj.selector = message.selector);
        message.get !== undefined && (obj.get = message.get);
        message.put !== undefined && (obj.put = message.put);
        message.post !== undefined && (obj.post = message.post);
        message.delete !== undefined && (obj.delete = message.delete);
        message.patch !== undefined && (obj.patch = message.patch);
        message.custom !== undefined &&
            (obj.custom = message.custom
                ? CustomHttpPattern.toJSON(message.custom)
                : undefined);
        message.body !== undefined && (obj.body = message.body);
        message.responseBody !== undefined &&
            (obj.responseBody = message.responseBody);
        if (message.additionalBindings) {
            obj.additionalBindings = message.additionalBindings.map((e) => e ? HttpRule.toJSON(e) : undefined);
        }
        else {
            obj.additionalBindings = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHttpRule };
        message.selector = object.selector ?? "";
        message.get = object.get ?? undefined;
        message.put = object.put ?? undefined;
        message.post = object.post ?? undefined;
        message.delete = object.delete ?? undefined;
        message.patch = object.patch ?? undefined;
        message.custom =
            object.custom !== undefined && object.custom !== null
                ? CustomHttpPattern.fromPartial(object.custom)
                : undefined;
        message.body = object.body ?? "";
        message.responseBody = object.responseBody ?? "";
        message.additionalBindings =
            object.additionalBindings?.map((e) => HttpRule.fromPartial(e)) || [];
        return message;
    },
};
const baseCustomHttpPattern = { kind: "", path: "" };
export const CustomHttpPattern = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.kind !== "") {
            writer.uint32(10).string(message.kind);
        }
        if (message.path !== "") {
            writer.uint32(18).string(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCustomHttpPattern };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.kind = reader.string();
                    break;
                case 2:
                    message.path = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseCustomHttpPattern };
        message.kind =
            object.kind !== undefined && object.kind !== null
                ? String(object.kind)
                : "";
        message.path =
            object.path !== undefined && object.path !== null
                ? String(object.path)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.kind !== undefined && (obj.kind = message.kind);
        message.path !== undefined && (obj.path = message.path);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCustomHttpPattern };
        message.kind = object.kind ?? "";
        message.path = object.path ?? "";
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
//# sourceMappingURL=http.js.map
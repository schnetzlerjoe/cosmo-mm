/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
export const protobufPackage = "google.protobuf";
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 */
export var NullValue;
(function (NullValue) {
    /** NULL_VALUE - Null value. */
    NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
    NullValue[NullValue["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NullValue || (NullValue = {}));
export function nullValueFromJSON(object) {
    switch (object) {
        case 0:
        case "NULL_VALUE":
            return NullValue.NULL_VALUE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return NullValue.UNRECOGNIZED;
    }
}
export function nullValueToJSON(object) {
    switch (object) {
        case NullValue.NULL_VALUE:
            return "NULL_VALUE";
        default:
            return "UNKNOWN";
    }
}
const baseStruct = {};
export const Struct = {
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.fields).forEach(([key, value]) => {
            if (value !== undefined) {
                Struct_FieldsEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStruct };
        message.fields = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.fields[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStruct };
        message.fields = Object.entries(object.fields ?? {}).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.fields = {};
        if (message.fields) {
            Object.entries(message.fields).forEach(([k, v]) => {
                obj.fields[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStruct };
        message.fields = Object.entries(object.fields ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
    wrap(object) {
        const struct = Struct.fromPartial({});
        if (object !== undefined) {
            Object.keys(object).forEach((key) => {
                struct.fields[key] = object[key];
            });
        }
        return struct;
    },
    unwrap(message) {
        const object = {};
        Object.keys(message.fields).forEach((key) => {
            object[key] = message.fields[key];
        });
        return object;
    },
};
const baseStruct_FieldsEntry = { key: "" };
export const Struct_FieldsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseStruct_FieldsEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseStruct_FieldsEntry };
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value = object.value;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseStruct_FieldsEntry };
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
const baseValue = {};
export const Value = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nullValue !== undefined) {
            writer.uint32(8).int32(message.nullValue);
        }
        if (message.numberValue !== undefined) {
            writer.uint32(17).double(message.numberValue);
        }
        if (message.stringValue !== undefined) {
            writer.uint32(26).string(message.stringValue);
        }
        if (message.boolValue !== undefined) {
            writer.uint32(32).bool(message.boolValue);
        }
        if (message.structValue !== undefined) {
            Struct.encode(Struct.wrap(message.structValue), writer.uint32(42).fork()).ldelim();
        }
        if (message.listValue !== undefined) {
            ListValue.encode(ListValue.wrap(message.listValue), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseValue };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nullValue = reader.int32();
                    break;
                case 2:
                    message.numberValue = reader.double();
                    break;
                case 3:
                    message.stringValue = reader.string();
                    break;
                case 4:
                    message.boolValue = reader.bool();
                    break;
                case 5:
                    message.structValue = Struct.unwrap(Struct.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.listValue = ListValue.unwrap(ListValue.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseValue };
        message.nullValue =
            object.nullValue !== undefined && object.nullValue !== null
                ? nullValueFromJSON(object.nullValue)
                : undefined;
        message.numberValue =
            object.numberValue !== undefined && object.numberValue !== null
                ? Number(object.numberValue)
                : undefined;
        message.stringValue =
            object.stringValue !== undefined && object.stringValue !== null
                ? String(object.stringValue)
                : undefined;
        message.boolValue =
            object.boolValue !== undefined && object.boolValue !== null
                ? Boolean(object.boolValue)
                : undefined;
        message.structValue =
            typeof object.structValue === "object" ? object.structValue : undefined;
        message.listValue = Array.isArray(object?.listValue)
            ? [...object.listValue]
            : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nullValue !== undefined &&
            (obj.nullValue =
                message.nullValue !== undefined
                    ? nullValueToJSON(message.nullValue)
                    : undefined);
        message.numberValue !== undefined &&
            (obj.numberValue = message.numberValue);
        message.stringValue !== undefined &&
            (obj.stringValue = message.stringValue);
        message.boolValue !== undefined && (obj.boolValue = message.boolValue);
        message.structValue !== undefined &&
            (obj.structValue = message.structValue);
        message.listValue !== undefined && (obj.listValue = message.listValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseValue };
        message.nullValue = object.nullValue ?? undefined;
        message.numberValue = object.numberValue ?? undefined;
        message.stringValue = object.stringValue ?? undefined;
        message.boolValue = object.boolValue ?? undefined;
        message.structValue = object.structValue ?? undefined;
        message.listValue = object.listValue ?? undefined;
        return message;
    },
    wrap(value) {
        if (value === null) {
            return { nullValue: NullValue.NULL_VALUE };
        }
        else if (typeof value === "boolean") {
            return { boolValue: value };
        }
        else if (typeof value === "number") {
            return { numberValue: value };
        }
        else if (typeof value === "string") {
            return { stringValue: value };
        }
        else if (Array.isArray(value)) {
            return { listValue: value };
        }
        else if (typeof value === "object") {
            return { structValue: value };
        }
        else if (typeof value === "undefined") {
            return {};
        }
        else {
            throw new Error("Unsupported any value type: " + typeof value);
        }
    },
    unwrap(message) {
        if (message?.stringValue !== undefined) {
            return message.stringValue;
        }
        else if (message?.numberValue !== undefined) {
            return message.numberValue;
        }
        else if (message?.boolValue !== undefined) {
            return message.boolValue;
        }
        else if (message?.structValue !== undefined) {
            return message.structValue;
        }
        else if (message?.listValue !== undefined) {
            return message.listValue;
        }
        else if (message?.nullValue !== undefined) {
            return null;
        }
        return undefined;
    },
};
const baseListValue = {};
export const ListValue = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.values) {
            Value.encode(Value.wrap(v), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseListValue };
        message.values = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.values.push(Value.unwrap(Value.decode(reader, reader.uint32())));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseListValue };
        message.values = Array.isArray(object?.values) ? [...object.values] : [];
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseListValue };
        message.values = object.values?.map((e) => e) || [];
        return message;
    },
    wrap(value) {
        return { values: value };
    },
    unwrap(message) {
        return message.values;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
//# sourceMappingURL=struct.js.map
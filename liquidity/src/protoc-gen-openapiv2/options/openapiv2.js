/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Value } from "../../google/protobuf/struct";
export const protobufPackage = "grpc.gateway.protoc_gen_openapiv2.options";
/**
 * Scheme describes the schemes supported by the OpenAPI Swagger
 * and Operation objects.
 */
export var Scheme;
(function (Scheme) {
    Scheme[Scheme["UNKNOWN"] = 0] = "UNKNOWN";
    Scheme[Scheme["HTTP"] = 1] = "HTTP";
    Scheme[Scheme["HTTPS"] = 2] = "HTTPS";
    Scheme[Scheme["WS"] = 3] = "WS";
    Scheme[Scheme["WSS"] = 4] = "WSS";
    Scheme[Scheme["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Scheme || (Scheme = {}));
export function schemeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return Scheme.UNKNOWN;
        case 1:
        case "HTTP":
            return Scheme.HTTP;
        case 2:
        case "HTTPS":
            return Scheme.HTTPS;
        case 3:
        case "WS":
            return Scheme.WS;
        case 4:
        case "WSS":
            return Scheme.WSS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Scheme.UNRECOGNIZED;
    }
}
export function schemeToJSON(object) {
    switch (object) {
        case Scheme.UNKNOWN:
            return "UNKNOWN";
        case Scheme.HTTP:
            return "HTTP";
        case Scheme.HTTPS:
            return "HTTPS";
        case Scheme.WS:
            return "WS";
        case Scheme.WSS:
            return "WSS";
        default:
            return "UNKNOWN";
    }
}
export var JSONSchema_JSONSchemaSimpleTypes;
(function (JSONSchema_JSONSchemaSimpleTypes) {
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["UNKNOWN"] = 0] = "UNKNOWN";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["ARRAY"] = 1] = "ARRAY";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["BOOLEAN"] = 2] = "BOOLEAN";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["INTEGER"] = 3] = "INTEGER";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["NULL"] = 4] = "NULL";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["NUMBER"] = 5] = "NUMBER";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["OBJECT"] = 6] = "OBJECT";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["STRING"] = 7] = "STRING";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(JSONSchema_JSONSchemaSimpleTypes || (JSONSchema_JSONSchemaSimpleTypes = {}));
export function jSONSchema_JSONSchemaSimpleTypesFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return JSONSchema_JSONSchemaSimpleTypes.UNKNOWN;
        case 1:
        case "ARRAY":
            return JSONSchema_JSONSchemaSimpleTypes.ARRAY;
        case 2:
        case "BOOLEAN":
            return JSONSchema_JSONSchemaSimpleTypes.BOOLEAN;
        case 3:
        case "INTEGER":
            return JSONSchema_JSONSchemaSimpleTypes.INTEGER;
        case 4:
        case "NULL":
            return JSONSchema_JSONSchemaSimpleTypes.NULL;
        case 5:
        case "NUMBER":
            return JSONSchema_JSONSchemaSimpleTypes.NUMBER;
        case 6:
        case "OBJECT":
            return JSONSchema_JSONSchemaSimpleTypes.OBJECT;
        case 7:
        case "STRING":
            return JSONSchema_JSONSchemaSimpleTypes.STRING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return JSONSchema_JSONSchemaSimpleTypes.UNRECOGNIZED;
    }
}
export function jSONSchema_JSONSchemaSimpleTypesToJSON(object) {
    switch (object) {
        case JSONSchema_JSONSchemaSimpleTypes.UNKNOWN:
            return "UNKNOWN";
        case JSONSchema_JSONSchemaSimpleTypes.ARRAY:
            return "ARRAY";
        case JSONSchema_JSONSchemaSimpleTypes.BOOLEAN:
            return "BOOLEAN";
        case JSONSchema_JSONSchemaSimpleTypes.INTEGER:
            return "INTEGER";
        case JSONSchema_JSONSchemaSimpleTypes.NULL:
            return "NULL";
        case JSONSchema_JSONSchemaSimpleTypes.NUMBER:
            return "NUMBER";
        case JSONSchema_JSONSchemaSimpleTypes.OBJECT:
            return "OBJECT";
        case JSONSchema_JSONSchemaSimpleTypes.STRING:
            return "STRING";
        default:
            return "UNKNOWN";
    }
}
/**
 * The type of the security scheme. Valid values are "basic",
 * "apiKey" or "oauth2".
 */
export var SecurityScheme_Type;
(function (SecurityScheme_Type) {
    SecurityScheme_Type[SecurityScheme_Type["TYPE_INVALID"] = 0] = "TYPE_INVALID";
    SecurityScheme_Type[SecurityScheme_Type["TYPE_BASIC"] = 1] = "TYPE_BASIC";
    SecurityScheme_Type[SecurityScheme_Type["TYPE_API_KEY"] = 2] = "TYPE_API_KEY";
    SecurityScheme_Type[SecurityScheme_Type["TYPE_OAUTH2"] = 3] = "TYPE_OAUTH2";
    SecurityScheme_Type[SecurityScheme_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityScheme_Type || (SecurityScheme_Type = {}));
export function securityScheme_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_INVALID":
            return SecurityScheme_Type.TYPE_INVALID;
        case 1:
        case "TYPE_BASIC":
            return SecurityScheme_Type.TYPE_BASIC;
        case 2:
        case "TYPE_API_KEY":
            return SecurityScheme_Type.TYPE_API_KEY;
        case 3:
        case "TYPE_OAUTH2":
            return SecurityScheme_Type.TYPE_OAUTH2;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecurityScheme_Type.UNRECOGNIZED;
    }
}
export function securityScheme_TypeToJSON(object) {
    switch (object) {
        case SecurityScheme_Type.TYPE_INVALID:
            return "TYPE_INVALID";
        case SecurityScheme_Type.TYPE_BASIC:
            return "TYPE_BASIC";
        case SecurityScheme_Type.TYPE_API_KEY:
            return "TYPE_API_KEY";
        case SecurityScheme_Type.TYPE_OAUTH2:
            return "TYPE_OAUTH2";
        default:
            return "UNKNOWN";
    }
}
/** The location of the API key. Valid values are "query" or "header". */
export var SecurityScheme_In;
(function (SecurityScheme_In) {
    SecurityScheme_In[SecurityScheme_In["IN_INVALID"] = 0] = "IN_INVALID";
    SecurityScheme_In[SecurityScheme_In["IN_QUERY"] = 1] = "IN_QUERY";
    SecurityScheme_In[SecurityScheme_In["IN_HEADER"] = 2] = "IN_HEADER";
    SecurityScheme_In[SecurityScheme_In["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityScheme_In || (SecurityScheme_In = {}));
export function securityScheme_InFromJSON(object) {
    switch (object) {
        case 0:
        case "IN_INVALID":
            return SecurityScheme_In.IN_INVALID;
        case 1:
        case "IN_QUERY":
            return SecurityScheme_In.IN_QUERY;
        case 2:
        case "IN_HEADER":
            return SecurityScheme_In.IN_HEADER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecurityScheme_In.UNRECOGNIZED;
    }
}
export function securityScheme_InToJSON(object) {
    switch (object) {
        case SecurityScheme_In.IN_INVALID:
            return "IN_INVALID";
        case SecurityScheme_In.IN_QUERY:
            return "IN_QUERY";
        case SecurityScheme_In.IN_HEADER:
            return "IN_HEADER";
        default:
            return "UNKNOWN";
    }
}
/**
 * The flow used by the OAuth2 security scheme. Valid values are
 * "implicit", "password", "application" or "accessCode".
 */
export var SecurityScheme_Flow;
(function (SecurityScheme_Flow) {
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_INVALID"] = 0] = "FLOW_INVALID";
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_IMPLICIT"] = 1] = "FLOW_IMPLICIT";
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_PASSWORD"] = 2] = "FLOW_PASSWORD";
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_APPLICATION"] = 3] = "FLOW_APPLICATION";
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_ACCESS_CODE"] = 4] = "FLOW_ACCESS_CODE";
    SecurityScheme_Flow[SecurityScheme_Flow["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityScheme_Flow || (SecurityScheme_Flow = {}));
export function securityScheme_FlowFromJSON(object) {
    switch (object) {
        case 0:
        case "FLOW_INVALID":
            return SecurityScheme_Flow.FLOW_INVALID;
        case 1:
        case "FLOW_IMPLICIT":
            return SecurityScheme_Flow.FLOW_IMPLICIT;
        case 2:
        case "FLOW_PASSWORD":
            return SecurityScheme_Flow.FLOW_PASSWORD;
        case 3:
        case "FLOW_APPLICATION":
            return SecurityScheme_Flow.FLOW_APPLICATION;
        case 4:
        case "FLOW_ACCESS_CODE":
            return SecurityScheme_Flow.FLOW_ACCESS_CODE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecurityScheme_Flow.UNRECOGNIZED;
    }
}
export function securityScheme_FlowToJSON(object) {
    switch (object) {
        case SecurityScheme_Flow.FLOW_INVALID:
            return "FLOW_INVALID";
        case SecurityScheme_Flow.FLOW_IMPLICIT:
            return "FLOW_IMPLICIT";
        case SecurityScheme_Flow.FLOW_PASSWORD:
            return "FLOW_PASSWORD";
        case SecurityScheme_Flow.FLOW_APPLICATION:
            return "FLOW_APPLICATION";
        case SecurityScheme_Flow.FLOW_ACCESS_CODE:
            return "FLOW_ACCESS_CODE";
        default:
            return "UNKNOWN";
    }
}
const baseSwagger = {
    swagger: "",
    host: "",
    basePath: "",
    schemes: 0,
    consumes: "",
    produces: "",
};
export const Swagger = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.swagger !== "") {
            writer.uint32(10).string(message.swagger);
        }
        if (message.info !== undefined) {
            Info.encode(message.info, writer.uint32(18).fork()).ldelim();
        }
        if (message.host !== "") {
            writer.uint32(26).string(message.host);
        }
        if (message.basePath !== "") {
            writer.uint32(34).string(message.basePath);
        }
        writer.uint32(42).fork();
        for (const v of message.schemes) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.consumes) {
            writer.uint32(50).string(v);
        }
        for (const v of message.produces) {
            writer.uint32(58).string(v);
        }
        Object.entries(message.responses).forEach(([key, value]) => {
            Swagger_ResponsesEntry.encode({ key: key, value }, writer.uint32(82).fork()).ldelim();
        });
        if (message.securityDefinitions !== undefined) {
            SecurityDefinitions.encode(message.securityDefinitions, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.security) {
            SecurityRequirement.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.externalDocs !== undefined) {
            ExternalDocumentation.encode(message.externalDocs, writer.uint32(114).fork()).ldelim();
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                Swagger_ExtensionsEntry.encode({ key: key, value }, writer.uint32(122).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSwagger };
        message.schemes = [];
        message.consumes = [];
        message.produces = [];
        message.responses = {};
        message.security = [];
        message.extensions = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swagger = reader.string();
                    break;
                case 2:
                    message.info = Info.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.host = reader.string();
                    break;
                case 4:
                    message.basePath = reader.string();
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.schemes.push(reader.int32());
                        }
                    }
                    else {
                        message.schemes.push(reader.int32());
                    }
                    break;
                case 6:
                    message.consumes.push(reader.string());
                    break;
                case 7:
                    message.produces.push(reader.string());
                    break;
                case 10:
                    const entry10 = Swagger_ResponsesEntry.decode(reader, reader.uint32());
                    if (entry10.value !== undefined) {
                        message.responses[entry10.key] = entry10.value;
                    }
                    break;
                case 11:
                    message.securityDefinitions = SecurityDefinitions.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.security.push(SecurityRequirement.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.externalDocs = ExternalDocumentation.decode(reader, reader.uint32());
                    break;
                case 15:
                    const entry15 = Swagger_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry15.value !== undefined) {
                        message.extensions[entry15.key] = entry15.value;
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
        const message = { ...baseSwagger };
        message.swagger =
            object.swagger !== undefined && object.swagger !== null
                ? String(object.swagger)
                : "";
        message.info =
            object.info !== undefined && object.info !== null
                ? Info.fromJSON(object.info)
                : undefined;
        message.host =
            object.host !== undefined && object.host !== null
                ? String(object.host)
                : "";
        message.basePath =
            object.basePath !== undefined && object.basePath !== null
                ? String(object.basePath)
                : "";
        message.schemes = (object.schemes ?? []).map((e) => schemeFromJSON(e));
        message.consumes = (object.consumes ?? []).map((e) => String(e));
        message.produces = (object.produces ?? []).map((e) => String(e));
        message.responses = Object.entries(object.responses ?? {}).reduce((acc, [key, value]) => {
            acc[key] = Response.fromJSON(value);
            return acc;
        }, {});
        message.securityDefinitions =
            object.securityDefinitions !== undefined &&
                object.securityDefinitions !== null
                ? SecurityDefinitions.fromJSON(object.securityDefinitions)
                : undefined;
        message.security = (object.security ?? []).map((e) => SecurityRequirement.fromJSON(e));
        message.externalDocs =
            object.externalDocs !== undefined && object.externalDocs !== null
                ? ExternalDocumentation.fromJSON(object.externalDocs)
                : undefined;
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.swagger !== undefined && (obj.swagger = message.swagger);
        message.info !== undefined &&
            (obj.info = message.info ? Info.toJSON(message.info) : undefined);
        message.host !== undefined && (obj.host = message.host);
        message.basePath !== undefined && (obj.basePath = message.basePath);
        if (message.schemes) {
            obj.schemes = message.schemes.map((e) => schemeToJSON(e));
        }
        else {
            obj.schemes = [];
        }
        if (message.consumes) {
            obj.consumes = message.consumes.map((e) => e);
        }
        else {
            obj.consumes = [];
        }
        if (message.produces) {
            obj.produces = message.produces.map((e) => e);
        }
        else {
            obj.produces = [];
        }
        obj.responses = {};
        if (message.responses) {
            Object.entries(message.responses).forEach(([k, v]) => {
                obj.responses[k] = Response.toJSON(v);
            });
        }
        message.securityDefinitions !== undefined &&
            (obj.securityDefinitions = message.securityDefinitions
                ? SecurityDefinitions.toJSON(message.securityDefinitions)
                : undefined);
        if (message.security) {
            obj.security = message.security.map((e) => e ? SecurityRequirement.toJSON(e) : undefined);
        }
        else {
            obj.security = [];
        }
        message.externalDocs !== undefined &&
            (obj.externalDocs = message.externalDocs
                ? ExternalDocumentation.toJSON(message.externalDocs)
                : undefined);
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSwagger };
        message.swagger = object.swagger ?? "";
        message.info =
            object.info !== undefined && object.info !== null
                ? Info.fromPartial(object.info)
                : undefined;
        message.host = object.host ?? "";
        message.basePath = object.basePath ?? "";
        message.schemes = object.schemes?.map((e) => e) || [];
        message.consumes = object.consumes?.map((e) => e) || [];
        message.produces = object.produces?.map((e) => e) || [];
        message.responses = Object.entries(object.responses ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Response.fromPartial(value);
            }
            return acc;
        }, {});
        message.securityDefinitions =
            object.securityDefinitions !== undefined &&
                object.securityDefinitions !== null
                ? SecurityDefinitions.fromPartial(object.securityDefinitions)
                : undefined;
        message.security =
            object.security?.map((e) => SecurityRequirement.fromPartial(e)) || [];
        message.externalDocs =
            object.externalDocs !== undefined && object.externalDocs !== null
                ? ExternalDocumentation.fromPartial(object.externalDocs)
                : undefined;
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
const baseSwagger_ResponsesEntry = { key: "" };
export const Swagger_ResponsesEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Response.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSwagger_ResponsesEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = Response.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSwagger_ResponsesEntry };
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? Response.fromJSON(object.value)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? Response.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSwagger_ResponsesEntry };
        message.key = object.key ?? "";
        message.value =
            object.value !== undefined && object.value !== null
                ? Response.fromPartial(object.value)
                : undefined;
        return message;
    },
};
const baseSwagger_ExtensionsEntry = { key: "" };
export const Swagger_ExtensionsEntry = {
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
        const message = {
            ...baseSwagger_ExtensionsEntry,
        };
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
        const message = {
            ...baseSwagger_ExtensionsEntry,
        };
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
        const message = {
            ...baseSwagger_ExtensionsEntry,
        };
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
const baseOperation = {
    tags: "",
    summary: "",
    description: "",
    operationId: "",
    consumes: "",
    produces: "",
    schemes: 0,
    deprecated: false,
};
export const Operation = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tags) {
            writer.uint32(10).string(v);
        }
        if (message.summary !== "") {
            writer.uint32(18).string(message.summary);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.externalDocs !== undefined) {
            ExternalDocumentation.encode(message.externalDocs, writer.uint32(34).fork()).ldelim();
        }
        if (message.operationId !== "") {
            writer.uint32(42).string(message.operationId);
        }
        for (const v of message.consumes) {
            writer.uint32(50).string(v);
        }
        for (const v of message.produces) {
            writer.uint32(58).string(v);
        }
        Object.entries(message.responses).forEach(([key, value]) => {
            Operation_ResponsesEntry.encode({ key: key, value }, writer.uint32(74).fork()).ldelim();
        });
        writer.uint32(82).fork();
        for (const v of message.schemes) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.deprecated === true) {
            writer.uint32(88).bool(message.deprecated);
        }
        for (const v of message.security) {
            SecurityRequirement.encode(v, writer.uint32(98).fork()).ldelim();
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                Operation_ExtensionsEntry.encode({ key: key, value }, writer.uint32(106).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOperation };
        message.tags = [];
        message.consumes = [];
        message.produces = [];
        message.responses = {};
        message.schemes = [];
        message.security = [];
        message.extensions = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tags.push(reader.string());
                    break;
                case 2:
                    message.summary = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.externalDocs = ExternalDocumentation.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.operationId = reader.string();
                    break;
                case 6:
                    message.consumes.push(reader.string());
                    break;
                case 7:
                    message.produces.push(reader.string());
                    break;
                case 9:
                    const entry9 = Operation_ResponsesEntry.decode(reader, reader.uint32());
                    if (entry9.value !== undefined) {
                        message.responses[entry9.key] = entry9.value;
                    }
                    break;
                case 10:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.schemes.push(reader.int32());
                        }
                    }
                    else {
                        message.schemes.push(reader.int32());
                    }
                    break;
                case 11:
                    message.deprecated = reader.bool();
                    break;
                case 12:
                    message.security.push(SecurityRequirement.decode(reader, reader.uint32()));
                    break;
                case 13:
                    const entry13 = Operation_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry13.value !== undefined) {
                        message.extensions[entry13.key] = entry13.value;
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
        const message = { ...baseOperation };
        message.tags = (object.tags ?? []).map((e) => String(e));
        message.summary =
            object.summary !== undefined && object.summary !== null
                ? String(object.summary)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.externalDocs =
            object.externalDocs !== undefined && object.externalDocs !== null
                ? ExternalDocumentation.fromJSON(object.externalDocs)
                : undefined;
        message.operationId =
            object.operationId !== undefined && object.operationId !== null
                ? String(object.operationId)
                : "";
        message.consumes = (object.consumes ?? []).map((e) => String(e));
        message.produces = (object.produces ?? []).map((e) => String(e));
        message.responses = Object.entries(object.responses ?? {}).reduce((acc, [key, value]) => {
            acc[key] = Response.fromJSON(value);
            return acc;
        }, {});
        message.schemes = (object.schemes ?? []).map((e) => schemeFromJSON(e));
        message.deprecated =
            object.deprecated !== undefined && object.deprecated !== null
                ? Boolean(object.deprecated)
                : false;
        message.security = (object.security ?? []).map((e) => SecurityRequirement.fromJSON(e));
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.tags) {
            obj.tags = message.tags.map((e) => e);
        }
        else {
            obj.tags = [];
        }
        message.summary !== undefined && (obj.summary = message.summary);
        message.description !== undefined &&
            (obj.description = message.description);
        message.externalDocs !== undefined &&
            (obj.externalDocs = message.externalDocs
                ? ExternalDocumentation.toJSON(message.externalDocs)
                : undefined);
        message.operationId !== undefined &&
            (obj.operationId = message.operationId);
        if (message.consumes) {
            obj.consumes = message.consumes.map((e) => e);
        }
        else {
            obj.consumes = [];
        }
        if (message.produces) {
            obj.produces = message.produces.map((e) => e);
        }
        else {
            obj.produces = [];
        }
        obj.responses = {};
        if (message.responses) {
            Object.entries(message.responses).forEach(([k, v]) => {
                obj.responses[k] = Response.toJSON(v);
            });
        }
        if (message.schemes) {
            obj.schemes = message.schemes.map((e) => schemeToJSON(e));
        }
        else {
            obj.schemes = [];
        }
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.security) {
            obj.security = message.security.map((e) => e ? SecurityRequirement.toJSON(e) : undefined);
        }
        else {
            obj.security = [];
        }
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOperation };
        message.tags = object.tags?.map((e) => e) || [];
        message.summary = object.summary ?? "";
        message.description = object.description ?? "";
        message.externalDocs =
            object.externalDocs !== undefined && object.externalDocs !== null
                ? ExternalDocumentation.fromPartial(object.externalDocs)
                : undefined;
        message.operationId = object.operationId ?? "";
        message.consumes = object.consumes?.map((e) => e) || [];
        message.produces = object.produces?.map((e) => e) || [];
        message.responses = Object.entries(object.responses ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Response.fromPartial(value);
            }
            return acc;
        }, {});
        message.schemes = object.schemes?.map((e) => e) || [];
        message.deprecated = object.deprecated ?? false;
        message.security =
            object.security?.map((e) => SecurityRequirement.fromPartial(e)) || [];
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
const baseOperation_ResponsesEntry = { key: "" };
export const Operation_ResponsesEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Response.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseOperation_ResponsesEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = Response.decode(reader, reader.uint32());
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
            ...baseOperation_ResponsesEntry,
        };
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? Response.fromJSON(object.value)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? Response.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseOperation_ResponsesEntry,
        };
        message.key = object.key ?? "";
        message.value =
            object.value !== undefined && object.value !== null
                ? Response.fromPartial(object.value)
                : undefined;
        return message;
    },
};
const baseOperation_ExtensionsEntry = { key: "" };
export const Operation_ExtensionsEntry = {
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
        const message = {
            ...baseOperation_ExtensionsEntry,
        };
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
        const message = {
            ...baseOperation_ExtensionsEntry,
        };
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
        const message = {
            ...baseOperation_ExtensionsEntry,
        };
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
const baseHeader = {
    description: "",
    type: "",
    format: "",
    default: "",
    pattern: "",
};
export const Header = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.format !== "") {
            writer.uint32(26).string(message.format);
        }
        if (message.default !== "") {
            writer.uint32(50).string(message.default);
        }
        if (message.pattern !== "") {
            writer.uint32(106).string(message.pattern);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHeader };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.format = reader.string();
                    break;
                case 6:
                    message.default = reader.string();
                    break;
                case 13:
                    message.pattern = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHeader };
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.type =
            object.type !== undefined && object.type !== null
                ? String(object.type)
                : "";
        message.format =
            object.format !== undefined && object.format !== null
                ? String(object.format)
                : "";
        message.default =
            object.default !== undefined && object.default !== null
                ? String(object.default)
                : "";
        message.pattern =
            object.pattern !== undefined && object.pattern !== null
                ? String(object.pattern)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        message.type !== undefined && (obj.type = message.type);
        message.format !== undefined && (obj.format = message.format);
        message.default !== undefined && (obj.default = message.default);
        message.pattern !== undefined && (obj.pattern = message.pattern);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHeader };
        message.description = object.description ?? "";
        message.type = object.type ?? "";
        message.format = object.format ?? "";
        message.default = object.default ?? "";
        message.pattern = object.pattern ?? "";
        return message;
    },
};
const baseResponse = { description: "" };
export const Response = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        if (message.schema !== undefined) {
            Schema.encode(message.schema, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.headers).forEach(([key, value]) => {
            Response_HeadersEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        Object.entries(message.examples).forEach(([key, value]) => {
            Response_ExamplesEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                Response_ExtensionsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResponse };
        message.headers = {};
        message.examples = {};
        message.extensions = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.schema = Schema.decode(reader, reader.uint32());
                    break;
                case 3:
                    const entry3 = Response_HeadersEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.headers[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    const entry4 = Response_ExamplesEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.examples[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    const entry5 = Response_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.extensions[entry5.key] = entry5.value;
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
        const message = { ...baseResponse };
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.schema =
            object.schema !== undefined && object.schema !== null
                ? Schema.fromJSON(object.schema)
                : undefined;
        message.headers = Object.entries(object.headers ?? {}).reduce((acc, [key, value]) => {
            acc[key] = Header.fromJSON(value);
            return acc;
        }, {});
        message.examples = Object.entries(object.examples ?? {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        message.schema !== undefined &&
            (obj.schema = message.schema ? Schema.toJSON(message.schema) : undefined);
        obj.headers = {};
        if (message.headers) {
            Object.entries(message.headers).forEach(([k, v]) => {
                obj.headers[k] = Header.toJSON(v);
            });
        }
        obj.examples = {};
        if (message.examples) {
            Object.entries(message.examples).forEach(([k, v]) => {
                obj.examples[k] = v;
            });
        }
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResponse };
        message.description = object.description ?? "";
        message.schema =
            object.schema !== undefined && object.schema !== null
                ? Schema.fromPartial(object.schema)
                : undefined;
        message.headers = Object.entries(object.headers ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = Header.fromPartial(value);
            }
            return acc;
        }, {});
        message.examples = Object.entries(object.examples ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
const baseResponse_HeadersEntry = { key: "" };
export const Response_HeadersEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Header.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResponse_HeadersEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResponse_HeadersEntry };
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? Header.fromJSON(object.value)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? Header.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResponse_HeadersEntry };
        message.key = object.key ?? "";
        message.value =
            object.value !== undefined && object.value !== null
                ? Header.fromPartial(object.value)
                : undefined;
        return message;
    },
};
const baseResponse_ExamplesEntry = { key: "", value: "" };
export const Response_ExamplesEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResponse_ExamplesEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResponse_ExamplesEntry };
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResponse_ExamplesEntry };
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
const baseResponse_ExtensionsEntry = { key: "" };
export const Response_ExtensionsEntry = {
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
        const message = {
            ...baseResponse_ExtensionsEntry,
        };
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
        const message = {
            ...baseResponse_ExtensionsEntry,
        };
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
        const message = {
            ...baseResponse_ExtensionsEntry,
        };
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
const baseInfo = {
    title: "",
    description: "",
    termsOfService: "",
    version: "",
};
export const Info = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.termsOfService !== "") {
            writer.uint32(26).string(message.termsOfService);
        }
        if (message.contact !== undefined) {
            Contact.encode(message.contact, writer.uint32(34).fork()).ldelim();
        }
        if (message.license !== undefined) {
            License.encode(message.license, writer.uint32(42).fork()).ldelim();
        }
        if (message.version !== "") {
            writer.uint32(50).string(message.version);
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                Info_ExtensionsEntry.encode({ key: key, value }, writer.uint32(58).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInfo };
        message.extensions = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.termsOfService = reader.string();
                    break;
                case 4:
                    message.contact = Contact.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.license = License.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.version = reader.string();
                    break;
                case 7:
                    const entry7 = Info_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.extensions[entry7.key] = entry7.value;
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
        const message = { ...baseInfo };
        message.title =
            object.title !== undefined && object.title !== null
                ? String(object.title)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.termsOfService =
            object.termsOfService !== undefined && object.termsOfService !== null
                ? String(object.termsOfService)
                : "";
        message.contact =
            object.contact !== undefined && object.contact !== null
                ? Contact.fromJSON(object.contact)
                : undefined;
        message.license =
            object.license !== undefined && object.license !== null
                ? License.fromJSON(object.license)
                : undefined;
        message.version =
            object.version !== undefined && object.version !== null
                ? String(object.version)
                : "";
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.termsOfService !== undefined &&
            (obj.termsOfService = message.termsOfService);
        message.contact !== undefined &&
            (obj.contact = message.contact
                ? Contact.toJSON(message.contact)
                : undefined);
        message.license !== undefined &&
            (obj.license = message.license
                ? License.toJSON(message.license)
                : undefined);
        message.version !== undefined && (obj.version = message.version);
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInfo };
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.termsOfService = object.termsOfService ?? "";
        message.contact =
            object.contact !== undefined && object.contact !== null
                ? Contact.fromPartial(object.contact)
                : undefined;
        message.license =
            object.license !== undefined && object.license !== null
                ? License.fromPartial(object.license)
                : undefined;
        message.version = object.version ?? "";
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
const baseInfo_ExtensionsEntry = { key: "" };
export const Info_ExtensionsEntry = {
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
        const message = { ...baseInfo_ExtensionsEntry };
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
        const message = { ...baseInfo_ExtensionsEntry };
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
        const message = { ...baseInfo_ExtensionsEntry };
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
const baseContact = { name: "", url: "", email: "" };
export const Contact = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.email !== "") {
            writer.uint32(26).string(message.email);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContact };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.email = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseContact };
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.url =
            object.url !== undefined && object.url !== null ? String(object.url) : "";
        message.email =
            object.email !== undefined && object.email !== null
                ? String(object.email)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        message.email !== undefined && (obj.email = message.email);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseContact };
        message.name = object.name ?? "";
        message.url = object.url ?? "";
        message.email = object.email ?? "";
        return message;
    },
};
const baseLicense = { name: "", url: "" };
export const License = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLicense };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLicense };
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.url =
            object.url !== undefined && object.url !== null ? String(object.url) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLicense };
        message.name = object.name ?? "";
        message.url = object.url ?? "";
        return message;
    },
};
const baseExternalDocumentation = { description: "", url: "" };
export const ExternalDocumentation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalDocumentation };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseExternalDocumentation };
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.url =
            object.url !== undefined && object.url !== null ? String(object.url) : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseExternalDocumentation };
        message.description = object.description ?? "";
        message.url = object.url ?? "";
        return message;
    },
};
const baseSchema = { discriminator: "", readOnly: false, example: "" };
export const Schema = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.jsonSchema !== undefined) {
            JSONSchema.encode(message.jsonSchema, writer.uint32(10).fork()).ldelim();
        }
        if (message.discriminator !== "") {
            writer.uint32(18).string(message.discriminator);
        }
        if (message.readOnly === true) {
            writer.uint32(24).bool(message.readOnly);
        }
        if (message.externalDocs !== undefined) {
            ExternalDocumentation.encode(message.externalDocs, writer.uint32(42).fork()).ldelim();
        }
        if (message.example !== "") {
            writer.uint32(50).string(message.example);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSchema };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jsonSchema = JSONSchema.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.discriminator = reader.string();
                    break;
                case 3:
                    message.readOnly = reader.bool();
                    break;
                case 5:
                    message.externalDocs = ExternalDocumentation.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.example = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSchema };
        message.jsonSchema =
            object.jsonSchema !== undefined && object.jsonSchema !== null
                ? JSONSchema.fromJSON(object.jsonSchema)
                : undefined;
        message.discriminator =
            object.discriminator !== undefined && object.discriminator !== null
                ? String(object.discriminator)
                : "";
        message.readOnly =
            object.readOnly !== undefined && object.readOnly !== null
                ? Boolean(object.readOnly)
                : false;
        message.externalDocs =
            object.externalDocs !== undefined && object.externalDocs !== null
                ? ExternalDocumentation.fromJSON(object.externalDocs)
                : undefined;
        message.example =
            object.example !== undefined && object.example !== null
                ? String(object.example)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.jsonSchema !== undefined &&
            (obj.jsonSchema = message.jsonSchema
                ? JSONSchema.toJSON(message.jsonSchema)
                : undefined);
        message.discriminator !== undefined &&
            (obj.discriminator = message.discriminator);
        message.readOnly !== undefined && (obj.readOnly = message.readOnly);
        message.externalDocs !== undefined &&
            (obj.externalDocs = message.externalDocs
                ? ExternalDocumentation.toJSON(message.externalDocs)
                : undefined);
        message.example !== undefined && (obj.example = message.example);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSchema };
        message.jsonSchema =
            object.jsonSchema !== undefined && object.jsonSchema !== null
                ? JSONSchema.fromPartial(object.jsonSchema)
                : undefined;
        message.discriminator = object.discriminator ?? "";
        message.readOnly = object.readOnly ?? false;
        message.externalDocs =
            object.externalDocs !== undefined && object.externalDocs !== null
                ? ExternalDocumentation.fromPartial(object.externalDocs)
                : undefined;
        message.example = object.example ?? "";
        return message;
    },
};
const baseJSONSchema = {
    ref: "",
    title: "",
    description: "",
    default: "",
    readOnly: false,
    example: "",
    multipleOf: 0,
    maximum: 0,
    exclusiveMaximum: false,
    minimum: 0,
    exclusiveMinimum: false,
    maxLength: Long.UZERO,
    minLength: Long.UZERO,
    pattern: "",
    maxItems: Long.UZERO,
    minItems: Long.UZERO,
    uniqueItems: false,
    maxProperties: Long.UZERO,
    minProperties: Long.UZERO,
    required: "",
    array: "",
    type: 0,
    format: "",
    enum: "",
};
export const JSONSchema = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.ref !== "") {
            writer.uint32(26).string(message.ref);
        }
        if (message.title !== "") {
            writer.uint32(42).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.default !== "") {
            writer.uint32(58).string(message.default);
        }
        if (message.readOnly === true) {
            writer.uint32(64).bool(message.readOnly);
        }
        if (message.example !== "") {
            writer.uint32(74).string(message.example);
        }
        if (message.multipleOf !== 0) {
            writer.uint32(81).double(message.multipleOf);
        }
        if (message.maximum !== 0) {
            writer.uint32(89).double(message.maximum);
        }
        if (message.exclusiveMaximum === true) {
            writer.uint32(96).bool(message.exclusiveMaximum);
        }
        if (message.minimum !== 0) {
            writer.uint32(105).double(message.minimum);
        }
        if (message.exclusiveMinimum === true) {
            writer.uint32(112).bool(message.exclusiveMinimum);
        }
        if (!message.maxLength.isZero()) {
            writer.uint32(120).uint64(message.maxLength);
        }
        if (!message.minLength.isZero()) {
            writer.uint32(128).uint64(message.minLength);
        }
        if (message.pattern !== "") {
            writer.uint32(138).string(message.pattern);
        }
        if (!message.maxItems.isZero()) {
            writer.uint32(160).uint64(message.maxItems);
        }
        if (!message.minItems.isZero()) {
            writer.uint32(168).uint64(message.minItems);
        }
        if (message.uniqueItems === true) {
            writer.uint32(176).bool(message.uniqueItems);
        }
        if (!message.maxProperties.isZero()) {
            writer.uint32(192).uint64(message.maxProperties);
        }
        if (!message.minProperties.isZero()) {
            writer.uint32(200).uint64(message.minProperties);
        }
        for (const v of message.required) {
            writer.uint32(210).string(v);
        }
        for (const v of message.array) {
            writer.uint32(274).string(v);
        }
        writer.uint32(282).fork();
        for (const v of message.type) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.format !== "") {
            writer.uint32(290).string(message.format);
        }
        for (const v of message.enum) {
            writer.uint32(370).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseJSONSchema };
        message.required = [];
        message.array = [];
        message.type = [];
        message.enum = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.ref = reader.string();
                    break;
                case 5:
                    message.title = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.default = reader.string();
                    break;
                case 8:
                    message.readOnly = reader.bool();
                    break;
                case 9:
                    message.example = reader.string();
                    break;
                case 10:
                    message.multipleOf = reader.double();
                    break;
                case 11:
                    message.maximum = reader.double();
                    break;
                case 12:
                    message.exclusiveMaximum = reader.bool();
                    break;
                case 13:
                    message.minimum = reader.double();
                    break;
                case 14:
                    message.exclusiveMinimum = reader.bool();
                    break;
                case 15:
                    message.maxLength = reader.uint64();
                    break;
                case 16:
                    message.minLength = reader.uint64();
                    break;
                case 17:
                    message.pattern = reader.string();
                    break;
                case 20:
                    message.maxItems = reader.uint64();
                    break;
                case 21:
                    message.minItems = reader.uint64();
                    break;
                case 22:
                    message.uniqueItems = reader.bool();
                    break;
                case 24:
                    message.maxProperties = reader.uint64();
                    break;
                case 25:
                    message.minProperties = reader.uint64();
                    break;
                case 26:
                    message.required.push(reader.string());
                    break;
                case 34:
                    message.array.push(reader.string());
                    break;
                case 35:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.type.push(reader.int32());
                        }
                    }
                    else {
                        message.type.push(reader.int32());
                    }
                    break;
                case 36:
                    message.format = reader.string();
                    break;
                case 46:
                    message.enum.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseJSONSchema };
        message.ref =
            object.ref !== undefined && object.ref !== null ? String(object.ref) : "";
        message.title =
            object.title !== undefined && object.title !== null
                ? String(object.title)
                : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.default =
            object.default !== undefined && object.default !== null
                ? String(object.default)
                : "";
        message.readOnly =
            object.readOnly !== undefined && object.readOnly !== null
                ? Boolean(object.readOnly)
                : false;
        message.example =
            object.example !== undefined && object.example !== null
                ? String(object.example)
                : "";
        message.multipleOf =
            object.multipleOf !== undefined && object.multipleOf !== null
                ? Number(object.multipleOf)
                : 0;
        message.maximum =
            object.maximum !== undefined && object.maximum !== null
                ? Number(object.maximum)
                : 0;
        message.exclusiveMaximum =
            object.exclusiveMaximum !== undefined && object.exclusiveMaximum !== null
                ? Boolean(object.exclusiveMaximum)
                : false;
        message.minimum =
            object.minimum !== undefined && object.minimum !== null
                ? Number(object.minimum)
                : 0;
        message.exclusiveMinimum =
            object.exclusiveMinimum !== undefined && object.exclusiveMinimum !== null
                ? Boolean(object.exclusiveMinimum)
                : false;
        message.maxLength =
            object.maxLength !== undefined && object.maxLength !== null
                ? Long.fromString(object.maxLength)
                : Long.UZERO;
        message.minLength =
            object.minLength !== undefined && object.minLength !== null
                ? Long.fromString(object.minLength)
                : Long.UZERO;
        message.pattern =
            object.pattern !== undefined && object.pattern !== null
                ? String(object.pattern)
                : "";
        message.maxItems =
            object.maxItems !== undefined && object.maxItems !== null
                ? Long.fromString(object.maxItems)
                : Long.UZERO;
        message.minItems =
            object.minItems !== undefined && object.minItems !== null
                ? Long.fromString(object.minItems)
                : Long.UZERO;
        message.uniqueItems =
            object.uniqueItems !== undefined && object.uniqueItems !== null
                ? Boolean(object.uniqueItems)
                : false;
        message.maxProperties =
            object.maxProperties !== undefined && object.maxProperties !== null
                ? Long.fromString(object.maxProperties)
                : Long.UZERO;
        message.minProperties =
            object.minProperties !== undefined && object.minProperties !== null
                ? Long.fromString(object.minProperties)
                : Long.UZERO;
        message.required = (object.required ?? []).map((e) => String(e));
        message.array = (object.array ?? []).map((e) => String(e));
        message.type = (object.type ?? []).map((e) => jSONSchema_JSONSchemaSimpleTypesFromJSON(e));
        message.format =
            object.format !== undefined && object.format !== null
                ? String(object.format)
                : "";
        message.enum = (object.enum ?? []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ref !== undefined && (obj.ref = message.ref);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.default !== undefined && (obj.default = message.default);
        message.readOnly !== undefined && (obj.readOnly = message.readOnly);
        message.example !== undefined && (obj.example = message.example);
        message.multipleOf !== undefined && (obj.multipleOf = message.multipleOf);
        message.maximum !== undefined && (obj.maximum = message.maximum);
        message.exclusiveMaximum !== undefined &&
            (obj.exclusiveMaximum = message.exclusiveMaximum);
        message.minimum !== undefined && (obj.minimum = message.minimum);
        message.exclusiveMinimum !== undefined &&
            (obj.exclusiveMinimum = message.exclusiveMinimum);
        message.maxLength !== undefined &&
            (obj.maxLength = (message.maxLength || Long.UZERO).toString());
        message.minLength !== undefined &&
            (obj.minLength = (message.minLength || Long.UZERO).toString());
        message.pattern !== undefined && (obj.pattern = message.pattern);
        message.maxItems !== undefined &&
            (obj.maxItems = (message.maxItems || Long.UZERO).toString());
        message.minItems !== undefined &&
            (obj.minItems = (message.minItems || Long.UZERO).toString());
        message.uniqueItems !== undefined &&
            (obj.uniqueItems = message.uniqueItems);
        message.maxProperties !== undefined &&
            (obj.maxProperties = (message.maxProperties || Long.UZERO).toString());
        message.minProperties !== undefined &&
            (obj.minProperties = (message.minProperties || Long.UZERO).toString());
        if (message.required) {
            obj.required = message.required.map((e) => e);
        }
        else {
            obj.required = [];
        }
        if (message.array) {
            obj.array = message.array.map((e) => e);
        }
        else {
            obj.array = [];
        }
        if (message.type) {
            obj.type = message.type.map((e) => jSONSchema_JSONSchemaSimpleTypesToJSON(e));
        }
        else {
            obj.type = [];
        }
        message.format !== undefined && (obj.format = message.format);
        if (message.enum) {
            obj.enum = message.enum.map((e) => e);
        }
        else {
            obj.enum = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseJSONSchema };
        message.ref = object.ref ?? "";
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.default = object.default ?? "";
        message.readOnly = object.readOnly ?? false;
        message.example = object.example ?? "";
        message.multipleOf = object.multipleOf ?? 0;
        message.maximum = object.maximum ?? 0;
        message.exclusiveMaximum = object.exclusiveMaximum ?? false;
        message.minimum = object.minimum ?? 0;
        message.exclusiveMinimum = object.exclusiveMinimum ?? false;
        message.maxLength =
            object.maxLength !== undefined && object.maxLength !== null
                ? Long.fromValue(object.maxLength)
                : Long.UZERO;
        message.minLength =
            object.minLength !== undefined && object.minLength !== null
                ? Long.fromValue(object.minLength)
                : Long.UZERO;
        message.pattern = object.pattern ?? "";
        message.maxItems =
            object.maxItems !== undefined && object.maxItems !== null
                ? Long.fromValue(object.maxItems)
                : Long.UZERO;
        message.minItems =
            object.minItems !== undefined && object.minItems !== null
                ? Long.fromValue(object.minItems)
                : Long.UZERO;
        message.uniqueItems = object.uniqueItems ?? false;
        message.maxProperties =
            object.maxProperties !== undefined && object.maxProperties !== null
                ? Long.fromValue(object.maxProperties)
                : Long.UZERO;
        message.minProperties =
            object.minProperties !== undefined && object.minProperties !== null
                ? Long.fromValue(object.minProperties)
                : Long.UZERO;
        message.required = object.required?.map((e) => e) || [];
        message.array = object.array?.map((e) => e) || [];
        message.type = object.type?.map((e) => e) || [];
        message.format = object.format ?? "";
        message.enum = object.enum?.map((e) => e) || [];
        return message;
    },
};
const baseTag = { description: "" };
export const Tag = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.externalDocs !== undefined) {
            ExternalDocumentation.encode(message.externalDocs, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTag };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.externalDocs = ExternalDocumentation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTag };
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.externalDocs =
            object.externalDocs !== undefined && object.externalDocs !== null
                ? ExternalDocumentation.fromJSON(object.externalDocs)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        message.externalDocs !== undefined &&
            (obj.externalDocs = message.externalDocs
                ? ExternalDocumentation.toJSON(message.externalDocs)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTag };
        message.description = object.description ?? "";
        message.externalDocs =
            object.externalDocs !== undefined && object.externalDocs !== null
                ? ExternalDocumentation.fromPartial(object.externalDocs)
                : undefined;
        return message;
    },
};
const baseSecurityDefinitions = {};
export const SecurityDefinitions = {
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.security).forEach(([key, value]) => {
            SecurityDefinitions_SecurityEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityDefinitions };
        message.security = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = SecurityDefinitions_SecurityEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.security[entry1.key] = entry1.value;
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
        const message = { ...baseSecurityDefinitions };
        message.security = Object.entries(object.security ?? {}).reduce((acc, [key, value]) => {
            acc[key] = SecurityScheme.fromJSON(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.security = {};
        if (message.security) {
            Object.entries(message.security).forEach(([k, v]) => {
                obj.security[k] = SecurityScheme.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSecurityDefinitions };
        message.security = Object.entries(object.security ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = SecurityScheme.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
const baseSecurityDefinitions_SecurityEntry = { key: "" };
export const SecurityDefinitions_SecurityEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            SecurityScheme.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSecurityDefinitions_SecurityEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = SecurityScheme.decode(reader, reader.uint32());
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
            ...baseSecurityDefinitions_SecurityEntry,
        };
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? SecurityScheme.fromJSON(object.value)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? SecurityScheme.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSecurityDefinitions_SecurityEntry,
        };
        message.key = object.key ?? "";
        message.value =
            object.value !== undefined && object.value !== null
                ? SecurityScheme.fromPartial(object.value)
                : undefined;
        return message;
    },
};
const baseSecurityScheme = {
    type: 0,
    description: "",
    name: "",
    in: 0,
    flow: 0,
    authorizationUrl: "",
    tokenUrl: "",
};
export const SecurityScheme = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.in !== 0) {
            writer.uint32(32).int32(message.in);
        }
        if (message.flow !== 0) {
            writer.uint32(40).int32(message.flow);
        }
        if (message.authorizationUrl !== "") {
            writer.uint32(50).string(message.authorizationUrl);
        }
        if (message.tokenUrl !== "") {
            writer.uint32(58).string(message.tokenUrl);
        }
        if (message.scopes !== undefined) {
            Scopes.encode(message.scopes, writer.uint32(66).fork()).ldelim();
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            if (value !== undefined) {
                SecurityScheme_ExtensionsEntry.encode({ key: key, value }, writer.uint32(74).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityScheme };
        message.extensions = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.in = reader.int32();
                    break;
                case 5:
                    message.flow = reader.int32();
                    break;
                case 6:
                    message.authorizationUrl = reader.string();
                    break;
                case 7:
                    message.tokenUrl = reader.string();
                    break;
                case 8:
                    message.scopes = Scopes.decode(reader, reader.uint32());
                    break;
                case 9:
                    const entry9 = SecurityScheme_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry9.value !== undefined) {
                        message.extensions[entry9.key] = entry9.value;
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
        const message = { ...baseSecurityScheme };
        message.type =
            object.type !== undefined && object.type !== null
                ? securityScheme_TypeFromJSON(object.type)
                : 0;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.in =
            object.in !== undefined && object.in !== null
                ? securityScheme_InFromJSON(object.in)
                : 0;
        message.flow =
            object.flow !== undefined && object.flow !== null
                ? securityScheme_FlowFromJSON(object.flow)
                : 0;
        message.authorizationUrl =
            object.authorizationUrl !== undefined && object.authorizationUrl !== null
                ? String(object.authorizationUrl)
                : "";
        message.tokenUrl =
            object.tokenUrl !== undefined && object.tokenUrl !== null
                ? String(object.tokenUrl)
                : "";
        message.scopes =
            object.scopes !== undefined && object.scopes !== null
                ? Scopes.fromJSON(object.scopes)
                : undefined;
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = securityScheme_TypeToJSON(message.type));
        message.description !== undefined &&
            (obj.description = message.description);
        message.name !== undefined && (obj.name = message.name);
        message.in !== undefined && (obj.in = securityScheme_InToJSON(message.in));
        message.flow !== undefined &&
            (obj.flow = securityScheme_FlowToJSON(message.flow));
        message.authorizationUrl !== undefined &&
            (obj.authorizationUrl = message.authorizationUrl);
        message.tokenUrl !== undefined && (obj.tokenUrl = message.tokenUrl);
        message.scopes !== undefined &&
            (obj.scopes = message.scopes ? Scopes.toJSON(message.scopes) : undefined);
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSecurityScheme };
        message.type = object.type ?? 0;
        message.description = object.description ?? "";
        message.name = object.name ?? "";
        message.in = object.in ?? 0;
        message.flow = object.flow ?? 0;
        message.authorizationUrl = object.authorizationUrl ?? "";
        message.tokenUrl = object.tokenUrl ?? "";
        message.scopes =
            object.scopes !== undefined && object.scopes !== null
                ? Scopes.fromPartial(object.scopes)
                : undefined;
        message.extensions = Object.entries(object.extensions ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
};
const baseSecurityScheme_ExtensionsEntry = { key: "" };
export const SecurityScheme_ExtensionsEntry = {
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
        const message = {
            ...baseSecurityScheme_ExtensionsEntry,
        };
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
        const message = {
            ...baseSecurityScheme_ExtensionsEntry,
        };
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
        const message = {
            ...baseSecurityScheme_ExtensionsEntry,
        };
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
const baseSecurityRequirement = {};
export const SecurityRequirement = {
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.securityRequirement).forEach(([key, value]) => {
            SecurityRequirement_SecurityRequirementEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityRequirement };
        message.securityRequirement = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = SecurityRequirement_SecurityRequirementEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.securityRequirement[entry1.key] = entry1.value;
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
        const message = { ...baseSecurityRequirement };
        message.securityRequirement = Object.entries(object.securityRequirement ?? {}).reduce((acc, [key, value]) => {
            acc[key] = SecurityRequirement_SecurityRequirementValue.fromJSON(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.securityRequirement = {};
        if (message.securityRequirement) {
            Object.entries(message.securityRequirement).forEach(([k, v]) => {
                obj.securityRequirement[k] =
                    SecurityRequirement_SecurityRequirementValue.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSecurityRequirement };
        message.securityRequirement = Object.entries(object.securityRequirement ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] =
                    SecurityRequirement_SecurityRequirementValue.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
const baseSecurityRequirement_SecurityRequirementValue = { scope: "" };
export const SecurityRequirement_SecurityRequirementValue = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.scope) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSecurityRequirement_SecurityRequirementValue,
        };
        message.scope = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope.push(reader.string());
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
            ...baseSecurityRequirement_SecurityRequirementValue,
        };
        message.scope = (object.scope ?? []).map((e) => String(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.scope) {
            obj.scope = message.scope.map((e) => e);
        }
        else {
            obj.scope = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSecurityRequirement_SecurityRequirementValue,
        };
        message.scope = object.scope?.map((e) => e) || [];
        return message;
    },
};
const baseSecurityRequirement_SecurityRequirementEntry = { key: "" };
export const SecurityRequirement_SecurityRequirementEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            SecurityRequirement_SecurityRequirementValue.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSecurityRequirement_SecurityRequirementEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = SecurityRequirement_SecurityRequirementValue.decode(reader, reader.uint32());
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
            ...baseSecurityRequirement_SecurityRequirementEntry,
        };
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? SecurityRequirement_SecurityRequirementValue.fromJSON(object.value)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? SecurityRequirement_SecurityRequirementValue.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSecurityRequirement_SecurityRequirementEntry,
        };
        message.key = object.key ?? "";
        message.value =
            object.value !== undefined && object.value !== null
                ? SecurityRequirement_SecurityRequirementValue.fromPartial(object.value)
                : undefined;
        return message;
    },
};
const baseScopes = {};
export const Scopes = {
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.scope).forEach(([key, value]) => {
            Scopes_ScopeEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScopes };
        message.scope = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = Scopes_ScopeEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.scope[entry1.key] = entry1.value;
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
        const message = { ...baseScopes };
        message.scope = Object.entries(object.scope ?? {}).reduce((acc, [key, value]) => {
            acc[key] = String(value);
            return acc;
        }, {});
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.scope = {};
        if (message.scope) {
            Object.entries(message.scope).forEach(([k, v]) => {
                obj.scope[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseScopes };
        message.scope = Object.entries(object.scope ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
const baseScopes_ScopeEntry = { key: "", value: "" };
export const Scopes_ScopeEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScopes_ScopeEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseScopes_ScopeEntry };
        message.key =
            object.key !== undefined && object.key !== null ? String(object.key) : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? String(object.value)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseScopes_ScopeEntry };
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
//# sourceMappingURL=openapiv2.js.map
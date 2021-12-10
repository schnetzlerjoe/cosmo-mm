/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Value } from "../../google/protobuf/struct";

export const protobufPackage = "grpc.gateway.protoc_gen_openapiv2.options";

/**
 * Scheme describes the schemes supported by the OpenAPI Swagger
 * and Operation objects.
 */
export enum Scheme {
  UNKNOWN = 0,
  HTTP = 1,
  HTTPS = 2,
  WS = 3,
  WSS = 4,
  UNRECOGNIZED = -1,
}

export function schemeFromJSON(object: any): Scheme {
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

export function schemeToJSON(object: Scheme): string {
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

/**
 * `Swagger` is a representation of OpenAPI v2 specification's Swagger object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#swaggerObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      title: "Echo API";
 *      version: "1.0";
 *      description: ";
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/master/LICENSE.txt";
 *      };
 *    };
 *    schemes: HTTPS;
 *    consumes: "application/json";
 *    produces: "application/json";
 *  };
 */
export interface Swagger {
  /**
   * Specifies the OpenAPI Specification version being used. It can be
   * used by the OpenAPI UI and other clients to interpret the API listing. The
   * value MUST be "2.0".
   */
  swagger: string;
  /**
   * Provides metadata about the API. The metadata can be used by the
   * clients if needed.
   */
  info?: Info;
  /**
   * The host (name or ip) serving the API. This MUST be the host only and does
   * not include the scheme nor sub-paths. It MAY include a port. If the host is
   * not included, the host serving the documentation is to be used (including
   * the port). The host does not support path templating.
   */
  host: string;
  /**
   * The base path on which the API is served, which is relative to the host. If
   * it is not included, the API is served directly under the host. The value
   * MUST start with a leading slash (/). The basePath does not support path
   * templating.
   * Note that using `base_path` does not change the endpoint paths that are
   * generated in the resulting OpenAPI file. If you wish to use `base_path`
   * with relatively generated OpenAPI paths, the `base_path` prefix must be
   * manually removed from your `google.api.http` paths and your code changed to
   * serve the API from the `base_path`.
   */
  basePath: string;
  /**
   * The transfer protocol of the API. Values MUST be from the list: "http",
   * "https", "ws", "wss". If the schemes is not included, the default scheme to
   * be used is the one used to access the OpenAPI definition itself.
   */
  schemes: Scheme[];
  /**
   * A list of MIME types the APIs can consume. This is global to all APIs but
   * can be overridden on specific API calls. Value MUST be as described under
   * Mime Types.
   */
  consumes: string[];
  /**
   * A list of MIME types the APIs can produce. This is global to all APIs but
   * can be overridden on specific API calls. Value MUST be as described under
   * Mime Types.
   */
  produces: string[];
  /**
   * An object to hold responses that can be used across operations. This
   * property does not define global responses for all operations.
   */
  responses: { [key: string]: Response };
  /** Security scheme definitions that can be used across the specification. */
  securityDefinitions?: SecurityDefinitions;
  /**
   * A declaration of which security schemes are applied for the API as a whole.
   * The list of values describes alternative security schemes that can be used
   * (that is, there is a logical OR between the security requirements).
   * Individual operations can override this definition.
   */
  security: SecurityRequirement[];
  /** Additional external documentation. */
  externalDocs?: ExternalDocumentation;
  extensions: { [key: string]: any };
}

export interface Swagger_ResponsesEntry {
  key: string;
  value?: Response;
}

export interface Swagger_ExtensionsEntry {
  key: string;
  value?: any;
}

/**
 * `Operation` is a representation of OpenAPI v2 specification's Operation object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#operationObject
 *
 * Example:
 *
 *  service EchoService {
 *    rpc Echo(SimpleMessage) returns (SimpleMessage) {
 *      option (google.api.http) = {
 *        get: "/v1/example/echo/{id}"
 *      };
 *
 *      option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_operation) = {
 *        summary: "Get a message.";
 *        operation_id: "getMessage";
 *        tags: "echo";
 *        responses: {
 *          key: "200"
 *            value: {
 *            description: "OK";
 *          }
 *        }
 *      };
 *    }
 *  }
 */
export interface Operation {
  /**
   * A list of tags for API documentation control. Tags can be used for logical
   * grouping of operations by resources or any other qualifier.
   */
  tags: string[];
  /**
   * A short summary of what the operation does. For maximum readability in the
   * swagger-ui, this field SHOULD be less than 120 characters.
   */
  summary: string;
  /**
   * A verbose explanation of the operation behavior. GFM syntax can be used for
   * rich text representation.
   */
  description: string;
  /** Additional external documentation for this operation. */
  externalDocs?: ExternalDocumentation;
  /**
   * Unique string used to identify the operation. The id MUST be unique among
   * all operations described in the API. Tools and libraries MAY use the
   * operationId to uniquely identify an operation, therefore, it is recommended
   * to follow common programming naming conventions.
   */
  operationId: string;
  /**
   * A list of MIME types the operation can consume. This overrides the consumes
   * definition at the OpenAPI Object. An empty value MAY be used to clear the
   * global definition. Value MUST be as described under Mime Types.
   */
  consumes: string[];
  /**
   * A list of MIME types the operation can produce. This overrides the produces
   * definition at the OpenAPI Object. An empty value MAY be used to clear the
   * global definition. Value MUST be as described under Mime Types.
   */
  produces: string[];
  /**
   * The list of possible responses as they are returned from executing this
   * operation.
   */
  responses: { [key: string]: Response };
  /**
   * The transfer protocol for the operation. Values MUST be from the list:
   * "http", "https", "ws", "wss". The value overrides the OpenAPI Object
   * schemes definition.
   */
  schemes: Scheme[];
  /**
   * Declares this operation to be deprecated. Usage of the declared operation
   * should be refrained. Default value is false.
   */
  deprecated: boolean;
  /**
   * A declaration of which security schemes are applied for this operation. The
   * list of values describes alternative security schemes that can be used
   * (that is, there is a logical OR between the security requirements). This
   * definition overrides any declared top-level security. To remove a top-level
   * security declaration, an empty array can be used.
   */
  security: SecurityRequirement[];
  extensions: { [key: string]: any };
}

export interface Operation_ResponsesEntry {
  key: string;
  value?: Response;
}

export interface Operation_ExtensionsEntry {
  key: string;
  value?: any;
}

/**
 * `Header` is a representation of OpenAPI v2 specification's Header object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#headerObject
 */
export interface Header {
  /** `Description` is a short description of the header. */
  description: string;
  /** The type of the object. The value MUST be one of "string", "number", "integer", or "boolean". The "array" type is not supported. */
  type: string;
  /** `Format` The extending format for the previously mentioned type. */
  format: string;
  /**
   * `Default` Declares the value of the header that the server will use if none is provided.
   * See: https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-6.2.
   * Unlike JSON Schema this value MUST conform to the defined type for the header.
   */
  default: string;
  /** 'Pattern' See https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.2.3. */
  pattern: string;
}

/**
 * `Response` is a representation of OpenAPI v2 specification's Response object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#responseObject
 */
export interface Response {
  /**
   * `Description` is a short description of the response.
   * GFM syntax can be used for rich text representation.
   */
  description: string;
  /**
   * `Schema` optionally defines the structure of the response.
   * If `Schema` is not provided, it means there is no content to the response.
   */
  schema?: Schema;
  /**
   * `Headers` A list of headers that are sent with the response.
   * `Header` name is expected to be a string in the canonical format of the MIME header key
   * See: https://golang.org/pkg/net/textproto/#CanonicalMIMEHeaderKey
   */
  headers: { [key: string]: Header };
  /**
   * `Examples` gives per-mimetype response examples.
   * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#example-object
   */
  examples: { [key: string]: string };
  extensions: { [key: string]: any };
}

export interface Response_HeadersEntry {
  key: string;
  value?: Header;
}

export interface Response_ExamplesEntry {
  key: string;
  value: string;
}

export interface Response_ExtensionsEntry {
  key: string;
  value?: any;
}

/**
 * `Info` is a representation of OpenAPI v2 specification's Info object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#infoObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      title: "Echo API";
 *      version: "1.0";
 *      description: ";
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/master/LICENSE.txt";
 *      };
 *    };
 *    ...
 *  };
 */
export interface Info {
  /** The title of the application. */
  title: string;
  /**
   * A short description of the application. GFM syntax can be used for rich
   * text representation.
   */
  description: string;
  /** The Terms of Service for the API. */
  termsOfService: string;
  /** The contact information for the exposed API. */
  contact?: Contact;
  /** The license information for the exposed API. */
  license?: License;
  /**
   * Provides the version of the application API (not to be confused
   * with the specification version).
   */
  version: string;
  extensions: { [key: string]: any };
}

export interface Info_ExtensionsEntry {
  key: string;
  value?: any;
}

/**
 * `Contact` is a representation of OpenAPI v2 specification's Contact object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#contactObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      ...
 *      contact: {
 *        name: "gRPC-Gateway project";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *        email: "none@example.com";
 *      };
 *      ...
 *    };
 *    ...
 *  };
 */
export interface Contact {
  /** The identifying name of the contact person/organization. */
  name: string;
  /**
   * The URL pointing to the contact information. MUST be in the format of a
   * URL.
   */
  url: string;
  /**
   * The email address of the contact person/organization. MUST be in the format
   * of an email address.
   */
  email: string;
}

/**
 * `License` is a representation of OpenAPI v2 specification's License object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#licenseObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    info: {
 *      ...
 *      license: {
 *        name: "BSD 3-Clause License";
 *        url: "https://github.com/grpc-ecosystem/grpc-gateway/blob/master/LICENSE.txt";
 *      };
 *      ...
 *    };
 *    ...
 *  };
 */
export interface License {
  /** The license name used for the API. */
  name: string;
  /** A URL to the license used for the API. MUST be in the format of a URL. */
  url: string;
}

/**
 * `ExternalDocumentation` is a representation of OpenAPI v2 specification's
 * ExternalDocumentation object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#externalDocumentationObject
 *
 * Example:
 *
 *  option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_swagger) = {
 *    ...
 *    external_docs: {
 *      description: "More about gRPC-Gateway";
 *      url: "https://github.com/grpc-ecosystem/grpc-gateway";
 *    }
 *    ...
 *  };
 */
export interface ExternalDocumentation {
  /**
   * A short description of the target documentation. GFM syntax can be used for
   * rich text representation.
   */
  description: string;
  /**
   * The URL for the target documentation. Value MUST be in the format
   * of a URL.
   */
  url: string;
}

/**
 * `Schema` is a representation of OpenAPI v2 specification's Schema object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
 */
export interface Schema {
  jsonSchema?: JSONSchema;
  /**
   * Adds support for polymorphism. The discriminator is the schema property
   * name that is used to differentiate between other schema that inherit this
   * schema. The property name used MUST be defined at this schema and it MUST
   * be in the required property list. When used, the value MUST be the name of
   * this schema or any schema that inherits it.
   */
  discriminator: string;
  /**
   * Relevant only for Schema "properties" definitions. Declares the property as
   * "read only". This means that it MAY be sent as part of a response but MUST
   * NOT be sent as part of the request. Properties marked as readOnly being
   * true SHOULD NOT be in the required list of the defined schema. Default
   * value is false.
   */
  readOnly: boolean;
  /** Additional external documentation for this schema. */
  externalDocs?: ExternalDocumentation;
  /**
   * A free-form property to include an example of an instance for this schema in JSON.
   * This is copied verbatim to the output.
   */
  example: string;
}

/**
 * `JSONSchema` represents properties from JSON Schema taken, and as used, in
 * the OpenAPI v2 spec.
 *
 * This includes changes made by OpenAPI v2.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
 *
 * See also: https://cswr.github.io/JsonSchema/spec/basic_types/,
 * https://github.com/json-schema-org/json-schema-spec/blob/master/schema.json
 *
 * Example:
 *
 *  message SimpleMessage {
 *    option (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_schema) = {
 *      json_schema: {
 *        title: "SimpleMessage"
 *        description: "A simple message."
 *        required: ["id"]
 *      }
 *    };
 *
 *    // Id represents the message identifier.
 *    string id = 1; [
 *        (grpc.gateway.protoc_gen_openapiv2.options.openapiv2_field) = {
 *          {description: "The unique identifier of the simple message."
 *        }];
 *  }
 */
export interface JSONSchema {
  /**
   * Ref is used to define an external reference to include in the message.
   * This could be a fully qualified proto message reference, and that type must
   * be imported into the protofile. If no message is identified, the Ref will
   * be used verbatim in the output.
   * For example:
   *  `ref: ".google.protobuf.Timestamp"`.
   */
  ref: string;
  /** The title of the schema. */
  title: string;
  /** A short description of the schema. */
  description: string;
  default: string;
  readOnly: boolean;
  /**
   * A free-form property to include a JSON example of this field. This is copied
   * verbatim to the output swagger.json. Quotes must be escaped.
   * This property is the same for 2.0 and 3.0.0 https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/3.0.0.md#schemaObject  https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#schemaObject
   */
  example: string;
  multipleOf: number;
  /**
   * Maximum represents an inclusive upper limit for a numeric instance. The
   * value of MUST be a number,
   */
  maximum: number;
  exclusiveMaximum: boolean;
  /**
   * minimum represents an inclusive lower limit for a numeric instance. The
   * value of MUST be a number,
   */
  minimum: number;
  exclusiveMinimum: boolean;
  maxLength: Long;
  minLength: Long;
  pattern: string;
  maxItems: Long;
  minItems: Long;
  uniqueItems: boolean;
  maxProperties: Long;
  minProperties: Long;
  required: string[];
  /** Items in 'array' must be unique. */
  array: string[];
  type: JSONSchema_JSONSchemaSimpleTypes[];
  /** `Format` */
  format: string;
  /** Items in `enum` must be unique https://tools.ietf.org/html/draft-fge-json-schema-validation-00#section-5.5.1 */
  enum: string[];
}

export enum JSONSchema_JSONSchemaSimpleTypes {
  UNKNOWN = 0,
  ARRAY = 1,
  BOOLEAN = 2,
  INTEGER = 3,
  NULL = 4,
  NUMBER = 5,
  OBJECT = 6,
  STRING = 7,
  UNRECOGNIZED = -1,
}

export function jSONSchema_JSONSchemaSimpleTypesFromJSON(
  object: any
): JSONSchema_JSONSchemaSimpleTypes {
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

export function jSONSchema_JSONSchemaSimpleTypesToJSON(
  object: JSONSchema_JSONSchemaSimpleTypes
): string {
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
 * `Tag` is a representation of OpenAPI v2 specification's Tag object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#tagObject
 */
export interface Tag {
  /**
   * A short description for the tag. GFM syntax can be used for rich text
   * representation.
   */
  description: string;
  /** Additional external documentation for this tag. */
  externalDocs?: ExternalDocumentation;
}

/**
 * `SecurityDefinitions` is a representation of OpenAPI v2 specification's
 * Security Definitions object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securityDefinitionsObject
 *
 * A declaration of the security schemes available to be used in the
 * specification. This does not enforce the security schemes on the operations
 * and only serves to provide the relevant details for each scheme.
 */
export interface SecurityDefinitions {
  /**
   * A single security scheme definition, mapping a "name" to the scheme it
   * defines.
   */
  security: { [key: string]: SecurityScheme };
}

export interface SecurityDefinitions_SecurityEntry {
  key: string;
  value?: SecurityScheme;
}

/**
 * `SecurityScheme` is a representation of OpenAPI v2 specification's
 * Security Scheme object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securitySchemeObject
 *
 * Allows the definition of a security scheme that can be used by the
 * operations. Supported schemes are basic authentication, an API key (either as
 * a header or as a query parameter) and OAuth2's common flows (implicit,
 * password, application and access code).
 */
export interface SecurityScheme {
  /**
   * The type of the security scheme. Valid values are "basic",
   * "apiKey" or "oauth2".
   */
  type: SecurityScheme_Type;
  /** A short description for security scheme. */
  description: string;
  /**
   * The name of the header or query parameter to be used.
   * Valid for apiKey.
   */
  name: string;
  /**
   * The location of the API key. Valid values are "query" or
   * "header".
   * Valid for apiKey.
   */
  in: SecurityScheme_In;
  /**
   * The flow used by the OAuth2 security scheme. Valid values are
   * "implicit", "password", "application" or "accessCode".
   * Valid for oauth2.
   */
  flow: SecurityScheme_Flow;
  /**
   * The authorization URL to be used for this flow. This SHOULD be in
   * the form of a URL.
   * Valid for oauth2/implicit and oauth2/accessCode.
   */
  authorizationUrl: string;
  /**
   * The token URL to be used for this flow. This SHOULD be in the
   * form of a URL.
   * Valid for oauth2/password, oauth2/application and oauth2/accessCode.
   */
  tokenUrl: string;
  /**
   * The available scopes for the OAuth2 security scheme.
   * Valid for oauth2.
   */
  scopes?: Scopes;
  extensions: { [key: string]: any };
}

/**
 * The type of the security scheme. Valid values are "basic",
 * "apiKey" or "oauth2".
 */
export enum SecurityScheme_Type {
  TYPE_INVALID = 0,
  TYPE_BASIC = 1,
  TYPE_API_KEY = 2,
  TYPE_OAUTH2 = 3,
  UNRECOGNIZED = -1,
}

export function securityScheme_TypeFromJSON(object: any): SecurityScheme_Type {
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

export function securityScheme_TypeToJSON(object: SecurityScheme_Type): string {
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
export enum SecurityScheme_In {
  IN_INVALID = 0,
  IN_QUERY = 1,
  IN_HEADER = 2,
  UNRECOGNIZED = -1,
}

export function securityScheme_InFromJSON(object: any): SecurityScheme_In {
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

export function securityScheme_InToJSON(object: SecurityScheme_In): string {
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
export enum SecurityScheme_Flow {
  FLOW_INVALID = 0,
  FLOW_IMPLICIT = 1,
  FLOW_PASSWORD = 2,
  FLOW_APPLICATION = 3,
  FLOW_ACCESS_CODE = 4,
  UNRECOGNIZED = -1,
}

export function securityScheme_FlowFromJSON(object: any): SecurityScheme_Flow {
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

export function securityScheme_FlowToJSON(object: SecurityScheme_Flow): string {
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

export interface SecurityScheme_ExtensionsEntry {
  key: string;
  value?: any;
}

/**
 * `SecurityRequirement` is a representation of OpenAPI v2 specification's
 * Security Requirement object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#securityRequirementObject
 *
 * Lists the required security schemes to execute this operation. The object can
 * have multiple security schemes declared in it which are all required (that
 * is, there is a logical AND between the schemes).
 *
 * The name used for each property MUST correspond to a security scheme
 * declared in the Security Definitions.
 */
export interface SecurityRequirement {
  /**
   * Each name must correspond to a security scheme which is declared in
   * the Security Definitions. If the security scheme is of type "oauth2",
   * then the value is a list of scope names required for the execution.
   * For other security scheme types, the array MUST be empty.
   */
  securityRequirement: {
    [key: string]: SecurityRequirement_SecurityRequirementValue;
  };
}

/**
 * If the security scheme is of type "oauth2", then the value is a list of
 * scope names required for the execution. For other security scheme types,
 * the array MUST be empty.
 */
export interface SecurityRequirement_SecurityRequirementValue {
  scope: string[];
}

export interface SecurityRequirement_SecurityRequirementEntry {
  key: string;
  value?: SecurityRequirement_SecurityRequirementValue;
}

/**
 * `Scopes` is a representation of OpenAPI v2 specification's Scopes object.
 *
 * See: https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/2.0.md#scopesObject
 *
 * Lists the available scopes for an OAuth2 security scheme.
 */
export interface Scopes {
  /**
   * Maps between a name of a scope to a short description of it (as the value
   * of the property).
   */
  scope: { [key: string]: string };
}

export interface Scopes_ScopeEntry {
  key: string;
  value: string;
}

const baseSwagger: object = {
  swagger: "",
  host: "",
  basePath: "",
  schemes: 0,
  consumes: "",
  produces: "",
};

export const Swagger = {
  encode(
    message: Swagger,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      writer.uint32(50).string(v!);
    }
    for (const v of message.produces) {
      writer.uint32(58).string(v!);
    }
    Object.entries(message.responses).forEach(([key, value]) => {
      Swagger_ResponsesEntry.encode(
        { key: key as any, value },
        writer.uint32(82).fork()
      ).ldelim();
    });
    if (message.securityDefinitions !== undefined) {
      SecurityDefinitions.encode(
        message.securityDefinitions,
        writer.uint32(90).fork()
      ).ldelim();
    }
    for (const v of message.security) {
      SecurityRequirement.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.externalDocs !== undefined) {
      ExternalDocumentation.encode(
        message.externalDocs,
        writer.uint32(114).fork()
      ).ldelim();
    }
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        Swagger_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(122).fork()
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Swagger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSwagger } as Swagger;
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
              message.schemes.push(reader.int32() as any);
            }
          } else {
            message.schemes.push(reader.int32() as any);
          }
          break;
        case 6:
          message.consumes.push(reader.string());
          break;
        case 7:
          message.produces.push(reader.string());
          break;
        case 10:
          const entry10 = Swagger_ResponsesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry10.value !== undefined) {
            message.responses[entry10.key] = entry10.value;
          }
          break;
        case 11:
          message.securityDefinitions = SecurityDefinitions.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.security.push(
            SecurityRequirement.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.externalDocs = ExternalDocumentation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          const entry15 = Swagger_ExtensionsEntry.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): Swagger {
    const message = { ...baseSwagger } as Swagger;
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
    message.schemes = (object.schemes ?? []).map((e: any) => schemeFromJSON(e));
    message.consumes = (object.consumes ?? []).map((e: any) => String(e));
    message.produces = (object.produces ?? []).map((e: any) => String(e));
    message.responses = Object.entries(object.responses ?? {}).reduce<{
      [key: string]: Response;
    }>((acc, [key, value]) => {
      acc[key] = Response.fromJSON(value);
      return acc;
    }, {});
    message.securityDefinitions =
      object.securityDefinitions !== undefined &&
      object.securityDefinitions !== null
        ? SecurityDefinitions.fromJSON(object.securityDefinitions)
        : undefined;
    message.security = (object.security ?? []).map((e: any) =>
      SecurityRequirement.fromJSON(e)
    );
    message.externalDocs =
      object.externalDocs !== undefined && object.externalDocs !== null
        ? ExternalDocumentation.fromJSON(object.externalDocs)
        : undefined;
    message.extensions = Object.entries(object.extensions ?? {}).reduce<{
      [key: string]: any;
    }>((acc, [key, value]) => {
      acc[key] = value as any;
      return acc;
    }, {});
    return message;
  },

  toJSON(message: Swagger): unknown {
    const obj: any = {};
    message.swagger !== undefined && (obj.swagger = message.swagger);
    message.info !== undefined &&
      (obj.info = message.info ? Info.toJSON(message.info) : undefined);
    message.host !== undefined && (obj.host = message.host);
    message.basePath !== undefined && (obj.basePath = message.basePath);
    if (message.schemes) {
      obj.schemes = message.schemes.map((e) => schemeToJSON(e));
    } else {
      obj.schemes = [];
    }
    if (message.consumes) {
      obj.consumes = message.consumes.map((e) => e);
    } else {
      obj.consumes = [];
    }
    if (message.produces) {
      obj.produces = message.produces.map((e) => e);
    } else {
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
      obj.security = message.security.map((e) =>
        e ? SecurityRequirement.toJSON(e) : undefined
      );
    } else {
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

  fromPartial<I extends Exact<DeepPartial<Swagger>, I>>(object: I): Swagger {
    const message = { ...baseSwagger } as Swagger;
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
    message.responses = Object.entries(object.responses ?? {}).reduce<{
      [key: string]: Response;
    }>((acc, [key, value]) => {
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
    message.extensions = Object.entries(object.extensions ?? {}).reduce<{
      [key: string]: any;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return message;
  },
};

const baseSwagger_ResponsesEntry: object = { key: "" };

export const Swagger_ResponsesEntry = {
  encode(
    message: Swagger_ResponsesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Response.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Swagger_ResponsesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSwagger_ResponsesEntry } as Swagger_ResponsesEntry;
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

  fromJSON(object: any): Swagger_ResponsesEntry {
    const message = { ...baseSwagger_ResponsesEntry } as Swagger_ResponsesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Response.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: Swagger_ResponsesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Response.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Swagger_ResponsesEntry>, I>>(
    object: I
  ): Swagger_ResponsesEntry {
    const message = { ...baseSwagger_ResponsesEntry } as Swagger_ResponsesEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Response.fromPartial(object.value)
        : undefined;
    return message;
  },
};

const baseSwagger_ExtensionsEntry: object = { key: "" };

export const Swagger_ExtensionsEntry = {
  encode(
    message: Swagger_ExtensionsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Swagger_ExtensionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSwagger_ExtensionsEntry,
    } as Swagger_ExtensionsEntry;
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

  fromJSON(object: any): Swagger_ExtensionsEntry {
    const message = {
      ...baseSwagger_ExtensionsEntry,
    } as Swagger_ExtensionsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value = object.value;
    return message;
  },

  toJSON(message: Swagger_ExtensionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Swagger_ExtensionsEntry>, I>>(
    object: I
  ): Swagger_ExtensionsEntry {
    const message = {
      ...baseSwagger_ExtensionsEntry,
    } as Swagger_ExtensionsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
    return message;
  },
};

const baseOperation: object = {
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
  encode(
    message: Operation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.tags) {
      writer.uint32(10).string(v!);
    }
    if (message.summary !== "") {
      writer.uint32(18).string(message.summary);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.externalDocs !== undefined) {
      ExternalDocumentation.encode(
        message.externalDocs,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.operationId !== "") {
      writer.uint32(42).string(message.operationId);
    }
    for (const v of message.consumes) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.produces) {
      writer.uint32(58).string(v!);
    }
    Object.entries(message.responses).forEach(([key, value]) => {
      Operation_ResponsesEntry.encode(
        { key: key as any, value },
        writer.uint32(74).fork()
      ).ldelim();
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
      SecurityRequirement.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        Operation_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(106).fork()
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOperation } as Operation;
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
          message.externalDocs = ExternalDocumentation.decode(
            reader,
            reader.uint32()
          );
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
          const entry9 = Operation_ResponsesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry9.value !== undefined) {
            message.responses[entry9.key] = entry9.value;
          }
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.schemes.push(reader.int32() as any);
            }
          } else {
            message.schemes.push(reader.int32() as any);
          }
          break;
        case 11:
          message.deprecated = reader.bool();
          break;
        case 12:
          message.security.push(
            SecurityRequirement.decode(reader, reader.uint32())
          );
          break;
        case 13:
          const entry13 = Operation_ExtensionsEntry.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): Operation {
    const message = { ...baseOperation } as Operation;
    message.tags = (object.tags ?? []).map((e: any) => String(e));
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
    message.consumes = (object.consumes ?? []).map((e: any) => String(e));
    message.produces = (object.produces ?? []).map((e: any) => String(e));
    message.responses = Object.entries(object.responses ?? {}).reduce<{
      [key: string]: Response;
    }>((acc, [key, value]) => {
      acc[key] = Response.fromJSON(value);
      return acc;
    }, {});
    message.schemes = (object.schemes ?? []).map((e: any) => schemeFromJSON(e));
    message.deprecated =
      object.deprecated !== undefined && object.deprecated !== null
        ? Boolean(object.deprecated)
        : false;
    message.security = (object.security ?? []).map((e: any) =>
      SecurityRequirement.fromJSON(e)
    );
    message.extensions = Object.entries(object.extensions ?? {}).reduce<{
      [key: string]: any;
    }>((acc, [key, value]) => {
      acc[key] = value as any;
      return acc;
    }, {});
    return message;
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
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
    } else {
      obj.consumes = [];
    }
    if (message.produces) {
      obj.produces = message.produces.map((e) => e);
    } else {
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
    } else {
      obj.schemes = [];
    }
    message.deprecated !== undefined && (obj.deprecated = message.deprecated);
    if (message.security) {
      obj.security = message.security.map((e) =>
        e ? SecurityRequirement.toJSON(e) : undefined
      );
    } else {
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

  fromPartial<I extends Exact<DeepPartial<Operation>, I>>(
    object: I
  ): Operation {
    const message = { ...baseOperation } as Operation;
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
    message.responses = Object.entries(object.responses ?? {}).reduce<{
      [key: string]: Response;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Response.fromPartial(value);
      }
      return acc;
    }, {});
    message.schemes = object.schemes?.map((e) => e) || [];
    message.deprecated = object.deprecated ?? false;
    message.security =
      object.security?.map((e) => SecurityRequirement.fromPartial(e)) || [];
    message.extensions = Object.entries(object.extensions ?? {}).reduce<{
      [key: string]: any;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return message;
  },
};

const baseOperation_ResponsesEntry: object = { key: "" };

export const Operation_ResponsesEntry = {
  encode(
    message: Operation_ResponsesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Response.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Operation_ResponsesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOperation_ResponsesEntry,
    } as Operation_ResponsesEntry;
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

  fromJSON(object: any): Operation_ResponsesEntry {
    const message = {
      ...baseOperation_ResponsesEntry,
    } as Operation_ResponsesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Response.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: Operation_ResponsesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Response.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Operation_ResponsesEntry>, I>>(
    object: I
  ): Operation_ResponsesEntry {
    const message = {
      ...baseOperation_ResponsesEntry,
    } as Operation_ResponsesEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Response.fromPartial(object.value)
        : undefined;
    return message;
  },
};

const baseOperation_ExtensionsEntry: object = { key: "" };

export const Operation_ExtensionsEntry = {
  encode(
    message: Operation_ExtensionsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Operation_ExtensionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseOperation_ExtensionsEntry,
    } as Operation_ExtensionsEntry;
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

  fromJSON(object: any): Operation_ExtensionsEntry {
    const message = {
      ...baseOperation_ExtensionsEntry,
    } as Operation_ExtensionsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value = object.value;
    return message;
  },

  toJSON(message: Operation_ExtensionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Operation_ExtensionsEntry>, I>>(
    object: I
  ): Operation_ExtensionsEntry {
    const message = {
      ...baseOperation_ExtensionsEntry,
    } as Operation_ExtensionsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
    return message;
  },
};

const baseHeader: object = {
  description: "",
  type: "",
  format: "",
  default: "",
  pattern: "",
};

export const Header = {
  encode(
    message: Header,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseHeader } as Header;
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

  fromJSON(object: any): Header {
    const message = { ...baseHeader } as Header;
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

  toJSON(message: Header): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description);
    message.type !== undefined && (obj.type = message.type);
    message.format !== undefined && (obj.format = message.format);
    message.default !== undefined && (obj.default = message.default);
    message.pattern !== undefined && (obj.pattern = message.pattern);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Header>, I>>(object: I): Header {
    const message = { ...baseHeader } as Header;
    message.description = object.description ?? "";
    message.type = object.type ?? "";
    message.format = object.format ?? "";
    message.default = object.default ?? "";
    message.pattern = object.pattern ?? "";
    return message;
  },
};

const baseResponse: object = { description: "" };

export const Response = {
  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.schema !== undefined) {
      Schema.encode(message.schema, writer.uint32(18).fork()).ldelim();
    }
    Object.entries(message.headers).forEach(([key, value]) => {
      Response_HeadersEntry.encode(
        { key: key as any, value },
        writer.uint32(26).fork()
      ).ldelim();
    });
    Object.entries(message.examples).forEach(([key, value]) => {
      Response_ExamplesEntry.encode(
        { key: key as any, value },
        writer.uint32(34).fork()
      ).ldelim();
    });
    Object.entries(message.extensions).forEach(([key, value]) => {
      if (value !== undefined) {
        Response_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(42).fork()
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponse } as Response;
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
          const entry5 = Response_ExtensionsEntry.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): Response {
    const message = { ...baseResponse } as Response;
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.schema =
      object.schema !== undefined && object.schema !== null
        ? Schema.fromJSON(object.schema)
        : undefined;
    message.headers = Object.entries(object.headers ?? {}).reduce<{
      [key: string]: Header;
    }>((acc, [key, value]) => {
      acc[key] = Header.fromJSON(value);
      return acc;
    }, {});
    message.examples = Object.entries(object.examples ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    message.extensions = Object.entries(object.extensions ?? {}).reduce<{
      [key: string]: any;
    }>((acc, [key, value]) => {
      acc[key] = value as any;
      return acc;
    }, {});
    return message;
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
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

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = { ...baseResponse } as Response;
    message.description = object.description ?? "";
    message.schema =
      object.schema !== undefined && object.schema !== null
        ? Schema.fromPartial(object.schema)
        : undefined;
    message.headers = Object.entries(object.headers ?? {}).reduce<{
      [key: string]: Header;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Header.fromPartial(value);
      }
      return acc;
    }, {});
    message.examples = Object.entries(object.examples ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.extensions = Object.entries(object.extensions ?? {}).reduce<{
      [key: string]: any;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return message;
  },
};

const baseResponse_HeadersEntry: object = { key: "" };

export const Response_HeadersEntry = {
  encode(
    message: Response_HeadersEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Header.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Response_HeadersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponse_HeadersEntry } as Response_HeadersEntry;
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

  fromJSON(object: any): Response_HeadersEntry {
    const message = { ...baseResponse_HeadersEntry } as Response_HeadersEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Header.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: Response_HeadersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value ? Header.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_HeadersEntry>, I>>(
    object: I
  ): Response_HeadersEntry {
    const message = { ...baseResponse_HeadersEntry } as Response_HeadersEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Header.fromPartial(object.value)
        : undefined;
    return message;
  },
};

const baseResponse_ExamplesEntry: object = { key: "", value: "" };

export const Response_ExamplesEntry = {
  encode(
    message: Response_ExamplesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Response_ExamplesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResponse_ExamplesEntry } as Response_ExamplesEntry;
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

  fromJSON(object: any): Response_ExamplesEntry {
    const message = { ...baseResponse_ExamplesEntry } as Response_ExamplesEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Response_ExamplesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_ExamplesEntry>, I>>(
    object: I
  ): Response_ExamplesEntry {
    const message = { ...baseResponse_ExamplesEntry } as Response_ExamplesEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

const baseResponse_ExtensionsEntry: object = { key: "" };

export const Response_ExtensionsEntry = {
  encode(
    message: Response_ExtensionsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Response_ExtensionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseResponse_ExtensionsEntry,
    } as Response_ExtensionsEntry;
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

  fromJSON(object: any): Response_ExtensionsEntry {
    const message = {
      ...baseResponse_ExtensionsEntry,
    } as Response_ExtensionsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value = object.value;
    return message;
  },

  toJSON(message: Response_ExtensionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_ExtensionsEntry>, I>>(
    object: I
  ): Response_ExtensionsEntry {
    const message = {
      ...baseResponse_ExtensionsEntry,
    } as Response_ExtensionsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
    return message;
  },
};

const baseInfo: object = {
  title: "",
  description: "",
  termsOfService: "",
  version: "",
};

export const Info = {
  encode(message: Info, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
        Info_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(58).fork()
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Info {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInfo } as Info;
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

  fromJSON(object: any): Info {
    const message = { ...baseInfo } as Info;
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
    message.extensions = Object.entries(object.extensions ?? {}).reduce<{
      [key: string]: any;
    }>((acc, [key, value]) => {
      acc[key] = value as any;
      return acc;
    }, {});
    return message;
  },

  toJSON(message: Info): unknown {
    const obj: any = {};
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

  fromPartial<I extends Exact<DeepPartial<Info>, I>>(object: I): Info {
    const message = { ...baseInfo } as Info;
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
    message.extensions = Object.entries(object.extensions ?? {}).reduce<{
      [key: string]: any;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return message;
  },
};

const baseInfo_ExtensionsEntry: object = { key: "" };

export const Info_ExtensionsEntry = {
  encode(
    message: Info_ExtensionsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Info_ExtensionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseInfo_ExtensionsEntry } as Info_ExtensionsEntry;
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

  fromJSON(object: any): Info_ExtensionsEntry {
    const message = { ...baseInfo_ExtensionsEntry } as Info_ExtensionsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value = object.value;
    return message;
  },

  toJSON(message: Info_ExtensionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Info_ExtensionsEntry>, I>>(
    object: I
  ): Info_ExtensionsEntry {
    const message = { ...baseInfo_ExtensionsEntry } as Info_ExtensionsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
    return message;
  },
};

const baseContact: object = { name: "", url: "", email: "" };

export const Contact = {
  encode(
    message: Contact,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Contact {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseContact } as Contact;
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

  fromJSON(object: any): Contact {
    const message = { ...baseContact } as Contact;
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

  toJSON(message: Contact): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.url !== undefined && (obj.url = message.url);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Contact>, I>>(object: I): Contact {
    const message = { ...baseContact } as Contact;
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    message.email = object.email ?? "";
    return message;
  },
};

const baseLicense: object = { name: "", url: "" };

export const License = {
  encode(
    message: License,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): License {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLicense } as License;
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

  fromJSON(object: any): License {
    const message = { ...baseLicense } as License;
    message.name =
      object.name !== undefined && object.name !== null
        ? String(object.name)
        : "";
    message.url =
      object.url !== undefined && object.url !== null ? String(object.url) : "";
    return message;
  },

  toJSON(message: License): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<License>, I>>(object: I): License {
    const message = { ...baseLicense } as License;
    message.name = object.name ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

const baseExternalDocumentation: object = { description: "", url: "" };

export const ExternalDocumentation = {
  encode(
    message: ExternalDocumentation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ExternalDocumentation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExternalDocumentation } as ExternalDocumentation;
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

  fromJSON(object: any): ExternalDocumentation {
    const message = { ...baseExternalDocumentation } as ExternalDocumentation;
    message.description =
      object.description !== undefined && object.description !== null
        ? String(object.description)
        : "";
    message.url =
      object.url !== undefined && object.url !== null ? String(object.url) : "";
    return message;
  },

  toJSON(message: ExternalDocumentation): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description);
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ExternalDocumentation>, I>>(
    object: I
  ): ExternalDocumentation {
    const message = { ...baseExternalDocumentation } as ExternalDocumentation;
    message.description = object.description ?? "";
    message.url = object.url ?? "";
    return message;
  },
};

const baseSchema: object = { discriminator: "", readOnly: false, example: "" };

export const Schema = {
  encode(
    message: Schema,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      ExternalDocumentation.encode(
        message.externalDocs,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.example !== "") {
      writer.uint32(50).string(message.example);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Schema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSchema } as Schema;
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
          message.externalDocs = ExternalDocumentation.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): Schema {
    const message = { ...baseSchema } as Schema;
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

  toJSON(message: Schema): unknown {
    const obj: any = {};
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

  fromPartial<I extends Exact<DeepPartial<Schema>, I>>(object: I): Schema {
    const message = { ...baseSchema } as Schema;
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

const baseJSONSchema: object = {
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
  encode(
    message: JSONSchema,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      writer.uint32(210).string(v!);
    }
    for (const v of message.array) {
      writer.uint32(274).string(v!);
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
      writer.uint32(370).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): JSONSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseJSONSchema } as JSONSchema;
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
          message.maxLength = reader.uint64() as Long;
          break;
        case 16:
          message.minLength = reader.uint64() as Long;
          break;
        case 17:
          message.pattern = reader.string();
          break;
        case 20:
          message.maxItems = reader.uint64() as Long;
          break;
        case 21:
          message.minItems = reader.uint64() as Long;
          break;
        case 22:
          message.uniqueItems = reader.bool();
          break;
        case 24:
          message.maxProperties = reader.uint64() as Long;
          break;
        case 25:
          message.minProperties = reader.uint64() as Long;
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
              message.type.push(reader.int32() as any);
            }
          } else {
            message.type.push(reader.int32() as any);
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

  fromJSON(object: any): JSONSchema {
    const message = { ...baseJSONSchema } as JSONSchema;
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
    message.required = (object.required ?? []).map((e: any) => String(e));
    message.array = (object.array ?? []).map((e: any) => String(e));
    message.type = (object.type ?? []).map((e: any) =>
      jSONSchema_JSONSchemaSimpleTypesFromJSON(e)
    );
    message.format =
      object.format !== undefined && object.format !== null
        ? String(object.format)
        : "";
    message.enum = (object.enum ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: JSONSchema): unknown {
    const obj: any = {};
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
    } else {
      obj.required = [];
    }
    if (message.array) {
      obj.array = message.array.map((e) => e);
    } else {
      obj.array = [];
    }
    if (message.type) {
      obj.type = message.type.map((e) =>
        jSONSchema_JSONSchemaSimpleTypesToJSON(e)
      );
    } else {
      obj.type = [];
    }
    message.format !== undefined && (obj.format = message.format);
    if (message.enum) {
      obj.enum = message.enum.map((e) => e);
    } else {
      obj.enum = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<JSONSchema>, I>>(
    object: I
  ): JSONSchema {
    const message = { ...baseJSONSchema } as JSONSchema;
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

const baseTag: object = { description: "" };

export const Tag = {
  encode(message: Tag, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.externalDocs !== undefined) {
      ExternalDocumentation.encode(
        message.externalDocs,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tag {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTag } as Tag;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.externalDocs = ExternalDocumentation.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tag {
    const message = { ...baseTag } as Tag;
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

  toJSON(message: Tag): unknown {
    const obj: any = {};
    message.description !== undefined &&
      (obj.description = message.description);
    message.externalDocs !== undefined &&
      (obj.externalDocs = message.externalDocs
        ? ExternalDocumentation.toJSON(message.externalDocs)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Tag>, I>>(object: I): Tag {
    const message = { ...baseTag } as Tag;
    message.description = object.description ?? "";
    message.externalDocs =
      object.externalDocs !== undefined && object.externalDocs !== null
        ? ExternalDocumentation.fromPartial(object.externalDocs)
        : undefined;
    return message;
  },
};

const baseSecurityDefinitions: object = {};

export const SecurityDefinitions = {
  encode(
    message: SecurityDefinitions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.security).forEach(([key, value]) => {
      SecurityDefinitions_SecurityEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecurityDefinitions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSecurityDefinitions } as SecurityDefinitions;
    message.security = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SecurityDefinitions_SecurityEntry.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): SecurityDefinitions {
    const message = { ...baseSecurityDefinitions } as SecurityDefinitions;
    message.security = Object.entries(object.security ?? {}).reduce<{
      [key: string]: SecurityScheme;
    }>((acc, [key, value]) => {
      acc[key] = SecurityScheme.fromJSON(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: SecurityDefinitions): unknown {
    const obj: any = {};
    obj.security = {};
    if (message.security) {
      Object.entries(message.security).forEach(([k, v]) => {
        obj.security[k] = SecurityScheme.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SecurityDefinitions>, I>>(
    object: I
  ): SecurityDefinitions {
    const message = { ...baseSecurityDefinitions } as SecurityDefinitions;
    message.security = Object.entries(object.security ?? {}).reduce<{
      [key: string]: SecurityScheme;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = SecurityScheme.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
};

const baseSecurityDefinitions_SecurityEntry: object = { key: "" };

export const SecurityDefinitions_SecurityEntry = {
  encode(
    message: SecurityDefinitions_SecurityEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SecurityScheme.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SecurityDefinitions_SecurityEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSecurityDefinitions_SecurityEntry,
    } as SecurityDefinitions_SecurityEntry;
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

  fromJSON(object: any): SecurityDefinitions_SecurityEntry {
    const message = {
      ...baseSecurityDefinitions_SecurityEntry,
    } as SecurityDefinitions_SecurityEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? SecurityScheme.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: SecurityDefinitions_SecurityEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? SecurityScheme.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SecurityDefinitions_SecurityEntry>, I>
  >(object: I): SecurityDefinitions_SecurityEntry {
    const message = {
      ...baseSecurityDefinitions_SecurityEntry,
    } as SecurityDefinitions_SecurityEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? SecurityScheme.fromPartial(object.value)
        : undefined;
    return message;
  },
};

const baseSecurityScheme: object = {
  type: 0,
  description: "",
  name: "",
  in: 0,
  flow: 0,
  authorizationUrl: "",
  tokenUrl: "",
};

export const SecurityScheme = {
  encode(
    message: SecurityScheme,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
        SecurityScheme_ExtensionsEntry.encode(
          { key: key as any, value },
          writer.uint32(74).fork()
        ).ldelim();
      }
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecurityScheme {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSecurityScheme } as SecurityScheme;
    message.extensions = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.in = reader.int32() as any;
          break;
        case 5:
          message.flow = reader.int32() as any;
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
          const entry9 = SecurityScheme_ExtensionsEntry.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): SecurityScheme {
    const message = { ...baseSecurityScheme } as SecurityScheme;
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
    message.extensions = Object.entries(object.extensions ?? {}).reduce<{
      [key: string]: any;
    }>((acc, [key, value]) => {
      acc[key] = value as any;
      return acc;
    }, {});
    return message;
  },

  toJSON(message: SecurityScheme): unknown {
    const obj: any = {};
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

  fromPartial<I extends Exact<DeepPartial<SecurityScheme>, I>>(
    object: I
  ): SecurityScheme {
    const message = { ...baseSecurityScheme } as SecurityScheme;
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
    message.extensions = Object.entries(object.extensions ?? {}).reduce<{
      [key: string]: any;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return message;
  },
};

const baseSecurityScheme_ExtensionsEntry: object = { key: "" };

export const SecurityScheme_ExtensionsEntry = {
  encode(
    message: SecurityScheme_ExtensionsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(
        Value.wrap(message.value),
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SecurityScheme_ExtensionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSecurityScheme_ExtensionsEntry,
    } as SecurityScheme_ExtensionsEntry;
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

  fromJSON(object: any): SecurityScheme_ExtensionsEntry {
    const message = {
      ...baseSecurityScheme_ExtensionsEntry,
    } as SecurityScheme_ExtensionsEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value = object.value;
    return message;
  },

  toJSON(message: SecurityScheme_ExtensionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SecurityScheme_ExtensionsEntry>, I>>(
    object: I
  ): SecurityScheme_ExtensionsEntry {
    const message = {
      ...baseSecurityScheme_ExtensionsEntry,
    } as SecurityScheme_ExtensionsEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? undefined;
    return message;
  },
};

const baseSecurityRequirement: object = {};

export const SecurityRequirement = {
  encode(
    message: SecurityRequirement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.securityRequirement).forEach(([key, value]) => {
      SecurityRequirement_SecurityRequirementEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SecurityRequirement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSecurityRequirement } as SecurityRequirement;
    message.securityRequirement = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = SecurityRequirement_SecurityRequirementEntry.decode(
            reader,
            reader.uint32()
          );
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

  fromJSON(object: any): SecurityRequirement {
    const message = { ...baseSecurityRequirement } as SecurityRequirement;
    message.securityRequirement = Object.entries(
      object.securityRequirement ?? {}
    ).reduce<{ [key: string]: SecurityRequirement_SecurityRequirementValue }>(
      (acc, [key, value]) => {
        acc[key] = SecurityRequirement_SecurityRequirementValue.fromJSON(value);
        return acc;
      },
      {}
    );
    return message;
  },

  toJSON(message: SecurityRequirement): unknown {
    const obj: any = {};
    obj.securityRequirement = {};
    if (message.securityRequirement) {
      Object.entries(message.securityRequirement).forEach(([k, v]) => {
        obj.securityRequirement[k] =
          SecurityRequirement_SecurityRequirementValue.toJSON(v);
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SecurityRequirement>, I>>(
    object: I
  ): SecurityRequirement {
    const message = { ...baseSecurityRequirement } as SecurityRequirement;
    message.securityRequirement = Object.entries(
      object.securityRequirement ?? {}
    ).reduce<{ [key: string]: SecurityRequirement_SecurityRequirementValue }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] =
            SecurityRequirement_SecurityRequirementValue.fromPartial(value);
        }
        return acc;
      },
      {}
    );
    return message;
  },
};

const baseSecurityRequirement_SecurityRequirementValue: object = { scope: "" };

export const SecurityRequirement_SecurityRequirementValue = {
  encode(
    message: SecurityRequirement_SecurityRequirementValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.scope) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SecurityRequirement_SecurityRequirementValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSecurityRequirement_SecurityRequirementValue,
    } as SecurityRequirement_SecurityRequirementValue;
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

  fromJSON(object: any): SecurityRequirement_SecurityRequirementValue {
    const message = {
      ...baseSecurityRequirement_SecurityRequirementValue,
    } as SecurityRequirement_SecurityRequirementValue;
    message.scope = (object.scope ?? []).map((e: any) => String(e));
    return message;
  },

  toJSON(message: SecurityRequirement_SecurityRequirementValue): unknown {
    const obj: any = {};
    if (message.scope) {
      obj.scope = message.scope.map((e) => e);
    } else {
      obj.scope = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<SecurityRequirement_SecurityRequirementValue>,
      I
    >
  >(object: I): SecurityRequirement_SecurityRequirementValue {
    const message = {
      ...baseSecurityRequirement_SecurityRequirementValue,
    } as SecurityRequirement_SecurityRequirementValue;
    message.scope = object.scope?.map((e) => e) || [];
    return message;
  },
};

const baseSecurityRequirement_SecurityRequirementEntry: object = { key: "" };

export const SecurityRequirement_SecurityRequirementEntry = {
  encode(
    message: SecurityRequirement_SecurityRequirementEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      SecurityRequirement_SecurityRequirementValue.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SecurityRequirement_SecurityRequirementEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSecurityRequirement_SecurityRequirementEntry,
    } as SecurityRequirement_SecurityRequirementEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = SecurityRequirement_SecurityRequirementValue.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SecurityRequirement_SecurityRequirementEntry {
    const message = {
      ...baseSecurityRequirement_SecurityRequirementEntry,
    } as SecurityRequirement_SecurityRequirementEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? SecurityRequirement_SecurityRequirementValue.fromJSON(object.value)
        : undefined;
    return message;
  },

  toJSON(message: SecurityRequirement_SecurityRequirementEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? SecurityRequirement_SecurityRequirementValue.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<SecurityRequirement_SecurityRequirementEntry>,
      I
    >
  >(object: I): SecurityRequirement_SecurityRequirementEntry {
    const message = {
      ...baseSecurityRequirement_SecurityRequirementEntry,
    } as SecurityRequirement_SecurityRequirementEntry;
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? SecurityRequirement_SecurityRequirementValue.fromPartial(object.value)
        : undefined;
    return message;
  },
};

const baseScopes: object = {};

export const Scopes = {
  encode(
    message: Scopes,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    Object.entries(message.scope).forEach(([key, value]) => {
      Scopes_ScopeEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Scopes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScopes } as Scopes;
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

  fromJSON(object: any): Scopes {
    const message = { ...baseScopes } as Scopes;
    message.scope = Object.entries(object.scope ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {});
    return message;
  },

  toJSON(message: Scopes): unknown {
    const obj: any = {};
    obj.scope = {};
    if (message.scope) {
      Object.entries(message.scope).forEach(([k, v]) => {
        obj.scope[k] = v;
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Scopes>, I>>(object: I): Scopes {
    const message = { ...baseScopes } as Scopes;
    message.scope = Object.entries(object.scope ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

const baseScopes_ScopeEntry: object = { key: "", value: "" };

export const Scopes_ScopeEntry = {
  encode(
    message: Scopes_ScopeEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Scopes_ScopeEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseScopes_ScopeEntry } as Scopes_ScopeEntry;
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

  fromJSON(object: any): Scopes_ScopeEntry {
    const message = { ...baseScopes_ScopeEntry } as Scopes_ScopeEntry;
    message.key =
      object.key !== undefined && object.key !== null ? String(object.key) : "";
    message.value =
      object.value !== undefined && object.value !== null
        ? String(object.value)
        : "";
    return message;
  },

  toJSON(message: Scopes_ScopeEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Scopes_ScopeEntry>, I>>(
    object: I
  ): Scopes_ScopeEntry {
    const message = { ...baseScopes_ScopeEntry } as Scopes_ScopeEntry;
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
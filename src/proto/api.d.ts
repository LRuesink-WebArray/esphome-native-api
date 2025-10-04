import * as $protobuf from "protobufjs";
import Long = require("long");
/** APISourceType enum. */
export enum APISourceType {
    SOURCE_BOTH = 0,
    SOURCE_SERVER = 1,
    SOURCE_CLIENT = 2
}

/** Represents a VoidMessage. */
export class VoidMessage implements IVoidMessage {

    /**
     * Constructs a new VoidMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoidMessage);

    /**
     * Creates a new VoidMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoidMessage instance
     */
    public static create(properties?: IVoidMessage): VoidMessage;

    /**
     * Encodes the specified VoidMessage message. Does not implicitly {@link VoidMessage.verify|verify} messages.
     * @param message VoidMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoidMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoidMessage message, length delimited. Does not implicitly {@link VoidMessage.verify|verify} messages.
     * @param message VoidMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoidMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoidMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoidMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoidMessage;

    /**
     * Decodes a VoidMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoidMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoidMessage;

    /**
     * Verifies a VoidMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoidMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoidMessage
     */
    public static fromObject(object: { [k: string]: any }): VoidMessage;

    /**
     * Creates a plain object from a VoidMessage message. Also converts values to other types if specified.
     * @param message VoidMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoidMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoidMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoidMessage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_LEGACY = 900,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto public_dependency */
            public_dependency?: (number[]|null);

            /** FileDescriptorProto weak_dependency */
            weak_dependency?: (number[]|null);

            /** FileDescriptorProto option_dependency */
            option_dependency?: (string[]|null);

            /** FileDescriptorProto message_type */
            message_type?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info */
            source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);

            /** FileDescriptorProto edition */
            edition?: (google.protobuf.Edition|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto public_dependency. */
            public public_dependency: number[];

            /** FileDescriptorProto weak_dependency. */
            public weak_dependency: number[];

            /** FileDescriptorProto option_dependency. */
            public option_dependency: string[];

            /** FileDescriptorProto message_type. */
            public message_type: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info. */
            public source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /** FileDescriptorProto edition. */
            public edition: google.protobuf.Edition;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nested_type */
            nested_type?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extension_range */
            extension_range?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneof_decl */
            oneof_decl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range */
            reserved_range?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reserved_name */
            reserved_name?: (string[]|null);

            /** DescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nested_type. */
            public nested_type: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extension_range. */
            public extension_range: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneof_decl. */
            public oneof_decl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range. */
            public reserved_range: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reserved_name. */
            public reserved_name: string[];

            /** DescriptorProto visibility. */
            public visibility: google.protobuf.SymbolVisibility;

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: google.protobuf.ExtensionRangeOptions.VerificationState;

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration full_name */
                full_name?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration full_name. */
                public full_name: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto type_name */
            type_name?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto default_value */
            default_value?: (string|null);

            /** FieldDescriptorProto oneof_index */
            oneof_index?: (number|null);

            /** FieldDescriptorProto json_name */
            json_name?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3_optional */
            proto3_optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto type_name. */
            public type_name: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto default_value. */
            public default_value: string;

            /** FieldDescriptorProto oneof_index. */
            public oneof_index: number;

            /** FieldDescriptorProto json_name. */
            public json_name: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3_optional. */
            public proto3_optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reserved_range */
            reserved_range?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reserved_name */
            reserved_name?: (string[]|null);

            /** EnumDescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reserved_range. */
            public reserved_range: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reserved_name. */
            public reserved_name: string[];

            /** EnumDescriptorProto visibility. */
            public visibility: google.protobuf.SymbolVisibility;

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto input_type */
            input_type?: (string|null);

            /** MethodDescriptorProto output_type */
            output_type?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming */
            client_streaming?: (boolean|null);

            /** MethodDescriptorProto server_streaming */
            server_streaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto input_type. */
            public input_type: string;

            /** MethodDescriptorProto output_type. */
            public output_type: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming. */
            public client_streaming: boolean;

            /** MethodDescriptorProto server_streaming. */
            public server_streaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions java_package */
            java_package?: (string|null);

            /** FileOptions java_outer_classname */
            java_outer_classname?: (string|null);

            /** FileOptions java_multiple_files */
            java_multiple_files?: (boolean|null);

            /** FileOptions java_generate_equals_and_hash */
            java_generate_equals_and_hash?: (boolean|null);

            /** FileOptions java_string_check_utf8 */
            java_string_check_utf8?: (boolean|null);

            /** FileOptions optimize_for */
            optimize_for?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions go_package */
            go_package?: (string|null);

            /** FileOptions cc_generic_services */
            cc_generic_services?: (boolean|null);

            /** FileOptions java_generic_services */
            java_generic_services?: (boolean|null);

            /** FileOptions py_generic_services */
            py_generic_services?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions cc_enable_arenas */
            cc_enable_arenas?: (boolean|null);

            /** FileOptions objc_class_prefix */
            objc_class_prefix?: (string|null);

            /** FileOptions csharp_namespace */
            csharp_namespace?: (string|null);

            /** FileOptions swift_prefix */
            swift_prefix?: (string|null);

            /** FileOptions php_class_prefix */
            php_class_prefix?: (string|null);

            /** FileOptions php_namespace */
            php_namespace?: (string|null);

            /** FileOptions php_metadata_namespace */
            php_metadata_namespace?: (string|null);

            /** FileOptions ruby_package */
            ruby_package?: (string|null);

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions java_package. */
            public java_package: string;

            /** FileOptions java_outer_classname. */
            public java_outer_classname: string;

            /** FileOptions java_multiple_files. */
            public java_multiple_files: boolean;

            /** FileOptions java_generate_equals_and_hash. */
            public java_generate_equals_and_hash: boolean;

            /** FileOptions java_string_check_utf8. */
            public java_string_check_utf8: boolean;

            /** FileOptions optimize_for. */
            public optimize_for: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions go_package. */
            public go_package: string;

            /** FileOptions cc_generic_services. */
            public cc_generic_services: boolean;

            /** FileOptions java_generic_services. */
            public java_generic_services: boolean;

            /** FileOptions py_generic_services. */
            public py_generic_services: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions cc_enable_arenas. */
            public cc_enable_arenas: boolean;

            /** FileOptions objc_class_prefix. */
            public objc_class_prefix: string;

            /** FileOptions csharp_namespace. */
            public csharp_namespace: string;

            /** FileOptions swift_prefix. */
            public swift_prefix: string;

            /** FileOptions php_class_prefix. */
            public php_class_prefix: string;

            /** FileOptions php_namespace. */
            public php_namespace: string;

            /** FileOptions php_metadata_namespace. */
            public php_metadata_namespace: string;

            /** FileOptions ruby_package. */
            public ruby_package: string;

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions message_set_wire_format */
            message_set_wire_format?: (boolean|null);

            /** MessageOptions no_standard_descriptor_accessor */
            no_standard_descriptor_accessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions map_entry */
            map_entry?: (boolean|null);

            /** MessageOptions deprecated_legacy_json_field_conflicts */
            deprecated_legacy_json_field_conflicts?: (boolean|null);

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .id */
            ".id"?: (number|null);

            /** MessageOptions .source */
            ".source"?: (APISourceType|null);

            /** MessageOptions .ifdef */
            ".ifdef"?: (string|null);

            /** MessageOptions .log */
            ".log"?: (boolean|null);

            /** MessageOptions .no_delay */
            ".no_delay"?: (boolean|null);

            /** MessageOptions .base_class */
            ".base_class"?: (string|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions message_set_wire_format. */
            public message_set_wire_format: boolean;

            /** MessageOptions no_standard_descriptor_accessor. */
            public no_standard_descriptor_accessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions map_entry. */
            public map_entry: boolean;

            /** MessageOptions deprecated_legacy_json_field_conflicts. */
            public deprecated_legacy_json_field_conflicts: boolean;

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /** MessageOptions .id. */
            public id: number;

            /** MessageOptions .source. */
            public source: APISourceType;

            /** MessageOptions .ifdef. */
            public ifdef: string;

            /** MessageOptions .log. */
            public log: boolean;

            /** MessageOptions .no_delay. */
            public no_delay: boolean;

            /** MessageOptions .base_class. */
            public base_class: string;

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverified_lazy */
            unverified_lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debug_redact */
            debug_redact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions edition_defaults */
            edition_defaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions feature_support */
            feature_support?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** FieldOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .field_ifdef */
            ".field_ifdef"?: (string|null);

            /** FieldOptions .fixed_array_size */
            ".fixed_array_size"?: (number|null);

            /** FieldOptions .no_zero_copy */
            ".no_zero_copy"?: (boolean|null);

            /** FieldOptions .fixed_array_skip_zero */
            ".fixed_array_skip_zero"?: (boolean|null);

            /** FieldOptions .fixed_array_size_define */
            ".fixed_array_size_define"?: (string|null);

            /** FieldOptions .fixed_array_with_length_define */
            ".fixed_array_with_length_define"?: (string|null);

            /** FieldOptions .pointer_to_buffer */
            ".pointer_to_buffer"?: (boolean|null);

            /** FieldOptions .container_pointer */
            ".container_pointer"?: (string|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverified_lazy. */
            public unverified_lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debug_redact. */
            public debug_redact: boolean;

            /** FieldOptions retention. */
            public retention: google.protobuf.FieldOptions.OptionRetention;

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions edition_defaults. */
            public edition_defaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions feature_support. */
            public feature_support?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** FieldOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /** FieldOptions .field_ifdef. */
            public field_ifdef: string;

            /** FieldOptions .fixed_array_size. */
            public fixed_array_size: number;

            /** FieldOptions .no_zero_copy. */
            public no_zero_copy: boolean;

            /** FieldOptions .fixed_array_skip_zero. */
            public fixed_array_skip_zero: boolean;

            /** FieldOptions .fixed_array_size_define. */
            public fixed_array_size_define: string;

            /** FieldOptions .fixed_array_with_length_define. */
            public fixed_array_with_length_define: string;

            /** FieldOptions .pointer_to_buffer. */
            public pointer_to_buffer: boolean;

            /** FieldOptions .container_pointer. */
            public container_pointer: string;

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
            }

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: google.protobuf.Edition;

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FeatureSupport. */
            interface IFeatureSupport {

                /** FeatureSupport edition_introduced */
                edition_introduced?: (google.protobuf.Edition|null);

                /** FeatureSupport edition_deprecated */
                edition_deprecated?: (google.protobuf.Edition|null);

                /** FeatureSupport deprecation_warning */
                deprecation_warning?: (string|null);

                /** FeatureSupport edition_removed */
                edition_removed?: (google.protobuf.Edition|null);
            }

            /** Represents a FeatureSupport. */
            class FeatureSupport implements IFeatureSupport {

                /**
                 * Constructs a new FeatureSupport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IFeatureSupport);

                /** FeatureSupport edition_introduced. */
                public edition_introduced: google.protobuf.Edition;

                /** FeatureSupport edition_deprecated. */
                public edition_deprecated: google.protobuf.Edition;

                /** FeatureSupport deprecation_warning. */
                public deprecation_warning: string;

                /** FeatureSupport edition_removed. */
                public edition_removed: google.protobuf.Edition;

                /**
                 * Creates a new FeatureSupport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSupport instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IFeatureSupport): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Encodes the specified FeatureSupport message. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSupport message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Verifies a FeatureSupport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSupport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSupport
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Creates a plain object from a FeatureSupport message. Also converts values to other types if specified.
                 * @param message FeatureSupport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.FeatureSupport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSupport to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSupport
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allow_alias */
            allow_alias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecated_legacy_json_field_conflicts */
            deprecated_legacy_json_field_conflicts?: (boolean|null);

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allow_alias. */
            public allow_alias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions deprecated_legacy_json_field_conflicts. */
            public deprecated_legacy_json_field_conflicts: boolean;

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debug_redact */
            debug_redact?: (boolean|null);

            /** EnumValueOptions feature_support */
            feature_support?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** EnumValueOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debug_redact. */
            public debug_redact: boolean;

            /** EnumValueOptions feature_support. */
            public feature_support?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** EnumValueOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotency_level */
            idempotency_level?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .needs_setup_connection */
            ".needs_setup_connection"?: (boolean|null);

            /** MethodOptions .needs_authentication */
            ".needs_authentication"?: (boolean|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotency_level. */
            public idempotency_level: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /** MethodOptions .needs_setup_connection. */
            public needs_setup_connection: boolean;

            /** MethodOptions .needs_authentication. */
            public needs_authentication: boolean;

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifier_value */
            identifier_value?: (string|null);

            /** UninterpretedOption positive_int_value */
            positive_int_value?: (number|Long|null);

            /** UninterpretedOption negative_int_value */
            negative_int_value?: (number|Long|null);

            /** UninterpretedOption double_value */
            double_value?: (number|null);

            /** UninterpretedOption string_value */
            string_value?: (Uint8Array|null);

            /** UninterpretedOption aggregate_value */
            aggregate_value?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifier_value. */
            public identifier_value: string;

            /** UninterpretedOption positive_int_value. */
            public positive_int_value: (number|Long);

            /** UninterpretedOption negative_int_value. */
            public negative_int_value: (number|Long);

            /** UninterpretedOption double_value. */
            public double_value: number;

            /** UninterpretedOption string_value. */
            public string_value: Uint8Array;

            /** UninterpretedOption aggregate_value. */
            public aggregate_value: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart name_part */
                name_part: string;

                /** NamePart is_extension */
                is_extension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart name_part. */
                public name_part: string;

                /** NamePart is_extension. */
                public is_extension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet field_presence */
            field_presence?: (google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enum_type */
            enum_type?: (google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeated_field_encoding */
            repeated_field_encoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8_validation */
            utf8_validation?: (google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet message_encoding */
            message_encoding?: (google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet json_format */
            json_format?: (google.protobuf.FeatureSet.JsonFormat|null);

            /** FeatureSet enforce_naming_style */
            enforce_naming_style?: (google.protobuf.FeatureSet.EnforceNamingStyle|null);

            /** FeatureSet default_symbol_visibility */
            default_symbol_visibility?: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet field_presence. */
            public field_presence: google.protobuf.FeatureSet.FieldPresence;

            /** FeatureSet enum_type. */
            public enum_type: google.protobuf.FeatureSet.EnumType;

            /** FeatureSet repeated_field_encoding. */
            public repeated_field_encoding: google.protobuf.FeatureSet.RepeatedFieldEncoding;

            /** FeatureSet utf8_validation. */
            public utf8_validation: google.protobuf.FeatureSet.Utf8Validation;

            /** FeatureSet message_encoding. */
            public message_encoding: google.protobuf.FeatureSet.MessageEncoding;

            /** FeatureSet json_format. */
            public json_format: google.protobuf.FeatureSet.JsonFormat;

            /** FeatureSet enforce_naming_style. */
            public enforce_naming_style: google.protobuf.FeatureSet.EnforceNamingStyle;

            /** FeatureSet default_symbol_visibility. */
            public default_symbol_visibility: google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility;

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }

            /** EnforceNamingStyle enum. */
            enum EnforceNamingStyle {
                ENFORCE_NAMING_STYLE_UNKNOWN = 0,
                STYLE2024 = 1,
                STYLE_LEGACY = 2
            }

            /** Properties of a VisibilityFeature. */
            interface IVisibilityFeature {
            }

            /** Represents a VisibilityFeature. */
            class VisibilityFeature implements IVisibilityFeature {

                /**
                 * Constructs a new VisibilityFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSet.IVisibilityFeature);

                /**
                 * Creates a new VisibilityFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VisibilityFeature instance
                 */
                public static create(properties?: google.protobuf.FeatureSet.IVisibilityFeature): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Encodes the specified VisibilityFeature message. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VisibilityFeature message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Verifies a VisibilityFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VisibilityFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VisibilityFeature
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Creates a plain object from a VisibilityFeature message. Also converts values to other types if specified.
                 * @param message VisibilityFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSet.VisibilityFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VisibilityFeature to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VisibilityFeature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VisibilityFeature {

                /** DefaultSymbolVisibility enum. */
                enum DefaultSymbolVisibility {
                    DEFAULT_SYMBOL_VISIBILITY_UNKNOWN = 0,
                    EXPORT_ALL = 1,
                    EXPORT_TOP_LEVEL = 2,
                    LOCAL_ALL = 3,
                    STRICT = 4
                }
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimum_edition */
            minimum_edition?: (google.protobuf.Edition|null);

            /** FeatureSetDefaults maximum_edition */
            maximum_edition?: (google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimum_edition. */
            public minimum_edition: google.protobuf.Edition;

            /** FeatureSetDefaults maximum_edition. */
            public maximum_edition: google.protobuf.Edition;

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|null);

                /** FeatureSetEditionDefault overridable_features */
                overridable_features?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixed_features */
                fixed_features?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: google.protobuf.Edition;

                /** FeatureSetEditionDefault overridable_features. */
                public overridable_features?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixed_features. */
                public fixed_features?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leading_comments */
                leading_comments?: (string|null);

                /** Location trailing_comments */
                trailing_comments?: (string|null);

                /** Location leading_detached_comments */
                leading_detached_comments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leading_comments. */
                public leading_comments: string;

                /** Location trailing_comments. */
                public trailing_comments: string;

                /** Location leading_detached_comments. */
                public leading_detached_comments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation source_file */
                source_file?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation source_file. */
                public source_file: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /** Annotation semantic. */
                public semantic: google.protobuf.GeneratedCodeInfo.Annotation.Semantic;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
            }
        }

        /** SymbolVisibility enum. */
        enum SymbolVisibility {
            VISIBILITY_UNSET = 0,
            VISIBILITY_LOCAL = 1,
            VISIBILITY_EXPORT = 2
        }
    }
}

/** Represents a APIConnection */
export class APIConnection extends $protobuf.rpc.Service {

    /**
     * Constructs a new APIConnection service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new APIConnection service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): APIConnection;

    /**
     * Calls hello.
     * @param request HelloRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and HelloResponse
     */
    public hello(request: IHelloRequest, callback: APIConnection.helloCallback): void;

    /**
     * Calls hello.
     * @param request HelloRequest message or plain object
     * @returns Promise
     */
    public hello(request: IHelloRequest): Promise<HelloResponse>;

    /**
     * Calls authenticate.
     * @param request AuthenticationRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and AuthenticationResponse
     */
    public authenticate(request: IAuthenticationRequest, callback: APIConnection.authenticateCallback): void;

    /**
     * Calls authenticate.
     * @param request AuthenticationRequest message or plain object
     * @returns Promise
     */
    public authenticate(request: IAuthenticationRequest): Promise<AuthenticationResponse>;

    /**
     * Calls disconnect.
     * @param request DisconnectRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and DisconnectResponse
     */
    public disconnect(request: IDisconnectRequest, callback: APIConnection.disconnectCallback): void;

    /**
     * Calls disconnect.
     * @param request DisconnectRequest message or plain object
     * @returns Promise
     */
    public disconnect(request: IDisconnectRequest): Promise<DisconnectResponse>;

    /**
     * Calls ping.
     * @param request PingRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and PingResponse
     */
    public ping(request: IPingRequest, callback: APIConnection.pingCallback): void;

    /**
     * Calls ping.
     * @param request PingRequest message or plain object
     * @returns Promise
     */
    public ping(request: IPingRequest): Promise<PingResponse>;

    /**
     * Calls device_info.
     * @param request DeviceInfoRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and DeviceInfoResponse
     */
    public device_info(request: IDeviceInfoRequest, callback: APIConnection.device_infoCallback): void;

    /**
     * Calls device_info.
     * @param request DeviceInfoRequest message or plain object
     * @returns Promise
     */
    public device_info(request: IDeviceInfoRequest): Promise<DeviceInfoResponse>;

    /**
     * Calls list_entities.
     * @param request ListEntitiesRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public list_entities(request: IListEntitiesRequest, callback: APIConnection.list_entitiesCallback): void;

    /**
     * Calls list_entities.
     * @param request ListEntitiesRequest message or plain object
     * @returns Promise
     */
    public list_entities(request: IListEntitiesRequest): Promise<VoidMessage>;

    /**
     * Calls subscribe_states.
     * @param request SubscribeStatesRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public subscribe_states(request: ISubscribeStatesRequest, callback: APIConnection.subscribe_statesCallback): void;

    /**
     * Calls subscribe_states.
     * @param request SubscribeStatesRequest message or plain object
     * @returns Promise
     */
    public subscribe_states(request: ISubscribeStatesRequest): Promise<VoidMessage>;

    /**
     * Calls subscribe_logs.
     * @param request SubscribeLogsRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public subscribe_logs(request: ISubscribeLogsRequest, callback: APIConnection.subscribe_logsCallback): void;

    /**
     * Calls subscribe_logs.
     * @param request SubscribeLogsRequest message or plain object
     * @returns Promise
     */
    public subscribe_logs(request: ISubscribeLogsRequest): Promise<VoidMessage>;

    /**
     * Calls subscribe_homeassistant_services.
     * @param request SubscribeHomeassistantServicesRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public subscribe_homeassistant_services(request: ISubscribeHomeassistantServicesRequest, callback: APIConnection.subscribe_homeassistant_servicesCallback): void;

    /**
     * Calls subscribe_homeassistant_services.
     * @param request SubscribeHomeassistantServicesRequest message or plain object
     * @returns Promise
     */
    public subscribe_homeassistant_services(request: ISubscribeHomeassistantServicesRequest): Promise<VoidMessage>;

    /**
     * Calls subscribe_home_assistant_states.
     * @param request SubscribeHomeAssistantStatesRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public subscribe_home_assistant_states(request: ISubscribeHomeAssistantStatesRequest, callback: APIConnection.subscribe_home_assistant_statesCallback): void;

    /**
     * Calls subscribe_home_assistant_states.
     * @param request SubscribeHomeAssistantStatesRequest message or plain object
     * @returns Promise
     */
    public subscribe_home_assistant_states(request: ISubscribeHomeAssistantStatesRequest): Promise<VoidMessage>;

    /**
     * Calls execute_service.
     * @param request ExecuteServiceRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public execute_service(request: IExecuteServiceRequest, callback: APIConnection.execute_serviceCallback): void;

    /**
     * Calls execute_service.
     * @param request ExecuteServiceRequest message or plain object
     * @returns Promise
     */
    public execute_service(request: IExecuteServiceRequest): Promise<VoidMessage>;

    /**
     * Calls noise_encryption_set_key.
     * @param request NoiseEncryptionSetKeyRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and NoiseEncryptionSetKeyResponse
     */
    public noise_encryption_set_key(request: INoiseEncryptionSetKeyRequest, callback: APIConnection.noise_encryption_set_keyCallback): void;

    /**
     * Calls noise_encryption_set_key.
     * @param request NoiseEncryptionSetKeyRequest message or plain object
     * @returns Promise
     */
    public noise_encryption_set_key(request: INoiseEncryptionSetKeyRequest): Promise<NoiseEncryptionSetKeyResponse>;

    /**
     * Calls button_command.
     * @param request ButtonCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public button_command(request: IButtonCommandRequest, callback: APIConnection.button_commandCallback): void;

    /**
     * Calls button_command.
     * @param request ButtonCommandRequest message or plain object
     * @returns Promise
     */
    public button_command(request: IButtonCommandRequest): Promise<VoidMessage>;

    /**
     * Calls camera_image.
     * @param request CameraImageRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public camera_image(request: ICameraImageRequest, callback: APIConnection.camera_imageCallback): void;

    /**
     * Calls camera_image.
     * @param request CameraImageRequest message or plain object
     * @returns Promise
     */
    public camera_image(request: ICameraImageRequest): Promise<VoidMessage>;

    /**
     * Calls climate_command.
     * @param request ClimateCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public climate_command(request: IClimateCommandRequest, callback: APIConnection.climate_commandCallback): void;

    /**
     * Calls climate_command.
     * @param request ClimateCommandRequest message or plain object
     * @returns Promise
     */
    public climate_command(request: IClimateCommandRequest): Promise<VoidMessage>;

    /**
     * Calls cover_command.
     * @param request CoverCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public cover_command(request: ICoverCommandRequest, callback: APIConnection.cover_commandCallback): void;

    /**
     * Calls cover_command.
     * @param request CoverCommandRequest message or plain object
     * @returns Promise
     */
    public cover_command(request: ICoverCommandRequest): Promise<VoidMessage>;

    /**
     * Calls date_command.
     * @param request DateCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public date_command(request: IDateCommandRequest, callback: APIConnection.date_commandCallback): void;

    /**
     * Calls date_command.
     * @param request DateCommandRequest message or plain object
     * @returns Promise
     */
    public date_command(request: IDateCommandRequest): Promise<VoidMessage>;

    /**
     * Calls datetime_command.
     * @param request DateTimeCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public datetime_command(request: IDateTimeCommandRequest, callback: APIConnection.datetime_commandCallback): void;

    /**
     * Calls datetime_command.
     * @param request DateTimeCommandRequest message or plain object
     * @returns Promise
     */
    public datetime_command(request: IDateTimeCommandRequest): Promise<VoidMessage>;

    /**
     * Calls fan_command.
     * @param request FanCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public fan_command(request: IFanCommandRequest, callback: APIConnection.fan_commandCallback): void;

    /**
     * Calls fan_command.
     * @param request FanCommandRequest message or plain object
     * @returns Promise
     */
    public fan_command(request: IFanCommandRequest): Promise<VoidMessage>;

    /**
     * Calls light_command.
     * @param request LightCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public light_command(request: ILightCommandRequest, callback: APIConnection.light_commandCallback): void;

    /**
     * Calls light_command.
     * @param request LightCommandRequest message or plain object
     * @returns Promise
     */
    public light_command(request: ILightCommandRequest): Promise<VoidMessage>;

    /**
     * Calls lock_command.
     * @param request LockCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public lock_command(request: ILockCommandRequest, callback: APIConnection.lock_commandCallback): void;

    /**
     * Calls lock_command.
     * @param request LockCommandRequest message or plain object
     * @returns Promise
     */
    public lock_command(request: ILockCommandRequest): Promise<VoidMessage>;

    /**
     * Calls media_player_command.
     * @param request MediaPlayerCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public media_player_command(request: IMediaPlayerCommandRequest, callback: APIConnection.media_player_commandCallback): void;

    /**
     * Calls media_player_command.
     * @param request MediaPlayerCommandRequest message or plain object
     * @returns Promise
     */
    public media_player_command(request: IMediaPlayerCommandRequest): Promise<VoidMessage>;

    /**
     * Calls number_command.
     * @param request NumberCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public number_command(request: INumberCommandRequest, callback: APIConnection.number_commandCallback): void;

    /**
     * Calls number_command.
     * @param request NumberCommandRequest message or plain object
     * @returns Promise
     */
    public number_command(request: INumberCommandRequest): Promise<VoidMessage>;

    /**
     * Calls select_command.
     * @param request SelectCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public select_command(request: ISelectCommandRequest, callback: APIConnection.select_commandCallback): void;

    /**
     * Calls select_command.
     * @param request SelectCommandRequest message or plain object
     * @returns Promise
     */
    public select_command(request: ISelectCommandRequest): Promise<VoidMessage>;

    /**
     * Calls siren_command.
     * @param request SirenCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public siren_command(request: ISirenCommandRequest, callback: APIConnection.siren_commandCallback): void;

    /**
     * Calls siren_command.
     * @param request SirenCommandRequest message or plain object
     * @returns Promise
     */
    public siren_command(request: ISirenCommandRequest): Promise<VoidMessage>;

    /**
     * Calls switch_command.
     * @param request SwitchCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public switch_command(request: ISwitchCommandRequest, callback: APIConnection.switch_commandCallback): void;

    /**
     * Calls switch_command.
     * @param request SwitchCommandRequest message or plain object
     * @returns Promise
     */
    public switch_command(request: ISwitchCommandRequest): Promise<VoidMessage>;

    /**
     * Calls text_command.
     * @param request TextCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public text_command(request: ITextCommandRequest, callback: APIConnection.text_commandCallback): void;

    /**
     * Calls text_command.
     * @param request TextCommandRequest message or plain object
     * @returns Promise
     */
    public text_command(request: ITextCommandRequest): Promise<VoidMessage>;

    /**
     * Calls time_command.
     * @param request TimeCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public time_command(request: ITimeCommandRequest, callback: APIConnection.time_commandCallback): void;

    /**
     * Calls time_command.
     * @param request TimeCommandRequest message or plain object
     * @returns Promise
     */
    public time_command(request: ITimeCommandRequest): Promise<VoidMessage>;

    /**
     * Calls update_command.
     * @param request UpdateCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public update_command(request: IUpdateCommandRequest, callback: APIConnection.update_commandCallback): void;

    /**
     * Calls update_command.
     * @param request UpdateCommandRequest message or plain object
     * @returns Promise
     */
    public update_command(request: IUpdateCommandRequest): Promise<VoidMessage>;

    /**
     * Calls valve_command.
     * @param request ValveCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public valve_command(request: IValveCommandRequest, callback: APIConnection.valve_commandCallback): void;

    /**
     * Calls valve_command.
     * @param request ValveCommandRequest message or plain object
     * @returns Promise
     */
    public valve_command(request: IValveCommandRequest): Promise<VoidMessage>;

    /**
     * Calls subscribe_bluetooth_le_advertisements.
     * @param request SubscribeBluetoothLEAdvertisementsRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public subscribe_bluetooth_le_advertisements(request: ISubscribeBluetoothLEAdvertisementsRequest, callback: APIConnection.subscribe_bluetooth_le_advertisementsCallback): void;

    /**
     * Calls subscribe_bluetooth_le_advertisements.
     * @param request SubscribeBluetoothLEAdvertisementsRequest message or plain object
     * @returns Promise
     */
    public subscribe_bluetooth_le_advertisements(request: ISubscribeBluetoothLEAdvertisementsRequest): Promise<VoidMessage>;

    /**
     * Calls bluetooth_device_request.
     * @param request BluetoothDeviceRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public bluetooth_device_request(request: IBluetoothDeviceRequest, callback: APIConnection.bluetooth_device_requestCallback): void;

    /**
     * Calls bluetooth_device_request.
     * @param request BluetoothDeviceRequest message or plain object
     * @returns Promise
     */
    public bluetooth_device_request(request: IBluetoothDeviceRequest): Promise<VoidMessage>;

    /**
     * Calls bluetooth_gatt_get_services.
     * @param request BluetoothGATTGetServicesRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public bluetooth_gatt_get_services(request: IBluetoothGATTGetServicesRequest, callback: APIConnection.bluetooth_gatt_get_servicesCallback): void;

    /**
     * Calls bluetooth_gatt_get_services.
     * @param request BluetoothGATTGetServicesRequest message or plain object
     * @returns Promise
     */
    public bluetooth_gatt_get_services(request: IBluetoothGATTGetServicesRequest): Promise<VoidMessage>;

    /**
     * Calls bluetooth_gatt_read.
     * @param request BluetoothGATTReadRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public bluetooth_gatt_read(request: IBluetoothGATTReadRequest, callback: APIConnection.bluetooth_gatt_readCallback): void;

    /**
     * Calls bluetooth_gatt_read.
     * @param request BluetoothGATTReadRequest message or plain object
     * @returns Promise
     */
    public bluetooth_gatt_read(request: IBluetoothGATTReadRequest): Promise<VoidMessage>;

    /**
     * Calls bluetooth_gatt_write.
     * @param request BluetoothGATTWriteRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public bluetooth_gatt_write(request: IBluetoothGATTWriteRequest, callback: APIConnection.bluetooth_gatt_writeCallback): void;

    /**
     * Calls bluetooth_gatt_write.
     * @param request BluetoothGATTWriteRequest message or plain object
     * @returns Promise
     */
    public bluetooth_gatt_write(request: IBluetoothGATTWriteRequest): Promise<VoidMessage>;

    /**
     * Calls bluetooth_gatt_read_descriptor.
     * @param request BluetoothGATTReadDescriptorRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public bluetooth_gatt_read_descriptor(request: IBluetoothGATTReadDescriptorRequest, callback: APIConnection.bluetooth_gatt_read_descriptorCallback): void;

    /**
     * Calls bluetooth_gatt_read_descriptor.
     * @param request BluetoothGATTReadDescriptorRequest message or plain object
     * @returns Promise
     */
    public bluetooth_gatt_read_descriptor(request: IBluetoothGATTReadDescriptorRequest): Promise<VoidMessage>;

    /**
     * Calls bluetooth_gatt_write_descriptor.
     * @param request BluetoothGATTWriteDescriptorRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public bluetooth_gatt_write_descriptor(request: IBluetoothGATTWriteDescriptorRequest, callback: APIConnection.bluetooth_gatt_write_descriptorCallback): void;

    /**
     * Calls bluetooth_gatt_write_descriptor.
     * @param request BluetoothGATTWriteDescriptorRequest message or plain object
     * @returns Promise
     */
    public bluetooth_gatt_write_descriptor(request: IBluetoothGATTWriteDescriptorRequest): Promise<VoidMessage>;

    /**
     * Calls bluetooth_gatt_notify.
     * @param request BluetoothGATTNotifyRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public bluetooth_gatt_notify(request: IBluetoothGATTNotifyRequest, callback: APIConnection.bluetooth_gatt_notifyCallback): void;

    /**
     * Calls bluetooth_gatt_notify.
     * @param request BluetoothGATTNotifyRequest message or plain object
     * @returns Promise
     */
    public bluetooth_gatt_notify(request: IBluetoothGATTNotifyRequest): Promise<VoidMessage>;

    /**
     * Calls subscribe_bluetooth_connections_free.
     * @param request SubscribeBluetoothConnectionsFreeRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and BluetoothConnectionsFreeResponse
     */
    public subscribe_bluetooth_connections_free(request: ISubscribeBluetoothConnectionsFreeRequest, callback: APIConnection.subscribe_bluetooth_connections_freeCallback): void;

    /**
     * Calls subscribe_bluetooth_connections_free.
     * @param request SubscribeBluetoothConnectionsFreeRequest message or plain object
     * @returns Promise
     */
    public subscribe_bluetooth_connections_free(request: ISubscribeBluetoothConnectionsFreeRequest): Promise<BluetoothConnectionsFreeResponse>;

    /**
     * Calls unsubscribe_bluetooth_le_advertisements.
     * @param request UnsubscribeBluetoothLEAdvertisementsRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public unsubscribe_bluetooth_le_advertisements(request: IUnsubscribeBluetoothLEAdvertisementsRequest, callback: APIConnection.unsubscribe_bluetooth_le_advertisementsCallback): void;

    /**
     * Calls unsubscribe_bluetooth_le_advertisements.
     * @param request UnsubscribeBluetoothLEAdvertisementsRequest message or plain object
     * @returns Promise
     */
    public unsubscribe_bluetooth_le_advertisements(request: IUnsubscribeBluetoothLEAdvertisementsRequest): Promise<VoidMessage>;

    /**
     * Calls bluetooth_scanner_set_mode.
     * @param request BluetoothScannerSetModeRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public bluetooth_scanner_set_mode(request: IBluetoothScannerSetModeRequest, callback: APIConnection.bluetooth_scanner_set_modeCallback): void;

    /**
     * Calls bluetooth_scanner_set_mode.
     * @param request BluetoothScannerSetModeRequest message or plain object
     * @returns Promise
     */
    public bluetooth_scanner_set_mode(request: IBluetoothScannerSetModeRequest): Promise<VoidMessage>;

    /**
     * Calls subscribe_voice_assistant.
     * @param request SubscribeVoiceAssistantRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public subscribe_voice_assistant(request: ISubscribeVoiceAssistantRequest, callback: APIConnection.subscribe_voice_assistantCallback): void;

    /**
     * Calls subscribe_voice_assistant.
     * @param request SubscribeVoiceAssistantRequest message or plain object
     * @returns Promise
     */
    public subscribe_voice_assistant(request: ISubscribeVoiceAssistantRequest): Promise<VoidMessage>;

    /**
     * Calls voice_assistant_get_configuration.
     * @param request VoiceAssistantConfigurationRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoiceAssistantConfigurationResponse
     */
    public voice_assistant_get_configuration(request: IVoiceAssistantConfigurationRequest, callback: APIConnection.voice_assistant_get_configurationCallback): void;

    /**
     * Calls voice_assistant_get_configuration.
     * @param request VoiceAssistantConfigurationRequest message or plain object
     * @returns Promise
     */
    public voice_assistant_get_configuration(request: IVoiceAssistantConfigurationRequest): Promise<VoiceAssistantConfigurationResponse>;

    /**
     * Calls voice_assistant_set_configuration.
     * @param request VoiceAssistantSetConfiguration message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public voice_assistant_set_configuration(request: IVoiceAssistantSetConfiguration, callback: APIConnection.voice_assistant_set_configurationCallback): void;

    /**
     * Calls voice_assistant_set_configuration.
     * @param request VoiceAssistantSetConfiguration message or plain object
     * @returns Promise
     */
    public voice_assistant_set_configuration(request: IVoiceAssistantSetConfiguration): Promise<VoidMessage>;

    /**
     * Calls alarm_control_panel_command.
     * @param request AlarmControlPanelCommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public alarm_control_panel_command(request: IAlarmControlPanelCommandRequest, callback: APIConnection.alarm_control_panel_commandCallback): void;

    /**
     * Calls alarm_control_panel_command.
     * @param request AlarmControlPanelCommandRequest message or plain object
     * @returns Promise
     */
    public alarm_control_panel_command(request: IAlarmControlPanelCommandRequest): Promise<VoidMessage>;

    /**
     * Calls zwave_proxy_frame.
     * @param request ZWaveProxyFrame message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public zwave_proxy_frame(request: IZWaveProxyFrame, callback: APIConnection.zwave_proxy_frameCallback): void;

    /**
     * Calls zwave_proxy_frame.
     * @param request ZWaveProxyFrame message or plain object
     * @returns Promise
     */
    public zwave_proxy_frame(request: IZWaveProxyFrame): Promise<VoidMessage>;

    /**
     * Calls zwave_proxy_request.
     * @param request ZWaveProxyRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and VoidMessage
     */
    public zwave_proxy_request(request: IZWaveProxyRequest, callback: APIConnection.zwave_proxy_requestCallback): void;

    /**
     * Calls zwave_proxy_request.
     * @param request ZWaveProxyRequest message or plain object
     * @returns Promise
     */
    public zwave_proxy_request(request: IZWaveProxyRequest): Promise<VoidMessage>;
}

export namespace APIConnection {

    /**
     * Callback as used by {@link APIConnection#hello}.
     * @param error Error, if any
     * @param [response] HelloResponse
     */
    type helloCallback = (error: (Error|null), response?: HelloResponse) => void;

    /**
     * Callback as used by {@link APIConnection#authenticate}.
     * @param error Error, if any
     * @param [response] AuthenticationResponse
     */
    type authenticateCallback = (error: (Error|null), response?: AuthenticationResponse) => void;

    /**
     * Callback as used by {@link APIConnection#disconnect}.
     * @param error Error, if any
     * @param [response] DisconnectResponse
     */
    type disconnectCallback = (error: (Error|null), response?: DisconnectResponse) => void;

    /**
     * Callback as used by {@link APIConnection#ping}.
     * @param error Error, if any
     * @param [response] PingResponse
     */
    type pingCallback = (error: (Error|null), response?: PingResponse) => void;

    /**
     * Callback as used by {@link APIConnection#device_info}.
     * @param error Error, if any
     * @param [response] DeviceInfoResponse
     */
    type device_infoCallback = (error: (Error|null), response?: DeviceInfoResponse) => void;

    /**
     * Callback as used by {@link APIConnection#list_entities}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type list_entitiesCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#subscribe_states}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type subscribe_statesCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#subscribe_logs}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type subscribe_logsCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#subscribe_homeassistant_services}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type subscribe_homeassistant_servicesCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#subscribe_home_assistant_states}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type subscribe_home_assistant_statesCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#execute_service}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type execute_serviceCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#noise_encryption_set_key}.
     * @param error Error, if any
     * @param [response] NoiseEncryptionSetKeyResponse
     */
    type noise_encryption_set_keyCallback = (error: (Error|null), response?: NoiseEncryptionSetKeyResponse) => void;

    /**
     * Callback as used by {@link APIConnection#button_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type button_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#camera_image}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type camera_imageCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#climate_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type climate_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#cover_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type cover_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#date_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type date_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#datetime_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type datetime_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#fan_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type fan_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#light_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type light_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#lock_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type lock_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#media_player_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type media_player_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#number_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type number_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#select_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type select_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#siren_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type siren_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#switch_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type switch_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#text_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type text_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#time_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type time_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#update_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type update_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#valve_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type valve_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#subscribe_bluetooth_le_advertisements}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type subscribe_bluetooth_le_advertisementsCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#bluetooth_device_request}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type bluetooth_device_requestCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#bluetooth_gatt_get_services}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type bluetooth_gatt_get_servicesCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#bluetooth_gatt_read}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type bluetooth_gatt_readCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#bluetooth_gatt_write}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type bluetooth_gatt_writeCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#bluetooth_gatt_read_descriptor}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type bluetooth_gatt_read_descriptorCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#bluetooth_gatt_write_descriptor}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type bluetooth_gatt_write_descriptorCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#bluetooth_gatt_notify}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type bluetooth_gatt_notifyCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#subscribe_bluetooth_connections_free}.
     * @param error Error, if any
     * @param [response] BluetoothConnectionsFreeResponse
     */
    type subscribe_bluetooth_connections_freeCallback = (error: (Error|null), response?: BluetoothConnectionsFreeResponse) => void;

    /**
     * Callback as used by {@link APIConnection#unsubscribe_bluetooth_le_advertisements}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type unsubscribe_bluetooth_le_advertisementsCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#bluetooth_scanner_set_mode}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type bluetooth_scanner_set_modeCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#subscribe_voice_assistant}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type subscribe_voice_assistantCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#voice_assistant_get_configuration}.
     * @param error Error, if any
     * @param [response] VoiceAssistantConfigurationResponse
     */
    type voice_assistant_get_configurationCallback = (error: (Error|null), response?: VoiceAssistantConfigurationResponse) => void;

    /**
     * Callback as used by {@link APIConnection#voice_assistant_set_configuration}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type voice_assistant_set_configurationCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#alarm_control_panel_command}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type alarm_control_panel_commandCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#zwave_proxy_frame}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type zwave_proxy_frameCallback = (error: (Error|null), response?: VoidMessage) => void;

    /**
     * Callback as used by {@link APIConnection#zwave_proxy_request}.
     * @param error Error, if any
     * @param [response] VoidMessage
     */
    type zwave_proxy_requestCallback = (error: (Error|null), response?: VoidMessage) => void;
}

/** Represents a HelloRequest. */
export class HelloRequest implements IHelloRequest {

    /**
     * Constructs a new HelloRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHelloRequest);

    /** HelloRequest client_info. */
    public client_info: string;

    /** HelloRequest api_version_major. */
    public api_version_major: number;

    /** HelloRequest api_version_minor. */
    public api_version_minor: number;

    /**
     * Creates a new HelloRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HelloRequest instance
     */
    public static create(properties?: IHelloRequest): HelloRequest;

    /**
     * Encodes the specified HelloRequest message. Does not implicitly {@link HelloRequest.verify|verify} messages.
     * @param message HelloRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HelloRequest message, length delimited. Does not implicitly {@link HelloRequest.verify|verify} messages.
     * @param message HelloRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHelloRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HelloRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HelloRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HelloRequest;

    /**
     * Decodes a HelloRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HelloRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HelloRequest;

    /**
     * Verifies a HelloRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HelloRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HelloRequest
     */
    public static fromObject(object: { [k: string]: any }): HelloRequest;

    /**
     * Creates a plain object from a HelloRequest message. Also converts values to other types if specified.
     * @param message HelloRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HelloRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HelloRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HelloRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a HelloResponse. */
export class HelloResponse implements IHelloResponse {

    /**
     * Constructs a new HelloResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHelloResponse);

    /** HelloResponse api_version_major. */
    public api_version_major: number;

    /** HelloResponse api_version_minor. */
    public api_version_minor: number;

    /** HelloResponse server_info. */
    public server_info: string;

    /** HelloResponse name. */
    public name: string;

    /**
     * Creates a new HelloResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HelloResponse instance
     */
    public static create(properties?: IHelloResponse): HelloResponse;

    /**
     * Encodes the specified HelloResponse message. Does not implicitly {@link HelloResponse.verify|verify} messages.
     * @param message HelloResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHelloResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HelloResponse message, length delimited. Does not implicitly {@link HelloResponse.verify|verify} messages.
     * @param message HelloResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHelloResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HelloResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HelloResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HelloResponse;

    /**
     * Decodes a HelloResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HelloResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HelloResponse;

    /**
     * Verifies a HelloResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HelloResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HelloResponse
     */
    public static fromObject(object: { [k: string]: any }): HelloResponse;

    /**
     * Creates a plain object from a HelloResponse message. Also converts values to other types if specified.
     * @param message HelloResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HelloResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HelloResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HelloResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an AuthenticationRequest. */
export class AuthenticationRequest implements IAuthenticationRequest {

    /**
     * Constructs a new AuthenticationRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthenticationRequest);

    /** AuthenticationRequest password. */
    public password: string;

    /**
     * Creates a new AuthenticationRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AuthenticationRequest instance
     */
    public static create(properties?: IAuthenticationRequest): AuthenticationRequest;

    /**
     * Encodes the specified AuthenticationRequest message. Does not implicitly {@link AuthenticationRequest.verify|verify} messages.
     * @param message AuthenticationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuthenticationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AuthenticationRequest message, length delimited. Does not implicitly {@link AuthenticationRequest.verify|verify} messages.
     * @param message AuthenticationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuthenticationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthenticationRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthenticationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthenticationRequest;

    /**
     * Decodes an AuthenticationRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AuthenticationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuthenticationRequest;

    /**
     * Verifies an AuthenticationRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AuthenticationRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AuthenticationRequest
     */
    public static fromObject(object: { [k: string]: any }): AuthenticationRequest;

    /**
     * Creates a plain object from an AuthenticationRequest message. Also converts values to other types if specified.
     * @param message AuthenticationRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AuthenticationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AuthenticationRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AuthenticationRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an AuthenticationResponse. */
export class AuthenticationResponse implements IAuthenticationResponse {

    /**
     * Constructs a new AuthenticationResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAuthenticationResponse);

    /** AuthenticationResponse invalid_password. */
    public invalid_password: boolean;

    /**
     * Creates a new AuthenticationResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AuthenticationResponse instance
     */
    public static create(properties?: IAuthenticationResponse): AuthenticationResponse;

    /**
     * Encodes the specified AuthenticationResponse message. Does not implicitly {@link AuthenticationResponse.verify|verify} messages.
     * @param message AuthenticationResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAuthenticationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AuthenticationResponse message, length delimited. Does not implicitly {@link AuthenticationResponse.verify|verify} messages.
     * @param message AuthenticationResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAuthenticationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AuthenticationResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AuthenticationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AuthenticationResponse;

    /**
     * Decodes an AuthenticationResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AuthenticationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AuthenticationResponse;

    /**
     * Verifies an AuthenticationResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AuthenticationResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AuthenticationResponse
     */
    public static fromObject(object: { [k: string]: any }): AuthenticationResponse;

    /**
     * Creates a plain object from an AuthenticationResponse message. Also converts values to other types if specified.
     * @param message AuthenticationResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AuthenticationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AuthenticationResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AuthenticationResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DisconnectRequest. */
export class DisconnectRequest implements IDisconnectRequest {

    /**
     * Constructs a new DisconnectRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDisconnectRequest);

    /**
     * Creates a new DisconnectRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DisconnectRequest instance
     */
    public static create(properties?: IDisconnectRequest): DisconnectRequest;

    /**
     * Encodes the specified DisconnectRequest message. Does not implicitly {@link DisconnectRequest.verify|verify} messages.
     * @param message DisconnectRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDisconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DisconnectRequest message, length delimited. Does not implicitly {@link DisconnectRequest.verify|verify} messages.
     * @param message DisconnectRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDisconnectRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DisconnectRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DisconnectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DisconnectRequest;

    /**
     * Decodes a DisconnectRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DisconnectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DisconnectRequest;

    /**
     * Verifies a DisconnectRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DisconnectRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DisconnectRequest
     */
    public static fromObject(object: { [k: string]: any }): DisconnectRequest;

    /**
     * Creates a plain object from a DisconnectRequest message. Also converts values to other types if specified.
     * @param message DisconnectRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DisconnectRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DisconnectRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DisconnectRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DisconnectResponse. */
export class DisconnectResponse implements IDisconnectResponse {

    /**
     * Constructs a new DisconnectResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDisconnectResponse);

    /**
     * Creates a new DisconnectResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DisconnectResponse instance
     */
    public static create(properties?: IDisconnectResponse): DisconnectResponse;

    /**
     * Encodes the specified DisconnectResponse message. Does not implicitly {@link DisconnectResponse.verify|verify} messages.
     * @param message DisconnectResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDisconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DisconnectResponse message, length delimited. Does not implicitly {@link DisconnectResponse.verify|verify} messages.
     * @param message DisconnectResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDisconnectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DisconnectResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DisconnectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DisconnectResponse;

    /**
     * Decodes a DisconnectResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DisconnectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DisconnectResponse;

    /**
     * Verifies a DisconnectResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DisconnectResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DisconnectResponse
     */
    public static fromObject(object: { [k: string]: any }): DisconnectResponse;

    /**
     * Creates a plain object from a DisconnectResponse message. Also converts values to other types if specified.
     * @param message DisconnectResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DisconnectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DisconnectResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DisconnectResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PingRequest. */
export class PingRequest implements IPingRequest {

    /**
     * Constructs a new PingRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPingRequest);

    /**
     * Creates a new PingRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PingRequest instance
     */
    public static create(properties?: IPingRequest): PingRequest;

    /**
     * Encodes the specified PingRequest message. Does not implicitly {@link PingRequest.verify|verify} messages.
     * @param message PingRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PingRequest message, length delimited. Does not implicitly {@link PingRequest.verify|verify} messages.
     * @param message PingRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PingRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PingRequest;

    /**
     * Decodes a PingRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PingRequest;

    /**
     * Verifies a PingRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PingRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PingRequest
     */
    public static fromObject(object: { [k: string]: any }): PingRequest;

    /**
     * Creates a plain object from a PingRequest message. Also converts values to other types if specified.
     * @param message PingRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PingRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PingRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PingResponse. */
export class PingResponse implements IPingResponse {

    /**
     * Constructs a new PingResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPingResponse);

    /**
     * Creates a new PingResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PingResponse instance
     */
    public static create(properties?: IPingResponse): PingResponse;

    /**
     * Encodes the specified PingResponse message. Does not implicitly {@link PingResponse.verify|verify} messages.
     * @param message PingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PingResponse message, length delimited. Does not implicitly {@link PingResponse.verify|verify} messages.
     * @param message PingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PingResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PingResponse;

    /**
     * Decodes a PingResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PingResponse;

    /**
     * Verifies a PingResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PingResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PingResponse
     */
    public static fromObject(object: { [k: string]: any }): PingResponse;

    /**
     * Creates a plain object from a PingResponse message. Also converts values to other types if specified.
     * @param message PingResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PingResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PingResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DeviceInfoRequest. */
export class DeviceInfoRequest implements IDeviceInfoRequest {

    /**
     * Constructs a new DeviceInfoRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceInfoRequest);

    /**
     * Creates a new DeviceInfoRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceInfoRequest instance
     */
    public static create(properties?: IDeviceInfoRequest): DeviceInfoRequest;

    /**
     * Encodes the specified DeviceInfoRequest message. Does not implicitly {@link DeviceInfoRequest.verify|verify} messages.
     * @param message DeviceInfoRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceInfoRequest message, length delimited. Does not implicitly {@link DeviceInfoRequest.verify|verify} messages.
     * @param message DeviceInfoRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceInfoRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceInfoRequest;

    /**
     * Decodes a DeviceInfoRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceInfoRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceInfoRequest;

    /**
     * Verifies a DeviceInfoRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceInfoRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceInfoRequest
     */
    public static fromObject(object: { [k: string]: any }): DeviceInfoRequest;

    /**
     * Creates a plain object from a DeviceInfoRequest message. Also converts values to other types if specified.
     * @param message DeviceInfoRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceInfoRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceInfoRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an AreaInfo. */
export class AreaInfo implements IAreaInfo {

    /**
     * Constructs a new AreaInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAreaInfo);

    /** AreaInfo area_id. */
    public area_id: number;

    /** AreaInfo name. */
    public name: string;

    /**
     * Creates a new AreaInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AreaInfo instance
     */
    public static create(properties?: IAreaInfo): AreaInfo;

    /**
     * Encodes the specified AreaInfo message. Does not implicitly {@link AreaInfo.verify|verify} messages.
     * @param message AreaInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAreaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AreaInfo message, length delimited. Does not implicitly {@link AreaInfo.verify|verify} messages.
     * @param message AreaInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAreaInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AreaInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AreaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AreaInfo;

    /**
     * Decodes an AreaInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AreaInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AreaInfo;

    /**
     * Verifies an AreaInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AreaInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AreaInfo
     */
    public static fromObject(object: { [k: string]: any }): AreaInfo;

    /**
     * Creates a plain object from an AreaInfo message. Also converts values to other types if specified.
     * @param message AreaInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AreaInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AreaInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AreaInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DeviceInfo. */
export class DeviceInfo implements IDeviceInfo {

    /**
     * Constructs a new DeviceInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceInfo);

    /** DeviceInfo device_id. */
    public device_id: number;

    /** DeviceInfo name. */
    public name: string;

    /** DeviceInfo area_id. */
    public area_id: number;

    /**
     * Creates a new DeviceInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceInfo instance
     */
    public static create(properties?: IDeviceInfo): DeviceInfo;

    /**
     * Encodes the specified DeviceInfo message. Does not implicitly {@link DeviceInfo.verify|verify} messages.
     * @param message DeviceInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceInfo message, length delimited. Does not implicitly {@link DeviceInfo.verify|verify} messages.
     * @param message DeviceInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceInfo;

    /**
     * Decodes a DeviceInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceInfo;

    /**
     * Verifies a DeviceInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceInfo
     */
    public static fromObject(object: { [k: string]: any }): DeviceInfo;

    /**
     * Creates a plain object from a DeviceInfo message. Also converts values to other types if specified.
     * @param message DeviceInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DeviceInfoResponse. */
export class DeviceInfoResponse implements IDeviceInfoResponse {

    /**
     * Constructs a new DeviceInfoResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceInfoResponse);

    /** DeviceInfoResponse uses_password. */
    public uses_password: boolean;

    /** DeviceInfoResponse name. */
    public name: string;

    /** DeviceInfoResponse mac_address. */
    public mac_address: string;

    /** DeviceInfoResponse esphome_version. */
    public esphome_version: string;

    /** DeviceInfoResponse compilation_time. */
    public compilation_time: string;

    /** DeviceInfoResponse model. */
    public model: string;

    /** DeviceInfoResponse has_deep_sleep. */
    public has_deep_sleep: boolean;

    /** DeviceInfoResponse project_name. */
    public project_name: string;

    /** DeviceInfoResponse project_version. */
    public project_version: string;

    /** DeviceInfoResponse webserver_port. */
    public webserver_port: number;

    /** DeviceInfoResponse legacy_bluetooth_proxy_version. */
    public legacy_bluetooth_proxy_version: number;

    /** DeviceInfoResponse bluetooth_proxy_feature_flags. */
    public bluetooth_proxy_feature_flags: number;

    /** DeviceInfoResponse manufacturer. */
    public manufacturer: string;

    /** DeviceInfoResponse friendly_name. */
    public friendly_name: string;

    /** DeviceInfoResponse legacy_voice_assistant_version. */
    public legacy_voice_assistant_version: number;

    /** DeviceInfoResponse voice_assistant_feature_flags. */
    public voice_assistant_feature_flags: number;

    /** DeviceInfoResponse suggested_area. */
    public suggested_area: string;

    /** DeviceInfoResponse bluetooth_mac_address. */
    public bluetooth_mac_address: string;

    /** DeviceInfoResponse api_encryption_supported. */
    public api_encryption_supported: boolean;

    /** DeviceInfoResponse devices. */
    public devices: IDeviceInfo[];

    /** DeviceInfoResponse areas. */
    public areas: IAreaInfo[];

    /** DeviceInfoResponse area. */
    public area?: (IAreaInfo|null);

    /** DeviceInfoResponse zwave_proxy_feature_flags. */
    public zwave_proxy_feature_flags: number;

    /** DeviceInfoResponse zwave_home_id. */
    public zwave_home_id: number;

    /**
     * Creates a new DeviceInfoResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceInfoResponse instance
     */
    public static create(properties?: IDeviceInfoResponse): DeviceInfoResponse;

    /**
     * Encodes the specified DeviceInfoResponse message. Does not implicitly {@link DeviceInfoResponse.verify|verify} messages.
     * @param message DeviceInfoResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceInfoResponse message, length delimited. Does not implicitly {@link DeviceInfoResponse.verify|verify} messages.
     * @param message DeviceInfoResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceInfoResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceInfoResponse;

    /**
     * Decodes a DeviceInfoResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceInfoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceInfoResponse;

    /**
     * Verifies a DeviceInfoResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceInfoResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceInfoResponse
     */
    public static fromObject(object: { [k: string]: any }): DeviceInfoResponse;

    /**
     * Creates a plain object from a DeviceInfoResponse message. Also converts values to other types if specified.
     * @param message DeviceInfoResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceInfoResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceInfoResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesRequest. */
export class ListEntitiesRequest implements IListEntitiesRequest {

    /**
     * Constructs a new ListEntitiesRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesRequest);

    /**
     * Creates a new ListEntitiesRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesRequest instance
     */
    public static create(properties?: IListEntitiesRequest): ListEntitiesRequest;

    /**
     * Encodes the specified ListEntitiesRequest message. Does not implicitly {@link ListEntitiesRequest.verify|verify} messages.
     * @param message ListEntitiesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesRequest message, length delimited. Does not implicitly {@link ListEntitiesRequest.verify|verify} messages.
     * @param message ListEntitiesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesRequest;

    /**
     * Decodes a ListEntitiesRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesRequest;

    /**
     * Verifies a ListEntitiesRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesRequest
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesRequest;

    /**
     * Creates a plain object from a ListEntitiesRequest message. Also converts values to other types if specified.
     * @param message ListEntitiesRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesDoneResponse. */
export class ListEntitiesDoneResponse implements IListEntitiesDoneResponse {

    /**
     * Constructs a new ListEntitiesDoneResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesDoneResponse);

    /**
     * Creates a new ListEntitiesDoneResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesDoneResponse instance
     */
    public static create(properties?: IListEntitiesDoneResponse): ListEntitiesDoneResponse;

    /**
     * Encodes the specified ListEntitiesDoneResponse message. Does not implicitly {@link ListEntitiesDoneResponse.verify|verify} messages.
     * @param message ListEntitiesDoneResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesDoneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesDoneResponse message, length delimited. Does not implicitly {@link ListEntitiesDoneResponse.verify|verify} messages.
     * @param message ListEntitiesDoneResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesDoneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesDoneResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesDoneResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesDoneResponse;

    /**
     * Decodes a ListEntitiesDoneResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesDoneResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesDoneResponse;

    /**
     * Verifies a ListEntitiesDoneResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesDoneResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesDoneResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesDoneResponse;

    /**
     * Creates a plain object from a ListEntitiesDoneResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesDoneResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesDoneResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesDoneResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesDoneResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SubscribeStatesRequest. */
export class SubscribeStatesRequest implements ISubscribeStatesRequest {

    /**
     * Constructs a new SubscribeStatesRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubscribeStatesRequest);

    /**
     * Creates a new SubscribeStatesRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubscribeStatesRequest instance
     */
    public static create(properties?: ISubscribeStatesRequest): SubscribeStatesRequest;

    /**
     * Encodes the specified SubscribeStatesRequest message. Does not implicitly {@link SubscribeStatesRequest.verify|verify} messages.
     * @param message SubscribeStatesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubscribeStatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubscribeStatesRequest message, length delimited. Does not implicitly {@link SubscribeStatesRequest.verify|verify} messages.
     * @param message SubscribeStatesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubscribeStatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubscribeStatesRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubscribeStatesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubscribeStatesRequest;

    /**
     * Decodes a SubscribeStatesRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubscribeStatesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubscribeStatesRequest;

    /**
     * Verifies a SubscribeStatesRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubscribeStatesRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubscribeStatesRequest
     */
    public static fromObject(object: { [k: string]: any }): SubscribeStatesRequest;

    /**
     * Creates a plain object from a SubscribeStatesRequest message. Also converts values to other types if specified.
     * @param message SubscribeStatesRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubscribeStatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubscribeStatesRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SubscribeStatesRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** EntityCategory enum. */
export enum EntityCategory {
    ENTITY_CATEGORY_NONE = 0,
    ENTITY_CATEGORY_CONFIG = 1,
    ENTITY_CATEGORY_DIAGNOSTIC = 2
}

/** Represents a ListEntitiesBinarySensorResponse. */
export class ListEntitiesBinarySensorResponse implements IListEntitiesBinarySensorResponse {

    /**
     * Constructs a new ListEntitiesBinarySensorResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesBinarySensorResponse);

    /** ListEntitiesBinarySensorResponse object_id. */
    public object_id: string;

    /** ListEntitiesBinarySensorResponse key. */
    public key: number;

    /** ListEntitiesBinarySensorResponse name. */
    public name: string;

    /** ListEntitiesBinarySensorResponse device_class. */
    public device_class: string;

    /** ListEntitiesBinarySensorResponse is_status_binary_sensor. */
    public is_status_binary_sensor: boolean;

    /** ListEntitiesBinarySensorResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesBinarySensorResponse icon. */
    public icon: string;

    /** ListEntitiesBinarySensorResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesBinarySensorResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesBinarySensorResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesBinarySensorResponse instance
     */
    public static create(properties?: IListEntitiesBinarySensorResponse): ListEntitiesBinarySensorResponse;

    /**
     * Encodes the specified ListEntitiesBinarySensorResponse message. Does not implicitly {@link ListEntitiesBinarySensorResponse.verify|verify} messages.
     * @param message ListEntitiesBinarySensorResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesBinarySensorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesBinarySensorResponse message, length delimited. Does not implicitly {@link ListEntitiesBinarySensorResponse.verify|verify} messages.
     * @param message ListEntitiesBinarySensorResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesBinarySensorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesBinarySensorResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesBinarySensorResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesBinarySensorResponse;

    /**
     * Decodes a ListEntitiesBinarySensorResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesBinarySensorResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesBinarySensorResponse;

    /**
     * Verifies a ListEntitiesBinarySensorResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesBinarySensorResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesBinarySensorResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesBinarySensorResponse;

    /**
     * Creates a plain object from a ListEntitiesBinarySensorResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesBinarySensorResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesBinarySensorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesBinarySensorResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesBinarySensorResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BinarySensorStateResponse. */
export class BinarySensorStateResponse implements IBinarySensorStateResponse {

    /**
     * Constructs a new BinarySensorStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBinarySensorStateResponse);

    /** BinarySensorStateResponse key. */
    public key: number;

    /** BinarySensorStateResponse state. */
    public state: boolean;

    /** BinarySensorStateResponse missing_state. */
    public missing_state: boolean;

    /** BinarySensorStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new BinarySensorStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BinarySensorStateResponse instance
     */
    public static create(properties?: IBinarySensorStateResponse): BinarySensorStateResponse;

    /**
     * Encodes the specified BinarySensorStateResponse message. Does not implicitly {@link BinarySensorStateResponse.verify|verify} messages.
     * @param message BinarySensorStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBinarySensorStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BinarySensorStateResponse message, length delimited. Does not implicitly {@link BinarySensorStateResponse.verify|verify} messages.
     * @param message BinarySensorStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBinarySensorStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BinarySensorStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BinarySensorStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BinarySensorStateResponse;

    /**
     * Decodes a BinarySensorStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BinarySensorStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BinarySensorStateResponse;

    /**
     * Verifies a BinarySensorStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BinarySensorStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BinarySensorStateResponse
     */
    public static fromObject(object: { [k: string]: any }): BinarySensorStateResponse;

    /**
     * Creates a plain object from a BinarySensorStateResponse message. Also converts values to other types if specified.
     * @param message BinarySensorStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BinarySensorStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BinarySensorStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BinarySensorStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesCoverResponse. */
export class ListEntitiesCoverResponse implements IListEntitiesCoverResponse {

    /**
     * Constructs a new ListEntitiesCoverResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesCoverResponse);

    /** ListEntitiesCoverResponse object_id. */
    public object_id: string;

    /** ListEntitiesCoverResponse key. */
    public key: number;

    /** ListEntitiesCoverResponse name. */
    public name: string;

    /** ListEntitiesCoverResponse assumed_state. */
    public assumed_state: boolean;

    /** ListEntitiesCoverResponse supports_position. */
    public supports_position: boolean;

    /** ListEntitiesCoverResponse supports_tilt. */
    public supports_tilt: boolean;

    /** ListEntitiesCoverResponse device_class. */
    public device_class: string;

    /** ListEntitiesCoverResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesCoverResponse icon. */
    public icon: string;

    /** ListEntitiesCoverResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesCoverResponse supports_stop. */
    public supports_stop: boolean;

    /** ListEntitiesCoverResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesCoverResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesCoverResponse instance
     */
    public static create(properties?: IListEntitiesCoverResponse): ListEntitiesCoverResponse;

    /**
     * Encodes the specified ListEntitiesCoverResponse message. Does not implicitly {@link ListEntitiesCoverResponse.verify|verify} messages.
     * @param message ListEntitiesCoverResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesCoverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesCoverResponse message, length delimited. Does not implicitly {@link ListEntitiesCoverResponse.verify|verify} messages.
     * @param message ListEntitiesCoverResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesCoverResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesCoverResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesCoverResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesCoverResponse;

    /**
     * Decodes a ListEntitiesCoverResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesCoverResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesCoverResponse;

    /**
     * Verifies a ListEntitiesCoverResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesCoverResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesCoverResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesCoverResponse;

    /**
     * Creates a plain object from a ListEntitiesCoverResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesCoverResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesCoverResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesCoverResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesCoverResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** LegacyCoverState enum. */
export enum LegacyCoverState {
    LEGACY_COVER_STATE_OPEN = 0,
    LEGACY_COVER_STATE_CLOSED = 1
}

/** CoverOperation enum. */
export enum CoverOperation {
    COVER_OPERATION_IDLE = 0,
    COVER_OPERATION_IS_OPENING = 1,
    COVER_OPERATION_IS_CLOSING = 2
}

/** Represents a CoverStateResponse. */
export class CoverStateResponse implements ICoverStateResponse {

    /**
     * Constructs a new CoverStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICoverStateResponse);

    /** CoverStateResponse key. */
    public key: number;

    /** CoverStateResponse legacy_state. */
    public legacy_state: LegacyCoverState;

    /** CoverStateResponse position. */
    public position: number;

    /** CoverStateResponse tilt. */
    public tilt: number;

    /** CoverStateResponse current_operation. */
    public current_operation: CoverOperation;

    /** CoverStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new CoverStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CoverStateResponse instance
     */
    public static create(properties?: ICoverStateResponse): CoverStateResponse;

    /**
     * Encodes the specified CoverStateResponse message. Does not implicitly {@link CoverStateResponse.verify|verify} messages.
     * @param message CoverStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICoverStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CoverStateResponse message, length delimited. Does not implicitly {@link CoverStateResponse.verify|verify} messages.
     * @param message CoverStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICoverStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CoverStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CoverStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CoverStateResponse;

    /**
     * Decodes a CoverStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CoverStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CoverStateResponse;

    /**
     * Verifies a CoverStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CoverStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CoverStateResponse
     */
    public static fromObject(object: { [k: string]: any }): CoverStateResponse;

    /**
     * Creates a plain object from a CoverStateResponse message. Also converts values to other types if specified.
     * @param message CoverStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CoverStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CoverStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CoverStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** LegacyCoverCommand enum. */
export enum LegacyCoverCommand {
    LEGACY_COVER_COMMAND_OPEN = 0,
    LEGACY_COVER_COMMAND_CLOSE = 1,
    LEGACY_COVER_COMMAND_STOP = 2
}

/** Represents a CoverCommandRequest. */
export class CoverCommandRequest implements ICoverCommandRequest {

    /**
     * Constructs a new CoverCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICoverCommandRequest);

    /** CoverCommandRequest key. */
    public key: number;

    /** CoverCommandRequest has_legacy_command. */
    public has_legacy_command: boolean;

    /** CoverCommandRequest legacy_command. */
    public legacy_command: LegacyCoverCommand;

    /** CoverCommandRequest has_position. */
    public has_position: boolean;

    /** CoverCommandRequest position. */
    public position: number;

    /** CoverCommandRequest has_tilt. */
    public has_tilt: boolean;

    /** CoverCommandRequest tilt. */
    public tilt: number;

    /** CoverCommandRequest stop. */
    public stop: boolean;

    /** CoverCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new CoverCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CoverCommandRequest instance
     */
    public static create(properties?: ICoverCommandRequest): CoverCommandRequest;

    /**
     * Encodes the specified CoverCommandRequest message. Does not implicitly {@link CoverCommandRequest.verify|verify} messages.
     * @param message CoverCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICoverCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CoverCommandRequest message, length delimited. Does not implicitly {@link CoverCommandRequest.verify|verify} messages.
     * @param message CoverCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICoverCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CoverCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CoverCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CoverCommandRequest;

    /**
     * Decodes a CoverCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CoverCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CoverCommandRequest;

    /**
     * Verifies a CoverCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CoverCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CoverCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): CoverCommandRequest;

    /**
     * Creates a plain object from a CoverCommandRequest message. Also converts values to other types if specified.
     * @param message CoverCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CoverCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CoverCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CoverCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesFanResponse. */
export class ListEntitiesFanResponse implements IListEntitiesFanResponse {

    /**
     * Constructs a new ListEntitiesFanResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesFanResponse);

    /** ListEntitiesFanResponse object_id. */
    public object_id: string;

    /** ListEntitiesFanResponse key. */
    public key: number;

    /** ListEntitiesFanResponse name. */
    public name: string;

    /** ListEntitiesFanResponse supports_oscillation. */
    public supports_oscillation: boolean;

    /** ListEntitiesFanResponse supports_speed. */
    public supports_speed: boolean;

    /** ListEntitiesFanResponse supports_direction. */
    public supports_direction: boolean;

    /** ListEntitiesFanResponse supported_speed_count. */
    public supported_speed_count: number;

    /** ListEntitiesFanResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesFanResponse icon. */
    public icon: string;

    /** ListEntitiesFanResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesFanResponse supported_preset_modes. */
    public supported_preset_modes: string[];

    /** ListEntitiesFanResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesFanResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesFanResponse instance
     */
    public static create(properties?: IListEntitiesFanResponse): ListEntitiesFanResponse;

    /**
     * Encodes the specified ListEntitiesFanResponse message. Does not implicitly {@link ListEntitiesFanResponse.verify|verify} messages.
     * @param message ListEntitiesFanResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesFanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesFanResponse message, length delimited. Does not implicitly {@link ListEntitiesFanResponse.verify|verify} messages.
     * @param message ListEntitiesFanResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesFanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesFanResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesFanResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesFanResponse;

    /**
     * Decodes a ListEntitiesFanResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesFanResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesFanResponse;

    /**
     * Verifies a ListEntitiesFanResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesFanResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesFanResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesFanResponse;

    /**
     * Creates a plain object from a ListEntitiesFanResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesFanResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesFanResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesFanResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesFanResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** FanSpeed enum. */
export enum FanSpeed {
    FAN_SPEED_LOW = 0,
    FAN_SPEED_MEDIUM = 1,
    FAN_SPEED_HIGH = 2
}

/** FanDirection enum. */
export enum FanDirection {
    FAN_DIRECTION_FORWARD = 0,
    FAN_DIRECTION_REVERSE = 1
}

/** Represents a FanStateResponse. */
export class FanStateResponse implements IFanStateResponse {

    /**
     * Constructs a new FanStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFanStateResponse);

    /** FanStateResponse key. */
    public key: number;

    /** FanStateResponse state. */
    public state: boolean;

    /** FanStateResponse oscillating. */
    public oscillating: boolean;

    /** FanStateResponse speed. */
    public speed: FanSpeed;

    /** FanStateResponse direction. */
    public direction: FanDirection;

    /** FanStateResponse speed_level. */
    public speed_level: number;

    /** FanStateResponse preset_mode. */
    public preset_mode: string;

    /** FanStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new FanStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FanStateResponse instance
     */
    public static create(properties?: IFanStateResponse): FanStateResponse;

    /**
     * Encodes the specified FanStateResponse message. Does not implicitly {@link FanStateResponse.verify|verify} messages.
     * @param message FanStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFanStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FanStateResponse message, length delimited. Does not implicitly {@link FanStateResponse.verify|verify} messages.
     * @param message FanStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFanStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FanStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FanStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FanStateResponse;

    /**
     * Decodes a FanStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FanStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FanStateResponse;

    /**
     * Verifies a FanStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FanStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FanStateResponse
     */
    public static fromObject(object: { [k: string]: any }): FanStateResponse;

    /**
     * Creates a plain object from a FanStateResponse message. Also converts values to other types if specified.
     * @param message FanStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FanStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FanStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FanStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a FanCommandRequest. */
export class FanCommandRequest implements IFanCommandRequest {

    /**
     * Constructs a new FanCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFanCommandRequest);

    /** FanCommandRequest key. */
    public key: number;

    /** FanCommandRequest has_state. */
    public has_state: boolean;

    /** FanCommandRequest state. */
    public state: boolean;

    /** FanCommandRequest has_speed. */
    public has_speed: boolean;

    /** FanCommandRequest speed. */
    public speed: FanSpeed;

    /** FanCommandRequest has_oscillating. */
    public has_oscillating: boolean;

    /** FanCommandRequest oscillating. */
    public oscillating: boolean;

    /** FanCommandRequest has_direction. */
    public has_direction: boolean;

    /** FanCommandRequest direction. */
    public direction: FanDirection;

    /** FanCommandRequest has_speed_level. */
    public has_speed_level: boolean;

    /** FanCommandRequest speed_level. */
    public speed_level: number;

    /** FanCommandRequest has_preset_mode. */
    public has_preset_mode: boolean;

    /** FanCommandRequest preset_mode. */
    public preset_mode: string;

    /** FanCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new FanCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FanCommandRequest instance
     */
    public static create(properties?: IFanCommandRequest): FanCommandRequest;

    /**
     * Encodes the specified FanCommandRequest message. Does not implicitly {@link FanCommandRequest.verify|verify} messages.
     * @param message FanCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFanCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FanCommandRequest message, length delimited. Does not implicitly {@link FanCommandRequest.verify|verify} messages.
     * @param message FanCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFanCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FanCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FanCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FanCommandRequest;

    /**
     * Decodes a FanCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FanCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FanCommandRequest;

    /**
     * Verifies a FanCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FanCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FanCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): FanCommandRequest;

    /**
     * Creates a plain object from a FanCommandRequest message. Also converts values to other types if specified.
     * @param message FanCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FanCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FanCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FanCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ColorMode enum. */
export enum ColorMode {
    COLOR_MODE_UNKNOWN = 0,
    COLOR_MODE_ON_OFF = 1,
    COLOR_MODE_LEGACY_BRIGHTNESS = 2,
    COLOR_MODE_BRIGHTNESS = 3,
    COLOR_MODE_WHITE = 7,
    COLOR_MODE_COLOR_TEMPERATURE = 11,
    COLOR_MODE_COLD_WARM_WHITE = 19,
    COLOR_MODE_RGB = 35,
    COLOR_MODE_RGB_WHITE = 39,
    COLOR_MODE_RGB_COLOR_TEMPERATURE = 47,
    COLOR_MODE_RGB_COLD_WARM_WHITE = 51
}

/** Represents a ListEntitiesLightResponse. */
export class ListEntitiesLightResponse implements IListEntitiesLightResponse {

    /**
     * Constructs a new ListEntitiesLightResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesLightResponse);

    /** ListEntitiesLightResponse object_id. */
    public object_id: string;

    /** ListEntitiesLightResponse key. */
    public key: number;

    /** ListEntitiesLightResponse name. */
    public name: string;

    /** ListEntitiesLightResponse supported_color_modes. */
    public supported_color_modes: ColorMode[];

    /** ListEntitiesLightResponse legacy_supports_brightness. */
    public legacy_supports_brightness: boolean;

    /** ListEntitiesLightResponse legacy_supports_rgb. */
    public legacy_supports_rgb: boolean;

    /** ListEntitiesLightResponse legacy_supports_white_value. */
    public legacy_supports_white_value: boolean;

    /** ListEntitiesLightResponse legacy_supports_color_temperature. */
    public legacy_supports_color_temperature: boolean;

    /** ListEntitiesLightResponse min_mireds. */
    public min_mireds: number;

    /** ListEntitiesLightResponse max_mireds. */
    public max_mireds: number;

    /** ListEntitiesLightResponse effects. */
    public effects: string[];

    /** ListEntitiesLightResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesLightResponse icon. */
    public icon: string;

    /** ListEntitiesLightResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesLightResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesLightResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesLightResponse instance
     */
    public static create(properties?: IListEntitiesLightResponse): ListEntitiesLightResponse;

    /**
     * Encodes the specified ListEntitiesLightResponse message. Does not implicitly {@link ListEntitiesLightResponse.verify|verify} messages.
     * @param message ListEntitiesLightResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesLightResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesLightResponse message, length delimited. Does not implicitly {@link ListEntitiesLightResponse.verify|verify} messages.
     * @param message ListEntitiesLightResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesLightResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesLightResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesLightResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesLightResponse;

    /**
     * Decodes a ListEntitiesLightResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesLightResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesLightResponse;

    /**
     * Verifies a ListEntitiesLightResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesLightResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesLightResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesLightResponse;

    /**
     * Creates a plain object from a ListEntitiesLightResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesLightResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesLightResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesLightResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesLightResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a LightStateResponse. */
export class LightStateResponse implements ILightStateResponse {

    /**
     * Constructs a new LightStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILightStateResponse);

    /** LightStateResponse key. */
    public key: number;

    /** LightStateResponse state. */
    public state: boolean;

    /** LightStateResponse brightness. */
    public brightness: number;

    /** LightStateResponse color_mode. */
    public color_mode: ColorMode;

    /** LightStateResponse color_brightness. */
    public color_brightness: number;

    /** LightStateResponse red. */
    public red: number;

    /** LightStateResponse green. */
    public green: number;

    /** LightStateResponse blue. */
    public blue: number;

    /** LightStateResponse white. */
    public white: number;

    /** LightStateResponse color_temperature. */
    public color_temperature: number;

    /** LightStateResponse cold_white. */
    public cold_white: number;

    /** LightStateResponse warm_white. */
    public warm_white: number;

    /** LightStateResponse effect. */
    public effect: string;

    /** LightStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new LightStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LightStateResponse instance
     */
    public static create(properties?: ILightStateResponse): LightStateResponse;

    /**
     * Encodes the specified LightStateResponse message. Does not implicitly {@link LightStateResponse.verify|verify} messages.
     * @param message LightStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILightStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LightStateResponse message, length delimited. Does not implicitly {@link LightStateResponse.verify|verify} messages.
     * @param message LightStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILightStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LightStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LightStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LightStateResponse;

    /**
     * Decodes a LightStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LightStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LightStateResponse;

    /**
     * Verifies a LightStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LightStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LightStateResponse
     */
    public static fromObject(object: { [k: string]: any }): LightStateResponse;

    /**
     * Creates a plain object from a LightStateResponse message. Also converts values to other types if specified.
     * @param message LightStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LightStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LightStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LightStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a LightCommandRequest. */
export class LightCommandRequest implements ILightCommandRequest {

    /**
     * Constructs a new LightCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILightCommandRequest);

    /** LightCommandRequest key. */
    public key: number;

    /** LightCommandRequest has_state. */
    public has_state: boolean;

    /** LightCommandRequest state. */
    public state: boolean;

    /** LightCommandRequest has_brightness. */
    public has_brightness: boolean;

    /** LightCommandRequest brightness. */
    public brightness: number;

    /** LightCommandRequest has_color_mode. */
    public has_color_mode: boolean;

    /** LightCommandRequest color_mode. */
    public color_mode: ColorMode;

    /** LightCommandRequest has_color_brightness. */
    public has_color_brightness: boolean;

    /** LightCommandRequest color_brightness. */
    public color_brightness: number;

    /** LightCommandRequest has_rgb. */
    public has_rgb: boolean;

    /** LightCommandRequest red. */
    public red: number;

    /** LightCommandRequest green. */
    public green: number;

    /** LightCommandRequest blue. */
    public blue: number;

    /** LightCommandRequest has_white. */
    public has_white: boolean;

    /** LightCommandRequest white. */
    public white: number;

    /** LightCommandRequest has_color_temperature. */
    public has_color_temperature: boolean;

    /** LightCommandRequest color_temperature. */
    public color_temperature: number;

    /** LightCommandRequest has_cold_white. */
    public has_cold_white: boolean;

    /** LightCommandRequest cold_white. */
    public cold_white: number;

    /** LightCommandRequest has_warm_white. */
    public has_warm_white: boolean;

    /** LightCommandRequest warm_white. */
    public warm_white: number;

    /** LightCommandRequest has_transition_length. */
    public has_transition_length: boolean;

    /** LightCommandRequest transition_length. */
    public transition_length: number;

    /** LightCommandRequest has_flash_length. */
    public has_flash_length: boolean;

    /** LightCommandRequest flash_length. */
    public flash_length: number;

    /** LightCommandRequest has_effect. */
    public has_effect: boolean;

    /** LightCommandRequest effect. */
    public effect: string;

    /** LightCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new LightCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LightCommandRequest instance
     */
    public static create(properties?: ILightCommandRequest): LightCommandRequest;

    /**
     * Encodes the specified LightCommandRequest message. Does not implicitly {@link LightCommandRequest.verify|verify} messages.
     * @param message LightCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILightCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LightCommandRequest message, length delimited. Does not implicitly {@link LightCommandRequest.verify|verify} messages.
     * @param message LightCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILightCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LightCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LightCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LightCommandRequest;

    /**
     * Decodes a LightCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LightCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LightCommandRequest;

    /**
     * Verifies a LightCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LightCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LightCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): LightCommandRequest;

    /**
     * Creates a plain object from a LightCommandRequest message. Also converts values to other types if specified.
     * @param message LightCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LightCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LightCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LightCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** SensorStateClass enum. */
export enum SensorStateClass {
    STATE_CLASS_NONE = 0,
    STATE_CLASS_MEASUREMENT = 1,
    STATE_CLASS_TOTAL_INCREASING = 2,
    STATE_CLASS_TOTAL = 3
}

/** SensorLastResetType enum. */
export enum SensorLastResetType {
    LAST_RESET_NONE = 0,
    LAST_RESET_NEVER = 1,
    LAST_RESET_AUTO = 2
}

/** Represents a ListEntitiesSensorResponse. */
export class ListEntitiesSensorResponse implements IListEntitiesSensorResponse {

    /**
     * Constructs a new ListEntitiesSensorResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesSensorResponse);

    /** ListEntitiesSensorResponse object_id. */
    public object_id: string;

    /** ListEntitiesSensorResponse key. */
    public key: number;

    /** ListEntitiesSensorResponse name. */
    public name: string;

    /** ListEntitiesSensorResponse icon. */
    public icon: string;

    /** ListEntitiesSensorResponse unit_of_measurement. */
    public unit_of_measurement: string;

    /** ListEntitiesSensorResponse accuracy_decimals. */
    public accuracy_decimals: number;

    /** ListEntitiesSensorResponse force_update. */
    public force_update: boolean;

    /** ListEntitiesSensorResponse device_class. */
    public device_class: string;

    /** ListEntitiesSensorResponse state_class. */
    public state_class: SensorStateClass;

    /** ListEntitiesSensorResponse legacy_last_reset_type. */
    public legacy_last_reset_type: SensorLastResetType;

    /** ListEntitiesSensorResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesSensorResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesSensorResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesSensorResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesSensorResponse instance
     */
    public static create(properties?: IListEntitiesSensorResponse): ListEntitiesSensorResponse;

    /**
     * Encodes the specified ListEntitiesSensorResponse message. Does not implicitly {@link ListEntitiesSensorResponse.verify|verify} messages.
     * @param message ListEntitiesSensorResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesSensorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesSensorResponse message, length delimited. Does not implicitly {@link ListEntitiesSensorResponse.verify|verify} messages.
     * @param message ListEntitiesSensorResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesSensorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesSensorResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesSensorResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesSensorResponse;

    /**
     * Decodes a ListEntitiesSensorResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesSensorResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesSensorResponse;

    /**
     * Verifies a ListEntitiesSensorResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesSensorResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesSensorResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesSensorResponse;

    /**
     * Creates a plain object from a ListEntitiesSensorResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesSensorResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesSensorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesSensorResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesSensorResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SensorStateResponse. */
export class SensorStateResponse implements ISensorStateResponse {

    /**
     * Constructs a new SensorStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISensorStateResponse);

    /** SensorStateResponse key. */
    public key: number;

    /** SensorStateResponse state. */
    public state: number;

    /** SensorStateResponse missing_state. */
    public missing_state: boolean;

    /** SensorStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new SensorStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SensorStateResponse instance
     */
    public static create(properties?: ISensorStateResponse): SensorStateResponse;

    /**
     * Encodes the specified SensorStateResponse message. Does not implicitly {@link SensorStateResponse.verify|verify} messages.
     * @param message SensorStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISensorStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SensorStateResponse message, length delimited. Does not implicitly {@link SensorStateResponse.verify|verify} messages.
     * @param message SensorStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISensorStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SensorStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SensorStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SensorStateResponse;

    /**
     * Decodes a SensorStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SensorStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SensorStateResponse;

    /**
     * Verifies a SensorStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SensorStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SensorStateResponse
     */
    public static fromObject(object: { [k: string]: any }): SensorStateResponse;

    /**
     * Creates a plain object from a SensorStateResponse message. Also converts values to other types if specified.
     * @param message SensorStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SensorStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SensorStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SensorStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesSwitchResponse. */
export class ListEntitiesSwitchResponse implements IListEntitiesSwitchResponse {

    /**
     * Constructs a new ListEntitiesSwitchResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesSwitchResponse);

    /** ListEntitiesSwitchResponse object_id. */
    public object_id: string;

    /** ListEntitiesSwitchResponse key. */
    public key: number;

    /** ListEntitiesSwitchResponse name. */
    public name: string;

    /** ListEntitiesSwitchResponse icon. */
    public icon: string;

    /** ListEntitiesSwitchResponse assumed_state. */
    public assumed_state: boolean;

    /** ListEntitiesSwitchResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesSwitchResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesSwitchResponse device_class. */
    public device_class: string;

    /** ListEntitiesSwitchResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesSwitchResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesSwitchResponse instance
     */
    public static create(properties?: IListEntitiesSwitchResponse): ListEntitiesSwitchResponse;

    /**
     * Encodes the specified ListEntitiesSwitchResponse message. Does not implicitly {@link ListEntitiesSwitchResponse.verify|verify} messages.
     * @param message ListEntitiesSwitchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesSwitchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesSwitchResponse message, length delimited. Does not implicitly {@link ListEntitiesSwitchResponse.verify|verify} messages.
     * @param message ListEntitiesSwitchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesSwitchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesSwitchResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesSwitchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesSwitchResponse;

    /**
     * Decodes a ListEntitiesSwitchResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesSwitchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesSwitchResponse;

    /**
     * Verifies a ListEntitiesSwitchResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesSwitchResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesSwitchResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesSwitchResponse;

    /**
     * Creates a plain object from a ListEntitiesSwitchResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesSwitchResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesSwitchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesSwitchResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesSwitchResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SwitchStateResponse. */
export class SwitchStateResponse implements ISwitchStateResponse {

    /**
     * Constructs a new SwitchStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISwitchStateResponse);

    /** SwitchStateResponse key. */
    public key: number;

    /** SwitchStateResponse state. */
    public state: boolean;

    /** SwitchStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new SwitchStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SwitchStateResponse instance
     */
    public static create(properties?: ISwitchStateResponse): SwitchStateResponse;

    /**
     * Encodes the specified SwitchStateResponse message. Does not implicitly {@link SwitchStateResponse.verify|verify} messages.
     * @param message SwitchStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISwitchStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SwitchStateResponse message, length delimited. Does not implicitly {@link SwitchStateResponse.verify|verify} messages.
     * @param message SwitchStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISwitchStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SwitchStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SwitchStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SwitchStateResponse;

    /**
     * Decodes a SwitchStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SwitchStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SwitchStateResponse;

    /**
     * Verifies a SwitchStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SwitchStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SwitchStateResponse
     */
    public static fromObject(object: { [k: string]: any }): SwitchStateResponse;

    /**
     * Creates a plain object from a SwitchStateResponse message. Also converts values to other types if specified.
     * @param message SwitchStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SwitchStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SwitchStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SwitchStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SwitchCommandRequest. */
export class SwitchCommandRequest implements ISwitchCommandRequest {

    /**
     * Constructs a new SwitchCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISwitchCommandRequest);

    /** SwitchCommandRequest key. */
    public key: number;

    /** SwitchCommandRequest state. */
    public state: boolean;

    /** SwitchCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new SwitchCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SwitchCommandRequest instance
     */
    public static create(properties?: ISwitchCommandRequest): SwitchCommandRequest;

    /**
     * Encodes the specified SwitchCommandRequest message. Does not implicitly {@link SwitchCommandRequest.verify|verify} messages.
     * @param message SwitchCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISwitchCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SwitchCommandRequest message, length delimited. Does not implicitly {@link SwitchCommandRequest.verify|verify} messages.
     * @param message SwitchCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISwitchCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SwitchCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SwitchCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SwitchCommandRequest;

    /**
     * Decodes a SwitchCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SwitchCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SwitchCommandRequest;

    /**
     * Verifies a SwitchCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SwitchCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SwitchCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): SwitchCommandRequest;

    /**
     * Creates a plain object from a SwitchCommandRequest message. Also converts values to other types if specified.
     * @param message SwitchCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SwitchCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SwitchCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SwitchCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesTextSensorResponse. */
export class ListEntitiesTextSensorResponse implements IListEntitiesTextSensorResponse {

    /**
     * Constructs a new ListEntitiesTextSensorResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesTextSensorResponse);

    /** ListEntitiesTextSensorResponse object_id. */
    public object_id: string;

    /** ListEntitiesTextSensorResponse key. */
    public key: number;

    /** ListEntitiesTextSensorResponse name. */
    public name: string;

    /** ListEntitiesTextSensorResponse icon. */
    public icon: string;

    /** ListEntitiesTextSensorResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesTextSensorResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesTextSensorResponse device_class. */
    public device_class: string;

    /** ListEntitiesTextSensorResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesTextSensorResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesTextSensorResponse instance
     */
    public static create(properties?: IListEntitiesTextSensorResponse): ListEntitiesTextSensorResponse;

    /**
     * Encodes the specified ListEntitiesTextSensorResponse message. Does not implicitly {@link ListEntitiesTextSensorResponse.verify|verify} messages.
     * @param message ListEntitiesTextSensorResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesTextSensorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesTextSensorResponse message, length delimited. Does not implicitly {@link ListEntitiesTextSensorResponse.verify|verify} messages.
     * @param message ListEntitiesTextSensorResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesTextSensorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesTextSensorResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesTextSensorResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesTextSensorResponse;

    /**
     * Decodes a ListEntitiesTextSensorResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesTextSensorResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesTextSensorResponse;

    /**
     * Verifies a ListEntitiesTextSensorResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesTextSensorResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesTextSensorResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesTextSensorResponse;

    /**
     * Creates a plain object from a ListEntitiesTextSensorResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesTextSensorResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesTextSensorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesTextSensorResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesTextSensorResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a TextSensorStateResponse. */
export class TextSensorStateResponse implements ITextSensorStateResponse {

    /**
     * Constructs a new TextSensorStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITextSensorStateResponse);

    /** TextSensorStateResponse key. */
    public key: number;

    /** TextSensorStateResponse state. */
    public state: string;

    /** TextSensorStateResponse missing_state. */
    public missing_state: boolean;

    /** TextSensorStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new TextSensorStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextSensorStateResponse instance
     */
    public static create(properties?: ITextSensorStateResponse): TextSensorStateResponse;

    /**
     * Encodes the specified TextSensorStateResponse message. Does not implicitly {@link TextSensorStateResponse.verify|verify} messages.
     * @param message TextSensorStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITextSensorStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextSensorStateResponse message, length delimited. Does not implicitly {@link TextSensorStateResponse.verify|verify} messages.
     * @param message TextSensorStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITextSensorStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextSensorStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TextSensorStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextSensorStateResponse;

    /**
     * Decodes a TextSensorStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TextSensorStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextSensorStateResponse;

    /**
     * Verifies a TextSensorStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextSensorStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextSensorStateResponse
     */
    public static fromObject(object: { [k: string]: any }): TextSensorStateResponse;

    /**
     * Creates a plain object from a TextSensorStateResponse message. Also converts values to other types if specified.
     * @param message TextSensorStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TextSensorStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextSensorStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TextSensorStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** LogLevel enum. */
export enum LogLevel {
    LOG_LEVEL_NONE = 0,
    LOG_LEVEL_ERROR = 1,
    LOG_LEVEL_WARN = 2,
    LOG_LEVEL_INFO = 3,
    LOG_LEVEL_CONFIG = 4,
    LOG_LEVEL_DEBUG = 5,
    LOG_LEVEL_VERBOSE = 6,
    LOG_LEVEL_VERY_VERBOSE = 7
}

/** Represents a SubscribeLogsRequest. */
export class SubscribeLogsRequest implements ISubscribeLogsRequest {

    /**
     * Constructs a new SubscribeLogsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubscribeLogsRequest);

    /** SubscribeLogsRequest level. */
    public level: LogLevel;

    /** SubscribeLogsRequest dump_config. */
    public dump_config: boolean;

    /**
     * Creates a new SubscribeLogsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubscribeLogsRequest instance
     */
    public static create(properties?: ISubscribeLogsRequest): SubscribeLogsRequest;

    /**
     * Encodes the specified SubscribeLogsRequest message. Does not implicitly {@link SubscribeLogsRequest.verify|verify} messages.
     * @param message SubscribeLogsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubscribeLogsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubscribeLogsRequest message, length delimited. Does not implicitly {@link SubscribeLogsRequest.verify|verify} messages.
     * @param message SubscribeLogsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubscribeLogsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubscribeLogsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubscribeLogsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubscribeLogsRequest;

    /**
     * Decodes a SubscribeLogsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubscribeLogsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubscribeLogsRequest;

    /**
     * Verifies a SubscribeLogsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubscribeLogsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubscribeLogsRequest
     */
    public static fromObject(object: { [k: string]: any }): SubscribeLogsRequest;

    /**
     * Creates a plain object from a SubscribeLogsRequest message. Also converts values to other types if specified.
     * @param message SubscribeLogsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubscribeLogsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubscribeLogsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SubscribeLogsRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SubscribeLogsResponse. */
export class SubscribeLogsResponse implements ISubscribeLogsResponse {

    /**
     * Constructs a new SubscribeLogsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubscribeLogsResponse);

    /** SubscribeLogsResponse level. */
    public level: LogLevel;

    /** SubscribeLogsResponse message. */
    public message: Uint8Array;

    /**
     * Creates a new SubscribeLogsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubscribeLogsResponse instance
     */
    public static create(properties?: ISubscribeLogsResponse): SubscribeLogsResponse;

    /**
     * Encodes the specified SubscribeLogsResponse message. Does not implicitly {@link SubscribeLogsResponse.verify|verify} messages.
     * @param message SubscribeLogsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubscribeLogsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubscribeLogsResponse message, length delimited. Does not implicitly {@link SubscribeLogsResponse.verify|verify} messages.
     * @param message SubscribeLogsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubscribeLogsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubscribeLogsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubscribeLogsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubscribeLogsResponse;

    /**
     * Decodes a SubscribeLogsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubscribeLogsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubscribeLogsResponse;

    /**
     * Verifies a SubscribeLogsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubscribeLogsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubscribeLogsResponse
     */
    public static fromObject(object: { [k: string]: any }): SubscribeLogsResponse;

    /**
     * Creates a plain object from a SubscribeLogsResponse message. Also converts values to other types if specified.
     * @param message SubscribeLogsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubscribeLogsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubscribeLogsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SubscribeLogsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NoiseEncryptionSetKeyRequest. */
export class NoiseEncryptionSetKeyRequest implements INoiseEncryptionSetKeyRequest {

    /**
     * Constructs a new NoiseEncryptionSetKeyRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: INoiseEncryptionSetKeyRequest);

    /** NoiseEncryptionSetKeyRequest key. */
    public key: Uint8Array;

    /**
     * Creates a new NoiseEncryptionSetKeyRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NoiseEncryptionSetKeyRequest instance
     */
    public static create(properties?: INoiseEncryptionSetKeyRequest): NoiseEncryptionSetKeyRequest;

    /**
     * Encodes the specified NoiseEncryptionSetKeyRequest message. Does not implicitly {@link NoiseEncryptionSetKeyRequest.verify|verify} messages.
     * @param message NoiseEncryptionSetKeyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INoiseEncryptionSetKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NoiseEncryptionSetKeyRequest message, length delimited. Does not implicitly {@link NoiseEncryptionSetKeyRequest.verify|verify} messages.
     * @param message NoiseEncryptionSetKeyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INoiseEncryptionSetKeyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NoiseEncryptionSetKeyRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NoiseEncryptionSetKeyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NoiseEncryptionSetKeyRequest;

    /**
     * Decodes a NoiseEncryptionSetKeyRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NoiseEncryptionSetKeyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NoiseEncryptionSetKeyRequest;

    /**
     * Verifies a NoiseEncryptionSetKeyRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NoiseEncryptionSetKeyRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NoiseEncryptionSetKeyRequest
     */
    public static fromObject(object: { [k: string]: any }): NoiseEncryptionSetKeyRequest;

    /**
     * Creates a plain object from a NoiseEncryptionSetKeyRequest message. Also converts values to other types if specified.
     * @param message NoiseEncryptionSetKeyRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NoiseEncryptionSetKeyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NoiseEncryptionSetKeyRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NoiseEncryptionSetKeyRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NoiseEncryptionSetKeyResponse. */
export class NoiseEncryptionSetKeyResponse implements INoiseEncryptionSetKeyResponse {

    /**
     * Constructs a new NoiseEncryptionSetKeyResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: INoiseEncryptionSetKeyResponse);

    /** NoiseEncryptionSetKeyResponse success. */
    public success: boolean;

    /**
     * Creates a new NoiseEncryptionSetKeyResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NoiseEncryptionSetKeyResponse instance
     */
    public static create(properties?: INoiseEncryptionSetKeyResponse): NoiseEncryptionSetKeyResponse;

    /**
     * Encodes the specified NoiseEncryptionSetKeyResponse message. Does not implicitly {@link NoiseEncryptionSetKeyResponse.verify|verify} messages.
     * @param message NoiseEncryptionSetKeyResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INoiseEncryptionSetKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NoiseEncryptionSetKeyResponse message, length delimited. Does not implicitly {@link NoiseEncryptionSetKeyResponse.verify|verify} messages.
     * @param message NoiseEncryptionSetKeyResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INoiseEncryptionSetKeyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NoiseEncryptionSetKeyResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NoiseEncryptionSetKeyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NoiseEncryptionSetKeyResponse;

    /**
     * Decodes a NoiseEncryptionSetKeyResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NoiseEncryptionSetKeyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NoiseEncryptionSetKeyResponse;

    /**
     * Verifies a NoiseEncryptionSetKeyResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NoiseEncryptionSetKeyResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NoiseEncryptionSetKeyResponse
     */
    public static fromObject(object: { [k: string]: any }): NoiseEncryptionSetKeyResponse;

    /**
     * Creates a plain object from a NoiseEncryptionSetKeyResponse message. Also converts values to other types if specified.
     * @param message NoiseEncryptionSetKeyResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NoiseEncryptionSetKeyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NoiseEncryptionSetKeyResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NoiseEncryptionSetKeyResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SubscribeHomeassistantServicesRequest. */
export class SubscribeHomeassistantServicesRequest implements ISubscribeHomeassistantServicesRequest {

    /**
     * Constructs a new SubscribeHomeassistantServicesRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubscribeHomeassistantServicesRequest);

    /**
     * Creates a new SubscribeHomeassistantServicesRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubscribeHomeassistantServicesRequest instance
     */
    public static create(properties?: ISubscribeHomeassistantServicesRequest): SubscribeHomeassistantServicesRequest;

    /**
     * Encodes the specified SubscribeHomeassistantServicesRequest message. Does not implicitly {@link SubscribeHomeassistantServicesRequest.verify|verify} messages.
     * @param message SubscribeHomeassistantServicesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubscribeHomeassistantServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubscribeHomeassistantServicesRequest message, length delimited. Does not implicitly {@link SubscribeHomeassistantServicesRequest.verify|verify} messages.
     * @param message SubscribeHomeassistantServicesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubscribeHomeassistantServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubscribeHomeassistantServicesRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubscribeHomeassistantServicesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubscribeHomeassistantServicesRequest;

    /**
     * Decodes a SubscribeHomeassistantServicesRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubscribeHomeassistantServicesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubscribeHomeassistantServicesRequest;

    /**
     * Verifies a SubscribeHomeassistantServicesRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubscribeHomeassistantServicesRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubscribeHomeassistantServicesRequest
     */
    public static fromObject(object: { [k: string]: any }): SubscribeHomeassistantServicesRequest;

    /**
     * Creates a plain object from a SubscribeHomeassistantServicesRequest message. Also converts values to other types if specified.
     * @param message SubscribeHomeassistantServicesRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubscribeHomeassistantServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubscribeHomeassistantServicesRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SubscribeHomeassistantServicesRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a HomeassistantServiceMap. */
export class HomeassistantServiceMap implements IHomeassistantServiceMap {

    /**
     * Constructs a new HomeassistantServiceMap.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHomeassistantServiceMap);

    /** HomeassistantServiceMap key. */
    public key: string;

    /** HomeassistantServiceMap value. */
    public value: string;

    /**
     * Creates a new HomeassistantServiceMap instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HomeassistantServiceMap instance
     */
    public static create(properties?: IHomeassistantServiceMap): HomeassistantServiceMap;

    /**
     * Encodes the specified HomeassistantServiceMap message. Does not implicitly {@link HomeassistantServiceMap.verify|verify} messages.
     * @param message HomeassistantServiceMap message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHomeassistantServiceMap, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HomeassistantServiceMap message, length delimited. Does not implicitly {@link HomeassistantServiceMap.verify|verify} messages.
     * @param message HomeassistantServiceMap message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHomeassistantServiceMap, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HomeassistantServiceMap message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HomeassistantServiceMap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HomeassistantServiceMap;

    /**
     * Decodes a HomeassistantServiceMap message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HomeassistantServiceMap
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HomeassistantServiceMap;

    /**
     * Verifies a HomeassistantServiceMap message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HomeassistantServiceMap message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HomeassistantServiceMap
     */
    public static fromObject(object: { [k: string]: any }): HomeassistantServiceMap;

    /**
     * Creates a plain object from a HomeassistantServiceMap message. Also converts values to other types if specified.
     * @param message HomeassistantServiceMap
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HomeassistantServiceMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HomeassistantServiceMap to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HomeassistantServiceMap
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a HomeassistantActionRequest. */
export class HomeassistantActionRequest implements IHomeassistantActionRequest {

    /**
     * Constructs a new HomeassistantActionRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHomeassistantActionRequest);

    /** HomeassistantActionRequest service. */
    public service: string;

    /** HomeassistantActionRequest data. */
    public data: IHomeassistantServiceMap[];

    /** HomeassistantActionRequest data_template. */
    public data_template: IHomeassistantServiceMap[];

    /** HomeassistantActionRequest variables. */
    public variables: IHomeassistantServiceMap[];

    /** HomeassistantActionRequest is_event. */
    public is_event: boolean;

    /**
     * Creates a new HomeassistantActionRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HomeassistantActionRequest instance
     */
    public static create(properties?: IHomeassistantActionRequest): HomeassistantActionRequest;

    /**
     * Encodes the specified HomeassistantActionRequest message. Does not implicitly {@link HomeassistantActionRequest.verify|verify} messages.
     * @param message HomeassistantActionRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHomeassistantActionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HomeassistantActionRequest message, length delimited. Does not implicitly {@link HomeassistantActionRequest.verify|verify} messages.
     * @param message HomeassistantActionRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHomeassistantActionRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HomeassistantActionRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HomeassistantActionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HomeassistantActionRequest;

    /**
     * Decodes a HomeassistantActionRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HomeassistantActionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HomeassistantActionRequest;

    /**
     * Verifies a HomeassistantActionRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HomeassistantActionRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HomeassistantActionRequest
     */
    public static fromObject(object: { [k: string]: any }): HomeassistantActionRequest;

    /**
     * Creates a plain object from a HomeassistantActionRequest message. Also converts values to other types if specified.
     * @param message HomeassistantActionRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HomeassistantActionRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HomeassistantActionRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HomeassistantActionRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SubscribeHomeAssistantStatesRequest. */
export class SubscribeHomeAssistantStatesRequest implements ISubscribeHomeAssistantStatesRequest {

    /**
     * Constructs a new SubscribeHomeAssistantStatesRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubscribeHomeAssistantStatesRequest);

    /**
     * Creates a new SubscribeHomeAssistantStatesRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubscribeHomeAssistantStatesRequest instance
     */
    public static create(properties?: ISubscribeHomeAssistantStatesRequest): SubscribeHomeAssistantStatesRequest;

    /**
     * Encodes the specified SubscribeHomeAssistantStatesRequest message. Does not implicitly {@link SubscribeHomeAssistantStatesRequest.verify|verify} messages.
     * @param message SubscribeHomeAssistantStatesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubscribeHomeAssistantStatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubscribeHomeAssistantStatesRequest message, length delimited. Does not implicitly {@link SubscribeHomeAssistantStatesRequest.verify|verify} messages.
     * @param message SubscribeHomeAssistantStatesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubscribeHomeAssistantStatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubscribeHomeAssistantStatesRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubscribeHomeAssistantStatesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubscribeHomeAssistantStatesRequest;

    /**
     * Decodes a SubscribeHomeAssistantStatesRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubscribeHomeAssistantStatesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubscribeHomeAssistantStatesRequest;

    /**
     * Verifies a SubscribeHomeAssistantStatesRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubscribeHomeAssistantStatesRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubscribeHomeAssistantStatesRequest
     */
    public static fromObject(object: { [k: string]: any }): SubscribeHomeAssistantStatesRequest;

    /**
     * Creates a plain object from a SubscribeHomeAssistantStatesRequest message. Also converts values to other types if specified.
     * @param message SubscribeHomeAssistantStatesRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubscribeHomeAssistantStatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubscribeHomeAssistantStatesRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SubscribeHomeAssistantStatesRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SubscribeHomeAssistantStateResponse. */
export class SubscribeHomeAssistantStateResponse implements ISubscribeHomeAssistantStateResponse {

    /**
     * Constructs a new SubscribeHomeAssistantStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubscribeHomeAssistantStateResponse);

    /** SubscribeHomeAssistantStateResponse entity_id. */
    public entity_id: string;

    /** SubscribeHomeAssistantStateResponse attribute. */
    public attribute: string;

    /** SubscribeHomeAssistantStateResponse once. */
    public once: boolean;

    /**
     * Creates a new SubscribeHomeAssistantStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubscribeHomeAssistantStateResponse instance
     */
    public static create(properties?: ISubscribeHomeAssistantStateResponse): SubscribeHomeAssistantStateResponse;

    /**
     * Encodes the specified SubscribeHomeAssistantStateResponse message. Does not implicitly {@link SubscribeHomeAssistantStateResponse.verify|verify} messages.
     * @param message SubscribeHomeAssistantStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubscribeHomeAssistantStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubscribeHomeAssistantStateResponse message, length delimited. Does not implicitly {@link SubscribeHomeAssistantStateResponse.verify|verify} messages.
     * @param message SubscribeHomeAssistantStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubscribeHomeAssistantStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubscribeHomeAssistantStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubscribeHomeAssistantStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubscribeHomeAssistantStateResponse;

    /**
     * Decodes a SubscribeHomeAssistantStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubscribeHomeAssistantStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubscribeHomeAssistantStateResponse;

    /**
     * Verifies a SubscribeHomeAssistantStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubscribeHomeAssistantStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubscribeHomeAssistantStateResponse
     */
    public static fromObject(object: { [k: string]: any }): SubscribeHomeAssistantStateResponse;

    /**
     * Creates a plain object from a SubscribeHomeAssistantStateResponse message. Also converts values to other types if specified.
     * @param message SubscribeHomeAssistantStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubscribeHomeAssistantStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubscribeHomeAssistantStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SubscribeHomeAssistantStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a HomeAssistantStateResponse. */
export class HomeAssistantStateResponse implements IHomeAssistantStateResponse {

    /**
     * Constructs a new HomeAssistantStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHomeAssistantStateResponse);

    /** HomeAssistantStateResponse entity_id. */
    public entity_id: string;

    /** HomeAssistantStateResponse state. */
    public state: string;

    /** HomeAssistantStateResponse attribute. */
    public attribute: string;

    /**
     * Creates a new HomeAssistantStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HomeAssistantStateResponse instance
     */
    public static create(properties?: IHomeAssistantStateResponse): HomeAssistantStateResponse;

    /**
     * Encodes the specified HomeAssistantStateResponse message. Does not implicitly {@link HomeAssistantStateResponse.verify|verify} messages.
     * @param message HomeAssistantStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHomeAssistantStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HomeAssistantStateResponse message, length delimited. Does not implicitly {@link HomeAssistantStateResponse.verify|verify} messages.
     * @param message HomeAssistantStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHomeAssistantStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HomeAssistantStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HomeAssistantStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HomeAssistantStateResponse;

    /**
     * Decodes a HomeAssistantStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HomeAssistantStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HomeAssistantStateResponse;

    /**
     * Verifies a HomeAssistantStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HomeAssistantStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HomeAssistantStateResponse
     */
    public static fromObject(object: { [k: string]: any }): HomeAssistantStateResponse;

    /**
     * Creates a plain object from a HomeAssistantStateResponse message. Also converts values to other types if specified.
     * @param message HomeAssistantStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HomeAssistantStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HomeAssistantStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HomeAssistantStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a GetTimeRequest. */
export class GetTimeRequest implements IGetTimeRequest {

    /**
     * Constructs a new GetTimeRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetTimeRequest);

    /**
     * Creates a new GetTimeRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetTimeRequest instance
     */
    public static create(properties?: IGetTimeRequest): GetTimeRequest;

    /**
     * Encodes the specified GetTimeRequest message. Does not implicitly {@link GetTimeRequest.verify|verify} messages.
     * @param message GetTimeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetTimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetTimeRequest message, length delimited. Does not implicitly {@link GetTimeRequest.verify|verify} messages.
     * @param message GetTimeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetTimeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetTimeRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetTimeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetTimeRequest;

    /**
     * Decodes a GetTimeRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetTimeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetTimeRequest;

    /**
     * Verifies a GetTimeRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetTimeRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetTimeRequest
     */
    public static fromObject(object: { [k: string]: any }): GetTimeRequest;

    /**
     * Creates a plain object from a GetTimeRequest message. Also converts values to other types if specified.
     * @param message GetTimeRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetTimeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetTimeRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetTimeRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a GetTimeResponse. */
export class GetTimeResponse implements IGetTimeResponse {

    /**
     * Constructs a new GetTimeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetTimeResponse);

    /** GetTimeResponse epoch_seconds. */
    public epoch_seconds: number;

    /** GetTimeResponse timezone. */
    public timezone: string;

    /**
     * Creates a new GetTimeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetTimeResponse instance
     */
    public static create(properties?: IGetTimeResponse): GetTimeResponse;

    /**
     * Encodes the specified GetTimeResponse message. Does not implicitly {@link GetTimeResponse.verify|verify} messages.
     * @param message GetTimeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetTimeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetTimeResponse message, length delimited. Does not implicitly {@link GetTimeResponse.verify|verify} messages.
     * @param message GetTimeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetTimeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetTimeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetTimeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetTimeResponse;

    /**
     * Decodes a GetTimeResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetTimeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetTimeResponse;

    /**
     * Verifies a GetTimeResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetTimeResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetTimeResponse
     */
    public static fromObject(object: { [k: string]: any }): GetTimeResponse;

    /**
     * Creates a plain object from a GetTimeResponse message. Also converts values to other types if specified.
     * @param message GetTimeResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetTimeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetTimeResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetTimeResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ServiceArgType enum. */
export enum ServiceArgType {
    SERVICE_ARG_TYPE_BOOL = 0,
    SERVICE_ARG_TYPE_INT = 1,
    SERVICE_ARG_TYPE_FLOAT = 2,
    SERVICE_ARG_TYPE_STRING = 3,
    SERVICE_ARG_TYPE_BOOL_ARRAY = 4,
    SERVICE_ARG_TYPE_INT_ARRAY = 5,
    SERVICE_ARG_TYPE_FLOAT_ARRAY = 6,
    SERVICE_ARG_TYPE_STRING_ARRAY = 7
}

/** Represents a ListEntitiesServicesArgument. */
export class ListEntitiesServicesArgument implements IListEntitiesServicesArgument {

    /**
     * Constructs a new ListEntitiesServicesArgument.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesServicesArgument);

    /** ListEntitiesServicesArgument name. */
    public name: string;

    /** ListEntitiesServicesArgument type. */
    public type: ServiceArgType;

    /**
     * Creates a new ListEntitiesServicesArgument instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesServicesArgument instance
     */
    public static create(properties?: IListEntitiesServicesArgument): ListEntitiesServicesArgument;

    /**
     * Encodes the specified ListEntitiesServicesArgument message. Does not implicitly {@link ListEntitiesServicesArgument.verify|verify} messages.
     * @param message ListEntitiesServicesArgument message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesServicesArgument, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesServicesArgument message, length delimited. Does not implicitly {@link ListEntitiesServicesArgument.verify|verify} messages.
     * @param message ListEntitiesServicesArgument message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesServicesArgument, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesServicesArgument message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesServicesArgument
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesServicesArgument;

    /**
     * Decodes a ListEntitiesServicesArgument message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesServicesArgument
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesServicesArgument;

    /**
     * Verifies a ListEntitiesServicesArgument message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesServicesArgument message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesServicesArgument
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesServicesArgument;

    /**
     * Creates a plain object from a ListEntitiesServicesArgument message. Also converts values to other types if specified.
     * @param message ListEntitiesServicesArgument
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesServicesArgument, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesServicesArgument to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesServicesArgument
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesServicesResponse. */
export class ListEntitiesServicesResponse implements IListEntitiesServicesResponse {

    /**
     * Constructs a new ListEntitiesServicesResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesServicesResponse);

    /** ListEntitiesServicesResponse name. */
    public name: string;

    /** ListEntitiesServicesResponse key. */
    public key: number;

    /** ListEntitiesServicesResponse args. */
    public args: IListEntitiesServicesArgument[];

    /**
     * Creates a new ListEntitiesServicesResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesServicesResponse instance
     */
    public static create(properties?: IListEntitiesServicesResponse): ListEntitiesServicesResponse;

    /**
     * Encodes the specified ListEntitiesServicesResponse message. Does not implicitly {@link ListEntitiesServicesResponse.verify|verify} messages.
     * @param message ListEntitiesServicesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesServicesResponse message, length delimited. Does not implicitly {@link ListEntitiesServicesResponse.verify|verify} messages.
     * @param message ListEntitiesServicesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesServicesResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesServicesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesServicesResponse;

    /**
     * Decodes a ListEntitiesServicesResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesServicesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesServicesResponse;

    /**
     * Verifies a ListEntitiesServicesResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesServicesResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesServicesResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesServicesResponse;

    /**
     * Creates a plain object from a ListEntitiesServicesResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesServicesResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesServicesResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesServicesResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an ExecuteServiceArgument. */
export class ExecuteServiceArgument implements IExecuteServiceArgument {

    /**
     * Constructs a new ExecuteServiceArgument.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExecuteServiceArgument);

    /** ExecuteServiceArgument bool_. */
    public bool_: boolean;

    /** ExecuteServiceArgument legacy_int. */
    public legacy_int: number;

    /** ExecuteServiceArgument float_. */
    public float_: number;

    /** ExecuteServiceArgument string_. */
    public string_: string;

    /** ExecuteServiceArgument int_. */
    public int_: number;

    /** ExecuteServiceArgument bool_array. */
    public bool_array: boolean[];

    /** ExecuteServiceArgument int_array. */
    public int_array: number[];

    /** ExecuteServiceArgument float_array. */
    public float_array: number[];

    /** ExecuteServiceArgument string_array. */
    public string_array: string[];

    /**
     * Creates a new ExecuteServiceArgument instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExecuteServiceArgument instance
     */
    public static create(properties?: IExecuteServiceArgument): ExecuteServiceArgument;

    /**
     * Encodes the specified ExecuteServiceArgument message. Does not implicitly {@link ExecuteServiceArgument.verify|verify} messages.
     * @param message ExecuteServiceArgument message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExecuteServiceArgument, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ExecuteServiceArgument message, length delimited. Does not implicitly {@link ExecuteServiceArgument.verify|verify} messages.
     * @param message ExecuteServiceArgument message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IExecuteServiceArgument, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExecuteServiceArgument message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExecuteServiceArgument
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExecuteServiceArgument;

    /**
     * Decodes an ExecuteServiceArgument message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ExecuteServiceArgument
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExecuteServiceArgument;

    /**
     * Verifies an ExecuteServiceArgument message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ExecuteServiceArgument message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ExecuteServiceArgument
     */
    public static fromObject(object: { [k: string]: any }): ExecuteServiceArgument;

    /**
     * Creates a plain object from an ExecuteServiceArgument message. Also converts values to other types if specified.
     * @param message ExecuteServiceArgument
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ExecuteServiceArgument, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ExecuteServiceArgument to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ExecuteServiceArgument
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an ExecuteServiceRequest. */
export class ExecuteServiceRequest implements IExecuteServiceRequest {

    /**
     * Constructs a new ExecuteServiceRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IExecuteServiceRequest);

    /** ExecuteServiceRequest key. */
    public key: number;

    /** ExecuteServiceRequest args. */
    public args: IExecuteServiceArgument[];

    /**
     * Creates a new ExecuteServiceRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ExecuteServiceRequest instance
     */
    public static create(properties?: IExecuteServiceRequest): ExecuteServiceRequest;

    /**
     * Encodes the specified ExecuteServiceRequest message. Does not implicitly {@link ExecuteServiceRequest.verify|verify} messages.
     * @param message ExecuteServiceRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IExecuteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ExecuteServiceRequest message, length delimited. Does not implicitly {@link ExecuteServiceRequest.verify|verify} messages.
     * @param message ExecuteServiceRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IExecuteServiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ExecuteServiceRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ExecuteServiceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ExecuteServiceRequest;

    /**
     * Decodes an ExecuteServiceRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ExecuteServiceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ExecuteServiceRequest;

    /**
     * Verifies an ExecuteServiceRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ExecuteServiceRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ExecuteServiceRequest
     */
    public static fromObject(object: { [k: string]: any }): ExecuteServiceRequest;

    /**
     * Creates a plain object from an ExecuteServiceRequest message. Also converts values to other types if specified.
     * @param message ExecuteServiceRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ExecuteServiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ExecuteServiceRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ExecuteServiceRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesCameraResponse. */
export class ListEntitiesCameraResponse implements IListEntitiesCameraResponse {

    /**
     * Constructs a new ListEntitiesCameraResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesCameraResponse);

    /** ListEntitiesCameraResponse object_id. */
    public object_id: string;

    /** ListEntitiesCameraResponse key. */
    public key: number;

    /** ListEntitiesCameraResponse name. */
    public name: string;

    /** ListEntitiesCameraResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesCameraResponse icon. */
    public icon: string;

    /** ListEntitiesCameraResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesCameraResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesCameraResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesCameraResponse instance
     */
    public static create(properties?: IListEntitiesCameraResponse): ListEntitiesCameraResponse;

    /**
     * Encodes the specified ListEntitiesCameraResponse message. Does not implicitly {@link ListEntitiesCameraResponse.verify|verify} messages.
     * @param message ListEntitiesCameraResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesCameraResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesCameraResponse message, length delimited. Does not implicitly {@link ListEntitiesCameraResponse.verify|verify} messages.
     * @param message ListEntitiesCameraResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesCameraResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesCameraResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesCameraResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesCameraResponse;

    /**
     * Decodes a ListEntitiesCameraResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesCameraResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesCameraResponse;

    /**
     * Verifies a ListEntitiesCameraResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesCameraResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesCameraResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesCameraResponse;

    /**
     * Creates a plain object from a ListEntitiesCameraResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesCameraResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesCameraResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesCameraResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesCameraResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CameraImageResponse. */
export class CameraImageResponse implements ICameraImageResponse {

    /**
     * Constructs a new CameraImageResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICameraImageResponse);

    /** CameraImageResponse key. */
    public key: number;

    /** CameraImageResponse data. */
    public data: Uint8Array;

    /** CameraImageResponse done. */
    public done: boolean;

    /** CameraImageResponse device_id. */
    public device_id: number;

    /**
     * Creates a new CameraImageResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CameraImageResponse instance
     */
    public static create(properties?: ICameraImageResponse): CameraImageResponse;

    /**
     * Encodes the specified CameraImageResponse message. Does not implicitly {@link CameraImageResponse.verify|verify} messages.
     * @param message CameraImageResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICameraImageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CameraImageResponse message, length delimited. Does not implicitly {@link CameraImageResponse.verify|verify} messages.
     * @param message CameraImageResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICameraImageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CameraImageResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CameraImageResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CameraImageResponse;

    /**
     * Decodes a CameraImageResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CameraImageResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CameraImageResponse;

    /**
     * Verifies a CameraImageResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CameraImageResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CameraImageResponse
     */
    public static fromObject(object: { [k: string]: any }): CameraImageResponse;

    /**
     * Creates a plain object from a CameraImageResponse message. Also converts values to other types if specified.
     * @param message CameraImageResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CameraImageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CameraImageResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CameraImageResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CameraImageRequest. */
export class CameraImageRequest implements ICameraImageRequest {

    /**
     * Constructs a new CameraImageRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICameraImageRequest);

    /** CameraImageRequest single. */
    public single: boolean;

    /** CameraImageRequest stream. */
    public stream: boolean;

    /**
     * Creates a new CameraImageRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CameraImageRequest instance
     */
    public static create(properties?: ICameraImageRequest): CameraImageRequest;

    /**
     * Encodes the specified CameraImageRequest message. Does not implicitly {@link CameraImageRequest.verify|verify} messages.
     * @param message CameraImageRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICameraImageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CameraImageRequest message, length delimited. Does not implicitly {@link CameraImageRequest.verify|verify} messages.
     * @param message CameraImageRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICameraImageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CameraImageRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CameraImageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CameraImageRequest;

    /**
     * Decodes a CameraImageRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CameraImageRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CameraImageRequest;

    /**
     * Verifies a CameraImageRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CameraImageRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CameraImageRequest
     */
    public static fromObject(object: { [k: string]: any }): CameraImageRequest;

    /**
     * Creates a plain object from a CameraImageRequest message. Also converts values to other types if specified.
     * @param message CameraImageRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CameraImageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CameraImageRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CameraImageRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ClimateMode enum. */
export enum ClimateMode {
    CLIMATE_MODE_OFF = 0,
    CLIMATE_MODE_HEAT_COOL = 1,
    CLIMATE_MODE_COOL = 2,
    CLIMATE_MODE_HEAT = 3,
    CLIMATE_MODE_FAN_ONLY = 4,
    CLIMATE_MODE_DRY = 5,
    CLIMATE_MODE_AUTO = 6
}

/** ClimateFanMode enum. */
export enum ClimateFanMode {
    CLIMATE_FAN_ON = 0,
    CLIMATE_FAN_OFF = 1,
    CLIMATE_FAN_AUTO = 2,
    CLIMATE_FAN_LOW = 3,
    CLIMATE_FAN_MEDIUM = 4,
    CLIMATE_FAN_HIGH = 5,
    CLIMATE_FAN_MIDDLE = 6,
    CLIMATE_FAN_FOCUS = 7,
    CLIMATE_FAN_DIFFUSE = 8,
    CLIMATE_FAN_QUIET = 9
}

/** ClimateSwingMode enum. */
export enum ClimateSwingMode {
    CLIMATE_SWING_OFF = 0,
    CLIMATE_SWING_BOTH = 1,
    CLIMATE_SWING_VERTICAL = 2,
    CLIMATE_SWING_HORIZONTAL = 3
}

/** ClimateAction enum. */
export enum ClimateAction {
    CLIMATE_ACTION_OFF = 0,
    CLIMATE_ACTION_COOLING = 2,
    CLIMATE_ACTION_HEATING = 3,
    CLIMATE_ACTION_IDLE = 4,
    CLIMATE_ACTION_DRYING = 5,
    CLIMATE_ACTION_FAN = 6
}

/** ClimatePreset enum. */
export enum ClimatePreset {
    CLIMATE_PRESET_NONE = 0,
    CLIMATE_PRESET_HOME = 1,
    CLIMATE_PRESET_AWAY = 2,
    CLIMATE_PRESET_BOOST = 3,
    CLIMATE_PRESET_COMFORT = 4,
    CLIMATE_PRESET_ECO = 5,
    CLIMATE_PRESET_SLEEP = 6,
    CLIMATE_PRESET_ACTIVITY = 7
}

/** Represents a ListEntitiesClimateResponse. */
export class ListEntitiesClimateResponse implements IListEntitiesClimateResponse {

    /**
     * Constructs a new ListEntitiesClimateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesClimateResponse);

    /** ListEntitiesClimateResponse object_id. */
    public object_id: string;

    /** ListEntitiesClimateResponse key. */
    public key: number;

    /** ListEntitiesClimateResponse name. */
    public name: string;

    /** ListEntitiesClimateResponse supports_current_temperature. */
    public supports_current_temperature: boolean;

    /** ListEntitiesClimateResponse supports_two_point_target_temperature. */
    public supports_two_point_target_temperature: boolean;

    /** ListEntitiesClimateResponse supported_modes. */
    public supported_modes: ClimateMode[];

    /** ListEntitiesClimateResponse visual_min_temperature. */
    public visual_min_temperature: number;

    /** ListEntitiesClimateResponse visual_max_temperature. */
    public visual_max_temperature: number;

    /** ListEntitiesClimateResponse visual_target_temperature_step. */
    public visual_target_temperature_step: number;

    /** ListEntitiesClimateResponse legacy_supports_away. */
    public legacy_supports_away: boolean;

    /** ListEntitiesClimateResponse supports_action. */
    public supports_action: boolean;

    /** ListEntitiesClimateResponse supported_fan_modes. */
    public supported_fan_modes: ClimateFanMode[];

    /** ListEntitiesClimateResponse supported_swing_modes. */
    public supported_swing_modes: ClimateSwingMode[];

    /** ListEntitiesClimateResponse supported_custom_fan_modes. */
    public supported_custom_fan_modes: string[];

    /** ListEntitiesClimateResponse supported_presets. */
    public supported_presets: ClimatePreset[];

    /** ListEntitiesClimateResponse supported_custom_presets. */
    public supported_custom_presets: string[];

    /** ListEntitiesClimateResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesClimateResponse icon. */
    public icon: string;

    /** ListEntitiesClimateResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesClimateResponse visual_current_temperature_step. */
    public visual_current_temperature_step: number;

    /** ListEntitiesClimateResponse supports_current_humidity. */
    public supports_current_humidity: boolean;

    /** ListEntitiesClimateResponse supports_target_humidity. */
    public supports_target_humidity: boolean;

    /** ListEntitiesClimateResponse visual_min_humidity. */
    public visual_min_humidity: number;

    /** ListEntitiesClimateResponse visual_max_humidity. */
    public visual_max_humidity: number;

    /** ListEntitiesClimateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesClimateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesClimateResponse instance
     */
    public static create(properties?: IListEntitiesClimateResponse): ListEntitiesClimateResponse;

    /**
     * Encodes the specified ListEntitiesClimateResponse message. Does not implicitly {@link ListEntitiesClimateResponse.verify|verify} messages.
     * @param message ListEntitiesClimateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesClimateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesClimateResponse message, length delimited. Does not implicitly {@link ListEntitiesClimateResponse.verify|verify} messages.
     * @param message ListEntitiesClimateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesClimateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesClimateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesClimateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesClimateResponse;

    /**
     * Decodes a ListEntitiesClimateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesClimateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesClimateResponse;

    /**
     * Verifies a ListEntitiesClimateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesClimateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesClimateResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesClimateResponse;

    /**
     * Creates a plain object from a ListEntitiesClimateResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesClimateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesClimateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesClimateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesClimateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ClimateStateResponse. */
export class ClimateStateResponse implements IClimateStateResponse {

    /**
     * Constructs a new ClimateStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClimateStateResponse);

    /** ClimateStateResponse key. */
    public key: number;

    /** ClimateStateResponse mode. */
    public mode: ClimateMode;

    /** ClimateStateResponse current_temperature. */
    public current_temperature: number;

    /** ClimateStateResponse target_temperature. */
    public target_temperature: number;

    /** ClimateStateResponse target_temperature_low. */
    public target_temperature_low: number;

    /** ClimateStateResponse target_temperature_high. */
    public target_temperature_high: number;

    /** ClimateStateResponse unused_legacy_away. */
    public unused_legacy_away: boolean;

    /** ClimateStateResponse action. */
    public action: ClimateAction;

    /** ClimateStateResponse fan_mode. */
    public fan_mode: ClimateFanMode;

    /** ClimateStateResponse swing_mode. */
    public swing_mode: ClimateSwingMode;

    /** ClimateStateResponse custom_fan_mode. */
    public custom_fan_mode: string;

    /** ClimateStateResponse preset. */
    public preset: ClimatePreset;

    /** ClimateStateResponse custom_preset. */
    public custom_preset: string;

    /** ClimateStateResponse current_humidity. */
    public current_humidity: number;

    /** ClimateStateResponse target_humidity. */
    public target_humidity: number;

    /** ClimateStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ClimateStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClimateStateResponse instance
     */
    public static create(properties?: IClimateStateResponse): ClimateStateResponse;

    /**
     * Encodes the specified ClimateStateResponse message. Does not implicitly {@link ClimateStateResponse.verify|verify} messages.
     * @param message ClimateStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClimateStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClimateStateResponse message, length delimited. Does not implicitly {@link ClimateStateResponse.verify|verify} messages.
     * @param message ClimateStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClimateStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClimateStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClimateStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClimateStateResponse;

    /**
     * Decodes a ClimateStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClimateStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClimateStateResponse;

    /**
     * Verifies a ClimateStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClimateStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClimateStateResponse
     */
    public static fromObject(object: { [k: string]: any }): ClimateStateResponse;

    /**
     * Creates a plain object from a ClimateStateResponse message. Also converts values to other types if specified.
     * @param message ClimateStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClimateStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClimateStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ClimateStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ClimateCommandRequest. */
export class ClimateCommandRequest implements IClimateCommandRequest {

    /**
     * Constructs a new ClimateCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClimateCommandRequest);

    /** ClimateCommandRequest key. */
    public key: number;

    /** ClimateCommandRequest has_mode. */
    public has_mode: boolean;

    /** ClimateCommandRequest mode. */
    public mode: ClimateMode;

    /** ClimateCommandRequest has_target_temperature. */
    public has_target_temperature: boolean;

    /** ClimateCommandRequest target_temperature. */
    public target_temperature: number;

    /** ClimateCommandRequest has_target_temperature_low. */
    public has_target_temperature_low: boolean;

    /** ClimateCommandRequest target_temperature_low. */
    public target_temperature_low: number;

    /** ClimateCommandRequest has_target_temperature_high. */
    public has_target_temperature_high: boolean;

    /** ClimateCommandRequest target_temperature_high. */
    public target_temperature_high: number;

    /** ClimateCommandRequest unused_has_legacy_away. */
    public unused_has_legacy_away: boolean;

    /** ClimateCommandRequest unused_legacy_away. */
    public unused_legacy_away: boolean;

    /** ClimateCommandRequest has_fan_mode. */
    public has_fan_mode: boolean;

    /** ClimateCommandRequest fan_mode. */
    public fan_mode: ClimateFanMode;

    /** ClimateCommandRequest has_swing_mode. */
    public has_swing_mode: boolean;

    /** ClimateCommandRequest swing_mode. */
    public swing_mode: ClimateSwingMode;

    /** ClimateCommandRequest has_custom_fan_mode. */
    public has_custom_fan_mode: boolean;

    /** ClimateCommandRequest custom_fan_mode. */
    public custom_fan_mode: string;

    /** ClimateCommandRequest has_preset. */
    public has_preset: boolean;

    /** ClimateCommandRequest preset. */
    public preset: ClimatePreset;

    /** ClimateCommandRequest has_custom_preset. */
    public has_custom_preset: boolean;

    /** ClimateCommandRequest custom_preset. */
    public custom_preset: string;

    /** ClimateCommandRequest has_target_humidity. */
    public has_target_humidity: boolean;

    /** ClimateCommandRequest target_humidity. */
    public target_humidity: number;

    /** ClimateCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new ClimateCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClimateCommandRequest instance
     */
    public static create(properties?: IClimateCommandRequest): ClimateCommandRequest;

    /**
     * Encodes the specified ClimateCommandRequest message. Does not implicitly {@link ClimateCommandRequest.verify|verify} messages.
     * @param message ClimateCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClimateCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ClimateCommandRequest message, length delimited. Does not implicitly {@link ClimateCommandRequest.verify|verify} messages.
     * @param message ClimateCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClimateCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ClimateCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClimateCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ClimateCommandRequest;

    /**
     * Decodes a ClimateCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClimateCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ClimateCommandRequest;

    /**
     * Verifies a ClimateCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ClimateCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ClimateCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): ClimateCommandRequest;

    /**
     * Creates a plain object from a ClimateCommandRequest message. Also converts values to other types if specified.
     * @param message ClimateCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ClimateCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ClimateCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ClimateCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** NumberMode enum. */
export enum NumberMode {
    NUMBER_MODE_AUTO = 0,
    NUMBER_MODE_BOX = 1,
    NUMBER_MODE_SLIDER = 2
}

/** Represents a ListEntitiesNumberResponse. */
export class ListEntitiesNumberResponse implements IListEntitiesNumberResponse {

    /**
     * Constructs a new ListEntitiesNumberResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesNumberResponse);

    /** ListEntitiesNumberResponse object_id. */
    public object_id: string;

    /** ListEntitiesNumberResponse key. */
    public key: number;

    /** ListEntitiesNumberResponse name. */
    public name: string;

    /** ListEntitiesNumberResponse icon. */
    public icon: string;

    /** ListEntitiesNumberResponse min_value. */
    public min_value: number;

    /** ListEntitiesNumberResponse max_value. */
    public max_value: number;

    /** ListEntitiesNumberResponse step. */
    public step: number;

    /** ListEntitiesNumberResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesNumberResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesNumberResponse unit_of_measurement. */
    public unit_of_measurement: string;

    /** ListEntitiesNumberResponse mode. */
    public mode: NumberMode;

    /** ListEntitiesNumberResponse device_class. */
    public device_class: string;

    /** ListEntitiesNumberResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesNumberResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesNumberResponse instance
     */
    public static create(properties?: IListEntitiesNumberResponse): ListEntitiesNumberResponse;

    /**
     * Encodes the specified ListEntitiesNumberResponse message. Does not implicitly {@link ListEntitiesNumberResponse.verify|verify} messages.
     * @param message ListEntitiesNumberResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesNumberResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesNumberResponse message, length delimited. Does not implicitly {@link ListEntitiesNumberResponse.verify|verify} messages.
     * @param message ListEntitiesNumberResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesNumberResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesNumberResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesNumberResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesNumberResponse;

    /**
     * Decodes a ListEntitiesNumberResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesNumberResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesNumberResponse;

    /**
     * Verifies a ListEntitiesNumberResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesNumberResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesNumberResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesNumberResponse;

    /**
     * Creates a plain object from a ListEntitiesNumberResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesNumberResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesNumberResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesNumberResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesNumberResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NumberStateResponse. */
export class NumberStateResponse implements INumberStateResponse {

    /**
     * Constructs a new NumberStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: INumberStateResponse);

    /** NumberStateResponse key. */
    public key: number;

    /** NumberStateResponse state. */
    public state: number;

    /** NumberStateResponse missing_state. */
    public missing_state: boolean;

    /** NumberStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new NumberStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NumberStateResponse instance
     */
    public static create(properties?: INumberStateResponse): NumberStateResponse;

    /**
     * Encodes the specified NumberStateResponse message. Does not implicitly {@link NumberStateResponse.verify|verify} messages.
     * @param message NumberStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INumberStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NumberStateResponse message, length delimited. Does not implicitly {@link NumberStateResponse.verify|verify} messages.
     * @param message NumberStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INumberStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NumberStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NumberStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NumberStateResponse;

    /**
     * Decodes a NumberStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NumberStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NumberStateResponse;

    /**
     * Verifies a NumberStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NumberStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NumberStateResponse
     */
    public static fromObject(object: { [k: string]: any }): NumberStateResponse;

    /**
     * Creates a plain object from a NumberStateResponse message. Also converts values to other types if specified.
     * @param message NumberStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NumberStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NumberStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NumberStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NumberCommandRequest. */
export class NumberCommandRequest implements INumberCommandRequest {

    /**
     * Constructs a new NumberCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: INumberCommandRequest);

    /** NumberCommandRequest key. */
    public key: number;

    /** NumberCommandRequest state. */
    public state: number;

    /** NumberCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new NumberCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NumberCommandRequest instance
     */
    public static create(properties?: INumberCommandRequest): NumberCommandRequest;

    /**
     * Encodes the specified NumberCommandRequest message. Does not implicitly {@link NumberCommandRequest.verify|verify} messages.
     * @param message NumberCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INumberCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NumberCommandRequest message, length delimited. Does not implicitly {@link NumberCommandRequest.verify|verify} messages.
     * @param message NumberCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INumberCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NumberCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NumberCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NumberCommandRequest;

    /**
     * Decodes a NumberCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NumberCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NumberCommandRequest;

    /**
     * Verifies a NumberCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NumberCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NumberCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): NumberCommandRequest;

    /**
     * Creates a plain object from a NumberCommandRequest message. Also converts values to other types if specified.
     * @param message NumberCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NumberCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NumberCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NumberCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesSelectResponse. */
export class ListEntitiesSelectResponse implements IListEntitiesSelectResponse {

    /**
     * Constructs a new ListEntitiesSelectResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesSelectResponse);

    /** ListEntitiesSelectResponse object_id. */
    public object_id: string;

    /** ListEntitiesSelectResponse key. */
    public key: number;

    /** ListEntitiesSelectResponse name. */
    public name: string;

    /** ListEntitiesSelectResponse icon. */
    public icon: string;

    /** ListEntitiesSelectResponse options. */
    public options: string[];

    /** ListEntitiesSelectResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesSelectResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesSelectResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesSelectResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesSelectResponse instance
     */
    public static create(properties?: IListEntitiesSelectResponse): ListEntitiesSelectResponse;

    /**
     * Encodes the specified ListEntitiesSelectResponse message. Does not implicitly {@link ListEntitiesSelectResponse.verify|verify} messages.
     * @param message ListEntitiesSelectResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesSelectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesSelectResponse message, length delimited. Does not implicitly {@link ListEntitiesSelectResponse.verify|verify} messages.
     * @param message ListEntitiesSelectResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesSelectResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesSelectResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesSelectResponse;

    /**
     * Decodes a ListEntitiesSelectResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesSelectResponse;

    /**
     * Verifies a ListEntitiesSelectResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesSelectResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesSelectResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesSelectResponse;

    /**
     * Creates a plain object from a ListEntitiesSelectResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesSelectResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesSelectResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesSelectResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesSelectResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SelectStateResponse. */
export class SelectStateResponse implements ISelectStateResponse {

    /**
     * Constructs a new SelectStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISelectStateResponse);

    /** SelectStateResponse key. */
    public key: number;

    /** SelectStateResponse state. */
    public state: string;

    /** SelectStateResponse missing_state. */
    public missing_state: boolean;

    /** SelectStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new SelectStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SelectStateResponse instance
     */
    public static create(properties?: ISelectStateResponse): SelectStateResponse;

    /**
     * Encodes the specified SelectStateResponse message. Does not implicitly {@link SelectStateResponse.verify|verify} messages.
     * @param message SelectStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISelectStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SelectStateResponse message, length delimited. Does not implicitly {@link SelectStateResponse.verify|verify} messages.
     * @param message SelectStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISelectStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SelectStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SelectStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SelectStateResponse;

    /**
     * Decodes a SelectStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SelectStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SelectStateResponse;

    /**
     * Verifies a SelectStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SelectStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SelectStateResponse
     */
    public static fromObject(object: { [k: string]: any }): SelectStateResponse;

    /**
     * Creates a plain object from a SelectStateResponse message. Also converts values to other types if specified.
     * @param message SelectStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SelectStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SelectStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SelectStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SelectCommandRequest. */
export class SelectCommandRequest implements ISelectCommandRequest {

    /**
     * Constructs a new SelectCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISelectCommandRequest);

    /** SelectCommandRequest key. */
    public key: number;

    /** SelectCommandRequest state. */
    public state: string;

    /** SelectCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new SelectCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SelectCommandRequest instance
     */
    public static create(properties?: ISelectCommandRequest): SelectCommandRequest;

    /**
     * Encodes the specified SelectCommandRequest message. Does not implicitly {@link SelectCommandRequest.verify|verify} messages.
     * @param message SelectCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISelectCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SelectCommandRequest message, length delimited. Does not implicitly {@link SelectCommandRequest.verify|verify} messages.
     * @param message SelectCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISelectCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SelectCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SelectCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SelectCommandRequest;

    /**
     * Decodes a SelectCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SelectCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SelectCommandRequest;

    /**
     * Verifies a SelectCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SelectCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SelectCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): SelectCommandRequest;

    /**
     * Creates a plain object from a SelectCommandRequest message. Also converts values to other types if specified.
     * @param message SelectCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SelectCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SelectCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SelectCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesSirenResponse. */
export class ListEntitiesSirenResponse implements IListEntitiesSirenResponse {

    /**
     * Constructs a new ListEntitiesSirenResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesSirenResponse);

    /** ListEntitiesSirenResponse object_id. */
    public object_id: string;

    /** ListEntitiesSirenResponse key. */
    public key: number;

    /** ListEntitiesSirenResponse name. */
    public name: string;

    /** ListEntitiesSirenResponse icon. */
    public icon: string;

    /** ListEntitiesSirenResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesSirenResponse tones. */
    public tones: string[];

    /** ListEntitiesSirenResponse supports_duration. */
    public supports_duration: boolean;

    /** ListEntitiesSirenResponse supports_volume. */
    public supports_volume: boolean;

    /** ListEntitiesSirenResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesSirenResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesSirenResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesSirenResponse instance
     */
    public static create(properties?: IListEntitiesSirenResponse): ListEntitiesSirenResponse;

    /**
     * Encodes the specified ListEntitiesSirenResponse message. Does not implicitly {@link ListEntitiesSirenResponse.verify|verify} messages.
     * @param message ListEntitiesSirenResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesSirenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesSirenResponse message, length delimited. Does not implicitly {@link ListEntitiesSirenResponse.verify|verify} messages.
     * @param message ListEntitiesSirenResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesSirenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesSirenResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesSirenResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesSirenResponse;

    /**
     * Decodes a ListEntitiesSirenResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesSirenResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesSirenResponse;

    /**
     * Verifies a ListEntitiesSirenResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesSirenResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesSirenResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesSirenResponse;

    /**
     * Creates a plain object from a ListEntitiesSirenResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesSirenResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesSirenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesSirenResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesSirenResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SirenStateResponse. */
export class SirenStateResponse implements ISirenStateResponse {

    /**
     * Constructs a new SirenStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISirenStateResponse);

    /** SirenStateResponse key. */
    public key: number;

    /** SirenStateResponse state. */
    public state: boolean;

    /** SirenStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new SirenStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SirenStateResponse instance
     */
    public static create(properties?: ISirenStateResponse): SirenStateResponse;

    /**
     * Encodes the specified SirenStateResponse message. Does not implicitly {@link SirenStateResponse.verify|verify} messages.
     * @param message SirenStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISirenStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SirenStateResponse message, length delimited. Does not implicitly {@link SirenStateResponse.verify|verify} messages.
     * @param message SirenStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISirenStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SirenStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SirenStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SirenStateResponse;

    /**
     * Decodes a SirenStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SirenStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SirenStateResponse;

    /**
     * Verifies a SirenStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SirenStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SirenStateResponse
     */
    public static fromObject(object: { [k: string]: any }): SirenStateResponse;

    /**
     * Creates a plain object from a SirenStateResponse message. Also converts values to other types if specified.
     * @param message SirenStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SirenStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SirenStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SirenStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SirenCommandRequest. */
export class SirenCommandRequest implements ISirenCommandRequest {

    /**
     * Constructs a new SirenCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISirenCommandRequest);

    /** SirenCommandRequest key. */
    public key: number;

    /** SirenCommandRequest has_state. */
    public has_state: boolean;

    /** SirenCommandRequest state. */
    public state: boolean;

    /** SirenCommandRequest has_tone. */
    public has_tone: boolean;

    /** SirenCommandRequest tone. */
    public tone: string;

    /** SirenCommandRequest has_duration. */
    public has_duration: boolean;

    /** SirenCommandRequest duration. */
    public duration: number;

    /** SirenCommandRequest has_volume. */
    public has_volume: boolean;

    /** SirenCommandRequest volume. */
    public volume: number;

    /** SirenCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new SirenCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SirenCommandRequest instance
     */
    public static create(properties?: ISirenCommandRequest): SirenCommandRequest;

    /**
     * Encodes the specified SirenCommandRequest message. Does not implicitly {@link SirenCommandRequest.verify|verify} messages.
     * @param message SirenCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISirenCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SirenCommandRequest message, length delimited. Does not implicitly {@link SirenCommandRequest.verify|verify} messages.
     * @param message SirenCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISirenCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SirenCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SirenCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SirenCommandRequest;

    /**
     * Decodes a SirenCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SirenCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SirenCommandRequest;

    /**
     * Verifies a SirenCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SirenCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SirenCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): SirenCommandRequest;

    /**
     * Creates a plain object from a SirenCommandRequest message. Also converts values to other types if specified.
     * @param message SirenCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SirenCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SirenCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SirenCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** LockState enum. */
export enum LockState {
    LOCK_STATE_NONE = 0,
    LOCK_STATE_LOCKED = 1,
    LOCK_STATE_UNLOCKED = 2,
    LOCK_STATE_JAMMED = 3,
    LOCK_STATE_LOCKING = 4,
    LOCK_STATE_UNLOCKING = 5
}

/** LockCommand enum. */
export enum LockCommand {
    LOCK_UNLOCK = 0,
    LOCK_LOCK = 1,
    LOCK_OPEN = 2
}

/** Represents a ListEntitiesLockResponse. */
export class ListEntitiesLockResponse implements IListEntitiesLockResponse {

    /**
     * Constructs a new ListEntitiesLockResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesLockResponse);

    /** ListEntitiesLockResponse object_id. */
    public object_id: string;

    /** ListEntitiesLockResponse key. */
    public key: number;

    /** ListEntitiesLockResponse name. */
    public name: string;

    /** ListEntitiesLockResponse icon. */
    public icon: string;

    /** ListEntitiesLockResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesLockResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesLockResponse assumed_state. */
    public assumed_state: boolean;

    /** ListEntitiesLockResponse supports_open. */
    public supports_open: boolean;

    /** ListEntitiesLockResponse requires_code. */
    public requires_code: boolean;

    /** ListEntitiesLockResponse code_format. */
    public code_format: string;

    /** ListEntitiesLockResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesLockResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesLockResponse instance
     */
    public static create(properties?: IListEntitiesLockResponse): ListEntitiesLockResponse;

    /**
     * Encodes the specified ListEntitiesLockResponse message. Does not implicitly {@link ListEntitiesLockResponse.verify|verify} messages.
     * @param message ListEntitiesLockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesLockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesLockResponse message, length delimited. Does not implicitly {@link ListEntitiesLockResponse.verify|verify} messages.
     * @param message ListEntitiesLockResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesLockResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesLockResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesLockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesLockResponse;

    /**
     * Decodes a ListEntitiesLockResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesLockResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesLockResponse;

    /**
     * Verifies a ListEntitiesLockResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesLockResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesLockResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesLockResponse;

    /**
     * Creates a plain object from a ListEntitiesLockResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesLockResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesLockResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesLockResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesLockResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a LockStateResponse. */
export class LockStateResponse implements ILockStateResponse {

    /**
     * Constructs a new LockStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILockStateResponse);

    /** LockStateResponse key. */
    public key: number;

    /** LockStateResponse state. */
    public state: LockState;

    /** LockStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new LockStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LockStateResponse instance
     */
    public static create(properties?: ILockStateResponse): LockStateResponse;

    /**
     * Encodes the specified LockStateResponse message. Does not implicitly {@link LockStateResponse.verify|verify} messages.
     * @param message LockStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILockStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LockStateResponse message, length delimited. Does not implicitly {@link LockStateResponse.verify|verify} messages.
     * @param message LockStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILockStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LockStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LockStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LockStateResponse;

    /**
     * Decodes a LockStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LockStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LockStateResponse;

    /**
     * Verifies a LockStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LockStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LockStateResponse
     */
    public static fromObject(object: { [k: string]: any }): LockStateResponse;

    /**
     * Creates a plain object from a LockStateResponse message. Also converts values to other types if specified.
     * @param message LockStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LockStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LockStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LockStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a LockCommandRequest. */
export class LockCommandRequest implements ILockCommandRequest {

    /**
     * Constructs a new LockCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILockCommandRequest);

    /** LockCommandRequest key. */
    public key: number;

    /** LockCommandRequest command. */
    public command: LockCommand;

    /** LockCommandRequest has_code. */
    public has_code: boolean;

    /** LockCommandRequest code. */
    public code: string;

    /** LockCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new LockCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LockCommandRequest instance
     */
    public static create(properties?: ILockCommandRequest): LockCommandRequest;

    /**
     * Encodes the specified LockCommandRequest message. Does not implicitly {@link LockCommandRequest.verify|verify} messages.
     * @param message LockCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILockCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LockCommandRequest message, length delimited. Does not implicitly {@link LockCommandRequest.verify|verify} messages.
     * @param message LockCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILockCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LockCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LockCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LockCommandRequest;

    /**
     * Decodes a LockCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LockCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LockCommandRequest;

    /**
     * Verifies a LockCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LockCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LockCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): LockCommandRequest;

    /**
     * Creates a plain object from a LockCommandRequest message. Also converts values to other types if specified.
     * @param message LockCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LockCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LockCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LockCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesButtonResponse. */
export class ListEntitiesButtonResponse implements IListEntitiesButtonResponse {

    /**
     * Constructs a new ListEntitiesButtonResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesButtonResponse);

    /** ListEntitiesButtonResponse object_id. */
    public object_id: string;

    /** ListEntitiesButtonResponse key. */
    public key: number;

    /** ListEntitiesButtonResponse name. */
    public name: string;

    /** ListEntitiesButtonResponse icon. */
    public icon: string;

    /** ListEntitiesButtonResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesButtonResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesButtonResponse device_class. */
    public device_class: string;

    /** ListEntitiesButtonResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesButtonResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesButtonResponse instance
     */
    public static create(properties?: IListEntitiesButtonResponse): ListEntitiesButtonResponse;

    /**
     * Encodes the specified ListEntitiesButtonResponse message. Does not implicitly {@link ListEntitiesButtonResponse.verify|verify} messages.
     * @param message ListEntitiesButtonResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesButtonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesButtonResponse message, length delimited. Does not implicitly {@link ListEntitiesButtonResponse.verify|verify} messages.
     * @param message ListEntitiesButtonResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesButtonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesButtonResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesButtonResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesButtonResponse;

    /**
     * Decodes a ListEntitiesButtonResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesButtonResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesButtonResponse;

    /**
     * Verifies a ListEntitiesButtonResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesButtonResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesButtonResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesButtonResponse;

    /**
     * Creates a plain object from a ListEntitiesButtonResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesButtonResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesButtonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesButtonResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesButtonResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ButtonCommandRequest. */
export class ButtonCommandRequest implements IButtonCommandRequest {

    /**
     * Constructs a new ButtonCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IButtonCommandRequest);

    /** ButtonCommandRequest key. */
    public key: number;

    /** ButtonCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new ButtonCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ButtonCommandRequest instance
     */
    public static create(properties?: IButtonCommandRequest): ButtonCommandRequest;

    /**
     * Encodes the specified ButtonCommandRequest message. Does not implicitly {@link ButtonCommandRequest.verify|verify} messages.
     * @param message ButtonCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IButtonCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ButtonCommandRequest message, length delimited. Does not implicitly {@link ButtonCommandRequest.verify|verify} messages.
     * @param message ButtonCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IButtonCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ButtonCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ButtonCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ButtonCommandRequest;

    /**
     * Decodes a ButtonCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ButtonCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ButtonCommandRequest;

    /**
     * Verifies a ButtonCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ButtonCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ButtonCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): ButtonCommandRequest;

    /**
     * Creates a plain object from a ButtonCommandRequest message. Also converts values to other types if specified.
     * @param message ButtonCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ButtonCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ButtonCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ButtonCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** MediaPlayerState enum. */
export enum MediaPlayerState {
    MEDIA_PLAYER_STATE_NONE = 0,
    MEDIA_PLAYER_STATE_IDLE = 1,
    MEDIA_PLAYER_STATE_PLAYING = 2,
    MEDIA_PLAYER_STATE_PAUSED = 3,
    MEDIA_PLAYER_STATE_ANNOUNCING = 4,
    MEDIA_PLAYER_STATE_OFF = 5,
    MEDIA_PLAYER_STATE_ON = 6
}

/** MediaPlayerCommand enum. */
export enum MediaPlayerCommand {
    MEDIA_PLAYER_COMMAND_PLAY = 0,
    MEDIA_PLAYER_COMMAND_PAUSE = 1,
    MEDIA_PLAYER_COMMAND_STOP = 2,
    MEDIA_PLAYER_COMMAND_MUTE = 3,
    MEDIA_PLAYER_COMMAND_UNMUTE = 4,
    MEDIA_PLAYER_COMMAND_TOGGLE = 5,
    MEDIA_PLAYER_COMMAND_VOLUME_UP = 6,
    MEDIA_PLAYER_COMMAND_VOLUME_DOWN = 7,
    MEDIA_PLAYER_COMMAND_ENQUEUE = 8,
    MEDIA_PLAYER_COMMAND_REPEAT_ONE = 9,
    MEDIA_PLAYER_COMMAND_REPEAT_OFF = 10,
    MEDIA_PLAYER_COMMAND_CLEAR_PLAYLIST = 11,
    MEDIA_PLAYER_COMMAND_TURN_ON = 12,
    MEDIA_PLAYER_COMMAND_TURN_OFF = 13
}

/** MediaPlayerFormatPurpose enum. */
export enum MediaPlayerFormatPurpose {
    MEDIA_PLAYER_FORMAT_PURPOSE_DEFAULT = 0,
    MEDIA_PLAYER_FORMAT_PURPOSE_ANNOUNCEMENT = 1
}

/** Represents a MediaPlayerSupportedFormat. */
export class MediaPlayerSupportedFormat implements IMediaPlayerSupportedFormat {

    /**
     * Constructs a new MediaPlayerSupportedFormat.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMediaPlayerSupportedFormat);

    /** MediaPlayerSupportedFormat format. */
    public format: string;

    /** MediaPlayerSupportedFormat sample_rate. */
    public sample_rate: number;

    /** MediaPlayerSupportedFormat num_channels. */
    public num_channels: number;

    /** MediaPlayerSupportedFormat purpose. */
    public purpose: MediaPlayerFormatPurpose;

    /** MediaPlayerSupportedFormat sample_bytes. */
    public sample_bytes: number;

    /**
     * Creates a new MediaPlayerSupportedFormat instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MediaPlayerSupportedFormat instance
     */
    public static create(properties?: IMediaPlayerSupportedFormat): MediaPlayerSupportedFormat;

    /**
     * Encodes the specified MediaPlayerSupportedFormat message. Does not implicitly {@link MediaPlayerSupportedFormat.verify|verify} messages.
     * @param message MediaPlayerSupportedFormat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMediaPlayerSupportedFormat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MediaPlayerSupportedFormat message, length delimited. Does not implicitly {@link MediaPlayerSupportedFormat.verify|verify} messages.
     * @param message MediaPlayerSupportedFormat message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMediaPlayerSupportedFormat, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MediaPlayerSupportedFormat message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MediaPlayerSupportedFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MediaPlayerSupportedFormat;

    /**
     * Decodes a MediaPlayerSupportedFormat message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MediaPlayerSupportedFormat
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MediaPlayerSupportedFormat;

    /**
     * Verifies a MediaPlayerSupportedFormat message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MediaPlayerSupportedFormat message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MediaPlayerSupportedFormat
     */
    public static fromObject(object: { [k: string]: any }): MediaPlayerSupportedFormat;

    /**
     * Creates a plain object from a MediaPlayerSupportedFormat message. Also converts values to other types if specified.
     * @param message MediaPlayerSupportedFormat
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MediaPlayerSupportedFormat, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MediaPlayerSupportedFormat to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MediaPlayerSupportedFormat
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesMediaPlayerResponse. */
export class ListEntitiesMediaPlayerResponse implements IListEntitiesMediaPlayerResponse {

    /**
     * Constructs a new ListEntitiesMediaPlayerResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesMediaPlayerResponse);

    /** ListEntitiesMediaPlayerResponse object_id. */
    public object_id: string;

    /** ListEntitiesMediaPlayerResponse key. */
    public key: number;

    /** ListEntitiesMediaPlayerResponse name. */
    public name: string;

    /** ListEntitiesMediaPlayerResponse icon. */
    public icon: string;

    /** ListEntitiesMediaPlayerResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesMediaPlayerResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesMediaPlayerResponse supports_pause. */
    public supports_pause: boolean;

    /** ListEntitiesMediaPlayerResponse supported_formats. */
    public supported_formats: IMediaPlayerSupportedFormat[];

    /** ListEntitiesMediaPlayerResponse device_id. */
    public device_id: number;

    /** ListEntitiesMediaPlayerResponse feature_flags. */
    public feature_flags: number;

    /**
     * Creates a new ListEntitiesMediaPlayerResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesMediaPlayerResponse instance
     */
    public static create(properties?: IListEntitiesMediaPlayerResponse): ListEntitiesMediaPlayerResponse;

    /**
     * Encodes the specified ListEntitiesMediaPlayerResponse message. Does not implicitly {@link ListEntitiesMediaPlayerResponse.verify|verify} messages.
     * @param message ListEntitiesMediaPlayerResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesMediaPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesMediaPlayerResponse message, length delimited. Does not implicitly {@link ListEntitiesMediaPlayerResponse.verify|verify} messages.
     * @param message ListEntitiesMediaPlayerResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesMediaPlayerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesMediaPlayerResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesMediaPlayerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesMediaPlayerResponse;

    /**
     * Decodes a ListEntitiesMediaPlayerResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesMediaPlayerResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesMediaPlayerResponse;

    /**
     * Verifies a ListEntitiesMediaPlayerResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesMediaPlayerResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesMediaPlayerResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesMediaPlayerResponse;

    /**
     * Creates a plain object from a ListEntitiesMediaPlayerResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesMediaPlayerResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesMediaPlayerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesMediaPlayerResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesMediaPlayerResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a MediaPlayerStateResponse. */
export class MediaPlayerStateResponse implements IMediaPlayerStateResponse {

    /**
     * Constructs a new MediaPlayerStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMediaPlayerStateResponse);

    /** MediaPlayerStateResponse key. */
    public key: number;

    /** MediaPlayerStateResponse state. */
    public state: MediaPlayerState;

    /** MediaPlayerStateResponse volume. */
    public volume: number;

    /** MediaPlayerStateResponse muted. */
    public muted: boolean;

    /** MediaPlayerStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new MediaPlayerStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MediaPlayerStateResponse instance
     */
    public static create(properties?: IMediaPlayerStateResponse): MediaPlayerStateResponse;

    /**
     * Encodes the specified MediaPlayerStateResponse message. Does not implicitly {@link MediaPlayerStateResponse.verify|verify} messages.
     * @param message MediaPlayerStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMediaPlayerStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MediaPlayerStateResponse message, length delimited. Does not implicitly {@link MediaPlayerStateResponse.verify|verify} messages.
     * @param message MediaPlayerStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMediaPlayerStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MediaPlayerStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MediaPlayerStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MediaPlayerStateResponse;

    /**
     * Decodes a MediaPlayerStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MediaPlayerStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MediaPlayerStateResponse;

    /**
     * Verifies a MediaPlayerStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MediaPlayerStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MediaPlayerStateResponse
     */
    public static fromObject(object: { [k: string]: any }): MediaPlayerStateResponse;

    /**
     * Creates a plain object from a MediaPlayerStateResponse message. Also converts values to other types if specified.
     * @param message MediaPlayerStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MediaPlayerStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MediaPlayerStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MediaPlayerStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a MediaPlayerCommandRequest. */
export class MediaPlayerCommandRequest implements IMediaPlayerCommandRequest {

    /**
     * Constructs a new MediaPlayerCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMediaPlayerCommandRequest);

    /** MediaPlayerCommandRequest key. */
    public key: number;

    /** MediaPlayerCommandRequest has_command. */
    public has_command: boolean;

    /** MediaPlayerCommandRequest command. */
    public command: MediaPlayerCommand;

    /** MediaPlayerCommandRequest has_volume. */
    public has_volume: boolean;

    /** MediaPlayerCommandRequest volume. */
    public volume: number;

    /** MediaPlayerCommandRequest has_media_url. */
    public has_media_url: boolean;

    /** MediaPlayerCommandRequest media_url. */
    public media_url: string;

    /** MediaPlayerCommandRequest has_announcement. */
    public has_announcement: boolean;

    /** MediaPlayerCommandRequest announcement. */
    public announcement: boolean;

    /** MediaPlayerCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new MediaPlayerCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MediaPlayerCommandRequest instance
     */
    public static create(properties?: IMediaPlayerCommandRequest): MediaPlayerCommandRequest;

    /**
     * Encodes the specified MediaPlayerCommandRequest message. Does not implicitly {@link MediaPlayerCommandRequest.verify|verify} messages.
     * @param message MediaPlayerCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMediaPlayerCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MediaPlayerCommandRequest message, length delimited. Does not implicitly {@link MediaPlayerCommandRequest.verify|verify} messages.
     * @param message MediaPlayerCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMediaPlayerCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MediaPlayerCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MediaPlayerCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MediaPlayerCommandRequest;

    /**
     * Decodes a MediaPlayerCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MediaPlayerCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MediaPlayerCommandRequest;

    /**
     * Verifies a MediaPlayerCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MediaPlayerCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MediaPlayerCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): MediaPlayerCommandRequest;

    /**
     * Creates a plain object from a MediaPlayerCommandRequest message. Also converts values to other types if specified.
     * @param message MediaPlayerCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MediaPlayerCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MediaPlayerCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MediaPlayerCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SubscribeBluetoothLEAdvertisementsRequest. */
export class SubscribeBluetoothLEAdvertisementsRequest implements ISubscribeBluetoothLEAdvertisementsRequest {

    /**
     * Constructs a new SubscribeBluetoothLEAdvertisementsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubscribeBluetoothLEAdvertisementsRequest);

    /** SubscribeBluetoothLEAdvertisementsRequest flags. */
    public flags: number;

    /**
     * Creates a new SubscribeBluetoothLEAdvertisementsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubscribeBluetoothLEAdvertisementsRequest instance
     */
    public static create(properties?: ISubscribeBluetoothLEAdvertisementsRequest): SubscribeBluetoothLEAdvertisementsRequest;

    /**
     * Encodes the specified SubscribeBluetoothLEAdvertisementsRequest message. Does not implicitly {@link SubscribeBluetoothLEAdvertisementsRequest.verify|verify} messages.
     * @param message SubscribeBluetoothLEAdvertisementsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubscribeBluetoothLEAdvertisementsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubscribeBluetoothLEAdvertisementsRequest message, length delimited. Does not implicitly {@link SubscribeBluetoothLEAdvertisementsRequest.verify|verify} messages.
     * @param message SubscribeBluetoothLEAdvertisementsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubscribeBluetoothLEAdvertisementsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubscribeBluetoothLEAdvertisementsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubscribeBluetoothLEAdvertisementsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubscribeBluetoothLEAdvertisementsRequest;

    /**
     * Decodes a SubscribeBluetoothLEAdvertisementsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubscribeBluetoothLEAdvertisementsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubscribeBluetoothLEAdvertisementsRequest;

    /**
     * Verifies a SubscribeBluetoothLEAdvertisementsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubscribeBluetoothLEAdvertisementsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubscribeBluetoothLEAdvertisementsRequest
     */
    public static fromObject(object: { [k: string]: any }): SubscribeBluetoothLEAdvertisementsRequest;

    /**
     * Creates a plain object from a SubscribeBluetoothLEAdvertisementsRequest message. Also converts values to other types if specified.
     * @param message SubscribeBluetoothLEAdvertisementsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubscribeBluetoothLEAdvertisementsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubscribeBluetoothLEAdvertisementsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SubscribeBluetoothLEAdvertisementsRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothServiceData. */
export class BluetoothServiceData implements IBluetoothServiceData {

    /**
     * Constructs a new BluetoothServiceData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothServiceData);

    /** BluetoothServiceData uuid. */
    public uuid: string;

    /** BluetoothServiceData legacy_data. */
    public legacy_data: number[];

    /** BluetoothServiceData data. */
    public data: Uint8Array;

    /**
     * Creates a new BluetoothServiceData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothServiceData instance
     */
    public static create(properties?: IBluetoothServiceData): BluetoothServiceData;

    /**
     * Encodes the specified BluetoothServiceData message. Does not implicitly {@link BluetoothServiceData.verify|verify} messages.
     * @param message BluetoothServiceData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothServiceData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothServiceData message, length delimited. Does not implicitly {@link BluetoothServiceData.verify|verify} messages.
     * @param message BluetoothServiceData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothServiceData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothServiceData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothServiceData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothServiceData;

    /**
     * Decodes a BluetoothServiceData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothServiceData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothServiceData;

    /**
     * Verifies a BluetoothServiceData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothServiceData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothServiceData
     */
    public static fromObject(object: { [k: string]: any }): BluetoothServiceData;

    /**
     * Creates a plain object from a BluetoothServiceData message. Also converts values to other types if specified.
     * @param message BluetoothServiceData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothServiceData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothServiceData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothServiceData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothLEAdvertisementResponse. */
export class BluetoothLEAdvertisementResponse implements IBluetoothLEAdvertisementResponse {

    /**
     * Constructs a new BluetoothLEAdvertisementResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothLEAdvertisementResponse);

    /** BluetoothLEAdvertisementResponse address. */
    public address: (number|Long);

    /** BluetoothLEAdvertisementResponse name. */
    public name: Uint8Array;

    /** BluetoothLEAdvertisementResponse rssi. */
    public rssi: number;

    /** BluetoothLEAdvertisementResponse service_uuids. */
    public service_uuids: string[];

    /** BluetoothLEAdvertisementResponse service_data. */
    public service_data: IBluetoothServiceData[];

    /** BluetoothLEAdvertisementResponse manufacturer_data. */
    public manufacturer_data: IBluetoothServiceData[];

    /** BluetoothLEAdvertisementResponse address_type. */
    public address_type: number;

    /**
     * Creates a new BluetoothLEAdvertisementResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothLEAdvertisementResponse instance
     */
    public static create(properties?: IBluetoothLEAdvertisementResponse): BluetoothLEAdvertisementResponse;

    /**
     * Encodes the specified BluetoothLEAdvertisementResponse message. Does not implicitly {@link BluetoothLEAdvertisementResponse.verify|verify} messages.
     * @param message BluetoothLEAdvertisementResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothLEAdvertisementResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothLEAdvertisementResponse message, length delimited. Does not implicitly {@link BluetoothLEAdvertisementResponse.verify|verify} messages.
     * @param message BluetoothLEAdvertisementResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothLEAdvertisementResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothLEAdvertisementResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothLEAdvertisementResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothLEAdvertisementResponse;

    /**
     * Decodes a BluetoothLEAdvertisementResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothLEAdvertisementResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothLEAdvertisementResponse;

    /**
     * Verifies a BluetoothLEAdvertisementResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothLEAdvertisementResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothLEAdvertisementResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothLEAdvertisementResponse;

    /**
     * Creates a plain object from a BluetoothLEAdvertisementResponse message. Also converts values to other types if specified.
     * @param message BluetoothLEAdvertisementResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothLEAdvertisementResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothLEAdvertisementResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothLEAdvertisementResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothLERawAdvertisement. */
export class BluetoothLERawAdvertisement implements IBluetoothLERawAdvertisement {

    /**
     * Constructs a new BluetoothLERawAdvertisement.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothLERawAdvertisement);

    /** BluetoothLERawAdvertisement address. */
    public address: (number|Long);

    /** BluetoothLERawAdvertisement rssi. */
    public rssi: number;

    /** BluetoothLERawAdvertisement address_type. */
    public address_type: number;

    /** BluetoothLERawAdvertisement data. */
    public data: Uint8Array;

    /**
     * Creates a new BluetoothLERawAdvertisement instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothLERawAdvertisement instance
     */
    public static create(properties?: IBluetoothLERawAdvertisement): BluetoothLERawAdvertisement;

    /**
     * Encodes the specified BluetoothLERawAdvertisement message. Does not implicitly {@link BluetoothLERawAdvertisement.verify|verify} messages.
     * @param message BluetoothLERawAdvertisement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothLERawAdvertisement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothLERawAdvertisement message, length delimited. Does not implicitly {@link BluetoothLERawAdvertisement.verify|verify} messages.
     * @param message BluetoothLERawAdvertisement message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothLERawAdvertisement, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothLERawAdvertisement message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothLERawAdvertisement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothLERawAdvertisement;

    /**
     * Decodes a BluetoothLERawAdvertisement message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothLERawAdvertisement
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothLERawAdvertisement;

    /**
     * Verifies a BluetoothLERawAdvertisement message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothLERawAdvertisement message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothLERawAdvertisement
     */
    public static fromObject(object: { [k: string]: any }): BluetoothLERawAdvertisement;

    /**
     * Creates a plain object from a BluetoothLERawAdvertisement message. Also converts values to other types if specified.
     * @param message BluetoothLERawAdvertisement
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothLERawAdvertisement, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothLERawAdvertisement to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothLERawAdvertisement
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothLERawAdvertisementsResponse. */
export class BluetoothLERawAdvertisementsResponse implements IBluetoothLERawAdvertisementsResponse {

    /**
     * Constructs a new BluetoothLERawAdvertisementsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothLERawAdvertisementsResponse);

    /** BluetoothLERawAdvertisementsResponse advertisements. */
    public advertisements: IBluetoothLERawAdvertisement[];

    /**
     * Creates a new BluetoothLERawAdvertisementsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothLERawAdvertisementsResponse instance
     */
    public static create(properties?: IBluetoothLERawAdvertisementsResponse): BluetoothLERawAdvertisementsResponse;

    /**
     * Encodes the specified BluetoothLERawAdvertisementsResponse message. Does not implicitly {@link BluetoothLERawAdvertisementsResponse.verify|verify} messages.
     * @param message BluetoothLERawAdvertisementsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothLERawAdvertisementsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothLERawAdvertisementsResponse message, length delimited. Does not implicitly {@link BluetoothLERawAdvertisementsResponse.verify|verify} messages.
     * @param message BluetoothLERawAdvertisementsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothLERawAdvertisementsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothLERawAdvertisementsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothLERawAdvertisementsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothLERawAdvertisementsResponse;

    /**
     * Decodes a BluetoothLERawAdvertisementsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothLERawAdvertisementsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothLERawAdvertisementsResponse;

    /**
     * Verifies a BluetoothLERawAdvertisementsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothLERawAdvertisementsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothLERawAdvertisementsResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothLERawAdvertisementsResponse;

    /**
     * Creates a plain object from a BluetoothLERawAdvertisementsResponse message. Also converts values to other types if specified.
     * @param message BluetoothLERawAdvertisementsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothLERawAdvertisementsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothLERawAdvertisementsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothLERawAdvertisementsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** BluetoothDeviceRequestType enum. */
export enum BluetoothDeviceRequestType {
    BLUETOOTH_DEVICE_REQUEST_TYPE_CONNECT = 0,
    BLUETOOTH_DEVICE_REQUEST_TYPE_DISCONNECT = 1,
    BLUETOOTH_DEVICE_REQUEST_TYPE_PAIR = 2,
    BLUETOOTH_DEVICE_REQUEST_TYPE_UNPAIR = 3,
    BLUETOOTH_DEVICE_REQUEST_TYPE_CONNECT_V3_WITH_CACHE = 4,
    BLUETOOTH_DEVICE_REQUEST_TYPE_CONNECT_V3_WITHOUT_CACHE = 5,
    BLUETOOTH_DEVICE_REQUEST_TYPE_CLEAR_CACHE = 6
}

/** Represents a BluetoothDeviceRequest. */
export class BluetoothDeviceRequest implements IBluetoothDeviceRequest {

    /**
     * Constructs a new BluetoothDeviceRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothDeviceRequest);

    /** BluetoothDeviceRequest address. */
    public address: (number|Long);

    /** BluetoothDeviceRequest request_type. */
    public request_type: BluetoothDeviceRequestType;

    /** BluetoothDeviceRequest has_address_type. */
    public has_address_type: boolean;

    /** BluetoothDeviceRequest address_type. */
    public address_type: number;

    /**
     * Creates a new BluetoothDeviceRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothDeviceRequest instance
     */
    public static create(properties?: IBluetoothDeviceRequest): BluetoothDeviceRequest;

    /**
     * Encodes the specified BluetoothDeviceRequest message. Does not implicitly {@link BluetoothDeviceRequest.verify|verify} messages.
     * @param message BluetoothDeviceRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothDeviceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothDeviceRequest message, length delimited. Does not implicitly {@link BluetoothDeviceRequest.verify|verify} messages.
     * @param message BluetoothDeviceRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothDeviceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothDeviceRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothDeviceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothDeviceRequest;

    /**
     * Decodes a BluetoothDeviceRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothDeviceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothDeviceRequest;

    /**
     * Verifies a BluetoothDeviceRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothDeviceRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothDeviceRequest
     */
    public static fromObject(object: { [k: string]: any }): BluetoothDeviceRequest;

    /**
     * Creates a plain object from a BluetoothDeviceRequest message. Also converts values to other types if specified.
     * @param message BluetoothDeviceRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothDeviceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothDeviceRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothDeviceRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothDeviceConnectionResponse. */
export class BluetoothDeviceConnectionResponse implements IBluetoothDeviceConnectionResponse {

    /**
     * Constructs a new BluetoothDeviceConnectionResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothDeviceConnectionResponse);

    /** BluetoothDeviceConnectionResponse address. */
    public address: (number|Long);

    /** BluetoothDeviceConnectionResponse connected. */
    public connected: boolean;

    /** BluetoothDeviceConnectionResponse mtu. */
    public mtu: number;

    /** BluetoothDeviceConnectionResponse error. */
    public error: number;

    /**
     * Creates a new BluetoothDeviceConnectionResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothDeviceConnectionResponse instance
     */
    public static create(properties?: IBluetoothDeviceConnectionResponse): BluetoothDeviceConnectionResponse;

    /**
     * Encodes the specified BluetoothDeviceConnectionResponse message. Does not implicitly {@link BluetoothDeviceConnectionResponse.verify|verify} messages.
     * @param message BluetoothDeviceConnectionResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothDeviceConnectionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothDeviceConnectionResponse message, length delimited. Does not implicitly {@link BluetoothDeviceConnectionResponse.verify|verify} messages.
     * @param message BluetoothDeviceConnectionResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothDeviceConnectionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothDeviceConnectionResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothDeviceConnectionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothDeviceConnectionResponse;

    /**
     * Decodes a BluetoothDeviceConnectionResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothDeviceConnectionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothDeviceConnectionResponse;

    /**
     * Verifies a BluetoothDeviceConnectionResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothDeviceConnectionResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothDeviceConnectionResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothDeviceConnectionResponse;

    /**
     * Creates a plain object from a BluetoothDeviceConnectionResponse message. Also converts values to other types if specified.
     * @param message BluetoothDeviceConnectionResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothDeviceConnectionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothDeviceConnectionResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothDeviceConnectionResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTGetServicesRequest. */
export class BluetoothGATTGetServicesRequest implements IBluetoothGATTGetServicesRequest {

    /**
     * Constructs a new BluetoothGATTGetServicesRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTGetServicesRequest);

    /** BluetoothGATTGetServicesRequest address. */
    public address: (number|Long);

    /**
     * Creates a new BluetoothGATTGetServicesRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTGetServicesRequest instance
     */
    public static create(properties?: IBluetoothGATTGetServicesRequest): BluetoothGATTGetServicesRequest;

    /**
     * Encodes the specified BluetoothGATTGetServicesRequest message. Does not implicitly {@link BluetoothGATTGetServicesRequest.verify|verify} messages.
     * @param message BluetoothGATTGetServicesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTGetServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTGetServicesRequest message, length delimited. Does not implicitly {@link BluetoothGATTGetServicesRequest.verify|verify} messages.
     * @param message BluetoothGATTGetServicesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTGetServicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTGetServicesRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTGetServicesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTGetServicesRequest;

    /**
     * Decodes a BluetoothGATTGetServicesRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTGetServicesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTGetServicesRequest;

    /**
     * Verifies a BluetoothGATTGetServicesRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTGetServicesRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTGetServicesRequest
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTGetServicesRequest;

    /**
     * Creates a plain object from a BluetoothGATTGetServicesRequest message. Also converts values to other types if specified.
     * @param message BluetoothGATTGetServicesRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTGetServicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTGetServicesRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTGetServicesRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTDescriptor. */
export class BluetoothGATTDescriptor implements IBluetoothGATTDescriptor {

    /**
     * Constructs a new BluetoothGATTDescriptor.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTDescriptor);

    /** BluetoothGATTDescriptor uuid. */
    public uuid: (number|Long)[];

    /** BluetoothGATTDescriptor handle. */
    public handle: number;

    /** BluetoothGATTDescriptor short_uuid. */
    public short_uuid: number;

    /**
     * Creates a new BluetoothGATTDescriptor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTDescriptor instance
     */
    public static create(properties?: IBluetoothGATTDescriptor): BluetoothGATTDescriptor;

    /**
     * Encodes the specified BluetoothGATTDescriptor message. Does not implicitly {@link BluetoothGATTDescriptor.verify|verify} messages.
     * @param message BluetoothGATTDescriptor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTDescriptor message, length delimited. Does not implicitly {@link BluetoothGATTDescriptor.verify|verify} messages.
     * @param message BluetoothGATTDescriptor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTDescriptor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTDescriptor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTDescriptor;

    /**
     * Decodes a BluetoothGATTDescriptor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTDescriptor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTDescriptor;

    /**
     * Verifies a BluetoothGATTDescriptor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTDescriptor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTDescriptor
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTDescriptor;

    /**
     * Creates a plain object from a BluetoothGATTDescriptor message. Also converts values to other types if specified.
     * @param message BluetoothGATTDescriptor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTDescriptor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTDescriptor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTCharacteristic. */
export class BluetoothGATTCharacteristic implements IBluetoothGATTCharacteristic {

    /**
     * Constructs a new BluetoothGATTCharacteristic.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTCharacteristic);

    /** BluetoothGATTCharacteristic uuid. */
    public uuid: (number|Long)[];

    /** BluetoothGATTCharacteristic handle. */
    public handle: number;

    /** BluetoothGATTCharacteristic properties. */
    public properties: number;

    /** BluetoothGATTCharacteristic descriptors. */
    public descriptors: IBluetoothGATTDescriptor[];

    /** BluetoothGATTCharacteristic short_uuid. */
    public short_uuid: number;

    /**
     * Creates a new BluetoothGATTCharacteristic instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTCharacteristic instance
     */
    public static create(properties?: IBluetoothGATTCharacteristic): BluetoothGATTCharacteristic;

    /**
     * Encodes the specified BluetoothGATTCharacteristic message. Does not implicitly {@link BluetoothGATTCharacteristic.verify|verify} messages.
     * @param message BluetoothGATTCharacteristic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTCharacteristic, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTCharacteristic message, length delimited. Does not implicitly {@link BluetoothGATTCharacteristic.verify|verify} messages.
     * @param message BluetoothGATTCharacteristic message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTCharacteristic, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTCharacteristic message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTCharacteristic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTCharacteristic;

    /**
     * Decodes a BluetoothGATTCharacteristic message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTCharacteristic
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTCharacteristic;

    /**
     * Verifies a BluetoothGATTCharacteristic message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTCharacteristic message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTCharacteristic
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTCharacteristic;

    /**
     * Creates a plain object from a BluetoothGATTCharacteristic message. Also converts values to other types if specified.
     * @param message BluetoothGATTCharacteristic
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTCharacteristic, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTCharacteristic to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTCharacteristic
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTService. */
export class BluetoothGATTService implements IBluetoothGATTService {

    /**
     * Constructs a new BluetoothGATTService.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTService);

    /** BluetoothGATTService uuid. */
    public uuid: (number|Long)[];

    /** BluetoothGATTService handle. */
    public handle: number;

    /** BluetoothGATTService characteristics. */
    public characteristics: IBluetoothGATTCharacteristic[];

    /** BluetoothGATTService short_uuid. */
    public short_uuid: number;

    /**
     * Creates a new BluetoothGATTService instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTService instance
     */
    public static create(properties?: IBluetoothGATTService): BluetoothGATTService;

    /**
     * Encodes the specified BluetoothGATTService message. Does not implicitly {@link BluetoothGATTService.verify|verify} messages.
     * @param message BluetoothGATTService message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTService, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTService message, length delimited. Does not implicitly {@link BluetoothGATTService.verify|verify} messages.
     * @param message BluetoothGATTService message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTService, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTService message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTService
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTService;

    /**
     * Decodes a BluetoothGATTService message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTService
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTService;

    /**
     * Verifies a BluetoothGATTService message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTService message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTService
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTService;

    /**
     * Creates a plain object from a BluetoothGATTService message. Also converts values to other types if specified.
     * @param message BluetoothGATTService
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTService, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTService to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTService
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTGetServicesResponse. */
export class BluetoothGATTGetServicesResponse implements IBluetoothGATTGetServicesResponse {

    /**
     * Constructs a new BluetoothGATTGetServicesResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTGetServicesResponse);

    /** BluetoothGATTGetServicesResponse address. */
    public address: (number|Long);

    /** BluetoothGATTGetServicesResponse services. */
    public services: IBluetoothGATTService[];

    /**
     * Creates a new BluetoothGATTGetServicesResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTGetServicesResponse instance
     */
    public static create(properties?: IBluetoothGATTGetServicesResponse): BluetoothGATTGetServicesResponse;

    /**
     * Encodes the specified BluetoothGATTGetServicesResponse message. Does not implicitly {@link BluetoothGATTGetServicesResponse.verify|verify} messages.
     * @param message BluetoothGATTGetServicesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTGetServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTGetServicesResponse message, length delimited. Does not implicitly {@link BluetoothGATTGetServicesResponse.verify|verify} messages.
     * @param message BluetoothGATTGetServicesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTGetServicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTGetServicesResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTGetServicesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTGetServicesResponse;

    /**
     * Decodes a BluetoothGATTGetServicesResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTGetServicesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTGetServicesResponse;

    /**
     * Verifies a BluetoothGATTGetServicesResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTGetServicesResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTGetServicesResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTGetServicesResponse;

    /**
     * Creates a plain object from a BluetoothGATTGetServicesResponse message. Also converts values to other types if specified.
     * @param message BluetoothGATTGetServicesResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTGetServicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTGetServicesResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTGetServicesResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTGetServicesDoneResponse. */
export class BluetoothGATTGetServicesDoneResponse implements IBluetoothGATTGetServicesDoneResponse {

    /**
     * Constructs a new BluetoothGATTGetServicesDoneResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTGetServicesDoneResponse);

    /** BluetoothGATTGetServicesDoneResponse address. */
    public address: (number|Long);

    /**
     * Creates a new BluetoothGATTGetServicesDoneResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTGetServicesDoneResponse instance
     */
    public static create(properties?: IBluetoothGATTGetServicesDoneResponse): BluetoothGATTGetServicesDoneResponse;

    /**
     * Encodes the specified BluetoothGATTGetServicesDoneResponse message. Does not implicitly {@link BluetoothGATTGetServicesDoneResponse.verify|verify} messages.
     * @param message BluetoothGATTGetServicesDoneResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTGetServicesDoneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTGetServicesDoneResponse message, length delimited. Does not implicitly {@link BluetoothGATTGetServicesDoneResponse.verify|verify} messages.
     * @param message BluetoothGATTGetServicesDoneResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTGetServicesDoneResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTGetServicesDoneResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTGetServicesDoneResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTGetServicesDoneResponse;

    /**
     * Decodes a BluetoothGATTGetServicesDoneResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTGetServicesDoneResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTGetServicesDoneResponse;

    /**
     * Verifies a BluetoothGATTGetServicesDoneResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTGetServicesDoneResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTGetServicesDoneResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTGetServicesDoneResponse;

    /**
     * Creates a plain object from a BluetoothGATTGetServicesDoneResponse message. Also converts values to other types if specified.
     * @param message BluetoothGATTGetServicesDoneResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTGetServicesDoneResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTGetServicesDoneResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTGetServicesDoneResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTReadRequest. */
export class BluetoothGATTReadRequest implements IBluetoothGATTReadRequest {

    /**
     * Constructs a new BluetoothGATTReadRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTReadRequest);

    /** BluetoothGATTReadRequest address. */
    public address: (number|Long);

    /** BluetoothGATTReadRequest handle. */
    public handle: number;

    /**
     * Creates a new BluetoothGATTReadRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTReadRequest instance
     */
    public static create(properties?: IBluetoothGATTReadRequest): BluetoothGATTReadRequest;

    /**
     * Encodes the specified BluetoothGATTReadRequest message. Does not implicitly {@link BluetoothGATTReadRequest.verify|verify} messages.
     * @param message BluetoothGATTReadRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTReadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTReadRequest message, length delimited. Does not implicitly {@link BluetoothGATTReadRequest.verify|verify} messages.
     * @param message BluetoothGATTReadRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTReadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTReadRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTReadRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTReadRequest;

    /**
     * Decodes a BluetoothGATTReadRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTReadRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTReadRequest;

    /**
     * Verifies a BluetoothGATTReadRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTReadRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTReadRequest
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTReadRequest;

    /**
     * Creates a plain object from a BluetoothGATTReadRequest message. Also converts values to other types if specified.
     * @param message BluetoothGATTReadRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTReadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTReadRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTReadRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTReadResponse. */
export class BluetoothGATTReadResponse implements IBluetoothGATTReadResponse {

    /**
     * Constructs a new BluetoothGATTReadResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTReadResponse);

    /** BluetoothGATTReadResponse address. */
    public address: (number|Long);

    /** BluetoothGATTReadResponse handle. */
    public handle: number;

    /** BluetoothGATTReadResponse data. */
    public data: Uint8Array;

    /**
     * Creates a new BluetoothGATTReadResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTReadResponse instance
     */
    public static create(properties?: IBluetoothGATTReadResponse): BluetoothGATTReadResponse;

    /**
     * Encodes the specified BluetoothGATTReadResponse message. Does not implicitly {@link BluetoothGATTReadResponse.verify|verify} messages.
     * @param message BluetoothGATTReadResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTReadResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTReadResponse message, length delimited. Does not implicitly {@link BluetoothGATTReadResponse.verify|verify} messages.
     * @param message BluetoothGATTReadResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTReadResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTReadResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTReadResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTReadResponse;

    /**
     * Decodes a BluetoothGATTReadResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTReadResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTReadResponse;

    /**
     * Verifies a BluetoothGATTReadResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTReadResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTReadResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTReadResponse;

    /**
     * Creates a plain object from a BluetoothGATTReadResponse message. Also converts values to other types if specified.
     * @param message BluetoothGATTReadResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTReadResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTReadResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTReadResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTWriteRequest. */
export class BluetoothGATTWriteRequest implements IBluetoothGATTWriteRequest {

    /**
     * Constructs a new BluetoothGATTWriteRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTWriteRequest);

    /** BluetoothGATTWriteRequest address. */
    public address: (number|Long);

    /** BluetoothGATTWriteRequest handle. */
    public handle: number;

    /** BluetoothGATTWriteRequest response. */
    public response: boolean;

    /** BluetoothGATTWriteRequest data. */
    public data: Uint8Array;

    /**
     * Creates a new BluetoothGATTWriteRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTWriteRequest instance
     */
    public static create(properties?: IBluetoothGATTWriteRequest): BluetoothGATTWriteRequest;

    /**
     * Encodes the specified BluetoothGATTWriteRequest message. Does not implicitly {@link BluetoothGATTWriteRequest.verify|verify} messages.
     * @param message BluetoothGATTWriteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTWriteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTWriteRequest message, length delimited. Does not implicitly {@link BluetoothGATTWriteRequest.verify|verify} messages.
     * @param message BluetoothGATTWriteRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTWriteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTWriteRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTWriteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTWriteRequest;

    /**
     * Decodes a BluetoothGATTWriteRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTWriteRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTWriteRequest;

    /**
     * Verifies a BluetoothGATTWriteRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTWriteRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTWriteRequest
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTWriteRequest;

    /**
     * Creates a plain object from a BluetoothGATTWriteRequest message. Also converts values to other types if specified.
     * @param message BluetoothGATTWriteRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTWriteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTWriteRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTWriteRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTReadDescriptorRequest. */
export class BluetoothGATTReadDescriptorRequest implements IBluetoothGATTReadDescriptorRequest {

    /**
     * Constructs a new BluetoothGATTReadDescriptorRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTReadDescriptorRequest);

    /** BluetoothGATTReadDescriptorRequest address. */
    public address: (number|Long);

    /** BluetoothGATTReadDescriptorRequest handle. */
    public handle: number;

    /**
     * Creates a new BluetoothGATTReadDescriptorRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTReadDescriptorRequest instance
     */
    public static create(properties?: IBluetoothGATTReadDescriptorRequest): BluetoothGATTReadDescriptorRequest;

    /**
     * Encodes the specified BluetoothGATTReadDescriptorRequest message. Does not implicitly {@link BluetoothGATTReadDescriptorRequest.verify|verify} messages.
     * @param message BluetoothGATTReadDescriptorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTReadDescriptorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTReadDescriptorRequest message, length delimited. Does not implicitly {@link BluetoothGATTReadDescriptorRequest.verify|verify} messages.
     * @param message BluetoothGATTReadDescriptorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTReadDescriptorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTReadDescriptorRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTReadDescriptorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTReadDescriptorRequest;

    /**
     * Decodes a BluetoothGATTReadDescriptorRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTReadDescriptorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTReadDescriptorRequest;

    /**
     * Verifies a BluetoothGATTReadDescriptorRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTReadDescriptorRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTReadDescriptorRequest
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTReadDescriptorRequest;

    /**
     * Creates a plain object from a BluetoothGATTReadDescriptorRequest message. Also converts values to other types if specified.
     * @param message BluetoothGATTReadDescriptorRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTReadDescriptorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTReadDescriptorRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTReadDescriptorRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTWriteDescriptorRequest. */
export class BluetoothGATTWriteDescriptorRequest implements IBluetoothGATTWriteDescriptorRequest {

    /**
     * Constructs a new BluetoothGATTWriteDescriptorRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTWriteDescriptorRequest);

    /** BluetoothGATTWriteDescriptorRequest address. */
    public address: (number|Long);

    /** BluetoothGATTWriteDescriptorRequest handle. */
    public handle: number;

    /** BluetoothGATTWriteDescriptorRequest data. */
    public data: Uint8Array;

    /**
     * Creates a new BluetoothGATTWriteDescriptorRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTWriteDescriptorRequest instance
     */
    public static create(properties?: IBluetoothGATTWriteDescriptorRequest): BluetoothGATTWriteDescriptorRequest;

    /**
     * Encodes the specified BluetoothGATTWriteDescriptorRequest message. Does not implicitly {@link BluetoothGATTWriteDescriptorRequest.verify|verify} messages.
     * @param message BluetoothGATTWriteDescriptorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTWriteDescriptorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTWriteDescriptorRequest message, length delimited. Does not implicitly {@link BluetoothGATTWriteDescriptorRequest.verify|verify} messages.
     * @param message BluetoothGATTWriteDescriptorRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTWriteDescriptorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTWriteDescriptorRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTWriteDescriptorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTWriteDescriptorRequest;

    /**
     * Decodes a BluetoothGATTWriteDescriptorRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTWriteDescriptorRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTWriteDescriptorRequest;

    /**
     * Verifies a BluetoothGATTWriteDescriptorRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTWriteDescriptorRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTWriteDescriptorRequest
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTWriteDescriptorRequest;

    /**
     * Creates a plain object from a BluetoothGATTWriteDescriptorRequest message. Also converts values to other types if specified.
     * @param message BluetoothGATTWriteDescriptorRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTWriteDescriptorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTWriteDescriptorRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTWriteDescriptorRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTNotifyRequest. */
export class BluetoothGATTNotifyRequest implements IBluetoothGATTNotifyRequest {

    /**
     * Constructs a new BluetoothGATTNotifyRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTNotifyRequest);

    /** BluetoothGATTNotifyRequest address. */
    public address: (number|Long);

    /** BluetoothGATTNotifyRequest handle. */
    public handle: number;

    /** BluetoothGATTNotifyRequest enable. */
    public enable: boolean;

    /**
     * Creates a new BluetoothGATTNotifyRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTNotifyRequest instance
     */
    public static create(properties?: IBluetoothGATTNotifyRequest): BluetoothGATTNotifyRequest;

    /**
     * Encodes the specified BluetoothGATTNotifyRequest message. Does not implicitly {@link BluetoothGATTNotifyRequest.verify|verify} messages.
     * @param message BluetoothGATTNotifyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTNotifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTNotifyRequest message, length delimited. Does not implicitly {@link BluetoothGATTNotifyRequest.verify|verify} messages.
     * @param message BluetoothGATTNotifyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTNotifyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTNotifyRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTNotifyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTNotifyRequest;

    /**
     * Decodes a BluetoothGATTNotifyRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTNotifyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTNotifyRequest;

    /**
     * Verifies a BluetoothGATTNotifyRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTNotifyRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTNotifyRequest
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTNotifyRequest;

    /**
     * Creates a plain object from a BluetoothGATTNotifyRequest message. Also converts values to other types if specified.
     * @param message BluetoothGATTNotifyRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTNotifyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTNotifyRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTNotifyRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTNotifyDataResponse. */
export class BluetoothGATTNotifyDataResponse implements IBluetoothGATTNotifyDataResponse {

    /**
     * Constructs a new BluetoothGATTNotifyDataResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTNotifyDataResponse);

    /** BluetoothGATTNotifyDataResponse address. */
    public address: (number|Long);

    /** BluetoothGATTNotifyDataResponse handle. */
    public handle: number;

    /** BluetoothGATTNotifyDataResponse data. */
    public data: Uint8Array;

    /**
     * Creates a new BluetoothGATTNotifyDataResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTNotifyDataResponse instance
     */
    public static create(properties?: IBluetoothGATTNotifyDataResponse): BluetoothGATTNotifyDataResponse;

    /**
     * Encodes the specified BluetoothGATTNotifyDataResponse message. Does not implicitly {@link BluetoothGATTNotifyDataResponse.verify|verify} messages.
     * @param message BluetoothGATTNotifyDataResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTNotifyDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTNotifyDataResponse message, length delimited. Does not implicitly {@link BluetoothGATTNotifyDataResponse.verify|verify} messages.
     * @param message BluetoothGATTNotifyDataResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTNotifyDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTNotifyDataResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTNotifyDataResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTNotifyDataResponse;

    /**
     * Decodes a BluetoothGATTNotifyDataResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTNotifyDataResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTNotifyDataResponse;

    /**
     * Verifies a BluetoothGATTNotifyDataResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTNotifyDataResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTNotifyDataResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTNotifyDataResponse;

    /**
     * Creates a plain object from a BluetoothGATTNotifyDataResponse message. Also converts values to other types if specified.
     * @param message BluetoothGATTNotifyDataResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTNotifyDataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTNotifyDataResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTNotifyDataResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SubscribeBluetoothConnectionsFreeRequest. */
export class SubscribeBluetoothConnectionsFreeRequest implements ISubscribeBluetoothConnectionsFreeRequest {

    /**
     * Constructs a new SubscribeBluetoothConnectionsFreeRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubscribeBluetoothConnectionsFreeRequest);

    /**
     * Creates a new SubscribeBluetoothConnectionsFreeRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubscribeBluetoothConnectionsFreeRequest instance
     */
    public static create(properties?: ISubscribeBluetoothConnectionsFreeRequest): SubscribeBluetoothConnectionsFreeRequest;

    /**
     * Encodes the specified SubscribeBluetoothConnectionsFreeRequest message. Does not implicitly {@link SubscribeBluetoothConnectionsFreeRequest.verify|verify} messages.
     * @param message SubscribeBluetoothConnectionsFreeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubscribeBluetoothConnectionsFreeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubscribeBluetoothConnectionsFreeRequest message, length delimited. Does not implicitly {@link SubscribeBluetoothConnectionsFreeRequest.verify|verify} messages.
     * @param message SubscribeBluetoothConnectionsFreeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubscribeBluetoothConnectionsFreeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubscribeBluetoothConnectionsFreeRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubscribeBluetoothConnectionsFreeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubscribeBluetoothConnectionsFreeRequest;

    /**
     * Decodes a SubscribeBluetoothConnectionsFreeRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubscribeBluetoothConnectionsFreeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubscribeBluetoothConnectionsFreeRequest;

    /**
     * Verifies a SubscribeBluetoothConnectionsFreeRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubscribeBluetoothConnectionsFreeRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubscribeBluetoothConnectionsFreeRequest
     */
    public static fromObject(object: { [k: string]: any }): SubscribeBluetoothConnectionsFreeRequest;

    /**
     * Creates a plain object from a SubscribeBluetoothConnectionsFreeRequest message. Also converts values to other types if specified.
     * @param message SubscribeBluetoothConnectionsFreeRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubscribeBluetoothConnectionsFreeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubscribeBluetoothConnectionsFreeRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SubscribeBluetoothConnectionsFreeRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothConnectionsFreeResponse. */
export class BluetoothConnectionsFreeResponse implements IBluetoothConnectionsFreeResponse {

    /**
     * Constructs a new BluetoothConnectionsFreeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothConnectionsFreeResponse);

    /** BluetoothConnectionsFreeResponse free. */
    public free: number;

    /** BluetoothConnectionsFreeResponse limit. */
    public limit: number;

    /** BluetoothConnectionsFreeResponse allocated. */
    public allocated: (number|Long)[];

    /**
     * Creates a new BluetoothConnectionsFreeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothConnectionsFreeResponse instance
     */
    public static create(properties?: IBluetoothConnectionsFreeResponse): BluetoothConnectionsFreeResponse;

    /**
     * Encodes the specified BluetoothConnectionsFreeResponse message. Does not implicitly {@link BluetoothConnectionsFreeResponse.verify|verify} messages.
     * @param message BluetoothConnectionsFreeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothConnectionsFreeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothConnectionsFreeResponse message, length delimited. Does not implicitly {@link BluetoothConnectionsFreeResponse.verify|verify} messages.
     * @param message BluetoothConnectionsFreeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothConnectionsFreeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothConnectionsFreeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothConnectionsFreeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothConnectionsFreeResponse;

    /**
     * Decodes a BluetoothConnectionsFreeResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothConnectionsFreeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothConnectionsFreeResponse;

    /**
     * Verifies a BluetoothConnectionsFreeResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothConnectionsFreeResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothConnectionsFreeResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothConnectionsFreeResponse;

    /**
     * Creates a plain object from a BluetoothConnectionsFreeResponse message. Also converts values to other types if specified.
     * @param message BluetoothConnectionsFreeResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothConnectionsFreeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothConnectionsFreeResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothConnectionsFreeResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTErrorResponse. */
export class BluetoothGATTErrorResponse implements IBluetoothGATTErrorResponse {

    /**
     * Constructs a new BluetoothGATTErrorResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTErrorResponse);

    /** BluetoothGATTErrorResponse address. */
    public address: (number|Long);

    /** BluetoothGATTErrorResponse handle. */
    public handle: number;

    /** BluetoothGATTErrorResponse error. */
    public error: number;

    /**
     * Creates a new BluetoothGATTErrorResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTErrorResponse instance
     */
    public static create(properties?: IBluetoothGATTErrorResponse): BluetoothGATTErrorResponse;

    /**
     * Encodes the specified BluetoothGATTErrorResponse message. Does not implicitly {@link BluetoothGATTErrorResponse.verify|verify} messages.
     * @param message BluetoothGATTErrorResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTErrorResponse message, length delimited. Does not implicitly {@link BluetoothGATTErrorResponse.verify|verify} messages.
     * @param message BluetoothGATTErrorResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTErrorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTErrorResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTErrorResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTErrorResponse;

    /**
     * Decodes a BluetoothGATTErrorResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTErrorResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTErrorResponse;

    /**
     * Verifies a BluetoothGATTErrorResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTErrorResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTErrorResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTErrorResponse;

    /**
     * Creates a plain object from a BluetoothGATTErrorResponse message. Also converts values to other types if specified.
     * @param message BluetoothGATTErrorResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTErrorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTErrorResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTErrorResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTWriteResponse. */
export class BluetoothGATTWriteResponse implements IBluetoothGATTWriteResponse {

    /**
     * Constructs a new BluetoothGATTWriteResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTWriteResponse);

    /** BluetoothGATTWriteResponse address. */
    public address: (number|Long);

    /** BluetoothGATTWriteResponse handle. */
    public handle: number;

    /**
     * Creates a new BluetoothGATTWriteResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTWriteResponse instance
     */
    public static create(properties?: IBluetoothGATTWriteResponse): BluetoothGATTWriteResponse;

    /**
     * Encodes the specified BluetoothGATTWriteResponse message. Does not implicitly {@link BluetoothGATTWriteResponse.verify|verify} messages.
     * @param message BluetoothGATTWriteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTWriteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTWriteResponse message, length delimited. Does not implicitly {@link BluetoothGATTWriteResponse.verify|verify} messages.
     * @param message BluetoothGATTWriteResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTWriteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTWriteResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTWriteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTWriteResponse;

    /**
     * Decodes a BluetoothGATTWriteResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTWriteResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTWriteResponse;

    /**
     * Verifies a BluetoothGATTWriteResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTWriteResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTWriteResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTWriteResponse;

    /**
     * Creates a plain object from a BluetoothGATTWriteResponse message. Also converts values to other types if specified.
     * @param message BluetoothGATTWriteResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTWriteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTWriteResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTWriteResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothGATTNotifyResponse. */
export class BluetoothGATTNotifyResponse implements IBluetoothGATTNotifyResponse {

    /**
     * Constructs a new BluetoothGATTNotifyResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothGATTNotifyResponse);

    /** BluetoothGATTNotifyResponse address. */
    public address: (number|Long);

    /** BluetoothGATTNotifyResponse handle. */
    public handle: number;

    /**
     * Creates a new BluetoothGATTNotifyResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothGATTNotifyResponse instance
     */
    public static create(properties?: IBluetoothGATTNotifyResponse): BluetoothGATTNotifyResponse;

    /**
     * Encodes the specified BluetoothGATTNotifyResponse message. Does not implicitly {@link BluetoothGATTNotifyResponse.verify|verify} messages.
     * @param message BluetoothGATTNotifyResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothGATTNotifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothGATTNotifyResponse message, length delimited. Does not implicitly {@link BluetoothGATTNotifyResponse.verify|verify} messages.
     * @param message BluetoothGATTNotifyResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothGATTNotifyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothGATTNotifyResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothGATTNotifyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothGATTNotifyResponse;

    /**
     * Decodes a BluetoothGATTNotifyResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothGATTNotifyResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothGATTNotifyResponse;

    /**
     * Verifies a BluetoothGATTNotifyResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothGATTNotifyResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothGATTNotifyResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothGATTNotifyResponse;

    /**
     * Creates a plain object from a BluetoothGATTNotifyResponse message. Also converts values to other types if specified.
     * @param message BluetoothGATTNotifyResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothGATTNotifyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothGATTNotifyResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothGATTNotifyResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothDevicePairingResponse. */
export class BluetoothDevicePairingResponse implements IBluetoothDevicePairingResponse {

    /**
     * Constructs a new BluetoothDevicePairingResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothDevicePairingResponse);

    /** BluetoothDevicePairingResponse address. */
    public address: (number|Long);

    /** BluetoothDevicePairingResponse paired. */
    public paired: boolean;

    /** BluetoothDevicePairingResponse error. */
    public error: number;

    /**
     * Creates a new BluetoothDevicePairingResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothDevicePairingResponse instance
     */
    public static create(properties?: IBluetoothDevicePairingResponse): BluetoothDevicePairingResponse;

    /**
     * Encodes the specified BluetoothDevicePairingResponse message. Does not implicitly {@link BluetoothDevicePairingResponse.verify|verify} messages.
     * @param message BluetoothDevicePairingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothDevicePairingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothDevicePairingResponse message, length delimited. Does not implicitly {@link BluetoothDevicePairingResponse.verify|verify} messages.
     * @param message BluetoothDevicePairingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothDevicePairingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothDevicePairingResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothDevicePairingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothDevicePairingResponse;

    /**
     * Decodes a BluetoothDevicePairingResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothDevicePairingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothDevicePairingResponse;

    /**
     * Verifies a BluetoothDevicePairingResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothDevicePairingResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothDevicePairingResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothDevicePairingResponse;

    /**
     * Creates a plain object from a BluetoothDevicePairingResponse message. Also converts values to other types if specified.
     * @param message BluetoothDevicePairingResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothDevicePairingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothDevicePairingResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothDevicePairingResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothDeviceUnpairingResponse. */
export class BluetoothDeviceUnpairingResponse implements IBluetoothDeviceUnpairingResponse {

    /**
     * Constructs a new BluetoothDeviceUnpairingResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothDeviceUnpairingResponse);

    /** BluetoothDeviceUnpairingResponse address. */
    public address: (number|Long);

    /** BluetoothDeviceUnpairingResponse success. */
    public success: boolean;

    /** BluetoothDeviceUnpairingResponse error. */
    public error: number;

    /**
     * Creates a new BluetoothDeviceUnpairingResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothDeviceUnpairingResponse instance
     */
    public static create(properties?: IBluetoothDeviceUnpairingResponse): BluetoothDeviceUnpairingResponse;

    /**
     * Encodes the specified BluetoothDeviceUnpairingResponse message. Does not implicitly {@link BluetoothDeviceUnpairingResponse.verify|verify} messages.
     * @param message BluetoothDeviceUnpairingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothDeviceUnpairingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothDeviceUnpairingResponse message, length delimited. Does not implicitly {@link BluetoothDeviceUnpairingResponse.verify|verify} messages.
     * @param message BluetoothDeviceUnpairingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothDeviceUnpairingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothDeviceUnpairingResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothDeviceUnpairingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothDeviceUnpairingResponse;

    /**
     * Decodes a BluetoothDeviceUnpairingResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothDeviceUnpairingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothDeviceUnpairingResponse;

    /**
     * Verifies a BluetoothDeviceUnpairingResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothDeviceUnpairingResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothDeviceUnpairingResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothDeviceUnpairingResponse;

    /**
     * Creates a plain object from a BluetoothDeviceUnpairingResponse message. Also converts values to other types if specified.
     * @param message BluetoothDeviceUnpairingResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothDeviceUnpairingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothDeviceUnpairingResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothDeviceUnpairingResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an UnsubscribeBluetoothLEAdvertisementsRequest. */
export class UnsubscribeBluetoothLEAdvertisementsRequest implements IUnsubscribeBluetoothLEAdvertisementsRequest {

    /**
     * Constructs a new UnsubscribeBluetoothLEAdvertisementsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUnsubscribeBluetoothLEAdvertisementsRequest);

    /**
     * Creates a new UnsubscribeBluetoothLEAdvertisementsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UnsubscribeBluetoothLEAdvertisementsRequest instance
     */
    public static create(properties?: IUnsubscribeBluetoothLEAdvertisementsRequest): UnsubscribeBluetoothLEAdvertisementsRequest;

    /**
     * Encodes the specified UnsubscribeBluetoothLEAdvertisementsRequest message. Does not implicitly {@link UnsubscribeBluetoothLEAdvertisementsRequest.verify|verify} messages.
     * @param message UnsubscribeBluetoothLEAdvertisementsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUnsubscribeBluetoothLEAdvertisementsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UnsubscribeBluetoothLEAdvertisementsRequest message, length delimited. Does not implicitly {@link UnsubscribeBluetoothLEAdvertisementsRequest.verify|verify} messages.
     * @param message UnsubscribeBluetoothLEAdvertisementsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUnsubscribeBluetoothLEAdvertisementsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UnsubscribeBluetoothLEAdvertisementsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UnsubscribeBluetoothLEAdvertisementsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UnsubscribeBluetoothLEAdvertisementsRequest;

    /**
     * Decodes an UnsubscribeBluetoothLEAdvertisementsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UnsubscribeBluetoothLEAdvertisementsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UnsubscribeBluetoothLEAdvertisementsRequest;

    /**
     * Verifies an UnsubscribeBluetoothLEAdvertisementsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UnsubscribeBluetoothLEAdvertisementsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UnsubscribeBluetoothLEAdvertisementsRequest
     */
    public static fromObject(object: { [k: string]: any }): UnsubscribeBluetoothLEAdvertisementsRequest;

    /**
     * Creates a plain object from an UnsubscribeBluetoothLEAdvertisementsRequest message. Also converts values to other types if specified.
     * @param message UnsubscribeBluetoothLEAdvertisementsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UnsubscribeBluetoothLEAdvertisementsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UnsubscribeBluetoothLEAdvertisementsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UnsubscribeBluetoothLEAdvertisementsRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothDeviceClearCacheResponse. */
export class BluetoothDeviceClearCacheResponse implements IBluetoothDeviceClearCacheResponse {

    /**
     * Constructs a new BluetoothDeviceClearCacheResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothDeviceClearCacheResponse);

    /** BluetoothDeviceClearCacheResponse address. */
    public address: (number|Long);

    /** BluetoothDeviceClearCacheResponse success. */
    public success: boolean;

    /** BluetoothDeviceClearCacheResponse error. */
    public error: number;

    /**
     * Creates a new BluetoothDeviceClearCacheResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothDeviceClearCacheResponse instance
     */
    public static create(properties?: IBluetoothDeviceClearCacheResponse): BluetoothDeviceClearCacheResponse;

    /**
     * Encodes the specified BluetoothDeviceClearCacheResponse message. Does not implicitly {@link BluetoothDeviceClearCacheResponse.verify|verify} messages.
     * @param message BluetoothDeviceClearCacheResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothDeviceClearCacheResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothDeviceClearCacheResponse message, length delimited. Does not implicitly {@link BluetoothDeviceClearCacheResponse.verify|verify} messages.
     * @param message BluetoothDeviceClearCacheResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothDeviceClearCacheResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothDeviceClearCacheResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothDeviceClearCacheResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothDeviceClearCacheResponse;

    /**
     * Decodes a BluetoothDeviceClearCacheResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothDeviceClearCacheResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothDeviceClearCacheResponse;

    /**
     * Verifies a BluetoothDeviceClearCacheResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothDeviceClearCacheResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothDeviceClearCacheResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothDeviceClearCacheResponse;

    /**
     * Creates a plain object from a BluetoothDeviceClearCacheResponse message. Also converts values to other types if specified.
     * @param message BluetoothDeviceClearCacheResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothDeviceClearCacheResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothDeviceClearCacheResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothDeviceClearCacheResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** BluetoothScannerState enum. */
export enum BluetoothScannerState {
    BLUETOOTH_SCANNER_STATE_IDLE = 0,
    BLUETOOTH_SCANNER_STATE_STARTING = 1,
    BLUETOOTH_SCANNER_STATE_RUNNING = 2,
    BLUETOOTH_SCANNER_STATE_FAILED = 3,
    BLUETOOTH_SCANNER_STATE_STOPPING = 4,
    BLUETOOTH_SCANNER_STATE_STOPPED = 5
}

/** BluetoothScannerMode enum. */
export enum BluetoothScannerMode {
    BLUETOOTH_SCANNER_MODE_PASSIVE = 0,
    BLUETOOTH_SCANNER_MODE_ACTIVE = 1
}

/** Represents a BluetoothScannerStateResponse. */
export class BluetoothScannerStateResponse implements IBluetoothScannerStateResponse {

    /**
     * Constructs a new BluetoothScannerStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothScannerStateResponse);

    /** BluetoothScannerStateResponse state. */
    public state: BluetoothScannerState;

    /** BluetoothScannerStateResponse mode. */
    public mode: BluetoothScannerMode;

    /** BluetoothScannerStateResponse configured_mode. */
    public configured_mode: BluetoothScannerMode;

    /**
     * Creates a new BluetoothScannerStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothScannerStateResponse instance
     */
    public static create(properties?: IBluetoothScannerStateResponse): BluetoothScannerStateResponse;

    /**
     * Encodes the specified BluetoothScannerStateResponse message. Does not implicitly {@link BluetoothScannerStateResponse.verify|verify} messages.
     * @param message BluetoothScannerStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothScannerStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothScannerStateResponse message, length delimited. Does not implicitly {@link BluetoothScannerStateResponse.verify|verify} messages.
     * @param message BluetoothScannerStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothScannerStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothScannerStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothScannerStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothScannerStateResponse;

    /**
     * Decodes a BluetoothScannerStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothScannerStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothScannerStateResponse;

    /**
     * Verifies a BluetoothScannerStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothScannerStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothScannerStateResponse
     */
    public static fromObject(object: { [k: string]: any }): BluetoothScannerStateResponse;

    /**
     * Creates a plain object from a BluetoothScannerStateResponse message. Also converts values to other types if specified.
     * @param message BluetoothScannerStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothScannerStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothScannerStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothScannerStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BluetoothScannerSetModeRequest. */
export class BluetoothScannerSetModeRequest implements IBluetoothScannerSetModeRequest {

    /**
     * Constructs a new BluetoothScannerSetModeRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBluetoothScannerSetModeRequest);

    /** BluetoothScannerSetModeRequest mode. */
    public mode: BluetoothScannerMode;

    /**
     * Creates a new BluetoothScannerSetModeRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BluetoothScannerSetModeRequest instance
     */
    public static create(properties?: IBluetoothScannerSetModeRequest): BluetoothScannerSetModeRequest;

    /**
     * Encodes the specified BluetoothScannerSetModeRequest message. Does not implicitly {@link BluetoothScannerSetModeRequest.verify|verify} messages.
     * @param message BluetoothScannerSetModeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBluetoothScannerSetModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BluetoothScannerSetModeRequest message, length delimited. Does not implicitly {@link BluetoothScannerSetModeRequest.verify|verify} messages.
     * @param message BluetoothScannerSetModeRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBluetoothScannerSetModeRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BluetoothScannerSetModeRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BluetoothScannerSetModeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BluetoothScannerSetModeRequest;

    /**
     * Decodes a BluetoothScannerSetModeRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BluetoothScannerSetModeRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BluetoothScannerSetModeRequest;

    /**
     * Verifies a BluetoothScannerSetModeRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BluetoothScannerSetModeRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BluetoothScannerSetModeRequest
     */
    public static fromObject(object: { [k: string]: any }): BluetoothScannerSetModeRequest;

    /**
     * Creates a plain object from a BluetoothScannerSetModeRequest message. Also converts values to other types if specified.
     * @param message BluetoothScannerSetModeRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BluetoothScannerSetModeRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BluetoothScannerSetModeRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BluetoothScannerSetModeRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** VoiceAssistantSubscribeFlag enum. */
export enum VoiceAssistantSubscribeFlag {
    VOICE_ASSISTANT_SUBSCRIBE_NONE = 0,
    VOICE_ASSISTANT_SUBSCRIBE_API_AUDIO = 1
}

/** Represents a SubscribeVoiceAssistantRequest. */
export class SubscribeVoiceAssistantRequest implements ISubscribeVoiceAssistantRequest {

    /**
     * Constructs a new SubscribeVoiceAssistantRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISubscribeVoiceAssistantRequest);

    /** SubscribeVoiceAssistantRequest subscribe. */
    public subscribe: boolean;

    /** SubscribeVoiceAssistantRequest flags. */
    public flags: number;

    /**
     * Creates a new SubscribeVoiceAssistantRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubscribeVoiceAssistantRequest instance
     */
    public static create(properties?: ISubscribeVoiceAssistantRequest): SubscribeVoiceAssistantRequest;

    /**
     * Encodes the specified SubscribeVoiceAssistantRequest message. Does not implicitly {@link SubscribeVoiceAssistantRequest.verify|verify} messages.
     * @param message SubscribeVoiceAssistantRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISubscribeVoiceAssistantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SubscribeVoiceAssistantRequest message, length delimited. Does not implicitly {@link SubscribeVoiceAssistantRequest.verify|verify} messages.
     * @param message SubscribeVoiceAssistantRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISubscribeVoiceAssistantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SubscribeVoiceAssistantRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubscribeVoiceAssistantRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SubscribeVoiceAssistantRequest;

    /**
     * Decodes a SubscribeVoiceAssistantRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubscribeVoiceAssistantRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SubscribeVoiceAssistantRequest;

    /**
     * Verifies a SubscribeVoiceAssistantRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SubscribeVoiceAssistantRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubscribeVoiceAssistantRequest
     */
    public static fromObject(object: { [k: string]: any }): SubscribeVoiceAssistantRequest;

    /**
     * Creates a plain object from a SubscribeVoiceAssistantRequest message. Also converts values to other types if specified.
     * @param message SubscribeVoiceAssistantRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SubscribeVoiceAssistantRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SubscribeVoiceAssistantRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SubscribeVoiceAssistantRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** VoiceAssistantRequestFlag enum. */
export enum VoiceAssistantRequestFlag {
    VOICE_ASSISTANT_REQUEST_NONE = 0,
    VOICE_ASSISTANT_REQUEST_USE_VAD = 1,
    VOICE_ASSISTANT_REQUEST_USE_WAKE_WORD = 2
}

/** Represents a VoiceAssistantAudioSettings. */
export class VoiceAssistantAudioSettings implements IVoiceAssistantAudioSettings {

    /**
     * Constructs a new VoiceAssistantAudioSettings.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoiceAssistantAudioSettings);

    /** VoiceAssistantAudioSettings noise_suppression_level. */
    public noise_suppression_level: number;

    /** VoiceAssistantAudioSettings auto_gain. */
    public auto_gain: number;

    /** VoiceAssistantAudioSettings volume_multiplier. */
    public volume_multiplier: number;

    /**
     * Creates a new VoiceAssistantAudioSettings instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoiceAssistantAudioSettings instance
     */
    public static create(properties?: IVoiceAssistantAudioSettings): VoiceAssistantAudioSettings;

    /**
     * Encodes the specified VoiceAssistantAudioSettings message. Does not implicitly {@link VoiceAssistantAudioSettings.verify|verify} messages.
     * @param message VoiceAssistantAudioSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoiceAssistantAudioSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoiceAssistantAudioSettings message, length delimited. Does not implicitly {@link VoiceAssistantAudioSettings.verify|verify} messages.
     * @param message VoiceAssistantAudioSettings message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoiceAssistantAudioSettings, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoiceAssistantAudioSettings message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoiceAssistantAudioSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoiceAssistantAudioSettings;

    /**
     * Decodes a VoiceAssistantAudioSettings message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoiceAssistantAudioSettings
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoiceAssistantAudioSettings;

    /**
     * Verifies a VoiceAssistantAudioSettings message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoiceAssistantAudioSettings message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoiceAssistantAudioSettings
     */
    public static fromObject(object: { [k: string]: any }): VoiceAssistantAudioSettings;

    /**
     * Creates a plain object from a VoiceAssistantAudioSettings message. Also converts values to other types if specified.
     * @param message VoiceAssistantAudioSettings
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoiceAssistantAudioSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoiceAssistantAudioSettings to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoiceAssistantAudioSettings
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a VoiceAssistantRequest. */
export class VoiceAssistantRequest implements IVoiceAssistantRequest {

    /**
     * Constructs a new VoiceAssistantRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoiceAssistantRequest);

    /** VoiceAssistantRequest start. */
    public start: boolean;

    /** VoiceAssistantRequest conversation_id. */
    public conversation_id: string;

    /** VoiceAssistantRequest flags. */
    public flags: number;

    /** VoiceAssistantRequest audio_settings. */
    public audio_settings?: (IVoiceAssistantAudioSettings|null);

    /** VoiceAssistantRequest wake_word_phrase. */
    public wake_word_phrase: string;

    /**
     * Creates a new VoiceAssistantRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoiceAssistantRequest instance
     */
    public static create(properties?: IVoiceAssistantRequest): VoiceAssistantRequest;

    /**
     * Encodes the specified VoiceAssistantRequest message. Does not implicitly {@link VoiceAssistantRequest.verify|verify} messages.
     * @param message VoiceAssistantRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoiceAssistantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoiceAssistantRequest message, length delimited. Does not implicitly {@link VoiceAssistantRequest.verify|verify} messages.
     * @param message VoiceAssistantRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoiceAssistantRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoiceAssistantRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoiceAssistantRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoiceAssistantRequest;

    /**
     * Decodes a VoiceAssistantRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoiceAssistantRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoiceAssistantRequest;

    /**
     * Verifies a VoiceAssistantRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoiceAssistantRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoiceAssistantRequest
     */
    public static fromObject(object: { [k: string]: any }): VoiceAssistantRequest;

    /**
     * Creates a plain object from a VoiceAssistantRequest message. Also converts values to other types if specified.
     * @param message VoiceAssistantRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoiceAssistantRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoiceAssistantRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoiceAssistantRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a VoiceAssistantResponse. */
export class VoiceAssistantResponse implements IVoiceAssistantResponse {

    /**
     * Constructs a new VoiceAssistantResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoiceAssistantResponse);

    /** VoiceAssistantResponse port. */
    public port: number;

    /** VoiceAssistantResponse error. */
    public error: boolean;

    /**
     * Creates a new VoiceAssistantResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoiceAssistantResponse instance
     */
    public static create(properties?: IVoiceAssistantResponse): VoiceAssistantResponse;

    /**
     * Encodes the specified VoiceAssistantResponse message. Does not implicitly {@link VoiceAssistantResponse.verify|verify} messages.
     * @param message VoiceAssistantResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoiceAssistantResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoiceAssistantResponse message, length delimited. Does not implicitly {@link VoiceAssistantResponse.verify|verify} messages.
     * @param message VoiceAssistantResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoiceAssistantResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoiceAssistantResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoiceAssistantResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoiceAssistantResponse;

    /**
     * Decodes a VoiceAssistantResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoiceAssistantResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoiceAssistantResponse;

    /**
     * Verifies a VoiceAssistantResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoiceAssistantResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoiceAssistantResponse
     */
    public static fromObject(object: { [k: string]: any }): VoiceAssistantResponse;

    /**
     * Creates a plain object from a VoiceAssistantResponse message. Also converts values to other types if specified.
     * @param message VoiceAssistantResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoiceAssistantResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoiceAssistantResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoiceAssistantResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** VoiceAssistantEvent enum. */
export enum VoiceAssistantEvent {
    VOICE_ASSISTANT_ERROR = 0,
    VOICE_ASSISTANT_RUN_START = 1,
    VOICE_ASSISTANT_RUN_END = 2,
    VOICE_ASSISTANT_STT_START = 3,
    VOICE_ASSISTANT_STT_END = 4,
    VOICE_ASSISTANT_INTENT_START = 5,
    VOICE_ASSISTANT_INTENT_END = 6,
    VOICE_ASSISTANT_TTS_START = 7,
    VOICE_ASSISTANT_TTS_END = 8,
    VOICE_ASSISTANT_WAKE_WORD_START = 9,
    VOICE_ASSISTANT_WAKE_WORD_END = 10,
    VOICE_ASSISTANT_STT_VAD_START = 11,
    VOICE_ASSISTANT_STT_VAD_END = 12,
    VOICE_ASSISTANT_TTS_STREAM_START = 98,
    VOICE_ASSISTANT_TTS_STREAM_END = 99,
    VOICE_ASSISTANT_INTENT_PROGRESS = 100
}

/** Represents a VoiceAssistantEventData. */
export class VoiceAssistantEventData implements IVoiceAssistantEventData {

    /**
     * Constructs a new VoiceAssistantEventData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoiceAssistantEventData);

    /** VoiceAssistantEventData name. */
    public name: string;

    /** VoiceAssistantEventData value. */
    public value: string;

    /**
     * Creates a new VoiceAssistantEventData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoiceAssistantEventData instance
     */
    public static create(properties?: IVoiceAssistantEventData): VoiceAssistantEventData;

    /**
     * Encodes the specified VoiceAssistantEventData message. Does not implicitly {@link VoiceAssistantEventData.verify|verify} messages.
     * @param message VoiceAssistantEventData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoiceAssistantEventData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoiceAssistantEventData message, length delimited. Does not implicitly {@link VoiceAssistantEventData.verify|verify} messages.
     * @param message VoiceAssistantEventData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoiceAssistantEventData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoiceAssistantEventData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoiceAssistantEventData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoiceAssistantEventData;

    /**
     * Decodes a VoiceAssistantEventData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoiceAssistantEventData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoiceAssistantEventData;

    /**
     * Verifies a VoiceAssistantEventData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoiceAssistantEventData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoiceAssistantEventData
     */
    public static fromObject(object: { [k: string]: any }): VoiceAssistantEventData;

    /**
     * Creates a plain object from a VoiceAssistantEventData message. Also converts values to other types if specified.
     * @param message VoiceAssistantEventData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoiceAssistantEventData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoiceAssistantEventData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoiceAssistantEventData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a VoiceAssistantEventResponse. */
export class VoiceAssistantEventResponse implements IVoiceAssistantEventResponse {

    /**
     * Constructs a new VoiceAssistantEventResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoiceAssistantEventResponse);

    /** VoiceAssistantEventResponse event_type. */
    public event_type: VoiceAssistantEvent;

    /** VoiceAssistantEventResponse data. */
    public data: IVoiceAssistantEventData[];

    /**
     * Creates a new VoiceAssistantEventResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoiceAssistantEventResponse instance
     */
    public static create(properties?: IVoiceAssistantEventResponse): VoiceAssistantEventResponse;

    /**
     * Encodes the specified VoiceAssistantEventResponse message. Does not implicitly {@link VoiceAssistantEventResponse.verify|verify} messages.
     * @param message VoiceAssistantEventResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoiceAssistantEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoiceAssistantEventResponse message, length delimited. Does not implicitly {@link VoiceAssistantEventResponse.verify|verify} messages.
     * @param message VoiceAssistantEventResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoiceAssistantEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoiceAssistantEventResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoiceAssistantEventResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoiceAssistantEventResponse;

    /**
     * Decodes a VoiceAssistantEventResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoiceAssistantEventResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoiceAssistantEventResponse;

    /**
     * Verifies a VoiceAssistantEventResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoiceAssistantEventResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoiceAssistantEventResponse
     */
    public static fromObject(object: { [k: string]: any }): VoiceAssistantEventResponse;

    /**
     * Creates a plain object from a VoiceAssistantEventResponse message. Also converts values to other types if specified.
     * @param message VoiceAssistantEventResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoiceAssistantEventResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoiceAssistantEventResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoiceAssistantEventResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a VoiceAssistantAudio. */
export class VoiceAssistantAudio implements IVoiceAssistantAudio {

    /**
     * Constructs a new VoiceAssistantAudio.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoiceAssistantAudio);

    /** VoiceAssistantAudio data. */
    public data: Uint8Array;

    /** VoiceAssistantAudio end. */
    public end: boolean;

    /**
     * Creates a new VoiceAssistantAudio instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoiceAssistantAudio instance
     */
    public static create(properties?: IVoiceAssistantAudio): VoiceAssistantAudio;

    /**
     * Encodes the specified VoiceAssistantAudio message. Does not implicitly {@link VoiceAssistantAudio.verify|verify} messages.
     * @param message VoiceAssistantAudio message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoiceAssistantAudio, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoiceAssistantAudio message, length delimited. Does not implicitly {@link VoiceAssistantAudio.verify|verify} messages.
     * @param message VoiceAssistantAudio message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoiceAssistantAudio, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoiceAssistantAudio message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoiceAssistantAudio
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoiceAssistantAudio;

    /**
     * Decodes a VoiceAssistantAudio message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoiceAssistantAudio
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoiceAssistantAudio;

    /**
     * Verifies a VoiceAssistantAudio message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoiceAssistantAudio message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoiceAssistantAudio
     */
    public static fromObject(object: { [k: string]: any }): VoiceAssistantAudio;

    /**
     * Creates a plain object from a VoiceAssistantAudio message. Also converts values to other types if specified.
     * @param message VoiceAssistantAudio
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoiceAssistantAudio, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoiceAssistantAudio to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoiceAssistantAudio
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** VoiceAssistantTimerEvent enum. */
export enum VoiceAssistantTimerEvent {
    VOICE_ASSISTANT_TIMER_STARTED = 0,
    VOICE_ASSISTANT_TIMER_UPDATED = 1,
    VOICE_ASSISTANT_TIMER_CANCELLED = 2,
    VOICE_ASSISTANT_TIMER_FINISHED = 3
}

/** Represents a VoiceAssistantTimerEventResponse. */
export class VoiceAssistantTimerEventResponse implements IVoiceAssistantTimerEventResponse {

    /**
     * Constructs a new VoiceAssistantTimerEventResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoiceAssistantTimerEventResponse);

    /** VoiceAssistantTimerEventResponse event_type. */
    public event_type: VoiceAssistantTimerEvent;

    /** VoiceAssistantTimerEventResponse timer_id. */
    public timer_id: string;

    /** VoiceAssistantTimerEventResponse name. */
    public name: string;

    /** VoiceAssistantTimerEventResponse total_seconds. */
    public total_seconds: number;

    /** VoiceAssistantTimerEventResponse seconds_left. */
    public seconds_left: number;

    /** VoiceAssistantTimerEventResponse is_active. */
    public is_active: boolean;

    /**
     * Creates a new VoiceAssistantTimerEventResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoiceAssistantTimerEventResponse instance
     */
    public static create(properties?: IVoiceAssistantTimerEventResponse): VoiceAssistantTimerEventResponse;

    /**
     * Encodes the specified VoiceAssistantTimerEventResponse message. Does not implicitly {@link VoiceAssistantTimerEventResponse.verify|verify} messages.
     * @param message VoiceAssistantTimerEventResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoiceAssistantTimerEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoiceAssistantTimerEventResponse message, length delimited. Does not implicitly {@link VoiceAssistantTimerEventResponse.verify|verify} messages.
     * @param message VoiceAssistantTimerEventResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoiceAssistantTimerEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoiceAssistantTimerEventResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoiceAssistantTimerEventResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoiceAssistantTimerEventResponse;

    /**
     * Decodes a VoiceAssistantTimerEventResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoiceAssistantTimerEventResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoiceAssistantTimerEventResponse;

    /**
     * Verifies a VoiceAssistantTimerEventResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoiceAssistantTimerEventResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoiceAssistantTimerEventResponse
     */
    public static fromObject(object: { [k: string]: any }): VoiceAssistantTimerEventResponse;

    /**
     * Creates a plain object from a VoiceAssistantTimerEventResponse message. Also converts values to other types if specified.
     * @param message VoiceAssistantTimerEventResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoiceAssistantTimerEventResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoiceAssistantTimerEventResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoiceAssistantTimerEventResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a VoiceAssistantAnnounceRequest. */
export class VoiceAssistantAnnounceRequest implements IVoiceAssistantAnnounceRequest {

    /**
     * Constructs a new VoiceAssistantAnnounceRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoiceAssistantAnnounceRequest);

    /** VoiceAssistantAnnounceRequest media_id. */
    public media_id: string;

    /** VoiceAssistantAnnounceRequest text. */
    public text: string;

    /** VoiceAssistantAnnounceRequest preannounce_media_id. */
    public preannounce_media_id: string;

    /** VoiceAssistantAnnounceRequest start_conversation. */
    public start_conversation: boolean;

    /**
     * Creates a new VoiceAssistantAnnounceRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoiceAssistantAnnounceRequest instance
     */
    public static create(properties?: IVoiceAssistantAnnounceRequest): VoiceAssistantAnnounceRequest;

    /**
     * Encodes the specified VoiceAssistantAnnounceRequest message. Does not implicitly {@link VoiceAssistantAnnounceRequest.verify|verify} messages.
     * @param message VoiceAssistantAnnounceRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoiceAssistantAnnounceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoiceAssistantAnnounceRequest message, length delimited. Does not implicitly {@link VoiceAssistantAnnounceRequest.verify|verify} messages.
     * @param message VoiceAssistantAnnounceRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoiceAssistantAnnounceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoiceAssistantAnnounceRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoiceAssistantAnnounceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoiceAssistantAnnounceRequest;

    /**
     * Decodes a VoiceAssistantAnnounceRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoiceAssistantAnnounceRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoiceAssistantAnnounceRequest;

    /**
     * Verifies a VoiceAssistantAnnounceRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoiceAssistantAnnounceRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoiceAssistantAnnounceRequest
     */
    public static fromObject(object: { [k: string]: any }): VoiceAssistantAnnounceRequest;

    /**
     * Creates a plain object from a VoiceAssistantAnnounceRequest message. Also converts values to other types if specified.
     * @param message VoiceAssistantAnnounceRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoiceAssistantAnnounceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoiceAssistantAnnounceRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoiceAssistantAnnounceRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a VoiceAssistantAnnounceFinished. */
export class VoiceAssistantAnnounceFinished implements IVoiceAssistantAnnounceFinished {

    /**
     * Constructs a new VoiceAssistantAnnounceFinished.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoiceAssistantAnnounceFinished);

    /** VoiceAssistantAnnounceFinished success. */
    public success: boolean;

    /**
     * Creates a new VoiceAssistantAnnounceFinished instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoiceAssistantAnnounceFinished instance
     */
    public static create(properties?: IVoiceAssistantAnnounceFinished): VoiceAssistantAnnounceFinished;

    /**
     * Encodes the specified VoiceAssistantAnnounceFinished message. Does not implicitly {@link VoiceAssistantAnnounceFinished.verify|verify} messages.
     * @param message VoiceAssistantAnnounceFinished message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoiceAssistantAnnounceFinished, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoiceAssistantAnnounceFinished message, length delimited. Does not implicitly {@link VoiceAssistantAnnounceFinished.verify|verify} messages.
     * @param message VoiceAssistantAnnounceFinished message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoiceAssistantAnnounceFinished, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoiceAssistantAnnounceFinished message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoiceAssistantAnnounceFinished
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoiceAssistantAnnounceFinished;

    /**
     * Decodes a VoiceAssistantAnnounceFinished message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoiceAssistantAnnounceFinished
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoiceAssistantAnnounceFinished;

    /**
     * Verifies a VoiceAssistantAnnounceFinished message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoiceAssistantAnnounceFinished message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoiceAssistantAnnounceFinished
     */
    public static fromObject(object: { [k: string]: any }): VoiceAssistantAnnounceFinished;

    /**
     * Creates a plain object from a VoiceAssistantAnnounceFinished message. Also converts values to other types if specified.
     * @param message VoiceAssistantAnnounceFinished
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoiceAssistantAnnounceFinished, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoiceAssistantAnnounceFinished to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoiceAssistantAnnounceFinished
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a VoiceAssistantWakeWord. */
export class VoiceAssistantWakeWord implements IVoiceAssistantWakeWord {

    /**
     * Constructs a new VoiceAssistantWakeWord.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoiceAssistantWakeWord);

    /** VoiceAssistantWakeWord id. */
    public id: string;

    /** VoiceAssistantWakeWord wake_word. */
    public wake_word: string;

    /** VoiceAssistantWakeWord trained_languages. */
    public trained_languages: string[];

    /**
     * Creates a new VoiceAssistantWakeWord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoiceAssistantWakeWord instance
     */
    public static create(properties?: IVoiceAssistantWakeWord): VoiceAssistantWakeWord;

    /**
     * Encodes the specified VoiceAssistantWakeWord message. Does not implicitly {@link VoiceAssistantWakeWord.verify|verify} messages.
     * @param message VoiceAssistantWakeWord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoiceAssistantWakeWord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoiceAssistantWakeWord message, length delimited. Does not implicitly {@link VoiceAssistantWakeWord.verify|verify} messages.
     * @param message VoiceAssistantWakeWord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoiceAssistantWakeWord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoiceAssistantWakeWord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoiceAssistantWakeWord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoiceAssistantWakeWord;

    /**
     * Decodes a VoiceAssistantWakeWord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoiceAssistantWakeWord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoiceAssistantWakeWord;

    /**
     * Verifies a VoiceAssistantWakeWord message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoiceAssistantWakeWord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoiceAssistantWakeWord
     */
    public static fromObject(object: { [k: string]: any }): VoiceAssistantWakeWord;

    /**
     * Creates a plain object from a VoiceAssistantWakeWord message. Also converts values to other types if specified.
     * @param message VoiceAssistantWakeWord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoiceAssistantWakeWord, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoiceAssistantWakeWord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoiceAssistantWakeWord
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a VoiceAssistantExternalWakeWord. */
export class VoiceAssistantExternalWakeWord implements IVoiceAssistantExternalWakeWord {

    /**
     * Constructs a new VoiceAssistantExternalWakeWord.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoiceAssistantExternalWakeWord);

    /** VoiceAssistantExternalWakeWord id. */
    public id: string;

    /** VoiceAssistantExternalWakeWord wake_word. */
    public wake_word: string;

    /** VoiceAssistantExternalWakeWord trained_languages. */
    public trained_languages: string[];

    /** VoiceAssistantExternalWakeWord model_type. */
    public model_type: string;

    /** VoiceAssistantExternalWakeWord model_size. */
    public model_size: number;

    /** VoiceAssistantExternalWakeWord model_hash. */
    public model_hash: string;

    /** VoiceAssistantExternalWakeWord url. */
    public url: string;

    /**
     * Creates a new VoiceAssistantExternalWakeWord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoiceAssistantExternalWakeWord instance
     */
    public static create(properties?: IVoiceAssistantExternalWakeWord): VoiceAssistantExternalWakeWord;

    /**
     * Encodes the specified VoiceAssistantExternalWakeWord message. Does not implicitly {@link VoiceAssistantExternalWakeWord.verify|verify} messages.
     * @param message VoiceAssistantExternalWakeWord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoiceAssistantExternalWakeWord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoiceAssistantExternalWakeWord message, length delimited. Does not implicitly {@link VoiceAssistantExternalWakeWord.verify|verify} messages.
     * @param message VoiceAssistantExternalWakeWord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoiceAssistantExternalWakeWord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoiceAssistantExternalWakeWord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoiceAssistantExternalWakeWord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoiceAssistantExternalWakeWord;

    /**
     * Decodes a VoiceAssistantExternalWakeWord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoiceAssistantExternalWakeWord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoiceAssistantExternalWakeWord;

    /**
     * Verifies a VoiceAssistantExternalWakeWord message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoiceAssistantExternalWakeWord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoiceAssistantExternalWakeWord
     */
    public static fromObject(object: { [k: string]: any }): VoiceAssistantExternalWakeWord;

    /**
     * Creates a plain object from a VoiceAssistantExternalWakeWord message. Also converts values to other types if specified.
     * @param message VoiceAssistantExternalWakeWord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoiceAssistantExternalWakeWord, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoiceAssistantExternalWakeWord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoiceAssistantExternalWakeWord
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a VoiceAssistantConfigurationRequest. */
export class VoiceAssistantConfigurationRequest implements IVoiceAssistantConfigurationRequest {

    /**
     * Constructs a new VoiceAssistantConfigurationRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoiceAssistantConfigurationRequest);

    /** VoiceAssistantConfigurationRequest external_wake_words. */
    public external_wake_words: IVoiceAssistantExternalWakeWord[];

    /**
     * Creates a new VoiceAssistantConfigurationRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoiceAssistantConfigurationRequest instance
     */
    public static create(properties?: IVoiceAssistantConfigurationRequest): VoiceAssistantConfigurationRequest;

    /**
     * Encodes the specified VoiceAssistantConfigurationRequest message. Does not implicitly {@link VoiceAssistantConfigurationRequest.verify|verify} messages.
     * @param message VoiceAssistantConfigurationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoiceAssistantConfigurationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoiceAssistantConfigurationRequest message, length delimited. Does not implicitly {@link VoiceAssistantConfigurationRequest.verify|verify} messages.
     * @param message VoiceAssistantConfigurationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoiceAssistantConfigurationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoiceAssistantConfigurationRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoiceAssistantConfigurationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoiceAssistantConfigurationRequest;

    /**
     * Decodes a VoiceAssistantConfigurationRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoiceAssistantConfigurationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoiceAssistantConfigurationRequest;

    /**
     * Verifies a VoiceAssistantConfigurationRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoiceAssistantConfigurationRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoiceAssistantConfigurationRequest
     */
    public static fromObject(object: { [k: string]: any }): VoiceAssistantConfigurationRequest;

    /**
     * Creates a plain object from a VoiceAssistantConfigurationRequest message. Also converts values to other types if specified.
     * @param message VoiceAssistantConfigurationRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoiceAssistantConfigurationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoiceAssistantConfigurationRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoiceAssistantConfigurationRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a VoiceAssistantConfigurationResponse. */
export class VoiceAssistantConfigurationResponse implements IVoiceAssistantConfigurationResponse {

    /**
     * Constructs a new VoiceAssistantConfigurationResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoiceAssistantConfigurationResponse);

    /** VoiceAssistantConfigurationResponse available_wake_words. */
    public available_wake_words: IVoiceAssistantWakeWord[];

    /** VoiceAssistantConfigurationResponse active_wake_words. */
    public active_wake_words: string[];

    /** VoiceAssistantConfigurationResponse max_active_wake_words. */
    public max_active_wake_words: number;

    /**
     * Creates a new VoiceAssistantConfigurationResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoiceAssistantConfigurationResponse instance
     */
    public static create(properties?: IVoiceAssistantConfigurationResponse): VoiceAssistantConfigurationResponse;

    /**
     * Encodes the specified VoiceAssistantConfigurationResponse message. Does not implicitly {@link VoiceAssistantConfigurationResponse.verify|verify} messages.
     * @param message VoiceAssistantConfigurationResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoiceAssistantConfigurationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoiceAssistantConfigurationResponse message, length delimited. Does not implicitly {@link VoiceAssistantConfigurationResponse.verify|verify} messages.
     * @param message VoiceAssistantConfigurationResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoiceAssistantConfigurationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoiceAssistantConfigurationResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoiceAssistantConfigurationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoiceAssistantConfigurationResponse;

    /**
     * Decodes a VoiceAssistantConfigurationResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoiceAssistantConfigurationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoiceAssistantConfigurationResponse;

    /**
     * Verifies a VoiceAssistantConfigurationResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoiceAssistantConfigurationResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoiceAssistantConfigurationResponse
     */
    public static fromObject(object: { [k: string]: any }): VoiceAssistantConfigurationResponse;

    /**
     * Creates a plain object from a VoiceAssistantConfigurationResponse message. Also converts values to other types if specified.
     * @param message VoiceAssistantConfigurationResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoiceAssistantConfigurationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoiceAssistantConfigurationResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoiceAssistantConfigurationResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a VoiceAssistantSetConfiguration. */
export class VoiceAssistantSetConfiguration implements IVoiceAssistantSetConfiguration {

    /**
     * Constructs a new VoiceAssistantSetConfiguration.
     * @param [properties] Properties to set
     */
    constructor(properties?: IVoiceAssistantSetConfiguration);

    /** VoiceAssistantSetConfiguration active_wake_words. */
    public active_wake_words: string[];

    /**
     * Creates a new VoiceAssistantSetConfiguration instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VoiceAssistantSetConfiguration instance
     */
    public static create(properties?: IVoiceAssistantSetConfiguration): VoiceAssistantSetConfiguration;

    /**
     * Encodes the specified VoiceAssistantSetConfiguration message. Does not implicitly {@link VoiceAssistantSetConfiguration.verify|verify} messages.
     * @param message VoiceAssistantSetConfiguration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IVoiceAssistantSetConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified VoiceAssistantSetConfiguration message, length delimited. Does not implicitly {@link VoiceAssistantSetConfiguration.verify|verify} messages.
     * @param message VoiceAssistantSetConfiguration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IVoiceAssistantSetConfiguration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a VoiceAssistantSetConfiguration message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VoiceAssistantSetConfiguration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): VoiceAssistantSetConfiguration;

    /**
     * Decodes a VoiceAssistantSetConfiguration message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VoiceAssistantSetConfiguration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): VoiceAssistantSetConfiguration;

    /**
     * Verifies a VoiceAssistantSetConfiguration message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a VoiceAssistantSetConfiguration message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VoiceAssistantSetConfiguration
     */
    public static fromObject(object: { [k: string]: any }): VoiceAssistantSetConfiguration;

    /**
     * Creates a plain object from a VoiceAssistantSetConfiguration message. Also converts values to other types if specified.
     * @param message VoiceAssistantSetConfiguration
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: VoiceAssistantSetConfiguration, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this VoiceAssistantSetConfiguration to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VoiceAssistantSetConfiguration
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** AlarmControlPanelState enum. */
export enum AlarmControlPanelState {
    ALARM_STATE_DISARMED = 0,
    ALARM_STATE_ARMED_HOME = 1,
    ALARM_STATE_ARMED_AWAY = 2,
    ALARM_STATE_ARMED_NIGHT = 3,
    ALARM_STATE_ARMED_VACATION = 4,
    ALARM_STATE_ARMED_CUSTOM_BYPASS = 5,
    ALARM_STATE_PENDING = 6,
    ALARM_STATE_ARMING = 7,
    ALARM_STATE_DISARMING = 8,
    ALARM_STATE_TRIGGERED = 9
}

/** AlarmControlPanelStateCommand enum. */
export enum AlarmControlPanelStateCommand {
    ALARM_CONTROL_PANEL_DISARM = 0,
    ALARM_CONTROL_PANEL_ARM_AWAY = 1,
    ALARM_CONTROL_PANEL_ARM_HOME = 2,
    ALARM_CONTROL_PANEL_ARM_NIGHT = 3,
    ALARM_CONTROL_PANEL_ARM_VACATION = 4,
    ALARM_CONTROL_PANEL_ARM_CUSTOM_BYPASS = 5,
    ALARM_CONTROL_PANEL_TRIGGER = 6
}

/** Represents a ListEntitiesAlarmControlPanelResponse. */
export class ListEntitiesAlarmControlPanelResponse implements IListEntitiesAlarmControlPanelResponse {

    /**
     * Constructs a new ListEntitiesAlarmControlPanelResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesAlarmControlPanelResponse);

    /** ListEntitiesAlarmControlPanelResponse object_id. */
    public object_id: string;

    /** ListEntitiesAlarmControlPanelResponse key. */
    public key: number;

    /** ListEntitiesAlarmControlPanelResponse name. */
    public name: string;

    /** ListEntitiesAlarmControlPanelResponse icon. */
    public icon: string;

    /** ListEntitiesAlarmControlPanelResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesAlarmControlPanelResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesAlarmControlPanelResponse supported_features. */
    public supported_features: number;

    /** ListEntitiesAlarmControlPanelResponse requires_code. */
    public requires_code: boolean;

    /** ListEntitiesAlarmControlPanelResponse requires_code_to_arm. */
    public requires_code_to_arm: boolean;

    /** ListEntitiesAlarmControlPanelResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesAlarmControlPanelResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesAlarmControlPanelResponse instance
     */
    public static create(properties?: IListEntitiesAlarmControlPanelResponse): ListEntitiesAlarmControlPanelResponse;

    /**
     * Encodes the specified ListEntitiesAlarmControlPanelResponse message. Does not implicitly {@link ListEntitiesAlarmControlPanelResponse.verify|verify} messages.
     * @param message ListEntitiesAlarmControlPanelResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesAlarmControlPanelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesAlarmControlPanelResponse message, length delimited. Does not implicitly {@link ListEntitiesAlarmControlPanelResponse.verify|verify} messages.
     * @param message ListEntitiesAlarmControlPanelResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesAlarmControlPanelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesAlarmControlPanelResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesAlarmControlPanelResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesAlarmControlPanelResponse;

    /**
     * Decodes a ListEntitiesAlarmControlPanelResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesAlarmControlPanelResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesAlarmControlPanelResponse;

    /**
     * Verifies a ListEntitiesAlarmControlPanelResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesAlarmControlPanelResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesAlarmControlPanelResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesAlarmControlPanelResponse;

    /**
     * Creates a plain object from a ListEntitiesAlarmControlPanelResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesAlarmControlPanelResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesAlarmControlPanelResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesAlarmControlPanelResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesAlarmControlPanelResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an AlarmControlPanelStateResponse. */
export class AlarmControlPanelStateResponse implements IAlarmControlPanelStateResponse {

    /**
     * Constructs a new AlarmControlPanelStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAlarmControlPanelStateResponse);

    /** AlarmControlPanelStateResponse key. */
    public key: number;

    /** AlarmControlPanelStateResponse state. */
    public state: AlarmControlPanelState;

    /** AlarmControlPanelStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new AlarmControlPanelStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AlarmControlPanelStateResponse instance
     */
    public static create(properties?: IAlarmControlPanelStateResponse): AlarmControlPanelStateResponse;

    /**
     * Encodes the specified AlarmControlPanelStateResponse message. Does not implicitly {@link AlarmControlPanelStateResponse.verify|verify} messages.
     * @param message AlarmControlPanelStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAlarmControlPanelStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AlarmControlPanelStateResponse message, length delimited. Does not implicitly {@link AlarmControlPanelStateResponse.verify|verify} messages.
     * @param message AlarmControlPanelStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAlarmControlPanelStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AlarmControlPanelStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AlarmControlPanelStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AlarmControlPanelStateResponse;

    /**
     * Decodes an AlarmControlPanelStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AlarmControlPanelStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AlarmControlPanelStateResponse;

    /**
     * Verifies an AlarmControlPanelStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AlarmControlPanelStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AlarmControlPanelStateResponse
     */
    public static fromObject(object: { [k: string]: any }): AlarmControlPanelStateResponse;

    /**
     * Creates a plain object from an AlarmControlPanelStateResponse message. Also converts values to other types if specified.
     * @param message AlarmControlPanelStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AlarmControlPanelStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AlarmControlPanelStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AlarmControlPanelStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an AlarmControlPanelCommandRequest. */
export class AlarmControlPanelCommandRequest implements IAlarmControlPanelCommandRequest {

    /**
     * Constructs a new AlarmControlPanelCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAlarmControlPanelCommandRequest);

    /** AlarmControlPanelCommandRequest key. */
    public key: number;

    /** AlarmControlPanelCommandRequest command. */
    public command: AlarmControlPanelStateCommand;

    /** AlarmControlPanelCommandRequest code. */
    public code: string;

    /** AlarmControlPanelCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new AlarmControlPanelCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AlarmControlPanelCommandRequest instance
     */
    public static create(properties?: IAlarmControlPanelCommandRequest): AlarmControlPanelCommandRequest;

    /**
     * Encodes the specified AlarmControlPanelCommandRequest message. Does not implicitly {@link AlarmControlPanelCommandRequest.verify|verify} messages.
     * @param message AlarmControlPanelCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAlarmControlPanelCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AlarmControlPanelCommandRequest message, length delimited. Does not implicitly {@link AlarmControlPanelCommandRequest.verify|verify} messages.
     * @param message AlarmControlPanelCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAlarmControlPanelCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AlarmControlPanelCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AlarmControlPanelCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AlarmControlPanelCommandRequest;

    /**
     * Decodes an AlarmControlPanelCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AlarmControlPanelCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AlarmControlPanelCommandRequest;

    /**
     * Verifies an AlarmControlPanelCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AlarmControlPanelCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AlarmControlPanelCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): AlarmControlPanelCommandRequest;

    /**
     * Creates a plain object from an AlarmControlPanelCommandRequest message. Also converts values to other types if specified.
     * @param message AlarmControlPanelCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AlarmControlPanelCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AlarmControlPanelCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AlarmControlPanelCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** TextMode enum. */
export enum TextMode {
    TEXT_MODE_TEXT = 0,
    TEXT_MODE_PASSWORD = 1
}

/** Represents a ListEntitiesTextResponse. */
export class ListEntitiesTextResponse implements IListEntitiesTextResponse {

    /**
     * Constructs a new ListEntitiesTextResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesTextResponse);

    /** ListEntitiesTextResponse object_id. */
    public object_id: string;

    /** ListEntitiesTextResponse key. */
    public key: number;

    /** ListEntitiesTextResponse name. */
    public name: string;

    /** ListEntitiesTextResponse icon. */
    public icon: string;

    /** ListEntitiesTextResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesTextResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesTextResponse min_length. */
    public min_length: number;

    /** ListEntitiesTextResponse max_length. */
    public max_length: number;

    /** ListEntitiesTextResponse pattern. */
    public pattern: string;

    /** ListEntitiesTextResponse mode. */
    public mode: TextMode;

    /** ListEntitiesTextResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesTextResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesTextResponse instance
     */
    public static create(properties?: IListEntitiesTextResponse): ListEntitiesTextResponse;

    /**
     * Encodes the specified ListEntitiesTextResponse message. Does not implicitly {@link ListEntitiesTextResponse.verify|verify} messages.
     * @param message ListEntitiesTextResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesTextResponse message, length delimited. Does not implicitly {@link ListEntitiesTextResponse.verify|verify} messages.
     * @param message ListEntitiesTextResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesTextResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesTextResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesTextResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesTextResponse;

    /**
     * Decodes a ListEntitiesTextResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesTextResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesTextResponse;

    /**
     * Verifies a ListEntitiesTextResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesTextResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesTextResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesTextResponse;

    /**
     * Creates a plain object from a ListEntitiesTextResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesTextResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesTextResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesTextResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesTextResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a TextStateResponse. */
export class TextStateResponse implements ITextStateResponse {

    /**
     * Constructs a new TextStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITextStateResponse);

    /** TextStateResponse key. */
    public key: number;

    /** TextStateResponse state. */
    public state: string;

    /** TextStateResponse missing_state. */
    public missing_state: boolean;

    /** TextStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new TextStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextStateResponse instance
     */
    public static create(properties?: ITextStateResponse): TextStateResponse;

    /**
     * Encodes the specified TextStateResponse message. Does not implicitly {@link TextStateResponse.verify|verify} messages.
     * @param message TextStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITextStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextStateResponse message, length delimited. Does not implicitly {@link TextStateResponse.verify|verify} messages.
     * @param message TextStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITextStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TextStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextStateResponse;

    /**
     * Decodes a TextStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TextStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextStateResponse;

    /**
     * Verifies a TextStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextStateResponse
     */
    public static fromObject(object: { [k: string]: any }): TextStateResponse;

    /**
     * Creates a plain object from a TextStateResponse message. Also converts values to other types if specified.
     * @param message TextStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TextStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TextStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a TextCommandRequest. */
export class TextCommandRequest implements ITextCommandRequest {

    /**
     * Constructs a new TextCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITextCommandRequest);

    /** TextCommandRequest key. */
    public key: number;

    /** TextCommandRequest state. */
    public state: string;

    /** TextCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new TextCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextCommandRequest instance
     */
    public static create(properties?: ITextCommandRequest): TextCommandRequest;

    /**
     * Encodes the specified TextCommandRequest message. Does not implicitly {@link TextCommandRequest.verify|verify} messages.
     * @param message TextCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITextCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextCommandRequest message, length delimited. Does not implicitly {@link TextCommandRequest.verify|verify} messages.
     * @param message TextCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITextCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TextCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextCommandRequest;

    /**
     * Decodes a TextCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TextCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextCommandRequest;

    /**
     * Verifies a TextCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): TextCommandRequest;

    /**
     * Creates a plain object from a TextCommandRequest message. Also converts values to other types if specified.
     * @param message TextCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TextCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TextCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesDateResponse. */
export class ListEntitiesDateResponse implements IListEntitiesDateResponse {

    /**
     * Constructs a new ListEntitiesDateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesDateResponse);

    /** ListEntitiesDateResponse object_id. */
    public object_id: string;

    /** ListEntitiesDateResponse key. */
    public key: number;

    /** ListEntitiesDateResponse name. */
    public name: string;

    /** ListEntitiesDateResponse icon. */
    public icon: string;

    /** ListEntitiesDateResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesDateResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesDateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesDateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesDateResponse instance
     */
    public static create(properties?: IListEntitiesDateResponse): ListEntitiesDateResponse;

    /**
     * Encodes the specified ListEntitiesDateResponse message. Does not implicitly {@link ListEntitiesDateResponse.verify|verify} messages.
     * @param message ListEntitiesDateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesDateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesDateResponse message, length delimited. Does not implicitly {@link ListEntitiesDateResponse.verify|verify} messages.
     * @param message ListEntitiesDateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesDateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesDateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesDateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesDateResponse;

    /**
     * Decodes a ListEntitiesDateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesDateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesDateResponse;

    /**
     * Verifies a ListEntitiesDateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesDateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesDateResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesDateResponse;

    /**
     * Creates a plain object from a ListEntitiesDateResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesDateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesDateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesDateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesDateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DateStateResponse. */
export class DateStateResponse implements IDateStateResponse {

    /**
     * Constructs a new DateStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDateStateResponse);

    /** DateStateResponse key. */
    public key: number;

    /** DateStateResponse missing_state. */
    public missing_state: boolean;

    /** DateStateResponse year. */
    public year: number;

    /** DateStateResponse month. */
    public month: number;

    /** DateStateResponse day. */
    public day: number;

    /** DateStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new DateStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DateStateResponse instance
     */
    public static create(properties?: IDateStateResponse): DateStateResponse;

    /**
     * Encodes the specified DateStateResponse message. Does not implicitly {@link DateStateResponse.verify|verify} messages.
     * @param message DateStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDateStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DateStateResponse message, length delimited. Does not implicitly {@link DateStateResponse.verify|verify} messages.
     * @param message DateStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDateStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DateStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DateStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DateStateResponse;

    /**
     * Decodes a DateStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DateStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DateStateResponse;

    /**
     * Verifies a DateStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DateStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DateStateResponse
     */
    public static fromObject(object: { [k: string]: any }): DateStateResponse;

    /**
     * Creates a plain object from a DateStateResponse message. Also converts values to other types if specified.
     * @param message DateStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DateStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DateStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DateStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DateCommandRequest. */
export class DateCommandRequest implements IDateCommandRequest {

    /**
     * Constructs a new DateCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDateCommandRequest);

    /** DateCommandRequest key. */
    public key: number;

    /** DateCommandRequest year. */
    public year: number;

    /** DateCommandRequest month. */
    public month: number;

    /** DateCommandRequest day. */
    public day: number;

    /** DateCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new DateCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DateCommandRequest instance
     */
    public static create(properties?: IDateCommandRequest): DateCommandRequest;

    /**
     * Encodes the specified DateCommandRequest message. Does not implicitly {@link DateCommandRequest.verify|verify} messages.
     * @param message DateCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDateCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DateCommandRequest message, length delimited. Does not implicitly {@link DateCommandRequest.verify|verify} messages.
     * @param message DateCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDateCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DateCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DateCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DateCommandRequest;

    /**
     * Decodes a DateCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DateCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DateCommandRequest;

    /**
     * Verifies a DateCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DateCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DateCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): DateCommandRequest;

    /**
     * Creates a plain object from a DateCommandRequest message. Also converts values to other types if specified.
     * @param message DateCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DateCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DateCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DateCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesTimeResponse. */
export class ListEntitiesTimeResponse implements IListEntitiesTimeResponse {

    /**
     * Constructs a new ListEntitiesTimeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesTimeResponse);

    /** ListEntitiesTimeResponse object_id. */
    public object_id: string;

    /** ListEntitiesTimeResponse key. */
    public key: number;

    /** ListEntitiesTimeResponse name. */
    public name: string;

    /** ListEntitiesTimeResponse icon. */
    public icon: string;

    /** ListEntitiesTimeResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesTimeResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesTimeResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesTimeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesTimeResponse instance
     */
    public static create(properties?: IListEntitiesTimeResponse): ListEntitiesTimeResponse;

    /**
     * Encodes the specified ListEntitiesTimeResponse message. Does not implicitly {@link ListEntitiesTimeResponse.verify|verify} messages.
     * @param message ListEntitiesTimeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesTimeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesTimeResponse message, length delimited. Does not implicitly {@link ListEntitiesTimeResponse.verify|verify} messages.
     * @param message ListEntitiesTimeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesTimeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesTimeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesTimeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesTimeResponse;

    /**
     * Decodes a ListEntitiesTimeResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesTimeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesTimeResponse;

    /**
     * Verifies a ListEntitiesTimeResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesTimeResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesTimeResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesTimeResponse;

    /**
     * Creates a plain object from a ListEntitiesTimeResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesTimeResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesTimeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesTimeResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesTimeResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a TimeStateResponse. */
export class TimeStateResponse implements ITimeStateResponse {

    /**
     * Constructs a new TimeStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITimeStateResponse);

    /** TimeStateResponse key. */
    public key: number;

    /** TimeStateResponse missing_state. */
    public missing_state: boolean;

    /** TimeStateResponse hour. */
    public hour: number;

    /** TimeStateResponse minute. */
    public minute: number;

    /** TimeStateResponse second. */
    public second: number;

    /** TimeStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new TimeStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TimeStateResponse instance
     */
    public static create(properties?: ITimeStateResponse): TimeStateResponse;

    /**
     * Encodes the specified TimeStateResponse message. Does not implicitly {@link TimeStateResponse.verify|verify} messages.
     * @param message TimeStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITimeStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TimeStateResponse message, length delimited. Does not implicitly {@link TimeStateResponse.verify|verify} messages.
     * @param message TimeStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITimeStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TimeStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TimeStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TimeStateResponse;

    /**
     * Decodes a TimeStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TimeStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TimeStateResponse;

    /**
     * Verifies a TimeStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TimeStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TimeStateResponse
     */
    public static fromObject(object: { [k: string]: any }): TimeStateResponse;

    /**
     * Creates a plain object from a TimeStateResponse message. Also converts values to other types if specified.
     * @param message TimeStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TimeStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TimeStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TimeStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a TimeCommandRequest. */
export class TimeCommandRequest implements ITimeCommandRequest {

    /**
     * Constructs a new TimeCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITimeCommandRequest);

    /** TimeCommandRequest key. */
    public key: number;

    /** TimeCommandRequest hour. */
    public hour: number;

    /** TimeCommandRequest minute. */
    public minute: number;

    /** TimeCommandRequest second. */
    public second: number;

    /** TimeCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new TimeCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TimeCommandRequest instance
     */
    public static create(properties?: ITimeCommandRequest): TimeCommandRequest;

    /**
     * Encodes the specified TimeCommandRequest message. Does not implicitly {@link TimeCommandRequest.verify|verify} messages.
     * @param message TimeCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITimeCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TimeCommandRequest message, length delimited. Does not implicitly {@link TimeCommandRequest.verify|verify} messages.
     * @param message TimeCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITimeCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TimeCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TimeCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TimeCommandRequest;

    /**
     * Decodes a TimeCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TimeCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TimeCommandRequest;

    /**
     * Verifies a TimeCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TimeCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TimeCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): TimeCommandRequest;

    /**
     * Creates a plain object from a TimeCommandRequest message. Also converts values to other types if specified.
     * @param message TimeCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TimeCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TimeCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TimeCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesEventResponse. */
export class ListEntitiesEventResponse implements IListEntitiesEventResponse {

    /**
     * Constructs a new ListEntitiesEventResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesEventResponse);

    /** ListEntitiesEventResponse object_id. */
    public object_id: string;

    /** ListEntitiesEventResponse key. */
    public key: number;

    /** ListEntitiesEventResponse name. */
    public name: string;

    /** ListEntitiesEventResponse icon. */
    public icon: string;

    /** ListEntitiesEventResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesEventResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesEventResponse device_class. */
    public device_class: string;

    /** ListEntitiesEventResponse event_types. */
    public event_types: string[];

    /** ListEntitiesEventResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesEventResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesEventResponse instance
     */
    public static create(properties?: IListEntitiesEventResponse): ListEntitiesEventResponse;

    /**
     * Encodes the specified ListEntitiesEventResponse message. Does not implicitly {@link ListEntitiesEventResponse.verify|verify} messages.
     * @param message ListEntitiesEventResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesEventResponse message, length delimited. Does not implicitly {@link ListEntitiesEventResponse.verify|verify} messages.
     * @param message ListEntitiesEventResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesEventResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesEventResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesEventResponse;

    /**
     * Decodes a ListEntitiesEventResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesEventResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesEventResponse;

    /**
     * Verifies a ListEntitiesEventResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesEventResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesEventResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesEventResponse;

    /**
     * Creates a plain object from a ListEntitiesEventResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesEventResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesEventResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesEventResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesEventResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an EventResponse. */
export class EventResponse implements IEventResponse {

    /**
     * Constructs a new EventResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEventResponse);

    /** EventResponse key. */
    public key: number;

    /** EventResponse event_type. */
    public event_type: string;

    /** EventResponse device_id. */
    public device_id: number;

    /**
     * Creates a new EventResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EventResponse instance
     */
    public static create(properties?: IEventResponse): EventResponse;

    /**
     * Encodes the specified EventResponse message. Does not implicitly {@link EventResponse.verify|verify} messages.
     * @param message EventResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EventResponse message, length delimited. Does not implicitly {@link EventResponse.verify|verify} messages.
     * @param message EventResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEventResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EventResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EventResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EventResponse;

    /**
     * Decodes an EventResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EventResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EventResponse;

    /**
     * Verifies an EventResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EventResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EventResponse
     */
    public static fromObject(object: { [k: string]: any }): EventResponse;

    /**
     * Creates a plain object from an EventResponse message. Also converts values to other types if specified.
     * @param message EventResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EventResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EventResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for EventResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesValveResponse. */
export class ListEntitiesValveResponse implements IListEntitiesValveResponse {

    /**
     * Constructs a new ListEntitiesValveResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesValveResponse);

    /** ListEntitiesValveResponse object_id. */
    public object_id: string;

    /** ListEntitiesValveResponse key. */
    public key: number;

    /** ListEntitiesValveResponse name. */
    public name: string;

    /** ListEntitiesValveResponse icon. */
    public icon: string;

    /** ListEntitiesValveResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesValveResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesValveResponse device_class. */
    public device_class: string;

    /** ListEntitiesValveResponse assumed_state. */
    public assumed_state: boolean;

    /** ListEntitiesValveResponse supports_position. */
    public supports_position: boolean;

    /** ListEntitiesValveResponse supports_stop. */
    public supports_stop: boolean;

    /** ListEntitiesValveResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesValveResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesValveResponse instance
     */
    public static create(properties?: IListEntitiesValveResponse): ListEntitiesValveResponse;

    /**
     * Encodes the specified ListEntitiesValveResponse message. Does not implicitly {@link ListEntitiesValveResponse.verify|verify} messages.
     * @param message ListEntitiesValveResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesValveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesValveResponse message, length delimited. Does not implicitly {@link ListEntitiesValveResponse.verify|verify} messages.
     * @param message ListEntitiesValveResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesValveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesValveResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesValveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesValveResponse;

    /**
     * Decodes a ListEntitiesValveResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesValveResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesValveResponse;

    /**
     * Verifies a ListEntitiesValveResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesValveResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesValveResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesValveResponse;

    /**
     * Creates a plain object from a ListEntitiesValveResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesValveResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesValveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesValveResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesValveResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ValveOperation enum. */
export enum ValveOperation {
    VALVE_OPERATION_IDLE = 0,
    VALVE_OPERATION_IS_OPENING = 1,
    VALVE_OPERATION_IS_CLOSING = 2
}

/** Represents a ValveStateResponse. */
export class ValveStateResponse implements IValveStateResponse {

    /**
     * Constructs a new ValveStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IValveStateResponse);

    /** ValveStateResponse key. */
    public key: number;

    /** ValveStateResponse position. */
    public position: number;

    /** ValveStateResponse current_operation. */
    public current_operation: ValveOperation;

    /** ValveStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ValveStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ValveStateResponse instance
     */
    public static create(properties?: IValveStateResponse): ValveStateResponse;

    /**
     * Encodes the specified ValveStateResponse message. Does not implicitly {@link ValveStateResponse.verify|verify} messages.
     * @param message ValveStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IValveStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ValveStateResponse message, length delimited. Does not implicitly {@link ValveStateResponse.verify|verify} messages.
     * @param message ValveStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IValveStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ValveStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ValveStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ValveStateResponse;

    /**
     * Decodes a ValveStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ValveStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ValveStateResponse;

    /**
     * Verifies a ValveStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ValveStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ValveStateResponse
     */
    public static fromObject(object: { [k: string]: any }): ValveStateResponse;

    /**
     * Creates a plain object from a ValveStateResponse message. Also converts values to other types if specified.
     * @param message ValveStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ValveStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ValveStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ValveStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ValveCommandRequest. */
export class ValveCommandRequest implements IValveCommandRequest {

    /**
     * Constructs a new ValveCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IValveCommandRequest);

    /** ValveCommandRequest key. */
    public key: number;

    /** ValveCommandRequest has_position. */
    public has_position: boolean;

    /** ValveCommandRequest position. */
    public position: number;

    /** ValveCommandRequest stop. */
    public stop: boolean;

    /** ValveCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new ValveCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ValveCommandRequest instance
     */
    public static create(properties?: IValveCommandRequest): ValveCommandRequest;

    /**
     * Encodes the specified ValveCommandRequest message. Does not implicitly {@link ValveCommandRequest.verify|verify} messages.
     * @param message ValveCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IValveCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ValveCommandRequest message, length delimited. Does not implicitly {@link ValveCommandRequest.verify|verify} messages.
     * @param message ValveCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IValveCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ValveCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ValveCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ValveCommandRequest;

    /**
     * Decodes a ValveCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ValveCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ValveCommandRequest;

    /**
     * Verifies a ValveCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ValveCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ValveCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): ValveCommandRequest;

    /**
     * Creates a plain object from a ValveCommandRequest message. Also converts values to other types if specified.
     * @param message ValveCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ValveCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ValveCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ValveCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesDateTimeResponse. */
export class ListEntitiesDateTimeResponse implements IListEntitiesDateTimeResponse {

    /**
     * Constructs a new ListEntitiesDateTimeResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesDateTimeResponse);

    /** ListEntitiesDateTimeResponse object_id. */
    public object_id: string;

    /** ListEntitiesDateTimeResponse key. */
    public key: number;

    /** ListEntitiesDateTimeResponse name. */
    public name: string;

    /** ListEntitiesDateTimeResponse icon. */
    public icon: string;

    /** ListEntitiesDateTimeResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesDateTimeResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesDateTimeResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesDateTimeResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesDateTimeResponse instance
     */
    public static create(properties?: IListEntitiesDateTimeResponse): ListEntitiesDateTimeResponse;

    /**
     * Encodes the specified ListEntitiesDateTimeResponse message. Does not implicitly {@link ListEntitiesDateTimeResponse.verify|verify} messages.
     * @param message ListEntitiesDateTimeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesDateTimeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesDateTimeResponse message, length delimited. Does not implicitly {@link ListEntitiesDateTimeResponse.verify|verify} messages.
     * @param message ListEntitiesDateTimeResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesDateTimeResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesDateTimeResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesDateTimeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesDateTimeResponse;

    /**
     * Decodes a ListEntitiesDateTimeResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesDateTimeResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesDateTimeResponse;

    /**
     * Verifies a ListEntitiesDateTimeResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesDateTimeResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesDateTimeResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesDateTimeResponse;

    /**
     * Creates a plain object from a ListEntitiesDateTimeResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesDateTimeResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesDateTimeResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesDateTimeResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesDateTimeResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DateTimeStateResponse. */
export class DateTimeStateResponse implements IDateTimeStateResponse {

    /**
     * Constructs a new DateTimeStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDateTimeStateResponse);

    /** DateTimeStateResponse key. */
    public key: number;

    /** DateTimeStateResponse missing_state. */
    public missing_state: boolean;

    /** DateTimeStateResponse epoch_seconds. */
    public epoch_seconds: number;

    /** DateTimeStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new DateTimeStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DateTimeStateResponse instance
     */
    public static create(properties?: IDateTimeStateResponse): DateTimeStateResponse;

    /**
     * Encodes the specified DateTimeStateResponse message. Does not implicitly {@link DateTimeStateResponse.verify|verify} messages.
     * @param message DateTimeStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDateTimeStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DateTimeStateResponse message, length delimited. Does not implicitly {@link DateTimeStateResponse.verify|verify} messages.
     * @param message DateTimeStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDateTimeStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DateTimeStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DateTimeStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DateTimeStateResponse;

    /**
     * Decodes a DateTimeStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DateTimeStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DateTimeStateResponse;

    /**
     * Verifies a DateTimeStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DateTimeStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DateTimeStateResponse
     */
    public static fromObject(object: { [k: string]: any }): DateTimeStateResponse;

    /**
     * Creates a plain object from a DateTimeStateResponse message. Also converts values to other types if specified.
     * @param message DateTimeStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DateTimeStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DateTimeStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DateTimeStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DateTimeCommandRequest. */
export class DateTimeCommandRequest implements IDateTimeCommandRequest {

    /**
     * Constructs a new DateTimeCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDateTimeCommandRequest);

    /** DateTimeCommandRequest key. */
    public key: number;

    /** DateTimeCommandRequest epoch_seconds. */
    public epoch_seconds: number;

    /** DateTimeCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new DateTimeCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DateTimeCommandRequest instance
     */
    public static create(properties?: IDateTimeCommandRequest): DateTimeCommandRequest;

    /**
     * Encodes the specified DateTimeCommandRequest message. Does not implicitly {@link DateTimeCommandRequest.verify|verify} messages.
     * @param message DateTimeCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDateTimeCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DateTimeCommandRequest message, length delimited. Does not implicitly {@link DateTimeCommandRequest.verify|verify} messages.
     * @param message DateTimeCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDateTimeCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DateTimeCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DateTimeCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DateTimeCommandRequest;

    /**
     * Decodes a DateTimeCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DateTimeCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DateTimeCommandRequest;

    /**
     * Verifies a DateTimeCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DateTimeCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DateTimeCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): DateTimeCommandRequest;

    /**
     * Creates a plain object from a DateTimeCommandRequest message. Also converts values to other types if specified.
     * @param message DateTimeCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DateTimeCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DateTimeCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DateTimeCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ListEntitiesUpdateResponse. */
export class ListEntitiesUpdateResponse implements IListEntitiesUpdateResponse {

    /**
     * Constructs a new ListEntitiesUpdateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IListEntitiesUpdateResponse);

    /** ListEntitiesUpdateResponse object_id. */
    public object_id: string;

    /** ListEntitiesUpdateResponse key. */
    public key: number;

    /** ListEntitiesUpdateResponse name. */
    public name: string;

    /** ListEntitiesUpdateResponse icon. */
    public icon: string;

    /** ListEntitiesUpdateResponse disabled_by_default. */
    public disabled_by_default: boolean;

    /** ListEntitiesUpdateResponse entity_category. */
    public entity_category: EntityCategory;

    /** ListEntitiesUpdateResponse device_class. */
    public device_class: string;

    /** ListEntitiesUpdateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new ListEntitiesUpdateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListEntitiesUpdateResponse instance
     */
    public static create(properties?: IListEntitiesUpdateResponse): ListEntitiesUpdateResponse;

    /**
     * Encodes the specified ListEntitiesUpdateResponse message. Does not implicitly {@link ListEntitiesUpdateResponse.verify|verify} messages.
     * @param message ListEntitiesUpdateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IListEntitiesUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ListEntitiesUpdateResponse message, length delimited. Does not implicitly {@link ListEntitiesUpdateResponse.verify|verify} messages.
     * @param message ListEntitiesUpdateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IListEntitiesUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ListEntitiesUpdateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListEntitiesUpdateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ListEntitiesUpdateResponse;

    /**
     * Decodes a ListEntitiesUpdateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListEntitiesUpdateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ListEntitiesUpdateResponse;

    /**
     * Verifies a ListEntitiesUpdateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ListEntitiesUpdateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListEntitiesUpdateResponse
     */
    public static fromObject(object: { [k: string]: any }): ListEntitiesUpdateResponse;

    /**
     * Creates a plain object from a ListEntitiesUpdateResponse message. Also converts values to other types if specified.
     * @param message ListEntitiesUpdateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ListEntitiesUpdateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ListEntitiesUpdateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ListEntitiesUpdateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an UpdateStateResponse. */
export class UpdateStateResponse implements IUpdateStateResponse {

    /**
     * Constructs a new UpdateStateResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateStateResponse);

    /** UpdateStateResponse key. */
    public key: number;

    /** UpdateStateResponse missing_state. */
    public missing_state: boolean;

    /** UpdateStateResponse in_progress. */
    public in_progress: boolean;

    /** UpdateStateResponse has_progress. */
    public has_progress: boolean;

    /** UpdateStateResponse progress. */
    public progress: number;

    /** UpdateStateResponse current_version. */
    public current_version: string;

    /** UpdateStateResponse latest_version. */
    public latest_version: string;

    /** UpdateStateResponse title. */
    public title: string;

    /** UpdateStateResponse release_summary. */
    public release_summary: string;

    /** UpdateStateResponse release_url. */
    public release_url: string;

    /** UpdateStateResponse device_id. */
    public device_id: number;

    /**
     * Creates a new UpdateStateResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateStateResponse instance
     */
    public static create(properties?: IUpdateStateResponse): UpdateStateResponse;

    /**
     * Encodes the specified UpdateStateResponse message. Does not implicitly {@link UpdateStateResponse.verify|verify} messages.
     * @param message UpdateStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateStateResponse message, length delimited. Does not implicitly {@link UpdateStateResponse.verify|verify} messages.
     * @param message UpdateStateResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateStateResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateStateResponse;

    /**
     * Decodes an UpdateStateResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateStateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateStateResponse;

    /**
     * Verifies an UpdateStateResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateStateResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateStateResponse
     */
    public static fromObject(object: { [k: string]: any }): UpdateStateResponse;

    /**
     * Creates a plain object from an UpdateStateResponse message. Also converts values to other types if specified.
     * @param message UpdateStateResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateStateResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UpdateStateResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** UpdateCommand enum. */
export enum UpdateCommand {
    UPDATE_COMMAND_NONE = 0,
    UPDATE_COMMAND_UPDATE = 1,
    UPDATE_COMMAND_CHECK = 2
}

/** Represents an UpdateCommandRequest. */
export class UpdateCommandRequest implements IUpdateCommandRequest {

    /**
     * Constructs a new UpdateCommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUpdateCommandRequest);

    /** UpdateCommandRequest key. */
    public key: number;

    /** UpdateCommandRequest command. */
    public command: UpdateCommand;

    /** UpdateCommandRequest device_id. */
    public device_id: number;

    /**
     * Creates a new UpdateCommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateCommandRequest instance
     */
    public static create(properties?: IUpdateCommandRequest): UpdateCommandRequest;

    /**
     * Encodes the specified UpdateCommandRequest message. Does not implicitly {@link UpdateCommandRequest.verify|verify} messages.
     * @param message UpdateCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUpdateCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UpdateCommandRequest message, length delimited. Does not implicitly {@link UpdateCommandRequest.verify|verify} messages.
     * @param message UpdateCommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUpdateCommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateCommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UpdateCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UpdateCommandRequest;

    /**
     * Decodes an UpdateCommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UpdateCommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UpdateCommandRequest;

    /**
     * Verifies an UpdateCommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UpdateCommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UpdateCommandRequest
     */
    public static fromObject(object: { [k: string]: any }): UpdateCommandRequest;

    /**
     * Creates a plain object from an UpdateCommandRequest message. Also converts values to other types if specified.
     * @param message UpdateCommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UpdateCommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UpdateCommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UpdateCommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ZWaveProxyFrame. */
export class ZWaveProxyFrame implements IZWaveProxyFrame {

    /**
     * Constructs a new ZWaveProxyFrame.
     * @param [properties] Properties to set
     */
    constructor(properties?: IZWaveProxyFrame);

    /** ZWaveProxyFrame data. */
    public data: Uint8Array;

    /**
     * Creates a new ZWaveProxyFrame instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ZWaveProxyFrame instance
     */
    public static create(properties?: IZWaveProxyFrame): ZWaveProxyFrame;

    /**
     * Encodes the specified ZWaveProxyFrame message. Does not implicitly {@link ZWaveProxyFrame.verify|verify} messages.
     * @param message ZWaveProxyFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IZWaveProxyFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ZWaveProxyFrame message, length delimited. Does not implicitly {@link ZWaveProxyFrame.verify|verify} messages.
     * @param message ZWaveProxyFrame message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IZWaveProxyFrame, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ZWaveProxyFrame message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ZWaveProxyFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ZWaveProxyFrame;

    /**
     * Decodes a ZWaveProxyFrame message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ZWaveProxyFrame
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ZWaveProxyFrame;

    /**
     * Verifies a ZWaveProxyFrame message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ZWaveProxyFrame message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ZWaveProxyFrame
     */
    public static fromObject(object: { [k: string]: any }): ZWaveProxyFrame;

    /**
     * Creates a plain object from a ZWaveProxyFrame message. Also converts values to other types if specified.
     * @param message ZWaveProxyFrame
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ZWaveProxyFrame, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ZWaveProxyFrame to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ZWaveProxyFrame
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ZWaveProxyRequestType enum. */
export enum ZWaveProxyRequestType {
    ZWAVE_PROXY_REQUEST_TYPE_SUBSCRIBE = 0,
    ZWAVE_PROXY_REQUEST_TYPE_UNSUBSCRIBE = 1
}

/** Represents a ZWaveProxyRequest. */
export class ZWaveProxyRequest implements IZWaveProxyRequest {

    /**
     * Constructs a new ZWaveProxyRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IZWaveProxyRequest);

    /** ZWaveProxyRequest type. */
    public type: ZWaveProxyRequestType;

    /**
     * Creates a new ZWaveProxyRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ZWaveProxyRequest instance
     */
    public static create(properties?: IZWaveProxyRequest): ZWaveProxyRequest;

    /**
     * Encodes the specified ZWaveProxyRequest message. Does not implicitly {@link ZWaveProxyRequest.verify|verify} messages.
     * @param message ZWaveProxyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IZWaveProxyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ZWaveProxyRequest message, length delimited. Does not implicitly {@link ZWaveProxyRequest.verify|verify} messages.
     * @param message ZWaveProxyRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IZWaveProxyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ZWaveProxyRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ZWaveProxyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ZWaveProxyRequest;

    /**
     * Decodes a ZWaveProxyRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ZWaveProxyRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ZWaveProxyRequest;

    /**
     * Verifies a ZWaveProxyRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ZWaveProxyRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ZWaveProxyRequest
     */
    public static fromObject(object: { [k: string]: any }): ZWaveProxyRequest;

    /**
     * Creates a plain object from a ZWaveProxyRequest message. Also converts values to other types if specified.
     * @param message ZWaveProxyRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ZWaveProxyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ZWaveProxyRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ZWaveProxyRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

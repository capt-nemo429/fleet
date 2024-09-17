import { assert, isUndefined } from "@fleet-sdk/common";
import { type ByteInput, hex } from "@fleet-sdk/crypto";
import { SigmaByteReader, SigmaByteWriter } from "./coders";
import { dataSerializer } from "./serializers/dataSerializer";
import { typeSerializer } from "./serializers/typeSerializer";
import type { SType } from "./types";

export const MAX_CONSTANT_LENGTH = 4096;

export class SConstant<D = unknown, T extends SType = SType> {
  readonly #type: T;
  readonly #data: D;

  constructor(type: T, data: D) {
    this.#type = type;
    this.#data = type.coerce(data) as D;
  }

  static from<D, T extends SType = SType>(bytes: ByteInput): SConstant<D, T> {
    assert(bytes.length > 0, "Empty constant bytes.");

    const reader = new SigmaByteReader(bytes);
    const type = typeSerializer.deserialize(reader);
    const data = dataSerializer.deserialize(type, reader);

    return new SConstant(type as T, data as D);
  }

  get type(): T {
    return this.#type;
  }

  get data(): D {
    return this.#data;
  }

  toBytes(): Uint8Array {
    const writer = new SigmaByteWriter(MAX_CONSTANT_LENGTH);
    typeSerializer.serialize(this.type, writer);
    dataSerializer.serialize(this.data, this.type, writer);

    return writer.toBytes();
  }

  toHex(): string {
    return hex.encode(this.toBytes());
  }
}


/**
 * Decodes a byte input into a Sigma constant of type `SConstant<D, T>`.
 *
 * @template D - The data type of the constant.
 * @template T - The type of the constant.
 * @param value - The value to decode.
 * @returns The decoded constant or `undefined` if the value is `undefined` or decoding fails.
 */
export function decode<D = unknown, T extends SType = SType>(
  value?: ByteInput
): SConstant<D, T> | undefined {
  if (value === undefined) return;

  try {
    return SConstant.from<D, T>(value);
  } catch {
    return;
  }
}

/** @deprecated use `decode` instead */
export function parse<T>(constant: ByteInput): T;
/** @deprecated use `decode` instead */
export function parse<T>(constant: ByteInput, mode: "strict"): T;
/** @deprecated use `decode` instead */
export function parse<T>(constant: ByteInput | undefined, mode: "safe"): T | undefined;
/** @deprecated use `decode` instead */
export function parse<T>(
  constant: ByteInput | undefined,
  mode: "strict" | "safe" = "strict"
) {
  if (mode === "strict") return SConstant.from<T>(constant ?? "").data;
  if (!constant) return;

  try {
    return SConstant.from<T>(constant).data;
  } catch {
    return;
  }
}

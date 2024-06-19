import { describe, expect, it } from "vitest";
import { SigmaByteReader } from "./sigmaByteReader";
import { SigmaByteWriter } from "./sigmaByteWriter";
import { estimateVLQSize, readBigVLQ, readVLQ, writeBigVLQ, writeVLQ } from "./vlq";

describe("VLQ encoding/decoding", () => {
  const testVectors = [
    { uint: 0, bytes: Uint8Array.from([0x00]) },
    { uint: 126, bytes: Uint8Array.from([0x7e]) },
    { uint: 127, bytes: Uint8Array.from([0x7f]) },
    { uint: 128, bytes: Uint8Array.from([0x80, 0x01]) },
    { uint: 129, bytes: Uint8Array.from([0x81, 0x01]) },
    { uint: 16383, bytes: Uint8Array.from([0xff, 0x7f]) },
    { uint: 16384, bytes: Uint8Array.from([0x80, 0x80, 0x01]) },
    { uint: 16385, bytes: Uint8Array.from([0x81, 0x80, 0x01]) },
    { uint: 2097151, bytes: Uint8Array.from([0xff, 0xff, 0x7f]) },
    { uint: 2097152, bytes: Uint8Array.from([0x80, 0x80, 0x80, 0x01]) },
    { uint: 268435455, bytes: Uint8Array.from([0xff, 0xff, 0xff, 0x7f]) },
    { uint: 268435456, bytes: Uint8Array.from([0x80, 0x80, 0x80, 0x80, 0x01]) }
  ];

  function toVLQBytes(value: number) {
    return writeVLQ(new SigmaByteWriter(5), value).toBytes();
  }

  it("Should encode", () => {
    testVectors.forEach((tv) => {
      expect(toVLQBytes(tv.uint)).toEqual(tv.bytes);
    });
  });

  it("Should fail trying to encode negative values", () => {
    expect(() => {
      toVLQBytes(-1);
    }).toThrow();
  });

  it("Should decode", () => {
    testVectors.forEach((tv) => {
      expect(readVLQ(new SigmaByteReader(tv.bytes))).toEqual(tv.uint);
    });
  });

  it("Should decode empty Buffer to 0", () => {
    expect(readVLQ(new SigmaByteReader(Uint8Array.from([])))).toEqual(0);
  });

  it("Should encode/decode radom numbers", () => {
    Array.from(Array(100))
      .map(() => Math.ceil(Math.random() * 100000))
      .forEach((n) => {
        expect(readVLQ(new SigmaByteReader(toVLQBytes(n)))).toBe(n);
      });
  });

  it("Should estimate the byte size of numbers", () => {
    for (const tv of testVectors) {
      expect(estimateVLQSize(tv.uint)).toBe(tv.bytes.length);
    }
  });
});

describe("Big VLQ encoding/decoding", () => {
  function toBigVLQBytes(value: bigint) {
    return writeBigVLQ(new SigmaByteWriter(100), value).toBytes();
  }

  const testVectors = [
    { uint: 0n, bytes: Uint8Array.from([0x00]) },
    { uint: 126n, bytes: Uint8Array.from([0x7e]) },
    { uint: 127n, bytes: Uint8Array.from([0x7f]) },
    { uint: 128n, bytes: Uint8Array.from([0x80, 0x01]) },
    { uint: 129n, bytes: Uint8Array.from([0x81, 0x01]) },
    { uint: 16383n, bytes: Uint8Array.from([0xff, 0x7f]) },
    { uint: 16384n, bytes: Uint8Array.from([0x80, 0x80, 0x01]) },
    { uint: 16385n, bytes: Uint8Array.from([0x81, 0x80, 0x01]) },
    { uint: 2097151n, bytes: Uint8Array.from([0xff, 0xff, 0x7f]) },
    { uint: 2097152n, bytes: Uint8Array.from([0x80, 0x80, 0x80, 0x01]) },
    { uint: 268435455n, bytes: Uint8Array.from([0xff, 0xff, 0xff, 0x7f]) },
    { uint: 268435456n, bytes: Uint8Array.from([0x80, 0x80, 0x80, 0x80, 0x01]) }
  ];

  it("Should encode", () => {
    testVectors.forEach((tv) => {
      expect(toBigVLQBytes(tv.uint)).toEqual(tv.bytes);
    });
  });

  it("Should fail trying to encode negative values", () => {
    expect(() => {
      toBigVLQBytes(-1n);
    }).toThrow();
  });

  it("Should decode", () => {
    testVectors.forEach((tv) => {
      expect(readBigVLQ(new SigmaByteReader(tv.bytes))).toEqual(tv.uint);
    });
  });

  it("Should decode empty Buffer to 0", () => {
    expect(readBigVLQ(new SigmaByteReader(Uint8Array.from([])))).toEqual(0n);
  });

  it("Should encode/decode radom numbers", () => {
    Array.from(Array(100))
      .map(() => BigInt(Math.ceil(Math.random() * 100000000000)) * BigInt(Number.MAX_SAFE_INTEGER))
      .forEach((n) => {
        expect(readBigVLQ(new SigmaByteReader(toBigVLQBytes(n)))).toBe(n);
      });
  });

  it("Should estimate the byte size of numbers", () => {
    for (const tv of testVectors) {
      expect(estimateVLQSize(tv.uint)).toBe(tv.bytes.length);
    }
  });
});

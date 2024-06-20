import type { NonMandatoryRegisters } from "@fleet-sdk/common";
import {
  invalidBoxes,
  manyTokensBoxes,
  outOfOrderRegistersBox,
  regularBoxes,
  validBoxes
} from "_test-vectors";
import { describe, expect, it } from "vitest";
import { ErgoBox } from "./ergoBox";

describe("Construction", () => {
  it("Should construct from a vanilla object", () => {
    for (const box of regularBoxes) {
      const ergoBox = new ErgoBox(box);

      expect(ergoBox.boxId).toBe(box.boxId);
      expect(ergoBox.value).toBe(box.value);
      expect(ergoBox.ergoTree).toBe(box.ergoTree);
      expect(ergoBox.assets).toEqual(box.assets);
      expect(ergoBox.creationHeight).toBe(box.creationHeight);
      expect(ergoBox.additionalRegisters).toBe(box.additionalRegisters);
      expect(ergoBox.transactionId).toBe(box.transactionId);
      expect(ergoBox.index).toBe(box.index);
    }
  });
});

describe("Validation", () => {
  it("Should validate valid boxes", () => {
    for (const box of regularBoxes) {
      expect(ErgoBox.validate(box)).toBeTruthy();
    }

    for (const box of manyTokensBoxes) {
      expect(ErgoBox.validate(box)).toBeTruthy();
      new ErgoBox(box);
    }

    for (const box of validBoxes) {
      expect(new ErgoBox<NonMandatoryRegisters>(box).isValid()).toBeTruthy();
    }

    expect(new ErgoBox(outOfOrderRegistersBox).isValid()).toBeTruthy();
  });

  it("Should not validate invalid boxes", () => {
    for (const box of invalidBoxes) {
      expect(ErgoBox.validate(box)).toBeFalsy();
      expect(new ErgoBox<NonMandatoryRegisters>(box).isValid()).toBeFalsy();
    }
  });
});

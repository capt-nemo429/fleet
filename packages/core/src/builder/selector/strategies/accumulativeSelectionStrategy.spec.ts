import { sumBy, utxoSum } from "@fleet-sdk/common";
import { regularBoxes } from "_test-vectors";
import { describe, expect, it } from "vitest";
import { AccumulativeSelectionStrategy } from "./accumulativeSelectionStrategy";

describe("Accumulative selection strategy", () => {
  it("Should return an empty array if empty target: { nanoErgs: 0 }", () => {
    const selector = new AccumulativeSelectionStrategy();
    expect(selector.select(regularBoxes, { nanoErgs: 0n })).toEqual([]);
  });

  it("Should select inputs for nanoErgs only with target amount", () => {
    const selector = new AccumulativeSelectionStrategy();
    const target = { nanoErgs: 10000n };
    const boxes = selector.select(regularBoxes, target);

    expect(boxes).toHaveLength(1);
    expect(sumBy(boxes, (x) => x.value)).toBeGreaterThanOrEqual(10000n);
  });

  it("Should select all inputs with nanoErgs if no target amount is specified", () => {
    const selector = new AccumulativeSelectionStrategy();
    const boxes = selector.select(regularBoxes, { nanoErgs: undefined });

    expect(boxes).toHaveLength(regularBoxes.length);
  });

  it("Should select all inputs with a given token if no target amount is specified", () => {
    const selector = new AccumulativeSelectionStrategy();

    const boxes = selector.select(regularBoxes, {
      tokens: [
        {
          tokenId: "007fd64d1ee54d78dd269c8930a38286caa28d3f29d27cadcb796418ab15c283"
        }
      ]
    });

    expect(boxes).toHaveLength(3);
    expect(sumBy(boxes, (x) => x.value)).toBeGreaterThanOrEqual(10000n);
  });

  it("Should select all inputs with a given token if no target amount is specified - multiple tokenIds", () => {
    const selector = new AccumulativeSelectionStrategy();

    const boxes = selector.select(regularBoxes, {
      tokens: [
        {
          tokenId: "007fd64d1ee54d78dd269c8930a38286caa28d3f29d27cadcb796418ab15c283"
        },
        {
          tokenId: "0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b"
        }
      ]
    });

    expect(boxes).toHaveLength(4);
    expect(sumBy(boxes, (x) => x.value)).toBeGreaterThanOrEqual(10000n);
  });

  it("Should select inputs for tokens and nanoErgs", () => {
    const selector = new AccumulativeSelectionStrategy();
    const target = {
      nanoErgs: 100000n,
      tokens: [
        {
          tokenId: "0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b",
          amount: 100n
        },
        {
          tokenId: "007fd64d1ee54d78dd269c8930a38286caa28d3f29d27cadcb796418ab15c283",
          amount: 10n
        }
      ]
    };
    const inputs = selector.select(regularBoxes, target);

    expect(inputs).toHaveLength(1); // should try to reuse already selected inputs
    expect(sumBy(inputs, (x) => x.value)).toBeGreaterThanOrEqual(target.nanoErgs);
    for (const t of target.tokens) {
      expect(utxoSum(inputs, t.tokenId)).toBeGreaterThanOrEqual(t.amount);
    }
  });
});

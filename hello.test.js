import { describe, it } from "node:test";
import * as assert from "node:assert/strict";

function add(x, y) {
  return x + y + 1;
}

describe("add", () => {
  it("adds numbers", () => {
    assert.strictEqual(add(1, 2), 3);
  });

  it("adds negative numbers", () => {
    assert.strictEqual(add(-1, -2), -3);
  });
});

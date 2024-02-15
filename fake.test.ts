import { describe, it } from "node:test";
import * as assert from "node:assert/strict";

type Expect<T extends true> = T;
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Join<A extends string, B extends string> = `${A} ${B}`;
const join = (a: string, b: string): Join<typeof a, typeof b> => `${a} ${b}`;

describe("join", () => {
  it("joins two strings with a space", () => {
    type T = Expect<Equal<Join<"banana", "pancakes">, "banana pancakes">>;
    assert.strictEqual(join("banana", "pancakes"), "banana pancakes");
  });
});

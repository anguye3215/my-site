import { describe, it, expect } from "vitest";
import { parseHiscore } from "../api/hiscore";
import { SKILL_NAMES } from "../data/skills";

describe("parseHiscore", () => {
  it("parses CSV text into a skill object", () => {
    const mock = SKILL_NAMES
      .map(() => "123,99,13034431")
      .join("\n");

    const result = parseHiscore(mock);

    expect(result.attack.level).toBe(99);
    expect(result.attack.xp).toBe(13034431);
    expect(result.attack.rank).toBe(123);
  });
});

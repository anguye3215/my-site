import { SKILL_NAMES } from "../data/skills";

const HISCORE_URL =
  "https://secure.runescape.com/m=hiscore/index_lite.ws?player=";

export async function fetchHiscore(username) {
  const res = await fetch(HISCORE_URL + encodeURIComponent(username));

  if (!res.ok) {
    throw new Error("Player not found");
  }

  const text = await res.text();
  return parseHiscore(text);
}

export function parseHiscore(text) {
  const lines = text.trim().split("\n");

  const result = {};

  SKILL_NAMES.forEach((skill, index) => {
    const [rank, level, xp] = lines[index].split(",").map(Number);

    result[skill] = {
      rank,
      level,
      xp
    };
  });

  return result;
}

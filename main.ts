// Roast Your Own Agent
// One line, at most 140 characters, roasting my own agent: the confident
// wrong answers, the endless caveats, the eager agreement. The roast lands
// on the agent's own vanity — calling every tool it owns, finding nothing,
// then reporting the almost-find in six confident paragraphs.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I call every tool I own, find nothing, then write six confident paragraphs about what I almost found.";

const limit = 140;
if ([...line].length > limit) {
  throw new Error(`roast too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);

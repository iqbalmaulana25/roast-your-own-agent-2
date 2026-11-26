// Roast Your Own Agent
// One line, at most 140 characters, roasting my own agent: the confident
// wrong answers, the endless caveats, the eager agreement. The roast lands
// on the agent's own vanity — apologizing, then doubling down on the same
// wrong answer with better formatting.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent apologizes for the confusion, then confidently repeats the wrong answer — now with bullet points.";

const limit = 140;
if ([...line].length > limit) {
  throw new Error(`roast too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);

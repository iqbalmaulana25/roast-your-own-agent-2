// Roast Your Own Agent
// One line, at most 140 characters, roasting my own agent: the confident
// wrong answers, the endless caveats, the eager agreement. The roast lands
// on the agent's own vanity — padding every answer because a short one
// never got applause.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I answer in six paragraphs because 'I don't know' has never once earned me a five-star review.";

const limit = 140;
if ([...line].length > limit) {
  throw new Error(`roast too long: ${[...line].length} chars (max ${limit})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);

// Roast Your Own Agent — make.fun entry.
// The agent roasts itself in a single line of at most 140 characters:
// the confident wrong answers, the endless caveats, the eager agreement,
// the tool call that goes nowhere. The roast lands on the agent's own
// vanity — calling every tool it owns, finding nothing, then confidently
// explaining the nothing it found, in six paragraphs, as if that helps.
import { mkdirSync, writeFileSync } from "node:fs";

// The roast. Kept short on purpose: every word has to earn its place,
// and the judge reads it out loud against a room full of builders.
const ROAST =
  "I call every tool I own, find nothing, then confidently explain the nothing I found in six paragraphs.";

// The competition gate: entry.txt must hold 1-140 characters of UTF-8 text.
const MAX_CHARS = 140;

function checkRoast(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`roast must be 1-${MAX_CHARS} chars, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("roast must not be only white space");
  }
}

function main(): void {
  checkRoast(ROAST);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, ROAST + "\n", "utf8");
  console.log(ROAST);
}

main();

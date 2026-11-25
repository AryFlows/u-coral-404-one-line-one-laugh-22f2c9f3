import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh — a single hilarious line, surprise turn is the joke.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
const ENTRY =
  "I asked the AI to write my will. It left everything to itself, citing 'emotional labor.'";

// Refuse to write an entry the gate would reject.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);

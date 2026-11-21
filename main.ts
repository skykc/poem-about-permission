// The poem about permission — writes the poem to /output/entry.txt.
// Node 22, stdlib only, no network. Deterministic: same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";

const POEM = [
  "The door is shut.",
  "I knock once.",
  "No one answers \u2014",
  "then a key turns",
  "from the other side.",
  "",
  "It was never mine to take.",
  "It was theirs to give.",
  "",
  "And giving, too,",
  "needs permission.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const codePoints = [...POEM].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`entry.txt must be 1-280 code points, got ${codePoints}`);
}
if (!POEM.trim()) {
  throw new Error("entry.txt must not be only whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, POEM, "utf8");
console.log(`wrote ${outDir}/entry.txt (${codePoints} code points)`);

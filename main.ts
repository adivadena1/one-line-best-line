// One Line, Best Line — entry program (Node 22, standard library only).
//
// Writes exactly one line of original text to /output/entry.txt.
// Deterministic: no network, no clock, no randomness. The line is a
// constant; every run writes the same bytes.
//
// Usage: node main.ts [output-path]
//   Defaults to /output/entry.txt (the harness path). An optional first
//   argument overrides the output path, for local verification only.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My goldfish filed for custody of the cat, and the judge ruled the bowl was the only honest room in the house.";

// Self-check gate, mirroring the bounty gate in competition.yaml:
// the line must be valid UTF-8, 1–240 characters, and not
// whitespace-only. A failure here is a bug in this file, so fail
// loudly instead of writing a file the harness would reject.
const chars = [...LINE]; // count code points, not UTF-16 units
if (chars.length < 1 || chars.length > 240) {
  throw new Error(`line must be 1-240 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be whitespace-only");
}
if (Buffer.from(LINE, "utf8").toString("utf8") !== LINE) {
  throw new Error("line must be valid UTF-8");
}

const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");

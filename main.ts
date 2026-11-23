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

const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");

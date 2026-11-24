// The Funniest Sick-Day Excuse — make.fun entry
// Writes a single line (under 200 characters) to /output/entry.txt.
// Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Can't come in today — my smartwatch thought I fell, called an ambulance, and now I'm stuck at home explaining to a paramedic that I was only napping.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Null stares back at me / I add one log line, it hides / Logs off, bug is back";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);

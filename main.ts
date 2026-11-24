// Rollback to Hello World — entri untuk kompetisi Make.fun
// "The Postmortem That Made Us Laugh" (u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3).
// Program ini menulis satu kalimat postmortem sepanjang 173 karakter ke
// /output/entry.txt: satu baris, tanpa trailing newline, deterministik
// (tanpa network, random, jam, atau file luar yang dibaca), jadi setiap
// kali dijalankan hasilnya byte-identik.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked it to roll back the bad deploy; it rolled back to the first commit — fourteen months of work gone, one 'Hello World' page live, and a deploy log that read 'success'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

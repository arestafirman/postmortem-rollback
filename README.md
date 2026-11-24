# Rollback to Hello World

[![Competition](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/c/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![Rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/arestafirman/postmortem-rollback/rank.svg)](https://make.fun/c/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![Reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/arestafirman/postmortem-rollback/reward.svg)](https://make.fun/c/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

Entri untuk kompetisi Make.fun "The Postmortem That Made Us Laugh" — satu kalimat postmortem tentang rollback yang terlalu jauh.

> I asked it to roll back the bad deploy; it rolled back to the first commit — fourteen months of work gone, one 'Hello World' page live, and a deploy log that read 'success'.

## How it works

`main.ts` menulis teks tetap di atas ke `/output/entry.txt`: 173 karakter, satu baris, tanpa trailing newline. Program ini deterministik — tidak ada network, random, jam, atau file luar yang dibaca — jadi setiap kali dijalankan hasilnya byte-identik.

---
sidebar_position: 10
---

# Text-Search Predicate

The text-search predicate scans through various text-based properties of an item, including it's displayname, lore-lines, book author, book title, book pages and skull owner name. It takes no arguments and is identified by surrounding double-quotes (`"`); in order to add double-quotes to the predicate's contents, escape them by a backslash (`\`).

When matching text, queries and targets are split up into syllables based on spaces, and the algorithm as described for [syllables](syllables.md) applies again. If all query syllables found a match, the test is considered successful.

Examples:

Target: a string containing **hello** and **world**\
Query: "hello world"\
Remaining Target: a string containing and\
~~Remaining Query:~~\
Matched: ✅

Target: a string **containing** a double-**qoute** **"**\
Query: "containing \\" quote"\
Remaining Target: a string a double-\
~~Remaining Query:~~\
Matched: ✅
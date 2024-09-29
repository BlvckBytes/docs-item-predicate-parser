---
sidebar_position: 4
---

# Material Predicate

The material-predicate matches against the type of item, e.g. stone, dirt, enchanted book, diamond pickaxe, etc., and does not take any arguments.

## Custom Groups

In order to specify custom groups of materials, simply add exactly one syllable consiting of a questionmark (`?`), which signals that not only the shortest match should be accepted, but all resulting matches. This notation only works for the material-predicate, for two reasons: firstly, it would be impossible to avoid ambiguity otherwise, and secondly, it doesn't make sense anywhere else. When in this mode, exact matches, meaning targets which do not contain any remaining syllables, are disregarded. If you want to include those, you have to [or](or-junction.md) them in specifically. Let's look at a few examples:

Query: glass-?\
Matches: stained glass, glass panes, stained glass panes, glass bottles, etc.

Query: sign-?\
Matches: signs (all wood-types), wall-signs (all wood-types)

Query: sign-?-!wall\
Matches: signs (all wood-types)

Query: music-disc-?\
Matches: all various music discs
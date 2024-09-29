---
sidebar_position: 1
---

# Syllables

The main building-blocks of predicate-expressions are the syllables, which may massively shorten the resulting string by allowing to leave out parts of the target identifier, and thereby make the process of inputting desired filters less tedious. Another advantage would be that one only needs to remember parts of said identifiers, and can thereby explore a massive realm of available matches in a playful and stepwise manner.

## Definition

Since I do not plan on constraining the supported character-set to merely ASCII, I'll have to define syllables in terms of what they aren't, rather than the set of characters which *do* make them up. They do **not** begin with a digit (`0-9`), and they **cannot** contain hyphens (`-`), since the latter is what separates individual syllables; every character other than the first may be a digit.

Examples:

- ✅ abc2de3
- ❌ 2abcde
- ❌ two-syllables

## Identifiers

As mentioned, individual syllables now string together using hyphens (`-`) to make up an identifier matching unit. Before diving into the process of matching syllables against identifiers as retrieved from mojang's language-files, let's first look at a few examples, as well as normalization, like it's automatically performed internally.

| Raw Identifier | Normalized Result |
|:--------------:|:-----------------:|
| Minecart with Chest | Minecart-with-Chest |
| Music Disc C418 - mellohi | Music-Disc-C418-mellohi |
| Example "one" | Example-'one' |
| Example_(two) | Example-\[two\] |

Spaces as well as underscores are interpreted as delimiters to syllables within identifiers and thereby become replaced by hyphens. Double-quotes are substituted by single-quotes, just as parentheses are substituted by brackets - both to avoid ambiguity with syntax soon to be discussed.

## Matching

When testing an identifier matching unit, made up of one or more syllables joined by hyphens (`-`), against an identifier, the following simple yet effective algorithm takes place; let's call the former *query*-syllables, and the latter *target*-syllables. An identifier matches if no more pending *query*-syllables remain - namely if each and every one of them could be matched against a part of said identifier. Once a *query*-syllable matched, it's exact occurrence within the *target* is removed, so that no other remaining *query*-syllable can match against it. Let's look at a few examples.

Target: Mine**car**t-with-**Ches**t\
Query: car-ches\
Remaining Target: Mine-t-with-t\
~~Remaining Query:~~\
Matched: ✅

Target: **Dia**mant**bru**stplatte\
Query: dia-bru\
Remaining Target: mant-stplatte\
~~Remaining Query:~~\
Matched: ✅

If the same syllable is contained multiple times, all occurrences need to match one-to-one.

Target: **A**-**Onl**y-Once\
Query: a-a-onl\
Remaining Target: y-once\
Remaining Query: a\
Matched: ❌

Target: **A**-**Onl**y-Twice-**A**\
Query: a-a-onl\
Remaining Target: y-twice\
~~Remaining Query:~~\
Matched: ✅

### Negation

In the case that a syllable is not to be matched within the *target*, but should rather not exist for the match to be a success, simply prepend it by a bang (`!`). The algorithm is similar to positive testing, just that the query *is removed if it doesn't exist*, and *kept if it exists*, as to leave a remainder, and thereby cause a mismatch. Let's look at an example with multiple target candidates.

Target 1: Acacia-**Sign**\
Target 2: Bamboo-**Hang**ing-**Sign**\
Query: sign-!hang\
Remaining Target 1: Acacia\
Remaining Target 2: Bamboo-ing\
~~Remaining Query Target 1:~~\
Remaining Query Target 2: !hang\
Matched Target 1: ✅\
Matched Target 2: ❌\

Negation becomes highly useful when constructing custom material-groups, as discussed on the corresponding [predicate page](material-predicate.md).
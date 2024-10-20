---
sidebar_position: 11
---

# Exact Mode

Exact mode is not a predicate by itself, but rather an operator which can be prepended to any other expression. Once entered, **all** enchantments and potion-effects need to be matched against by the contained predicates; each predicate removes it's match from the respective list, and at the end, the lists have to be empty for the whole exact expression to be considered a match. While, for simple expressions, prepending a single predicate may suffice, complex expressions can be prepended by making use of [parentheses](parentheses.md), since this operator is evaluated *before* various logical junctions.

| Language | Identifier |
|:--------:|:----------:|
| en_us | exact |
| en_gb | exact |
| de_de | exakt |
| de_at | exakt |
| de_ch | exakt |
| zh_cn | 精确 |

## Examples

Input: exact unbreaking\
Result: All items which only contain the unbreaking enchantment

Input: exact regeneration\
Result: All potions which only contain the regeneration effect

Input: exact unbreaking [or](or-junction.md) thorns\
Result: All items which either only contain the unbreaking enchantment, or all items which contain thorns and possibly also other enchantments

Input: exact(unbreaking [or](or-junction.md) thorns)\
Result: All items which either only contain the unbreaking- or only the thorns-enchantment

Input: exact(unbreaking [and](and-junction.md) thorns)\
Result: All items which only contain both the unbreaking- and the thorns-enchantment
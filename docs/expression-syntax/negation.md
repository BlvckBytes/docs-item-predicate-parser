---
sidebar_position: 19
---

# Negation

The negation operator flips the result of it's applied-to expression, and thereby converts matches into mismatches and vice-versa. It is always executed first, right after the [exact mode](exact-mode.md) operator, if not otherwise specified by the use of [parentheses](parentheses.md).

| Language | Identifier |
|:--------:|:----------:|
| en_us | not |
| en_gb | not |
| de_de | nicht |
| de_at | nicht |
| de_ch | nicht |
| zh_cn | 不是 |
| tr_tr | hayır |
| fr_fr | non |

## Examples

Input: not thorns\
Result: An item which does not contain the thorns enchantment on any level

Input: not exact unbreaking 2\
Result: An item which does not only contain unbreaking on level 2

Input: not(dia-pick or iron-pick)\
Result: All item-types but a diamond- or an iron-pickaxe
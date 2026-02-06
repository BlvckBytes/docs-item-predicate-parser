---
sidebar_position: 18
---

# And Junction

The and junction results in a match if **both** it's left- **and** it's right-hand-side expressions evaluate to a match. It is evaluated before the [or](or-junction.md) and after the [negation](negation.md), if not otherwise specified by the use of [parentheses](parentheses.md).

| Language | Identifier |
|:--------:|:----------:|
| en_us | and |
| en_gb | and |
| de_de | und |
| de_at | und |
| de_ch | und |
| zh_cn | 和 |
| tr_tr | ve |
| fr_fr | et |

## Examples

Input: unbreaking 2 and thorns 3\
Result: An item containing both unbreaking 2 and thorns 3

Input: thorns 2 and not dia-ches\
Result: An item which contains thorns 2 and is not of type diamond chestplate
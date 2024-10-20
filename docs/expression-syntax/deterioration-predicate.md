---
sidebar_position: 6
---

# Deterioration Predicate

The deterioration predicate matches against the remaining durability of an item and takes two arguments: the minimum used-up durability in percent, and the maximum used-up durability in percent. Without any arguments, this predicate results in all items which can experience deterioration, like tools, etc.

:::info
This predicate matches on how much the item has been used, not how much use is left; these two are easy to confuse.
:::

| Language | Identifier |
|:--------:|:----------:|
| en_us | deterioration |
| en_gb | deterioration |
| de_de | Abnutzung |
| de_at | Abnutzung |
| de_ch | Abnutzung |
| zh_cn | 恶化 |

## Examples

Input: deterioration\
Result: All items which can experience deterioration

Input: deterioration * 0\
Result: Only completely unused items

Input: deterioration 30\
Result: All items which have been at least 30% worn down

Input: deterioration * 30\
Result: All items which have been at most 30% worn down

Input: deterioration 20 50\
Result: All items which have been worn down between 20% and 50%
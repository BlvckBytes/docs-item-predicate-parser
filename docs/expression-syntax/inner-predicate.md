---
sidebar_position: 13
---

# Inner Predicate

The `inner-...` predicate matches against the contents of inventory-bearing items, such as
shulker-boxes or bundles; it will cause a mismatch on items which do not have an inventory.

In order to use this operator on more complex expressions, make use of parentheses, as follows:

```
inner-some(...)
inner-all(...)
```

If the expression is simple enough such that there would be no ambiguity, parentheses may
be dropped.

## Inner-Some Predicate

Only some of the items within the item's inventory need to match for the predicate to be satisfied.

| Language | Identifier |
|:--------:|:----------:|
| en_us | inner-some |
| en_gb | inner-some |
| de_de | innen-manche |
| de_at | innen-manche |
| de_ch | innen-manche |
| zh_cn | inner-some |
| tr_tr | inner-some |
| fr_fr | inner-some |

### Examples

Input: inner-some Stone\
Result: All items which contain at least one item of stone in their inner inventory

## Inner-All Predicate

All of the items within the item's inventory need to match for the predicate to be satisfied.

| Language | Identifier |
|:--------:|:----------:|
| en_us | inner-all |
| en_gb | inner-all |
| de_de | innen-alle |
| de_at | innen-alle |
| de_ch | innen-alle |
| zh_cn | inner-all |
| tr_tr | inner-all |
| fr_fr | inner-all |

### Examples

Input: inner-all Stone\
Result: All items which have all slots in their inner inventory occupied by stone

Input: inner-all(Stone or Air)\
Result: All items whose inventories are made up of either vacant slots or slots with stone

Input: inner-all(Stone or Air) and not inner-all Air\
Result: All items whose inventories are made up of either vacant slots or slots with stone but are not completely empty
---
sidebar_position: 7
---

# Enchantment Predicate

The enchantment predicate matches against the enchantments contained either on an enchantable item, or an enchanted book and takes a single argument, representing the enchantment level. An item is considered to be a match as soon as it contains the desired enchantment, which does not rule out other concurrent enchantments; if this behavior is not desired, have a look at and then enter [exact mode](exact-mode.md).

## EcoEnchants Support

This plugin supports querying for enchantments stemming from [EcoEnchants](https://github.com/Auxilor/EcoEnchants); it does so simply by accessing the `display-name` of each enchantment as configured and treating it like a usual translation, right after having stripped various formatting-notations off of it.

## Examples

Input: unbreaking\
Result: All items which contain unbreaking on any level

Input: unbreaking 2\
Result: All items which contain unbreaking on level 2

Input: unbreaking >2\
Result: All items which contain unbreaking on a level higher than 2

Input: unbreaking \<5\
Result: All items which contain unbreaking on a level lower than 5
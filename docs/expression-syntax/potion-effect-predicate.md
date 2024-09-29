---
sidebar_position: 8
---

# Potion-Effect Predicate

The potion-effect predicate matches against both the base- as well as further custom-effects on various potions, such as standard-, splash- and lingering-potions; it takes two arguments, namely the effect's amplifier (level) as well as it's duration.

## Examples

Input: regeneration\
Result: All potions which contain the regeneration effect on any level

Input: regeneration 2\
Result: All potions which contain the regeneration effect on level 2

Input: regeneration >2\
Result: All potions which contain the regeneration effect on any level greater than 2

Input: regeneration \<5\
Result: All potions which contain the regeneration effect on any level less than 5

Input: regeneration * 3:00\
Result: All potions which contain the regeneration effect on any level with a duration of three minutes

Input: regeneration * >3:00\
Result: All potions which contain the regeneration effect on any level with a duration above three minutes.

Input: regeneration * \<5:00\
Result: All potions which contain the regeneration effect on any level with a duration below five minutes.

Input: strength 2 3:30\
Result: All potions which contain the strength effect on level 2 with a duration of three minutes and thirty seconds.

(And all missing combinations of the above)
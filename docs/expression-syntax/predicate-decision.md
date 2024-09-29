---
sidebar_position: 2
---

# Predicate Decision

While it might not be immediately obvious how specific predicate types are decided upon, based on nothing but the aforementioned syllable matching units, the process is rather simple. All existing target identifiers are tested against, which results in a list of matches; the match shortest in length is considered to be the final result. This list of matches is displayed to the user by the means of command completion, while the final result preview is rendered in the action-bar.

:::info
Predicates can be stringed together without the use of any logical junctions, as [and](and-junction.md) is always assumed by default - this saves on typing effort and improves readability.
:::

## Arguments

Each final target is aware of it's internal predicate type, which will then be parsed, including it's optional numeric arguments; no predicate *requires* arguments. If they're appended, they will be collected - otherwise, the next predicate may begin immediately afterwards. While there are no argument-types other than numbers, they provide a hand-full of additional features, as can be read up on [here](numeric-arguments.md).

## Collision Prefixes

There are many categories, like Material, Enchantment, Potion-Effect, Music-Instrument, etc., and so there may be collisions between identifiers accross groups. A perfect example would be that of the effect *Strength* and the enchantment *Power*, which both translate as *Stärke* into German. The system can no longer distinguish between the predicate type, rendering all but one of the colliding members unusable; to circumvent this, collision-prefixes have been introduced, which are automatically added and hard-coded per language, to ensure uniformity. The previously mentioned case would result in `[Effekt]-Stärke` and `[Verzauberung]-Stärke`; using them would be as simple as `eff-stär` or `verz-stär`. In the highly unlikely and rather unplausible case of collisions within the same group, an incrementing index `[N]-` will be prepended; better safe than sorry.
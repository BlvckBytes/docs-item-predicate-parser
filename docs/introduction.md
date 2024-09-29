---
sidebar_position: 1
slug: /
---

# Introduction

:::tip
Since I tried to go into as much detail on the reasons, working-principles as well as the syntax itself, this documentation might seem a bit long-wided at first glance; feel free to skip over passages and focus on what's of interest to *you* specifically; but make sure to not miss out on any crucial syntax-details, as to allow for it's expressivity to fully unfold. There are multiple examples for each predicate, operator and logical junction on their respective pages.
:::

The main motivation to realize this idea of mine was to express *non-critical* matching patterns, called *predicates*, without the use of any cryptic internal names, all while abstaining from complex and technical syntax. Many widely used frameworks still operate on numeric item- and sub-ids, only allow for pre-defined or manually configurable groups, and cannot account for more nuanced criteria like enchantments, potion-effects, durability, displayname, lore, music-disc types, trim-patterns, etc.; but why? I couldn't stand these severe limitations, so I'm trying to put forth a completely new way of expressing item-predicates.

:::warning
As hinted at above, I do **not** advise to employ this API whenever matches are absolutely critical, e.g. comparing items in quests or shops. The reason is simple: while expressions achieve full precision and execute deterministically, the simple fact that they operate on data as retrieved from a mojang language-file and parse user-input by selecting the shortest match containing all syllables, it is **impossible** to guarantee constant behavior when up- or downgrading the server's minecraft version; unintentional alterations are thereby unavoidable.
:::

This project is **not** meant as a library to be shaded and possibly even relocated into your own project, but rather intended as an API provided at runtime by depending on the corresponding plugin, for several reasons: version-specific language-files have to be downloaded from mojang's index, which should just be done once, as to not cause needless traffic; predicates may only operate above a certain version, e.g. music-instrument matching, and are loaded conditionally; all uses of predicates shall feel and behave equally accross the whole server - especially realtime result rendering, completion, expansion and error-messaging.

By adhering to the above advice, the API-consumer not only allows for a central point of configuration and comparison decision, but also delegates the responsibility of version-specific implementation-details; simply think of this API as a function which takes in a string representing the predicate-expression, throws if malformed, and otherwise returns a function which returns `true` or `false` based on it's input `ItemStack` - a clean and simple abstraction.
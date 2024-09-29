---
sidebar_position: 3
---

# Configuration

The configuration-file `config.yml` is located within the plugin's folder and makes use of expressions as implemented by [BBConfigMapper](https://github.com/BlvckBytes/BBConfigMapper) and [GPEEE](https://github.com/BlvckBytes/GPEEE); these projects are not yet properly documented, but nonetheless offer immensely flexible and rich configuration options, which is why I do not want to fall back on merely using static key-value pairs. I've been meaning to put more effort into making my config-mapper accessible, but just haven't gotten around to it yet - please be patient.

:::warning
For now, just either be open to play around with configuration expressions and revert by deleting the file if you're stuck, or only touch simple scalar values and adjust them to your liking, thereby avoiding unintentional messups.
:::

Environment variables and their types are always inserted as comments above their corresponding keys; they are available on said key, as well as all of it's members. The file-global lookup table, `lut`, serves as a central point for either data-deduplication, mappings, or merely hiding long values (like head-textures) behind user-friendly names. You can add as many keys and sections to it as you want to, and access them anywhere by using the `lut` environment variable with the indexing operator `[...]`.

Since I'm a big advocate of self-documenting naming and have given my very best to give each key a proper name, I believe that - especially in combination with looking at ingame representations - configuring items and messages to your liking should be rather easily doable.
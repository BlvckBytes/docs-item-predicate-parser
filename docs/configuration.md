---
sidebar_position: 5
---

# Configuration

The configuration employs my own language called [ComponentMarkup](https://blvckbytes.github.io/docs-component-markup/docs/intro). While most of the syntax should be rather human-readable and despite there being exact error-messages on malformed input, I am always here to help you customize your config - contact me at Discord via the handle `blvckbytes`.

## Variables

The following portrays an example of the current scheme of configurable variables, with
explanatory comments at each step; I'm a bit in a hurry, so this has to do for now.

```yaml
variables:
  # Name to be used with %<name>% in predicates
  Compostable-Items:
    # XMaterial-constant of the icon in the paginated UI
    icon: BONE_MEAL
    # Name of parent-variables to inherit from
    parents:
    - Flowers
    - Plants
    - Leaves
    # Custom names for different languages
    names:
      # Languages only have to start with the key, as to set multiple countries at once
      # In this case: DE, AT and CH
      GERMAN: Kompostierbare-Items
    # List of materials to block from being inherited via this variable's parents
    blockedMaterials:
    - BAMBOO
    # List of materials, where one of them has to match for the variable to match
    materials:
    - BEETROOT_SEEDS
    - DRIED_KELP
    - GLOW_BERRIES
    - GRASS
    - MELON_SEEDS
    - PITCHER_POD
    - PUMPKIN_SEEDS
    - OAK_SAPLING
    - SPRUCE_SAPLING
    - BIRCH_SAPLING
    - JUNGLE_SAPLING
    - ACACIA_SAPLING
    - DARK_OAK_SAPLING
    - CHERRY_SAPLING
    - SMALL_DRIPLEAF
    - SWEET_BERRIES
    - TORCHFLOWER_SEEDS
    # And so on, and so forth...
```

You may also see a field called `variablesServerPort` - it is highly recommended to leave this
set at `-1` (disabled) for the time being, since it represents a simple REST web-server for a
web-ui I have not yet released builds of publicly and maybe never will.
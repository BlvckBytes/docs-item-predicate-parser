---
sidebar_position: 7
---

# External Support

The following plugins are supported to resolve language-keys by, meaning that the entries they add to the server's central `Registry` will also show up when building predicates; the display-names they provide are sanitized, meaning that all color-values - be it legacy, hex or even MiniMessage XML-format - are stripped off, in order to ensure a seamless experience.

If a key could not be resolved neither internally nor externally, a warning will be logged on startup; use these messages to report back, so that further support can be added. There's no limitation to how many plugins may be supported, as integration requires only a few lines of code.

## EcoEnchants

https://github.com/Auxilor/EcoEnchants

## ExcellentEnchants

https://github.com/nulli0n/ExcellentEnchants-spigot
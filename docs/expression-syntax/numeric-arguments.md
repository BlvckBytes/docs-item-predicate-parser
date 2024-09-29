---
sidebar_position: 3
---

# Numeric Arguments

A predicate may support the use of one or more numeric arguments; these are the syntax-features available.

:::info
Not all arguments support all features! Don't worry, you will be notified by the system as soon as an argument cannot be handled by it's corresponding predicate. **All** arguments **do** support wildcards.
:::

## Value Wildcards

Simply put an asterisk (`*`) to signal that the value does not matter. Omitted arguments are by default wildcards, but one does have to explicitly input them once a successor argument is to be specified. For example, `my-predicate` is equivalent to `my-predicate *`, but `my-predicate 5` is not equivalent to `my-predicate * 5`.

## Time Duration

On arguments which are of unit "seconds", e.g. potion-effect duration, one could calculate durations manually: 8 minutes and 30 seconds = `8*60 + 30 = 510`. This process is rather tedious, which is why time-notation has been introduced: simply put `8:30`, as familiarly rendered by the client itself. This syntax supports up to three blocks, to also specify hours, as in `3:12:30`; zero-values may be left out, resulting in `3::30`.

## Comparison Mode

By default, values have to *equal* to the argument. To specify a range, simply prepend greater-than (`>`) or less-than (`<`). For example, all values greater than 30: `>30`; all values smaller than 20: `<20`.
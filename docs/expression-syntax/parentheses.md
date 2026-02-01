---
sidebar_position: 19
---

# Parentheses

Parentheses can be used to specify any arbitrary evaluation precedence other than the default by wrapping statements in a beginning opening-parenthesis `(` and an ending closing-parenthesis `)`. While completing commands, parentheses do not need to be balanced, but when dispatching the corresponding command and thereby finally parsing the input, non-balanced parentheses will result in an error-notification, as to prevent unintentional behavior.

## Examples

Input: not(unbreaking or thorns)\
Result: All items which do not contain unbreaking or thorns

Input: (unbreaking and thorns) or (efficiency and fortune)\
Result: All items which either contain both unbreaking and thorns, or both efficiency and fortune
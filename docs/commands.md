---
sidebar_position: 2
---

# Commands

This page outlines all existing commands, their permissions as well as their use-cases.

## Test Item

While the main intention of this command is to quickly and visually debug predicates, it also serves well as a means to get to know the parser on a detailled level; simply run the command to apply a predicate written in any of the supported languages on the *item currently held in your hand*, and get a colorized match-result displayed to you in the chat.

* Permission: `command.ipp.test`
* Usage: `/ipp test <language> <predicate>`

![ipp test](/img/ipp_test.png)

## Reload Configuration

Live-reload the configuration without having to restart the server.

* Permission: `command.ipp.reload`
* Usage: `/ipp reload`
# Terminology
This page contains definitions for various terms commonly used throughout the docs.

## Internal
Refers to classes, methods or other resources that are only intended to be used *directly* by Epip itself, and not any mods that have it as a dependency.

Also see [visiblity](#visibility).

## Visibility
Refers to visibility of class methods and fields in the OOP sense.

In Epip, fields prefixed with `_` (single underscore) are considered "private" and meant only for internal use within the class, while fields prefixed with `__` (two underscores) are considered "protected" and meant only for use within the class hierarchy. **In both cases, these fields are not part of the public API and are not meant to be used within your own mod, and are subject to change without notice.**

Lua does not have an explicit concept of visibility for table fields. Though it is possible to create "private" fields via upvaluing, this is avoided in Epip due to readability issues as well as the fact that private visibility is arguably a bad practice in modding - it actively prevents other modders from patching parts of your mod to achieve compatibility / interoperability. For the same reason, local functions and variables are avoided, and only used for niche cases.

As such, visibility in Epip is merely a suggestion. It is possible to use/override invisible fields as a last measure if you truly deem it necessary, however it's a better idea to first contact the Epip team to see if the public API can be adjusted to your needs, as that could lead to cleaner solutions that would better satisfy current and future developers.

## Invisible Fields
Refers to usage of `private`, `protected` or `package` fields in a context where they trigger the `invisible` diagnostic.

## Namespacing
As is the case for modding the base game, numerous resources in Epip use string identifiers which in turn can lead to collisions. Namespacing refers to prefixing such identifiers to avoid accidentally overwriting resources from other Epip mods.

The Library and Feature classes contain wrapper methods for certain core libraries to automatically prefix identifiers used.

Most methods in Epip do not throw nor warn when you attempt to register some resource under an ID already in use - this is by design so as to allow easy overriding.
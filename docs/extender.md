# Custom Extender Build
A custom, experimental build of the extender is available for Epip which enables various features that would otherwise not be possible. This extender fork is entirely optional to use; features that require it will simply not be available if it is not used.

You can download the build [here](https://drive.google.com/drive/folders/1I2ZXjbDkZW-WCdC_-EBNQvimHVHssL7m?usp=drive_link) and the repository for it is [here](https://github.com/Pinewoodpip/ositools/tree/pip). You'll need to put `libprotobuf-lite.dll` in the same directory as well; you can alternatively get it from an existing Extender installation in `\AppData\Local\DOS2ScriptExtender\ScriptExtender`.

!!! warning
    **The custom build is experimental - use it only at your own risk.**

    In multiplayer, all players should use the same extender build (either Norbyte's or this custom one). Switching between them is safe.

## Exclusive Features and Changes

Epip features that require the fork:

- Dialogue auto-listening: makes you automatically listen to dialogues that other players start nearby.
    - Requires `UIObjectManagerPlayerState`'s `ActiveUIObjectHandle` and `UIUnderMouseCursor` to be writeable. More information [available in #epipeline](https://discord.com/channels/607369048929468456/1109024195528118282/1156471924675858443)
- Graying out unavailable skills on the hotbar works properly for mods that hook the `GetSkillAPCost` event
    - Without the fork, support for this can be added by replicating the hook's logic for `Character.Hooks.GetSkillAPCost`

Features for modders:

- Added `Ext.IO.Enumerate()`, `Ext.IO.IsFile()` and `Ext.IO.IsDirectory()`, and fixed file saving not working if it would require creating more than one directory along the way. More info on the [PR](https://github.com/Norbyte/ositools/pull/130).
- `Ext.IsPipFork` (field, not a function) is `true` if the fork is installed, which may be used to condition logic
- [Relaxed RO restrictions on UIObjectManager fields](https://github.com/Norbyte/ositools/commit/acee921d406725ce61dd4121b031dc209a91a9cc)
- Attempting to call an unregistered console command now shows a warning; this is useful to realize faster that you've made a typo, are calling the command from the wrong context, didn't register it properly, or ran into any other shenanigans
- The console now says "Entering lua client console" when entering the client context (previously it would erroneously still say "server")
- Documentation of `OsirisExtenderSettings.json` is more up-to-date
- Removed the unnecessary "Synching user vars to unknown game object" message, as valid scenarios of this exist (ex. if the object is on another level)
- Added `Ext.Stats.Math.GetSkillAPCost()`, which respects any Lua hooks
- Fixed `Ext.Behavior.Skill.AddById()` crashing the game when the skill is used

## FAQ

### Why is the dll so much bigger?

The regular extender dll is the updater, which downloads the actual extender to `\AppData\Local\DOS2ScriptExtender\ScriptExtender` and loads it. The fork ships the extender directly (no automatic updates), and if you compare it against the regular builds in the AppData folder, the sizes are roughly equal.
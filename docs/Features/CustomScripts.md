# Custom Scripts
Epip features a "Custom Scripts" system that allows loading additional Lua scripts without needing to include them in a mod pak. This has various convenient uses:

- Writing quick test scripts for your own mods.
- Making small personal customizations to Epip features without needing to make a pak mod.
- Creating true client-side scripts, as in, scripts that are not required by all players in multiplayer.

## Usage

To add a custom script:

1. Create the `.lua` file(s) in `Documents/Larian Studios/Divinity Original Sin 2 Definitive Edition/Osiris Data/Epip/CustomScripts`
2. Go to Epip settings ingame, scroll down to "Custom Scripts", press the add button, and enter the script's filename
    - Custom scripts may be declared client-side, server-side, or for both contexts ("shared")
3. Save & reload to load the scripts

You may toggle or reorder scripts through the buttons in the menu.

By default, scripts are loaded into Epip's mod table. At the moment this can only be customized by editing the `CustomScripts.json` configuration file.

## Example Scripts

A collection of custom scripts I've written upon request can be found in the [EpipCustomScripts repository](https://github.com/PinewoodPip/EpipCustomScripts), including some examples of using Epip APIs.

This section features scripts that may be useful to users.

### [Censor Container Gore](https://github.com/PinewoodPip/EpipCustomScripts/blob/main/CensorContainerGore.lua)

Replaces UI textures when looting containers that have gore-y graphics (corpses, spiders, etc.) with neutral ones. In other words, censors the `containerInventory` UI.

### [Disable FoW Toggle](https://github.com/PinewoodPip/EpipCustomScripts/blob/main/DisableShroudFeature.lua)

Disables Epip's toggle for the fog of war. This is a workaround for a hardware-specific crash caused by the engine functions that Epip calls for this setting.

### [Party Pooper](https://github.com/PinewoodPip/EpipCustomScripts/blob/main/PartyPooper.lua)

Disables all shenanigans that occur on April Fools and Pip's Birthday (January 26th). Does not affect Derpy's birthday.

### [Allow AI to use all skills](https://github.com/PinewoodPip/EpipCustomScripts/blob/main/RemoveAICannotUseFlags.lua)

Removes the `CannotUse` AI flag from all skills in the game, including modded ones. Note that generally this flag is used very consciously by designers, as such don't expect the NPCs to use those skills coherently.

### [Skill Nuzlocke](https://github.com/PinewoodPip/EpipCustomScripts/blob/main/SkillNuzlocke.lua)

Adds a warning to tooltips of skills that are already memorized by some character in your party. Can be used for self-imposed challenges of not repeating skills throughout your party. Does not actually prevent multiple characters from memorizing a specific skill.

### [Respec commands](https://github.com/PinewoodPip/EpipCustomScripts/blob/main/Respec/Server.lua)

Adds the server console commands for respeccing specific stats of a character. If `[character GUID]` is omitted, the host's active character will be used.

- `!respecattributes [character GUID]`: Respec all attributes
- `!respecabilities [character GUID]`: Respec all combat & skill abilities
- `!respeccivils [character GUID]`: Respec all civil abilities
- `!respec [character GUID]`: Open the Magic Mirror

### [Combat Log Saver](https://github.com/PinewoodPip/EpipCustomScripts/blob/main/SaveCombatLog/Client.lua)

Allows saving combat log messages to files in the `Osiris Data/Epip` folder. Useful for inspecting combat shenanigans, even long after the combat has ended.

Use the console command `!savecombatlog` to save the combat log to `Osiris Data/Epip/CombatLog.json`.

Additionally, `Osiris Data/Epip/CombatLog_<fight index>.json` files will be automatically saved for each combat fought in the session, with the messages of that combat.

### [Skillbook notifications replacer](https://github.com/PinewoodPip/EpipCustomScripts/blob/main/SkillbookNotifications/Client.lua)

Replaces the "You've already learned this skill" message boxes with notifications that do not require manual closing.

Useful for rapidly mass-learning skills using features like Quick Find, as you won't need to pay attention to which ones you've already learnt and have to close multiple message boxes.

### [Higher camera limit](https://github.com/PinewoodPip/EpipCustomScripts/blob/main/HigherCameraLimit/Client.lua)

Raises the min/max limits for Epip's camera zoom settings, and automatically reduces max camera distance when it is your turn in combat.

### [Higher Quick Loot range](https://github.com/PinewoodPip/EpipCustomScripts/blob/main/HigherQuickLootRange/Client.lua)

Expands the search range of Quick Loot and makes it instantly use the max range.

### [Custom Stats example](https://github.com/PinewoodPip/EpipCustomScripts/blob/main/CustomStats)

Example of adding stats to the "Keywords & Misc." character sheet tab, including a user var to track stat values that need to be calculated on the server.
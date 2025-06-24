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
# Epip Encounters

Epip Encounters is a UI and quality-of-life mod targeting [Epic Encounters 2](https://docs.google.com/document/d/1du5jE2dyDE4B4-Za0wolfe50ReeKXqkqdgG5FvAwKTo/edit#), though it may also be used with the vanilla Divinity: Original Sin 2 game or other overhaul mods.

Epip introduces dozens of usability improvements to the vanilla UIs, as well as numerous new custom UIs to fulfill needs the vanilla ones cannot. See [the features section](#features) for details.

Vast customization for Epip's features is available through an in-game settings menu - you may use as many or as few features as you deem necessary.

## Download

!!! info "Language warning"
    Only English is fully supported, however crowdsourced translations are underway.  
    Localization is only possible thanks to the members of our community. If you want to help with it - feel free to contribute at [our translation spreadsheet](https://docs.google.com/spreadsheets/d/1N590ol649CFsMJuU2-UNBqWQP8cONo-CnUCcC1TPRgI/).

    You may change the language from the "General" tab in the Epip settings menu.


**[Requires Norbyte's Script Extender](https://github.com/Norbyte/ositools/releases/tag/updater_v5)**. Load after both EE Core and EE Origins, if you have them.

!!! info ""
    **[Latest version, v1068](patchnotes.md). (26/11/23)**

See the [patchnotes](patchnotes.md) page for patchnotes. Development updates and nightly builds are posted in the [*#epipeline*](https://discord.gg/SevYmQc573) channel on the Epic Encounters discord server.

<details markdown="1">
<summary>Credits & Special Thanks</summary>
Special thanks to:

- Ameranth for initial programming help as well as the amazing moddability of EE, without which I (Pip) would've probably never gotten into modding
- Norbyte for the Script Extender, it's fantastic UI features as well as continuous support with all engine-related questions
- Elric for his help with designing and drawing new UIs
- Cathe for contributing to the feature showcases on this website, as well as some code and proof-reading
- Derpy Moa for motivation and initial ideas
- JoienReid, Clibanarius, AQUACORAL and the entire EE community for continuous support, inspiration and bug-reporting

Translators:

- Cathe & JoienReid: Russian
- Ferocidade: Brazilian Portuguese
- Ainsky: Simplified Chinese
</details>

## Features
Below is a non-exhaustive list of features; I suggest browsing the latest [patchnotes](patchnotes.md) to get up to speed with latest additions. Exploring the in-game settings menu is another good way of getting familiar with the mod's features.

Major features have dedicated pages for them, accessible from the sidebar, or from the following index:

- **[UI Improvements](Features/UI.md)**: list of improvements to the vanilla UIs as well as some custom UIs.
- **[Vanity](Features/Vanity.md)**: exhaustive cosmetic equipment transmog, featuring a menu to browse item models, dyeing, persistent outfits, and much more.
- **[Inventory Multi-Select](Features/InventoryMultiSelect.md)**: allows you to mass-select items in the inventory UIs to speed up inventory management.
- **[Quick Find](Features/QuickFind.md)**: filterable view of the party inventory, making searching for specific items easier.
- **[Hotbar Groups](Features/HotbarGroups.md)**: customizable, shared groups of additional hotbar slots.
- **[Settings Menu](Features/SettingsMenu.md)**: an in-game settings menu that allows you to toggle and customize most of Epip's features.
- **[Animation Cancelling](Features/AnimationCancelling.md)**: speeds up combat by ending player skill animations early.
- **[Epic Encounters QoL](Features/EpicEncountersQoL.md)**: page covering features only applicable to Epic Encounters 2.
- **[Camera](Features/Camera.md)**: settings to tweak the game camera.
- **[Tooltip Adjustments](Features/TooltipAdjustments.md)**: miscellaneous improvements and fixes to tooltips.
- **[Codex](Features/Codex.md)**: an in-game reference for various topics.
- **[Vanilla Fixes](Features/VanillaFixes.md)**: fixes to various vanilla client issues.

The rest of this page covers changes and additions that are not (yet) categorized into other pages.

## UI

### Target Status Bar
Health bar shown at the top of the screen has been reworked to look better and include more information. More details [here](Features/UI.md#target-status-bar).

![Health bar showcase](Features/img/ui/health_bar.png)

### Player Portraits
Player portraits display has also received some love, most notably - the list of statuses will now wrap onto a second row to prevent it from obscuring most of your screen. More details [here](Features/UI.md#player-portraits).

![Player Info preview.](Features/img/ui/player_info.png)

Epip makes dozens of other UI changes to improve your experience. You can read about the rest of them [here](Features/UI.md).

### Hotbar
Epip offers a heavily improved Hotbar UI, featuring multiple bars, custom "action" buttons in the bottom left, and numerous functions to make hotbar management easier.

Press the `+`/`-` buttons by the panel in the bottom left to add/remove bars. More details on Hotbar improvements are available in its [dedicated subpage](Features/Hotbar.md).

<center>![Hotbar preview.](Features/img/hotbar/hotbar_extra_slots.png)</center>

## Vanity
Epip features an easy-to-use cosmetic item customization system, including armor transmogrification, custom color dyes, quick outfit swapping and auras, all through a new UI integrated into the character sheet.

Right-click an equipped item and select *"Vanity..."* in its context menu to get started, or learn more at the dedicated [feature page](Features/Vanity.md).

![Maddest drip, by a Cathe](img/showcase/drip.png)

### Settings Menu
Epip includes its own [Settings Menu](Features/SettingsMenu.md) UI full of options to toggle or customize its features - you may use as few or many of them as you want.

<center>![Options menu.](Features/img/settingsmenu/general_tab.png)</center>

The Epip Settings Menu also makes custom hotkeys possible, including ones for Meditate & Source Infuse (in Epic Encounters), an examine hotkey, as well as binding the 12 "action buttons" from the [Hotbar UI](Features/Hotbar.md).

Custom hotkeys include Meditate, Source Infuse, as well as binding the 12 "action buttons" from the Hotbar UI.

![Input menu.](img/showcase/options_input.png)

Additionally, the difficulty can now be changed to/from tactician freely at any time. The side effects of this have not been studied well, but everything appears to work fine with the exception of already-initialized enemies having missing HP and consumables(?).

### Tooltip Adjustments
Tooltips have received numerous fixes and improvements, displaying a lot of information in a clearer manner. You can read about them at their [dedicated page](Features/TooltipAdjustments.md).

![A weapon tooltip showing the changes.](img/showcase/weapon_tooltip.png)

### Inventory
A setting has been added to enable infinite carry weight for all party members. You can also enable automatic identifying of items, optionally not requiring any Loremaster.

Consumable items, like mushrooms and food, no longer require you to use them once for them to show their effects in the tooltip.

### Combat Log
You may now filter out individual types of messages in the combat log by right-clicking it. Certain messages have been reworded for clarity and can now "merge" if they happen in quick succession, improving readability. You can also clear the log from the context menu.

![Combat log filters.](img/showcase/combat_log.png)

### World Tooltips
A keybind has been added to make world item tooltips toggleable, so you don't need to hold alt all the time. A setting also exists to disable these tooltips for empty containers and bodies, as well as to make clicking the tooltips open containers rather than pick them up.

Additional settings exist to enable these tooltips for more item types, as well as to highlight certain types of items with a customizable color.

![Color-coded world item tooltips. Containers, equipment and consumables are all highlighted in a different, customizable color.](img/showcase/world_tooltips.png)

### Quick Examine
A "Quick Examine" panel can be opened with a custom hotkey (defaults to `V`). This panel is mainly used to show the effects enemies have from the "Epic Enemies" feature, but it also displays the character's artifacts, useful to check your ally's effects in multiplayer. More information will be added to this panel in the future.

![Quick Examine.](img/showcase/quick_examine.png)

## Miscellaneous
- Certain client-side vanilla issues have been fixed. You may read about them at their [dedicated page](Features/VanillaFixes.md).
- A setting exists to auto-listen to nearby dialogues, enabled from the "Notifications" tab (*"Auto-Listen Dialogues"* and *"Auto-Listen Range Limit"*).
    - Due to limitations within the Extender, this requires a special build from [here](extender.md).
- A setting exists to highlight empty slots in the container inventory UI upon hovering over them, for consistency with the party inventory. Can be enabled from the "Inventory" settings tab (*"Highlight Empty Container Slots"*).
- Discord Rich Presence customization is available in the "Miscellaneous UI" settings tab.
    - You may set both lines to anything you desire, or have them be set to show your character level, area and overhaul.
    <center>![Overhaul mode.](Features/img/discordrichpresence/overhaul_mode.png)</center>

## For developers
Epip is built using numerous libraries, making client-side scripting and UI modding easier. This site's documentation of them is heavily WIP. Every UI touched by Epip has a lua table with wrapper APIs to manipulate it. Additionally, multiple utility libraries are available:

- `Client`: contains queries relating to the client.
- `Client.UI`: holds all UI tables; too many to list individually, below are the most noteworthy ones.
    - `Client.UI.MessageBox`: allows you to open your own message boxes, which may also prompt for user string input.
    - `Client.UI.ContextMenu`: allows creating custom context menus, with numerous new types of elements and support for nested menus. Warning: it's a very old API and does not hold up to current standards. A rewrite is pending.
- `Client.Flash`: contains utility methods for handling Flash elements from lua.
- `Client/Server.lua`: allows registering osiris symbol listeners from the client.
- `Osiris`: provides a cleaner way of working with Osiris symbols: allows passing of extender entity objects in place of GUIDs, returning from user queries, and unpacking DB query results.
- `Character`, `Item`: libraries with numerous utility functions for the related entity types.
- `Text`: utility methods for working with text, featuring a super-versatile `Format` function for dealing with those pesky html font tags.
- `Timer`: self-explanatory. Also supports tick-based timers.
- `Coroutine`: improved coroutine table, with the ability to sleep coroutines, either for a certain amount of time or until a condition is met.
- `Color`, `Vector`: utilities for dealing with colors and vectors.
- `Client.UI.Generic`: allows for the creation of UIs using only lua. Work-in-progress (well, everything here is, in a way).
- `Epip`: main mod table, containing registered Features.

### Developer Features
#### Debug Cheats

If the extender developer mode is available, a cheats context menu is added to characters, with numerous handy functions like:

- Copying GUID to clipboard
- Teleporting
- Kill/resurrect
- Next-gen godmode ("Pipmode"), with infinite AP and 0 skill cooldowns
- Adding Flexstats, ExtendedStats, attributes/abilities, skills, statuses and more
- Spawning all artifacts, or specific treasure tables or templates

![Debug context menu.](img/showcase/debug_cheats.png)

#### Debug Display
In developer mode, a UI widget with FPS, TPS and mod version info can be enabled from the settings. This widget can be dragged around.

![Debug display.](img/showcase/debug_display.png)

#### Debug Menu
In developer mode, a menu with debugging options for Features can be opened using a keybind (defaults to LCtrl + F). You can use it to change logging levels, disable features, and run tests. Your logging/debug settings are persistent.

![Debug menu.](img/showcase/debug_menu.png)

#### AI Logging
An option exists to log AI scoring to the console.

![AI logging.](img/showcase/ai_logging.png)

#### Console Commands
A few miscellaneous console commands are added:

- `!bruteforceuitypes`: client-side; attempts to find the TypeIDs of all UIs currently instanced, including custom ones
- `!soundtest`: client-side; plays all the sounds defined in the UI sounds lsx and shows their name. Useful for inspiration.
- `!animtest`: server-side; plays all human female animations on the currently controlled character. Cannot be interrupted once started!
- `!worryaboutsuchsmallthings`: tests the performance between `EsvCharacter:HasTag()` and `Osi.IsTagged()`
- `!testactionhandles`: tests string handles for "actions" from the Stats library.
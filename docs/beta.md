
!!! warning "**REQUIRES V58 OF THE EXTENDER!**"

You can get v58 by creating a file named `ScriptExtenderUpdaterConfig.json` in the same folder where you've put the extender, with the contents:

```json
{
	"UpdateChannel": "Devel",
	"TargetVersion": "58.0.0.0",
	"TargetResourceDigest": "865944034be3219ff36f1632fc0ae610234be8519cb17c88a9c7f8c2e5d7a62c",
	"Debug": true
}
```

# v1064 Beta
[Latest upload, 26/2/23](https://drive.google.com/file/d/1ni4yRX1TTPHxrqZ0mhbrimyFGXkdZsPL/view?usp=sharing).

!!! Warning "Intended extender version: `865944034be3219ff36f1632fc0ae610234be8519cb17c88a9c7f8c2e5d7a62c` (see instructions above)"

# 26/2/23 upload:

- Reworked the settings menu to be more easily expandable and changed the appearance of settings
	- Tabs with a large amount of options (ex. Epic Enemies) might suffer stutters while opening them, similar to Quick Find. This is an issue with the UI framework that will be investigated later.
- Added an armor type filter to Quick Find (for filtering robes/leather/plate armor)
- Added a setting that controls how character level is displayed in the health bar; defaults to the old behaviour (below bar, when holding shift). Includes the option to hide the level entirely.
- Reworked the "show minimap" setting; should be more reliable now
- Added a setting to blacklist skills from being cancelled when using the "animation cancelling" feature
	- A more user-friendly way of adding entries will be added in a future version

Fixes:

- Fixed custom hotbar/skill slots not showing cooldown
- Fixed a bug that affected numerous features that used Osiris databases
- Fixed "immersive meditation" and other EE UI features not working for characters that have been transformed
- Fixed "release mouse to greatforge" text not disappearing when moving an item from the world onto a UI while within the socket screen
- Fixed "quick swap" context menu option appearing on items that are not equipped
- Fixed unique items being dismantle-able with "mass dismantle"
- Fixed item context menus being misreported as character menus if you hovered over a character recently
	- Possibly fixes the issue of options like "mass dismantle" not appearing
- Fixed developer-only settings being visible outside of developer mode

On the technical side:

- Added `AMER_Loot_CallistoAnomaly` icon - special thanks to Elric
- Fixed UserVars not synchronizing
- Fixed `GameState.IsLoading()` not working
- Various changes to annotations
- Features can now declare which game states they should be enabled with, which will cause `:IsEnabled()` to return `false` under unsupported states
- Rewrote `Osiris` table. Tuples returned from DB queries are now an object and it's possible to distinguish DBs/QRYs with the same name but different arity
- Rewrote `Item.GetEquipmentSubtype()` to be a lot more reliable, and fixed it failing to identify clubs
- Generic: added the Texture element
- Generic: added more prefabs for "form elements", and added inheritance to them
- Unsubscribing event listeners with an ID that is not subscribed no longer triggers a warning

# 8/2/23 upload:

- You can now drag + drop items onto the Greatforge socket
- "Status effects" in the vanilla examine UI is now capitalized, for consistency with the rest of the headers

- Began removing gameplay changes from original versions of Epip. Since the focus of the mod has changed over to UI and QoL, gameplay changes no longer make sense within the project, and impede it from being used without EE.
	- Removed changes to Battle Stomp, Bless, Circle of Protection, Escapist, Siphon Poison, Summon Soul Wolf, Wolf Howl, Break the Shackles
	- Removed changes to Elementalist damage
	- Removed changes to Leper
	- Reverted stat changes to Boneshaped Crusher and Soul Wolf
	- Removed Sight and Hearing FlexStat entries

- Fixed hit chance not displaying when hovering over characters in combat
- Fixed some items being grayed out in hotbar groups

On the technical side:

- Removed swf overrides for `textDisplay` and `notification` UIs, as well as cleaned up their respective lua scripts
- Fixed error messages from using keys the game doesn't support (ex. media keys)
- Added annotations for basic stats objects

# 5/2/23 upload:

- Added a new UI that shows a filtered view of the party inventory
	- Opened with Ctrl+F by default (configurable in input menu)
	- Can filter equipment by slot, consumables by scrolls/grenades/potions, and skillbooks by school
	- Equipment can be searched by their stat boosts (supports only vanilla modifiers for now)
	- Right-click an equipped item to open the UI with filters set to that item's slot, to quickly replace gear
- Clicking a status on a player portrait or Quick Examine will now center the camera on the status's source (if any)
- Added more strings to translate, many of them already translated to Russian
- "Copy identifier" keybind no longer copies template GUID
- Fixed "Extract Runes" not working in Extender v58
- Fixed some small visual issues with custom item slots in UIs
- Fixed some console log spam

On the technical side:

- Fixed Stats.MeetsRequirements() not working with attribute requirements
- Added `ShowItemTooltip()` to Tooltip lib
- Generic:
	- The HotbarSlot prefab is a now more general-purpose inventory-like slot, showing rarity, rune slots, and with options to block drag-and-drop
	- Fixed culling issues with IggyIcon
	- Added support for scrollRects
	- ComboBox events now throw their option ID instead of just index
	- Added SetChildIndex()

# 1/2/23 upload:

- Added Russian translation by Cathe & JoienReid
	- Currently only spans the settings menu and some vanity features
	- Since playing in non-English currently has certain issues with add-ons, a new setting has been added to display text from Epip in a language different than the game's.

- Added a B/H progress display to Quick Examine, showing health % accumulated towards the next stack
- Enemy health bar now shows character level by the character name
- Level-up progress in character sheet is now shown with a percentage
- Added settings for disabling most of the tooltip adjustments Epip offers
- Surface tooltips should be more reliable
- Combat log improvements are now enabled by default
- Enemy health bar now uses a vanilla-ish appearance if EE is disabled (no fancy gargoyle boss frame)
- B/H indicators in player portraits are now only shown in combat (instead of when unsheathed) and are disabled if EE is disabled
- Disabled the save/load improvements during game over to fix a softlock (no known workaround)
- Removed support for vanity dyes from before v1063; items still using them will appear purple
- Fixed tooltips of player portraits and XP bar not working properly
	- Due to engine jank, these will not be affected by the delay settings
- Fixed engine actions (attack, flee, etc.) being draggable to hotbar hotkeys
- Fixed some small visual bugs with the enemy health bar

On the technical side:

- Moved various functionality from EnemyHealthBar to a feature (EnemyHealthBarExtraInfo)
- Fixed TextLib's Format() not accepting decimal text sizes
- Added a setting to simulate EE being disabled (applies to Epip scripts only)
- Removed checks for Improved Hotbar mod
- Added an event for statuses being applied to CharacterLib
- Added a feature to generate Osiris event annotations for lua
	- The IDE annotations folder in Epip has been updated to include them
	- This might be expanded to support PROCs and QRYs later
- Added an OOP library for working with classes
	- Feature now supports registering and fetching class tables in an elegant manner
- Started splitting up Feature into 2 classes to fix interface segregation violation
- Fixed OsirisLib calls not working with 0 parameters
- Various script cleanups (mostly for Hotbar and EnemyHealthBar)
- Added TSKs for older settings
- Changed TSK integration in Feature: the keys are no longer required to be a handle; they can be any string, letting you index the TranslatedStrings table with auto-completion
	- TSK objects now have a GetString() method to resolve them
	- `TSK` table within Feature will be deprecated soon
- Added a feature to play client-side effects upon hovering over entities
- Added libraries for EE-related mechanics (BatteredHarried, SourceInfusion), and moved relevant methods to them
- Fixed `Character.GetEquippedItems()` not returning the advertised type
- Added a DatabaseSync feature for synchronizing database contents to the client
	- Might be merged into the osiris library in the future
- Added a UserVars library, with Feature integration
- Added support for function signatures without bodies to the doc generator, fixed subclasses not being detected properly
- Added methods related to drag-drop to PointerLib
- Generic:
	- Moved annotations to separate file, solving various IDE warnings
	- Added support for tweening

### 4/1/23 upload:

Quick Examine improvements:

- Added a setting to set the default position of the UI; this position will be used after reloading
- Added a statuses bar (toggleable)
- Added a light stroke to the resistances text
- Added a B/H display
	- This will become more fleshed out in the future, with a display of the "progress" towards the next stack as well.

On the technical side of things:

- QuickExamine: split up some parts of BasicInfo into separate widgets
- Generic: fix downsizing IggyIcon
- Generic: added a Status prefab, for displaying status effects
- TooltipLib: added `ShowStatusTooltip()`

### 1/1/23 upload:

- Hotbar: fixed hotkeys settings being deleted in some cases

Quick Examine:

- Added display for AP, SP, and initiative
- Added resistances display
- Added numerous settings: opacity, width/height, hiding certain widgets. You can find them in a new tab in the settings menu
- Minor graphical touch-ups

On the technical side of things:

- Generic: fixed ScrollList not supporting centering of elements
- Generic: added LabelledIcon prefab
- QuickExamine: added Widget interface
- StatsLib: added data of immunites
- TooltipLib: added support for status tooltips
	- No way to create your own currently (technical limitation).

### 30/12/22 upload:

- In the settings menu, the current tab's button is now highlighted (replicating vanilla behaviour)
- Added an option for animation-cancelling for player characters

- Fixed QuickExamine not being draggable all the way to the right of the screen
- Fixed the "Epip Settings" button not appearing on all tabs of the vanilla settings menu
- Fixed Trickster's Repertoire unsneaking characters that do not have the talent

On the technical side of things:

- Added an `Image` library with PNG decoding
- Added ImageViewer feature, intended for displaying results of images decoded with `Image`
- Improved reliability of `Client.GetMousePosition()` (replaced with Ext implementation)
- Added a Set data structure
- Added `Vector.ScalarProduct()`
- Added a `Color` element to Generic
- Added `ClearElements()` to Generic's Grid
- Added `SetVisible()` to Generic elements
- Added `Set` and `Map` settings types
- Added a debug hotkey for copying the pointer's world position
- Added a `Interfaces` library for common interfaces
- Added `setTexture()` to movieclips in Generic (temporary, will likely become its own element type)

Improvements to doc generator script:

- Added support for net messages
- Better support for hooks/events
- Private methods are now hidden
- Symbols are now sorted by context (first Shared, then Client, then Server)
- Can now be used externally (importable)
- Added support for overloads

### 22/11 upload:

- Added an "Auras" tab to Vanity, where you can apply visual effects to your character, onto various bones
- Removed the meme loading screen option
- Fixed the draggable area of Quick Examine being smaller than intended
- Skill tooltips for zone-type skills no longer erroneously say their range is increased by Astrologer's Gaze
- Quick Examine now shows your ally's skills and their cooldowns
	- Tooltips will show the damage as if they were used by them, but Epip features (like viewing which source infusions are available) likely do not work properly currently
- Fixed the "points available" blip in the character sheet not being hidden when within vanity, if you had a lot of tabs registered

On the technical side of things:

- Added IDE annotations for the global Ext functions (like `_C()`)
- Added a "DefaultTable" data structure (inspired by python's defaultdict; a table with a default value when indexing)
- Removed UI override for the settings menu (LeaderLib menu might work now? no promises)
- Debug menu now supports fiddling with the UI scripts to an extent
- Osiris table now parses parameters for DB set/delete operations
- InputLib: added methods to fetch game input event definitions and bindings
	- The ancient script previously used to do this has been removed, along with some other redundant ones
- Improvements to the doc generation script (which shall debut here soon); it can now export "subclasses" of a class (the auxiliary data structs)
- Added a generic developer input binding for hooking quick tests onto it
- TooltipLib: added a way to render custom formatted tooltips
- TooltipLib: added a method to render skill tooltips, as if the engine were doing it
- Minor cleanups of some scripts
- Fixed iggy icons in Slot elements being culled out for Generic UIs
- Added methods to check if a component is an item/char to EntityLib
- You can now specify a player index when using methods in PointerLib (though I do not know in which scenario multiple pointers can exist; splitscreen co-op perhaps?)

### 31/10 upload:

- The "infinite carry weight setting" should now work properly for clients that join mid-session
	- Other features that face problems in multiplayer are possibly suffering from the same bug and will be fixed in the future

Hotbar:

- Fixed layouts being saved for summons and party followers
- Layouts should now be synchronized better in multiplayer, and survive a lua reset
- Layouts now save when the pause menu is opened, rather than when the game is paused (which basically never happens in multiplayer)
	- There's probably a dozen other features that made this mistake; they will be fixed in the future

- Reworked the settings menu and underlying system
	- Your previous setting values will be lost
	- The settings menu is now separate from the vanilla UI, prevent conflicts with mods that may overwrite the vanilla one
	- Settings have been reorganized into separate tabs
	- Settings are now saved per-profile, in `Osiris Data/Epip/{profile GUID}/`

- Vanity internals have been reworked, with multiple changes as a result:
	- Dyes no longer require deltamods and thus should no longer be lost to shenanigans or bloat the savefile
	- Transmogrifying no longer requires the item to be transformed and therefore should no longer have any gameplay side effects
		- As a result, you are no longer prevented from transmogrifying GB5 sets
	- Transmogrifying weapons into another type (ex. dagger -> bow) will have them show in the proper location while sheathed
	- Added an option to keep the icon while transmogrifying
	- Fixed an issue with dyes not being loaded properly from oufits
	- Added an option to hide any armor slot's visuals
		- Due to an engine quirk, changing visibility is not properly reflected in the character sheet until you switch characters
	- Your previous dyes might be lost upon updating
- Fixed icons on the minimap flickering

On the technical side of things:

- The localization system now supports contextual metadata for ease of translation, and integration for it has been added to the Feature table
	- You can define TSKs in `TranslatedStrings` and query them by indexing `TSK` within the feature
	- TSKs defined this way support aliases that are valid only within the context of the feature, preventing collisions
- Added a python script to import/export Epip translation files in `Mods\EpipEncounters_7d32cb52-1cfd-4526-9b84-db4867bf9356\Story\RawFiles\Python\localization.py`
- Added `GetTurnOrder()` to Combat library
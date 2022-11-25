
!!! warning "**REQUIRES V58 OF THE EXTENDER!**"

You can get v58 by creating a file named `ScriptExtenderUpdaterConfig.json` in the same folder where you've put the extender, with the contents:

```json
{
	"UpdateChannel": "Devel",
	"Debug": true
}
```

## v1064
[Latest upload, 22/11/22](https://drive.google.com/file/d/1ni4yRX1TTPHxrqZ0mhbrimyFGXkdZsPL/view?usp=sharing).

22/11 upload:

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

31/10 upload:

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
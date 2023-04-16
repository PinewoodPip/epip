
!!! warning "Extender devel version required"
    Requires extender v59. Intended version: `bcd9f11eb14b2bab225365f38b6af6dec005cfa21c0737437c50c3ee9d747443`
    To get it, use the following `ScriptExtenderUpdaterConfig.json`:
    `
```json
{
	"UpdateChannel": "Devel",
	"TargetResourceDigest": "bcd9f11eb14b2bab225365f38b6af6dec005cfa21c0737437c50c3ee9d747443",
	"TargetVersion": "59.0.0.0",
	"Debug": true
}
```

# v1065 (16/04/23)
[Download here](https://drive.google.com/file/d/1NLEjkgnKlc6r4dDZw_AUHT1cdXVKhTmL/view?usp=sharing).

With this version, EE has been removed as a dependency. It's now possible to use Epip in a vanilla playthrough and the main features will work. There may be quirks that need ironing out, ex. references to features or settings that only make sense in EE - please report these.

This also means that the remaining gameplay changes have been removed. If you wish to keep them, use [this mod](https://drive.google.com/file/d/1HqxEzlXaZa4AMRpCybDPvZ2IyFjAL0J0/view?usp=sharing).

- Custom status UI elements are now bigger (ex. in Quick Examine)
- Increased delay for animation cancelling to try to work around new issues of skills being cancelled
- Reworked the stats tab; should be less prone to bugging out in multiplayer now
    - Also fixed the gold & splinter stat
- Fixed hotbar loadouts not working
- The incompatible mods warnings now show on every load, rather than once per playthrough

By the way, due to logistics changes, you will have to re-enable immersive meditation in the settings, if you had it on.

On the technical side of things:

- Largely decoupled the logic for custom keybinds away from the UI itself (onto InputLib)
- Added `EpicEncounters.DeltaMods` library with dynamically-generated data about EE deltamods
- Added DragDropStateChanged event to Pointer lib
- Equipped artifacts are now tracked using UserVars instead of tags
- Generic:
    - Added `RepositionElements()` to Grid
    - Added `Destroy()` to UI instances
- Fixes and additions to PlayerInfo methods
- Moved various functionality from Feature up to its parent class Library (UserVars, ModVars)
- Fixed some warning spam related to status icons
- Various new checks to disable EE features when playing vanilla
- Fixed setting ID conflict issues in the settings menu
- Various fixes to debug cheats

## 1/4/23 upload (old)

Epip Encounters is now 2 years old! Thank you all for 2 years of patience. We've heard your complaints about the decision to remove gameplay changes from 2021, and have made the decision to preserve them through a future, separate add-on.

To make up for all the drama, we are happy to present a new gameplay-oriented patch, the first one since 2021 !

We know the rune crafting system has been underwhelming for years now, which is why this patch introduces a brand new system just for them. It consumes more materials, but should be far more engaging and rewarding. **Simply right-click a rune material and select the new option in the dropdown menu to get started.**

This patch contains numerous other gameplay and balance changes, as well as the usual dose of UI stuff:

- Removed innate skill slots; slots for memorizing skills can now only be obtained through the memory attribute, so as to increase its value
    - This change only applies to new playthroughs so as not to screw up your loadout
- Wands now have a chance to appear with the "Shuffle" modifier, causing their spells to cycle in random order
- Added a new talent, "Trickster's Repertoire", initially featured in the hit videogame "Darby's EE2 Tweaks":
    - With Trickster's Repertoire, you sneak and become invisible for free at the start of combat, until the start of your first turn. At the end of your turn in subsequent rounds, sneak for free. You always stop sneaking at the start of turns. Additionally, your special arrows count as basic attacks and you have a 33% chance to recover a special arrow after shooting it.
- Used those 2 fancy triangle rulers to straighten the character sheet a bit
- Animation Cancelling is now 100% client-side, slightly faster, and works with some spells that had issues before (ex. arrow spray, staff of magus, barrage)
    - Let us know if this buff is too much
- Vanity dyes now scale with finesse instead of wits
- The health bar when you hover over a character now displays health and armor values
- Added Shigeru Miyamoto as a secret recruitable party member
- Added 2 new types of fishing rods from vanilla that were previously unused/unobtainable
- Changed how hotbar row count and visibility is saved
    - This might not work in multiplayer due to extender shenanigans
- Changing rows in the hotbar now deals 10% of your max health as damage, per stack of elementalist
- Statuses in the status bar are now sorted in the order that they are sorted
- Removed the "cinematic combat" option
- Buffed the lizard bust slider from 0.5x to 0.75x (+ 0.1x per Entropy embodied)
- Removed some april fools stuff, we're not joking around anymore

Fixes:

- Non-english languages should no longer have broken artifact descriptions
    - The cause was fetching the TSKs during module load, which causes a bug that overwrites the string.
- Fixed Quick Examine not being openable for the same character twice in a row
- Fixed vanity dyes not applying to slots that vanilla armor (without transmog) would hide/mask
- Fixed error if an item was transmogged into a template that no longer existed

On the technical side of things:

- Reworked the doc generation script again; the doc appearance has changed considerably, and now supports hotlinking to functions
- Added support for multiple inheritance to classes made with the OOP library
- Generic UIs can be fetched by string ID now (oops)
- Added `Character.Events.ItemEquipped`
- Updated the Generic example script and documentation
- Net payloads now have methods to fetch the associated character and/or item
- Added `Osiris.GetFirstFact()`
- Added new calls to CharacterLib: `IsOrigin()`, `IsPlayer()`
- Small changes to annotations and rewrites of code that was using deprecated stuff
- Began work on a new cheats system and UI
- Added `Client.IsCursorOverUI()` and `Client.GetActiveUI()`
- Added `Input.IsTextFieldFocused()`
- Added skillstate-related methods to CharacterLib
- Reworked hotbar prepared/casting skill checks to not require server information
- Added `Client.Events.SkillStateChanged`
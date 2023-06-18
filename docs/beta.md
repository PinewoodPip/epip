

!!! warning "Extender devel version required"
    Requires extender v60. Intended version: `40e17c6be9aae8f879e13a5e1d771cb07d7e672b8e7e10b55bc1691ffb9eb1e0`
    To get it, use the following `ScriptExtenderUpdaterConfig.json`:
```json
{
	"UpdateChannel": "Devel",
	"TargetResourceDigest": "40e17c6be9aae8f879e13a5e1d771cb07d7e672b8e7e10b55bc1691ffb9eb1e0",
	"TargetVersion": "60.0.0.0",
	"Debug": true
}
```

## v1066 (18/06/23 upload)

[Download here](https://drive.google.com/file/d/15RiJMqoJHTiF8ptIPzjHshTCzQu34ZKW/view?usp=sharing).

This version adds an option to replace the status bar by your character's portraits with a new custom UI - see "Alternative status display" in Player Portrait settings.

![Settings for the alternative status bar.](Features/img/ui/settings_playerportraits_statusesdisplay.png)

This by default behaves mostly the same as the regular status bar, with the major exception being no animations for statuses being removed - they might be added if there is demand.

The major advantage of this new UI is status sorting, which was thought to be too difficulty to implement in Larian's UI. Right-click a status to set its sorting priority.

![Context menu for a status.](Features/img/ui/statusesdisplay_contextmenu.png)

Statuses with a high priority show up in the leftmost position, while statuses with a low priority show up in the rightmost position. Statuses that are tied in priority show in order of application. **You may use this to position important or informational statuses (ex. Source Generation duration or tiered statuses) in a consistent position.**

You may also filter out statuses in this context menu to hide them. Holding shift will temporarily disable this filter, letting you quickly check your hidden statuses and unhide them if necessary. You may also manage this filter within the settings menu.

---

### Other changes and additions

Added a new hotkey that will show BH over the heads of nearby characters while held ("Show B/H" binding; unbound by default):
![BH Overheads feature.](Features/img/ui/bhoverheads.png)

---

Added an option to display common flags in the enemy health bar ("Display common flags" setting). It will display the following information (if applicable) while holding shift:

- Whether Comeback Kid is available
- Whether Attack of Opportunity is available
- Whether the character is flagged as incapable of joining combat
- The character's AI archetype (ranger, rogue, etc.)
- These flags are not shown if the character doesn't have them

![Flags display feature.](Features/img/ui/flagsdisplay.png)

---

Holding shift while looking at equipment tooltips will now display information about their EE gear modifiers, such as their tier. This display will be improved in the future to be more user-friendly.

![Deltamods tiers display.](Features/img/ui/tooltipadjustments_deltamodstiersdisplay.png)

---

Quick Find has received various improvements:

- Added a filter for Culled items
- Added a filter to hide equipped items
- The UI is now draggable (from the top area)
- The UI is now closed automatically when you drag an item into the Greatforge socket (which you can now do thanks to an extender fix)

---

You can now manually set an icon for an item with Vanity Transmog using the new "Set Icon" button. The "Keep Icon" toggle remains and works alongside it. This uses a new "Icon Picker" UI.

![Icon Picker UI.](Features/img/ui/iconpicker.png)

### Other small changes

- Server-side animation cancelling now has special logic to handle some previously problematic skills
    - Projectile, Jump, MultiStrike, ProjectileStrike and Target skills now have special logic to handle cases like multi-projectile/hit skills
- "+X% Weapon Elemental Damage" tooltip now works for any deltamod that adds damage, not just ones from EE
- Hotbar groups can now be resized through their context menu - you can thank Cathe for that
- Changed hotbar slot requirement evaluation to use a new extender call, which should also make it compatible with mods using custom requirements
- Added a Gloves filter to Quick Find, which was previously missing (thanks Cathe)
- Reordered slot filters in Quick Find; armor goes first, then weapons/shield, then jewelry (thanks Cathe)
- Fixed a vanilla bug where undead characters would not see any armor restoration numbers over their head
- Added the `!rainbowoverlays` console command
- Cleaned up some scripting for the default crafting filter; as a sideeffect you will have to reconfigure the setting

Fixes:

- Fixed a regression that caused EE to add permanent stats when using their dyes
    - You can use the `!fixdyestats` console command to remove these extra stats from your current active character; you'll need to run it once for each dye you applied
    - Reminder that Epip has a far more customizable dyes feature in the Vanity UI
- Fixed EE dyes being usable from Vanity even if the party didn't have them
- Fixed hotbar group slots having wrong element layering and all blinking while using any skill
- Fixed some hotbar inaccuracies when using Ambidextrous
- Fixed node stats in the stats tab not disappearing after being removed. This fix is retroactive.
- Fixed Inconspicuous being hidden while not using Derpy's Tweaks
- Fixed "Show loot drops in healthbar" feature possibly not working correctly with Derpy's changes
- Fixed a hotbar error if you unbound the vanilla hotkeys for vanilla actions (inventory, journal, map, etc.)
- Fixed an error when dealing damage through moving items

On the technical side:

- Added OverlayColorsBruteForcer feature, which as the name suggests helps with figuring out the usages of the 50 overlay colors in GlobalSwitches
- ColorLib now contains an enum of most overlay colors used by the game
- Fixed `Character.GetSkillState()` on server
- Added `Damage` library, currently only containing TSKs for damage types - will be used for hit/heal-related business later on
- Craft UI table now has the TSKs for item filters
- Ambidextrous check in `Item.CanUse()` should be more accurate now
- Added `Tick` event to GameStateLib
- Added `BatteredHarried.IsDisplayStatus()`, `Stats.GetStatusName()`, `Color.Lerp()`, `DeltaMods.GetItemDeltaMods()` and an item-only overload to `Item.IsEquipped()`
- Added SPIRIT_VISION icon to StatsLib
- SourceInfusionLib now holds Source Generation status IDs
- Fixed `Stats.GetStatusIcon()` for CONSUME statuses
- It's possible to now register TSKs post-init in features/libraries via `:RegisterTranslatedString()`
- Various annotation fixes, mostly to Stat entries
- Simplified `Client.IsInDialogue()` implementation
- UserVarsLib now supports default values for user and mod variables
- `Item.GetPartyTemplateCount()` now strips GUID prefixes
- Generic:
    - Added CloseButton and DraggingArea prefabs
    - `IggyIcon:SetIcon()` call is NOOP'd if there is no change in the icon setup (texture, width and height), which possibly increases performance in icon-heavy UIs
    - Fixed `Instance:Destroy()`
    - Status prefab now looks a lot closer to the statuses in Larian UIs
    - `IggyIcon:SetAlpha()` now supports `affectChildren` parameter
# CharacterSheet

## Events
<doc events="CharacterSheetUI">

```lua
---Hook to manipulate a secondary stats update.
---@hook SecondaryStatUpdate
---@param stats SecondaryStatBase[]
---@param char EclCharacter
```
</doc>

## Functions
<doc lib="CharacterSheetUI">

```lua
---Get the current character on the sheet.  
---Defaults to client character if the sheet is uninitialized.
---@return EclCharacter
function CharacterSheet.GetCharacter() -- Client-only
```
```lua
---@return SecondaryStatBase[]
function CharacterSheet.DecodeSecondaryStats(ui) -- Client-only
```
</doc>

## Fields
<doc fields="CharacterSheetUI">

```lua
---@class CharacterSheetUI
---@field StatsTab CharacterSheetStatsTab
---@field SECONDARY_STAT_GROUPS table<string, number> IDs of secondarystat groups.
```
</doc>

# StatsTab

`Client.UI.CharacterSheet.StatsTab` handles the basic functionality of the custom stats tab. Collapsable categories and server-side querying of stats is implemented in `Epip.Features.StatsTab`.

## Events
<doc events="CharacterSheetUIStatsTab">

```lua
---Fired when a stat is rendered.
---@event EntryAdded
---@param data StatsTabStat
---@param value number
```
```lua
---Fired before stats are (re-)rendered.
---@event PreRender
```
```lua
---Fired after a full render of the tab is complete.
---@event PostRender
```
```lua
---Fired when a stat element is created in Flash.
---@event EntryRendered
---@param element FlashMovieClip
---@param elementID string
```
```lua
---Fired when a stat is clicked.
---@event StatClicked
---@param elementID string
```
```lua
---Fired when a stat tooltip is being rendered.
---@event TooltipRendering
---@param statID string
---@param data StatsTabStat
---@param tooltip TooltipData The default tooltip, using Tooltip from the stat data, or Description as a fallback.
```
```lua
---Hook to change the calculated value of a stat.
---@hook GetStatValue
---@param value number
---@param data StatsTabStat
---@param char EclCharacter
```
```lua
---Hook to manipulate the string display of a stat's value.
---@hook FormatStatValue
---@param value number
---@param data StatsTabStat
---@param char EclCharacter
```
```lua
---Hook to manipulate the label display of a stat.
---@hook FormatLabel
---@param label string
---@param data StatsTabStat
---@param value number
```
</doc>

## Functions
<doc lib="CharacterSheetUIStatsTab">

```lua
---Get the data table of a stat.
---@param id string
---@return StatsTabStat
function StatsTab.GetStatData(id) -- Client-only
```
```lua
---Get the numerical value of a stat. Hookable.
---@param id string
---@param char EclCharacter
---@return number
function StatsTab.GetStatValue(id, char) -- Client-only
```
```lua
---Get the text display for a stat's value.
---@param id string The stat ID.
---@param value number The value to format.
---@return string|number
function StatsTab.FormatStatValue(id, value) -- Client-only
```
```lua
---Render a stat onto the tab.
---@param id string
function StatsTab.RenderStat(id) -- Client-only
```
```lua
---Call to perform a full re-render of the tab.
---TODO some SetDirty call to prevent infinite loops with multiple modules calling this?
function StatsTab.RenderStats() -- Client-only
```
```lua
---Register a FormatStatValue hook for a specific stat.
---@param stat string
---@param handler function
function StatsTab.RegisterStatValueFormatHook(stat, handler) -- Client-only
```
```lua
---Register a GetStatValue hook for a specific stat.
---@param stat string
---@param handler function
function StatsTab.RegisterStatValueHook(stat, handler) -- Client-only
```
</doc>

## Fields
<doc fields="CharacterSheetUIStatsTab">

```lua
---@class CharacterSheetUIStatsTab
---@field Stats table<string, StatsTabStat>
---@field StatsOrder string[] Order in which stats are rendered.
---@field TOOLTIP_TALENT_ID number Enum of the talent ID we hijack the tooltip of.
---@field TOOLTIP_TALENT_NAME string String ID of the talent we hijack the tooltip of.
---@field DEFAULT_STAT_VALUE number
---@field ignoreUpdate boolean Internal; do not set
---@field nextNumericalID number Internal; do not set
```
</doc>
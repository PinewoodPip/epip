# StatsTab
`Epip.Features.StatsTab` implements collapsable categories for the Character Sheet stats tab, as well as Ascension node stats, server-side value calculations and synching, and all stats present in the mod by default. Is this decoupling overengineered? Possibly, but it's a good showcase of how easily extensible systems can be if you stuff them with events.

TODO document the rest of the system - Only Shared.lua is here atm.

## Creating Stats

There's 3 steps to creating a stat. **Steps 1 and 2 have to be done on both contexts.**

1. Define the stat; it's name, tooltip, how it displays, etc.
2. Put it into a category (or create one for it)
3. Set/update it's value when requested, through `RegisterStatValueHook`

You can define a stat with `RegisterStat(id: string, data: EpipStat)`. The structure of a stat is the following:

<doc fields="EpipStat">

```lua
---@class EpipStat
---@field Name string
---@field Description string Fallback description in case a formatted Tooltip isn't set.
---@field Tooltip TooltipData
---@field Footnote string Italic text after description, in new paragraph.
---@field Suffix string Suffix for value display.
---@field Prefix string Prefix for value display.
---@field Boolean boolean Boolean stats show no value label.
---@field MaxCharges string If specified, this stat will display as "{Value}/{Value of MaxCharges stat}"
---@field IgnoreForHiding boolean If true, this stat will not be considered as added when determining if a Hidden category should display.
```
</doc>

```lua
StatsTab.RegisterStat("RegenLifeCalculated", {
    Name = "Missing Life Regen",
    Description = "Restores a percentage of your missing Vitality at the start of your turn.",

    Footnote = "Missing Regeneration is capped at 50%.",
    Suffix = "%",
})
```

Next, you need to append it into a category with `AddStatToCategory(statID: string, categoryID: string, index?: integer)`. You can omit `index` and it will be placed at the bottom.

```lua
StatsTab.AddStatToCategory("RegenLifeCalculated", "Vitals")
```

Finally, you need to register a hook to update the stat's value. This can be done in 2 ways: on client or on server (do not do both).

If the stat's value can be queried from the client context, you only need a simple hook on the client:

```lua
Tab.RegisterStatValueHook("PartyFunds_Gold", function(value, data, char)
    return Game.Items.GetPartyTemplateCount("LOOT_Gold_A_1c3c9c74-34a1-4685-989e-410dc080be6f")
end)
```

For stats that require info from the server, there is a special system in place that synchronizes stat values with tags. To set a stat's value from the server context, you need to use a different event (note it's not a hook, you must call `UpdateTaggedStat` yourself). On the client, the stat's value will be queried automatically from such tag if it is set; the advantage here being that there is no need to request stats from the server every time the tab is opened.

```lua
EpipStats.RegisterStatUpdateListener("Keyword_VitalityVoid_Power", function(char, data)
    Osi.QRY_AMER_KeywordStat_VitalityVoid_GetPower(char.MyGuid, 1)

    local value = Osi.DB_AMER_KeywordStat_OUTPUT_Real:Get(nil)[1][1] * 100

    EpipStats.UpdateTaggedStat(char, "Keyword_VitalityVoid_Power", value)
end)
```

## Creating Ascension Node Stats
Stats related to Ascension nodes are automatically updated if their ID follows a specific format. All you need to do is define one; no further event listeners required. It will also be automatically put into the relevant keyword's category.

You can create such stat with `StatsTab.AddNodeStat(clusterId: string, nodeIndex: number, nodeSubIndex: number, keyword: Keyword, keywordType: KeywordBoonType, statData: EpipStat)`. `StatData` is the stat definition, like with a normal stat. **The indexes are 0-based.** `ClusterId` is the ID of the Aspect, ex. `Force_TheFalcon`.

There's just one small catch: owned nodes are only tracked if there's a stat defined for them. When you add stats in an update, you should call `StatsTab.RecalculateNodeStats()` on the server during the patch routine. You can also call `NRD_ModCall("EpipEncounters", "PerformFullStatsUpdate");` from Osiris, but this will be removed in the future.

## Creating Categories
A category holds stats, and can be collapsed in the menu. Stats only render if they're within a category that is open. They can be added with `RegisterCategory(id: string, data: EpipStatCategory, index?: integer)`. See the `EpipStatCategory` struct.

```lua
EpipStats.RegisterCategory("Vitals", {
    Header = "<font size='21'>————— Vitals —————</font>",
    Name = "Vitals",
    Behaviour = "GreyOut",
    Stats = {
        "RegenLifeCalculated",
        "RegenPhysicalArmorCalculated",
        "RegenMagicArmorCalculated",
        "LifeSteal",
    },
})
```

## Modifying Stats
Stat definitions are stored in `StatsTab.STATS`. You may screw with them at any time. Categories are in `CATEGORIES` instead, and their rendering order is defined in `CATEGORIES_ORDER`.

## Fields
<doc fields="EpipStats">

```lua
---@class EpipStats
---@field CATEGORIES table<string, EpipStatCategory> Category definitions.
---@field CATEGORIES_ORDER string[]
---@field STATS table<string, EpipStat>
---@field MISSING_REGEN_CAP number TODO move
---@field STAT_VALUE_TAG string Pattern for stat tags.
---@field STAT_VALUE_TAG_PREFIX string
---@field TOOLTIP_TALENT number TODO remove
---@field TOOLTIP_TALENT_NAME string TODO remove
```
</doc>

## Functions
<doc lib="EpipStatsTab">

```lua
---Registers a stat bound to an Ascension node.
---@param clusterId string
---@param nodeIndex number
---@param nodeSubIndex number
---@param keyword Keyword
---@param keywordType KeywordBoonType
---@param statData EpipStat Stat metadata.
function EpipStats.AddNodeStat(clusterId, nodeIndex, nodeSubIndex, keyword, keywordType, statData) -- Must be called on both contexts
```
```lua
---Register a stat.
---@param id string
---@param data EpipStat
function EpipStats.RegisterStat(id, data) -- Must be called on both contexts
```
```lua
---Register a category.
---@param id string
---@param data EpipStatCategory
---@param index? integer Order in the stats tab relative to other categories.
function EpipStats.RegisterCategory(id, data, index)
```
```lua
---Add a stat to a category.
---@param statID string
---@param categoryID string
---@param index? integer
function EpipStats.AddStatToCategory(statID, categoryID, index) -- Must be called on both contexts
```
</doc>
# StatsTab
`Epip.Features.StatsTab` implements collapsable categories for the Character Sheet stats tab, as well as Ascension node stats, server-side value calculations and synching, and all stats present in the mod by default.

TODO document the rest of the system - Only Shared.lua is here atm.

# Functions
<doc lib="EpipStatsTab">

```lua
---@alias EpipStatCategoryBehaviour "GreyOut" | "Hidden"
---Registers a stat bound to an Ascension node.
---@param clusterId string
---@param nodeIndex number
---@param nodeSubIndex number
---@param keyword Keyword
---@param keywordType KeywordBoonType
---@param statData EpipStat Stat metadata.
function EpipStats.AddNodeStat(clusterId, nodeIndex, nodeSubIndex, keyword, keywordType, statData) -- Must be called on both contexts
```
</doc>
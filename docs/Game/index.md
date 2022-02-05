# Game

The `Game` table contains multiple libraries focusing on querying data about the current game session, such as information from characters and items.

The `Game.Math` and `Game.Tooltip` tables from the Extender remain.

`Game.Tooltip.TooltipHooks.GetCompareItem` is edited to fix an issue with item comparisons passing the wrong `EclItem` [(issue)](https://github.com/Norbyte/ositools/issues/72). Additionally, tooltips are now re-rendered whenever the `Toggle Sneak Cones` key is pressed/unpressed, to allow it to be used as a "modifier key" for conditional tooltip rendering.

## Fields
<doc fields="Game">

```lua
---@class Game
---@field Items GameItems
---@field Net GameNet
---@field EDITOR_VERSION string The current version of the game editor.
```
</doc>
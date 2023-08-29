## Fixes to vanilla issues
Epip contains fixes to certain vanilla issues, mostly client-related.

- When summons die or are newly-spawned in combat, control will be automatically switched back to the summoner - you don't have to manually do so.
- You can now walk into corpses in combat without looting them; you can hold shift if you need to pillage them mid-fight, or disable this in the settings menu.
- Fixed undead characters not displaying overhead text for armor restoration.
- Fixed overhead text blocking clicks to the world (supposedly a DefEd regression).
- Fixed being unable to use items when under the effects of increased AP costs, if you didn't have `normal_use_cost + 2 * cost_penalty` AP. Essentially, the game was applying this AP cost penalty twice on the client.

Tooltip-related fixes are on the [Tooltip Adjustments page](TooltipAdjustments.md).
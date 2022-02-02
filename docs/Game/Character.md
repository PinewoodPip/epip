# Character

The `Game.Character` table contains functions for querying info of characters. Most functions expect you to pass `Character` as the first parameter (alias for `EclCharacter` and `EsvCharacter`).

## Functions

<doc lib="GameCharacter">

```lua
---Returns the current stacks on char, as well as lifetime. Queries the related status effects.
---@param char Character
---@param type StackType
---@return number,number Stack count, duration left (as seconds)
function Character.GetStacks(char, type) -- EE-related
```
```lua
---Get the infusion level that char is currently preparing (how many times they've cast Source Infuse).
---@param char Character
---@return number Infusion count.
function Character.GetPreparedInfusionLevel(char) -- EE-related
```
```lua
---Returns true if char is preparing a Source Infusion.
---@param char Character
---@return boolean
function Character.IsPreparingInfusion(char) -- EE-related
```
```lua
---Get the stack amount this character needs to apply a T3 to someone else.
---**This only takes into account the bonus from infusing!**
---@param char Character
---@return number Stacks needed
function Character.GetStacksNeededToInflictTier3(char) -- EE-related
```
```lua
---Returns true if char is a summon.
---@param char Character
---@return boolean
function Character.IsSummon(char)
```
```lua
---Returns the gender of char.
---@param char Character
---@return Gender
function Character.GetGender(char)
```
```lua
---Returns true if char is male.
---@param char Character
---@return boolean
function Character.IsMale(char)
```
```lua
---Returns the current race of char.
---@param char Character
---@return Race
function Character.GetRace(char)
```
```lua
---Returns the original race of a player char, before any transforms.
---@param char Character Must be tagged with "REALLY_{Race}"
---@return Race
function Character.GetRealRace(char)
```

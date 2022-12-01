# Combat
The `Combat` library contains methods for querying information about ongoing combats.

## Classes

<doc class="CombatLib" symbols="_SubClasses">

```lua
---@class CombatLib_RoundInfo
---@field Participants (Character|Item)[]

```
```lua
---@class CombatLib_TurnOrder
---@field CurrentRound CombatLib_RoundInfo
---@field NextRound CombatLib_RoundInfo
---@field CombatID uint8

```
</doc>

<!-- ## Events

<doc class="CombatLib" symbols="Listenable">

```lua
```
</doc> -->

## Methods

<doc class="CombatLib" symbols="Function">

```lua
---@return EclTurnManager|EsvTurnManager 
function Combat.GetTurnManager()

---@param combatID integer
---@return EclTurnManagerCombat|EsvTurnManagerCombat 
function Combat.GetCombat(combatID)

---Returns the character participants of a combat.
---@return CombatLib_TurnOrder 
function Combat.GetTurnOrder(combatID)

```
</doc>
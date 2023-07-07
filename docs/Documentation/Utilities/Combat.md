# Combat
The `Combat` library contains methods for querying information about ongoing combats.

<doc class="CombatLib">

# CombatLib Class

## Methods

##### GetActiveCombatant

```lua
function CombatLib.GetActiveCombatant()
   -> CombatLib_CombatCompatibleEntity
```

Returns the current active combatant in a combat.

##### GetCombat

```lua
function CombatLib.GetCombat(combatID)
   -> EclTurnManagerCombat|EsvTurnManagerCombat
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>combatID</b> <code>integer</code></p>

##### GetCombatComponent

```lua
function CombatLib.GetCombatComponent(entity)
   -> EocCombatComponent? -- `nil` if the entity does not have the component.
```

Returns the combat component of an entity.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>entity</b> <code>CombatLib_CombatCompatibleEntity</code></p>

##### GetCombatID

```lua
function CombatLib.GetCombatID(entity)
   -> integer? -- `nil` if the entity is not in combat.
```

Returns the combat ID of an entity.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>entity</b> <code>CombatLib_CombatCompatibleEntity</code></p>

##### GetTurnManager

```lua
function CombatLib.GetTurnManager()
   -> EclTurnManager|EsvTurnManager
```

##### GetTurnOrder

```lua
function CombatLib.GetTurnOrder() -- (Client-only)
   -> CombatLib_TurnOrder
```

Returns the character participants of a combat.
</doc>
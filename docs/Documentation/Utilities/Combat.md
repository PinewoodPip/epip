# Combat
The `Combat` library contains methods for querying information about ongoing combats.

<doc package="CombatLib">



## Methods

#### GetTurnManager



```lua
function Combat.GetTurnManager()
   -> EclTurnManager|EsvTurnManager
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>EclTurnManager|EsvTurnManager</code> </p>

#### GetCombat



```lua
function Combat.GetCombat(combatID)
   -> EclTurnManagerCombat|EsvTurnManagerCombat
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>combatID</b> <code>integer</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>EclTurnManagerCombat|EsvTurnManagerCombat</code> </p>

#### GetActiveCombatant



```lua
function Combat.GetActiveCombatant(combatID)
   -> CombatLib_CombatCompatibleEntity
```



Returns the current active combatant in a combat.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>CombatLib_CombatCompatibleEntity</code> </p>

#### GetCombatComponent



```lua
function Combat.GetCombatComponent(entity)
   -> EocCombatComponent? 
```



Returns the combat component of an entity.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>entity</b> <code>CombatLib_CombatCompatibleEntity</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>EocCombatComponent? </code> `nil` if the entity does not have the component.</p>

#### GetCombatID



```lua
function Combat.GetCombatID(entity)
   -> integer? 
```



Returns the combat ID of an entity.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>entity</b> <code>CombatLib_CombatCompatibleEntity</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer? </code> `nil` if the entity is not in combat.</p>

#### GetTurnOrder



```lua
function Combat.GetTurnOrder(combatID)
   -> CombatLib_TurnOrder
```



Returns the character participants of a combat.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>CombatLib_TurnOrder</code> </p>
</doc>
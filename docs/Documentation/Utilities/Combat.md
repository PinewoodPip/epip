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

#### GetTurnOrder



```lua
function Combat.GetTurnOrder(combatID)
   -> CombatLib_TurnOrder
```



Returns the character participants of a combat.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>CombatLib_TurnOrder</code> </p>
</doc>
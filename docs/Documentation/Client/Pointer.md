# Pointer
The `Pointer` library contains methods related to the pointer for the game world; used to interact with game objects and move around.

It's primarily a wrapper around `Ext.UI.GetPickingState()`. In addition to methods to quickly fetch its entities, it offers events for when they change (when the user starts/stops hovering over a new entity).

<doc package="PointerLib">



## Events and Hooks

##### HoverCharacterChanged (event)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Character</b> <code>EclCharacter?</code> </p>

##### HoverCharacter2Changed (event)

Fired when the corpse character over the pointer changes.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Character</b> <code>EclCharacter?</code> </p>

##### HoverItemChanged (event)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Item</b> <code>EclItem?</code> </p>

##### HoverEntityChanged (event)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Entity</b> <code>Entity?</code> </p>



## Methods

#### GetCurrentCharacter



```lua
function Pointer.GetCurrentCharacter(playerIndex, includeDead)
   -> EclCharacter?
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>includeDead</b> <code>boolean?</code> Defaults to false.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>EclCharacter?</code> </p>

#### GetCurrentItem



```lua
function Pointer.GetCurrentItem(playerIndex)
   -> EclItem?
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>EclItem?</code> </p>

#### GetCurrentEntity



```lua
function Pointer.GetCurrentEntity(playerIndex)
   -> Entity?
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Entity?</code> </p>

#### GetWalkablePosition



```lua
function Pointer.GetWalkablePosition(playerIndex)
   -> Vector3D
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Vector3D</code> </p>

#### GetWorldPosition



```lua
function Pointer.GetWorldPosition(playerIndex)
   -> Vector3D
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Vector3D</code> </p>

#### GetDragDropState



```lua
function Pointer.GetDragDropState(playerIndex)
   -> DragDropManagerPlayerDragInfo
```



Returns the drag-drop system state for a player.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>DragDropManagerPlayerDragInfo</code> </p>

#### GetDraggedSkill



```lua
function Pointer.GetDraggedSkill(playerIndex)
   -> string? 
```



Returns the skill being dragged by a player.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string? </code> Can be an action as well.</p>

#### GetDraggedItem



```lua
function Pointer.GetDraggedItem(playerIndex)
   -> EclItem?
```



Returns the item being dragged by a player.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>EclItem?</code> </p>

#### IsDragging



```lua
function Pointer.IsDragging(playerIndex)
   -> boolean
```



Returns whether the player's cursor is dragging anything.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>
</doc>
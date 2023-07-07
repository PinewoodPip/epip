# Pointer
!!! info "Client-only"

The `Pointer` library offers methods and events related to the state of the pointer - that is, what the user is selecting with their cursor. This includes world objects as well as drag-drop.

It's primarily a wrapper around `Ext.UI.GetPickingState()`. In addition to methods to quickly fetch its entities, it offers events for when they change (when the user starts/stops hovering over a new entity).

<doc class="PointerLib">

# PointerLib Class

## Events and Hooks

#### HoverCharacterChanged (event)

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Character</b> <code>EclCharacter?</code></p>

#### HoverCharacter2Changed (event)

Fired when the corpse character over the pointer changes.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Character</b> <code>EclCharacter?</code></p>

#### HoverItemChanged (event)

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Item</b> <code>EclItem?</code></p>

#### HoverEntityChanged (event)

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Entity</b> <code>Entity?</code></p>

#### DragDropStateChanged (event)

Fired when a player starts or ends a drag drop. 

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>State</b> <code>DragDropManagerPlayerDragInfo?</code> `nil` if the player stopped dragging.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>PlayerIndex</b> <code>integer</code></p>

## Methods

##### GetCurrentCharacter

```lua
function PointerLib.GetCurrentCharacter(playerIndex, includeDead) -- (Client-only)
   -> EclCharacter?
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>includeDead</b> <code>boolean?</code> Defaults to false.</p>

##### GetCurrentEntity

```lua
function PointerLib.GetCurrentEntity(playerIndex) -- (Client-only)
   -> Entity?
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>

##### GetCurrentItem

```lua
function PointerLib.GetCurrentItem(playerIndex) -- (Client-only)
   -> EclItem?
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>

##### GetDragDropState

```lua
function PointerLib.GetDragDropState(playerIndex) -- (Client-only)
   -> DragDropManagerPlayerDragInfo
```

Returns the drag-drop system state for a player.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>

##### GetDraggedItem

```lua
function PointerLib.GetDraggedItem(playerIndex) -- (Client-only)
   -> EclItem?
```

Returns the item being dragged by a player.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>

##### GetDraggedSkill

```lua
function PointerLib.GetDraggedSkill(playerIndex) -- (Client-only)
   -> string? -- Can be an action as well.
```

Returns the skill being dragged by a player.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>

##### GetWalkablePosition

```lua
function PointerLib.GetWalkablePosition(playerIndex) -- (Client-only)
   -> Vector3D
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>

##### GetWorldPosition

```lua
function PointerLib.GetWorldPosition(playerIndex) -- (Client-only)
   -> Vector3D
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>

##### IsDragging

```lua
function PointerLib.IsDragging(playerIndex) -- (Client-only)
   -> boolean
```

Returns whether the player's cursor is dragging anything.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>playerIndex</b> <code>integer?</code> Defaults to 1.</p>
</doc>
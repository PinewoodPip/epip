# Pointer
The `Pointer` library contains methods related to the pointer for the game world; used to interact with game objects and move around.

It's primarily a wrapper around `Ext.UI.GetPickingState()`. In addition to methods to quickly fetch its entities, it offers events for when they change (when the user starts/stops hovering over a new entity).

## Classes

<doc class="PointerLib" symbols="_SubClasses">

```lua
---@class PointerLib_PickingState
---@field WorldPosition Vector3D?
---@field WalkablePosition Vector3D
---@field HoverCharacter EntityHandle?
---@field HoverCharacter2 EntityHandle? Used for corpses.
---@field HoverCharacterPosition Vector3D? Corresponds to HoverCharacter's position.
---@field HoverItem EntityHandle?
---@field HoverItemPosition Vector3D?
---@field PlaceableEntity EntityHandle?
---@field PlaceablePosition Vector3D?


```
</doc>

## Events

<doc class="PointerLib" symbols="Event">

```lua
---@event HoverCharacterChanged
---@field Character EclCharacter?


---Fired when the corpse character over the pointer changes.
---@event HoverCharacter2Changed
---@field Character EclCharacter?


---@event HoverItemChanged
---@field Item EclItem?


---@event HoverEntityChanged
---@field Entity Entity?


```
</doc>

## Methods

<doc class="PointerLib" symbols="Function">

```lua
function Pointer.GetCurrentCharacter(playerIndex, includeDead)

---@param playerIndex integer? Defaults to 1.
---@return EclItem? 
function Pointer.GetCurrentItem(playerIndex)

---@param playerIndex integer? Defaults to 1.
---@return Entity? 
function Pointer.GetCurrentEntity(playerIndex)

---@param playerIndex integer? Defaults to 1.
---@return Vector3D 
function Pointer.GetWalkablePosition(playerIndex)

---@param playerIndex integer? Defaults to 1.
---@param fieldName string
---@return Entity 
function Pointer._GetCurrentEntity(playerIndex, fieldName)

```
</doc>
# Element
`GenericUI_Element` is the base class that all built-in elements inherit from.

## Events

<doc class="GenericUI_Element" symbols="Listenable">

```lua
---@event MouseOver

---@event MouseOut

---@event MouseUp

---@event MouseDown

---@event RightClick

---@event TweenCompleted
---@field EventID string

---@event Clicked

```
</doc>

## Methods

<doc class="GenericUI_Element" symbols="Function">

```lua
---Get the movie clip of this element.
---@return FlashMovieClip 
function _Element:GetMovieClip()

---@param id string
---@param elementType `T`|GenericUI_ElementType
---@return `T` 
function _Element:AddChild(id, elementType)

---Sets whether the element should be horizontally centered in VerticalList and ScrollList.
---@param center boolean
function _Element:SetCenterInLists(center)

---Sets this element as the area for dragging the *entire* UI.
function _Element:SetAsDraggableArea()

---@param x number
---@param y number
function _Element:SetPosition(x, y)

---@param width number
---@param height number
function _Element:SetSize(width, height)

---@param enabled boolean
function _Element:SetMouseEnabled(enabled)

---@param enabled boolean
function _Element:SetMouseChildren(enabled)

---@param alpha number
---@param affectChildren boolean? Defaults to not affecting children alpha.
function _Element:SetAlpha(alpha, affectChildren)

---@param degrees number
function _Element:SetRotation(degrees)

function _Element:Destroy()

---@param eventType string
---@param handler function
function _Element:RegisterListener(eventType, handler)

---@return number, number -- X and Y coordinates in local space.
function _Element:GetPosition()

---@param visible boolean
function _Element:SetVisible(visible)

---@param tween GenericUI_ElementTween
function _Element:Tween(tween)

---Sets the size override, used to override the element size within list-like elements.
---@overload fun(self:GenericUI_Element, size:Vector2) 
---@param width number
---@param height number
function _Element:SetSizeOverride(width, height)

---Sets the scroll rect of the element.
---@param position Vector2
---@param size Vector2
function _Element:SetScrollRect(position, size)

---Removes the scroll rect from the element, if any.
function _Element:RemoveScrollRect()

---Sets the Z-order index of a child element.
---@param child string|GenericUI_Element
---@param index integer
function _Element:SetChildIndex(child, index)

---Returns the calculated width of the element.
---@return number 
function _Element:GetWidth()

---Returns the calculated height of the element.
---@return number 
function _Element:GetHeight()

---Sets the scale of the element.
---@param scale Vector2
function _Element:SetScale(scale)

---Returns the scale of the element.
---@return Vector2 
function _Element:GetScale()

---Sets the tooltip of the element.
---@param tooltipType TooltipLib_TooltipType
---@param tooltip any TODO document
function _Element:SetTooltip(tooltipType, tooltip)

```
</doc>
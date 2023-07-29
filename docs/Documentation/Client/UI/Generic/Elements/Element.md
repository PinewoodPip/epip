# Element
`GenericUI_Element` is the base class that all built-in elements inherit from.

<doc class="GenericUI_Element">

# GenericUI_Element Class

## Methods

##### AddChild

```lua
function GenericUI_Element:AddChild(id, elementType)
   -> `T`
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>elementType</b> <code>`T`|GenericUI_ElementType</code></p>

##### Destroy

```lua
function GenericUI_Element:Destroy()
```

##### GetChildren

```lua
function GenericUI_Element:GetChildren()
   -> GenericUI_Element[]
```

Returns the children of the element.

##### GetHeight

```lua
function GenericUI_Element:GetHeight(considerOverrides)
   -> number
```

Returns the height of the element.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>considerOverrides</b> <code>boolean?</code> If `true`, height overrides will be considered. Defaults to `true`.</p>

##### GetMovieClip

```lua
function GenericUI_Element:GetMovieClip()
   -> FlashMovieClip
```

Get the movie clip of this element.

##### GetParent

```lua
function GenericUI_Element:GetParent()
   -> GenericUI_Element
```

Returns the parent element.

##### GetPosition

```lua
function GenericUI_Element:GetPosition()
   -> number, number -- X and Y coordinates in local space.
```

##### GetRawHeight

```lua
function GenericUI_Element:GetRawHeight()
   -> number
```

Returns the height of the element without considering its children.

##### GetRawSize

```lua
function GenericUI_Element:GetRawSize()
   -> Vector2
```

Gets the size of the element without considering its children.

##### GetRawWidth

```lua
function GenericUI_Element:GetRawWidth()
   -> number
```

Returns the width of the element without considering its children.

##### GetScale

```lua
function GenericUI_Element:GetScale()
   -> Vector2
```

Returns the scale of the element.

##### GetSize

```lua
function GenericUI_Element:GetSize(considerOverrides)
   -> Vector2
```

Returns the size of the element.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>considerOverrides</b> <code>boolean?</code> If `true`, width/height overrides will be considered. Defaults to `true`.</p>

##### GetSizeOverride

```lua
function GenericUI_Element:GetSizeOverride()
   -> Vector2?
```

Returns the size override of the element, if any.

##### GetWidth

```lua
function GenericUI_Element:GetWidth(considerOverrides)
   -> number
```

Returns the width of the element.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>considerOverrides</b> <code>boolean?</code> If `true`, width overrides will be considered. Defaults to `true`.</p>

##### Move

```lua
function GenericUI_Element:Move(x, y)
```

Moves the element a certain amount of pixels from its current position.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>x</b> <code>number</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>y</b> <code>number</code></p>

##### RegisterListener

```lua
function GenericUI_Element:RegisterListener(eventType, handler)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>eventType</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>handler</b> <code>function</code></p>

##### RemoveChild

```lua
function GenericUI_Element:RemoveChild(element)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>element</b> <code>GenericUI_Element</code></p>

##### RemoveScrollRect

```lua
function GenericUI_Element:RemoveScrollRect()
```

Removes the scroll rect from the element, if any.

##### SetAlpha

```lua
function GenericUI_Element:SetAlpha(alpha, affectChildren)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>alpha</b> <code>number</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>affectChildren</b> <code>boolean?</code> Defaults to not affecting children alpha.</p>

##### SetAsDraggableArea

```lua
function GenericUI_Element:SetAsDraggableArea()
```

Sets this element as the area for dragging the *entire* UI.

##### SetCenterInLists

```lua
function GenericUI_Element:SetCenterInLists(center)
```

Sets whether the element should be horizontally centered in VerticalList and ScrollList.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>center</b> <code>boolean</code></p>

##### SetChildIndex

```lua
function GenericUI_Element:SetChildIndex(child, index)
```

Sets the Z-order index of a child element.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>child</b> <code>string|GenericUI_Element</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>index</b> <code>integer</code></p>

##### SetMouseChildren

```lua
function GenericUI_Element:SetMouseChildren(enabled)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>enabled</b> <code>boolean</code></p>

##### SetMouseEnabled

```lua
function GenericUI_Element:SetMouseEnabled(enabled)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>enabled</b> <code>boolean</code></p>

##### SetPosition

```lua
function GenericUI_Element:SetPosition(x, y)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>x</b> <code>number</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>y</b> <code>number</code></p>

##### SetPositionRelativeToParent

```lua
function GenericUI_Element:SetPositionRelativeToParent(position, horizontalOffset, verticalOffset)
```

Sets the position of the element relative to its parent.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>position</b> <code>GenericUI_Element_RelativePosition</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>horizontalOffset</b> <code>number?</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>verticalOffset</b> <code>number?</code></p>

##### SetRotation

```lua
function GenericUI_Element:SetRotation(degrees)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>degrees</b> <code>number</code></p>

##### SetScale

```lua
function GenericUI_Element:SetScale(scale)
```

Sets the scale of the element.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>scale</b> <code>Vector2</code></p>

##### SetScrollRect

```lua
function GenericUI_Element:SetScrollRect(position, size)
```

Sets the scroll rect of the element.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>position</b> <code>Vector2</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>size</b> <code>Vector2</code></p>

##### SetSize

```lua
function GenericUI_Element:SetSize(width, height)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>width</b> <code>number</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>height</b> <code>number</code></p>

##### SetSizeOverride

```lua
function GenericUI_Element:SetSizeOverride(width, height)
```

Sets the size override, used to override the element size within list-like elements.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>width</b> <code>number</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>height</b> <code>number</code></p>

##### SetTooltip

```lua
function GenericUI_Element:SetTooltip(tooltipType, tooltip)
```

Sets the tooltip of the element.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>tooltipType</b> <code>TooltipLib_TooltipType</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>tooltip</b> <code>any</code> TODO document</p>

##### SetVisible

```lua
function GenericUI_Element:SetVisible(visible)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>visible</b> <code>boolean</code></p>

##### Tween

```lua
function GenericUI_Element:Tween(tween)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>tween</b> <code>GenericUI_ElementTween</code></p>
</doc>
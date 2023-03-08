# Element
`GenericUI_Element` is the base class that all built-in elements inherit from.

<doc package="GenericUI_Element">



## Events and Hooks

##### MouseOver (event)

##### MouseOut (event)

##### MouseUp (event)

##### MouseDown (event)

##### RightClick (event)

##### TweenCompleted (event)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>EventID</b> <code>string</code> </p>

##### Clicked (event)



## Methods

#### GetMovieClip



```lua
function _Element:GetMovieClip()
   -> FlashMovieClip
```



Get the movie clip of this element.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>FlashMovieClip</code> </p>

#### AddChild



```lua
function _Element:AddChild(id, elementType)
   -> `T`
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>id</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>elementType</b> <code>`T`|GenericUI_ElementType</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>`T`</code> </p>

#### SetCenterInLists



```lua
function _Element:SetCenterInLists(center)
```



Sets whether the element should be horizontally centered in VerticalList and ScrollList.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>center</b> <code>boolean</code> </p>

#### SetAsDraggableArea



```lua
function _Element:SetAsDraggableArea()
```



Sets this element as the area for dragging the *entire* UI.

#### SetPosition



```lua
function _Element:SetPosition(x, y)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>x</b> <code>number</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>y</b> <code>number</code> </p>

#### SetSize



```lua
function _Element:SetSize(width, height)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>width</b> <code>number</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>height</b> <code>number</code> </p>

#### SetMouseEnabled



```lua
function _Element:SetMouseEnabled(enabled)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>enabled</b> <code>boolean</code> </p>

#### SetMouseChildren



```lua
function _Element:SetMouseChildren(enabled)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>enabled</b> <code>boolean</code> </p>

#### SetAlpha



```lua
function _Element:SetAlpha(alpha, affectChildren)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>alpha</b> <code>number</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>affectChildren</b> <code>boolean?</code> Defaults to not affecting children alpha.</p>

#### SetRotation



```lua
function _Element:SetRotation(degrees)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>degrees</b> <code>number</code> </p>

#### Destroy



```lua
function _Element:Destroy()
```





#### RegisterListener



```lua
function _Element:RegisterListener(eventType, handler)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>eventType</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>handler</b> <code>function</code> </p>

#### GetPosition



```lua
function _Element:GetPosition()
   -> number, number 
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>number, number </code> X and Y coordinates in local space.</p>

#### SetVisible



```lua
function _Element:SetVisible(visible)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>visible</b> <code>boolean</code> </p>

#### Tween



```lua
function _Element:Tween(tween)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>tween</b> <code>GenericUI_ElementTween</code> </p>

#### SetSizeOverride



```lua
function _Element:SetSizeOverride(width, height)
```



Sets the size override, used to override the element size within list-like elements.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>width</b> <code>number</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>height</b> <code>number</code> </p>

#### SetScrollRect



```lua
function _Element:SetScrollRect(position, size)
```



Sets the scroll rect of the element.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>position</b> <code>Vector2</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>size</b> <code>Vector2</code> </p>

#### RemoveScrollRect



```lua
function _Element:RemoveScrollRect()
```



Removes the scroll rect from the element, if any.

#### SetChildIndex



```lua
function _Element:SetChildIndex(child, index)
```



Sets the Z-order index of a child element.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>child</b> <code>string|GenericUI_Element</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>index</b> <code>integer</code> </p>

#### GetWidth



```lua
function _Element:GetWidth()
   -> number
```



Returns the calculated width of the element.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>number</code> </p>

#### GetHeight



```lua
function _Element:GetHeight()
   -> number
```



Returns the calculated height of the element.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>number</code> </p>

#### SetScale



```lua
function _Element:SetScale(scale)
```



Sets the scale of the element.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>scale</b> <code>Vector2</code> </p>

#### GetScale



```lua
function _Element:GetScale()
   -> Vector2
```



Returns the scale of the element.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Vector2</code> </p>

#### SetTooltip



```lua
function _Element:SetTooltip(tooltipType, tooltip)
```



Sets the tooltip of the element.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>tooltipType</b> <code>TooltipLib_TooltipType</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>tooltip</b> <code>any</code> TODO document</p>
</doc>
# Generic
Generic is a framework for creating UIs using just lua scripting. It functions by instancing a special *.swf* with various types of *elements* implemented that you can then interface with from lua.

It offers various advantages over traditional UI creation:

- **No fiddling with flash**: UI creation with Generic uses purely lua. You do not need to touch or know anything about flash files.
- **Extendability and moddability**: UIs made with Generic, along with their elements, are exposed to all mods; any script can hook these UIs to add elements to them or modify them, something not possible with .swf UIs.
- **Fast prototyping**: all you need to do to test your changes to your UIs is to reload lua. There is no requirement for external tools nor any exporting process.
- **Reusability**: "prefabs" with custom APIs can be created to work with groups of elements in a reusable manner across different UIs, and offered to mods that use yours as a dependency.

Generic powers every UI in Epip made after its inception, including:

- Quick Examine
- Hotbar Groups
- Save/Load Overlay
- Debug Display
- Debug Menu / Control Panel
- Fishing minigame
- Quick Find
- Settings menu (partially)

## Getting started

Call `Generic.Create()` to create a new UI.

TODO use sessionloaded
```lua
local Generic = Client.UI.Generic
local ExampleUI = Generic.Create("PIP_ExampleUI")
```

Generic UIs are composed of elements; these can be interactable controls (such as buttons), visual elements (backgrounds, icons) and containers (lists and grids of elements).

You can add elements to your UI by calling `CreateElement()`:

```lua
-- Creates a tiled background element.
-- All elements must have a unique string ID.
local background = ExampleUI:CreateElement("MyBackground", "GenericUI_Element_TiledBackground")
```

Elements are lua objects with methods and events to interface with them - all elements share basic getters/setters for properties like position, and offer additional calls based on their intended purpose.

```lua
-- Set the background to solid black with 400x400 size.
background:SetBackground("Black", 400, 400)
```

Parenting elements is supported. Parented elements use positioning relative to their parent, as would be in regular flash, and inherit certain other properties like visibility. To create child elements, you can pass an element (or its ID) as a third parameter to `CreateElement()` or call `AddChild()` on an existing element reference:

```lua

-- Adds a button
local closeButton = background:AddChild("CloseButton", "GenericUI_Element_Button")
closeButton:SetType("Close") -- Sets the appearance

-- Put the button in the top right corner of the parent element (MyBackground) with a 20px offset on both axes
closeButton:SetPositionRelativeToParent("TopRight", -20, 20)
```

All elements implement basic mouse-related events (entering, exiting, press, release) as well as high-level ones based on the element's purpose.

Text is available via the `GenericUI_Element_Text` element:

```lua
local header = background:AddChild("MyHeader", "GenericUI_Element_Text")
header:SetText(Text.Format("My UI", {Color = Color.BLACK}))
header:SetSize(400, 50)
header:SetPositionRelativeToParent("Top", 0, 60) -- Sets the header's position to the top center of the panel, with a 60px offset from the top
```

```lua
-- "Pressed" event is akin to the general MouseUp event, but only fires if the button is not disabled.
closeButton.Events.Pressed:Subscribe(function (_)
    -- Close the UI when the button is pressed
    ExampleUI:Hide()
end)
```

Generic UI elements have no lifetime restrictions and references to them may be stored and used at any time. You can store them within your UI table for convenient access, but this is not a necessity if moddability is a concern - your UI, as well as all of its elements, are always available to other modders through their string IDs. These IDs are valid within your UI only and therefore need not be prefixed.

```lua
-- Other modders can access your UI by its string ID
local yourUI = Generic.GetInstance("PIP_ExampleUI")
local yourAcceptButton = yourUI:GetElementByID("AcceptButton")

-- And they may interface with them just as you would
yourUI:CreateElement("MyNewElement", "GenericUI_Element_IggyIcon")
yourAcceptButton:SetVisible(false)
```

Internally, Generic UIs are no different from regular UIs - there is a `UIObject` for each UI, and its elements exist within it as flash MovieClips. Access to all these is available.

```lua
-- Direct access to UIObject and MovieClip is available
print(ExampleUI:GetUI())
print(acceptButton:GetMovieClip())

-- GenericUI instances inherit from the same class as built-in UIs in Epip
print(ExampleUI:IsFlagged("OF_PlayerInput1"))
```

!!! warning Usage warning
    Though accessing an element's MovieClip is possible, its purpose is for debugging only. Interfacing with elements outside of their public APIs is not supported and any such use is prone to breaking in future releases with no warning.

## Elements

The following element types are implemented:

- TODO

You can read up about them on their dedicated pages.

The code in this section is from an example UI in `Epip/Examples/GenericUI.lua`.

## Prefabs
TODO

## Library

<doc package="GenericUI">



## Events and Hooks

##### Button_Pressed (event)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>RegisterListener</b> <code>fun(self,</code> listener:fun(stringID:string))</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Fire</b> <code>fun(self,</code> stringID:string)</p>

##### StateButton_StateChanged (event)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>RegisterListener</b> <code>fun(self,</code> listener:fun(stringID:string, active:boolean))</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Fire</b> <code>fun(self,</code> stringID:string, active:boolean)</p>

##### ViewportChanged (event)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Width</b> <code>integer</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Height</b> <code>integer</code> </p>



## Methods

#### OnElementUICall



```lua
function Generic.OnElementUICall(ev, elementID, eventName, eventObj)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>ev</b> <code>EclLuaUICallEvent</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>elementID</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>eventName</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>eventObj</b> <code>table?</code> </p>

#### Create



```lua
function Generic.Create(id)
   -> GenericUI_Instance
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>id</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>GenericUI_Instance</code> </p>

#### GetPrefab



```lua
function Generic.GetPrefab(className)
   -> T
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>className</b> <code>`T`|GenericUI_PrefabClass</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>T</code> </p>

#### Inherit



```lua
function Generic.Inherit(tbl1, tbl2)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>tbl1</b> <code>table</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>tbl2</b> <code>table</code> </p>

#### RegisterElementType



```lua
function Generic.RegisterElementType(elementType, elementTable)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>elementType</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>elementTable</b> <code>GenericUI_Element</code> </p>

#### ExposeFunction



```lua
function Generic.ExposeFunction(call)
   -> fun(self:GenericUI_Element, ...):any?
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>call</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>fun(self:GenericUI_Element, ...):any?</code> </p>

#### GetInstance



```lua
function Generic.GetInstance(id)
   -> GenericUI_Instance
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>id</b> <code>integer</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>GenericUI_Instance</code> </p>

#### RegisterPrefab



```lua
function Generic.RegisterPrefab(id, prefab)
```



Registers a prefab.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>id</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>prefab</b> <code>table</code> </p>

#### ForwardUICall



```lua
function Generic.ForwardUICall(ui, call, eventName, fields)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>ui</b> <code>GenericUI_Instance</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>call</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>eventName</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>fields</b> <code>string[]?</code> </p>
</doc>

## UI Instance

<doc package="GenericUI_Instance">



## Methods

#### GetElementByID



```lua
function _Instance:GetElementByID(id)
   -> GenericUI_Element?
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>id</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>GenericUI_Element?</code> </p>

#### DestroyElement



```lua
function _Instance:DestroyElement(element)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>element</b> <code>GenericUI_Element</code> </p>

#### GetMovieClipByID



```lua
function _Instance:GetMovieClipByID(id)
   -> FlashMovieClip?
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>id</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>FlashMovieClip?</code> </p>

#### CreateElement



```lua
function _Instance:CreateElement(id, elementType, parentID)
   -> `T`
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>id</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>elementType</b> <code>`T`|GenericUI_ElementType</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>parentID</b> <code>string|GenericUI_Element?</code> Defaults to root of the MainTimeline.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>`T`</code> </p>

#### GetMousePosition



```lua
function _Instance:GetMousePosition()
   -> number, number
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>number, number</code> </p>
</doc>
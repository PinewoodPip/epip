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
- Bedazzled (match 3 minigame)

## Getting started

Call `Generic.Create()` to create a new UI.

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
    Though accessing an element's MovieClip is possible, its purpose is for internal & debug usage only. Interfacing with elements outside of their public APIs is not supported and any such use is prone to breaking in future releases with no warning.

## Elements

The following element types are implemented:

- TODO document

You can read up about them on their dedicated pages.

The code in this section is from an example UI in `Epip/Examples/GenericUI.lua`.

## Prefabs
TODO

## Limitations, considerations and observations
### Sprite-based animations
There is currently no convenient way of creating animations that involve multiple animation sprites. Two solutions have been theorized, but their practicality is untested:

1. Animate the Texture element: this appears to be the most straightforward option (and already possible); the obvious inconvenience being the need to import every frame of your animation as a separate texture resource. The performance of repeatedly calling `:SetTexture()` has also not been investigated.
2. Implement a custom element: it is theoretically possible to implement a custom flash element in Generic, importing its script and Sprite from another `.swf`. You could setup your animation in the `.swf` as you'd normally do in flash and create a simple element to instantiate it from Generic. This approach has the massive problem of flash library slots being limited; there's only a few available slots for custom libraries, and they would have to be registered in advance within Generic's swf (ex. use `ImportAssets` to import "Custom1.swf", "Custom2.swf", and have the user override those to provide their custom elements).

### Stutters when creating hundreds of elements at a time
Creating MovieClips programmatically appears to be the major performance bottleneck in Generic/Iggy. UIs that instantiate hundreds of elements at once will likely see noticeable stutter during that process. **The performance of these UIs afterwards is normal**.

The major UIs that suffer from this are inventory-like UIs, due to the Slot element being particularly complex and consisting of multiple parts.
In v1066, measures have been taken to minimize the amount of DisplayObjects created - certain aspects of Slots such as the cooldown animation are now only created on-demand, resulting in a 30-35% performance improvement when creating Slot elements that do not use all of its features.

No further possible major improvements are known. It's worth noting that  the problems lies within class instantiation and not Generic itself; vanilla UIs such as PartyInventory and Craft experience similar stutters when needing to create a ton of slots/recipes.

A possible workaround for this is to create your elements during the load screen, however this will inflict the resulting "stutter" as extra loading time for the user. Epip prefers initializing UIs on-demand; that is, the UI basically doesn't exist until it is necessary.

When working with UIs where this is a concern, it is recommended to implement a pooling system to reuse elements. Avoid clearing and re-creating lists of hundreds of elements - instead reuse existing instances.

QuickInventory and Codex sections that inherit from `Features.Codex.Sections.Grid` are good examples of implementing pooling for an inventory-like UI, massively improving responsiveness after the creation of the elements.

### Testing
Since user interaction in Generic is driven through events in Lua, it's theoretically possible to implement instrumented tests for UIs by invoking those events to spoof user interaction.

<doc class="GenericUI">

# GenericUI Class

## Methods

##### Create

```lua
function GenericUI.Create(id, layer)
   -> GenericUI_Instance
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>layer</b> <code>integer?</code> Defaults to `DEFAULT_LAYER`.</p>

##### ExposeFunction

```lua
function GenericUI.ExposeFunction(call)
   -> fun(self:GenericUI_Element, ...):any?
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>call</b> <code>string</code></p>

##### GetInstance

```lua
function GenericUI.GetInstance(id)
   -> GenericUI_Instance
```

Returns the instance of a Generic UI by its identifier.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string|integer</code> String ID of the UI or its TypeID.</p>

##### GetPrefab

```lua
function GenericUI.GetPrefab(className)
   -> T
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>className</b> <code>`T`|GenericUI_PrefabClass</code></p>

##### Inherit

```lua
function GenericUI.Inherit(tbl1, tbl2)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>tbl1</b> <code>table</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>tbl2</b> <code>table</code></p>

##### RegisterElementType

```lua
function GenericUI.RegisterElementType(elementType, elementTable)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>elementType</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>elementTable</b> <code>GenericUI_Element</code></p>

##### RegisterPrefab

```lua
function GenericUI.RegisterPrefab(id, prefab)
```

Registers a prefab.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>prefab</b> <code>table</code></p>
</doc>
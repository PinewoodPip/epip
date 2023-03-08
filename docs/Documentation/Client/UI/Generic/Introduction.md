# Generic
Generic is a framework for creating UIs using just lua scripting. It functions by instancing a special .swf with various types of *elements* implemented that you can then interface with from lua.

It offers various advantages over traditional UI creation:

- **No fiddling with flash**: UI creation with Generic uses purely lua. You do not need to touch or know anything about flash files.
- **Extendability and moddability**: UIs made with Generic, along with their elements, are exposed to all mods; any script can hook these UIs to add elements to them or modify them, something not possible with .swf UIs.
- **Fast prototyping**: all you need to do to test your changes to the UI is to reload lua. There is no requirement for external tools nor any exporting process.

Generic powers every UI in Epip made after its inception, including:

- Quick Examine
- Hotbar Groups
- Save/Load Overlay
- Debug Display
- Debug Menu / Control Panel
- Fishing minigame

## Getting started
TODO

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
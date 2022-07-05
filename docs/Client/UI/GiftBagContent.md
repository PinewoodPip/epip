# GiftBagContent
The GiftBagContent UI is the ingame giftbags menu.

## Events & Hooks

<epip class="GiftBagContentUI" symbols="Event,Hook">

```lua
---Fired after the UI's content is updated, upon opening the UI.
---@event ContentUpdated
---@field RegisterListener fun(self, listener:fun(content:GiftBagContentUIEntry[]))
---@field Fire fun(self, content:GiftBagContentUIEntry[])


---Fired when the content of the UI needs to be updated.
---@hook GetContent
---@field RegisterHook fun(self, handler:fun(content:GiftBagContentUIEntry[]))
---@field Return fun(self, content:GiftBagContentUIEntry[])


```
</epip>

## Methods

<epip class="GiftBagContentUI" symbols="Function">

```lua
---Returns a giftbag mod by its numerical ID.
---@param id number
---@return GUID 
function GB.GetModGUID(id)

---Renders the contents of the UI, based on the data arrays in flash.
function GB.RenderContent()

```
</epip>

## Objects

<epip class="GiftBagContentUI" symbols="Class">

```lua
---@class GiftBagContentUI : Feature


---Represents a mod entry in the UI.
---@class GiftBagContentUIEntry
---@field ID number ID in UI.
---@field Name string
---@field Description string
---@field Enabled boolean
---@field Locked boolean Locked giftbags cannot be toggled.
---@field Mod string GUID of giftbag mod.


```
</epip>
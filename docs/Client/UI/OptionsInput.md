# OptionsInput
The OptionsInput UI script handles new functionality for the input settings menu, which, curiously, is actually a separate UI from the settings menu, and just like it, it does not exist whilst not open.

Epip extends it to provide custom keybinding configuration tabs, as well as to read the user's current keybindings as strings to display elsewhere.

## Events & Hooks
<epip class="OptionsInputUI" symbols="Event,Hook">

```lua
---Saves the user's bindings to the disk.
---@event ActionExecuted
---@field RegisterListener fun(self, listener:fun(action:string, binding:string))
---@field Fire fun(self, action:string, binding:string)


```
</epip>

## Methods
<epip class="OptionsInputUI" symbols="Function">

```lua
function Client.UI.OptionsInput.SaveBindings()

---Loads the user's bindings from the disk.
function Client.UI.OptionsInput.LoadBindings()

---@param actionID string
---@param bindingIndex integer
---@param keybind string
function Client.UI.OptionsInput.SetKeybind(actionID, bindingIndex, keybind)

---Updates the input map. Call this every time after modifying the user's keybindings.
---@return table<string, string[]>
function Client.UI.OptionsInput.UpdateInputMap()

---@param index integer
function Client.UI.OptionsInput:GetShortInputString(index)

---Get the saved keybinds for an action.
---@param action string
---@return OptionsInputSavedKeybind 
function Client.UI.OptionsInput.GetKeybinds(action)

---Get the data for a custom action.
---@return OptionsInputKeybind 
function Client.UI.OptionsInput.GetActionData(action)

---@param action OptionsInputKeybind
function Client.UI.OptionsInput.RegisterAction(action)

---@param id string
---@param tab OptionsInputTab
function Client.UI.OptionsInput.RegisterTab(id, tab)

---@param tabID string
---@param keybind OptionsInputKeybind
function Client.UI.OptionsInput.AddEntry(tabID, keybind)

---@param tabID integer
function Client.UI.OptionsInput.GetTabIndex(tabID)

---@return boolean 
function Client.UI.OptionsInput.IsBindingKey()

---@param key string
function Client.UI.OptionsInput.SetPotentialBinding(key)

```
</epip>

## Objects
<epip class="OptionsInputUI" symbols="Class">

```lua
---@class OptionsInputUI : Feature
---@field CUSTOM_TABS table<string, OptionsInputTab>
---@field TAB_ORDER string[]
---@field nextCustomTabID integer
---@field renderedCustomTabs table<integer, string>
---@field tabIndexes table<string, integer>
---@field nextEntryID integer
---@field entries table<integer, string>
---@field keyBeingBound? string
---@field indexBeingBound? integer
---@field potentialBinding? string
---@field BINDINGS table<string, OptionsInputSavedKeybind>
---@field ACTIONS table<string, OptionsInputKeybind>
---@field INPUT_MAP table<string, string[]> Maps keyboard inputs to a list of actions that are bound to it.


---@class OptionsInputTab
---@field ID string
---@field Name string
---@field Label string?
---@field Keybinds OptionsInputKeybind[]


---@class OptionsInputKeybind
---@field Name string
---@field ID string
---@field DefaultInput1 string TODO
---@field DefaultInput2 string TODO


---@class OptionsInputSavedKeybind
---@field ID string
---@field Input1 OptionsInputBinding
---@field Input2 OptionsInputBinding


```
</epip>
# OptionsInput
The OptionsInput UI script handles new functionality for the input settings menu, which, curiously, is actually a separate UI from the settings menu, and just like it, it does not exist whilst not open.

Epip extends it to provide custom keybinding configuration tabs, as well as to read the user's current keybindings as strings to display elsewhere.

## Events & Hooks
<epip class="OptionsInputUI" symbols="Event,Hook">

```lua
---@event ActionExecuted
---@field RegisterListener fun(self, listener:fun(action:string, binding:string))
---@field Fire fun(self, action:string, binding:string)


---@hook ShouldRenderEntry
---@field RegisterHook fun(self, handler:fun(render:boolean, entry:OptionsInputKeybind))
---@field Return fun(self, render:boolean, entry:OptionsInputKeybind)


---Saves the user's bindings to the disk.
---@hook CanExecuteAction
---@field RegisterHook fun(self, handler:fun(execute:boolean, action:string, data:OptionsInputKeybind))
---@field Return fun(self, execute:boolean, action:string, data:OptionsInputKeybind)


```
</epip>

## Methods
<epip class="OptionsInputUI" symbols="Function">

```lua
function Options.SaveBindings()

---Returns whether a keybind should show up in the UI.
---@param entry OptionsInputKeybind
---@return boolean 
function Options.ShouldRenderEntry(entry)

---Returns whether an action can be currently executed.
---@param actionID string
---@return boolean 
function Options.CanExecuteAction(actionID)

---Loads the user's bindings from the disk.
function Options.LoadBindings()

---@param actionID string
---@param bindingIndex integer
---@param keybind string
function Options.SetKeybind(actionID, bindingIndex, keybind)

---Updates the input map. Call this every time after modifying the user's keybindings.
---@return table<string, string[]>
function Options.UpdateInputMap()

---@param index integer
function _SavedKeybind:GetShortInputString(index)

---Get the saved keybinds for an action.
---@param action string
---@return OptionsInputSavedKeybind 
function Options.GetKeybinds(action)

---Get the data for a custom action.
---@return OptionsInputKeybind 
function Options.GetActionData(action)

---@param action OptionsInputKeybind
function Options.RegisterAction(action)

---@param id string
---@param tab OptionsInputTab
function Options.RegisterTab(id, tab)

---@param tabID string
---@param keybind OptionsInputKeybind
function Options.AddEntry(tabID, keybind)

---@param tabID integer
function Options.GetTabIndex(tabID)

---@return boolean 
function Options.IsBindingKey()

---@param key string
function Options.SetPotentialBinding(key)

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
---@field DefaultInput1 string?
---@field DefaultInput2 string?
---@field DeveloperOnly boolean? If true, the binding will not be visible in the UI outside of developer mode (and won't function either)


---@class OptionsInputSavedKeybind
---@field ID string
---@field Input1 OptionsInputBinding
---@field Input2 OptionsInputBinding


```
</epip>
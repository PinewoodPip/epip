# ComboBox
The `GenericUI_Element_ComboBox` element implements a combobox form element. The user may change its value to any labelled one from a predefined list.

You can set its options with `SetOptions()` or `AddOption()`. Comboboxes contain no options by default.

## Classes

<doc class="GenericUI_Element_ComboBox" symbols="_SubClasses">

```lua
---Represents an option in the combobox.
---@class GenericUI_Element_ComboBox_Option
---@field Label string
---@field ID string

```
</doc>

## Events

<doc class="GenericUI_Element_ComboBox" symbols="Listenable">

```lua
---Fired when the user selects an option.
---@event OptionSelected
---@field Option GenericUI_Element_ComboBox_Option
---@field Index integer

```
</doc>

## Methods

<doc class="GenericUI_Element_ComboBox" symbols="Function">

```lua
---Sets the currently selected option.
---@param id string
function ComboBox:SelectOption(id)

---Removes all options from the combobox.
function ComboBox:ClearOptions()

---Sets whether the combobox should open upwards, or downwards (default)
---Use to determine the orientation of the options selector when opened.
---@param openUpwards boolean
function ComboBox:SetOpenUpwards(openUpwards)

---Sets the options for the combobox. Equivalent to calling `ClearOptions()` then `AddOption()` for each option in the list passed.
---@param options GenericUI_Element_ComboBox_Option[]
function ComboBox:SetOptions(options)

---Adds an option to the combobox.
---@param id string
---@param label string
function ComboBox:AddOption(id, label)

```
</doc>
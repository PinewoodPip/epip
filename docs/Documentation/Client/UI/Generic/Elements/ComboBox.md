# ComboBox
The `GenericUI_Element_ComboBox` element implements a combobox form element. The user may change its value to any labelled one from a predefined list.

You can set its options with `SetOptions()` or `AddOption()`. Comboboxes contain no options by default.

<doc class="GenericUI_Element_ComboBox">

# GenericUI_Element_ComboBox Class

Inherits from <code>GenericUI_Element</code>.

## Methods

##### AddOption

```lua
function GenericUI_Element_ComboBox:AddOption(id, label)
```

Adds an option to the combobox.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>label</b> <code>string</code></p>

##### ClearOptions

```lua
function GenericUI_Element_ComboBox:ClearOptions()
```

Removes all options from the combobox.

##### SelectOption

```lua
function GenericUI_Element_ComboBox:SelectOption(id)
```

Sets the currently selected option.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string</code></p>

##### SetOpenUpwards

```lua
function GenericUI_Element_ComboBox:SetOpenUpwards(openUpwards)
```

Sets whether the combobox should open upwards, or downwards (default)

Use to determine the orientation of the options selector when opened.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>openUpwards</b> <code>boolean</code></p>

##### SetOptions

```lua
function GenericUI_Element_ComboBox:SetOptions(options)
```

Sets the options for the combobox. Equivalent to calling `ClearOptions()` then `AddOption()` for each option in the list passed.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>options</b> <code>GenericUI_Element_ComboBox_Option[]</code></p>
</doc>
# ComboBox
The `GenericUI_Element_ComboBox` element implements a combobox form element. The user may change its value to any labelled one from a predefined list.

You can set its options with `SetOptions()` or `AddOption()`. Comboboxes contain no options by default.

<doc package="GenericUI_Element_ComboBox">



## Events and Hooks

##### OptionSelected (event)

Fired when the user selects an option.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Option</b> <code>GenericUI_Element_ComboBox_Option</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Index</b> <code>integer</code> </p>



## Methods

#### SetOptions



```lua
function ComboBox:SetOptions(options)
```



Sets the options for the combobox. Equivalent to calling `ClearOptions()` then `AddOption()` for each option in the list passed.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>options</b> <code>GenericUI_Element_ComboBox_Option[]</code> </p>

#### AddOption



```lua
function ComboBox:AddOption(id, label)
```



Adds an option to the combobox.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>id</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>label</b> <code>string</code> </p>

#### SelectOption



```lua
function ComboBox:SelectOption(id)
```



Sets the currently selected option.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>id</b> <code>string</code> </p>

#### ClearOptions



```lua
function ComboBox:ClearOptions()
```



Removes all options from the combobox.

#### SetOpenUpwards



```lua
function ComboBox:SetOpenUpwards(openUpwards)
```



Sets whether the combobox should open upwards, or downwards (default)
Use to determine the orientation of the options selector when opened.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>openUpwards</b> <code>boolean</code> </p>
</doc>
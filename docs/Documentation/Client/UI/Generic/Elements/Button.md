# Button

!!! warning "Deprecated"
    This element has been deprecated in favor of a Prefab-based solution. See `GenericUI_Prefab_Button`.
    The element continues to be available for backwards compatibility.

The `GenericUI_Element_Button` button element implements a typical button form element. It may be disabled (preventing user interaction) and will fire a contextual event if it is activated while not disabled.

<doc class="GenericUI_Element_Button">

# GenericUI_Element_Button Class

## Methods

##### IsEnabled

```lua
function GenericUI_Element_Button:IsEnabled()
   -> boolean
```

Returns whether the button is enabled.

##### SetEnabled

```lua
function GenericUI_Element_Button:SetEnabled(enabled)
```

Sets the button's enabled state. Enabled buttons are interactable.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>enabled</b> <code>boolean</code></p>

##### SetText

```lua
function GenericUI_Element_Button:SetText(text, textY)
```

Sets the button's text.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>text</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>textY</b> <code>number?</code> Vertical offset for the text. Use for centering.</p>

##### SetType

```lua
function GenericUI_Element_Button:SetType(buttonType)
```

Sets the button's visuals.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>buttonType</b> <code>GenericUI_Element_Button_Type</code></p>
</doc>
# Button
The `GenericUI_Prefab_Button` prefab implements a button; an element that can be clicked and visually reacts to user interaction.

This prefab is intended to replace the built-in `Button` and `StateButton` elements. It's major advantage is easier styling and maintainability, as there is no flash code directly involved.

Buttons implement `I_Stylable`, which allows customizing their group of textures and other visual assets to use. Styles can be registered via `:RegisterStyle()` and fetched using `:GetStyle()`.

StateButtons (buttons that toggle between active/inactive states) are created by supplying and additional style to use for the active state, via `:SetActiveStyle()`.

Epip has many premade button styles. You may browse them via `GenericUITextures` UI.

The button prefab additionally supports adding an IggyIcon to it with `:SetIcon()`.

<doc class="GenericUI_Prefab_Button">

# GenericUI_Prefab_Button Class

Inherits from <code>GenericUI_Prefab, GenericUI_I_Stylable, GenericUI_I_Elementable</code>.

Prefab for a button.

## Events and Hooks

#### Pressed (event)

Fires only if the button is enabled.

#### RightClicked (event)

An event object with no parameters.

## Methods

##### Create

```lua
function GenericUI_Prefab_Button.Create(ui, id, parent, style)
   -> GenericUI_Prefab_Button
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>ui</b> <code>GenericUI_Instance</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>parent</b> <code>GenericUI_Element|string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>style</b> <code>GenericUI_Prefab_Button_Style</code></p>

##### GetIconElement

```lua
function GenericUI_Prefab_Button:GetIconElement()
   -> GenericUI_Element_IggyIcon?
```

Returns the icon element, if any.

##### GetLabelElement

```lua
function GenericUI_Prefab_Button:GetLabelElement()
   -> GenericUI_Prefab_Text
```

Returns the label element.

##### GetRootElement

```lua
function GenericUI_Prefab_Button:GetRootElement()
```

@override

##### IsActivated

```lua
function GenericUI_Prefab_Button:IsActivated()
   -> boolean
```

Returns whether the button is activated.

Will throw if the button is not a state button.

##### IsEnabled

```lua
function GenericUI_Prefab_Button:IsEnabled()
   -> boolean
```

Returns whether the button is enabled.

Disabled buttons do not fire the Pressed event.

##### SetActivated

```lua
function GenericUI_Prefab_Button:SetActivated(activated)
```

Sets the activated state of the button.

Will throw if the button is not a state button.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>activated</b> <code>any</code></p>

##### SetActiveStyle

```lua
function GenericUI_Prefab_Button:SetActiveStyle(style)
```

Sets a style to be used while the button is active.

**This cannot be used to revert the button to a normal one if it was already a state button.**

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>style</b> <code>GenericUI_Prefab_Button_Style</code> If background fields are not assigned, the normal style will be used as fallback.</p>

##### SetEnabled

```lua
function GenericUI_Prefab_Button:SetEnabled(enabled)
```

Sets the enabled state of the button.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>enabled</b> <code>boolean</code></p>

##### SetIcon

```lua
function GenericUI_Prefab_Button:SetIcon(icon, size, relativePosition, offset)
```

Sets an icon for the button.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>icon</b> <code>icon</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>size</b> <code>Vector2</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>relativePosition</b> <code>GenericUI_Element_RelativePosition?</code> Defaults to `"Center"`.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>offset</b> <code>Vector2?</code> Defaults to `(0, 0)`.</p>

##### SetLabel

```lua
function GenericUI_Prefab_Button:SetLabel(label, align)
```

Sets the label of the button.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>label</b> <code>string</code> Set to an empty string to hide the label.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>align</b> <code>GenericUI_Element_Text_Align?</code> Defaults to `"Center"`.</p>

##### SetTooltip

```lua
function GenericUI_Prefab_Button:SetTooltip(type, tooltip)
```

Sets the tooltip of the element.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>type</b> <code>TooltipLib_TooltipType</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>tooltip</b> <code>any</code> TODO document</p>

##### __OnStyleChanged

```lua
---@protected
function GenericUI_Prefab_Button:__OnStyleChanged()
```

@override
</doc>

<doc classWithFields="GenericUI_Prefab_Button_Style">

# GenericUI_Prefab_Button_Style Class

Inherits from <code>GenericUI_I_Stylable_Style</code>.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>IdleTexture</b> <code>TextureLib_Texture</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>HighlightedTexture</b> <code>TextureLib_Texture</code> If not present, `IdleTexture` will be used instead.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>PressedTexture</b> <code>TextureLib_Texture?</code> If not present, `IdleTexture` will be used instead.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>DisabledTexture</b> <code>TextureLib_Texture?</code> If not present, `IdleTexture` will be used instead.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Size</b> <code>Vector2?</code> Defaults to texture size.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Sound</b> <code>string?</code> Sound effect to play when the button is pressed. Defaults to `DEFAULT_SOUND`.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>IdleOverlay</b> <code>TextureLib_Texture?</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>HighlightedOverlay</b> <code>TextureLib_Texture?</code> If not present, `IdleOverlay` will be used instead.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>PressedOverlay</b> <code>TextureLib_Texture?</code> If not present, `IdleOverlay` will be used instead.</p>

## Methods
</doc>
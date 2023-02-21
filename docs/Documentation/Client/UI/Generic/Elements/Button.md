# Button
The `GenericUI_Element_Button` button element implements a typical button form element. It may be disabled (preventing user interaction) and will fire a contextual event if it is activated while not disabled.

## Events

<doc class="GenericUI_Element_Button" symbols="Listenable">

```lua
---@event Pressed

```
</doc>

## Methods

<doc class="GenericUI_Element_Button" symbols="Function">

```lua
---Sets the button's text.
---@param text string
---@param textY number? Vertical offset for the text. Use for centering.
function Button:SetText(text, textY)

---Sets the button's visuals.
---@param buttonType GenericUI_Element_Button_Type
function Button:SetType(buttonType)

---Sets the button's enabled state. Enabled buttons are interactable.
---@param enabled boolean
function Button:SetEnabled(enabled)

---Returns whether the button is enabled.
---@return boolean 
function Button:IsEnabled()

```
</doc>
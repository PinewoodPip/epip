# Button
The `GenericUI_Element_Button` button element implements a typical button form element. It may be disabled (preventing user interaction) and will fire a contextual event if it is activated while not disabled.

<doc package="GenericUI_Element_Button">



## Events and Hooks

##### Pressed (event)



## Methods

#### SetText



```lua
function Button:SetText(text, textY)
```



Sets the button's text.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>text</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>textY</b> <code>number?</code> Vertical offset for the text. Use for centering.</p>

#### SetType



```lua
function Button:SetType(buttonType)
```



Sets the button's visuals.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>buttonType</b> <code>GenericUI_Element_Button_Type</code> </p>

#### SetEnabled



```lua
function Button:SetEnabled(enabled)
```



Sets the button's enabled state. Enabled buttons are interactable.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>enabled</b> <code>boolean</code> </p>

#### IsEnabled



```lua
function Button:IsEnabled()
   -> boolean
```



Returns whether the button is enabled.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>
</doc>
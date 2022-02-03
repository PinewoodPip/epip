# MessageBox

`Client.UI.MessageBox` is used to send custom prompts (like with `OpenMessageBox` in Osiris).

# Events
Subscribe with `Client.UI.MessageBox:RegisterListener(event: string, handler: function)`. You can subscribe to events coming from a specific message box with `RegisterMessageListener()` instead.

<doc events="MessageBoxUI">

```lua
---Fired when a button is pressed on any custom message box.
---@event ButtonClicked
---@param id number Button ID.
---@param data MessageBoxData
```
```lua
---Fired when a message box with an input field is closed.
---@event InputSubmitted
---@param input string
---@param id number Button ID.
---@param data MessageBoxData
```
</doc>

# Fields
<doc fields="MessageBoxUI">

```lua
---@class MessageBoxUI
---@field POPUP_TYPES table<string, number>
---@field currentCustomMessageBox MessageBoxData Internal; do not set!
```
</doc>

# Functions
<doc lib="MessageBoxUI">

```lua
---Show a message box.
---@param data MessageBoxData
function MessageBox.ShowMessageBox(data) -- Client-only
```
```lua
---Register an event listener for a message box with a specific ID.
---@param id string Message box ID.
---@param event string Event ID. See the regular events.
---@param handler function
function MessageBox:RegisterMessageListener(id, event, handler) -- Client-only
```
</doc>
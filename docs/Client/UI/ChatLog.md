# ChatLog
The ChatLog UI displays and manages the chat log. Epip's script allows you to add custom tabs to it (like the Party/All Players tabs by default).

Examples of its use are the chat commands features, which intercept sent messages to execute terminal-style commands.

## Events & Hooks

<epip class="ChatLogUI" symbols="Event,Hook">

```lua
---Fired when the client sends a message in chat. TODO pass tab
---@event MessageSent
---@field RegisterListener fun(self, listener:fun(text:string, clientChar:EclCharacter))
---@field Fire fun(self, text:string, clientChar:EclCharacter)


---Fired when a message is rendered onto the UI.
---@event MessageAdded
---@field RegisterListener fun(self, listener:fun(tab:integer|string, text:string))
---@field Fire fun(self, tab:integer|string, text:string)


---Fired when the client attempts to send a message.
---@hook CanSendMessage
---@field RegisterHook fun(self, handler:fun(canSend:boolean, text:string, char:EclCharacter))
---@field Return fun(self, canSend:boolean, text:string, char:EclCharacter)


```
</epip>

## Methods

<epip class="ChatLogUI" symbols="Function">

```lua
---Sends text onto the chatbox, using the vanilla colors and font sizes.
---@param tab integer|string Tab ID. See ChatLog.TABS enum. For custom tabs, use your string ID.
---@param userName string
---@param message string
function Chat.AddFormattedMessage(tab, userName, message)

---Clear a chat tab's messages.
---Render raw text onto the chatbox.
---@param tab integer|string
---@param tab? integer|string Tab ID. See ChatLog.TABS enum. For custom tabs, use your string ID. Defaults to current tab.
---@param text string
function Chat.AddMessage(tab, text)

---Adds a tab to the chat log.
---@param tabID string
---@param label string
function Chat.AddTab(tabID, label)

```
</epip>

## Objects

<epip class="ChatLogUI" symbols="Class">

```lua
---@class ChatLogUI : UI


```
</epip>
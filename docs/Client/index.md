# Client
The `Client` table contains client-specific calls as well as tables with APIs for UIs. It is only available on the Client context.

The "Client character" here refers to the currently-controlled character on the client.

## Fields
<doc fields="Client">

```lua
---@class Client
---@field UI ClientUI
---@field Input ClientInput
---@field IS_HOST boolean Internal; do not set!
```
</doc>

## Functions
<doc lib="Client">

```lua
---Get the Source Infusion level the client character is currently preparing.
---@return number Infusion level
function Client.GetPreparedInfusionLevel() -- Client-only, EE-related
```
```lua
---Returns true if the client character is preparing a Source Infusion.
---@return boolean
function Client.IsPreparingInfusion() -- Client-only, EE-related
```
```lua
---Returns true if the client is the host of the current session.  
---Relies on GameMenu.
---@return boolean
function Client.IsHost() -- Client-only
```
```lua
---Returns the currently-controlled character on the client.  
---Checks StatusConsole, then CharacterCreation as a fallback.
---@return EclCharacter
function Client.GetCharacter() -- Client-only
```
```lua
--- Copies text to the clipboard.  
---Some characters, like newlines, will be trimmed out as per the vanilla scripting on the swf.
---Relies on MessageBox.
---@param text string
function Client.CopyToClipboard(text) -- Client-only
```
</doc>
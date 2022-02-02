# Client
The `Client` table contains client-specific calls as well as tables with APIs for UIs. It is only available on the Client context.

The "Client character" here refers to the currently-controlled character on the client.

## Fields
<doc fields="Client">

```lua
---@field UI ClientUI
---@field Input ClientInput
---@field IS_HOST boolean Internal; do not set!
```
</doc>

## Functions
<doc lib="Client">

```lua
---@type Client
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
---@return boolean
function Client.IsHost() -- Client-only
```
```lua
---Returns the currently-controlled character on the client.
---@return EclCharacter
function Client.GetCharacter() -- Client-only
```
</doc>
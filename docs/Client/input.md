# Input
`Client.Input` contains input-related queries.

## Functions
<doc lib="ClientInput">

```lua
---@type Input
---Returns true if the game is unpaused and there are no focused elements in Flash.
---@return boolean
function Input.IsAcceptingInput() -- Client-only
```
```lua
---Returns true if the key bound to the event `id` is being held.  
---Note that not all InputEvents support being held.
---@param id number Input event id.
---@return boolean
function Input.KeyHeld(id) -- Client-only
```
```lua
---Returns whether a modifier key is being held.  
---Set modifier keys with `Input.SetModifierKey`.  
---Default is ToggleSneakCones.
---@param num number|nil Which modifier key to check.
---@return boolean
function Input.IsHoldingModifierKey(num) -- Client-only
```
```lua
---Sets the InputEvent for a modifier key.  
---You can declare as many modifier keys as you want,  
---and query them with `Input.IsHoldingModifierKey()`.
---@param event number The InputEvent.
---@param num number Which modifier key to set.
function Input.SetModifierKey(event, num) -- Client-only
```
</doc>
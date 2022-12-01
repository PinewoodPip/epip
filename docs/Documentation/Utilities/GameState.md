# GameState
The `GameState` library contains methods and events related to the global game state - that is, whether it's in a session, loading, paused, etc.

Its events are helpful for initialization purposes. `ClientReady`, for example, fires when the client transitions from `PrepareRunning` to `Running` and is a great moment to initialize anything that could need the client character to be present and/or send messages to the server (both of which are not reliable to do before that point).

<!-- ## Classes

<doc class="GameStateLib" symbols="_SubClasses">

</doc> -->

## Events

<doc class="GameStateLib" symbols="Listenable">

```lua
---@netmsg EPIPENCOUNTERS_GameStateLib_ClientReady : NetMessage, GameStateLib_Event_ClientReady

---@event GamePaused

---@event GameUnpaused

---Fires when the game transitions from PrepareRunning to Running (on the client)
---or when transitioning from Sync to Running (on the server)
---@event GameReady

---Fired every tick while the game is not paused.
---@event RunningTick
---@field DeltaTime integer Milliseconds elapsed since last tick (NOT the last running tick)

---@event StateChanged
---@field From GameState
---@field To GameState

---Fired when the client transitions from PrepareRunning to Running,
---as well as when lua is reset.
---@event ClientReady
---@field CharacterNetID NetId
---@field ProfileGUID GUID

```
<doc class="GameStateLib" symbols="Function">

```lua
---Returns whether the game state is currently in a session.
---@return boolean 
function GameState.IsInSession()

function GameState.IsLoading()

---@return boolean 
function GameState.IsPaused()

---@return GameState 
function GameState.GetState()

---@return boolean 
function GameState.IsPaused()

---@return GameState 
function GameState.GetState()

---@return boolean 
function GameState.IsSessionLoaded()

```

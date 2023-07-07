# GameState
The `GameState` library contains methods and events related to the global game state - that is, whether it's in a session, loading, paused, etc.

Its events are helpful for initialization purposes. `ClientReady`, for example, fires when the client transitions from `PrepareRunning` to `Running` and is a great moment to initialize anything that could need the client character to be present and/or send messages to the server (both of which are not reliable to do before that point).

<doc class="GameStateLib">

# GameStateLib Class

## Events and Hooks

#### GamePaused (event)

#### GameUnpaused (event)

#### StateChanged (event)

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>From</b> <code>GameState</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>To</b> <code>GameState</code></p>

#### GameReady (event)

Fires when the game transitions from PrepareRunning to Running (on the client)

or when transitioning from Sync to Running (on the server)

#### Tick (event)

Fired every tick.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>DeltaTime</b> <code>integer</code> Milliseconds elapsed since last tick</p>

#### RunningTick (event)

Fired every tick while the game is not paused.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>DeltaTime</b> <code>integer</code> Milliseconds elapsed since last tick (NOT the last running tick)</p>

#### LuaResetted (event)

An event object with no parameters.

#### ClientReady (event)

Fired when the client transitions from PrepareRunning to Running,

as well as when lua is reset.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>CharacterNetID</b> <code>NetId</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>ProfileGUID</b> <code>GUID</code></p>

#### RegionStarted (event)

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>LevelID</b> <code>string</code></p>

## Methods

##### GetState

```lua
function GameStateLib.GetState() -- (Server-only)
   -> GameState
```

##### GetState

```lua
function GameStateLib.GetState() -- (Client-only)
   -> GameState
```

##### IsInMainMenu

```lua
function GameStateLib.IsInMainMenu()
   -> boolean
```

Returns whether the game is in a main menu-related state.

##### IsInRunningSession

```lua
function GameStateLib.IsInRunningSession()
   -> boolean
```

Returns whether the game state is within a running session (not paused)

##### IsInSession

```lua
function GameStateLib.IsInSession()
   -> boolean
```

Returns whether the game state is currently in a session.

##### IsLoading

```lua
function GameStateLib.IsLoading()
   -> boolean
```

Returns whether the game is within a loading-related state.

##### IsPaused

```lua
function GameStateLib.IsPaused() -- (Client-only)
   -> boolean
```

##### IsPaused

```lua
function GameStateLib.IsPaused() -- (Server-only)
   -> boolean
```

##### IsSessionLoaded

```lua
function GameStateLib.IsSessionLoaded() -- (Server-only)
   -> boolean
```
</doc>

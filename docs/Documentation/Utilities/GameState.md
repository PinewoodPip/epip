# GameState
The `GameState` library contains methods and events related to the global game state - that is, whether it's in a session, loading, paused, etc.

Its events are helpful for initialization purposes. `ClientReady`, for example, fires when the client transitions from `PrepareRunning` to `Running` and is a great moment to initialize anything that could need the client character to be present and/or send messages to the server (both of which are not reliable to do before that point).

<doc package="GameStateLib">



## Events and Hooks

##### GamePaused (event)

##### GameUnpaused (event)

##### GameReady (event)

Fires when the game transitions from PrepareRunning to Running (on the client)or when transitioning from Sync to Running (on the server)

##### Tick (event)

Fired every tick.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>DeltaTime</b> <code>integer</code> Milliseconds elapsed since last tick</p>

##### RunningTick (event)

Fired every tick while the game is not paused.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>DeltaTime</b> <code>integer</code> Milliseconds elapsed since last tick (NOT the last running tick)</p>

##### StateChanged (event)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>From</b> <code>GameState</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>To</b> <code>GameState</code> </p>

##### ClientReady (event)

Fired when the client transitions from PrepareRunning to Running,as well as when lua is reset.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>CharacterNetID</b> <code>NetId</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>ProfileGUID</b> <code>GUID</code> </p>

##### RegionStarted (event)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>LevelID</b> <code>string</code> </p>



## Methods

#### IsInSession



```lua
function GameState.IsInSession()
   -> boolean
```



Returns whether the game state is currently in a session.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsLoading



```lua
function GameState.IsLoading()
   -> boolean
```



Returns whether the game is within a loading-related state.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsInMainMenu



```lua
function GameState.IsInMainMenu()
   -> boolean
```



Returns whether the game is in a main menu-related state.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsInRunningSession



```lua
function GameState.IsInRunningSession()
   -> boolean
```



Returns whether the game state is within a running session (not paused)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsPaused



```lua
function GameState.IsPaused()
   -> boolean
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetState



```lua
function GameState.GetState()
   -> GameState
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>GameState</code> </p>

#### IsPaused



```lua
function GameState.IsPaused()
   -> boolean
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetState



```lua
function GameState.GetState()
   -> GameState
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>GameState</code> </p>

#### IsSessionLoaded



```lua
function GameState.IsSessionLoaded()
   -> boolean
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>
</doc>

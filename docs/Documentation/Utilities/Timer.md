# Timer
The `Timer` library implements timers, for running scripting with a delay. Since listeners for the timers ending can be registered in-line, they are usually cleaner to use than the Osiris timers. Additionally, they are available on the client.

<doc class="TimerLib">

# TimerLib Class

## Events and Hooks

#### TimerCompleted (event)

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Timer</b> <code>TimerLib_Entry</code></p>

## Methods

##### GetTimer

```lua
function TimerLib.GetTimer(stringID)
   -> TimerLib_Entry
```

Returns the timer with the passed string ID.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>stringID</b> <code>string</code></p>

##### Remove

```lua
function TimerLib.Remove(timer)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>timer</b> <code>TimerLib_Entry</code></p>

##### Start

```lua
function TimerLib.Start(id, seconds, handler, timerType)
   -> TimerLib_Entry|TimerLib_TickTimerEntry
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string?</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>seconds</b> <code>number</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>handler</b> <code>fun(ev:TimerLib_Event_TimerCompleted)</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>timerType</b> <code>("Normal"|"Tick")?</code> Defaults to `"Normal"`</p>

##### StartTickTimer

```lua
function TimerLib.StartTickTimer(id, ticks, handler)
   -> TimerLib_TickTimerEntry
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string?</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>ticks</b> <code>number</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>handler</b> <code>fun(ev:TimerLib_Event_TimerCompleted)</code></p>

##### __Test

```lua
---@protected
function TimerLib:__Test()
```
</doc>
# Timer
The `Timer` library implements timers, for running scripting with a delay. Since listeners for the timers ending can be registered in-line, it's usually cleaner to use than the Osiris timers. Additionally, they are available on the client.

<doc package="TimerLib">



## Events and Hooks

##### TimerCompleted (event)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Timer</b> <code>TimerLib_Entry</code> </p>



## Methods

#### Start



```lua
function Timer.Start(id, seconds, handler, timerType)
   -> TimerLib_Entry|TimerLib_TickTimerEntry
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>id</b> <code>string?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>seconds</b> <code>number</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>handler</b> <code>fun(ev:TimerLib_Event_TimerCompleted)</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>timerType</b> <code>("Normal"|"Tick")?</code> Defaults to `"Normal"`</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>TimerLib_Entry|TimerLib_TickTimerEntry</code> </p>

#### StartTickTimer



```lua
function Timer.StartTickTimer(id, ticks, handler)
   -> TimerLib_TickTimerEntry
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>id</b> <code>string?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>ticks</b> <code>number</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>handler</b> <code>fun(ev:TimerLib_Event_TimerCompleted)</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>TimerLib_TickTimerEntry</code> </p>

#### GetTimer



```lua
function Timer.GetTimer(stringID)
   -> TimerLib_Entry
```



Returns the timer with the passed string ID.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>stringID</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>TimerLib_Entry</code> </p>

#### Remove



```lua
function Timer.Remove(timer)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>timer</b> <code>TimerLib_Entry</code> </p>
</doc>
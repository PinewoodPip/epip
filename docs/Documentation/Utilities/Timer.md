# Timer
The `Timer` library implements timers, for running scripting with a delay. Since listeners for the timers ending can be registered in-line, it's usually cleaner to use than the Osiris timers. Additionally, they are available on the client.

## Classes

<doc class="TimerLib" symbols="_SubClasses">

```lua
---@class TimerLib_Entry
---@field ID string?
---@field DurationLeft number
---@field InitialDuration number
---@field RepeatCount integer How many times the timer has repeated.
---@field Paused boolean

function _TimerEntry:Pause()

function _TimerEntry:Resume()

function _TimerEntry:Cancel()

---@param repeats integer
function _TimerEntry:SetRepeatCount(repeats)

---@param deltaTime number
---@return boolean Whether the timer has finished one iteration due to this call.
function _TimerEntry:TickDown(deltaTime)

---@return boolean 
function _TimerEntry:IsFinished()

---@param fun fun(ev:TimerLib_Event_TimerCompleted)
function _TimerEntry:Subscribe(fun)

```
```lua
---@class TimerLib_TickTimerEntry

function _TickTimer:TickDown(_)

```
</doc>

## Events

<doc class="TimerLib" symbols="Listenable">

```lua
---@event TimerCompleted
---@field Timer TimerLib_Entry

```
</doc>

## Methods

<doc class="TimerLib" symbols="Function">

```lua
---@overload fun(seconds:number, handler?:fun(ev:TimerLib_Event_TimerCompleted), id?:string):TimerLib_Entry|TimerLib_TickTimerEntry 
---@param id string?
---@param seconds number
---@param handler fun(ev:TimerLib_Event_TimerCompleted)
---@param timerType "Normal"|"Tick"
---@return TimerLib_Entry|TimerLib_TickTimerEntry 
function Timer.Start(id, seconds, handler, timerType)

---@overload fun(ticks:number, handler?:fun(ev:TimerLib_Event_TimerCompleted), id?:string):TimerLib_TickTimerEntry 
---@param id string?
---@param ticks number
---@param handler fun(ev:TimerLib_Event_TimerCompleted)
---@return TimerLib_TickTimerEntry 
function Timer.StartTickTimer(id, ticks, handler)

---Returns the timer with the passed string ID.
---@param stringID string
---@return TimerLib_Entry 
function Timer.GetTimer(stringID)

---@param timer TimerLib_Entry
function Timer.Remove(timer)

```
</doc>
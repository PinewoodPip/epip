# Feature
The `_Feature` table is the table that most libraries and actual mod features inherit from; it provides a plethora of generic utilities useful for any sort of script.

Included are logging methods, shorthands for applying path overrides, event & hook creation and dispatching, and more.

To use this table, you should call `Epip.AddFeature()`. This will register your script's table to the `Epip.Features` table and initialize the `_Feature` metatable.

## Methods
<epip class="Feature" symbols="Function">

```lua
---Add an event to the Events field.
---@param name string
---@param data? Event
---@return Event 
function _Feature:AddEvent(name, data)

---Add a hook to the Hooks field.
---@param name string
---@param data? Hook
---@return Hook 
function _Feature:AddHook(name, data)

---Returns whether the feature has *not* been disabled. Use to condition your feature's logic.
---@return boolean 
function _Feature:IsEnabled()

---Invoked on SessionLoaded if the feature is not disabled.
---Override to run initialization routines.
---Sets the Disabled flag.
function _Feature:Disable()

---Called after a feature is initialized with Epip.AddFeature(),
---if it is not disabled.
---Override to run initialization routines.
---Register an event listener.
---To define events with multiple variables, you can easily create a wrapper function for this (and FireEvent)
---that registers an event listener with a prefix(es).
---@param event string
---@param handler function
function _Feature:RegisterListener(event, handler)

---Fire an event.
---@param event string
function _Feature:FireEvent(event, ...)

---Register a hook.
---@param event string
---@param handler function
function _Feature:RegisterHook(event, handler)

---Get a value from registered hook listeners.
---@param event string
---@param defaultValue any Default value, will be passed to the first listener.
function _Feature:ReturnFromHooks(event, defaultValue, ...)

---Fire an event to all contexts and peers.
---@param event string
function _Feature:FireGlobalEvent(event, ...)

---Show debug-level logging from this feature.
---Only work in Developer mode.
function _Feature:Debug()

---Returns whether :Debug() has been ran successfully.
function _Feature:IsDebug()

---Stop all non-error, non-warning logging from this feature.
function _Feature:Mute()

---Stop all non-error logging.
function _Feature:ShutUp()

---Log a value in Debug mode.
function _Feature:DebugLog(...)

---Dump a value to the console, in Debug mode.
---@param msg any
function _Feature:Dump(msg)

---Log a value.
---@param msg any
function _Feature:Log(msg)

---Log values without any prefixing.
function _Feature:RawLog(...)

---Log a warning.
---@param msg any
function _Feature:LogWarning(msg)

---Log an error.
---@param msg any
function _Feature:LogError(msg)

```
</epip>

## Objects
<epip class="Feature" symbols="Class">

```lua
---@class Feature
---@field Name string Used for logging, event handling. Do not set!
---@field CONTEXT Context Set automatically.
---@field Disabled boolean
---@field Logging integer Logging level.
---@field Events table<string, Event> Metatables initialized automatically.
---@field Hooks table<string, Hook> Metatables initialized automatically.
---@field LOGGING_LEVEL table<string, integer> Valid logging levels.
---@field REQUIRED_MODS table<GUID, string> The feature will be automatically disabled if any required mods are missing.
---@field FILEPATH_OVERRIDES table<string, string>


```

# Library
The `Library` class is the [internal](../Terminology.md#internal) base class for libraries in Epip. It offers general-purpose utility methods, such as logging, debug flags, event systems, as well as integrations with some core Epip libraries to simplify the registration of resources.

`Epip.InitializeLibrary()` is meant to be used to define libraries, though you are not intended to do so in your own mod - use Features instead.

Library contains integrations with the following core Epip libraries:

- Text (for TSK registration and organizing TSKs by library/feature within the localization sheet)
- UserVars (for [namespacing](../Terminology.md#namespacing))
- OOP (for containing related subclasses)

Perceptive readers will realize that these integrations indeed create circular dependencies. This concern is however pretty low on the list.

The class includes some methods to filter out unwanted logging, however the recommended way to filter it is to use the "control panel" UI (`Feature_DebugMenu`, defaults to `LCtrl + B`) to set the logging level instead of calling the methods yourself anywhere.

<doc class="Library">

# Library Class

## Methods

##### AddProfilingStep

```lua
function Library:AddProfilingStep(stepID)
```

Adds a step to the current profiling session.

**Does nothing outside of Debug mode.**

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>stepID</b> <code>string</code></p>

##### AddSubscribableEvent

```lua
function Library:AddSubscribableEvent(evName, preventable)
   -> Event
```

Registers a new event.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>evName</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>preventable</b> <code>boolean?</code> Defaults to false.</p>

##### AddSubscribableHook

```lua
function Library:AddSubscribableHook(evName, preventable)
   -> Event
```

Registers a new hook.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>evName</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>preventable</b> <code>boolean?</code> Defaults to false.</p>

##### Create

```lua
function Library.Create(modTable, id, data)
   -> Library
```

Initializes a table as a Library.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>modTable</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>data</b> <code>Library</code></p>

##### Debug

```lua
function Library:Debug()
```

Show debug-level logging from this library.

Only works in Developer mode.

##### DebugLog

```lua
function Library:DebugLog()
```

Log a value in Debug mode.

##### Dump

```lua
function Library:Dump(msg)
```

Dump a value to the console, in Debug mode.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>msg</b> <code>any</code></p>

##### EndProfiling

```lua
function Library:EndProfiling()
```

Ends the current profiling session.

**Does nothing outside of Debug mode.**

##### Error

```lua
function Library:Error(method)
```

Throws an error prefixed by the thrower method name.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>method</b> <code>string</code></p>

##### GetClass

```lua
function Library:GetClass(className)
   -> `T`
```

Returns a class's base table.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>className</b> <code>`T`</code></p>

##### GetModVariable

```lua
function Library:GetModVariable(modGUID, name)
   -> any
```

Returns the value of a mod variable.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>modGUID</b> <code>GUID</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>name</b> <code>string</code></p>

##### GetPackagePrefix

```lua
function Library:GetPackagePrefix()
   -> string
```

Returns the package prefix for this library's subclasses.

##### GetTranslatedStringHandleForKey

```lua
function Library:GetTranslatedStringHandleForKey(localKey)
   -> TranslatedStringHandle?
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>localKey</b> <code>string</code></p>

##### GetUserVariable

```lua
function Library:GetUserVariable(component, variable)
   -> any
```

Gets the value of a user variable on an entity component.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>component</b> <code>UserVarsLib_CompatibleComponent</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>variable</b> <code>string|UserVarsLib_UserVar</code></p>

##### IsDebug

```lua
function Library:IsDebug()
   -> boolean
```

Returns whether `:Debug()` has been ran successfully.

##### Log

```lua
function Library:Log(...)
```

Log a value.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>...</b> <code>any</code></p>

##### LogError

```lua
function Library:LogError(...)
```

Log an error.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>...</b> <code>any</code></p>

##### LogMethod

```lua
function Library:LogMethod(method, ...)
```

Log a message in the format "[MODULE] method(): msg"

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>method</b> <code>any</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>...</b> <code>any</code></p>

##### LogNotImplemented

```lua
function Library:LogNotImplemented(methodName)
```

Logs a "Not implemented" warning. Use as a placeholder.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>methodName</b> <code>string</code></p>

##### LogWarning

```lua
function Library:LogWarning(...)
```

Log a warning.

Requires logging level to be set to WARN or lower.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>...</b> <code>any</code></p>

##### Mute

```lua
function Library:Mute()
```

Stop all non-error, non-warning logging from this feature.

##### RawLog

```lua
function Library:RawLog(...)
```

Log values without any prefixing.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>...</b> <code>any</code></p>

##### RegisterClass

```lua
function Library:RegisterClass(className, class, parentClasses)
   -> `T`
```

Registers a class.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>className</b> <code>`T`</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>class</b> <code>table</code> Class table.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>parentClasses</b> <code>string[]?</code> Classes this one inherits from.</p>

##### RegisterModVariable

```lua
function Library:RegisterModVariable(modGUID, name, data)
```

Registers a mod variable.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>modGUID</b> <code>GUID</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>name</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>data</b> <code>UserVarsLib_ModVar</code></p>

##### RegisterTranslatedString

```lua
function Library:RegisterTranslatedString(handle, tsk)
   -> Library_TranslatedString
```

Registers a TSK.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>handle</b> <code>TranslatedStringHandle</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>tsk</b> <code>Library_TranslatedString</code> ModTable, FeatureID and Handle fields are auto-initialized.</p>

##### RegisterUserVariable

```lua
function Library:RegisterUserVariable(name, data)
```

Registers a user variable.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>name</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>data</b> <code>UserVarsLib_UserVar?</code></p>

##### SetModVariable

```lua
function Library:SetModVariable(modGUID, name, value)
```

Sets the value of a mod variable.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>modGUID</b> <code>GUID</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>name</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>value</b> <code>any</code></p>

##### SetUserVariable

```lua
function Library:SetUserVariable(component, variable, value)
```

Sets the value of a user variable.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>component</b> <code>UserVarsLib_CompatibleComponent</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>variable</b> <code>string|UserVarsLib_UserVar</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>value</b> <code>any</code></p>

##### ShutUp

```lua
function Library:ShutUp()
```

Stop all non-error logging.

##### StartProfiling

```lua
function Library:StartProfiling(id)
```

Starts a profiling session.

**Does nothing outside of Debug mode.**

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string</code> Session ID.</p>

##### ThrowNotImplemented

```lua
function Library:ThrowNotImplemented(methodName)
```

Throws a "Not implemented" error. Use as a placeholder.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>methodName</b> <code>string</code></p>
</doc>
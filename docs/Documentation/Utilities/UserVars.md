# UserVars
The `UserVars` library contains wrapper methods for working with UserVars and ModVars. It allows fetching definitions of variables as well as their values.

You may also define default values to return if a variable is unset on the component/modvar.

<doc fields="UserVarsLib_UserVar">

# UserVarsLib_UserVar Class

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>ID</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Client</b> <code>boolean</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Server</b> <code>boolean</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>WriteableOnServer</b> <code>boolean</code> Defaults to `true`.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>WriteableOnClient</b> <code>boolean</code> Defaults to `false`.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Persistent</b> <code>boolean</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>SyncToClient</b> <code>boolean</code> Defaults to `true`.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>SyncToServer</b> <code>boolean</code> Defaults to `true`.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>SyncOnWrite</b> <code>boolean</code> Defaults to `false`.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>SyncOnTick</b> <code>boolean</code> Defaults to `true`.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>DontCache</b> <code>boolean</code> Defaults to `false`</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>DefaultValue</b> <code>any?</code></p>
</doc>

<doc class="UserVarsLib">

# UserVarsLib Class

## Methods

##### GetModVarDefinition

```lua
function UserVarsLib.GetModVarDefinition(modGUID, var)
   -> UserVarsLib_ModVar
```

Returns the definition of a mod variable.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>modGUID</b> <code>GUID</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>var</b> <code>string</code></p>

##### GetModVarValue

```lua
function UserVarsLib.GetModVarValue(modGUID, varName)
   -> any? -- Defaults to `DefaultValue`.
```

Returns the value of a mod var.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>modGUID</b> <code>GUID</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>varName</b> <code>string</code></p>

##### GetModVariables

```lua
function UserVarsLib.GetModVariables(modGUID)
   -> table
```

Returns the mod variables of a mod.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>modGUID</b> <code>GUID</code></p>

##### GetUserVarDefinition

```lua
function UserVarsLib.GetUserVarDefinition(varName)
   -> UserVarsLib_UserVar
```

Returns the definition of a user variable.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>varName</b> <code>string</code></p>

##### GetUserVarValue

```lua
function UserVarsLib.GetUserVarValue(component, varName)
   -> any? -- Defaults to `DefaultValue`.
```

Returns the value of a user variable for an entity.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>component</b> <code>UserVarsLib_CompatibleComponent</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>varName</b> <code>string</code></p>

##### RegisterModVariable

```lua
function UserVarsLib.RegisterModVariable(modGUID, name, data)
   -> UserVarsLib_ModVar
```

Registers a mod variable.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>modGUID</b> <code>GUID</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>name</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>data</b> <code>UserVarsLib_ModVar?</code> Defaults to default values (see class).</p>

##### RegisterUserVariable

```lua
function UserVarsLib.RegisterUserVariable(name, data)
   -> UserVarsLib_UserVar
```

Registers a user variable.

Must be done once for each context where you want the variable to exist.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>name</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>data</b> <code>UserVarsLib_UserVar?</code> Defaults to default values (see class).</p>
</doc>
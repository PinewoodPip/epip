# Epip
The `Epip` table mainly serves as a container for Features. It contains methods to register Features as well as libraries and UI tables.

Use `RegisterFeature()` to register and initialize a Feature.

<doc class="Epip">

# Epip Class

## Methods

##### GetFeature

```lua
function Epip.GetFeature(id)
   -> Feature|`T`
```

Overload for fetching features defined in EpipEncounters.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>`T`</code></p>

##### GetFeature

```lua
function Epip.GetFeature(modTable, id)
   -> Feature|`T`
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>modTable</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>`T`</code></p>

##### InitializeFeature

```lua
function Epip.InitializeFeature(modTable, id, feature)
```

TODO move to Feature

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>modTable</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>feature</b> <code>Feature</code></p>

##### InitializeLibrary

```lua
function Epip.InitializeLibrary()
```

##### IsDeveloperMode

```lua
function Epip.IsDeveloperMode(requirePipPoem)
   -> boolean
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>requirePipPoem</b> <code>boolean?</code> Whether a poem to Pip is required for this call to succeed. Defaults to false (which checks Extender dev mode instead)</p>

##### RegisterFeature

```lua
function Epip.RegisterFeature(modTable, id, feature)
```

Registers a feature, initializing its utility metatable and exposing it to other mods via GetFeature(). Should be called outside of any listener, as soon as the table is defined. This will also check for required path overrides and disable the feature if the required mods are not enabled.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>modTable</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>feature</b> <code>Feature</code></p>

##### SaveDump

```lua
function Epip.SaveDump(obj, opts, fileName)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>obj</b> <code>any</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>opts</b> <code>any?</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>fileName</b> <code>string?</code></p>
</doc>
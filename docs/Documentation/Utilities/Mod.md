# Mod
The `Mod` library contains wrapper methods for querying mod-related information.

The `GUIDS` table contains the GUIDs of various notable mods.

<doc class="ModLib">

# ModLib Class

## Methods

##### Get

```lua
function ModLib.Get()
   -> Module
```

Returns a mod by its guid.

##### GetCurrentContext

```lua
function ModLib.GetCurrentContext()
   -> "Client"|"Server"
```

Returns the context the caller script is running in.

##### GetLoadOrder

```lua
function ModLib.GetLoadOrder()
   -> Module[]
```

Returns a list of the currently loaded mods.

##### GetStoryVersion

```lua
function ModLib.GetStoryVersion(guid)
   -> integer?, integer?, integer?, integer? -- Major, minor, revision, build version. Fails if the mod is not loaded.
```

Returns the story version of a mod.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>guid</b> <code>GUID</code></p>

##### IsLoaded

```lua
function ModLib.IsLoaded(guid)
```

Returns whether a mod is loaded.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>guid</b> <code>GUID</code></p>
</doc>
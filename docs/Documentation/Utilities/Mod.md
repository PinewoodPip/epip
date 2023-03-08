# Mod
The `Mod` library contains wrapper methods for querying mod-related information.

The `GUIDS` table contains the GUIDs of various notable mods.

<doc package="ModLib">



## Methods

#### IsLoaded



```lua
function Mod.IsLoaded(guid)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>guid</b> <code>GUID</code> </p>

#### Get



```lua
function Mod.Get(guid)
   -> Module
```



Returns a mod by its guid.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Module</code> </p>

#### GetLoadOrder



```lua
function Mod.GetLoadOrder()
   -> Module[]
```



Returns a list of the currently loaded mods.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Module[]</code> </p>

#### GetStoryVersion



```lua
function Mod.GetStoryVersion(guid)
   -> integer?, integer?, integer?, integer? 
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>guid</b> <code>GUID</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer?, integer?, integer?, integer? </code> Major, minor, revision, build version. Fails if the mod is not loaded.</p>

#### GetCurrentContext



```lua
function Mod.GetCurrentContext()
   -> "Client"|"Server"
```



Returns the context the caller script is running in.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>"Client"|"Server"</code> </p>
</doc>
# Mod
The `Mod` library contains wrapper methods for querying mod-related information.

The `GUIDS` table contains the GUIDs of various notable mods.

<!-- ## Classes

<doc class="ModLib" symbols="_SubClasses">

</doc>
-->

<!-- ## Events

<doc class="ModLib" symbols="Listenable">

```lua
```
</doc>
-->

## Methods

<doc class="ModLib" symbols="Function">

```lua
---@param guid GUID
function Mod.IsLoaded(guid)

---Returns a mod by its guid.
---@return Module 
function Mod.Get(guid)

---Returns a list of the currently loaded mods.
---@return Module[] 
function Mod.GetLoadOrder()

---@param guid GUID
---@return integer?, integer?, integer?, integer? --Major, minor, revision, build version. Fails if the mod is not loaded.
function Mod.GetStoryVersion(guid)

```
</doc>
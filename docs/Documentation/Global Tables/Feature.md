# Feature
The `Feature` class is the base plugin class in Epip, which all end-user features inherit from. It provides a plethora of generic utilities useful for any sort of script, mainly in the form of integrations with other core Epip libraries.

Features are the recommended way of working with Epip. You may use as many or as few parts of the class as you want; nothing is forced onto you, however its utilities generally speed up development and reduce boilerplate code by quite a lot.

Features offer:

- Event and hook system
- Easy TSK registration
- Integration with libraries like Settings, Input, with automatic [namespacing](../Terminology.md#namespacing) to prevent ID conflicts
- "Disabling" and re-enabling the feature at runtime
- Declaring mod dependencies
- All utilities from the [Library](../Utilities/Library.md) class

Features are registered and initialized from the [Epip table](./Epip.md).

Features can be disabled by calling `:Disable()`, which may also be done automatically based on mod dependencies being missing or the game state being invalid. **Disabling a feature has no intrinsic meaning**. This does not "unload" nor stop their scripting; it's up to you to add `:IsEnabled()` checks to parts of your scripting that need only run while enabled. This is by design, so as to allow features to be disabled and re-enabled at any time, as well as to allow alternative logic to run while disabled - for example, you might want to show the user a message if they try to use your feature while it's disabled.

Consider Features as analogous to GameObjects in Unity (and most other engines): game objects, when disabled, continue to exist in a reduced manner, and their public interfaces remain available (to an extent). Once the game object is re-enabled, its routines resume as normal. Features are intended to work in a similar manner.

Features are not just used for scripts targeting the player user; in Epip they are also commonly used to create libraries or wrappers whose use is too specific to be made into a core library. Since Feature inherits from Library, all the tools to create good event-driven libraries remain available. You are encouraged to use Events and Hooks in any kind of feature to facilitate mod interoperability.

<doc class="Feature">

# Feature Class

## Methods

##### Create

```lua
function Feature.Create(modTable, id, feature)
   -> Feature
```

WIP. Do not use! Use Epip.RegisterFeature() for the time being.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>modTable</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>feature</b> <code>Feature</code></p>

##### GetNamespace

```lua
function Feature:GetNamespace()
   -> string
```

Returns a string containing the feature's mod table and ID.

Ex. `"MyModTable_MyFeature"`.

##### GetSettingValue

```lua
function Feature:GetSettingValue(setting)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>setting</b> <code>string|SettingsLib_Setting</code></p>

##### RegisterInputAction

```lua
function Feature:RegisterInputAction(id, action)
   -> InputLib_Action
```

Registers an InputLib action.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string</code> Will be prefixed with the mod table and feature ID.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>action</b> <code>InputLib_Action</code></p>

##### RegisterSetting

```lua
function Feature:RegisterSetting(id, data)
   -> SettingsLib_Setting
```

Registers a setting with the feature's module ID.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>id</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>data</b> <code>SettingsLib_Setting</code></p>

##### RegisterTest

```lua
function Feature:RegisterTest(name, func)
   -> Feature_Test
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>name</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>func</b> <code>fun(inst:CoroutineInstance)</code></p>

##### SaveSettings

```lua
function Feature:SaveSettings()
```

##### SetSettingValue

```lua
function Feature:SetSettingValue(setting, value)
```

Sets the value of a setting.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>setting</b> <code>string|SettingsLib_Setting</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>value</b> <code>any</code></p>

##### __Setup

```lua
---@protected
function Feature:__Setup()
```

Invoked on SessionLoaded if the feature is not disabled.

Override to run initialization routines.

##### __Test

```lua
---@protected
function Feature:__Test()
```

Invoked on a small delay after SessionLoaded if Epip.IsDeveloperMode(true) is true and the feature is being debugged.
</doc>
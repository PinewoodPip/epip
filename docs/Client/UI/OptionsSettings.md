# OptionsSettings
Handles the settings menu. Extended to allow for custom setting tabs. Note that the input menu is a different UI - documentation for it pending.

## Adding settings

To create a tab with settings for your mod, start by calling `RegisterMod(mod: string, data: OptionsSettingsOptionSet)`, before `SessionLoading` - preferably in the lua script's body.

The data table should have your mod's name, header (displayed at the top) and side button label (displayed on the button that switches tabs). You may also pass `Options` in the table at this time, or register settings later through `RegisterOptions`.

```lua
Client.UI.OptionsSettings.RegisterMod("EpipEncounters", {
    SideButtonLabel = "Epip Encounters",
    TabHeader = "<font color='7e72d6' size='23'>Epip Encounters</font>",
})
```

`Options` is a list of the options for the settings tab, in order that they will appear in. They are in the `OptionsSettingsOption` format - see [fields](#fields).

The following types of options exist:

- `Checkbox`: `OptionsSettingsCheckbox` struct
- `Dropdown`: `OptionsSettingsDropdown` struct
- `Slider`: `OptionsSettingsSlider` struct
- `Button`: `OptionsSettingsButton` struct
- `Header`: `OptionsSettingsHeader` struct, just a text label. Good for dividing sections of your setting menu.

Example options, a dropdown and a slider:

```lua
{
    ID = "ExaminePosition",
    Type = "Dropdown",
    Label = "Examine Menu Position",
    Tooltip = "Controls the default position of the Examine menu when it is opened.",
    DefaultValue = 1,
    Options = {
        "Center",
        "Middle Right",
        "Middle Left"
    }
},
{
    ID = "OverheadsSize",
    Type = "Slider",
    Label = "Overhead Text Size",
    MinAmount = 10,
    MaxAmount = 45,
    DefaultValue = 19,
    Interval = 1,
    HideNumbers = false,
    Tooltip = "Controls the size of regular text above characters talking.<br><br>Default is 19.",
},
```

Once you've got your mod and settings registered, they will appear in the settings menu. The user will be able to change them, and their values will be stored to the disk.

To query the value of a setting, use `GetOptionValue(mod: string, setting: string)`. For checkboxes this returns `boolean`, for other elements it's `number`. **Dropdowns use 1-based indexing! (1 = first option)**. You can also set the stored value (or hook `GetOptionValue`). If you do this, keep in mind that it will not be automatically saved to disk.

```lua
if (Minimap.visible ~= Client.UI.OptionsSettings.GetOptionValue("EpipEncounters", "Minimap")) then
    Client.UI.OptionsSettings.SetOptionValue("EpipEncounters", "Minimap", Minimap.visible)

    Client.UI.OptionsSettings.SaveSettings()
end
```

You may use the `IsElementEnabled` hook to make elements in your menu non-interactable. You can use this to require a setting to first have another one enabled/disabled by the user.

## Events
<doc events="OptionsSettingsUI">

```lua
---Fired when a custom option's value is set, either from loading or applying changes through the menu/SetOptionValue.
---@event OptionSet
---@param data OptionsSettingsOption
---@param value any
```
```lua
---Fired when an option element needs to be rendered in the UI.
---@event ElementRenderRequest
---@param type string
---@param data OptionsSettingsOption
---@param numID number The numeric ID this element should use.
```
```lua
---Fired when a settings tab is rendered. Values > 3 are custom tabs; their info should be queried from OptionsSettings.currentCustomTabs
---@event TabRendered
---@param tab number
```
```lua
---Fired when a custom checkbox is clicked while enabled.
---@event CheckboxClicked
---@param element OptionsSettingsOption
---@param active boolean
```
```lua
---Fired when a custom button is clicked while enabled.
---@event ButtonClicked
---@param element OptionsSettingsOption
```
```lua
---Fired when a custom slider's value is changed by the user.
---@event SliderChanged
---@param element OptionsSettingsOption
---@param value number
```
```lua
---Fired when a custom dropdown's option is changed by the user.
---@event DropdownChanged
---@param element OptionsSettingsOption
---@param optionIndex number 1-based index.
```
```lua
---Fired when a custom setting's value change is applied from the menu (through the "Apply changes" button).
---@event ChangeApplied
---@param option OptionsSettingsOption
---@param value any
```
```lua
---Hook to manipulate if an element should be interactable in the UI. Can be used, for example, to make a setting require another to be toggled on first.
---@hook IsElementEnabled
---@param enabled boolean Defaults to true.
---@param data OptionsSettingsOption
```
```lua
---Hook to manipulate a custom option's value. Can be used, for example, to disable a setting based on another's value.
---@hook GetOptionValue
---@param value any Defaults to the stored value.
---@param data OptionsSettingsOption
```
```lua
---Fired while `baseUpdate_Array` is being parsed in Flash. Hook to manipulate the parsed array.
---@hook BaseUpdate
---@param elements table[] TODO document fields
```
```lua
---Hook to manipulate the label of tab buttons for mods.
---@hook GetSideButtonLabel
---@param label string Defaults to OptionsSettingsOption.SideButtonLabel or OptionsSettingsOption.Mod
```
```lua
---Hook to manipulate the header of mod setting menus.
---@hook GetTabHeader
---@param label string Defaults to OptionsSettingsOption.TabHeader or OptionsSettingsOption.Mod
```
</doc>

## Fields
<doc fields="OptionsSettingsUI">

```lua
---@class OptionsSettingsUI
---@field Options table<string, OptionsSettingsOptionSet>
---@field OptionValues table<string, table>
---@field PendingValueChanges table<string, table>
---@field TABS table<string, number>
---@field SAVE_FILENAME string
---@field currentTab number
---@field currentElements table<number, OptionsSettingsOption>
---@field currentCustomTabs table<number, string> Binds a side button's numerical ID to the mod it's for.
```
</doc>

## Methods
<doc lib="OptionsSettingsUI">

```lua
---Registers a mod for use with the options menu.
---@param mod string
---@param data OptionsSettingsOptionSet
function OptionsSettings.RegisterMod(mod, data) -- Client-only
```
```lua
---Adds options to a mod's option menu.
---@param mod string
---@param data OptionsSettingsOption[]
function OptionsSettings.RegisterOptions(mod, data) -- Client-only
```
```lua
---Adds an option to a mod's options menu.
---@param mod string
---@param data OptionsSettingsOption
function OptionsSettings.RegisterOption(mod, data) -- Client-only
```
```lua
---Returns whether a custom option's element is interactable. Hookable.
---@param id string
---@return boolean
function OptionsSettings.IsElementEnabled(id) -- Client-only
```
```lua
---Set the state of an option in the UI. Does not change the stored value of custom options.
---@param id string|number
---@param state any
---@param elementType OptionsSettingsOptionType? Needs to be provided for vanilla options. TODO get automatically
function OptionsSettings.SetElementState(id, state, elementType) -- Client-only
```
```lua
---Set an element to be enabled/disabled (interactable or not). TODO other types
---@param id string|number
---@param enabled boolean
---@param elementType OptionsSettingsOptionType
function OptionsSettings.SetElementEnabled(id, enabled, elementType) -- Client-only
```
```lua
---Get the numerical id of a custom option element in the UI.
---@param id string
---@return number
function OptionsSettings.GetElementNumID(id) -- Client-only
```
```lua
---Get the data for an option.
---@param id string
---@return OptionsSettingsOption
function OptionsSettings.GetOptionData(id) -- Client-only
```
```lua
---Get the value of a custom option.
---@param mod string
---@param id string
---@return any Type varies based on element type. Boolean for checkboxes, number for other vanilla elements.
function OptionsSettings.GetOptionValue(mod, id) -- Client-only
```
```lua
---Set a custom option's value. Immediately synchronized to server, if need be.
---@param mod string
---@param option string
---@param value any
function OptionsSettings.SetOptionValue(mod, option, value) -- Client-only
```
```lua
---Render a slider.
---@param data OptionsSettingsSlider
---@param numID number
function OptionsSettings.RenderSlider(data, numID) -- Client-only
```
```lua
---Render a button.
---@param data OptionsSettingsButton
---@param numID number
function OptionsSettings.RenderButton(data, numID) -- Client-only
```
```lua
---Render a header.
---@param data OptionsSettingsHeader
---@param numID number
function OptionsSettings.RenderHeader(data, numID) -- Client-only
```
```lua
---Render a checkbox option.
---@param data OptionsSettingsCheckbox
---@param numID number
function OptionsSettings.RenderCheckbox(data, numID) -- Client-only
```
```lua
---Render a dropdown option.
---@param data OptionsSettingsDropdown
---@param numID number
function OptionsSettings.RenderDropdown(data, numID) -- Client-only
```
```lua
---Returns the MovieClip for an element.
---@param id string|number String or number ID of the element.
---@return FlashMovieClip
function OptionsSettings.GetOptionElement(id) -- Client-only
```
```lua
---Add an entry to a dropdown element.
---@param id stirng|number
---@param option string Label.
function OptionsSettings.RenderDropdownEntry(id, option) -- Client-only
```
```lua
---@param option OptionsSettingsOption
---@param value any
function OptionsSettings.SynchToServer(option, value) -- Client-only
```
</doc>

# Documentation

The features of Epip are built on top of a lot of trial-and-error research and work on client-side scripting and UI modding.

Since late 2021, the focus of development has shifted to making the internals of the mod available as libraries, aiming to provide utility, better maintainability, extendability and easy manipulation of UIs from lua.

The ultimate goal is to make the mod easy for someone else to continue working on after/if I depart - EE is an overhaul built to last and be tinkered with, and I would like to honor that in my own project.

This change will be a long process. There are still many features of the mod that remain to be rewritten to the new standards and methodology, or extended to provide functionality beyond what the current mod needs.

Anything that is documented here is considered stable and unlikely to change drastically - **any changes to these calls/systems will be mentioned in future patch notes.**

The definitions here are auto-generated from EmmyLua annotations within the scripts (using `update_docs.py` found in the mod). Functions are tagged through `@meta` to denote tags like "Client-only", "EE-only". Declaring these at the top of the file tags all functions in the file.

## Introduction

The mod's root table contains the following tables:

- `Epip`: stores references to "Features" and metadata related to the mod.
- `Game`: contains libraries for querying information of characters, items and other contexts relating to the game.
- `Client`: contains client-specific calls as well as tables offering UI-specific calls, events and hooks.
- `Utilities`: contains utility methods useful across many contexts.  

The scripting in Epip focuses on event-driven programming. Aside from functions, systems and features tend to implement events and hooks which allow other scripts to react to them being raised.

Event listeners allow you to react to events sent from scripts. They can receive parameters and are executed in the order that they were registered.

```lua
-- Listen for the shift key being pressed/unpressed.
Client.Input:RegisterListener("SneakConesToggled", function(pressed)
    print("Sneak cones toggled: " .. pressed)
end)
```

Hooks are similar to event listeners, but are used to modify values calculated within functions. Their purpose is to allow scripts to alter the logic or output of functions. A hook is always passed a "default value" as its first parameter, which will be used if no listeners choose to act upon the event.

Any script can implement events/hooks, and it's easy to add "parameters" to registering listeners as well, to filter their execution conditonally.

```lua
-- Set opacity for Battered/Harried stack backgrounds in the health bar based on if the amount if enough to inflict a T3.
Client.UI.EnemyHealthBar:RegisterHook("GetStackOpacity", function(opacity, stack, amount)
    local threshold = Game.Character.GetStacksNeededToInflictTier3(Client.GetCharacter())

    if amount >= threshold then
        opacity = 1
    elseif amount == 0 then
        opacity = 0.5
    else
        opacity = 0.75
    end

    return opacity
end)
```

Hooks are not limited to changing primitives, they are often also used in UI scripts to allow for manipulation of the data that the engine is passing it, parsed into handy tables. The following example adds Critical Chance to the Examine UI.

```lua
-- Add Critical Chance to the examine menu when its data is being updated.
Client.UI.Examine:RegisterHook("Update", function(examineData)
    local char = Client.UI.Examine.GetCharacter()

    -- Only do this for characters being examined
    if char then
        local critEntry = {
            id = 9,
            label = "Critical Chance",
            iconID = Client.UI.Examine.ICONS.CRITICAL_CHANCE,
            value = string.format("%d%%", char.Stats.CriticalChance),
            type = Client.UI.Examine.ENTRY_TYPES.STAT,
        }
    
        -- Insert crit chance after damage
        local damageElement,damageIndex,damageCategory = examineData:GetElement(4, 6)
    
        examineData:InsertElement(damageCategory.id, critEntry, damageIndex + 1)
    end

    return examineData
end)
```

### Aliases
The following EmmyLua aliases are defined (in `EpipIdeHelpers.lua`):

```lua

---@alias Entity EclCharacter | EsvCharacter | EclItem | EsvItem
---@alias Character EsvCharacter | EclCharacter
---@alias Item EclItem | EsvItem

---@alias EquipSlot "Helmet" | "Breast" | "Leggings" | "Weapon" | "Shield" | "Ring" | "Belt" | "Boots" | "Gloves" | "Amulet" | "Ring" | "Ring2" | "Horns" | "Overhead"
---@alias EquipmentSubType "Platemail" | "Robes" | "Leather" | "Belt" | "Ring" | "Amulet" | "Shield" | "Dagger" | "Sword" | "Axe" | "Mace" | "Sword" | "Spear" | "Staff" | "Bow" | "Crossbow" | "Wand"

---@alias StackType "Battered" | "B" | "Harried" | "H"

---@alias Gender "Male" | "Female"
---@alias Race "Human" | "Elf" | "Dwarf" | "Lizard"

---@alias Keyword "ViolentStrike" | "VitalityVoid" | "Predator" | "Elementalist" | "Prosperity" | "Paucity" | "IncarnateChampion" | "Defiance" | "Occultist" | "Disintegrate" | "Wither" | "Centurion" | "Abeyance" | "Benevolence" | "Presence" | "Ward" | "Celestial" | "Purity" | "VolatileArmor" | "Voracity"
---@alias KeywordBoonType "Activator" | "Mutator"

-- For doc generation; does not actually work in IDE
---@class Event
---@class Hook

---------------------------------------------
-- UI
---------------------------------------------

---@alias MessageBoxType "Message" | "Input"

---------------------------------------------
-- GAME.TOOLTIP
---------------------------------------------

---@class TooltipData
---@field Data table[]

---@param data table[]
---@return TooltipData
function TooltipData:Create(data) end

---@param type string
---@return table
function TooltipData:GetElement(type) end

---@param type string
---@return table[]
function TooltipData:GetElements(type) end

---@param type string
function TooltipData:RemoveElements(type) end

---@param type string
function TooltipData:RemoveElement(type) end

---@param ele table
function TooltipData:AppendElement(ele) end

---@param ele table
---@param appendAfter table
function TooltipData:AppendElementAfter(ele, appendAfter) end
```
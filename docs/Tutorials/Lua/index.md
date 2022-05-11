
## Lua Tutorial
The following is an Extender-focused lua tutorial. It is intended to teach you how to use lua with the Script Extender assuming no prior knowledge of the language, just programming basics (variables, control structures, classes etc.)

## Introduction
Lua is an interpreted, functional, dynamically-typed language with possibility for prototype-based object-oriented programming. It is intended to be embedded within other applications (in this case, within the extender/game), offering high-level scripting.

In the context of the Script Extender, it offers new forms of interaction with the game by allowing read/write access to the internal game object classes, as well as additional events to listen for.

## Setup
Lua scripts are stored within the `Mods/MyMod-GUID/Story/RawFiles/Lua` folder and are loaded if the mod is active. Prior to creating lua scripts, you must enable the functionality by configuring a `OsiToolsConfig.json` file within the `Mods/MyMod-GUID` folder. The basic configuration is the following:
```
{
    "RequiredExtensionVersion": 56,
    "ModTable": "MyMod",
    "FeatureFlags": [
        "OsirisExtensions",
        "Lua",
        "Preprocessor"
    ]
}
```

Fields:
- `RequiredExtensionVersion`: determines the minimum Script Extender version that the mod requires. Set this to the current version as of the time of your mod's creation, and increment it as you start using features from later versions. An error message box will be shown to users if they try to use your mod with an outdated Script Extender.
- `ModTable`: determines the lua table that your mod's variables will be put into. Set this to a unique identifier. We'll get to its use later.
- `FeatureFlags`: determines which features of the extender your mod requires; `OsirisExtensions` and `Preprocessor` are optional, but helpful if intend to you complement your lua scripting with Story scripting.

After you've setup the config file, you're ready to create your first lua script. When the game loads mods, the extender will automatically load the `BootstrapClient.lua` and `BootstrapServer.lua` scripts within the `RawFiles/Lua/` folder, if they exist. These are the first scripts to be loaded, and the scripts from which you will import any additional ones.

The reasoning behind there being 2 different bootstrap scripts is that internally, the game is split into 2 "contexts":
- Server: the part of the game that runs nearly all the logic (ex. damage calculations, Story scripting) and lets players connect to it.
- Client: the game application that connects to the server, displays the game state and allows user interaction. In human words, the game window. Each game instance is one client (players in splitscreen use the same client).

As the 2 contexts server different purposes, they differ in the information that is accessible in each. For example, the user interface (character sheet, inventory, etc.) only exists for clients, while Story scripting only runs on the server. As such, lua scripting is also split between Client and Server scripting so you can cleanly separate your functionality based on context.

## Lua Basics
### Variables
Lua is an interpreted, dynamically-typed language. This means there is no need to compile it, the raw `.lua` file is loaded by the extender and interpreted line-by-line. Being dynamically-typed means that variables do not need to be declared with a type, and instead can be assigned and reassigned freely to any value, as is the case in Python for example.

Variables are declared and assigned as the following (semicolons at the end of lines are optional):
```lua
local myVar = 1
```
The `local` keyword is optional, and restricts the variable to the current context (the function/file, more precisely a "chunk"). Non-local variables are global.

The following types exist in lua:
- `nil` (null)
- `number`
- `integer` (in latest versions)
- `string`
- `function`
- `table`
- `userdata` (garbage-collected values also accessible from C)
- `lightuserdata` (C pointers)

The concept of the first few should be familiar, while the latter are more lua-specific and we'll cover them later, for now focusing instead on functions and tables.

### Functions
Functions can be defined in multiple ways, the simplest one being:
```lua
function MyFunc(param1, param2)
    -- Code here!
end
```

Note that comments in lua start with 2 dashes (`--`).

Functions can be given the local modifier as well, and any number of arguments, with no type specification.

It is important to note that as lua is not a class-based language, there is no overloading. Creating a new `function MyFunc` after the first one will override that function no matter if its signature is different. Additionally, since functions are types, assigning `MyFunc = something` will also override the function!

Lua functions can also be called with any amount of parameters, regardless of definition - we'll go into more detail on that quirk later.

**Functions and tables are passed by reference.** (TODO remark that this does not mean you can "alter" them outside their context)

### Tables
Tables are lua's take on *objects*. If you've done JavaScript or other prototype-based languages, they will be easy to understand.

A table-type variable is defined, in its simplest form, like this:
```lua
local myTable = {}
```

Tables are the basic, extendable object in lua. You may set and retrieve values on them by indexing them:

```lua
myTable["key1"] = 1
-- This also works (if no spaces or special characters)
myTable.key2 = 2

print(myTable.key1)
print(myTable["key2"])
```

## Working with the Extender
### Events
So far the tutorial has introduced lua basics, but with no explanation on how we'll be interfacing with the game with it.

Lua scripting in the extender is primarily event-driven, as is Story scripting. You register listener functions for built-in events to react to things occurring in the game.

TODO
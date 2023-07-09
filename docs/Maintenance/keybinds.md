# Default Keybinds
Below is a reference of the default keybinds, useful to avoid conflicts when defining new ones.

## Epip
Actions with no default bindings are omitted.

| Action                                   | Default Binding 1      |
|------------------------------------------|------------------------|
| EpipEncounters_Debug_CopyIdentifier      | LCtrl + C              |
| EpipEncounters_Debug_OpenDebugMenu       | LCtrl + B              |
| EpipEncounters_Debug_Generic             | LCtrl + E              |
| EpipEncounters_Debug_CopyPosition        | LShift + T             |
| EpipEncounters_DebugCheats_OpenUI        | G                      |
| EpipEncounters_QuickFind                 | LCtrl + F              |
| EpipEncounters_ScrollTooltip             | Middle Click           |
| EpipEncounters_QuickExamine              | V                      |
| EpipEncounters_Housing_RaiseFurniture    | LCtrl + Mouse Wheel Y+ |
| EpipEncounters_Housing_LowerFurniture    | LCtrl + Mouse Wheel Y- |
| EpipEncounters_Fishing_OpenCollectionLog | LShift + F             |
| (Feature_Codex) Open                     | LCtrl + G              |

## Vanilla
Vanilla default bindings are specified in `\PlayerProfiles\Default` within `Engine.pak`. This table only contains the ones bindable ingame, omitting the GM mode ones.

Debug bindings (from `keyboard_debug.json`) are also omitted as they are non-functional in the release build.

| Input Event ID                     | Default Binding 1  | Default Binding 2 |
|------------------------------------|--------------------|-------------------|
| Camera Left                        | Left               | A                 |
| Camera Right                       | Right              | D                 |
| Camera Forward                     | Up                 | W                 |
| Camera Backward                    | Down               | S                 |
| Camera Center                      | Home               |                   |
| Camera Rotate Left                 | Delete             |                   |
| Camera Rotate Right                | End                |                   |
| Camera Zoom In                     | Page Up            | Mouse Wheel Y+    |
| Camera Zoom Out                    | Page Down          | Mouse Wheel Y-    |
| Toggle Camera Rotate               | Middle Click       |                   |
| Toggle Tactical Camera             | O                  |                   |
| Cancel Action                      | Escape             | Right Click       |
| Context Menu                       | Right Click        |                   |
| Cycle Characters Next              | ]                  |                   |
| Cycle Characters Previous          | [                  |                   |
| Force-Attack                       | LCtrl              |                   |
| Tactical Highlights                | `                  |                   |
| Interact                           | Left Click         |                   |
| Ping                               | \                  |                   |
| Queue                              | RShift             |                   |
| Rotate Item Left                   | Mouse Wheel Y-     |                   |
| Rotate Item Right                  | Mouse Wheel Y+     |                   |
| Show World Tooltips                | LAlt               |                   |
| Skip Video                         | Escape             |                   |
| Sheathe/Unsheathe                  | Tab                |                   |
| Toggle Input Mode                  | LCtrl + LShift + Q |                   |
| Select Character 1                 | F1                 |                   |
| Select Character 2                 | F2                 |                   |
| Select Character 3                 | F3                 |                   |
| Select Character 4                 | F4                 |                   |
| Hotbar Slot 0                      | 0                  | Numpad 0          |
| Hotbar Slot 1                      | 1                  | Numpad 1          |
| Hotbar Slot 11                     | Minus              |                   |
| Hotbar Slot 12                     | Equals             |                   |
| Quick Load                         | F8                 |                   |
| Quick Save                         | F5                 |                   |
| Chat                               | Return             |                   |
| Show Sneak Cones                   | LShift             |                   |
| Split Item Stack                   | LShift             | RShift            |
| Hotbar Actions Bar                 | X                  |                   |
| Toggle Inventory + Character Sheet | I                  |                   |
| Toggle Crafting                    | G                  |                   |
| Toggle Equipment                   | E                  |                   |
| Toggle Pause Menu                  | Escape             |                   |
| Toggle Inventory                   | B                  |                   |
| Toggle Journal                     | L                  |                   |
| Toggle Map                         | M                  |                   |
| Toggle Party Management            | Y                  |                   |
| Toggle Recipes                     | H                  |                   |
| Toggle UI Visibility               | F10                |                   |
| Toggle Skillbook                   | K                  |                   |
| Toggle Sneak                       | C                  |                   |
| Toggle Stats*                      |                    |                   |
| UI Cancel                          | Escape             |                   |
| UI End Turn                        | Space              |                   |
| Hotbar Next Row                    | R                  |                   |
| Hotbar Previous Row                | F                  |                   |
| Take All                           | Space              |                   |

\* intended to be an examine keybind, however it is non-functional, though it is even mentioned in loading screen tips. Epip's examine keybind is implemented by spoofing inputs and UI calls necessary to open the examine UI from the context menu (the only known way).
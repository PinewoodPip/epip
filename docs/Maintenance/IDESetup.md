# IDE Setup
The project is developed in VS Code using the [SumnekoLua](https://github.com/LuaLS/lua-language-server) extension for annotating types. At the time of writing (2023) it's the best Lua extension by a long shot, so I'd say don't waste time trying others. Any PRs are expected to use it, annotating types & methods and avoiding diagnostic warnings (the backlog of those from old code is large enough as it is).

## SumnekoLua settings
The following extension settings are used, mainly changing the severity of some diagnostics to better highlight code oversights and remove warnings from some needlessly strict type-checking.

```json
"Lua.completion.autoRequire": false,
"Lua.type.castNumberToInteger": true,
"Lua.hint.setType": true,
"Lua.diagnostics.severity": {
    "cast-local-type": "Hint",
    "trailing-space": "Hint",
    "redefined-local": "Warning",
    "need-check-nil": "Error",
    "deprecated": "Information",
    "duplicate-set-field": "Information",
    "assign-type-mismatch": "Information",
    "redundant-return-value": "Warning",
    "unbalanced-assignments": "Error!",
    "redundant-value": "Error!",
    "code-after-break": "Error!",
    "param-type-mismatch": "Information"
},
"Lua.diagnostics.groupSeverity": {
    "unused": "Warning",
    "ambiguity": "Warning"
},
"Lua.diagnostics.disable": [
    "trailing-space",
    "need-check-nil"
],
"Lua.type.weakNilCheck": true,
"Lua.diagnostics.workspaceRate": 30,
"Lua.workspace.maxPreload": 50000,
"Lua.workspace.preloadFileSize": 5000,
"Lua.diagnostics.globals": [
    "LibStub"
],
"Lua.workspace.ignoreDir": [
    ".vscode",
    "Story/RawFiles/Lua/Utilities/LibDeflate.lua"
],
"Lua.doc.protectedName": [
    "__[A-Z]*",
    "__[a-z]*"
],
"Lua.hover.expandAlias": false,
"Lua.type.weakUnionCheck": true,
"Lua.doc.privateName": [
    "_[a-z]*",
    "_[A-Z]*"
]
```

LibStub global is used to remove a warning from LibDeflate. The private & protected patterns are used to automatically set the visibility of fields based on Epip's naming conventions: `_` prefix for private, `__` prefix for protected.

## AHK Script
An Autohotkey script is used to speed up switching windows and resetting Lua. It's hotkeys are the following:

- Ctrl+M5: focus game window
- Ctrl+M4: focus console window
- Ctrl+R: reset Lua and focus game. This also creates the aliases `epip = Mods.EpipEncounters` and `ui = epip.Client.UI` in the console chunk.
- Shift+M5: focus VS Code

```ahk
ConsoleWindowClass := "ConsoleWindowClass"
GameWindowClass := "SDL_app"
ConsoleWindow := "D:OS2 Script Extender Debug Console"

^r::LuaReset()


+XButton2::FocusVSC()
^XButton1::FocusConsole()
^XButton2::FocusGame()

LuaReset()
{
    global ConsoleWindow

    SetKeyDelay, 10

    WinGet, PID, PID, %GameWindow%
    ControlSend, , {enter}reset{enter}, %ConsoleWindow%

    FocusGame()

    ControlSend, , epip = Mods.EpipEncounters{enter}, %ConsoleWindow%
    ControlSend, , ui = epip.Client.UI{enter}exit{enter}, %ConsoleWindow%
}

FocusGame()
{
    global GameWindowClass

    WinActivate, ahk_class %GameWindowClass%
}

FocusConsole()
{
    global ConsoleWindowClass

    WinActivate, ahk_class %ConsoleWindowClass%
}

FocusVSC()
{
    WinGet, PID, PID, ahk_exe Code.exe
    WinActivate, ahk_pid %PID%
}
```

## Theme
Pip's theme is Noctis Bordo (from the [Noctis](https://marketplace.visualstudio.com/items?itemName=liviuschera.noctis) extension) using the following overrides for token styles:

```json
{
  "editor.tokenColorCustomizations": {
      "textMateRules": [
          {
              "scope": "storage.type.annotation.lua",
              "settings": {
                  "foreground": "#df769b",
                  "fontStyle": "bold"
              }
          },
          {
            "scope": "variable.other.lua",
            "settings": {
              "foreground": "#cbbec2",
            }
          },
          {
            "scope": "support.type.lua",
            "settings": {
              "foreground": "#8b747c",
            }
          },
          {
            "scope": "support.constant.lua",
            "settings": {
              "foreground": "#87a3b4",
            }
          },
          {
            "scope": "entity.other.property.lua",
            "settings": {
              "foreground": "#c4c4c4",
              "fontStyle": "",
            }
          },
      ]
  }
}
```

Obviously you needn't use the same one. This detail is for posterity only.
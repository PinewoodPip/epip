# Examine
Hooks for the Examine UI.

# Fields
<doc fields="ExamineUI">

```lua
---@class ExamineUI
---@field CATEGORIES table<string, number>
---@field ENTRY_TYPES table<string, number>
---@field ICONS table<string, number> IDs for embedded icons.
```
</doc>

# Events
Subscribe with `Client.UI.Examine:RegisterListener(event: string, handler: function)`.

<doc events="ExamineUI">

```lua
---Fired when the UI is opened.
---@event ExamineOpened
---@param categories ExamineData
```
```lua
---Hook to manipulate the update data.
---@hook Update
---@param data ExamineData
```
</doc>

# Functions
<doc lib="ExamineUI">

```lua
---Get a category of entries by its id.
---@param id number
function ExamineData:GetCategory(id) -- Client-only
```
```lua
---Inserts an element into a category at the specified index, appending by default.
---@param category id
---@param element table
---@param index? number
function ExamineData:InsertElement(category, element, index) -- Client-only
```
```lua
---Returns the first element, its index and category, using the engine statID.
---@param category? number If nil, all categories are searched.
---@param statID number
function ExamineData:GetElement(category, statID) -- Client-only
```
```lua
---Get the character currently being examined.
---@return Character
function Examine.GetCharacter() -- Client-only
```
</doc>
# Text
The `Text` table offers utility methods for working with text and formatting tags.

<doc class="TextLib" symbols="Function">

```lua
---@param value number
---@param decimals? integer Defaults to 0.
---@return string 
function Text.Round(value, decimals)

---@param str1 string
---@param str2 string
---@param space integer
---@return string 
function Text.EqualizeSpace(str1, str2, space)

---Source: https://gist.github.com/jrus/3197011
---@return GUID 
function Text.GenerateGUID()

---@param str string
---@return string 
function Text.SeparatePascalCase(str)

---@param num number
---@return string 
function Text.RemoveTrailingZeros(num)

---Source: https://github.com/lua-nucleo/lua-nucleo/blob/v0.1.0/lua-nucleo/string.lua#L245-L267
---@param str string
---@return string 
function Text.EscapePatternCharacters(str)

---@param pattern pattern
function Text.Contains(str, pattern)

---Capitalizes the first letter of the string.
---https://stackoverflow.com/a/2421746
---@param inputstr string
---@param sep string
---@param str string
---@return string 
function Text.Capitalize(str)

---@param str string | TextFormatData
---@param formatData TextFormatData
---@return string 
function Text.Format(str, formatData)

---@param obj any
---@param opts unknown? TODO specify type
---@return string 
function Text.Dump(obj, opts)

```
</doc>
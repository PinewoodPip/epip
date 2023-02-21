# Text
The `Text` table offers utility methods for working with text and formatting tags.

<doc class="TextLib" symbols="Function">

```lua
---Returns a string representation of a number, rounded.
---@param value number
---@param decimals? integer Defaults to 0.
---@return string 
function Text.Round(value, decimals)

---Concatenates 2 strings and adds enough whitespace padding inbetween them to ensure a specific length.
---@param str1 string
---@param str2 string
---@param space integer
---@return string 
function Text.EqualizeSpace(str1, str2, space)

---Generate a random GUID.
---Source: https://gist.github.com/jrus/3197011
---@param pattern pattern? Defaults to GUID4 pattern.
---@return GUID 
function Text.GenerateGUID(pattern)

---Generates a random handle in the format that Larian uses for TranslatedStringHandle.
---@return TranslatedStringHandle 
function Text.GenerateTranslatedStringHandle()

---Joins two strings together.
---@overload fun(str:string[], separator:string?) 
---@param str1 string
---@param str2 string
---@param separator string? Defaults to ` `
function Text.Join(str1, str2, separator)

function Text.AppendLine(str1, str2)

---Returns a string with spaces inserted inbetween PascalCase words.
---@param str string
---@return string 
function Text.SeparatePascalCase(str)

---Removes trailing zeros from a number and returns it as string.
---@param num number
---@return string 
function Text.RemoveTrailingZeros(num)

---Escapes characters that have a special meaning in lua patterns.
---Source: https://github.com/lua-nucleo/lua-nucleo/blob/v0.1.0/lua-nucleo/string.lua#L245-L267
---@param str string
---@return string 
function Text.EscapePatternCharacters(str)

---@param str string
---@param pattern pattern
function Text.Contains(str, pattern)

---Adds padding characters to the front of a string to meet a minimum length.
---@param str string
---@param minLength integer
---@param paddingCharacter string? Defaults to `""`
---@return string 
function Text.AddPadding(str, minLength, paddingCharacter)

---Split a string by delimiter. Source: https://stackoverflow.com/questions/1426954/split-string-in-lua
---@param inputstr string
---@param sep string
---@return string[] 
function Text.Split_2(str, sep)

---Capitalizes the first letter of the string.
---https://stackoverflow.com/a/2421746
---@param str string
---@return string 
function Text.Capitalize(str)

---Format a string.
---@overload fun(str:TextFormatData) 
---@param str string
---@param formatData TextFormatData
---@return string 
function Text.Format(str, formatData)

---Removes all <font> tags from a string. WIP!
---@param str string
---@return string 
function Text.StripFontTags(str)

---Shorthand for Ext.DumpExport() which does not require you to explicitly define the default options (Beautify, StringifyInternalTypes, etc.)
---@param obj any
---@param opts unknown? TODO specify type
---@return string 
function Text.Dump(obj, opts)

---Returns the string bound to a TranslatedStringHandle, or a key.
---@param handle TranslatedStringHandle|string|TextLib_TranslatedString Accepts handles or keys.
---@param fallBack string?
---@return string -- Defaults to the handle, or fallBack if specified.
function Text.GetTranslatedString(handle, fallBack)

---Registers a translated string.
---@overload fun(data:TextLib_TranslatedString):TextLib_TranslatedString 
---@param handle TranslatedStringHandle
---@param text string
---@return TextLib_TranslatedString 
function Text.RegisterTranslatedString(handle, text)

---Sets the text of a translated string.
---@param handle TranslatedStringHandle
---@param text string
function Text.SetTranslatedString(handle, text)

---Binds a TSK to a string key.
---@param key string
---@param handle TranslatedStringHandle
function Text.SetStringKey(key, handle)

---Generates a template file for localizing strings registered through this library.
---@param modTable string? Defaults to "EpipEncounters"
---@param existingTemplate TextLib_LocalizationTemplate? If present, translated strings from this template will be patched into the new one, if the reference text is still up-to-date.
---@return TextLib_LocalizationTemplate, integer[]?, integer[]? -- Second param is new strings, third is outdated strings. Second param onwards is only returned while patching.
function Text.GenerateLocalizationTemplate(modTable, existingTemplate)

---Returns the language the game is set to.
---@return string 
function Text.GetCurrentLanguage()

---Sets the translation of a TSK.
---The handle's bound text will be updated if the game's language matches.
---@param handle TranslatedStringHandle
---@param language string
---@param text string
function Text.SetTranslatedStringTranslation(handle, language, text)

---Returns the translation for a handle.
---@param handle TranslatedStringHandle
---@param language string? Defaults to current language.
---@return string? --`nil` if the handle is not translated
function Text.GetTranslatedStringTranslation(handle, language)

---Loads a localization file. Must be in the format generated by GenerateLocalizationTemplate()
---@param language string
---@param filePath string
function Text.LoadLocalization(language, filePath)

---Returns the GUID passed by parameter with any prefixes removed.
---@param guid PrefixedGUID
---@return GUID 
function Text.RemoveGUIDPrefix(guid)

```

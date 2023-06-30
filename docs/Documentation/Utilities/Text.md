# Text
The `Text` table offers utility methods for working with text and formatting tags.

It also power's Epip custom TSK system, intended to make exporting strings for translation more easily, through the `TextLib_TranslatedString` class. This class contains not only the handle and default text of a string, but also contextual data that is later used to populate the public translation sheets.

Internally, Epip TSKs still use the game's handle system. However, translations are created and loaded differently, through `.json` files.

When lua loads, Epip looks for these translation files in the `\Data\Mods\{Mod}_{GUID}\Localization\Epip\{Game language}\{Mod table}.json` folder for each mod, following the load order. `{Mod table}.json` files are checked for every other mod present. This allows mods to provide translations or string overrides for any other mod using Epip's TSK system. Epip itself also uses this system to load the publicly contributed translations. A single mod can provide translation files for multiple mods, by creating multiple `{Mod table}.json` files within a language folder.

The game language IDs correspond to the ones used by the game:

```none
English
Amlatspanish
Chinese
Chinesetraditional
Czech
French
German
Italian
Japanese
Korean
Polish
Portuguesebrazil
Russian
Spanish
```

It's worth noting that the game supports adding custom languages by editing the `Language` field in `config.lsx` (thereby changing the `ChatLanguage` global switch). Epip's system will consider such cases for loading translations.

For information on how the public translation sheets are handled, see [this page](../../Maintenance/localization.md).

## CommonStrings

`CommonStrings.lua` contains TSKs for generic strings that are reused across many different contexts. Strings should be added here if they are of general usage and their translation won't differ across different contexts. These are accessed via the `Text.CommonStrings`, a raw table with no particularities.

The following VSC snippet is used to add entries to CommonStrings:

```json
"commonstring": {
	"scope": "lua",
	"prefix": "commonstring",
	"body": [
		"Text.CommonStrings.$1 = Text.RegisterTranslatedString({",
		"   Handle = \"$2\",",
		"   Text = \"$1\",",
		"})",
	],
},
```

## Library

<doc package="TextLib">



## Events and Hooks

##### GetTranslationTemplateEntry (hook)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Entry</b> <code>TextLib_LocalizationTemplate_Entry</code> Hookable. Set to nil to prevent an entry from getting exported.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>TranslatedString</b> <code>TextLib_TranslatedString</code> </p>



## Methods

#### Round



```lua
function Text.Round(value, decimals)
   -> string
```



Returns a string representation of a number, rounded.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>value</b> <code>number</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>decimals?</b> <code>integer</code> Defaults to 0.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string</code> </p>

#### EqualizeSpace



```lua
function Text.EqualizeSpace(str1, str2, space)
   -> string
```



Concatenates 2 strings and adds enough whitespace padding inbetween them to ensure a specific length.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>str1</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>str2</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>space</b> <code>integer</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string</code> </p>

#### GenerateGUID



```lua
function Text.GenerateGUID(pattern)
   -> GUID
```



Generate a random GUID.
Source: https://gist.github.com/jrus/3197011



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>pattern</b> <code>pattern?</code> Defaults to GUID4 pattern.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>GUID</code> </p>

#### GenerateTranslatedStringHandle



```lua
function Text.GenerateTranslatedStringHandle()
   -> TranslatedStringHandle
```



Generates a random handle in the format that Larian uses for TranslatedStringHandle.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>TranslatedStringHandle</code> </p>

#### Join



```lua
function Text.Join(str1, str2, separator)
```



Joins two strings together.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>str1</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>str2</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>separator</b> <code>string?</code> Defaults to ` `</p>

#### AppendLine



```lua
function Text.AppendLine(str1, str2)
```





#### SeparatePascalCase



```lua
function Text.SeparatePascalCase(str)
   -> string
```



Returns a string with spaces inserted inbetween PascalCase words.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>str</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string</code> </p>

#### RemoveTrailingZeros



```lua
function Text.RemoveTrailingZeros(num)
   -> string
```



Removes trailing zeros from a number and returns it as string.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>num</b> <code>number</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string</code> </p>

#### EscapePatternCharacters



```lua
function Text.EscapePatternCharacters(str)
   -> string
```



Escapes characters that have a special meaning in lua patterns.
Source: https://github.com/lua-nucleo/lua-nucleo/blob/v0.1.0/lua-nucleo/string.lua#L245-L267



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>str</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string</code> </p>

#### Contains



```lua
function Text.Contains(str, pattern)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>str</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>pattern</b> <code>pattern</code> </p>

#### AddPadding



```lua
function Text.AddPadding(str, minLength, paddingCharacter)
   -> string
```



Adds padding characters to the front of a string to meet a minimum length.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>str</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>minLength</b> <code>integer</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>paddingCharacter</b> <code>string?</code> Defaults to `""`</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string</code> </p>

#### Split_2



```lua
function Text.Split_2(str, sep)
   -> string[]
```



Split a string by delimiter. Source: https://stackoverflow.com/questions/1426954/split-string-in-lua



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>inputstr</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>sep</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string[]</code> </p>

#### Capitalize



```lua
function Text.Capitalize(str)
   -> string
```



Capitalizes the first letter of the string.
https://stackoverflow.com/a/2421746



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>str</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string</code> </p>

#### Format



```lua
function Text.Format(str, formatData)
   -> string 
```



Format a string.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>str</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>formatData</b> <code>TextFormatData</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string </code> </p>

#### StripFontTags



```lua
function Text.StripFontTags(str)
   -> string
```



Removes all <font> tags from a string. WIP!



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>str</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string</code> </p>

#### Dump



```lua
function Text.Dump(obj, opts)
   -> string
```



Shorthand for Ext.DumpExport() which does not require you to explicitly define the default options (Beautify, StringifyInternalTypes, etc.)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>obj</b> <code>any</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>opts</b> <code>unknown?</code> TODO specify type</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string</code> </p>

#### IsTranslatedStringRegistered



```lua
function Text.IsTranslatedStringRegistered(handle)
   -> boolean
```



Returns whether a TSK handle was registered **through the Text library.**



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>handle</b> <code>TranslatedStringHandle</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetTranslatedString



```lua
function Text.GetTranslatedString(handle, fallBack)
   -> string 
```



Returns the string bound to a TranslatedStringHandle, or a key.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>handle</b> <code>TranslatedStringHandle|string|TextLib_TranslatedString</code> Accepts handles or keys.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>fallBack</b> <code>string?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string </code> Defaults to the handle, or fallBack if specified.</p>

#### RegisterTranslatedString



```lua
function Text.RegisterTranslatedString(handle, text)
   -> TextLib_TranslatedString
```



Registers a translated string.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>handle</b> <code>TranslatedStringHandle</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>text</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>TextLib_TranslatedString</code> </p>

#### SetTranslatedString



```lua
function Text.SetTranslatedString(handle, text)
```



Sets the text of a translated string.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>handle</b> <code>TranslatedStringHandle</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>text</b> <code>string</code> </p>

#### SetStringKey



```lua
function Text.SetStringKey(key, handle)
```



Binds a TSK to a string key.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>key</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>handle</b> <code>TranslatedStringHandle</code> </p>

#### GenerateLocalizationTemplate



```lua
function Text.GenerateLocalizationTemplate(modTable, existingTemplate)
   -> TextLib_LocalizationTemplate, integer[]?, integer[]? 
```



Generates a template file for localizing strings registered through this library.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>modTable</b> <code>string?</code> Defaults to "EpipEncounters"</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>existingTemplate</b> <code>TextLib_LocalizationTemplate?</code> If present, translated strings from this template will be patched into the new one, if the reference text is still up-to-date.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>TextLib_LocalizationTemplate, integer[]?, integer[]? </code> Second param is new strings, third is outdated strings. Second param onwards is only returned while patching.</p>

#### GetCurrentLanguage



```lua
function Text.GetCurrentLanguage()
   -> string
```



Returns the language the game is set to.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string</code> </p>

#### SetTranslatedStringTranslation



```lua
function Text.SetTranslatedStringTranslation(handle, language, text)
```



Sets the translation of a TSK.
The handle's bound text will be updated if the game's language matches.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>handle</b> <code>TranslatedStringHandle</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>language</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>text</b> <code>string</code> </p>

#### GetTranslatedStringTranslation



```lua
function Text.GetTranslatedStringTranslation(handle, language)
   -> string? 
```



Returns the translation for a handle.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>handle</b> <code>TranslatedStringHandle</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>language</b> <code>string?</code> Defaults to current language.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string? </code> `nil` if the handle is not translated</p>

#### LoadLocalization



```lua
function Text.LoadLocalization(language, filePath)
```



Loads a localization file. Must be in the format generated by GenerateLocalizationTemplate()



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>language</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>filePath</b> <code>string</code> </p>

#### RemoveGUIDPrefix



```lua
function Text.RemoveGUIDPrefix(guid)
   -> GUID
```



Returns the GUID passed by parameter with any prefixes removed.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>guid</b> <code>PrefixedGUID</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>GUID</code> </p>
</doc>
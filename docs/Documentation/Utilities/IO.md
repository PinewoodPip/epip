# IO
The `IO` library contains wrapper methods for loading and saving files, automatically serializing/deserializing tables into/from json.

<doc class="InputOutputLib">

# InputOutputLib Class

## Methods

##### LoadFile

```lua
function InputOutputLib.LoadFile(filename, context, raw)
   -> any
```

Loads a file.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>filename</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>context</b> <code>(InputOutputLib_UserFileContext)?</code> Defaults to "user"</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>raw</b> <code>boolean?</code> Defaults to false.</p>

##### SaveFile

```lua
function InputOutputLib.SaveFile(filename, contents, raw, clean)
```

Serializes contents into json and saves them to a file.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>filename</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>contents</b> <code>any</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>raw</b> <code>boolean?</code> Defaults to false.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>clean</b> <code>boolean?</code> Defaults to false. Calls table.clean() on the contents.</p>
</doc>
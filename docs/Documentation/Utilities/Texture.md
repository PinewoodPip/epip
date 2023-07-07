# Texture
The `Texture` library is used to store and reference texture resources.

It is mainly used to store UI textures used for Generic styles, via the `Feature_GenericUITextures` feature..

<doc fields="TextureLib_Texture">

# TextureLib_Texture Class

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Name</b> <code>string</code> Resource name.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>GUID</b> <code>GUID</code></p>
</doc>

<doc class="TextureLib">

# TextureLib Class

## Methods

##### GetTexture

```lua
function TextureLib.GetTexture(name)
   -> TextureLib_Texture
```

Returns a texture by name.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>name</b> <code>string</code></p>

##### RegisterTexture

```lua
function TextureLib.RegisterTexture(name, data)
   -> TextureLib_Texture
```

Registers a texture resource.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>name</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>data</b> <code>TextureLib_Texture</code> `Name` is auto-initialized.</p>
</doc>
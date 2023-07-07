# Color
The `Color` library offers utilities for working with colors, either through RGB, decimal, or hex.

The constructor methods create an `RGBColor` table.

The library also contains constants for common colors used by Larian.

<doc class="ColorLib">

# ColorLib Class

## Methods

##### Clone

```lua
function ColorLib.Clone(color)
   -> RGBColor -- New instance with same values.
```

Clones a color instance.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>color</b> <code>RGBColor</code></p>

##### Create

```lua
function ColorLib.Create(red, green, blue, alpha)
   -> RGBColor
```

Alias for creating an RGBColor from RGBA values.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>red</b> <code>integer?</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>green</b> <code>integer?</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>blue</b> <code>integer?</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>alpha</b> <code>integer?</code></p>

##### CreateFromDecimal

```lua
function ColorLib.CreateFromDecimal(num)
   -> RGBColor
```

Creates a color from a decimal value.

Does not support alpha.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>num</b> <code>integer</code></p>

##### CreateFromHex

```lua
function ColorLib.CreateFromHex(hex)
   -> RGBColor
```

Creates a color from an html-format hex color code.

Does not support alpha.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>hex</b> <code>string</code></p>

##### CreateFromRGB

```lua
function ColorLib.CreateFromRGB(red, green, blue, alpha)
   -> RGBColor
```

Creates a color from RGBA values. Expected range of values is [0-255].

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>red</b> <code>integer?</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>green</b> <code>integer?</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>blue</b> <code>integer?</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>alpha</b> <code>integer?</code></p>

##### Lerp

```lua
function ColorLib.Lerp(startColor, targetColor, progress)
```

Creates a new color whose RGB components are linearly interpolated from one to another.

Uses the alpha of the target color.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>startColor</b> <code>RGBColor</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>targetColor</b> <code>RGBColor</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>progress</b> <code>number</code> Expected values are from 0.0 to 1.0.</p>
</doc>

<doc class="RGBColor">

# RGBColor Class

## Methods

##### Clone

```lua
function RGBColor:Clone()
   -> RGBColor
```

Returns a new instance of RGBColor with the same values.

##### Create

```lua
function RGBColor.Create(r, g, b, a)
   -> RGBColor
```

Creates a color from RGBA values.

Expected range is [0-255] and will be clamped.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>r</b> <code>integer?</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>g</b> <code>integer?</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>b</b> <code>integer?</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>a</b> <code>integer?</code> Defaults to 255.</p>

##### CreateFromDecimal

```lua
function RGBColor.CreateFromDecimal(num)
   -> RGBColor
```

Creates a color from a decimal value.

Does not support alpha.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>num</b> <code>integer</code></p>

##### CreateFromHex

```lua
function RGBColor.CreateFromHex(hex)
   -> RGBColor
```

Creates a color from a hexadecimal value.

Does not support alpha.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>hex</b> <code>string</code></p>

##### Equals

```lua
function RGBColor:Equals(color)
   -> boolean
```

Returns whether 2 colors have the same RGBA values.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>color</b> <code>RGBColor</code></p>

##### ToDecimal

```lua
function RGBColor:ToDecimal(addAlpha)
   -> integer
```

Returns the decimal representation of the color.

Actionscript expects colors to be represented in this way.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>addAlpha</b> <code>boolean?</code> Defaults to false.</p>

##### ToFloats

```lua
function RGBColor:ToFloats()
   -> number, number, number, number
```

Returns the RGBA values as floats in the range[0.0 - 1.0]

##### ToHex

```lua
function RGBColor:ToHex(prefix, addAlpha)
   -> string
```

Returns the hexadecimal representation of the color.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>prefix</b> <code>boolean?</code> Prefix the string with #. Defaults to false.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>addAlpha</b> <code>boolean?</code> Defaults to false. If enabled, resulting color will be in the format `#RRGGBBAA`</p>

##### Unpack

```lua
function RGBColor:Unpack()
   -> integer ...
```

Unpacks the color's RGB values, alpha included.

##### __add

```lua
---@protected
function RGBColor.__add(color1, color2)
   -> RGBColor
```

__add overload. Adds the RGB values of both colors.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>color1</b> <code>RGBColor</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>color2</b> <code>RGBColor</code></p>

##### __eq

```lua
---@protected
function RGBColor.__eq(color1, color2)
   -> boolean
```

__eq overload. Equivalent to calling RGBColor:Equals()

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>color1</b> <code>RGBColor</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>color2</b> <code>RGBColor</code></p>

##### __sub

```lua
---@protected
function RGBColor.__sub(color1, color2)
   -> RGBColor
```

__sub overload. Subtracts the RGB values.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>color1</b> <code>RGBColor</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>color2</b> <code>RGBColor</code></p>
</doc>
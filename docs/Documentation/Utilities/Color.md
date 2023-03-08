# Color
The `Color` table offers utilities for working with colors, either through RGB, decimal, or hex.

The constructor methods create an `RGBColor` table.

## RGBColor

<doc package="RGBColor">



## Methods

#### ToDecimal



```lua
function RGBColor:ToDecimal(addAlpha)
   -> integer
```



Returns the decimal representation of the color.
Actionscript expects colors to be represented in this way.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>addAlpha</b> <code>boolean?</code> Defaults to false.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer</code> </p>

#### Unpack



```lua
function RGBColor:Unpack()
   -> integer ...
```



Unpacks the color's RGB values, alpha included.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer ...</code> </p>

#### ToHex



```lua
function RGBColor:ToHex(prefix, addAlpha)
   -> string
```



Returns the hexadecimal representation of the color.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>prefix</b> <code>boolean?</code> Prefix the string with #. Defaults to false.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>addAlpha</b> <code>boolean?</code> Defaults to false. If enabled, resulting color will be in the format `#RRGGBBAA`</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string</code> </p>

#### ToFloats



```lua
function RGBColor:ToFloats()
   -> number, number, number, number
```



Returns the RGBA values as floats in the range[0.0 - 1.0]



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>number, number, number, number</code> </p>

#### Clone



```lua
function RGBColor:Clone()
   -> RGBColor
```



Returns a new instance of RGBColor with the same values.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>RGBColor</code> </p>

#### CreateFromDecimal



```lua
function RGBColor.CreateFromDecimal(num)
   -> RGBColor
```



Creates a color from a decimal value.
Does not support alpha.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>num</b> <code>integer</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>RGBColor</code> </p>

#### Create



```lua
function RGBColor.Create(r, g, b, a)
   -> RGBColor
```



Creates a color from RGBA values.
Expected range is [0-255] and will be clamped.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>r</b> <code>integer?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>g</b> <code>integer?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>b</b> <code>integer?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>a</b> <code>integer?</code> Defaults to 255.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>RGBColor</code> </p>

#### CreateFromHex



```lua
function RGBColor.CreateFromHex(hex)
   -> RGBColor
```



Creates a color from a hexadecimal value.
Does not support alpha.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>hex</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>RGBColor</code> </p>

#### Equals



```lua
function RGBColor:Equals(color)
   -> boolean
```



Returns whether 2 colors have the same RGBA values.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>color</b> <code>RGBColor</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>
</doc>

## Color

<doc package="ColorLib">



## Methods

#### Create



```lua
function Color.Create(red, green, blue, alpha)
   -> RGBColor
```



Alias for creating an RGBColor from RGBA values.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>red</b> <code>integer?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>green</b> <code>integer?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>blue</b> <code>integer?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>alpha</b> <code>integer?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>RGBColor</code> </p>

#### CreateFromRGB



```lua
function Color.CreateFromRGB(red, green, blue, alpha)
   -> RGBColor
```



Creates a color from RGBA values. Expected range of values is [0-255].



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>red</b> <code>integer?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>green</b> <code>integer?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>blue</b> <code>integer?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>alpha</b> <code>integer?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>RGBColor</code> </p>

#### CreateFromDecimal



```lua
function Color.CreateFromDecimal(num)
   -> RGBColor
```



Creates a color from a decimal value.
Does not support alpha.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>num</b> <code>integer</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>RGBColor</code> </p>

#### CreateFromHex



```lua
function Color.CreateFromHex(hex)
   -> RGBColor
```



Creates a color from an html-format hex color code.
Does not support alpha.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>hex</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>RGBColor</code> </p>

#### Clone



```lua
function Color.Clone(color)
   -> RGBColor 
```



Clones a color instance.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>color</b> <code>RGBColor</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>RGBColor </code> New instance with same values.</p>
</doc>
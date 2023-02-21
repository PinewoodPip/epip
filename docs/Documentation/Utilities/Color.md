# Color
The `Color` table offers utilities for working with colors, either through RGB, decimal, or hex.

The constructor methods create an `RGBColor` table.

## RGBColor

<doc class="RGBColor" symbols="Function">

```lua
---Returns the decimal representation of the color.
---Actionscript expects colors to be represented in this way.
---@param addAlpha boolean? Defaults to false.
---@return integer 
function RGBColor:ToDecimal(addAlpha)

---Unpacks the color's RGB values, alpha included.
---@return integer ...
function RGBColor:Unpack()

---Returns the hexadecimal representation of the color.
---@param prefix boolean? Prefix the string with #. Defaults to false.
---@param addAlpha boolean? Defaults to false. If enabled, resulting color will be in the format `#RRGGBBAA`
---@return string 
function RGBColor:ToHex(prefix, addAlpha)

---Returns the RGBA values as floats in the range[0.0 - 1.0]
---@return number, number, number, number
function RGBColor:ToFloats()

---Returns a new instance of RGBColor with the same values.
---@return RGBColor 
function RGBColor:Clone()

---Creates a color from a decimal value.
---Does not support alpha.
---@param num integer
---@return RGBColor 
function RGBColor.CreateFromDecimal(num)

---Creates a color from RGBA values.
---Expected range is [0-255] and will be clamped.
---@param r integer?
---@param g integer?
---@param b integer?
---@param a integer? Defaults to 255.
---@return RGBColor 
function RGBColor.Create(r, g, b, a)

---Creates a color from a hexadecimal value.
---Does not support alpha.
---@param hex string
---@return RGBColor 
function RGBColor.CreateFromHex(hex)

---Returns whether 2 colors have the same RGBA values.
---@param color RGBColor
---@return boolean 
function RGBColor:Equals(color)

```
</doc>

<!-- ## Events

<doc class="ColorLib" symbols="Listenable">

```lua
```
</doc>
-->

## Methods

<doc class="ColorLib" symbols="Function">

```lua
---Alias for creating an RGBColor from RGBA values.
---@overload fun(color:RGBColor):RGBColor 
---@param red integer?
---@param green integer?
---@param blue integer?
---@param alpha integer?
---@return RGBColor 
function Color.Create(red, green, blue, alpha)

---Creates a color from RGBA values. Expected range of values is [0-255].
---@param red integer?
---@param green integer?
---@param blue integer?
---@param alpha integer?
---@return RGBColor 
function Color.CreateFromRGB(red, green, blue, alpha)

---Creates a color from a decimal value.
---Does not support alpha.
---@param num integer
---@return RGBColor 
function Color.CreateFromDecimal(num)

---Creates a color from an html-format hex color code.
---Does not support alpha.
---@param hex string
---@return RGBColor 
function Color.CreateFromHex(hex)

---Clones a color instance.
---@param color RGBColor
---@return RGBColor -- New instance with same values.
function Color.Clone(color)

```
</doc>
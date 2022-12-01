# Vector
The `Vector` library offers a vector data structure and methods to work with them.

They are intended to be used as immutables. All methods and operators return a new instance of the output vector.

Vector objects implement various operators; the binary ones only usable for vectors of the same arity:

- `+`: sum of components.
- `-`: subtraction of components.
- `*`: dot product.
- `^`: negation; inverts the sign of all components.


Additionally, `vector.Arity` or `vector.Length` will return the amount of elements in the vector.

In Epip, their primary use is semantic clarity for functions that require 2D coordinates as parameters.

## Vector Class

<doc class="Vector" symbols="Class">

```lua
---@class Vector
---@field Arity integer Getter. Equivalent to #self.
---@field Length number Getter. Equivalent to Vector.GetLength()
---@field unpack fun(self:Vector):... Equivalent to table.unpack(self)

```
</doc>

<!-- ## Events

<doc class="VectorLib" symbols="Listenable">

```lua
```
</doc>
-->

## Methods

<doc class="VectorLib" symbols="Function">

```lua
---Creates a vector of variable length.
---@return Vector 
function Vector.Create(...)

---Performs a dot product between two vectors of the same dimensions.
---@param v1 Vector
---@param v2 Vector
---@return number 
function Vector.DotProduct(v1, v2)

---Performs a scalar product of a vector, multiplying each of its components.
---@param v Vector
---@param scalar number
---@return Vector 
function Vector.ScalarProduct(v, scalar)

---Sums the components of two vectors of the same dimensions.
---@param v1 Vector
---@param v2 Vector
---@return Vector 
function Vector.Sum(v1, v2)

---Subtracts the components of two vectors of the same dimension.
---@param v1 Vector
---@param v2 Vector
---@return Vector 
function Vector.Subtract(v1, v2)

---@param v Vector
---@return Vector 
function Vector.Negate(v)

---@param vector Vector
---@return Vector 
function Vector.Clone(vector)

---@param vector Vector
---@return Vector New instance; does not mutate.
function Vector.GetNormalized(vector)

---@param vector Vector
---@return number 
function Vector.GetLength(vector)

```
</doc>
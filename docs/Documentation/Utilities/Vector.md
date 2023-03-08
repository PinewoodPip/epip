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

<doc package="Vector">


</doc>

## Vector Library

<doc package="VectorLib">



## Methods

#### Create



```lua
function Vector.Create(...)
   -> Vector
```



Creates a vector of variable length.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Vector</code> </p>

#### DotProduct



```lua
function Vector.DotProduct(v1, v2)
   -> number
```



Performs a dot product between two vectors of the same dimensions.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>v1</b> <code>Vector</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>v2</b> <code>Vector</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>number</code> </p>

#### ScalarProduct



```lua
function Vector.ScalarProduct(v, scalar)
   -> Vector
```



Performs a scalar product of a vector, multiplying each of its components.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>v</b> <code>Vector</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>scalar</b> <code>number</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Vector</code> </p>

#### Sum



```lua
function Vector.Sum(v1, v2)
   -> Vector
```



Sums the components of two vectors of the same dimensions.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>v1</b> <code>Vector</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>v2</b> <code>Vector</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Vector</code> </p>

#### Subtract



```lua
function Vector.Subtract(v1, v2)
   -> Vector
```



Subtracts the components of two vectors of the same dimension.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>v1</b> <code>Vector</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>v2</b> <code>Vector</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Vector</code> </p>

#### Negate



```lua
function Vector.Negate(v)
   -> Vector
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>v</b> <code>Vector</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Vector</code> </p>

#### AreEqual



```lua
function Vector.AreEqual(v1, v2)
```



Returns whether 2 vectors are equal.
Vectors are equal if they have the same arity and components.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>v1</b> <code>Vector</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>v2</b> <code>Vector</code> </p>

#### Clone



```lua
function Vector.Clone(vector)
   -> Vector
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>vector</b> <code>Vector</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Vector</code> </p>

#### GetNormalized



```lua
function Vector.GetNormalized(vector)
   -> Vector New instance; does not mutate.
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>vector</b> <code>Vector</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Vector New instance; does not mutate.</code> </p>

#### GetLength



```lua
function Vector.GetLength(vector)
   -> number
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>vector</b> <code>Vector</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>number</code> </p>
</doc>
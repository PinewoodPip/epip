# OOP
The `OOP` library implements a OOP system that supports multiple inheritance.

A class is defined by a *class definition table*, passed onto `RegisterClass()` to initialize and register it. Classes to inherit from are defined during this call and cannot be changed afterwards. Instances of the classes will inherit keys from their class definition table.

Inheritance is done via metatables, however special logic is used to extend this functionality to allow for multiple inheritance.

If class A inherits from class B and C, indexing an instance (or the definition) of class A will:

1. Check for the presence of the key within the instance/definition of A
2. Check for the presence of the key within each superclass, in order of inheritance established during `RegisterClass()` (from first to last). This is done recursively for any superclasses those classes might have.
3. Invoke `__index` of the class.

**There is currently no support for multiple inheritance of metamethods.** They will only be checked in the direct superclass.

There is no public constructor for classes by design; it is up to you to explicitly declare one. In Epip, these are typically called `Create()`. `__call` is not used for clarity reasons, as well as limitations in how it can be annotated (ex. no comments for parameters).

Constructors must call `ClassDefinition:__Create()` to create an instance. This method takes an optional table parameter; if present, that table will become the class instance, keeping any keys it had already set. This is typically also the parameter of the public constructor, so as to avoid bloating the constructor's formal parameters, instead providing them via a table. Within your constructor you may afterwards perform any initializations of your own as necessary.

As mentioned before, an instance must be of a single class type, and there are no public constructors; as a result, it is not possible to make an "anonymous" class that inherits from multiple classes. You must register an explicit class that inherits from the classes you want.

Class instances are of the `Class` type. This type provides several utility methods for type-checking.

When annotating your classes, be sure to make them inherit from `Class` to denote they use the OOP system as well as to expose the utility methods in the IDE.

Note that Feature has integration with this library that allows registering and fetching classes related to the feature itself. If working with features, their calls should be used instead, as they will likely get automatic namespacing in the future. Currently, class names must be unique, lest new registrations will overwrite the previous definition.

<doc class="OOPLib">

# OOPLib Class

## Methods

##### GetClass

```lua
function OOPLib.GetClass(className)
   -> `T`
```

Returns the base table for a class.

Throws if the class is not registered.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>className</b> <code>`T`</code></p>

##### IsClass

```lua
function OOPLib.IsClass(tbl, className)
   -> boolean
```

Returns whether a table is a class table or instance.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>tbl</b> <code>table</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>className</b> <code>string?</code> If present, `true` will only be returned if the table *is* the requested class.</p>

##### RegisterClass

```lua
function OOPLib.RegisterClass(className, class, parentClasses)
   -> `T`
```

Registers a class.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>className</b> <code>string|`T`</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>class</b> <code>table</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>parentClasses</b> <code>string[]?</code> Classes this one inherits from.</p>

##### SetMetatable

```lua
function OOPLib.SetMetatable(table, metatable)
```

Sets a table's metatable. __index is set to index the metatable itself, using the metatable's __index as a fallback.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>table</b> <code>table</code> Mutated.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>metatable</b> <code>table</code></p>
</doc>

<doc class="Class">

# Class Class

## Methods

##### GetClassDefinition

```lua
function Class:GetClassDefinition()
   -> Class
```

Returns the main table that defines this class instance.

##### GetClassName

```lua
function Class:GetClassName()
   -> string
```

Returns the name of the class.

##### GetParentClasses

```lua
function Class:GetParentClasses()
   -> Class[]
```

Returns the parent classes of the class.

##### ImplementsClass

```lua
function Class:ImplementsClass(className)
   -> boolean
```

Returns whether this class implements another.

Hierarchies are considered.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>className</b> <code>string</code></p>

##### __Create

```lua
---@protected
function Class:__Create(data)
   -> Class
```

Creates a new instance of the class.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>data</b> <code>table?</code> Table with the initial fields of the instance.</p>
</doc>
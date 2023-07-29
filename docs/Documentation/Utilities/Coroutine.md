# Coroutine
The `Coroutine` library offers coroutines that support sleeping for X seconds or until a predicate is met.

<doc class="CoroutineLib">

# CoroutineLib Class

Inherits from <code>Library</code>.

## Methods

##### Create

```lua
function CoroutineLib.Create(fun)
   -> CoroutineInstance
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>fun</b> <code>fun(inst:CoroutineInstance, ...)</code></p>
</doc>

<doc class="CoroutineInstance">

# CoroutineInstance Class

## Events and Hooks

#### Finished (event)

An event object with no parameters.

## Methods

##### Continue

```lua
function CoroutineInstance:Continue()
   -> ...
```

##### IsDead

```lua
function CoroutineInstance:IsDead()
   -> boolean
```

##### IsSleeping

```lua
function CoroutineInstance:IsSleeping()
   -> boolean
```

##### Sleep

```lua
function CoroutineInstance:Sleep(time, ...)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>time</b> <code>number|function</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>...</b> <code>any</code> Variables yielded. Discarded if the coroutine is resuming from sleeping, as there is no caller.</p>

##### Yield

```lua
function CoroutineInstance:Yield()
```
</doc>
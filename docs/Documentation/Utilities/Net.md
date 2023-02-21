# Net
The `Net` library offers wrapper methods to make working with network messages easier. Its main feature is automatically stringifying messages, removing the need to do so explicitly when using tables.

Additionally, `Net.RegisterListener()` provides a way to register net listeners with IDE hints for the function parameters. This is done by defining a class with the name of the net message, for example:
```lua
---@class EPIPENCOUNTERS_Vanity_ApplyAura : NetMessage, Net_SimpleMessage_NetID
---@field AuraID string
---@field BoneID string

Net.RegisterListener("EPIPENCOUNTERS_Vanity_ApplyAura", function(payload)
    -- The payload variable here will be of the type EPIPENCOUNTERS_Vanity_ApplyAura and offer auto-completion!
end)
```

Additionally, for purposes of semantic clarity, a `NetMessage` class exists for denoting net events. Several other net message classes are defined with commonly used fields like `CharacterNetID`. You may have your net message classes inherit from these to reduce annotation duplication and to clarify the class's purpose as a net message.

## Classes

TODO
<doc class="NetLib" symbols="_SubClasses">

</doc>

## Events

<doc class="Net" symbols="Listenable">

```lua
---@event MessageReceived<T>
---@field Channel string
---@field Message `T`
---@field UserID UserId

```
</doc>

## Methods

<doc class="Net" symbols="Function">

```lua
---Sends a message to the server.
---@param channel `T`
---@param message T?
function Net.PostToServer(channel, message)

---Sends a message to all peers.
---@param channel `T`
---@param message T?
---@param excludedChar GUID?
function Net.Broadcast(channel, message, excludedChar)

---Sends a message to the user that currently controls char. Fails if char is a summon.
---@param char Character|GUID|NetId
---@param channel `T`
---@param message T?
function Net.PostToCharacter(char, channel, message)

---Sends a message to a user.
---@param user UserId
---@param channel `T`
---@param message T
---@param excludedChar GUID?
function Net.PostToUser(user, channel, message, excludedChar)

---Sends a message to the owner of char. Use if you suspect the char might be a summon.
---@param char Character
---@param channel string
---@param message any
function Net.PostToOwner(char, channel, message)

---Wrapper for Ext.RegisterNetListener that parses json payloads and fires an event afterwards.
---@param channel `T`
---@param func fun(payload:`T`)
function Net.RegisterListener(channel, func)

```
</doc>
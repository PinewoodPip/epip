# Item

Contains queries related to items. Most functions expect you to pass `Item` as the first parameter (alias for `EclItem` and `EsvItem`).

## Functions
<doc lib="GameItem">

```lua
--- Count the amount of template instances (prefix + guid) in the client party's inventory.
---@param template string
---@return number
function Game.Items.GetPartyTemplateCount(template) -- Client-only
```
```lua
--- Count the items in an entity's inventory that match a predicate.  
--- Different from the server implementation, as item amounts cannot be queried on client from the item object. We rely on partyInventory UI instead.
---@param entity Entity
---@param predicate function
---@return number
function Game.Items.CountItemsInInventory(entity, predicate) -- Client-only
```
```lua
--- Count the items in an entity's inventory that match a predicate function.  
--- Predicate is passed ``EsvItem`` and should return true for items to be counted.
---@param entity Entity
---@param predicate function
---@return number
function Game.Items.CountItemsInInventory(entity, predicate) -- Server-only
```
```lua
--- Returns true if the item is an Artifact by checking the AMER_UNI tag.
---@param item Item
---@return boolean
function Game.Items.IsArtifact(item)
```
```lua
--- Gets the amount of Loremaster necessary to identify an item.  
--- Ignores whether the item is already identified.
---@param item Item
---@return number
function Game.Items.GetIdentifyRequirement(item)
```
```lua
--- Returns true if the item is an armor piece or a weapon.
---@param item Item
---@return boolean
function Game.Items.IsEquipment(item)
```
```lua
--- Returns true for dyeable items (equipment, except rings/amulet/belt).
---@param item Item
---@return boolean
function Game.Items.IsDyeable(item)
```
```lua
--- Alias for Item.Stats.ItemSlot
---@param item Item
---@return string
function Game.Items.GetItemSlot(item)
```
```lua
--- Like ItemSlot, but distinguishes armor subtypes  
--- Get subtype of item (ex. "Dagger" or "Platemail").  
--- Returns ItemSlot for items with no subtypes
---@param item Item
---@return EquipmentSubType
function Game.Items.GetEquipmentSubtype(item)
```
```lua
--- Applies a dye to the item.
---@param item Item
---@param dye Dye
---@return boolean False if item is already dyed with the same dye, or if dye is ``nil``.
function Game.Items.ApplyDye(item, dye)
```
```lua
--- Returns the ID and data for the most recently-applied dye deltamod on the item.
---@param item Item
---@return string,Dye The dye ID and data table.
function Game.Items.GetCurrentDye(item)
```
```lua
--- Returns true if item is equipped by char. Assumes the item cannot be equipped into an unintended slot. Rings are checked for both slots.
---@param char Character
---@param item Item
---@return boolean
function Game.Items.IsEquipped(char, item)
```
```lua
--- Gets the stats object of the rune inserted at rune index ``index`` on item.
---@param item Item
---@param index number
---@return StatItem
function Game.Items.GetRune(item, index)
```
```lua
--- Returns a list of runes on the item.
---@param item Item
---@return table<number, StatItem> Empty slots are nil.
function Game.Items.GetRunes(item)
```
```lua
--- Returns true if item has any runes slotted.
---@param item Item
---@return boolean
function Game.Items.HasRunes(item)
```
```lua
--- Returns a list of the items in the entity's inventory that match an optional predicate function.  
--- Predicate is passed the EclItem/EsvItem and should return true for items to be included.
---@param entity Entity
---@param predicate function
---@return Item[]
function Game.Items.GetItemsInInventory(entity, predicate)
```

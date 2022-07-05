# Item

Contains queries related to items. Most functions expect you to pass `Item` as the first parameter (alias for `EclItem` and `EsvItem`).

## Functions
<epip class="GameItem" symbols="Function">

```lua
--- Count the amount of template instances (prefix + guid) in the client party's inventory.
---@param template string
---@return number 
function Game.Items.GetPartyTemplateCount(template)

---Returns true if the item is an Artifact by checking the AMER_UNI tag.
---@param item Item
---@return boolean 
function Items.IsArtifact(item)

---Returns whether item is a melee weapon (satisfying a MeleeWeapon requirement)
---Returns true for None-type weaponry.
---@param item Item
---@return boolean 
function Items.IsMeleeWeapon(item)

---Returns whether item is a shield (satisfying a ShieldWeapon requirement)
---@param item Item
---@return boolean 
function Items.IsShield(item)

---Returns whether item is a dagger (satisfying a DaggerWeapon requirement)
---@param item Item
---@return boolean 
function Items.IsDagger(item)

---Returns whether item is a ranged weapon; bow or crossbow only!
---@param item Item
---@return boolean 
function Items.IsRangedWeapon(item)

--- Gets the amount of Loremaster necessary to identify an item.  
--- Ignores whether the item is already identified.
---@param item Item
---@return number 
function Game.Items.GetIdentifyRequirement(item)

--- Returns true if the item is an armor piece or a weapon.
---@param item Item
---@return boolean 
function Game.Items.IsEquipment(item)

--- Returns true for dyeable items (equipment, except rings/amulet/belt).
---@param item Item
---@return boolean 
function Game.Items.IsDyeable(item)

--- Alias for Item.Stats.ItemSlot
---@param item Item
---@return string 
function Game.Items.GetItemSlot(item)

--- Like ItemSlot, but distinguishes armor subtypes  
--- Get subtype of item (ex. "Dagger" or "Platemail").  
--- Returns ItemSlot for items with no subtypes
---@param item Item
---@return EquipmentSubType 
function Game.Items.GetEquipmentSubtype(item)

--- Applies a dye to the item.
---@param item Item
---@param dye Dye
---@return boolean False if item is already dyed with the same dye, or if dye is ``nil``.
function Game.Items.ApplyDye(item, dye)

--- Returns the ID and data for the most recently-applied dye deltamod on the item.
---@param item Item
---@return string,Dye The dye ID and data table.
function Game.Items.GetCurrentDye(item)

---Returns a list of the named boosts on the item.
---@param item Item
---@return string[] 
function Game.Items.GetNamedBoosts(item)

--- Returns true if item is equipped by char. Assumes the item cannot be equipped into an unintended slot. Rings and weapons are checked for both slots.
---@param char Character
---@param item Item
---@return boolean 
function Game.Items.IsEquipped(char, item)

---Returns the slot that an item is equipped in, or nil if it is not.
---@param item Item
---@return EquipSlot? 
function Game.Items.GetEquippedSlot(item)

--- Count the items in an entity's inventory that match a predicate function.  
--- Predicate is passed ``Item`` and should return true for items to be counted.
---@param entity Entity
---@param predicate fun(item: EsvItem)
---@return number 
function Game.Items.CountItemsInInventory(entity, predicate)

--- Gets the stats object of the rune inserted at rune index ``index`` on item.
---@param item Item
---@param index number
---@return StatItem 
function Game.Items.GetRune(item, index)

--- Returns a list of runes on the item.
---@param item Item
---@return table<number, StatItem> Empty slots are nil.
function Game.Items.GetRunes(item)

--- Returns true if item has any runes slotted.
---@param item Item
---@return boolean 
function Game.Items.HasRunes(item)

--- Returns a list of the items in the entity's inventory that match an optional predicate function.  
--- Predicate is passed the EclItem/EsvItem and should return true for items to be included.
---@param entity Entity
---@param predicate fun(item: Item)
---@return Item[] 
function Game.Items.GetItemsInInventory(entity, predicate)

```
</epip>
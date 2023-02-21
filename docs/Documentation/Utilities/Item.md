# Item
The `Item` library contains methods relating to item game objects.

<!-- ## Classes

<doc class="ItemLib" symbols="_SubClasses">

```lua
---@class ItemLib_RuneGroup
---@field Material StatsLib_Rune_Material
---@field SmallRune ItemLib_Rune
---@field MediumRune ItemLib_Rune
---@field LargeRune ItemLib_Rune
---@field GiantRune ItemLib_Rune

```
```lua
---@class ItemLib_Rune
---@field Material StatsLib_Rune_Material
---@field StatsID string
---@field Template GUID
---@field Size "Small"|"Medium"|"Large"|"Giant"
---@field IsFramed false Framed runes not currently tracked.

function _Rune:GetStatsObject()

```
</doc>

## Events

<doc class="ItemLib" symbols="Listenable">

```lua
```
</doc>
-->

## Methods

<doc class="ItemLib" symbols="Function">

```lua
---Returns true if the item is an Artifact by checking the AMER_UNI tag.
---@param item Item
---@return boolean 
function Item.IsArtifact(item)

---Returns whether an item is of Unique rarity.
---Returns `true` for Artifact items.
---@param item Item
---@return boolean 
function Item.IsUnique(item)

---Returns whether the item is a rune.
---@param item Item
---@return boolean 
function Item.IsRune(item)

---Returns whether item is a melee weapon (satisfying a MeleeWeapon requirement)
---Returns true for None-type weaponry.
---@param item Item
---@return boolean 
function Item.IsMeleeWeapon(item)

---Returns the icon of the item.
---Fetching the icon is technically different per context; the server only cares about root template icon (except for the gold template). This function uses the client logic (which also checks icon override and icon from stats).
---@param item Item
---@return string 
function Item.GetIcon(item)

---Returns whether the item has a flag.
---@param item Item
---@param flag EclItemFlags|EsvItemFlags|EclItemFlags2|EsvItemFlags2
function Item.HasFlag(item, flag)

---Returns whether an item is a container.
---@param item Item
---@return boolean 
function Item.IsContainer(item)

---Returns whether the item has a OnUsePeaceAction of the passed type.
---@param item Item
---@param useActionID ActionDataType
---@return boolean 
function Item.HasUseAction(item, useActionID)

---Returns whether an item has any use actions.
---@param item Item
---@return boolean 
function Item.HasUseActions(item)

---Returns the use actions of an item, optionally filtered by type.
---@param item Item
---@param actionType ActionDataType
---@return IActionData[] 
function Item.GetUseActions(item, actionType)

---Returns the current owner of the item.
---The owner will be nil if the character who owned the item died.
---@param item Item
---@return Character? 
function Item.GetOwner(item)

---Returns whether interacting with an item is legal.
---@param item Item
---@return boolean 
function Item.IsLegal(item)

---Returns true if the item is a weapon (shields don't count!)
---@param item Item
---@return boolean 
function Item.IsWeapon(item)

---Returns whether item is a shield (satisfying a ShieldWeapon requirement)
---@param item Item
---@return boolean 
function Item.IsShield(item)

---Returns whether item is a dagger (satisfying a DaggerWeapon requirement)
---@param item Item
---@return boolean 
function Item.IsDagger(item)

---Returns whether item is a ranged weapon; bow or crossbow only!
---@param item Item
---@return boolean 
function Item.IsRangedWeapon(item)

---@param item Item
---@return integer 
function Item.GetUseAPCost(item)

---@param char Character
---@param item Item
---@return boolean 
function Item.CanUse(char, item)

---Returns all items in the party inventory of char matching the predicate, or all if no predicate is passed.
---@param char Character
---@param predicate? fun(item:Item):boolean
function Item.GetItemsInPartyInventory(char, predicate)

--- Gets the amount of Loremaster necessary to identify an item.  
--- Ignores whether the item is already identified.
---@param item Item
---@return number 
function Item.GetIdentifyRequirement(item)

---@param identifier GUID|NetId|EntityHandle
---@param isFlashHandle boolean?
---@return Item 
function Item.Get(identifier, isFlashHandle)

--- Returns true if the item is an armor piece or a weapon.
---@param item Item
---@return boolean 
function Item.IsEquipment(item)

--- Returns true for dyeable items (equipment, except rings/amulet/belt).
---@param item Item
---@return boolean 
function Item.IsDyeable(item)

--- Alias for Item.Stats.ItemSlot
---@param item Item
---@return ItemSlot 
function Item.GetItemSlot(item)

---@param char Character
---@param slot ItemSlot
---@return Item? 
function Item.GetEquippedItem(char, slot)

---Returns the subtype of item (ex. "Knife" or "Platemail").  
---Returns ItemSlot for items with no subtypes.
---@param item Item
---@return ItemLib_EquipmentType|ItemSlot 
function Item.GetEquipmentSubtype(item)

--- Applies a dye to the item.
---@param item Item
---@param dye Dye
---@return boolean False if item is already dyed with the same dye, or if dye is ``nil``.
function Item.ApplyDye(item, dye)

--- Returns the ID and data for the most recently-applied dye deltamod on the item.
---@param item Item
---@return string,Dye The dye ID and data table.
function Item.GetCurrentDye(item)

---Returns a list of the named boosts on the item.
---@param item Item
---@return string[] 
function Item.GetNamedBoosts(item)

--- Returns true if item is equipped by char. Assumes the item cannot be equipped into an unintended slot. Rings and weapons are checked for both slots.
---@param char Character
---@param item Item
---@return boolean 
function Item.IsEquipped(char, item)

---Returns the slot that an item is equipped in, or nil if it is not.
---@param item Item
---@param char Character? Defaults to item's owner.
---@return EquipSlot? 
function Item.GetEquippedSlot(item, char)

--- Count the items in an entity's inventory that match a predicate function.  
--- Predicate is passed ``Item`` and should return true for items to be counted.
---@param entity Entity
---@param predicate fun(item: EsvItem)
---@return number 
function Item.CountItemsInInventory(entity, predicate)

---Returns the items contained within a container item, optionally filtered by predicate.
---@param container Item
---@param predicate (fun(item:Item):boolean)? The predicate should return `true` for items to be included. If `nil`, all items will be included.
---@return Item[] 
function Item.GetContainedItems(container, predicate)

--- Gets the stats object of the rune inserted at rune index ``index`` on item.
---@param item Item
---@param index integer **0-based.**
---@return StatItem 
function Item.GetRune(item, index)

--- Returns a list of runes on the item.
---@param item Item
---@return table<number, StatItem> --Empty slots are nil.
function Item.GetRunes(item)

---Returns the amount of rune slots an item has.
---@param item Item
---@return integer 
function Item.GetRuneSlots(item)

---Returns the icon displaying the state of item's rune slots.
---@param item Item
---@return icon 
function Item.GetRuneSlotsIcon(item)

--- Returns true if item has any runes slotted.
---@param item Item
---@return boolean 
function Item.HasRunes(item)

---Returns the level of an item.
---@param item Item
---@return integer? --`nil` if the item has no stats.
function Item.GetLevel(item)

---Returns the icon frame for a rarity, if any.
---@param rarity ItemLib_Rarity|EclItem
---@return icon? --Not all rarities have icons.
function Item.GetRarityIcon(rarity)

---Returns whether an item is marked as wares.
---@param item Item
---@return boolean 
function Item.IsMarkedAsWares(item)

--- Returns a list of the items in the entity's inventory that match an optional predicate function.  
--- Predicate is passed the EclItem/EsvItem and should return true for items to be included.
---@param entity Entity
---@param predicate fun(item: Item)
---@return Item[] 
function Item.GetItemsInInventory(entity, predicate)

---Sets a custom icon for an item.
---Not persistent!
---@param item Item
---@param icon string
function Item.SetIconOverride(item, icon)

---Count the amount of template instances (prefix + guid) in the client party's inventory.
---@param template string
---@return number 
function Item.GetPartyTemplateCount(template)

```
</doc>
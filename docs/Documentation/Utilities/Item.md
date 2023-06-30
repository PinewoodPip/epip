# Item
The `Item` library contains methods relating to item game objects.

<doc package="ItemLib">



## Methods

#### IsArtifact



```lua
function Item.IsArtifact(item)
   -> boolean
```



Returns true if the item is an Artifact by checking the AMER_UNI tag.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsUnique



```lua
function Item.IsUnique(item)
   -> boolean
```



Returns whether an item is of Unique rarity.
Returns `true` for Artifact items.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsRune



```lua
function Item.IsRune(item)
   -> boolean
```



Returns whether the item is a rune.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsMeleeWeapon



```lua
function Item.IsMeleeWeapon(item)
   -> boolean
```



Returns whether item is a melee weapon (satisfying a MeleeWeapon requirement)
Returns true for None-type weaponry.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetIcon



```lua
function Item.GetIcon(item)
   -> string
```



Returns the icon of the item.
Fetching the icon is technically different per context; the server only cares about root template icon (except for the gold template). This function uses the client logic (which also checks icon override and icon from stats).



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string</code> </p>

#### HasFlag



```lua
function Item.HasFlag(item, flag)
```



Returns whether the item has a flag.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>flag</b> <code>EclItemFlags|EsvItemFlags|EclItemFlags2|EsvItemFlags2</code> </p>

#### IsContainer



```lua
function Item.IsContainer(item)
   -> boolean
```



Returns whether an item is a container.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### HasUseAction



```lua
function Item.HasUseAction(item, useActionID)
   -> boolean
```



Returns whether the item has a OnUsePeaceAction of the passed type.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>useActionID</b> <code>ActionDataType</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### HasUseActions



```lua
function Item.HasUseActions(item)
   -> boolean
```



Returns whether an item has any use actions.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetUseActions



```lua
function Item.GetUseActions(item, actionType)
   -> IActionData[]
```



Returns the use actions of an item, optionally filtered by type.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>actionType</b> <code>ActionDataType</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>IActionData[]</code> </p>

#### GetOwner



```lua
function Item.GetOwner(item)
   -> Character?
```



Returns the current owner of the item.
The owner will be nil if the character who owned the item died.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Character?</code> </p>

#### IsLegal



```lua
function Item.IsLegal(item)
   -> boolean
```



Returns whether interacting with an item is legal.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsWeapon



```lua
function Item.IsWeapon(item)
   -> boolean
```



Returns true if the item is a weapon (shields don't count!)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsShield



```lua
function Item.IsShield(item)
   -> boolean
```



Returns whether item is a shield (satisfying a ShieldWeapon requirement)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsDagger



```lua
function Item.IsDagger(item)
   -> boolean
```



Returns whether item is a dagger (satisfying a DaggerWeapon requirement)



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsRangedWeapon



```lua
function Item.IsRangedWeapon(item)
   -> boolean
```



Returns whether item is a ranged weapon; bow or crossbow only!



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetUseAPCost



```lua
function Item.GetUseAPCost(item)
   -> integer
```



Returns the base AP cost of using an item, independent of the character.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer</code> </p>

#### CanUse



```lua
function Item.CanUse(char, item)
   -> boolean
```



Returns whether char meets the requirements to use an item.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetItemsInPartyInventory



```lua
function Item.GetItemsInPartyInventory(char, predicate)
```



Returns all items in the party inventory of char matching the predicate, or all if no predicate is passed.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>predicate?</b> <code>fun(item:Item):boolean</code> </p>

#### GetIdentifyRequirement



```lua
function Item.GetIdentifyRequirement(item)
   -> number
```



 Gets the amount of Loremaster necessary to identify an item.  
 Ignores whether the item is already identified.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>number</code> </p>

#### Get



```lua
function Item.Get(identifier, isFlashHandle)
   -> Item
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>identifier</b> <code>GUID|NetId|EntityHandle</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>isFlashHandle</b> <code>boolean?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Item</code> </p>

#### IsEquipment



```lua
function Item.IsEquipment(item)
   -> boolean
```



 Returns true if the item is an armor piece or a weapon.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsDyeable



```lua
function Item.IsDyeable(item)
   -> boolean
```



 Returns true for dyeable items (equipment, except rings/amulet/belt).



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetItemSlot



```lua
function Item.GetItemSlot(item)
   -> ItemSlot? 
```



 Alias for Item.Stats.ItemSlot



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>ItemSlot? </code> Nil if the item has no stats.</p>

#### GetEquippedItem



```lua
function Item.GetEquippedItem(char, slot)
   -> Item?
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>slot</b> <code>ItemSlot</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Item?</code> </p>

#### GetEquipmentSubtype



```lua
function Item.GetEquipmentSubtype(item)
   -> ItemLib_EquipmentType|ItemSlot
```



Returns the subtype of item (ex. "Knife" or "Platemail").  
Returns ItemSlot for items with no subtypes.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>ItemLib_EquipmentType|ItemSlot</code> </p>

#### ApplyDye



```lua
function Item.ApplyDye(item, dye)
   -> boolean False if item is already dyed with the same dye, or if dye is ``nil``.
```



 Applies a dye to the item.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>dye</b> <code>Dye</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean False if item is already dyed with the same dye, or if dye is ``nil``.</code> </p>

#### GetCurrentDye



```lua
function Item.GetCurrentDye(item)
   -> string,Dye The dye ID and data table.
```



 Returns the ID and data for the most recently-applied dye deltamod on the item.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string,Dye The dye ID and data table.</code> </p>

#### GetNamedBoosts



```lua
function Item.GetNamedBoosts(item)
   -> string[]
```



Returns a list of the named boosts on the item.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>string[]</code> </p>

#### IsEquipped



```lua
function Item.IsEquipped(char, item)
   -> boolean
```



 Returns true if item is equipped by char. Assumes the item cannot be equipped into an unintended slot. Rings and weapons are checked for both slots.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetEquippedSlot



```lua
function Item.GetEquippedSlot(item, char)
   -> EquipSlot?
```



Returns the slot that an item is equipped in, or nil if it is not.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character?</code> Defaults to item's owner.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>EquipSlot?</code> </p>

#### CountItemsInInventory



```lua
function Item.CountItemsInInventory(entity, predicate)
   -> number
```



 Count the items in an entity's inventory that match a predicate function.  
 Predicate is passed ``Item`` and should return true for items to be counted.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>entity</b> <code>Entity</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>predicate</b> <code>fun(item:</code> EsvItem)</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>number</code> </p>

#### GetContainedItems



```lua
function Item.GetContainedItems(container, predicate)
   -> Item[]
```



Returns the items contained within a container item, optionally filtered by predicate.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>container</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>predicate</b> <code>(fun(item:Item):boolean)?</code> The predicate should return `true` for items to be included. If `nil`, all items will be included.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Item[]</code> </p>

#### GetRune



```lua
function Item.GetRune(item, index)
   -> StatItem
```



 Gets the stats object of the rune inserted at rune index ``index`` on item.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>index</b> <code>integer</code> **0-based.**</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>StatItem</code> </p>

#### GetRunes



```lua
function Item.GetRunes(item)
   -> table<number, StatItem> 
```



 Returns a list of runes on the item.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>table<number, StatItem> </code> Empty slots are nil.</p>

#### GetRuneSlots



```lua
function Item.GetRuneSlots(item)
   -> integer
```



Returns the amount of rune slots an item has.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer</code> </p>

#### GetRuneSlotsIcon



```lua
function Item.GetRuneSlotsIcon(item)
   -> icon
```



Returns the icon displaying the state of item's rune slots.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>icon</code> </p>

#### HasRunes



```lua
function Item.HasRunes(item)
   -> boolean
```



 Returns true if item has any runes slotted.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetLevel



```lua
function Item.GetLevel(item)
   -> integer? 
```



Returns the level of an item.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer? </code> `nil` if the item has no stats.</p>

#### GetRarityIcon



```lua
function Item.GetRarityIcon(rarity)
   -> icon? 
```



Returns the icon frame for a rarity, if any.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>rarity</b> <code>ItemLib_Rarity|EclItem</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>icon? </code> Not all rarities have icons.</p>

#### IsMarkedAsWares



```lua
function Item.IsMarkedAsWares(item)
   -> boolean
```



Returns whether an item is marked as wares.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetItemsInInventory



```lua
function Item.GetItemsInInventory(entity, predicate)
   -> Item[]
```



 Returns a list of the items in the entity's inventory that match an optional predicate function.  
 Predicate is passed the EclItem/EsvItem and should return true for items to be included.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>entity</b> <code>Entity</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>predicate</b> <code>fun(item:</code> Item)</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Item[]</code> </p>

#### SetIconOverride



```lua
function Item.SetIconOverride(item, icon)
```



Sets a custom icon for an item.
Not persistent!



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>icon</b> <code>string</code> </p>

#### GetPartyTemplateCount



```lua
function Item.GetPartyTemplateCount(template)
   -> number
```



Count the amount of template instances (prefix + guid) in the client party's inventory.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>template</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>number</code> </p>
</doc>
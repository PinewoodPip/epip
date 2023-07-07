# Item
The `Item` library contains methods relating to item game objects.

<doc class="ItemLib">

# ItemLib Class

## Methods

##### ApplyDye

```lua
function ItemLib.ApplyDye(item, dye)
   -> boolean False if item is already dyed with the same dye, or if dye is ``nil``.-- if item is already dyed with the same dye, or if dye is ``nil``.
```

 Applies a dye to the item.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>dye</b> <code>Dye</code></p>

##### CanUse

```lua
function ItemLib.CanUse(char, item)
   -> boolean
```

Returns whether char meets the requirements to use an item.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### CountItemsInInventory

```lua
function ItemLib.CountItemsInInventory(entity, predicate)
   -> number
```

 Count the items in an entity's inventory that match a predicate function.  

 Predicate is passed ``Item`` and should return true for items to be counted.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>entity</b> <code>Entity</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>predicate</b> <code>fun(item: EsvItem)</code></p>

##### Get

```lua
function ItemLib.Get(identifier, isFlashHandle)
   -> Item
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>identifier</b> <code>GUID|NetId|EntityHandle</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>isFlashHandle</b> <code>boolean?</code></p>

##### GetContainedItems

```lua
function ItemLib.GetContainedItems(container, predicate)
   -> Item[]
```

Returns the items contained within a container item, optionally filtered by predicate.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>container</b> <code>Item</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>predicate</b> <code>(fun(item:Item):boolean)?</code> The predicate should return `true` for items to be included. If `nil`, all items will be included.</p>

##### GetCurrentDye

```lua
function ItemLib.GetCurrentDye(item)
   -> string,Dye The dye ID and data table.-- dye ID and data table.
```

 Returns the ID and data for the most recently-applied dye deltamod on the item.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### GetEquipmentSubtype

```lua
function ItemLib.GetEquipmentSubtype(item)
   -> ItemLib_EquipmentType|ItemSlot
```

Returns the subtype of item (ex. "Knife" or "Platemail").  

Returns ItemSlot for items with no subtypes.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### GetEquippedItem

```lua
function ItemLib.GetEquippedItem(char, slot)
   -> Item?
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>slot</b> <code>ItemSlot</code></p>

##### GetEquippedSlot

```lua
function ItemLib.GetEquippedSlot(item, char)
   -> EquipSlot?
```

Returns the slot that an item is equipped in, or nil if it is not.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character?</code> Defaults to item's owner.</p>

##### GetIcon

```lua
function ItemLib.GetIcon(item)
   -> string
```

Returns the icon of the item.

Fetching the icon is technically different per context; the server only cares about root template icon (except for the gold template). This function uses the client logic (which also checks icon override and icon from stats).

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### GetIdentifyRequirement

```lua
function ItemLib.GetIdentifyRequirement(item)
   -> number
```

 Gets the amount of Loremaster necessary to identify an item.  

 Ignores whether the item is already identified.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### GetItemSlot

```lua
function ItemLib.GetItemSlot(item)
   -> ItemSlot? -- Nil if the item has no stats.
```

 Alias for Item.Stats.ItemSlot

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### GetItemsInInventory

```lua
function ItemLib.GetItemsInInventory(entity, predicate)
   -> Item[]
```

 Returns a list of the items in the entity's inventory that match an optional predicate function.  

 Predicate is passed the EclItem/EsvItem and should return true for items to be included.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>entity</b> <code>Entity</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>predicate</b> <code>fun(item: Item)</code></p>

##### GetItemsInPartyInventory

```lua
function ItemLib.GetItemsInPartyInventory(char, predicate)
```

Returns all items in the party inventory of char matching the predicate, or all if no predicate is passed.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>predicate</b> <code>fun(item:Item)</code></p>

##### GetLevel

```lua
function ItemLib.GetLevel(item)
   -> integer? -- `nil` if the item has no stats.
```

Returns the level of an item.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### GetNamedBoosts

```lua
function ItemLib.GetNamedBoosts(item)
   -> string[]
```

Returns a list of the named boosts on the item.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### GetOwner

```lua
function ItemLib.GetOwner(item)
   -> Character?
```

Returns the current owner of the item.

The owner will be nil if the character who owned the item died.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### GetPartyTemplateCount

```lua
function ItemLib.GetPartyTemplateCount(template) -- (Client-only)
   -> number
```

Count the amount of template instances (prefix + guid) in the client party's inventory.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>template</b> <code>string</code></p>

##### GetRarityIcon

```lua
function ItemLib.GetRarityIcon(rarity)
   -> icon? -- Not all rarities have icons.
```

Returns the icon frame for a rarity, if any.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>rarity</b> <code>ItemLib_Rarity|EclItem</code></p>

##### GetRune

```lua
function ItemLib.GetRune(item, index)
   -> StatItem
```

 Gets the stats object of the rune inserted at rune index ``index`` on item.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>index</b> <code>integer</code> **0-based.**</p>

##### GetRuneSlots

```lua
function ItemLib.GetRuneSlots(item)
   -> integer
```

Returns the amount of rune slots an item has.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### GetRuneSlotsIcon

```lua
function ItemLib.GetRuneSlotsIcon(item)
   -> icon
```

Returns the icon displaying the state of item's rune slots.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### GetRunes

```lua
function ItemLib.GetRunes(item)
   -> table<number, StatItem> -- Empty slots are nil.
```

 Returns a list of runes on the item.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### GetUseAPCost

```lua
function ItemLib.GetUseAPCost(item)
   -> integer
```

Returns the base AP cost of using an item, independent of the character.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### GetUseActions

```lua
function ItemLib.GetUseActions(item, actionType)
   -> IActionData[]
```

Returns the use actions of an item, optionally filtered by type.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item|ItemTemplate</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>actionType</b> <code>ActionDataType</code></p>

##### HasFlag

```lua
function ItemLib.HasFlag(item, flag)
```

Returns whether the item has a flag.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>flag</b> <code>EclItemFlags|EsvItemFlags|EclItemFlags2|EsvItemFlags2</code></p>

##### HasRunes

```lua
function ItemLib.HasRunes(item)
   -> boolean
```

 Returns true if item has any runes slotted.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### HasUseAction

```lua
function ItemLib.HasUseAction(item, useActionID)
   -> boolean
```

Returns whether the item has a OnUsePeaceAction of the passed type.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>useActionID</b> <code>ActionDataType</code></p>

##### HasUseActions

```lua
function ItemLib.HasUseActions(item)
   -> boolean
```

Returns whether an item has any use actions.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### IsArtifact

```lua
function ItemLib.IsArtifact(item)
   -> boolean
```

Returns true if the item is an Artifact by checking the AMER_UNI tag.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### IsContainer

```lua
function ItemLib.IsContainer(item)
   -> boolean
```

Returns whether an item is a container.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### IsDagger

```lua
function ItemLib.IsDagger(item)
   -> boolean
```

Returns whether item is a dagger (satisfying a DaggerWeapon requirement)

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### IsDyeable

```lua
function ItemLib.IsDyeable(item)
   -> boolean
```

 Returns true for dyeable items (equipment, except rings/amulet/belt).

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### IsEquipment

```lua
function ItemLib.IsEquipment(item)
   -> boolean
```

 Returns true if the item is an armor piece or a weapon.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### IsEquipped

```lua
function ItemLib.IsEquipped(char, item)
   -> boolean
```

 Returns true if item is equipped by char. Assumes the item cannot be equipped into an unintended slot. Rings and weapons are checked for both slots.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### IsLegal

```lua
function ItemLib.IsLegal(item)
   -> boolean
```

Returns whether interacting with an item is legal.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### IsMarkedAsWares

```lua
function ItemLib.IsMarkedAsWares(item)
   -> boolean
```

Returns whether an item is marked as wares.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### IsMeleeWeapon

```lua
function ItemLib.IsMeleeWeapon(item)
   -> boolean
```

Returns whether item is a melee weapon (satisfying a MeleeWeapon requirement)

Returns true for None-type weaponry.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### IsRangedWeapon

```lua
function ItemLib.IsRangedWeapon(item)
   -> boolean
```

Returns whether item is a ranged weapon; bow or crossbow only!

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### IsRune

```lua
function ItemLib.IsRune(item)
   -> boolean
```

Returns whether the item is a rune.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### IsShield

```lua
function ItemLib.IsShield(item)
   -> boolean
```

Returns whether item is a shield (satisfying a ShieldWeapon requirement)

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### IsUnique

```lua
function ItemLib.IsUnique(item)
   -> boolean
```

Returns whether an item is of Unique rarity.

Returns `true` for Artifact items.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### IsWeapon

```lua
function ItemLib.IsWeapon(item)
   -> boolean
```

Returns true if the item is a weapon (shields don't count!)

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

##### SetIconOverride

```lua
function ItemLib.SetIconOverride(item, icon) -- (Client-only)
```

Sets a custom icon for an item.

Not persistent!

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>item</b> <code>Item</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>icon</b> <code>string</code></p>
</doc>
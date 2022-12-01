# Character
The `Character` library contains utility methods relating to characters. The vast majority of them are available on both contexts.

## Events

<doc class="CharacterLib" symbols="Listenable">

```lua
---Wrapper for Ext.Events.CreateEquipmentVisualsRequest.
---@hook CreateEquipmentVisuals
---@field Character EclCharacter
---@field Item EclItem
---@field Request EclEquipmentVisualSystemSetParam Hookable.
---@field RawEvent EclLuaCreateEquipmentVisualsRequestEvent

```
</doc>

## Methods

<doc class="CharacterLib" symbols="Function">

```lua
---Returns the current stacks on char, as well as lifetime. Queries the related status effects.
---@param char Character
---@param type StackType
---@return number,number Stack count, duration left (as seconds)
function Character.GetStacks(char, type) -- EE

---Returns whether char has a skill memorized. Returns true for innate skills.
---@param char Character
---@param skillID string
---@return boolean 
function Character.IsSkillMemorized(char, skillID)

---Returns the combat ID and team ID of char, if any.
---@param char Character
---@return integer?, integer? -- The combat ID and team ID. Nil if the character is not in combat. This is different from the osi query, which returns a reserved value.
function Character.GetCombatID(char)

---Returns whether char has their weapon(s) unsheathed.
---@param char Character
---@return boolean 
function Character.IsUnsheathed(char)

---Returns whether char has an owner.
---@param char Character
---@return boolean 
function Character.HasOwner(char)

---Returns the character's owner, if it is a summon or party follower(?).
---@param char Character
---@return Character? 
function Character.GetOwner(char)

---Returns whether a skill is innate to a character.
---Returns false if the character doesn't have the skill in any way.
---@param char Character
---@param skillID string
---@return boolean 
function Character.IsSkillInnate(char, skillID)

---@param char Character
---@return table<ItemSlot, EclItem>
function Character.GetEquippedItems(char)

---@param char Character
---@param statName string
function Character.GetDynamicStat(char, statName)

---Returns the maximum carry weight of char.
---@param char Character
---@return integer In "grams"
function Character.GetMaxCarryWeight(char)

---@param char Character
---@return integer, integer --Current, maximum
function Character.GetActionPoints(char)

---@param identifier GUID|PrefixedGUID|NetId|EntityHandle
---@param isFlashHandle boolean? If true, the identifier will be passed through DoubleToHandle() first.
---@return Character 
function Character.Get(identifier, isFlashHandle)

---@param char Character
---@return boolean 
function Character.IsPreferredByAI(char)

---Returns whether char is unpreferred by AI.
---@param char Character
---@return boolean 
function Character.IsUnpreferredByAI(char)

---Returns whether char is ignored by AI.
---@param char Character
---@return boolean 
function Character.IsIgnoredByAI(char)

---Get the infusion level that char is currently preparing (how many times they've cast Source Infuse).
---@param char Character
---@return number Infusion count.
function Character.GetPreparedInfusionLevel(char) -- EE

---Returns true if char is preparing a Source Infusion.
---@param char Character
---@return boolean 
function Character.IsPreparingInfusion(char) -- EE

---Get the stack amount this character needs to apply a T3 to someone else.
---**This only takes into account the bonus from infusing!**
---@param char Character
---@return number Stacks needed
function Character.GetStacksNeededToInflictTier3(char) -- EE

---Returns true if char is a summon.
---@param char Character
---@return boolean 
function Character.IsSummon(char)

---Returns true if the character is dead.
---@param char Character
---@return boolean 
function Character.IsDead(char)

---Returns the gender of char.
---@param char Character
---@return Gender 
function Character.GetGender(char)

---Returns true if char is male.
---@param char Character
---@return boolean 
function Character.IsMale(char)

---Returns true if char is undead.
---@param char Character
---@return boolean 
function Character.IsUndead(char)

---Returns the current race of char.
---@param char Character
---@return Race 
function Character.GetRace(char)

---Returns the original race of a player char, before any transforms.
---@param char Character Must be tagged with "REALLY_{Race}"
---@return Race 
function Character.GetRealRace(char)

---Returns whether the character is in a combat.
---@param char EclCharacter
---@return boolean 
function Character.IsInCombat(char)

---Returns the calculated movement stat of a character.
---@param char Character
---@return number -- In centimeters.
function Character.GetMovement(char)

---Returns whether char can enter preparation state for a skill.
---@param char Character
---@param skillID string
---@param itemSource Item?
---@return boolean 
function Character.CanUseSkill(char, skillID, itemSource)

---Returns whether char has a melee weapon equipped in either slot.
---@param char Character
---@return boolean 
function Character.HasMeleeWeapon(char)

---Returns whether char has a bow or crossbow equipped.
---@param char Character
---@return boolean 
function Character.HasRangedWeapon(char)

---Returns the current and maximum source points of char.
---@param char Character
---@return integer, integer Current and maximum points.
function Character.GetSourcePoints(char)

---Returns whether char has a shield equipped.
---@param char Character
---@return boolean 
function Character.HasShield(char)

---Returns whether char has a dagger equipped in either slot.
---@param char Character
---@return boolean 
function Character.HasDagger(char)

---Returns whether char is muted.
---@param char Character
---@return boolean 
function Character.IsMuted(char)

---Returns whether char is disarmed.
---@param char Character
---@return boolean 
function Character.IsDisarmed(char)

---Gets the highest stat score of all characters in char's party.
---@param char Character
---@param ability string Needs to be a property indexable in char.Stats
---@return integer 
function Character.GetHighestPartyAbility(char, ability)

---Returns a list of party members of char's party. Char must be a player.
---Depends on PlayerInfo.
---@param char EclCharacter
---@return EclCharacter[] Includes the char passed per param.
function Character.GetPartyMembers(char)

---Returns a list of statuses the character has from its equipped items.
---@param char Character
---@return CharacterLib_StatusFromItem[] 
function Character.GetStatusesFromItems(char)

---Returns a list of party members of char's party. Char must be a player.
---@param char EsvCharacter
---@return EsvCharacter[] Includes the char passed per param.
function Character.GetPartyMembers(char)

```
</doc>
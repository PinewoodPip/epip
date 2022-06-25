# Character

The `Game.Character` table contains functions for querying info of characters. Most functions expect you to pass `Character` as the first parameter (alias for `EclCharacter` and `EsvCharacter`).

## Functions

<epip class="GameCharacter" symbols="Function">

```lua
---Returns the current stacks on char, as well as lifetime. Queries the related status effects.
---@param char Character
---@param type StackType
---@return number,number Stack count, duration left (as seconds)
function Game.Character.GetStacks(char, type) --EE

---Get the infusion level that char is currently preparing (how many times they've cast Source Infuse).
---@param char Character
---@return number Infusion count.
function Game.Character.GetPreparedInfusionLevel(char) --EE

---Returns true if char is preparing a Source Infusion.
---@param char Character
---@return boolean 
function Game.Character.IsPreparingInfusion(char) --EE

---Get the stack amount this character needs to apply a T3 to someone else.
---**This only takes into account the bonus from infusing!**
---@param char Character
---@return number Stacks needed
function Game.Character.GetStacksNeededToInflictTier3(char) --EE

---Returns true if char is a summon.
---@param char Character
---@return boolean 
function Game.Character.IsSummon(char)

---Returns true if the character is dead.
---@param char Character
---@return boolean 
function Game.Character.IsDead(char)

---Returns the gender of char.
---@param char Character
---@return Gender 
function Game.Character.GetGender(char)

---Returns true if char is male.
---@param char Character
---@return boolean 
function Game.Character.IsMale(char)

---Returns the current race of char.
---@param char Character
---@return Race 
function Game.Character.GetRace(char)

---Returns the original race of a player char, before any transforms.
---@param char Character Must be tagged with "REALLY_{Race}"
---@return Race 
function Game.Character.GetRealRace(char)

---Returns whether the character is in a combat.
---@param char EclCharacter
---@return boolean 
function Game.Character.IsInCombat(char)

function Game.Character.GetMovement(char)

---Returns whether char can enter preparation state for a skill.
---@param char Character
---@param skillID string
---@return boolean 
function Game.Character.CanUseSkill(char, skillID)

---Returns whether char has a melee weapon equipped in either slot.
---@param char Character
---@return boolean 
function Game.Character.HasMeleeWeapon(char)

---Returns whether char has a bow or crossbow equipped.
---@param char Character
---@return boolean 
function Game.Character.HasRangedWeapon(char)

---Returns whether char has a shield equipped.
---@param char Character
---@return boolean 
function Game.Character.HasShield(char)

---Returns whether char has a dagger equipped in either slot.
---@param char Character
---@return boolean 
function Game.Character.HasDagger(char)

---Returns whether char is muted.
---@param char Character
---@return boolean 
function Game.Character.IsMuted(char)

---Returns whether char is disarmed.
---@param char Character
---@return boolean 
function Game.Character.IsDisarmed(char)

```
</epip>
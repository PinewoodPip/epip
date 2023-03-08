# Character
The `Character` library contains utility methods relating to characters. The vast majority of them are available on both contexts.

<doc package="CharacterLib">



## Events and Hooks

##### StatusApplied (event)

TODO move somewhere else, since victim could be an item



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>SourceHandle</b> <code>EntityHandle</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Victim</b> <code>Character|Item</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Status</b> <code>EclStatus|EsvStatus</code> </p>

##### CreateEquipmentVisuals (hook)

Wrapper for Ext.Events.CreateEquipmentVisualsRequest.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Character</b> <code>EclCharacter</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Item</b> <code>EclItem</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>Request</b> <code>EclEquipmentVisualSystemSetParam</code> Hookable.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@field</i></b></span> <b>RawEvent</b> <code>EclLuaCreateEquipmentVisualsRequestEvent</code> </p>



## Methods

#### IsSkillMemorized



```lua
function Character.IsSkillMemorized(char, skillID)
   -> boolean
```



Returns whether char has a skill memorized. Returns true for innate skills.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>skillID</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsSkillLearnt



```lua
function Character.IsSkillLearnt(char, skillID)
   -> boolean
```



Returns whether char has a skill learnt. Returns true for innate skills.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>skillID</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetCombatID



```lua
function Character.GetCombatID(char)
   -> integer?, integer? 
```



Returns the combat ID and team ID of char, if any.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer?, integer? </code> The combat ID and team ID. Nil if the character is not in combat. This is different from the osi query, which returns a reserved value.</p>

#### IsUnsheathed



```lua
function Character.IsUnsheathed(char)
   -> boolean
```



Returns whether char has their weapon(s) unsheathed.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsActive



```lua
function Character.IsActive(char)
   -> boolean
```



Returns whether char is currently the active character of any player.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### HasOwner



```lua
function Character.HasOwner(char)
   -> boolean
```



Returns whether char has an owner.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetOwner



```lua
function Character.GetOwner(char)
   -> Character?
```



Returns the character's owner, if it is a summon or party follower(?).



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Character?</code> </p>

#### IsSkillInnate



```lua
function Character.IsSkillInnate(char, skillID)
   -> boolean
```



Returns whether a skill is innate to a character.
Returns false if the character doesn't have the skill in any way.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>skillID</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### HasImmunity



```lua
function Character.HasImmunity(char, immunityName)
   -> boolean
```



Returns wether char has a certain immunity.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>immunityName</b> <code>StatsLib_ImmunityID</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetEquippedItems



```lua
function Character.GetEquippedItems(char)
   -> table<ItemSlot, EclItem>
```



Returns the equipped items of char, per slot.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>table<ItemSlot, EclItem></code> </p>

#### GetDynamicStat



```lua
function Character.GetDynamicStat(char, statName)
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>statName</b> <code>string</code> </p>

#### GetMaxCarryWeight



```lua
function Character.GetMaxCarryWeight(char)
   -> integer 
```



Returns the maximum carry weight of char.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer </code> In "grams"</p>

#### GetActionPoints



```lua
function Character.GetActionPoints(char)
   -> integer, integer 
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer, integer </code> Current, maximum</p>

#### GetInitiative



```lua
function Character.GetInitiative(char)
   -> integer
```



Returns the initiative of char.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer</code> </p>

#### GetResistance



```lua
function Character.GetResistance(char, damageType, baseValuesOnly)
   -> integer
```



Returns the computed resistance value of char.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>damageType</b> <code>StatsDamageType</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>baseValuesOnly</b> <code>boolean?</code> If `true`, base value will be returned. Defaults to `false`.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer</code> </p>

#### Get



```lua
function Character.Get(identifier, isFlashHandle)
   -> Character
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>identifier</b> <code>GUID|PrefixedGUID|NetId|EntityHandle</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>isFlashHandle</b> <code>boolean?</code> If true, the identifier will be passed through DoubleToHandle() first.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Character</code> </p>

#### IsPreferredByAI



```lua
function Character.IsPreferredByAI(char)
   -> boolean
```







<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsUnpreferredByAI



```lua
function Character.IsUnpreferredByAI(char)
   -> boolean
```



Returns whether char is unpreferred by AI.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsIgnoredByAI



```lua
function Character.IsIgnoredByAI(char)
   -> boolean
```



Returns whether char is ignored by AI.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsSummon



```lua
function Character.IsSummon(char)
   -> boolean
```



Returns true if char is a summon.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsDead



```lua
function Character.IsDead(char)
   -> boolean
```



Returns true if the character is dead.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetStatusByHandle



```lua
function Character.GetStatusByHandle(char, handle)
   -> EclStatus|EsvStatus
```



Returns a status by handle.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>handle</b> <code>EntityHandle</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>EclStatus|EsvStatus</code> </p>

#### GetGender



```lua
function Character.GetGender(char)
   -> Gender
```



Returns the gender of char.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Gender</code> </p>

#### IsMale



```lua
function Character.IsMale(char)
   -> boolean
```



Returns true if char is male.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsUndead



```lua
function Character.IsUndead(char)
   -> boolean
```



Returns true if char is undead.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetRace



```lua
function Character.GetRace(char)
   -> Race
```



Returns the current race of char.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Race</code> </p>

#### GetRealRace



```lua
function Character.GetRealRace(char)
   -> Race
```



Returns the original race of a player char, before any transforms.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> Must be tagged with "REALLY_{Race}"</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>Race</code> </p>

#### IsInCombat



```lua
function Character.IsInCombat(char)
   -> boolean
```



Returns whether the character is in a combat.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>EclCharacter</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetMovement



```lua
function Character.GetMovement(char)
   -> number 
```



Returns the calculated movement stat of a character.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>number </code> In centimeters.</p>

#### CanUseSkill



```lua
function Character.CanUseSkill(char, skillID, itemSource)
   -> boolean
```



Returns whether char can enter preparation state for a skill.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>skillID</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>itemSource</b> <code>Item?</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### HasMeleeWeapon



```lua
function Character.HasMeleeWeapon(char)
   -> boolean
```



Returns whether char has a melee weapon equipped in either slot.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### HasRangedWeapon



```lua
function Character.HasRangedWeapon(char)
   -> boolean
```



Returns whether char has a bow or crossbow equipped.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetSourcePoints



```lua
function Character.GetSourcePoints(char)
   -> integer, integer 
```



Returns the current and maximum source points of char.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer, integer </code> Current and maximum points.</p>

#### HasShield



```lua
function Character.HasShield(char)
   -> boolean
```



Returns whether char has a shield equipped.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### HasDagger



```lua
function Character.HasDagger(char)
   -> boolean
```



Returns whether char has a dagger equipped in either slot.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsMuted



```lua
function Character.IsMuted(char)
   -> boolean
```



Returns whether char is muted.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### IsDisarmed



```lua
function Character.IsDisarmed(char)
   -> boolean
```



Returns whether char is disarmed.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetHighestPartyAbility



```lua
function Character.GetHighestPartyAbility(char, ability)
   -> integer
```



Gets the highest stat score of all characters in char's party.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>ability</b> <code>string</code> Needs to be a property indexable in char.Stats</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer</code> </p>

#### GetLevel



```lua
function Character.GetLevel(char)
   -> integer
```



Returns the level of char.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer</code> </p>

#### GetExperience



```lua
function Character.GetExperience(char)
   -> integer
```



Returns the current experience points of char.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer</code> </p>

#### GetExperienceRequiredForLevel



```lua
function Character.GetExperienceRequiredForLevel(targetLevel)
   -> integer 
```



Returns the **cumulative** experience required to reach a level.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>targetLevel</b> <code>integer</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>integer </code> Experience points.</p>

#### GetSkillBarRowContents



```lua
function Character.GetSkillBarRowContents(char, row, slotsPerRow)
   -> EocSkillBarItem[]
```



Returns the contents of a character's skillbar row.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> Must be a player.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>row</b> <code>integer</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>slotsPerRow</b> <code>integer?</code> Defaults to 29.</p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>EocSkillBarItem[]</code> </p>

#### GetStatusByNetID



```lua
function Character.GetStatusByNetID(char, netID)
   -> EclStatus|EsvStatus
```



Returns a status on char by its net ID.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>netID</b> <code>NetId</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>EclStatus|EsvStatus</code> </p>

#### GetPartyMembers



```lua
function Character.GetPartyMembers(char)
   -> EclCharacter[] Includes the char passed per param.
```



Returns a list of party members of char's party. Char must be a player.
Depends on PlayerInfo.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>EclCharacter</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>EclCharacter[] Includes the char passed per param.</code> </p>

#### GetStatusesFromItems



```lua
function Character.GetStatusesFromItems(char)
   -> CharacterLib_StatusFromItem[]
```



Returns a list of statuses the character has from its equipped items.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>CharacterLib_StatusFromItem[]</code> </p>

#### GetPartyMembers



```lua
function Character.GetPartyMembers(char)
   -> EsvCharacter[] Includes the char passed per param.
```



Returns a list of party members of char's party. Char must be a player.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>EsvCharacter</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>EsvCharacter[] Includes the char passed per param.</code> </p>
</doc>
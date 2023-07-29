# Character
The `Character` library contains utility methods relating to characters. The vast majority of them are available on both contexts.

<doc class="CharacterLib">

# CharacterLib Class

Inherits from <code>Library</code>.

## Events and Hooks

#### StatusApplied (event)

TODO move somewhere else, since victim could be an item

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>SourceHandle</b> <code>EntityHandle</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Victim</b> <code>Character|Item</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Status</b> <code>EclStatus|EsvStatus</code></p>

#### ItemEquipped (event)

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Character</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Item</b> <code>Item</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Slot</b> <code>ItemSlot</code></p>

#### CreateEquipmentVisuals (hook)

Wrapper for Ext.Events.CreateEquipmentVisualsRequest.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Character</b> <code>EclCharacter</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Item</b> <code>EclItem</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Request</b> <code>EclEquipmentVisualSystemSetParam</code> Hookable.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>RawEvent</b> <code>EclLuaCreateEquipmentVisualsRequestEvent</code></p>

## Methods

##### CanUseSkill

```lua
function CharacterLib.CanUseSkill(char, skillID, itemSource)
   -> boolean
```

Returns whether char can enter preparation state for a skill.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>skillID</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>itemSource</b> <code>Item?</code></p>

##### Get

```lua
function CharacterLib.Get(identifier, isFlashHandle)
   -> Character
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>identifier</b> <code>GUID|PrefixedGUID|NetId|EntityHandle</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>isFlashHandle</b> <code>boolean?</code> If true, the identifier will be passed through DoubleToHandle() first.</p>

##### GetActionPoints

```lua
function CharacterLib.GetActionPoints(char)
   -> integer, integer -- Current, maximum
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### GetCombatID

```lua
function CharacterLib.GetCombatID(char)
   -> integer?, integer? -- The combat ID and team ID. `nil` if the character is not in combat. This is different from the osi query, which returns a reserved value.
```

Returns the combat ID and team ID of char, if any.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### GetCurrentSkill

```lua
function CharacterLib.GetCurrentSkill(char)
   -> string? -- `nil` if the character has no active skill state.
```

Returns the ID of the skill that char is preparing or casting.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### GetDynamicStat

```lua
function CharacterLib.GetDynamicStat(char, statName)
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>statName</b> <code>string</code></p>

##### GetEquippedItems

```lua
function CharacterLib.GetEquippedItems(char)
   -> table<ItemSlot, EclItem>
```

Returns the equipped items of char, per slot.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### GetExperience

```lua
function CharacterLib.GetExperience(char)
   -> integer
```

Returns the current experience points of char.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### GetExperienceRequiredForLevel

```lua
function CharacterLib.GetExperienceRequiredForLevel(targetLevel)
   -> integer -- Experience points.
```

Returns the **cumulative** experience required to reach a level.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>targetLevel</b> <code>integer</code></p>

##### GetGender

```lua
function CharacterLib.GetGender(char)
   -> Gender
```

Returns the gender of char.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### GetHighestPartyAbility

```lua
function CharacterLib.GetHighestPartyAbility(char, ability)
   -> integer
```

Gets the highest stat score of all characters in char's party.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>ability</b> <code>string</code> Needs to be a property indexable in char.Stats</p>

##### GetInitiative

```lua
function CharacterLib.GetInitiative(char)
   -> integer
```

Returns the initiative of char.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### GetLevel

```lua
function CharacterLib.GetLevel(char)
   -> integer
```

Returns the level of char.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### GetMaxCarryWeight

```lua
function CharacterLib.GetMaxCarryWeight(char)
   -> integer -- In "grams"
```

Returns the maximum carry weight of char.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### GetMovement

```lua
function CharacterLib.GetMovement(char)
   -> number -- In centimeters.
```

Returns the calculated movement stat of a character.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### GetOwner

```lua
function CharacterLib.GetOwner(char)
   -> Character?
```

Returns the character's owner, if it is a summon or party follower(?).

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### GetPartyMembers

```lua
function CharacterLib.GetPartyMembers(char) -- (Server-only)
   -> EsvCharacter[] Includes the char passed per param.-- the char passed per param.
```

Returns a list of party members of char's party. Char must be a player.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>EsvCharacter</code></p>

##### GetPartyMembers

```lua
function CharacterLib.GetPartyMembers(char) -- (Client-only)
   -> EclCharacter[] Includes the char passed per param.-- the char passed per param.
```

Returns a list of party members of char's party. Char must be a player.

Depends on PlayerInfo.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>EclCharacter</code></p>

##### GetRace

```lua
function CharacterLib.GetRace(char)
   -> Race
```

Returns the current race of char.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### GetRealRace

```lua
function CharacterLib.GetRealRace(char)
   -> Race
```

Returns the original race of a player char, before any transforms.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> Must be tagged with "REALLY_{Race}"</p>

##### GetResistance

```lua
function CharacterLib.GetResistance(char, damageType, baseValuesOnly)
   -> integer
```

Returns the computed resistance value of char.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>damageType</b> <code>DamageType</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>baseValuesOnly</b> <code>boolean?</code> If `true`, base value will be returned. Defaults to `false`.</p>

##### GetSkillBarRowContents

```lua
function CharacterLib.GetSkillBarRowContents(char, row, slotsPerRow)
   -> EocSkillBarItem[]
```

Returns the contents of a character's skillbar row.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code> Must be a player.</p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>row</b> <code>integer</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>slotsPerRow</b> <code>integer?</code> Defaults to 29.</p>

##### GetSkillState

```lua
function CharacterLib.GetSkillState(char)
   -> (EclSkillState|EsvSkillState)?
```

Returns the current skill state of char.

**On the server, this can only return the state while using the skill. Preparation state cannot be accessed.**

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### GetSourcePoints

```lua
function CharacterLib.GetSourcePoints(char)
   -> integer, integer -- Current and maximum points.
```

Returns the current and maximum source points of char.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### GetStatusByHandle

```lua
function CharacterLib.GetStatusByHandle(char, handle)
   -> EclStatus|EsvStatus
```

Returns a status by handle.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>handle</b> <code>EntityHandle</code></p>

##### GetStatusByNetID

```lua
function CharacterLib.GetStatusByNetID(char, netID)
   -> EclStatus|EsvStatus
```

Returns a status on char by its net ID.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>netID</b> <code>NetId</code></p>

##### GetStatusesFromItems

```lua
function CharacterLib.GetStatusesFromItems(char) -- (Client-only)
   -> CharacterLib_StatusFromItem[]
```

Returns a list of statuses the character has from its equipped items.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### HasDagger

```lua
function CharacterLib.HasDagger(char)
   -> boolean
```

Returns whether char has a dagger equipped in either slot.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### HasImmunity

```lua
function CharacterLib.HasImmunity(char, immunityName)
   -> boolean
```

Returns wether char has a certain immunity.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>immunityName</b> <code>StatsLib_ImmunityID</code></p>

##### HasMeleeWeapon

```lua
function CharacterLib.HasMeleeWeapon(char)
   -> boolean
```

Returns whether char has a melee weapon equipped in either slot.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### HasOwner

```lua
function CharacterLib.HasOwner(char)
   -> boolean
```

Returns whether char has an owner.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### HasRangedWeapon

```lua
function CharacterLib.HasRangedWeapon(char)
   -> boolean
```

Returns whether char has a bow or crossbow equipped.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### HasShield

```lua
function CharacterLib.HasShield(char)
   -> boolean
```

Returns whether char has a shield equipped.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsActive

```lua
function CharacterLib.IsActive()
   -> boolean
```

Returns whether char is currently the active character of any player.

##### IsCastingSkill

```lua
function CharacterLib.IsCastingSkill(char)
   -> boolean
```

Returns whether char is casting a skill.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsDead

```lua
function CharacterLib.IsDead(char)
   -> boolean
```

Returns true if the character is dead.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsDisarmed

```lua
function CharacterLib.IsDisarmed(char)
   -> boolean
```

Returns whether char is disarmed.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsIgnoredByAI

```lua
function CharacterLib.IsIgnoredByAI(char)
   -> boolean
```

Returns whether char is ignored by AI.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsInCombat

```lua
function CharacterLib.IsInCombat(char)
   -> boolean
```

Returns whether the character is in a combat.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsInStealth

```lua
function CharacterLib.IsInStealth(char)
   -> boolean
```

Returns whether char is sneaking or invisible.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsInvisible

```lua
function CharacterLib.IsInvisible(char)
   -> boolean
```

Returns whether char is invisible - as in, has the INVISIBLE status.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsMale

```lua
function CharacterLib.IsMale(char)
   -> boolean
```

Returns true if char is male.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsMuted

```lua
function CharacterLib.IsMuted(char)
   -> boolean
```

Returns whether char is muted.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsOrigin

```lua
function CharacterLib.IsOrigin(char)
   -> boolean
```

Returns whether char is a non-generic origin.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsPlayer

```lua
function CharacterLib.IsPlayer(char)
   -> boolean
```

Returns whether char is a player.

A player is any character that is controllable by the users,

including summons and party followers.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsPreferredByAI

```lua
function CharacterLib.IsPreferredByAI(char)
   -> boolean
```

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsPreparingSkill

```lua
function CharacterLib.IsPreparingSkill(char)
   -> boolean
```

Returns whether char is preparing a skill.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsSkillInnate

```lua
function CharacterLib.IsSkillInnate(char, skillID)
   -> boolean
```

Returns whether a skill is innate to a character.

Returns false if the character doesn't have the skill in any way.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>skillID</b> <code>string</code></p>

##### IsSkillLearnt

```lua
function CharacterLib.IsSkillLearnt(char, skillID)
   -> boolean
```

Returns whether char has a skill learnt. Returns true for innate skills.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>skillID</b> <code>string</code></p>

##### IsSkillMemorized

```lua
function CharacterLib.IsSkillMemorized(char, skillID)
   -> boolean
```

Returns whether char has a skill memorized. Returns true for innate skills.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>skillID</b> <code>string</code></p>

##### IsSneaking

```lua
function CharacterLib.IsSneaking(char)
   -> boolean
```

Returns whether char is sneaking.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsSummon

```lua
function CharacterLib.IsSummon(char)
   -> boolean
```

Returns true if char is a summon.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsUndead

```lua
function CharacterLib.IsUndead(char)
   -> boolean
```

Returns true if char is undead.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsUnpreferredByAI

```lua
function CharacterLib.IsUnpreferredByAI(char)
   -> boolean
```

Returns whether char is unpreferred by AI.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>

##### IsUnsheathed

```lua
function CharacterLib.IsUnsheathed(char)
   -> boolean
```

Returns whether char has their weapon(s) unsheathed.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>Character</code></p>
</doc>
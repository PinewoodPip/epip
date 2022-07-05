## Epic Enemies

Epic Enemies is a randomizer feature that gives enemies in combat random keyword effects, artifacts and other boons. It is accessed from its own settings tab in the settings menu.

### Creating Effects
An *Effect* is a perk that an enemy can roll if Epic Enemies is enabled. Effects can belong to a category; each category gets their own settings sliders for all its effects in the UI.

If you wish to add effects, you should register your own category for them with `RegisterEffectCategory()`. You may define the effects while defining the category (of type `EpicEnemiesEffect`), and they will be automatically registered as well. Registering effects directly with `RegisterEffect()` does not bind them to any category by default, meaning they will not appear in the UI and will not be customizable - this is great if you wish to create auxiliary effects with 0 weight and script their applications yourself.

Effects can be rolled on a character with `InitializeCharacter()`. By default, this happens when they enter combat, and numerous characters are excluded: players, summons, and already initialized characters. You may tag characters with `PIP_EpicEnemies_Ineligible` to exclude them as well.

Effects from a character can be removed with `CleanupCharacter()`; this will cause their stat boosts, Special Logic, and other perks from their effects to be cleaned up as well. By default, this only happens when lua is reset (for debugging).

When `InitializeCharacter()` is called, effects are rolled randomly based on their weight and *eligibility*. You may hook `IsEffectApplicable` to control which effects a character can receive. The `EpicEnemiesEffectTemplates` feature script does so to prevent keyword mutators from being granted to characters that do not possess an activator effect.

The `EpicEnemiesEffectTemplates` feature script also implements multiple types of effects that power generic functionality:

- SpecialLogic
- Artifacts
- Summons
- Statuses
- ExtendedStats
- FlexStats
- RequiredSkills

This is done by extending the the `EpicEnemiesEffect` class into `EpicEnemiesExtendedEffect` - you need only to add its extra fields to your effect definitions, and the event listeners from that script will take care of making them work.

Of course, you may also add functionality yourself the same way, as detailed in the next section.

### Scripting Effects

Effects can be in 2 states: applied and activated. "Applied" means the character has the effect, but its benefits are dormant and not yet active. "Activated" effects grant their benefits (stats, Special Logic, etc.).

The condition for effects is based on the `ActivationCondition` field. If unspecified, it defaults to the "EffectApplied" type, which causes the effect to be activated as soon as it is applied (during initialization). If you specify a custom `ActivationCondition`, you will have to activate the effect's perks manually.

The `EpicEnemiesEffectConditions` feature script implements some custom ActivationConditions:

- `TurnStart`: effect activates at the start of X turn, optionally repeating (effects support multiple activations).
- `HealthThreshold`: effect activates when beneath a Vitality/Armor threshold.
- `BatteredHarried`: effect activates upon reaching X B/H.
- `StatusGained`: effect activates upon gaining a certain status.

Activation attempts are done through the `ActivateEffects()` call, which takes an ActivationCondition type (the string ID) as well as some params (for example, activation attemps of `BatteredHarried` pass the B/H stack count). This call in turn invokes the `CanActivateEffect` hook where scripts must judge if the parameters of the activation attempt are correct to activate each of the effects with that ActivationCondition.

Example of how `TurnStart` works:

1. A `PROC_AMER_Combat_TurnStarted` listener calls `ActivateEffects(char, "TurnStart", {Round = round})`
2. The EpicEnemies main script invokes the `CanActivateEffect` hook for each effect with the corresponding ActivationCondition type, as well as the params from the `ActivateEffects()` call.
3. A listener of said hook checks if the activation condition type is "TurnStart", and if it is, returns a boolean indicating if the params received match the conditions defined in the effect.

For example, the following effect activates on turn 2, meaning the enemy only becomes hasted on turn 2, since the listeners that manage the `TurnStart` activation condition compare `Round` and `Repeat` with the parameters from the activation attempt. The effect is however always visible in the tooltip, along with its activation condition, so players can plan around it.

```lua
{
    Name = "TurnStart Activation Test",
    ID = "TestStatus2",
    Description = "Hasted on turn 2.",
    Status = {
        StatusID = "HASTED",
        Duration = 2,
    },
    ActivationCondition = {
        Type = "TurnStart",
        Round = 2,
        Repeat = false,
    },
},
```

### Events/Hooks

<epip class="EpicEnemies" symbols="Event,Hook">

```lua
---@hook GetActivationConditionDescription
---@field RegisterHook fun(self, handler:fun(text:string, condition:EpicEnemiesActivationCondition, char:EclCharacter))
---@field Return fun(self, text:string, condition:EpicEnemiesActivationCondition, char:EclCharacter)


---@event EffectApplied
---@field RegisterListener fun(self, listener:fun(char:EsvCharacter, effect:EpicEnemiesEffect))
---@field Fire fun(self, char:EsvCharacter, effect:EpicEnemiesEffect)


---@event EffectRemoved
---@field RegisterListener fun(self, listener:fun(char:EsvCharacter, effect:EpicEnemiesEffect))
---@field Fire fun(self, char:EsvCharacter, effect:EpicEnemiesEffect)


---@hook IsEligible
---@field RegisterHook fun(self, handler:fun(eligible:boolean, char:EsvCharacter))
---@field Return fun(self, eligible:boolean, char:EsvCharacter)


---@hook IsEffectApplicable
---@field RegisterHook fun(self, handler:fun(applicable:boolean, effect:EpicEnemiesEffect, char:EsvCharacter, activeEffects:EpicEnemiesEffect[]))
---@field Return fun(self, applicable:boolean, effect:EpicEnemiesEffect, char:EsvCharacter, activeEffects:EpicEnemiesEffect[])


---@event EffectActivated
---@field RegisterListener fun(self, listener:fun(char:EsvCharacter, effect:EpicEnemiesEffect))
---@field Fire fun(self, char:EsvCharacter, effect:EpicEnemiesEffect)


---@event EffectDeactivated
---@field RegisterListener fun(self, listener:fun(char:EsvCharacter, effect:EpicEnemiesEffect))
---@field Fire fun(self, char:EsvCharacter, effect:EpicEnemiesEffect)


---@hook CanActivateEffect
---@field RegisterHook fun(self, handler:fun(activate:boolean, char:EsvCharacter, effect:EpicEnemiesEffect, params:any))
---@field Return fun(self, activate:boolean, char:EsvCharacter, effect:EpicEnemiesEffect, params:any)


---@hook GetPointsForCharacter
---@field RegisterHook fun(self, handler:fun(points:integer, char:EsvCharacter))
---@field Return fun(self, points:integer, char:EsvCharacter)


---@event CharacterInitialized
---@field RegisterListener fun(self, listener:fun(char:EsvCharacter, effects:EpicEnemiesEffect[]))
---@field Fire fun(self, char:EsvCharacter, effects:EpicEnemiesEffect[])


---@event CharacterCleanedUp
---@field RegisterListener fun(self, listener:fun(char:EsvCharacter))
---@field Fire fun(self, char:EsvCharacter)


```
</epip>

### Methods

<epip class="EpicEnemies" symbols="Function">

```lua
function EpicEnemies.IsInitialized(char)

---@param char EsvCharacter
function EpicEnemies.InitializeCharacter(char)

---Remove all effects from a character.
---@param char EsvCharacter
function EpicEnemies.CleanupCharacter(char)

---Returns true if the character is eligible to receive Epic Enemies effects.
---@param char EsvCharacter
function EpicEnemies.IsEligible(char)

---@param char EsvCharacter
---@param effect EpicEnemiesEffect
function EpicEnemies.ApplyEffect(char, effect)

---@param char EsvCharacter
---@param effect EpicEnemiesEffect
function EpicEnemies.ActivateEffect(char, effect)

---@param char EsvCharacter
---@param predicate fun(char:EsvCharacter, effect:EpicEnemiesEffect)?
---@return table<string, EpicEnemiesEffect>
function EpicEnemies.GetAppliedEffects(char, predicate)

---@param char EsvCharacter
---@param effect EpicEnemiesCharacter
---@return boolean 
function EpicEnemies.EffectIsActive(char, effect)

---@param char EsvCharacter
---@param effect EpicEnemiesCharacter
---@return integer 
function EpicEnemies.GetEffectActivationCount(char, effect)

---@param char EsvCharacter
---@param effectType string
---@param params table?
function EpicEnemies.ActivateEffects(char, effectType, params)

---@param char EsvCharacter
---@param effect EpicEnemiesEffect
---@param charges integer? Defaults to 1.
function EpicEnemies.DeactivateEffect(char, effect, charges)

---Remove an effect from a character.
---@param char EsvCharacter
---@param effectID string
function EpicEnemies.RemoveEffect(char, effectID)

---@param char EsvCharacter
---@param effectPool table<string, EpicEnemiesEffect>
---@param activeEffects? EpicEnemiesEffect[]
function EpicEnemies.GetRandomEffect(char, effectPool, activeEffects)

---@param char EsvCharacter
function EpicEnemies.GetPointsForCharacter(char)

---Get the cost of an effect.
function _EpicEnemiesEffect:GetCost()

function _EpicEnemiesEffect:GetWeight()

---@param char Character|GUID
function EpicEnemies.IsInitialized(char)

---@param id string
---@return EpicEnemiesEffect 
function EpicEnemies.GetEffectData(id)

---@param category EpicEnemiesEffectsCategory
function EpicEnemies.RegisterEffectCategory(category)

---@param id string
---@param effect EpicEnemiesEffect
function EpicEnemies.RegisterEffect(id, effect)

---@param effect EpicEnemiesEffect
function EpicEnemies.GenerateOptionData(effect)

```
</epip>

## Objects

<epip class="EpicEnemies" symbols="Class">

```lua
---@class EpicEnemiesActivationCondition
---@field Type string
---@field MaxActivations integer


---@class EpicEnemiesEffect
---@field ID string
---@field Name string
---@field Description string
---@field Cost integer
---@field Weight integer
---@field DefaultWeight integer
---@field DefaultCost integer
---@field ActivationCondition EpicEnemiesActivationCondition
---@field Category string?
---@field Visible boolean? Whether this effect appears in tooltips. Defaults to true.


---@class EpicEnemiesKeywordData
---@field Keyword Keyword
---@field BoonType KeywordBoonType


---@class EpicEnemiesEffectsCategory
---@field Name string
---@field ID string
---@field Effects string[]|EpicEnemiesEffect[] Can be an array of EpicEnemiesEffect while calling the register method. Will be turned into an ID array afterwards.


```
</epip>

The scripts that implement the basic effect functionality define the following objects:

<epip class="EpicEnemiesEffectTemplates" symbols="Class">

```lua
---@class EpicEnemiesExtendedEffect : EpicEnemiesEffect
---@field SpecialLogic? string Special logic to grant when the effect is rolled.
---@field Artifact? string Artifact power to grant when the effect is rolled.
---@field Keyword? EpicEnemiesKeywordData Used for activation conditions; certain keyword mutators will not be granted if the target has no activators of the keyword.
---@field Summon? GUID Template to summon.
---@field Status? EpicEnemiesStatus[]
---@field ExtendedStats? EpicEnemiesExtendedStat[]
---@field FlexStats? EpicEnemiesFlexStat[]
---@field RequiredSkills? string[] The effect is ineligible if the character does not have any of the required skills.


---@class EpicEnemiesStatus
---@field StatusID string
---@field Duration integer


---@class EpicEnemiesFlexStat
---@field Type string
---@field Stat string
---@field Amount number


---@class EpicEnemiesExtendedStat
---@field StatID string The ID of the ExtendedStat.
---@field Amount number
---@field Property1 string?
---@field Property2 string?
---@field Property3 string?


```
</epip>

<epip class="EpicEnemiesEffectConditions" symbols="Class">

```lua
---@class EpicEnemiesCondition_TurnStart : EpicEnemiesActivationCondition
---@field Round integer Which round to activate the effect on.
---@field Repeat boolean Whether to re-activate the effect on subsequent rounds as well.
---@field RepeatFrequency uint64? How many turns must pass between re-activations if Repeat is true. Defaults to 1.


---@class EpicEnemiesCondition_HealthThreshold : EpicEnemiesActivationCondition
---@field Vitality number From 0-1. Use 0 to ignore this health metric.
---@field PhysicalArmor number From 0-1. Use 0 to ignore this health metric.
---@field MagicArmor number From 0-1. Use 0 to ignore this health metric.
---@field RequireAll boolean If true, all thresholds must be met for the activation.


---@class EpicEnemiesCondition_BatteredHarried : EpicEnemiesActivationCondition
---@field StackType StackType
---@field Amount integer


---@class EpicEnemiesCondition_StatusGained : EpicEnemiesActivationCondition
---@field StatusID string


```
</epip>
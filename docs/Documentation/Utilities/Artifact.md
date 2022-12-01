# Artifact

!!! info "This library is relevant for Epic Encounters only."

The `Artifact` library contains data and methods related to [Epic Encounters Artifacts](https://docs.google.com/document/d/1aKyZLz4ix9FYj0enKIfRv4r5IKL7cjdLlP1mcJ3Ifc0/edit).

The `ArtifactLib_ArtifactDefiniton` class holds information for each of the artifacts, including slot, item/rune templates, as well as the related keyword activators and mutators (defined manually).

The data is not generated automatically. You must add your own artifacts by calling `RegisterArtifact()` with the data table filled out. Ideally, this should be done on both contexts, so client scripting can also query the information.

## Classes

<doc class="ArtifactLib" symbols="_SubClasses">

```lua
---@class ArtifactLib_ArtifactDefinition
---@field ID string
---@field Slot StatsItemSlot
---@field ItemTemplate GUID
---@field RuneTemplate GUID
---@field DescriptionHandle TranslatedStringHandle
---@field KeywordActivators Keyword[]
---@field KeywordMutators Keyword[]
---@field GetName fun(self):string
---@field GetDescription fun(self):string
---@field GetPowerTooltip fun(self):TooltipElement[]

---Returns the artifact's name.
---@return string 
function _ArtifactDef:GetName()

---Returns the artifact power's description.
---@return string 
function _ArtifactDef:GetDescription()

---Returns a full tooltip showing the artifact's name and power.
---@return string 
function _ArtifactDef:GetPowerTooltip()

```
</doc>

## Methods

<doc class="ArtifactLib" symbols="Function">

```lua
---Returns the definition for an artifact.
---@param artifactID string
---@return ArtifactLib_ArtifactDefinition? 
function Artifact.GetData(artifactID)

---Registers the data for an artifact.
---@param data ArtifactLib_ArtifactDefinition
---@return ArtifactLib_ArtifactDefinition 
function Artifact.RegisterArtifact(data)

---Returns whether char has the artifact power active.
---@param char EclCharacter
---@param artifact ArtifactLib_ArtifactDefinition|string
---@return boolean 
function Artifact.IsEquipped(char, artifact)

---Returns a list of artifact powers active on char.
---@param char EclCharacter
---@return ArtifactLib_ArtifactDefinition[] 
function Artifact.GetEquippedPowers(char)

---Returns whether char has the artifact power active.
---@param char EsvCharacter
---@param artifact ArtifactLib_ArtifactDefinition|string
---@return boolean 
function Artifact.IsEquipped(char, artifact)

---Returns a list of artifact powers active on char.
---@param char EsvCharacter
---@return ArtifactLib_ArtifactDefinition[] 
function Artifact.GetEquippedPowers(char)

```
</doc>

## Usage examples

This library is used in the Quick Examine UI to display tooltips for artifacts. It is additionally used in the stats tab to check the equipped artifacts of a character.
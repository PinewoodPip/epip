# Artifact

!!! info "This library is relevant for Epic Encounters only."

The `Artifact` library contains data and methods related to [Epic Encounters Artifacts](https://docs.google.com/document/d/1aKyZLz4ix9FYj0enKIfRv4r5IKL7cjdLlP1mcJ3Ifc0/edit).

The `ArtifactLib_ArtifactDefinition` class holds information for each of the artifacts, including slot, item/rune templates, as well as the related keyword activators and mutators (defined manually).

The data is not generated automatically. You must add your own artifacts by calling `RegisterArtifact()` with the data table filled out. Ideally, this should be done on both contexts, so client scripting can also query the information.

<doc classWithFields="ArtifactLib_ArtifactDefinition">

# ArtifactLib_ArtifactDefinition Class

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>ID</b> <code>string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>Slot</b> <code>ItemSlot</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>ItemTemplate</b> <code>GUID</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>RuneTemplate</b> <code>GUID</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>DescriptionHandle</b> <code>TranslatedStringHandle</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>KeywordActivators</b> <code>Keyword[]</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>KeywordMutators</b> <code>Keyword[]</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>GetName</b> <code>fun(self):string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>GetDescription</b> <code>fun(self):string</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@field</i></b></span> <b>GetPowerTooltip</b> <code>fun(self):TooltipLib_Element[]</code></p>

## Methods
</doc>

<doc class="ArtifactLib">

# ArtifactLib Class

## Methods

##### GetData

```lua
function ArtifactLib.GetData(artifactID)
   -> ArtifactLib_ArtifactDefinition?
```

Returns the definition for an artifact.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>artifactID</b> <code>string</code></p>

##### GetEquippedPowers

```lua
function ArtifactLib.GetEquippedPowers(char) -- (Client-only)
   -> ArtifactLib_ArtifactDefinition[]
```

Returns a list of artifact powers active on char.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>EclCharacter</code></p>

##### GetEquippedPowers

```lua
function ArtifactLib.GetEquippedPowers(char) -- (Server-only)
   -> ArtifactLib_ArtifactDefinition[]
```

Returns a list of artifact powers active on char.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>EsvCharacter</code></p>

##### IsEquipped

```lua
function ArtifactLib.IsEquipped(char, artifact) -- (Server-only)
   -> boolean
```

Returns whether char has the artifact power active.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>EsvCharacter</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>artifact</b> <code>ArtifactLib_ArtifactDefinition|string</code></p>

##### IsEquipped

```lua
function ArtifactLib.IsEquipped(char, artifact) -- (Client-only)
   -> boolean
```

Returns whether char has the artifact power active.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>char</b> <code>EclCharacter</code></p>

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>artifact</b> <code>ArtifactLib_ArtifactDefinition|string</code></p>

##### RegisterArtifact

```lua
function ArtifactLib.RegisterArtifact(data)
   -> ArtifactLib_ArtifactDefinition
```

Registers the data for an artifact.

<p style="margin-bottom:0px;"><span style="color:#B04A6E;"><b><i>@param</i></b></span> <b>data</b> <code>ArtifactLib_ArtifactDefinition</code></p>
</doc>

## Usage examples

This library is used in the Quick Examine UI to display tooltips for artifacts. It is additionally used in the stats tab to check the equipped artifacts of a character.
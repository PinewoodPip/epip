# Artifact

!!! info "This library is relevant for Epic Encounters only."

The `Artifact` library contains data and methods related to [Epic Encounters Artifacts](https://docs.google.com/document/d/1aKyZLz4ix9FYj0enKIfRv4r5IKL7cjdLlP1mcJ3Ifc0/edit).

The `ArtifactLib_ArtifactDefiniton` class holds information for each of the artifacts, including slot, item/rune templates, as well as the related keyword activators and mutators (defined manually).

The data is not generated automatically. You must add your own artifacts by calling `RegisterArtifact()` with the data table filled out. Ideally, this should be done on both contexts, so client scripting can also query the information.

<doc package="ArtifactLib">



## Methods

#### GetData



```lua
function Artifact.GetData(artifactID)
   -> ArtifactLib_ArtifactDefinition?
```



Returns the definition for an artifact.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>artifactID</b> <code>string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>ArtifactLib_ArtifactDefinition?</code> </p>

#### RegisterArtifact



```lua
function Artifact.RegisterArtifact(data)
   -> ArtifactLib_ArtifactDefinition
```



Registers the data for an artifact.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>data</b> <code>ArtifactLib_ArtifactDefinition</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>ArtifactLib_ArtifactDefinition</code> </p>

#### IsEquipped



```lua
function Artifact.IsEquipped(char, artifact)
   -> boolean
```



Returns whether char has the artifact power active.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>EclCharacter</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>artifact</b> <code>ArtifactLib_ArtifactDefinition|string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetEquippedPowers



```lua
function Artifact.GetEquippedPowers(char)
   -> ArtifactLib_ArtifactDefinition[]
```



Returns a list of artifact powers active on char.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>EclCharacter</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>ArtifactLib_ArtifactDefinition[]</code> </p>

#### IsEquipped



```lua
function Artifact.IsEquipped(char, artifact)
   -> boolean
```



Returns whether char has the artifact power active.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>EsvCharacter</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>artifact</b> <code>ArtifactLib_ArtifactDefinition|string</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>boolean</code> </p>

#### GetEquippedPowers



```lua
function Artifact.GetEquippedPowers(char)
   -> ArtifactLib_ArtifactDefinition[]
```



Returns a list of artifact powers active on char.



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@param</i></b></span> <b>char</b> <code>EsvCharacter</code> </p>



<p style="margin-bottom:0px;"><span style="color:#b04a6e;"><b><i>@return</i></b></span> <code>ArtifactLib_ArtifactDefinition[]</code> </p>
</doc>

## Usage examples

This library is used in the Quick Examine UI to display tooltips for artifacts. It is additionally used in the stats tab to check the equipped artifacts of a character.
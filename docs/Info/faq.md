# FAQ

## Where do I discuss the mod?
The [Epic Encounters](https://discord.gg/jjCVSy4) discord and their feedback/bugs channels are the right places.
The [*#epipeline*](https://discord.gg/SevYmQc573) channel there can also be used for development-related discussion. It features a bot for logging GitHub commits as well as notifications whenever a new [nightly build](../nightly.md) is available.

There is no "Pip discord"; its existence is a myth fabricated by a certain Subnautica fan.

## What's this talk about a gameplay mod?
Initially, Epip started out as a gameplay mod after development of EE went on hiatus, before becoming a UI & QoL mod. Gameplay changes from that era stayed in the mod for a long time due to their acceptance, but ultimately had to be split off into a separate mod for portability reasons.

The gameplay mod is available [here](https://drive.google.com/file/d/1HqxEzlXaZa4AMRpCybDPvZ2IyFjAL0J0/view?usp=sharing), and its changes are documented in [this document](https://docs.google.com/document/d/12NQOeM9Qr1Hu0gAdgRvydeF8WcYPvcmvFaqIfiIyRUs/edit?usp=sharing). You may also get it through Mel's auto-updater.

There are no plans to work on any further gameplay changes. Check out Derpy's mod for a different take on EE balancing.

## What mods does Epip work with?
Due to the nature of UI modding and the scope of the project, any other mods that alter UI will likely see problems.

The following Larian UIs currently have their .swf overwritten in Epip:

- **Context Menu**
- **Enemy Health Bar**
- **Hotbar** (planned to be removed)
- **Overhead**
- **PlayerInfo** (planned to be removed)
    - This override can be disabled through the *"Player Portraits Overrides"* setting in the "Miscellaneous UI" settings tab.
- **Status Console**
- **Character Sheet** (planned to be removed)
    - This override can be disabled through the *"Character Sheet Overrides"* setting in the "Miscellaneous UI" settings tab.
- **Combat Log** (planned to be removed)

And the following have overlay UIs made for them, meaning problems will likely only arise with graphical mods to them:

- Character Sheet (for Vanity)
- Save/Load
- PlayerInfo

Advancements in UI modding and our expertise have made it possible to remove a lot of .swf overrides throughout the years, but there remain older Epip UI changes that have not yet received the rewrites required to get rid of their overrides.

There's only so much that can be done in regards to Larian UI moddability however, and thus conflicts between UI mods will likely remain a problem forever. Epip does have a [solution](../Documentation/Client/UI/Generic/Introduction.md) for the problem of custom UI moddability, however.

Don't ask other modders to add support for Epip.

## Can I donate?
I (Pip) don't take donations because they create pressure to deliver updates on a somewhat regular basis, which I physically and mentally cannot do. You can instead buy [this game I worked on](https://store.steampowered.com/app/1477950/Lazy_Galaxy_2/). It's a pretty good one within its genre too. Just keep in mind that I also worked on the UIs for it, for better or for worse.

If it makes you feel less inclined to want to donate, keep in mind any donations would've gone towards questionable investments such as fursuits or lolita fashion.

## I'm a modder that could use some UI work, can you help?
Pip accepts requests (not commissions) for UI & client modding help, and we regularly reserve some time for them. Depending on the scale & complexity there's no guarantee we can offer complete implementations, but we can at the very least provide advise on how we'd go about implementing your features.

Note that for any non-trivial mods we can only offer implementations that depend on Epip - we didn't spend years making our libraries to not use them!

## Can I help?
Of course; Epip is at this point a huge project and any form of help is appreciated. Here's a list of things one could do:

- Provide feedback on existing features, as well as UX and UI design (infamously and ironically not our forte, according to many)
- Report bugs
- Help with localizations at [our translation spreadsheet](https://docs.google.com/spreadsheets/d/1N590ol649CFsMJuU2-UNBqWQP8cONo-CnUCcC1TPRgI/)
    - All languages are welcome, including ones the game doesn't normally support.
- Improve documentation - the very website you're reading right now!
    - This includes writing dedicated pages for features, or improving the documentation of the code - either by improving annotations in the source code or providing more details/usage examples on the website pages.
- Improve existing features, fix issues with the code (functional or stylistic), or work on entirely new ones. The repository for the mod is [here](https://github.com/PinewoodPip/EpipEncounters).
    - Setting up a local clone for DOS mods is not very intuitive; I recommend asking Pip or Cathe in #epipeline for a walkthrough
    - Brand new features, as well as large additions should be first discussed in #epipeline to make sure they are appropriate for the mod - [see the "what not to add" list down below](#can-you-add-x).
- Visually redesign UIs and create dedicated art assets (there's only so many times we can call upon the help of Elric-sama)

In any case, you may discuss plans in #epipeline.

## I only like X, can you make a separate mod for it?
No, because it's both a logistics nightmare and inconvenient for users - it's not 2019 anymore, which is why the [settings menu](../Features/SettingsMenu.md) exists.

The time spent maintaining separate repositories, writing separate changelogs, and pushing separate builds would waste a ridiculous amount of time that could've been spent working on the mod itself, as well as making installation and updates more confusing for the existing (and new) users, which have never had much concern for the mod's scope.

The vast majority of features in Epip are optional and opt-in; the few that aren't, are the way they are because nobody has ever complained about them existing. If you feel like something needs a toggle, feel free to let us know.

## Did you steal the Improved Hotbar mod?
The Improved Hotbar mod comes from Epip; it existed to allow that particular feature to be used outside of EE before Epip dropped it as a hard dependency, which was a lengthy process.

Since Epip is now usable without EE, the standalone hotbar mod is obsolete and will not receive any further updates, possibly being removed from the workshop sometime in the future.

## Will all features have controller support?
Controller support for UI mods largely requires all the work to be done twice; this is an immense time commitment for a single developer. Nonetheless, in 2024 we've made large progress towards controller support; versions [v1071](../patchnotes.md#v1071-28072024) and [v1072](../patchnotes.md#v1072-20102024) were almost entirely dedicated to providing controller support for Epip's major features. You can read more about current controller support in its [dedicated page](../Features/ControllerSupport.md).

Additionally, since v1066, mouse control is enabled while playing with a controller. This allows you to use certain custom Epip UIs that still lack controller navigation.

## Will there be a workshop release?
Plans exist for this, but are being held back by a lack of workshop art assets as well as Extender v60 being only on the devel branch, making a workshop release difficult as we all know workshop users don't tend to read about the mods they install.

## Can you add X?
Though it's easy to think that Epip is an all-in-one mod where anything goes, there are moderately strict guidelines for features that are either inappropriate or out of scope, listed as follows:

- **Features only relevant to vanilla**: Epip primarily targets EE, as it is what the team enjoys playing (and Epip wouldn't exist without it). Note that this does not exclude features or integrations with other noteworthy overhauls such as Conflux or Farandole.
- **Features that encourage tedious or degenerate playstyles**: an example being macroing spells to prebuff more efficiently; such features lead the users to habits that ultimately make the game less enjoyable - this makes no sense in a QoL mod.
- **Cheats or developer features outside of developer mode**: the simple reason being that making such cheats accessible encourages users to mess with game balance before they understand it. Keeping such features locked behind a simple json edit or the creation of a mod ensures users have to at least think twice before making any questionable changes.
- **Fixes or workarounds for other mods**: not our responsibility. Features such as the [World Tooltip improvements](../Features/TooltipAdjustments.md#world-tooltips) or [Vanity](../Features/Vanity.md) exist because we were able to improve upon the concepts of the original works, not because there was anything fundamentally broken about them.
- **Server-side systems**: Epip is primarily a client QoL mod. Any server-side systems exist out of pure necessity, and EE Core already offers a phenomenal gameplay-oriented library that I do not think I (Pip) could improve much on. Wrappers around EE systems are for this same reason minimal.
- **In-game tutorials**: Epip is meant to be as non-intrusive as possible; the user should be able to explore features at their own pace and use only the ones they want. In-game tutorials go against this idea and are disrespectful to the people that read what mods do before they install them. As of v1072, the settings menu (and optionally the loading screen) provide non-intrusive tips on getting the most out of Epip.

## How do you pronounce Epip?
It's pronounced "eh-peep" and written as Epip. Any other form of capitalization (especially all-caps) will cause my (Pip's) attitude towards you to decrease by 20.

## What does "Epip" mean?
Unknown.

Some community members have pointed out that "Epip" spelled backwards is "Pipe", however the lore implications of this have not been studied.

## What's the Epipe made out of?
It's a concrete pipe, as it makes [our favorite pipe falling sound](https://youtu.be/BQvGUyxbxWc?si=5nJ7iWLt9ndvzPQP&t=23).
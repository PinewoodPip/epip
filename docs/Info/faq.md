# FAQ

## Where do I discuss the mod?
The [Epic Encounters](https://discord.gg/jjCVSy4) discord and their feedback/bugs channels are the right places.
The [*#epipeline*](https://discord.gg/SevYmQc573) channel there can also be used for development-related discussion.

There is no "Pip discord"; its existence is a myth fabricated by a certain Subnautica fan.

## What's this talk about a gameplay mod?
Initially, Epip started out as a gameplay mod after development of EE went on hiatus, before becoming a UI & QoL mod. Gameplay changes from that era stayed in the mod for a long time due to their acceptance, but ultimately had to be split off into a separate mod for portability reasons.

The gameplay mod is available [here](https://drive.google.com/file/d/1HqxEzlXaZa4AMRpCybDPvZ2IyFjAL0J0/view?usp=sharing), and its changes are documented in [this document](https://docs.google.com/document/d/12NQOeM9Qr1Hu0gAdgRvydeF8WcYPvcmvFaqIfiIyRUs/edit?usp=sharing). You may also get it through Mel's auto-updater.

There are no plans to work on any further gameplay changes. Check out Derpy's mod for a different take on EE balancing.

## What mods does Epip work with?
Due to the nature of UI modding and the scope of the project, any other mods that alter UI will likely see problems.

The following Larian UIs currently have their .swf overwritten in Epip:

- Context Menu
- Enemy Health Bar
- Hotbar (planned to be removed)
- OptionsInput (planned to be removed)
- Overhead
- PlayerInfo (planned to be removed)
- Status Console
- Character Sheet (planned to be removed)
- Combat Log (planned to be removed)
- Panel Select

And the following have overlay UIs made for them, meaning problems will likely only arise with graphical mods to them:

- Character Sheet (for Vanity)
- Save/Load

Advancements in UI modding and our expertise have made it possible to remove a lot of .swf overrides throughout the years, but there remain older Epip UI changes that have not yet received the rewrites required to get rid of their overrides.

There's only so much that can be done in regards to Larian UI moddability however, and thus conflicts between UI mods will likely remain a problem forever. Epip does have a [solution](../Documentation/Client/UI/Generic/Introduction.md) for the problem of custom UI moddability, however.

Don't ask other modders to add support for Epip.

## Can I donate?
I (Pip) don't take donations because they create pressure to deliver updates on a somewhat regular basis, which I physically and mentally cannot do. You can instead buy [this game I worked on](https://store.steampowered.com/app/1477950/Lazy_Galaxy_2/). It's a pretty good one within its genre too. Just keep in mind that I also worked on the UIs for it, for better or for worse.

If it makes you feel less inclined to want to donate, keep in mind any donations would've gone towards questionable investments such as fursuits or lolita fashion.

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
No, because it's a logistics nightmare. The time spent maintaining separate repositories, writing separate changelogs, and pushing separate builds would waste a ridiculous amount of time that could've been spent working on the mod itself, as well as making things more confusing for the existing (and new) users, which have never had much concern for the mod's scope.

The vast majority of features in Epip are optional and opt-in; the few that aren't, are the way they are because nobody has ever complained about them existing. If you feel like something needs a toggle, feel free to let us know.

## Can you add X?
Though it's easy to think that Epip is an all-in-one mod where anything goes, there are moderately strict guidelines for features that are either inappropriate or out of scope, listed as follows.

- **Features only relevant to vanilla**: Epip primarily targets EE, as it is what the team enjoys playing (and Epip wouldn't exist without it). Note that this does not exclude features or integrations with other noteworthy overhauls such as Conflux.
- **Features that encourage tedious or degenerate playstyles**: an example being macroing spells to prebuff more efficiently; such features lead the users to habits that ultimately make the game less enjoyable - this makes no sense in a QoL mod.
- **Cheats or developer features outside of developer mode**: the simple reason being that making such cheats accessible encourages users to mess with game balance before they understand it. Keeping such features locked behind a simple json edit or the creation of a mod ensures users have to at least think twice before making any questionable changes.
- **Fixes or workarounds for other mods**: not our responsibility. Features such as the world tooltip improvements or vanity exist because we were able to improve upon the concepts of the original works, not because there was anything fundamentally broken about them.
- **Server-side systems**: Epip is primarily a client QoL mod. Any server-side systems exist out of pure necessity, and EE Core already offers a phenomenal gameplay-oriented library that I do not think I (Pip) could improve much on. Wrappers around EE systems are for this same reason minimal.

## What does "Epip" mean?
Unknown.

Some community members have pointed out that "Epip" spelled backwards is "Pipe", however the lore implications of this have not been studied.
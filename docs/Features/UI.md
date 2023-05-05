# UI improvements

Epip contains a plethora of functional and cosmetic improvements over the base game UI. Big thanks to Elric for the new art assets used!

## Target status bar

### Resistance and B/H display

The health bar at the top of the screen now shows character's resistances as well as their Battered and Harried stacks. The B/H icons will light up if the target has enough of them to suffer a Tier 3 status, and will blink when the duration of the stacks is 1 turn or fewer.  
Actual B/H statuses are now hidden to reduce clutter.  

![Health bar showcase](img/ui/health_bar.png)

### Alternative display

Holding the "show sneak cones" button (Shift by default) will replace the resistances display with the character's current AP, Source and Initiative - very handy for planning and foreseeing enemy turns. Additionally, it will lower the opacity of status effects on the health bar.  

![Health bar alt](img/ui/health_bar_shift.png)

### Level display

An option to customize the position of targeted character level display was added.
<details>
<summary>Showcase</summary>
Accessible through <b>Options -> Epip settings -> General -> Character Level Display</b>.
<table>
<tr><td>Hidden:            </td><td><img src="../img/ui/lvl_display_hidden.png"/></td></tr>
<tr><td>After Name:        </td><td><img src="../img/ui/lvl_display_after_name.png"/></td></tr>
<tr><td>Below Health Bar:  </td><td><img src="../img/ui/lvl_display_below.png"/></td></tr>
<tr><td>When holding Shift:</td><td><img src="../img/ui/lvl_display_shift.png"/></td></tr>
</table>
</details>

### Aggro display

An option to display aggro-related information was added. It shows current Taunt source, if exists, as well as whether character is a Preferred, Unpreferred or Ignored by enemies.  
You can adjust whether this info is shown in the default or alternative health bar display, or turn it off entirely.
<details>
<summary>Showcase</summary>
Accessible through <b>Options -> Epip settings -> General -> Show Aggro Information</b>.
<table>
<tr><td>Preferred:   </td><td><img src="../img/ui/aggro_pref.png"/></td></tr>
<tr><td>Unpreferred: </td><td><img src="../img/ui/aggro_unpref.png"/></td></tr>
<tr><td>Ignored:     </td><td><img src="../img/ui/aggro_ignored.png"/></td></tr>
<tr><td>Taunted:     </td><td><img src="../img/ui/aggro_taunted.png"/></td></tr>
</table>
</details>
<details>
<summary>Aggro tags explanation</summary>
AI chooses its targets based on a number of parameters, such as target's effective HP, how easy it is to get to the target and so on. Its behavior is also influenced by aggro tags.
<ul>
<li>No tag: AI has no preference on whether to choose this character as the primary attack target or not. However, AI will actively try to hit this character with AOE attacks. Most characters will not have any aggro tag by default.</li>
<li>Preferred: AI will actively try to make this character its primary attack target. This aggro tag is manually provided to some important NPCs and is not normally obtainable during gameplay.</li>
<li>Unpreferred: AI will try not to make this character its primary target. <b>However, AI will still actively try to AOE this character.</b> This tag is usually acquired by using Subjugated status, and is also manually provided to some characters, mostly summons.</li>
<li>Ignored: AI will try to act as if this character does not exist.</li>
<li>Taunted: this AI will consider the source of Taunt a Preferred target.</li>
</ul>
</details>

## Player status bar

The player health bar now shows its values at all times (you needn't hover over it anymore), and the Physical/Magic Armor text was removed to improve readability.  
Additionally, your AP display now features dividers every 4 AP, making it easier to see at a quick glance how much AP you've got left. Your maximum SP is also shown at all times.  
Further minor graphical tweaks were made, such as properly centering AP/SP displays and adding a dropshadow to AP bar to improve its readability.  

![Player status bar showcase](img/ui/status_console.png)

## Player portraits

The status bar on your characters now wraps onto a second row once there are more than 6 statuses, preventing it from obscuring the middle of the screen during intense fights. Summon portraits no longer show statuses and are shrunk while the status bar is wrapping.  
You can right-click your portraits to open a context menu where you can hide the status bar and summons, as well as access the Debug Cheats if you're in developer mode.  
In the settings, you may also enable a Battered/Harried display on these portraits.  

![Player Info preview.](img/ui/player_info.png)

// TODO add summon ss
// TODO add dev mode ss

## Character sheet

The character sheet now shows physical and piercing resistances.
The tags tab is replaced with a brand new "Keywords and misc." tab. You can use it to quickly reference your keyword activators and mutators, as well as reaction charges remaining.

![Custom stat tab.](img/ui/keywords.png)

// TODO replace showcase ss (outdated)
// TODO add res ss
// TODO mention combat stats

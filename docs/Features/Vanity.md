# Vanity
Satisfy all of your cosplay needs with an easy to use, non-intrusive vanity system.  
Unlike some other implementations, this has **absolutely no gameplay side effects**. It even works with Gift Bag 5 armor sets!  
Access its menu by right-clicking any of your equipped items and choosing the "Vanity..." option.  

<center>![Vanity submenu](img/vanity/submenu.png)</center>

From here you will have access to a number of tabs packed with customization features.  

<center>![Tabs overview](img/vanity/tabs.png)</center>

## Transmog Tab ![Transmog tab icon](img/vanity/transmog_tab_icon.png){style='height:35px;'}

![Transmog tab showcase](img/vanity/transmog_tab.png)

Equipment tab lets you seamlessly transmogrify the appearance of your weapons and armors.  
The item you've used to access this tab is its focus, indicated by the dropdown list at the top. To select another item to tinker with you can use right-click -> Vanity... on it or said dropdown list.  

<center>![Transmog list](img/vanity/transmog_list.png)</center>

### Basics
Transmog options consist of vanilla armor variants and options added by cosmetic mods. Support is included for ["Majora's Project Fashion Sins"](https://steamcommunity.com/sharedfiles/filedetails/?id=1815898410), ["Rendal's NPC Armors"](https://steamcommunity.com/sharedfiles/filedetails/?id=1515827226) and ["Visitors from Cyseal"](https://steamcommunity.com/sharedfiles/filedetails/?id=2828485171) mods, displaying their visuals as additional options within the UI.

Using transmog is as easy as clicking on your desired option, no extra items or materials required.

!!! info ""
    Transmog is purely cosmetic and has no effect on gameplay. The equipment's stats, modifiers and set effects will not be altered. Unlike older vanity mods, Epip's Transmog works with Gift Bag 5's armor sets.

![Transmog showcase](img/vanity/transmog_demo.png)  

If you think we've missed some of vanilla variants or want to see support for more third-party mods - feel free to tell us.

!!! info ""
    By default, Vanity changes applied to equipment are reverted when the item is unequipped. You can control this behaviour with the "*Revert appearance of unequipped items*" setting in the Vanity settings tab.

### Autotransmog
Found your perfect look? Want to keep it for the rest of the game? "Lock Appearance" option is here for you. When it's ticked newly equipped gear will be automatically transmogrified to match your previous look.  

![Lock appearance checkbox](img/vanity/lock_appearance.png)

**This option is saved per-slot.**  
**Automatic transmogrification will only happen if you don't have the Vanity menu open.**  

### Visibility
Want to go for more outlandish look? Make your equipment invisible with a press of a button! *We trust you to use this option responsibly and only hide your shields and/or weapons for the coolness factor instead of making your characters walk around butt-naked.*  

![Transmog invis](img/vanity/transmog_visibility.png)

### Icon Options
For the sake of making inventory management easier, you can make transmog (both manual and automatic) preserve the equipment's current icon. **This option is saved per-slot.**

![Transmog keep icon](img/vanity/keep_icon_showcase.png)

Additionally, you may change the icon of an item through a new Icon Picker UI.

![Icon Picker UI.](img/ui/iconpicker.png)

### Elemental Effects
Weapons with elemental damage normally get glowing visual effect applied to them. Don't like it? You can turn it off.  

![Transmog ele effects](img/vanity/ele_effects.png)

### Animation Swaps
When using the updated version of the [extender fork](../extender.md), you can change your weapon animations to those of other weapon types; select the Weapon item slot for this option to appear. This also changes the stance your characters have in combat or while unsheathed.

![type:video](https://www.youtube.com/embed/BrpHSf9sgb4)
<center><i>Weapon animation swap showcase.</i></center>

## Outfits Tab ![Outfits tab icon](img/vanity/outfits_tab_icon.png){style='height:35px;'}
Have you mastered the art of drip? Have you found your ultimate image? Never wanna wear anything else ever again? Save your entire get-up and use it across playthroughs with a few clicks.  

![Outfits showcase](img/vanity/outfits_showcase.png)

Saved outfits are grouped by intended race and gender, but can be applied to any character.  

Adding a new outfit to your wardrobe is as simple as clicking ![Outfits button](img/vanity/outfits_button.png){: style="width:auto;height:24px;" } and entering a name.

![Outfits prompt](img/vanity/outfits_prompt.png)

## Dyes Tab ![Dyes tab icon](img/vanity/dyes_tab_icon.png){style='height:35px;'}
Feeling blue today? Maybe red? Or are you cool and it's time for purple? Worry not! All your coloring needs can be satisfied in the Dyes tab!  

![Dyes showcase](img/vanity/dyes_showcase.png)

### Basics
Equipment is divided in up to 3 color zones. You can choose your favorite colors for each of them using means provided:  

+ Sliders - the more user-friendly option, drag a bunch of sliders around to adjust RGB values in [0; 255] range. You don't even have to understand how RGB works - a handy preview of a resulting color is always displayed for your convenience.  
+ Hex - if you think you're cool you can always straight-up enter your desired hex code. Whether you conjure them in your mind through otherwordly communion or just look them up in Google - not our problem.  

Once done - press ![Dyes apply button](img/vanity/dyes_apply_button.png){: style="width:auto;height:24px;" } to see the fruits of your labor.

**Important - not all equipment can be dyed and not all dyeable equipment will have all 3 color zones. We are not to be blamed for this, blame Larian instead.**

### Sharing
Found the coolest color combination ever? Wanna share it with your friend? There are several ways to go about this:

+ Copy/paste - see these ![Dyes copypaste buttons](img/vanity/dyes_copypaste_buttons.png){: style="width:auto;height:24px;" }? Up means "copy", down means "paste".
+ Import/export - ![Dyes export button](img/vanity/dyes_export_button.png){: style="width:auto;height:24px;" } puts a single string representing all 3 color zones into your clipboard, kinda like this **#FF0000-#00FF00-#0000FF**.  
![Dyes import button](img/vanity/dyes_import_button.png){: style="width:auto;height:24px;" } scans your clipboard and if it contains the string in correct format - inputs color codes into their zones.  

### Lock Sliders
By default color sliders will automatically adjust to match currently focused equipment piece whenever you change it. However by ticking ![Dyes lock button](img/vanity/dyes_lock.png){: style="width:auto;height:24px;" } you can prevent this.  
This can be useful for applying one dye to multiple equipment pieces.  

### Saving Dyes and Built-ins
You can save your favorite dyes to reuse them later by pressing ![Dyes save button](img/vanity/dyes_save_button.png){: style="width:auto;height:24px;" } and entering a name.  

![Dyes save prompt](img/vanity/dyes_prompt.png)

Saved dyes will appear under "Custom Dyes" collapsing list. There also are a few built-in dyes for you to use or take inspiration from.  

<center>![Dyes customs](img/vanity/dyes_custom.png)</center>

## Auras Tab ![Vanity tab icon](img/vanity/transmog_tab_icon.png){style='height:35px;'}
All these drip options were not enough for you? Want to make your presence even more noticeable? Apply permanent visual effects to your character in Auras tab.  

![Auras showcase](img/vanity/auras_showcase.png)

As simple as it gets - choose your attachment point, choose auras to use with it.

*This feature is in rather experimental stage. It works as intended, but has seen little adoption by players (to our knowledge). Any feedback is welcome.*  

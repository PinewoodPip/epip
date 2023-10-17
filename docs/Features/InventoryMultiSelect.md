# Inventory Multi-Select
The Inventory Multi-Select feature adds the ability to select multiple items in the inventory UIs to perform batch operations such as moving them to different inventories.<br>
It may be enabled from the "Inventory" settings tab (*"Multi-select controls"*).

![type:video](https://www.youtube.com/embed/xqr88b6DGDY)

By default, ++ctrl+m1++ will select/deselect items.<br>
If at least one item is selected, ++shift+m1++ will select a range of items between the mouse and the first selected item. These controls can be rebound from the settings menu.

Right-click selected items to access a context menu with operations, or drag and drop them to inventory slots, player inventory tabs, or container items to move them.

<center>
![Context menu for selected items.](./img/inventorymultiselect/context_menu.png)
</center>

Multi-select is supported for the party inventory as well as the container inventory UI.

!!! warning
    The *"No More Dragging"* mod uses a ++ctrl+m1++ key combination, which may conflict with the default one for Inventory Multi-Select. You may have to rebind *"Toggle Item Selection"* to avoid issues if you're using that mod with this feature.
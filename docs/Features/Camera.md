# Camera
The Epip settings menu features a dedicated tab for customizing camera properties such as the zoom, angle, and field of view.

![Camera settings tab.](img/camera/main_settings.png)

---

![Maximum zoom out.](img/camera/example_max_zoomout.png)
<center>Example of the maximum zoom out level.</center>

## Angles
For each camera mode, the game accepts two angles: one used when zoomed in as much as possible, and the second used when the camera is zoomed out as much as possible.

Any zoom level inbetween the minimum and maximum will have its angle resolved through linear interpolation.

![Angle settings tab.](img/camera/angle_settings.png)

These angles are actually position offsets applied to the camera, with the values being multiplied by the zoom level. This means that raising "Angle value 2" will result in the camera being higher up.

However, the game camera always points towards the ground or the focused character, and as such, raising the Y level also means it will point more towards the ground.

---

![Example of an angle with a low Y (Angle value 2).](img/camera/example_low_tilt.png)
<center>Example of an angle with a low Y (angle value 2)</center>
---
id: rules
title: Rules
---

### Only one at a time
In previous versions, users complained about overlapping drop-down menus.  
This package is available in three modes: top, bottom or auto mode, if there are several components in a row, it may cause them to overlap. To prevent this from happening, only one package should be open at a time.  
+ **See: [Close other drop-down menus](/).**

### Keep item values unique
The values of your items are considered unique. If that happens, only the first item with the value will be selected not the one you select.

### Avoid inappropriate styles
React Native has limits on the `View` elements. The drop-down menu is not compatible with styles such as `borderColor` or `backgroundColor` in the `containerStyle` property which make the items untoucable, unless you're on the `MODAL` list mode.

### Avoid hard-coded values
The `value` and `items` properties must be state variables otherwise the component won't work as expected.
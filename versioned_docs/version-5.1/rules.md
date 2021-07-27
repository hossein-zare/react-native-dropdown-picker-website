---
id: rules
title: Rules
---

### Only one at a time
In previous versions, users complained about overlapping drop-down menus.  
If there are several components in a row, it may cause them to overlap. To prevent this from happening, only one package should be open at a time.  
+ **See: [Close other pickers](https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/tutorials/close-other-pickers)**

### Keep item values unique
The values of your items are considered unique, if not so, only the first item with the value will be selected not the one you select.

### Avoid inappropriate styles
The drop-down menu is not compatible with styles such as `borderColor` or `backgroundColor` in the `containerStyle` property which make the items untouchable, unless you're on the `MODAL` list mode.  
If you've wrapped the picker with a `View`, you should avoid the styles mentioned above.

### Avoid hard-coded values
The `value` and `items` properties must be state variables otherwise the component won't work as expected.

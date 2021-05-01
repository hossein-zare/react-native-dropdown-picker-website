---
id: themes
title: Themes
---

## Change the theme
Currently `LIGHT` and `DARK` themes are available.
+ `DEFAULT`
+ `LIGHT`
+ `DARK`

```jsx
theme="DARK"
```
| Type     | Default  |
| -------- | -------- |
| string   | `LIGHT`   |

## Change the default theme
```jsx
DropDownPicker.setTheme("DARK");
```

## Add a theme
Please see the `LIGHT` theme styles as a starting point.

```jsx
const myTheme = require("./my-theme");

DropDownPicker.addTheme("MyThemeName", myTheme);
DropDownPicker.setTheme("MyThemeName");
```
+ **See [themes/light/index.js](https://github.com/hossein-zare/react-native-dropdown-picker/blob/5.x/src/themes/light/index.js)**
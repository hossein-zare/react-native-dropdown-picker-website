---
id: modes
title: Modes
---

Modes display selected items.
+ `DEFAULT`
+ `SIMPLE`
+ `BADGE`

```jsx
mode="SIMPLE"
```
| Type     | Default  |
| -------- | -------- |
| string   | `SIMPLE` |

:::note
Single item pickers won't be affected by the `mode` property.
:::

## Change the default mode
You can change the default mode of the package globally.

```jsx
DropDownPicker.setMode("BADGE");
```

## Badge Mode Props
### `showBadgeDot`
Shows dots in the badges.

```jsx
showBadgeDot={true}
```
| Type     | Default  |
| -------- | -------- |
| bool     | true     |

### `badgeProps`
Adds native props for the badge container TouchableOpacity.

```jsx
badgeProps={{
  activeOpacity: 0.5
}}
```

### `extendableBadgeContainer`
If true, it allows the badges to expand in multiple rows.

| Type     | Default  |
| -------- | -------- |
| bool     | false     |

## Callbacks

### `renderBadgeItem`
Renders the selected items.

```jsx
renderBadgeItem={(props) => <Badge {...props} />}
```

:::note
You need to move it to an independent component otherwise the items will be re-rendered.
:::
+ **See: [RenderBadgeItem.js](https://github.com/hossein-zare/react-native-dropdown-picker/blob/5.x/src/components/RenderBadgeItem.js)**

| Type     |
| -------- |
| function |

## Styling
### `badgeStyle`
```jsx
badgeStyle={{
  padding: 5
}}
```

### `badgeTextStyle`
```jsx
badgeTextStyle={{
  fontStyle: "italic"
}}
```

### `badgeDotStyle`
```jsx
badgeDotStyle={{
  borderRadius: 2
}}
```

### `badgeSeparatorStyle`
```jsx
badgeSeparatorStyle={{
  width: 30
}}
```

### `badgeColors`
Gives background colors to badges based on the `value`.

```jsx
badgeColors={["red", "blue", "orange"]}
```
| Type     |
| -------- |
| object, string     |

### `badgeDotColors`
Gives background colors to badge dots based on the `value`.

```jsx
badgeDotColors={["red", "blue", "orange"]}
```
| Type     |
| -------- |
| object, string     |
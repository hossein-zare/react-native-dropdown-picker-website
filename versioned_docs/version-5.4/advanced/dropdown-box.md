---
id: dropdown-box
title: Dropdown Box
---

## Props
### `dropDownDirection`
Specifies which direction the drop-down menu should open.
+ `DEFAULT`
+ `TOP`
+ `BOTTOM`
+ `AUTO`

```jsx
dropDownDirection="TOP"
```
| Type     | Default  |
| -------- | -------- |
| string   | `AUTO`   |

### `bottomOffset`
Specifies the maximum bottom offset. To use this prop you need `dropDownDirection="AUTO"`.

```jsx
bottomOffset={100}
```
| Type     | Default  |
| -------- | -------- |
| number   | 0        |

## Callbacks
### `onDirectionChanged`
Callback that is called when the direction changes.

```jsx
onDirectionChanged={(direction) => {
  console.log(direction); // top or bottom
}}
```

## Styling
### `dropDownContainerStyle`
```jsx
dropDownContainerStyle={{
  backgroundColor: "#dfdfdf"
}}
```
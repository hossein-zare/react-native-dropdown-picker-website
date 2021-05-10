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

## Styling
### `dropDownContainerStyle`
```jsx
dropDownContainerStyle={{
  backgroundColor: "#dfdfdf"
}}
```
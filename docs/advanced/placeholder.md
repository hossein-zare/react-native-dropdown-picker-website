---
id: placeholder
title: Placeholder
---

When no item is selected, the placeholder is displayed and prompts the user to select an item.  
The value for single item pickers is `null` and for multiple item pickers it's `[]`.

```jsx
const [value, setValue] = useState(null); // Single
const [value, setValue] = useState([]); // Multiple

<DropDownPicker
  value={value}
  ...
/>
```

## Placeholder Text
Both of the following properties are available.

### `placeholder`
```jsx
placeholder="Select an item"
```

### `translation`
```jsx
translation={{
  PLACEHOLDER: "Select an item"
}}
```
+ **See: [Localization](localization)**

## Styling
### `placeholderStyle`
```jsx
placeholderStyle={{
  color: "grey",
  fontWeight: "bold"
}}
```
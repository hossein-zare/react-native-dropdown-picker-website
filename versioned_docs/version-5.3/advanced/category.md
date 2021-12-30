---
id: category
title: Category
---

You can categorize your items easily.

```jsx
const [items, setItems] = useState([
  {label: 'North America', value: 'na'},
  {label: 'United States', value: 'usa', parent: 'na'},
  {label: 'Canada', value: 'canada', parent: 'na'},

  {label: 'Europe', value: 'eu'},
  {label: 'Norway', value: 'norway', parent: 'eu'},
  {label: 'Belgium', value: 'belgium', parent: 'eu'},
]);
```
The children have the parent's `value` as their `parent` key.

:::note
The items don't need to be sorted, This will be done automatically.
:::

## Props
### `categorySelectable`
Specifies if the categories can be selected.

```jsx
categorySelectable={true}
```
| Type     | Default  |
| -------- | -------- |
| bool     | false    |

## Styling
### `listParentContainerStyle`
```jsx
listParentContainerStyle={{
  justifyContent: "center",
  alignItems: "center"
}}
```

### `listParentLabelStyle`
```jsx
listParentLabelStyle={{
  fontWeight: "bold"
}}
```

### `listChildContainerStyle`
```jsx
listChildContainerStyle={{
  paddingLeft: 20
}}
```

### `listChildLabelStyle`
```jsx
listChildLabelStyle={{
  color: "grey"
}}
```
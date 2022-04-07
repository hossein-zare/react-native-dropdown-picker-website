---
id: item-schema
title: Item Schema
---

## Default schema
```jsx
schema={{
  label: 'label', // required
  value: 'value', // required
  icon: 'icon',
  parent: 'parent',
  selectable: 'selectable',
  disabled: 'disabled',
  testID: 'testID',
  containerStyle: 'containerStyle',
  labelStyle: 'labelStyle'
}}
```

## Customize the schema
You can customize the item keys, therefore you won't need modification.

```jsx
const remoteItems = [
  {id: 1, title: 'Item 1', val: 'item-1'},
  {id: 2, title: 'Item 2', val: 'item-2'},
];

<DropDownPicker
  schema={{
    label: 'title',
    value: 'val'
  }}
  ...
/>
```
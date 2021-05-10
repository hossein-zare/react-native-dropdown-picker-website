---
id: multiple-pickers
title: Multiple Pickers
---

In order to avoid overlapping, don't forget the `zIndex` and `zIndexInverse` properties.

```jsx
<DropDownPicker
    zIndex={3000}
    zIndexInverse={1000}
    ...
/>

<DropDownPicker
    zIndex={2000}
    zIndexInverse={2000}
    ...
/>

<DropDownPicker
    zIndex={1000}
    zIndexInverse={3000}
    ...
/>
```
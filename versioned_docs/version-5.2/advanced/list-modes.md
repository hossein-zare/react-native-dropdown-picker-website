---
id: list-modes
title: List Modes
---

You have 3 options when choosing the list mode.
+ `DEFAULT`
+ `FLATLIST`
+ `SCROLLVIEW`
+ `MODAL` 

```jsx
listMode="FLATLIST"
```
| Type     | Default    |
| -------- | ---------- |
| string   | `FLATLIST` |

## Notes
The `FlatList` component shouldn't be nested inside `ScrollView` or you'll come across the `VirtualizedLists should never be nested inside plain ScrollViews` warning.  
If this happens to you and you only have a few items, consider using the `SCROLLVIEW` mode. 
Otherwise you have to use the `MODAL` mode.

## Change the default list mode
You change the default list mode of the package globally.

```jsx
DropDownPicker.setListMode("SCROLLVIEW");
```

## Props
### `flatListProps`
Adds native props for the FlatList.
```jsx
flatListProps={{
  initialNumToRender: 10
}}
```
| Type     |
| -------- |
| [FlatListProps](https://reactnative.dev/docs/flatlist#props)     |

### `scrollViewProps`
Adds native props for the ScrollView.
```jsx
scrollViewProps={{
  decelerationRate: "fast"
}}
```
| Type     |
| -------- |
| [ScrollViewProps](https://reactnative.dev/docs/scrollview#props)     |

### `modalProps`
Adds native props for the Modal.
```jsx
modalProps={{
  animationType: "fade"
}}
```
| Type     |
| -------- |
| [ModalProps](https://reactnative.dev/docs/modal#props)     |

### `modalTitle`
Sets modal title.  
`listMode="MODAL"` and `searchable={false}` are required.
```jsx
modalTitle="Select an item"
```

## Styling
### `modalContentContainerStyle`
```jsx
modalContentContainerStyle={{
  backgroundColor: "#fff"
}}
```

### `modalTitleStyle`
```jsx
modalTitleStyle={{
  fontWeight: "bold"
}}
```
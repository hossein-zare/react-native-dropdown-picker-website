---
id: search
title: Search
---

## Props
### `searchable`
Enables the search feature in the drop-down menu / modal.
```jsx
searchable={true}
```
| Type     | Default  |
| -------- | -------- |
| bool     | false    |

### `searchTextInputProps`
Adds native props for the text input.
```jsx
searchTextInputProps={{
  maxLength: 25
}}
```
| Type     |
| -------- |
| [ScrollViewProps](https://reactnative.dev/docs/scrollview#props)   |

### `disableLocalSearch`
Disables search between local items. This comes in handy for remote search.

```jsx
disableLocalSearch={true}
```
+ **See: [`onChangeSearchText`](#onchangesearchtext)**

| Type     | Default  |
| -------- | -------- |
| bool     | false    |

### `addCustomItem`
Shows the searched text as an item when there's nothing to show.
```jsx
addCustomItem={true}
```
| Type     | Default  | Requirements |
| -------- | -------- | ------------ |
| bool     | false    | [`setItems`](/docs/usage#setitems)   |

## Placeholder Text
Changes the placeholder text of the text input. Both of the following properties are available.

### `searchPlaceholder`
```jsx
searchPlaceholder="Search..."
```

### `translation`
```jsx
translation={{
  SEARCH_PLACEHOLDER: "Search..."
}}
```
+ **See: [Localization](localization)**

## Callbacks
### `onChangeSearchText`
Callback that is called when the text changes in the text input.

```jsx
loading={loading}
disableLocalSearch={true} // required for remote search
onChangeSearchText={(text) => {
  // Show the loading animation
  setLoading(true);

  // Get items from API
  API.get("/items/search", {
    text
  })
    .then((items) => {
      setItems(items);
    })
    .catch((err) => {
      //
    })
    .finally(() => {
      // Hide the loading animation
      setLoading(false);
    });
}}
```

## Styling
### `searchContainerStyle`
```jsx
searchContainerStyle={{
  borderBottomColor: "#dfdfdf"
}}
```

### `searchTextInputStyle`
```jsx
searchTextInputStyle={{
  color: "#000"
}}
```

### `searchPlaceholderTextColor`
```jsx
searchPlaceholderTextColor="grey"
```

### `customItemContainerStyle`
```jsx
customItemContainerStyle={{
  backgroundColor: "#dfdfdf"
}}
```

### `customItemLabelStyle`
```jsx
customItemLabelStyle={{
  fontStyle: "italic"
}}
```
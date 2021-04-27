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

### `searchTextInputProps`
Adds native props for the text input.

```jsx
searchTextInputProps={{
    maxLength: 25
}}
```

### `loading`
Displays an ActivityIndicator when the items aren't loaded yet.

```jsx
const [loading, setLoading] = useState(false);

<DropDownPicker
    loading={loading}
    color="red"
    size={30}
    ...
/>
```

### `ActivityIndicatorComponent`
Customizes the ActivityIndicator.

```jsx
ActivityIndicatorComponent={({color, size}) => (
    <ActivityIndicator color={color} size={size} />
)}
```

### `addCustomItem`
Shows the searched text as an item when there's nothing to show.

```jsx
addCustomItem={true}
```

## Placeholder
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

## Callbacks
### `onChangeSearchText`
Callback that is called when the text changes in the text input.

```jsx
loading={loading}
onChangeSearchText={(text) => {
    // Show the loading animation
    setLoading(true);

    // Get items from API
    API.get('/items/search', {
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
searchPlaceholderTextColor={{
    color: "grey"
}}
```
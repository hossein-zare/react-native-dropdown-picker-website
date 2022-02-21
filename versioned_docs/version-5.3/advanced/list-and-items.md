---
id: list-and-items
title: List and Items
---

## Disable an Item
You may want to disable an item, The item will be unselectable.

```js
{label: 'Item', value: 1, disabled: true}
```

## Item-specific styles
Each item can have its own label and container styles.

```js
{
  ...
  containerStyle: {
    backgroundColor: "#000"
  },
  labelStyle: {
    color: "#fff"
  }
}
```

## Test ID
Used to locate the item in end-to-end tests.

```js
{
  ...
  testID: "item-testid"
}
```

## Props
### `itemKey`
Specifies which item key should be used as a key.

```jsx
itemKey="value"
```
| Type     | Default  |
| -------- | -------- |
| string   | `value`  |

### `closeAfterSelecting`
Closes the picker after selecting an item.  

```jsx
closeAfterSelecting={true}
```
:::note
This only works with **single** item pickers.
:::
| Type     | Default  |
| -------- | -------- |
| bool     | false    |

### `closeOnBackPressed`
Closes the picker after pressing the back button.

```jsx
closeOnBackPressed={true}
```

| Type     | Default  |
| -------- | -------- |
| bool     | false    |

### `itemSeparator`
Specifies if the item separater should be visible.

```jsx
itemSeparator={true}
```
| Type     | Default  |
| -------- | -------- |
| bool     | false    |

## Callbacks
### `renderListItem`
Customizes the `renderListItem`.

```jsx
renderListItem={(props) => <Item {...props} />}
```
+ **See: [RenderListItem.js](https://github.com/hossein-zare/react-native-dropdown-picker/blob/5.x/src/components/RenderListItem.js)**

| Type     |
| -------- |
| function |

### `ListEmptyComponent`
Changes the default `ListEmptyComponent`.

```jsx
ListEmptyComponent={({
  listMessageContainerStyle, listMessageTextStyle, ActivityIndicatorComponent, loading, message
}) => (
  <View style={listMessageContainerStyle}>
    {loading ? (
      <ActivityIndicatorComponent />
    ) : (
      <Text style={listMessageTextStyle}>
        {message}
      </Text>
    )}
  </View>
)}}
```

## Styling
### `listItemContainerStyle`
```jsx
listItemContainerStyle={{
  height: 40
}}
```

### `listItemLabelStyle`
```jsx
listItemLabelStyle={{
  color: "#000"
}}
```

### `selectedItemContainerStyle`
```jsx
selectedItemContainerStyle={{
  backgroundColor: "grey"
}}
```

### `selectedItemLabelStyle`
```jsx
selectedItemLabelStyle={{
  fontWeight: "bold"
}}
```

## `customItemContainerStyle`
```jsx
customItemContainerStyle={{
  //
}}
```

## `customItemLabelStyle`
```jsx
customItemLabelStyle={{
  fontStyle: "italic"
}}
```

### `disabledItemContainerStyle`
```jsx
disabledItemContainerStyle={{
  //
}}
```

### `disabledItemLabelStyle`
```jsx
disabledItemLabelStyle={{
  opacity: 0.5
}}
```

### `listMessageContainerStyle`
```jsx
listMessageContainerStyle={{
  //
}}
```

### `listMessageTextStyle`
```jsx
listMessageTextStyle={{
  //
}}
```

### `itemSeparatorStyle`
```jsx
itemSeparatorStyle={{
  backgroundColor: "#000"
}}
```
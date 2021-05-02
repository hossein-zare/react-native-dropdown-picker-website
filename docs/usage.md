---
id: usage
title: Usage
---

## Examples
### Single item
In the following example you can select only one item.

```jsx
import DropDownPicker from 'react-native-dropdown-picker';

function App() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setValue={setValue}
      setItems={setItems}
      setOpen={setOpen}
    />
  );
}
```

### Multiple items
In the following example you can select multiple items.

```jsx
const [value, setValue] = useState([]);

<DropDownPicker
  multiple={true}
  min={0}
  max={5}
  ...
/>
```

## Props
### **`items`**
State variable that holds the items.

```jsx
items={items}
```
| Type     | Required |
| -------- | -------- |
| ItemType[]   | **true** |

### **`value`**
State variable that specifies the value of the selected item. It's an array of values for multiple item pickers.

```jsx
value={value}
```
| Type     | Required |
| -------- | -------- |
| ValueType \| ValueType[] (ValueType = string \| number \| boolean)   | **true** |

### **`open`**
State variable that specifies whether the picker is open.

```jsx
open={open}
```
| Type     | Required |
| -------- | -------- |
| boolean     | **true** |

### `containerProps`
Adds native props for the container.

```jsx
containerProps={{
  //
}}
```
| Type     |
| -------- |
| [ViewProps](https://reactnative.dev/docs/view#props)     |

### `labelProps`
Adds native props for the `Text` element of the selected item.

```jsx
labelProps={{
  numberOfLines: 1
}}
```
| Type     |
| -------- |
| [TextProps](https://reactnative.dev/docs/text#props)     |

### `min`
Specifies the minimum number of items.

```jsx
min={0}
```
:::note
This only works with multiple item pickers.
:::
| Type     | Default  |
| -------- | -------- |
| number   | null     |

### `max`
Specifies the maximum number of items.

```jsx
max={10}
```
:::note
This only works with multiple item pickers.
:::
| Type     | Default  |
| -------- | -------- |
| number   | null     |

### `disabled`
Disables the picker.

```jsx
disabled={true}
```
| Type     | Default  |
| -------- | -------- |
| bool     | false    |

### `maxHeight`
Max height of the drop-down box.

```jsx
maxHeight={200}
```
| Type     | Default  |
| -------- | -------- |
| number   | 200      |

### `disableBorderRadius`
Disables changing the border radius when opening.

```jsx
disableBorderRadius={true}
```
| Type     | Default  |
| -------- | -------- |
| bool     | false    |

### `zIndex`
Specifies the stack order.

```jsx
zIndex={1000}
```
| Type     | Default  |
| -------- | -------- |
| number   | 5000     |

+ **See: [Multiple Pickers](tutorials/multiple-pickers)**

### `zIndexInverse`
Specifies the inverse stack order.

```jsx
zIndexInverse={1000}
```
| Type     | Default  |
| -------- | -------- |
| number   | 6000     |

+ **See: [Multiple Pickers](tutorials/multiple-pickers)**

## Callbacks
### **`setOpen`**
State callback that is called when the user presses the picker.

```jsx
setOpen={setOpen}
```
| Type     | Required |
| -------- | -------- |
| (open: boolean) => void | **true** |

### **`setItems`**
State callback that is called to modify or add new items.

```jsx
setItems={setItems}
```
| Type     | Required |
| -------- | -------- |
| (items: ItemType[]) => void | **true** |

### **`setValue`**
State callback that is called when the `value` changes.

```jsx
setValue={setValue}
```
| Type     | Required |
| -------- | -------- |
| (values: ValueType \| ValueType[]) => void | **true** |

### `onPress`
Callback that is called as soon as the user presses the picker.

```jsx
onPress={(open) => console.log('was the picker open?', open)}
```
| Type     |
| -------- |
| (open: boolean) => void |

### `onOpen`
Callback that is called when the user opens the picker.

```jsx
onOpen={() => console.log('hi!')}
```
| Type     |
| -------- |
| () => void |

### `onClose`
Callback that is called when the user closes the picker.

```jsx
onClose={() => console.log('bye!')}
```
| Type     |
| -------- |
| () => void |

## Styling
### `style`
```jsx
style={{
  backgroundColor: "crimson"
}}
```

### `containerStyle`
```jsx
containerStyle={{

}}
```

### `disabledStyle`
```jsx
disabledStyle={{
  opacity: 0.5
}}
```

### `textStyle`
```jsx
textStyle={{
  fontSize: 15
}}
```

### `labelStyle`
```jsx
labelStyle={{
  fontWeight: "bold"
}}
```

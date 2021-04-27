---
id: basic-usage
title: Basic Usage
---

## Single item

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
            onChangeValue={setValue}
            setItems={setItems}
            setOpen={setOpen}
        />
    );
}
```

## Multiple items

```jsx
const [value, setValue] = useState([]);

<DropDownPicker
    multiple={true}
    ...
/>
```
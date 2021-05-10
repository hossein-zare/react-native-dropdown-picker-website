---
id: loading
title: Loading
---

## Props
### `loading`
Displays an ActivityIndicator when the items aren't loaded yet.

```jsx
const [loading, setLoading] = useState(false);

<DropDownPicker
  loading={loading}
  ...
/>
```
| Type     | Default  |
| -------- | -------- |
| bool     | false    |

### `ActivityIndicatorComponent`
Customizes the ActivityIndicator.

```jsx
ActivityIndicatorComponent={({color, size}) => (
  <ActivityIndicator color={color} size={size} />
)}
```
| Type     |
| -------- |
| function |

### `activityIndicatorColor`
Changes the default color of the ActivityIndicator.

```jsx
activityIndicatorColor="red"
```
| Type     | Default  |
| -------- | -------- |
| string   | grey     |

### `activityIndicatorSize`
Changes the default size of the ActivityIndicator.

```jsx
activityIndicatorSize={30}
```
| Type     | Default  |
| -------- | -------- |
| number   | 30    |
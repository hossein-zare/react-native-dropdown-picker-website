---
id: icons
title: Icons
---

## Item Icon
Each item can have an icon.

```jsx
{
  label: 'Item',
  value: 'item',
  icon: () => <Image source={require('./assets/icon.png')} style={styles.iconStyle} />
}
```

## Props
### `showArrowIcon`
Specifies if the arrow icons should be visible.

```jsx
showArrowIcon={true}
```
| Type     | Default  |
| -------- | -------- |
| bool     | true     |

### `showTickIcon`
Specifies if the tick icon should be visible.

```jsx
showTickIcon={true}
```
| Type     | Default  |
| -------- | -------- |
| bool     | true     |

### `ArrowUpIconComponent`
Changes the arrow-up icon.

```jsx
ArrowUpIconComponent={({style}) => <MyArrowUpIcon style={style} />}
```
| Type     |
| -------- |
| function |

### `ArrowDownIconComponent`
Changes the arrow-down icon.

```jsx
ArrowDownIconComponent={({style}) => <MyArrowDownIcon style={style} />}
```
| Type     |
| -------- |
| function |

### `TickIconComponent`
Changes the tick icon.

```jsx
TickIconComponent={({style}) => <MyTickIcon style={style} />}
```
| Type     |
| -------- |
| function |

### `CloseIconComponent`
Changes the close icon.

```jsx
CloseIconComponent={({style}) => <MyCloseIcon style={style} />}
```
| Type     |
| -------- |
| function |

## Styling
### `arrowIconStyle`
```jsx
arrowIconStyle={{
  width: 20,
  height: 20
}}
```

### `tickIconStyle`
```jsx
tickIconStyle={{
  width: 20,
  height: 20
}}
```

### `closeIconStyle`
```jsx
closeIconStyle={{
  width: 30,
  height: 30
}}
```

### `iconContainerStyle`
```jsx
iconContainerStyle={{
  marginRight: 10
}}
```

### `arrowIconContainerStyle`
```jsx
iconContainerStyle={{
  marginRight: 10
}}
```

### `tickIconContainerStyle`
```jsx
iconContainerStyle={{
  marginRight: 10
}}
```

### `closeIconContainerStyle`
```jsx
iconContainerStyle={{
  marginRight: 10
}}
```
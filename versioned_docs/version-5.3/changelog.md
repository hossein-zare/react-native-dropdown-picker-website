---
id: changelog
title: Changelog
---

## Features
+ Added [`testID`](https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/next/usage#testid) prop. [#454](https://github.com/hossein-zare/react-native-dropdown-picker/pull/454) ([@salopeklm](https://github.com/salopeklm))
+ Added Russian translation. [#457](https://github.com/hossein-zare/react-native-dropdown-picker/pull/457) ([@Blizzardnya](https://github.com/Blizzardnya))
+ Added Spanish translation. [#461](https://github.com/hossein-zare/react-native-dropdown-picker/pull/461) ([@Techie-Pi](https://github.com/Techie-Pi))
+ Added [`closeOnBackPressed`](https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/next/advanced/list-and-items#closeonbackpressed) prop.
+ Added [`onSelectItem`](https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/next/usage#onselectitem) prop.

## Breaking changes
#### Strict types for single and multiple items
+ fix: union type improvements. [#475](https://github.com/hossein-zare/react-native-dropdown-picker/pull/478) ([@Hless](https://github.com/Hless))

```ts
interface DropDownPickerSingleProps {
    multiple?: false;
    onChangeValue?: (value: ValueType | null) => void;
    onSelectItem?: (item: ItemType) => void;
    setValue: Dispatch<SetStateAction<ValueType | null>>;
    value: ValueType | null;
}

interface DropDownPickerMultipleProps {
    multiple: true;
    onChangeValue?: (value: ValueType[] | null) => void;
    onSelectItem?: (items: ItemType[]) => void;
    setValue: Dispatch<SetStateAction<ValueType[] | null>>;
    value: ValueType[] | null;
}
```
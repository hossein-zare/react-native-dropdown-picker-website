---
id: localization
title: Localization
---

## Change the language
You can change the language of your item picker.
+ `EN` English
+ `AR` Arabic
+ `FA` Farsi
+ `TR` Turkish

```jsx
language="EN"
```

You can also change the default language globally.

```jsx
DropDownPicker.setLanguage("EN");
```

## Translations
### Change the translation
+ `PLACEHOLDER`
+ `SEARCH_PLACEHOLDER`
+ `SELECTED_ITEMS_COUNT_TEXT`  
  `{count}` *shows the number of selected items.*
+ `NOTHING_TO_SHOW`

```jsx
translation={{
  PLACEHOLDER: "Sélectionnez un élément"
}}
```

### Add a new Translation
You are able to add a new translation to the package.

```jsx
DropDownPicker.addTranslation("FR", {
  PLACEHOLDER: "Sélectionnez un élément",
  SEARCH_PLACEHOLDER: "Tapez quelque chose...",
  SELECTED_ITEMS_COUNT_TEXT: "{count} éléments ont été sélectionnés",
  NOTHING_TO_SHOW: "Il n'y a rien à montrer!"
});

// Set as default
DropDownPicker.setLanguage("FR");
```

### Modify an existing translation
```jsx
DropDownPicker.modifyTranslation("FR", {
  PLACEHOLDER: "Sélectionnez un élément..."
});
```

### RTL
Makes the component right to left.
```jsx
rtl={true}
```
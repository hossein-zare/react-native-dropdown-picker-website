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
+ `RU` Russian
+ `ES` Spanish
+ `ID` Indonesian
+ `IT` Italian

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
  SELECTED_ITEMS_COUNT_TEXT: "{count} éléments ont été sélectionnés", // See below for advanced options
  NOTHING_TO_SHOW: "Il n'y a rien à montrer!"
});

// Set as default
DropDownPicker.setLanguage("FR");
```

### Advanced `SELECTED_ITEMS_COUNT_TEXT`
Some languages, such as Russian and Italian don't have a single plural rule, So you may want to conditionate your translation as follows:
```jsx
DropDownPicker.addTranslation("IT", {
  ...

  SELECTED_ITEMS_COUNT_TEXT: {
      1: 'Un elemento è stato selezionato',
      // Feel free to add more
      n: '{count} elementi sono stati selezionati'
  },
});
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
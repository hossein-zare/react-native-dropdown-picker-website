---
id: close-other-pickers
title: Close other pickers
---

As a rule, all other pickers should be closed when another picker opens.  
In the following example, two state variables are defined for country and city pickers. When the country picker opens, the city picker closes, and the same happens inside the `onOpen` callback of the city picker.

```jsx
function App() {
  const [countryOpen, setCountryOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);

  const onCountryOpen = useCallback(() => {
    setCityCountry(false);
  }, []);

  const onCityOpen = useCallback(() => {
    setCountryOpen(false);
  }, []);

  return (
    // Country
    <DropDownPicker
      open={countryOpen}
      onOpen={onCountryOpen}
      ...
    />

    // City
    <DropDownPicker
      open={cityOpen}
      onOpen={onCityOpen}
      ...
    />
  );
}
```
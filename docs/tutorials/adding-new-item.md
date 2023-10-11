Example code for adding a new item/option to the list of items/options, which the user selects from. 
```javascript
const ExampleScreen = () => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null); 
	const [items, setItems] = useState([
		{label: "North America", value: "North America"},
		{label: "Europe", value: "Europe"},
	]);
	
	return (
	<DropDownPicker
		open={open} 			
		value={value} 			
		items={items}			
		searchable={true}
		addCustomItem={true} 
		setItems={setItems}
		setValue={setValue}
		setOpen={setOpen}			
	/>
	);	
}; 
```

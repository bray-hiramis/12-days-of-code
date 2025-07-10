const filterInput = document.getElementById('filter-input');
const li = document.querySelectorAll('li');

filterInput.addEventListener('input', function() {
   const searchItem = filterInput.value.toLowerCase().trim();
   for (let item of li) {
      let itemText = item.textContent.toLowerCase();
      
      if (itemText.includes(searchItem)) {
         item.style.display = 'block';
      } else {
         item.style.display = 'none';
      };
   };
});


















































/* `document.getElementById()`

- `element.addEventListener('input', function)`

- `inputElement.value`

- `document.querySelectorAll()` (to get all `<li>` elements)

- `element.textContent` (to get the text of an `<li>`)

- `string.includes()` or `string.indexOf()` (for checking if text contains substring)

- `element.style.display = 'none'` / `element.style.display = 'block'` */

// OLD CODE

// filterInput.value = '';

/* for (let list of li) {
   let contain = list.textContent.toUpperCase();
   console.log(contain);
   let result = contain.includes("apple".toUpperCase());
   console.log(result);
}; */

/* function filter(input) {
   for (let item of li) {
      let contain = item.textContent;
      let result = contain.includes(input.value);
      console.log(result);
   };
}; */
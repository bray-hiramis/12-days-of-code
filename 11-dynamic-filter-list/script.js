// Dynamic Filter List

const filterInput = document.getElementById('filter-input');
const li = document.querySelectorAll('li');

function filterText(input) {
   const searchItem = input.toLowerCase().trim(); // making the text-input case insensitive
   for (let item of li) {
      let itemText = item.textContent.toLowerCase();

      if (itemText.includes(searchItem)) { // if list-item includes/contains the text-input(input parameter)
         item.style.display = 'block';
      } else {
         item.style.display = 'none';
      };
   };
};

filterInput.addEventListener('input', function() {
   filterText(filterInput.value);
});
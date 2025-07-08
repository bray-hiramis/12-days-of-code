const display = document.getElementById('display');
const btn = document.getElementById('buttons');

display.value = '';

btn.addEventListener('click', (event) => {
   let btnText = event.target.textContent;
   console.log(btnText);
   
   if (event.target.tagName === 'BUTTON' && btnText) {
      if (btnText === '=') {
         try {
            let expression = display.value;
            let result = eval(expression);
            display.value = result;
         }
         catch (error) {
            console.log("Error evaluating expression", error);
            display.value = 'Error!';
         };
      } else if (btnText === 'c'.toUpperCase()) {
         display.value = '';
      } else {
         let currentDisplayContent = display.value;
         let newDisplayContent = currentDisplayContent + btnText;
         console.log(newDisplayContent);
         display.value = newDisplayContent;
      };
   };
});
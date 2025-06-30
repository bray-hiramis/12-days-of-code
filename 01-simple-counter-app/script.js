let counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset');

let count = 0;

function updateCounter() {
   counterDisplay.textContent = count;

   if (count < 0) {
      counterDisplay.classList.add('negative');
   } else {
      counterDisplay.classList.remove('negative');
   };

};

incrementBtn.addEventListener('click', function() {
   count++;
   updateCounter();
});

decrementBtn.addEventListener('click', function() {
   count--;
   updateCounter();
});

resetBtn.addEventListener('click', function() {
   count = 0;
   updateCounter();
});








// My initial Approach
/* const increment = () => {
   let counter = counterDisplay.textContent++;
   return counter;
};

incrementBtn.addEventListener('click', () => {
   increment();
});

const decrement = () => {
   let counter = counterDisplay.textContent--;
   return counter;
};

decrementBtn.addEventListener('click', () => {
   decrement();
   if (counterDisplay.textContent < 0) {
      counterDisplay.style.color = "red";
   }
});

resetBtn.addEventListener('click', () => {
   counterDisplay.textContent = 0;
   counterDisplay.style.color = '#f2f2f2';
}); */
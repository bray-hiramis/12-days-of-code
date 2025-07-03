const colors = document.querySelectorAll('[data-color]');
const body = document.body;

document.addEventListener('DOMContentLoaded', () => {
   body.style.fontFamily = `"Open Sans", sans-serif`;
   body.style.background = 'linear-gradient(234deg,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)';
   body.style.transition = 'all 0.4s ease';
   body.style.display = 'flex';
   body.style.justifyContent = 'center';
   body.style.alignItems = 'center';
   body.style.height = '100vh';
});

for (let color of colors) {
   color.addEventListener('click', function() {
      if (color.dataset.color === 'red') {
         body.style.background = 'red';
      } else if (color.dataset.color === 'blue') {
         body.style.background = 'blue';
      } else if (color.dataset.color === 'green') {
         body.style.background = 'green';
      } else if (color.dataset.color === 'yellow') {
         body.style.background = 'yellow';
      } else if (color.dataset.color === 'random-btn') {
         const hexNumber = '0123456789ABCDEF';
         let hexSymbol = '#';
         for (let i = 0; i < 6; i++) {
            const randomColor = hexNumber[Math.floor(Math.random() * 16)];
            hexSymbol = hexSymbol + randomColor;
            body.style.background = hexSymbol;
         };
      } else {
         body.style.background = 'linear-gradient(234deg,rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)';
      };
   });
};
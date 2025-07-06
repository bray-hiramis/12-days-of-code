const accordionHeader = document.querySelectorAll('.accordion-header');
const accordionContent = document.querySelectorAll('.accordion-content');

for (let content of accordionHeader) {
   content.addEventListener('click', (e) => {
      for (let otherContent of accordionContent) {
            if (otherContent !== content.nextElementSibling) {
               otherContent.classList.remove('active');
               otherContent.style.maxHeight = null;
            };
         };

      if (e.target === content) {
         content.nextElementSibling.classList.toggle('active');
         if (content.nextElementSibling.style.maxHeight) {
            content.nextElementSibling.style.maxHeight = null;
         } else {
            content.nextElementSibling.style.maxHeight = content.nextElementSibling.scrollHeight + '1px'
         };
      };
   });
};
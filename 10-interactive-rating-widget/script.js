const stars = document.querySelectorAll('.star');
const rating = document.getElementById('selected-rating');

let currentRating = 0;

function updateStarHighlight(valueToHighLight) {
   stars.forEach(function(star) {
      const starValue = parseInt(star.dataset.value);

      if (starValue <= valueToHighLight) {
         star.classList.add('hovered');
      } else {
         star.classList.remove('hovered');
      };
   });
};

stars.forEach(function(star) {
   star.addEventListener('mouseover', function() {
      const hoveredValue = parseInt(this.dataset.value);
      updateStarHighlight(hoveredValue);
   });

   star.addEventListener('mouseout', function() {
      updateStarHighlight(currentRating);
   });

   star.addEventListener('click', function() {
      const clickedValue = parseInt(this.dataset.value);

      if (clickedValue === currentRating) {
         currentRating = 0;
      } else {
         currentRating = clickedValue;
      };

      updateStarHighlight(currentRating);

      if (rating) {
         if (currentRating > 0) {
            rating.textContent = `${currentRating}`;
         } else {
            rating.textContent = `No rating selected`;
         };
      };
   })
});

updateStarHighlight(currentRating);
if (rating) {
   rating.textContent = `No rating selected`;
};


const clock = document.getElementById('clock');
const dayTime = document.getElementById('daytime');
const date = document.getElementById('date');

let is24HourFormat = true;

const updateClock = () => {
   const now = new Date();
   
   let hours = now.getHours();
   let minutes = now.getMinutes();
   let seconds = now.getSeconds();
   let dateToday = now.toLocaleDateString();

   let amPm = '';
   let displayHours = hours;
   
   if (!is24HourFormat) {
      if (hours >= 12) {
         amPm = 'PM';
      } else {
         amPm = 'AM';
      };

      displayHours = hours % 12;
      if (displayHours === 0) {
         displayHours = 12;
      };
   };

   displayHours = String(displayHours).padStart(2, '0');
   minutes = String(minutes).padStart(2, '0');
   seconds = String(seconds).padStart(2, '0');


   let timeString = '';

   if (is24HourFormat) {
      timeString = `${displayHours}:${minutes}:${seconds}`;
   } else {
      timeString = `${displayHours}:${minutes}:${seconds} ${amPm}`;
   };

   clock.textContent = timeString;
   date.textContent = dateToday;
};

dayTime.addEventListener('click', () => {
   is24HourFormat = !is24HourFormat;
   updateClock();
   dayTime.textContent = is24HourFormat ? '12hr' : '24hr';
});

updateClock();

setInterval(updateClock, 1000);
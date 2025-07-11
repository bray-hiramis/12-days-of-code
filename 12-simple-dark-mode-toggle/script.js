const toggleBtn = document.getElementById('theme-toggle');
const contentText = document.querySelector('.content');
const body = document.body;

// check localStorage theme on page load
const theme = localStorage.getItem('theme'); // localStorage.getItem(key)
if (theme === 'dark') {
   body.classList.toggle('dark-mode');
   toggleBtn.innerHTML = 'Toggle <span class="theme-text">Light</span> Mode';
};

function isToggled(content) {
   content.classList.toggle('dark-mode');
};

toggleBtn.addEventListener('click', function() {
   isToggled(body);
   if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark'); // localStorage.setItem(key, value)
      toggleBtn.innerHTML = 'Toggle <span class="theme-text">Light</span> Mode';
   } else {
      localStorage.setItem('theme', 'light');
      toggleBtn.innerHTML = 'Toggle <span class="theme-text">Dark</span> Mode';
   };
});
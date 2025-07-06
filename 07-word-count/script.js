const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const wordCount = document.getElementById('word-count');
const maxChar = 200;


const count = (words) => {
   const char = words.value.length;
   charCount.textContent = char;
   const splitWords = words.value.split(" ");
   const filterWords = splitWords.filter((word) => word !== "");
   wordCount.textContent = filterWords.length;

   if (char >= maxChar) {
      const sliceChar = words.value.slice(0, maxChar - 1);
      words.value = sliceChar;
      charCount.style.color = "red";
   } else {
      charCount.style.color = "black";
   };
};

textInput.addEventListener('input', () => {
   count(textInput);
});
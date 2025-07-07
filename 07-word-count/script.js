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
   
   // Code block to limit the character count to 200 and the word count based on the max-char 200
   if (char >= maxChar) {
      const sliceChar = words.value.slice(0, maxChar); // slice from index 0 to 200
      words.value = sliceChar; // limits the input to 200
      charCount.textContent = sliceChar.length; // shows the number of characters with max 200

      // stops the word counting when the character count reached 200
      wordCount.textContent = sliceChar.split(" ").filter((word) => word !== "").length;

      charCount.style.color = "red";
      wordCount.style.color = "red";
   } else {
      charCount.style.color = "black";
      wordCount.style.color = "black";
   };
};

textInput.addEventListener('input', () => {
   count(textInput);
});
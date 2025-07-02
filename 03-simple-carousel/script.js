const imgArr = [
   "https://images.pexels.com/photos/12798325/pexels-photo-12798325.jpeg",
   "https://images.pexels.com/photos/3225519/pexels-photo-3225519.jpeg",
   "https://images.pexels.com/photos/12792288/pexels-photo-12792288.jpeg",
   "https://images.pexels.com/photos/12783894/pexels-photo-12783894.jpeg",
   "https://images.pexels.com/photos/12762122/pexels-photo-12762122.jpeg"
];

const currentImg = document.getElementById('current-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let slideIndex = 0;

const carousel = (n) => {

   slideIndex = (slideIndex+imgArr.length+n)%imgArr.length;
   currentImg.src = imgArr[slideIndex];
   
};

nextBtn.addEventListener('click', () => {
   carousel(1);
});

prevBtn.addEventListener('click', () => {
   carousel(-1);
});

document.addEventListener('DOMContentLoaded', () => {
   carousel(0);
});
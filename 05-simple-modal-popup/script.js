const openModal = document.getElementById('open-modal-btn');
const closeModal = document.getElementById('close-modal-btn');
const modalOverlay = document.getElementById('modal-overlay');

openModal.addEventListener('click', () => {
   modalOverlay.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
   modalOverlay.style.display = 'none';
});

modalOverlay.addEventListener('click', (e) => {
   if (e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
   }
});
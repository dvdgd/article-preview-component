const button = document.querySelector('button');
const shareContainer = document.querySelector('.share-container');

button.addEventListener('click', () => {
  console.log('button clicked');
  shareContainer.classList.toggle('active');
});
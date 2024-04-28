document.querySelector('button').addEventListener('click', () => {
  const button = document.querySelector('button');
  const shareContainer = document.querySelector('.share-container');
  
  shareContainer.classList.toggle('active');
  button.classList.toggle('active');
});

// handle click outside of share container to close it
document.addEventListener('click', (e) => {
  const shareContainer = document.querySelector('.share-container');
  const button = document.querySelector('button');
  
  if (!shareContainer.contains(e.target) && !button.contains(e.target)) {
    shareContainer.classList.remove('active');
    button.classList.remove('active');
  }
});

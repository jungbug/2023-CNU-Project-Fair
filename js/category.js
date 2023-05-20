const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
previousButton.addEventListener('click', () => {
window.location.href = 'index.html';
});

nextButton.addEventListener('click', () => {
  window.location.href = 'search.html';
});
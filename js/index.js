const imgs = document.querySelectorAll('img');

for (let i = 1; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function () {
    if (imgs[i].classList.contains('active-img')) {
      imgs[i].classList.remove('active-img');
    }
    else {
      imgs[i].classList.add('active-img');
    }
  })
};

const nextButton = document.getElementById('next-button');
  nextButton.addEventListener('click', () => {
window.location.href = 'category.html';
});
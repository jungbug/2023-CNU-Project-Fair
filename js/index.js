// const imgs = document.querySelectorAll('img');
const imgs = document.querySelectorAll('.img');
const imgs1 = document.querySelectorAll('.img1');
const nextButton = document.getElementById('next-button');
const nextButton2 = document.getElementById('next-button2');
const previousButton2 = document.getElementById('previous-button2');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

let selectIndex = new Set();

let selectIndex2 = new Set();

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function () {
    if (imgs[i].classList.contains('active-img')) {
      imgs[i].classList.remove('active-img');
      selectIndex.delete(imgs[i].alt);
    }
    else {
      imgs[i].classList.add('active-img');
      selectIndex.add(imgs[i].alt);
    }
  })
};

nextButton.addEventListener('click', () => {
  if (selectIndex.size > 0) {
    page1.classList.add("display-none");
    page2.classList.remove("display-none");
  } else {
    alert("한개 이상의 학생회를 선택해주세요.")
  }
});

for (let i = 0; i < imgs1.length; i++) {
  imgs1[i].addEventListener('click', function () {
    if (imgs1[i].classList.contains('active-img')) {
      imgs1[i].classList.remove('active-img');
      selectIndex2.delete(imgs1[i].alt);
    }
    else {
      imgs1[i].classList.add('active-img');
      selectIndex2.add(imgs1[i].alt);
    }
  })
}

nextButton2.addEventListener('click', () => {
  if (selectIndex2.size > 0) {
    page2.classList.add("display-none");
    page3.classList.remove("display-none");
  } else {
    alert("한개 이상의 카테고리를 선택해주세요.")
  }
});

previousButton2.addEventListener('click', () => {
  page2.classList.add("display-none");
  page1.classList.remove("display-none");
});

const searchInput = document.getElementById("search-input");
const listContainer = document.getElementById("list-container");
const listItemElements = listContainer.getElementsByClassName("list-item");

searchInput.addEventListener("input", function (event) {
  const searchTerm = event.target.value.toLowerCase();

  for (let i = 0; i < listItemElements.length; i++) {
    const listItem = listItemElements[i];
    const listItemText = listItem.textContent.toLowerCase();

    if (listItemText.includes(searchTerm)) {
      listItem.classList.remove("display-none");
    } else {
      listItem.classList.add("display-none");
    }
  }
});


const previousButton3 = document.getElementById('previous-button3');
previousButton3.addEventListener('click', () => {
  page3.classList.add("display-none");
  page2.classList.remove("display-none");
});


const imgs = document.querySelectorAll('.img');
const imgs1 = document.querySelectorAll('.img1');
const nextButton = document.getElementById('next-button');
const nextButton2 = document.getElementById('next-button2');
const previousButton2 = document.getElementById('previous-button2');
const startButton = document.getElementById("previous-button3");
const listDiv = document.getElementById('list-div');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

let selectIndex = new Set();

let selectIndex2 = new Set();

import {동행, 이온, face, cpr, 라온, 이룸, 함성, 오름, 진, 소솜, 봄, 청연, 채움, 어푸, 선, 한별} from "./service.js";

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function () {
    if (imgs[i].classList.contains('active-img')) {
      imgs[i].classList.remove('active-img');
      selectIndex.delete(imgs[i].alt);
    }
    else {
      imgs[i].classList.add('active-img');
      selectIndex.add(imgs[i].alt);
      console.log(selectIndex)
    }
  })
};

nextButton.addEventListener('click', () => {
  if (selectIndex.size > 0) {
    page1.classList.add("display-none");
    page2.classList.remove("display-none");
  } else {
    alert("1개 이상의 학생회를 선택해주세요.")
  }
});

startButton.addEventListener("click", function() {
  location.reload();
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
      console.log(selectIndex2)
    }
  })
}

nextButton2.addEventListener('click', () => {
  if (selectIndex2.size > 0) {
    page2.classList.add("display-none");
    page3.classList.remove("display-none");
    lists();
  } else {
    alert("1개 이상의 카테고리를 선택해주세요.")
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

const lists = () => {
  selectIndex.forEach((value) => {
    selectIndex2.forEach((value2) => {
      if (value === "동행") {
        for(let [key,value1] of Object.entries(동행)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "이온") {
        for(let [key,value1] of Object.entries(이온)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "face") {
        for(let [key,value1] of Object.entries(face)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "cpr") {
        for(let [key,value1] of Object.entries(cpr)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "라온") {
        for(let [key,value1] of Object.entries(라온)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "이룸") {
        for(let [key,value1] of Object.entries(이룸)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "함성") {
        for(let [key,value1] of Object.entries(함성)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "오름") {
        for(let [key,value1] of Object.entries(오름)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "진") {
        for(let [key,value1] of Object.entries(진)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "소솜") {
        for(let [key,value1] of Object.entries(소솜)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "봄") {
        for(let [key,value1] of Object.entries(봄)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "청연") {
        for(let [key,value1] of Object.entries(청연)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "채움") {
        for(let [key,value1] of Object.entries(채움)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "어푸") {
        for(let [key,value1] of Object.entries(어푸)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "선") {
        for(let [key,value1] of Object.entries(선)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
      if (value === "한별") {
        for(let [key,value1] of Object.entries(한별)){
          if(value1 == value2){
            const div = document.createElement('div');
            div.classList.add("list-item");
            div.innerHTML = key;
            listDiv.appendChild(div);
          }
        }
      }
    })
  })
}
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
let searchImgDIV = null

searchInput.addEventListener("input", function (event) {
  const searchTerm = event.target.value.toLowerCase();
  searchImgDIV = document.querySelectorAll(".search-img-div");

  for (let i = 0; i < listItemElements.length; i++) {
    const listItem = listItemElements[i];
    const listItemText = listItem.textContent.toLowerCase();
    if (listItemText.includes(searchTerm)) {
      searchImgDIV[i].classList.remove("display-none");
    } else {
      searchImgDIV[i].classList.add("display-none");
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
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/50491038/73fa0684-dbb0-4547-9f4e-cc06a1f07920"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            // div.style.display = "flex";
            // div.style.justifyContent = "flex-start";
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "이온") {
        for(let [key,value1] of Object.entries(이온)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/67012995/2c7f8edf-843b-40f0-88f6-1e65207450c6"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "face") {
        for(let [key,value1] of Object.entries(face)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/67012995/996bac57-115e-4abb-a4a0-62a3d391d867"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "cpr") {
        for(let [key,value1] of Object.entries(cpr)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/50491038/9331f81c-1af7-40b8-9ead-022b3cf6e3ed"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "라온") {
        for(let [key,value1] of Object.entries(라온)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/50491038/17ee1e73-033d-4b58-9b03-953332df5acb"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "이룸") {
        for(let [key,value1] of Object.entries(이룸)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/50491038/ce2a45de-7bc0-48ff-8000-434311f4a99a"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "함성") {
        for(let [key,value1] of Object.entries(함성)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/50491038/7a080827-0fcf-495a-93f6-e5937f2ed0f5"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "오름") {
        for(let [key,value1] of Object.entries(오름)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/50491038/52cd1b14-3e2f-4850-b454-01af3712e76b"
            img.style.width = "5%";
            img.style.height = "5%";
            // div.style.display = "flex";
            // div.style.justifyContent = "flex-start";
            div.classList.add("search-img-div");
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "진") {
        for(let [key,value1] of Object.entries(진)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/50491038/b45dc37f-fe23-423b-8711-5aeeffc5f3e0"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "소솜") {
        for(let [key,value1] of Object.entries(소솜)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/50491038/1b682ca3-4991-45a6-b655-691ea2ba465e"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "봄") {
        for(let [key,value1] of Object.entries(봄)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/50491038/1bf489b9-1fcd-41d5-a9d7-2c31700bb86c"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "청연") {
        for(let [key,value1] of Object.entries(청연)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/50491038/f8303913-23d0-40ee-92bc-f5e112d9418b"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "채움") {
        for(let [key,value1] of Object.entries(채움)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/50491038/ec620770-7821-4e65-9a75-4cbf322086f9"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "어푸") {
        for(let [key,value1] of Object.entries(어푸)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/50491038/cc066bbf-89f7-40e0-a252-e389b233a7f1"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "선") {
        for(let [key,value1] of Object.entries(선)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/50491038/a846f1ec-2f63-4dca-897f-95cb10f541f6"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
      if (value === "한별") {
        for(let [key,value1] of Object.entries(한별)){
          if(value1 == value2){
            const div = document.createElement('div');
            const img = document.createElement("img");
            const div1 = document.createElement("div");
            img.src = "https://github.com/jungbug/2023-CNU-Project-Fair/assets/50491038/cabe1648-f50f-4c1f-acb1-d3af490c0dc3"
            img.style.width = "5%";
            img.style.height = "5%";
            div.classList.add("search-img-div")
            div1.classList.add("list-item");
            div1.innerHTML = key;
            div.appendChild(img);
            div.appendChild(div1);
            listDiv.append(div);
          }
        }
      }
    })
  })
}
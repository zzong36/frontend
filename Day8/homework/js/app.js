import { tarotCard } from "./tarot.js";

const root = document.querySelector("#root");

// 테이블에 이미지를 담아서 정렬
function loadImage() {
    let arr = tarotCard();
    let str = `<table width="700px"><tr><td>${arr[0]}</td><td>${arr[1]}</td><td>${arr[2]}</td></tr><tr><td>PAST</td><td>PRESENT</td><td>FUTURE</td></tr></table>`;
    return str;
};


root.innerHTML=loadImage();

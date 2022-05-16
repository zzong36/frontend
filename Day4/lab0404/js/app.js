/*
JavaScript
- 웹에서 동적으로 데이터나 DOM을 조작하기 위한 언어
- 웹에서 사용하는 클라이언트(WebBrowser) 및 서버(Node.js)용 언어

JavaScript
- 현재는 JavaScript Library나 Framework과 함께 사용이 된다.
- Angular(Goole) - React.js(Meta, Facebook) - Vue.js(EvanYou) - Typescript - ? Svelte
- Jquery : Java - Spring framework와 역할 비슷, JavaScript가 해야 할 많은 내용을 간단하게 사용할 수 있도록 구현된 Library
*/

/*
JavaScript에서 일반적으로 말하는 객체
JavaScript에서 중요한 것은 객체를 구성하는 모양
아래와 같은 형태의 객체는 가장 일반적이기도 하지만 이를 literal(값) 형태의 객체
*/

// let coffee={
//     type: "라떼",
//     price: 5500
// }
// console.log(coffee);

// 값을 변수에 대입해서 출력해보는 방법
// let coffeeType = "라떼";
// let coffeePrice = 5500;
// console.log(coffeeType);
// console.log(coffeePrice);

let coffee = {
    type: "Americano",
    price: 4000,
}

// 리터럴 객체에서 값을 가져오는 방법
// console.log(coffee.type);
// console.log(coffee.price);

// console.log(coffee["type"]);
// console.log(coffee["price"]);

// 리터럴 객체에 없는 속성을 가져올 경우
// console.log(coffee.name) // undefined 값을 가져온다.

// 그냥 빈 객체를 선언 할 경우 
// let obj = {};
// console.log(obj);

// 변수가 객체를 선언할 때 사용하는 선언자
// let : 값을 다시 할당해도 되고, {} 안에서만 값이 유용하다.
//      local variable
// const : 변하지 않는 정수 값을 정의할 때 사용한다.
//        const PI = 3.141592, const Local_URL = "https://www.daum.net";


const coffee1={
    type: "capuccino",
    price: 6000
}

// javascript를 사용할 때 마지막 문장에는 ';'를 붙여준다.
// JavaScript에서 ';'를 사용하지 않고 쓰기도 하는데 그럴 경우에는 맨 마지막 문장에서 엔터를 쳐서 작성하면 된다.
// 그러면 다음 문장으로 인식한다.

// 기본적으로 성능 때문에 javaScript의 용량을 최소로 줄이는 경우가 발생할 수 있기 때문에 마지막에는 ';'를 붙이는 것이 좋다.
console.log("하이!")
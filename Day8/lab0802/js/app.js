/**
 * 생성자
 */

// const card = {};
// card.suit = "Heart";
// card.rank = "A";
// console.log(card);

// s
// class Card3{
//     constructor(suit, rank){
//         this.suit = suit;
//         this.rank = rank;
//     }
// }

// const card3 = new Card3("Diamond", "2");
// console.log(card3);

/**
 * typeof 연산자
 * - 타입을 확인해서 데이터 타입을 텍스트 형태로 알려줌
 * 객체: object
 * 
 */

// let s = "밥먹고 졸리다."
// console.log(typeof s);
// let s2 = new Array();
// console.log(typeof s2);
// let s3 = new Date();
// console.log(s3);
// let s4 = 20;
// console.log(typeof s4);

/**
 * instanceof 연산자
 * instanceof 연산자는 지정한 객체의 프로토타입 제안에 지정한 생성자의 프로토타입 객체가 포함되어 있는지 확인한다.
 */

// function Func(){};
//     const obj = new Func();

// console.log(obj instanceof Func); // true
// console.log(obj instanceof Object); // true
// console.log(obj instanceof Date); // false
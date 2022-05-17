/**
 * 명명법
 * - 관습적으로 이렇게 사용하기로 약속을 했기 때문에
 * - 회사마다 다를 수 있음, 프로젝트마다 다를 수 있음
 * 
 * 카멜(camel): 소 - 대 - 소            ex) let coffeeType, makeCoffee(){}
 *            함수, 변수, 메소드
 * 파스칼(pascal): 대 - 대 - 소         ex) class UserInfo{}, function Person(){}
 *               생성자, 클래스
 * lower(전체소문자) : 전체를 소문자로   ex) let, const 예약어, 키워드 
 * upper(전체대문자) : 전체를 대문자로   ex) const PI = 3.14; const PI = Math.Pi; 
 * 
 */

/**
 * 데이터 타입의 분류
 * 1) 기본타입(primitive type) : int, String, boolean, undefined, null, Symbol
 * 2) 참조타입(reference type/object type) : Object, primitive type이 아닌 것
 * 
 * 기본타입을 제외한 모든 타입은 참조(객체) 타입이다.
 * 
 * pass by value
 * assign by value
 * immutable
 * 
 * pass by reference
 * assign by reference
 * mutable
 * 
 */

/**  
 // 기본타입 pass by value
 let a = 10;
 let b = a; 
 b = 20
 console.log(a, b);
 
 // 참조타입 pass by reference
 let list = [1,2,3,4,5];
let list2 = list;
console.log("list=", list, " list2=", list2);
list2[2]=100;
console.log("list=",list, " list2=", list2)
*/

/**
 * undefined 값이 나오는 경우
 * - 값을 할당받지 못한 변수의 값
 * - 없는 객체의 property를 읽으려고 시도했을 때의 값
 * - 없는 배열의 요소를 읽으려고 시도햇을 때의 값
 * - 아무것도 반환하지 않는 함수가 반환하는 값
 * - 함수를 호출했을 대 전달받지 못한 인수의 값
 */

// console.log("하이") // 브라우저 콘솔에서 실행할 때 return값이 없으면 undefined 나옴

/**
 * 리터럴 객체의 프로퍼티 값 확인하기
 */

const coffee = {
    type: "Americano",
    price: 4000
};

console.log(coffee.price);
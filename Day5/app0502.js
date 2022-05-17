// var hoisting test(var 호이스팅)
// 어디에 선언하든 최상위로 끌여올려서 실행
console.log(testVar); //  undefined
testVar = 2;
var testVar; // 선언

console.log(testVar);


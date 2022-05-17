// var hoisting test(var 호이스팅)
// 어디에 선언하든 최상위로 끌여올려서 실행
// console.log(testVar); //  undefined
// testVar = 2;
// var testVar; // 선언(이 선언을 위에서 실행)

// console.log(testVar); // 2


/** 헷갈릴 수 있는 사항
 1. 아래에 선언되어 있지 않고 위에서 호출할 경우 오류 발생
 console.log(testVar3);
 testVar3=10;
 
 2. var은 선언되었으므로 undefined. 끌어는 올렸으나 값은 받아올 수 없음
 console.log(testVar4);
 testVar4 = 10;
 var testVar4;
 
 => var가 지랄맞기 때문에 let과 const를 사용
 */

 /**
  * 내부에 콘솔이 있는 경우에는 에러가 발생하지 않지만 밖에 있는 경우에는 에러가 발생한다.
  {
       let age = 20;
       console.log("inner: " + age);
  }

  console.log("outer: " + age);
  */

 {
     age2=30;
    var age2;
 }
 console.log(age2)

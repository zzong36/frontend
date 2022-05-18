// // arrow function(화살표 함수)
// // 브라우저에서 테스트할 수 있는 API이다.
// // setTimeout
// setTimeout(function(){
//     console.log("화살표 함수입니다.");
// },1000); // 1000은 1초 의미

// // // 이렇게 작성을 하면 function을 만들어야 하기 때문에 좀 더 간단하게 작성하는 방법
// setTimeout(()=>{
//     console.log("화살표")
// },1000);

// //  일반적인 함수
// const simpleFunc = function(){
//     console.log('simple function');
// }
// simpleFunc();

// // 화살표 함수는 anonymous 함수이다.
// const simpleFunc2 = () => console.log("simple2")
// simpleFunc2();

// //  argument가 있는 화살표 함수
// const add = (a,b) => a+b;
// console.log(add(1,2));
// const add1 = function(a,b){
//     return a+b;
// }
// console.log(add1(3,5));

// //default parameter
// // es6 추가
// function showMessage(message, from){
//     console.log(`${message} by ${from}`)
// }
// console.log(showMessage("안녕", "정우성"))

// if 문
/**
 if(조건식){
     조건식이 참일 경우 실행되는 부분
 } else{
     조건식이 거짓일 경우 실행되는 부분
 }
 
 if(조건식 A){
     조건식 A가 참일 경우 실행되는 부분
 } else if(조건식 B){
     조건식 B가 참일 경우 실행되는 부분
 } else{
     조건식 A와 B가 다 아닐 경우 실행
 }
 */

 /**
  반복문 for 문
  for(let i = 0; i < length; i++){
      i=0부터 length보다 하나 작을 때까지 반복 증가
  }

  for(let i = 0; i < length; i--){
      i=0부터 length보다 하나 작을 때까지 반복 감소
  }
  */

  /**
   while(조건식){
       조건식이 참일 경우에만 이 문장을 반복
   }
   */

   /**
    반복문  do ~ while()
    do{
        최소한 한 번은 이 부분 싫ㅇ
        조건식 만족하게 되면 계속 반복 실행
    }while(조건식);
    */

/**
Rest Parameter(가변향 함수 표현할 때 사용)
표현: ...args
Rest 파라미터는 배열 형태로 값을 전달
 */

// function printArr(...args){
//     for(let i = 0; i < args.length; i++){
//         console.log(args[i])
//     }
// // };

// printArr('javascript', 'java', 'spring');

// // for ...of 값이 있으면 쭉 뽑아낼
// function printArr(...args){
//     for(const arg of args){
//         console.log(arg)
//     }
// };

// printArr('javascript', 'java', 'spring');





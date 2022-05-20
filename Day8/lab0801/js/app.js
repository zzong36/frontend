/**
 * closure
 * - 함수가 정의될 대의 렉시컬 환경을 기억하는 함수(etc)
 * - 함수가 호출된 이후에도 메모리에 값이 존재해 외부에서 접근할 수 잇는 방법(나)
 * 
 * 용도
 * - 일반적으로 접근할 수 없는 것에 접근하는 효과
 * 변수를 은닉하여 지속성을 보장할 수 있다.
 * 자바스크립트의 모든 함수는 클로저를 정의할 수 있다.
 */

// // 일반적인 함수가 동작하는 방식
// // 한수가 실행한 이후에 함수에 있는 값들은 메모리에서 사라진다.
// function createCounterClosure(){
//     let count = 0;
//     return{
//         increase: function(){
//             count++;
//         },
//         getCount: function(){
//             return count;
//         }
//     }
// }

// const count1 = createCounterClosure();
// const count2 = createCounterClosure();

// count1.increase();
// count1.increase();
// console.log("counter1의 값: "+ count1.getCount());
// count2.increase();
// console.log("counter2의 값: " + count2.getCount());

// function generalFunc(){
//     let count = 0;
//     return count++; // 지역변수
// }

// console.log(generalFunc());
// console.log(generalFunc());

/**
 * Promise
 * - ES2015(es6)에서 비동기 처리를 하기 위해 Promise 객체를 소개함
 * - Promise는 객체로서 언젠가 완료될 일을 나타냄
 * - 완료되면 하나의 값을 결과로 반환하는데
 * - 정상적인 결과를 반환할 수도 있고(resolve)
 * - 실패한 결과를 반환할 수도 있다.(reject)
 */

/**
 * Promise 객체는 다음고 같은 세가지 상태를 가진다.
 * 1) 대기중(pending): 아직 결과가 없는 상태, 약속은 했지만 아직 약속에 대한 결과가 나오지 않은 상태
 * 2) 이행됨(Fulfilled): 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태. 이 때 결과로서 하나의 값이 전달 됨
 * 3) 거부됨(rejected): 비동기 처리가 실패한 상태. 약속이 거부되고 그 결과로 거절된 이유를 전달
 */

/**
 * Promise 객체는 두 가지의 메소드를 가진다.
 * 1) then(onFulfilled, onReject)
 * 약속이 완료되었을 때 호출될 함수를 정리
 * 이 때 첫번째 인자로 정리되는 함수는 약속이 성공적으로 이행되었을 때 호출
 * 두번째 인자로 전달된 함수는 거부되었을 때 호출
 * 두 전달 인자 함수들은 매개변수를 가지는데 각각의 결과가 매개변수를 통해 전달된다. 
 * 2) catch(onReject)
 * 약속이 거부됐을 때 호출될 함수(onReject)
 */

function promiseForHomework(mustDo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("doing homework~~~")
            if(mustDo){
                resolve({
                    result: 'homework-result'
                });
            } else{
                reject(new Error("Too lazy~!!"));
            }
        }, 2000);
    });
}
const promiseA = promiseForHomework(true);
// const promiseA = promiseForHomework(); // 이 경우 에러 발생
console.log("promiseA 출력완료!!");

const promiseB = promiseForHomework();
console.log("promiseB 출력완료!!");

promiseA.then(v => console.log(v));


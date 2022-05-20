/**
 * 예외처리
* try~catch finally throw new

try{
    예외가 발생할 수 있는 코드
} catch(exception){
    예외가 발생했을 때 처리하는 부분
} finally{
    try catch 안에 있는 내용이 다 실해외고 나서도 반드시 실행되는 부분
}

* 여러개의 예외가 발생했을 때 처리하는 방법
try{
    예외가 발생할 수 있는 코드
} catch(e){
   if(e instanceof TypeError){
       // TypeError 발생 시 처리할 내용을 작성    
   } else if(e instanceof ReferenceError){
       //ReferenceError 발생 시 처리할 내용 작성
   } else{
       // 그 밖에 예외 처리
   }
} finally{
    try catch 안에 있는 내용이 다 실해외고 나서도 반드시 실행되는 부분
}

 */

// function permutation(a){
//     try{
//         if(!(a instanceof Array)){
//             throw new Error(a+ "is not an array")
//         }
//     } catch(e){
//         console.log("배열 타입이 아닙니다." + e);
//     } finally{
//         console.log("여기는 반드시 실행되는 곳입니다.")
//     }
// }

// permutation("ABC")

// function permutation1(a){
  
//         if(!(a instanceof Array)){
//             throw new Error(a+ "is not an array")
//         }
// }

// function showPrint(){
//     try{
//         permutation1("ABC");
//     }catch(e){
//         console.log("배열이 아니에요." + e)
//     }
// }

// showPrint();

// es6에서 추가된 String 관련 메소드
// let str = "hello world ~~ ^^";
// let matchStr = "hello";

// // 시작이 matchStr과 같은 문자열이 있는가?
// console.log(str.startsWith(matchStr)); //true
// // 끝이 matchStr과 일치하는 문자열이 있는가?
// console.log(str.endsWith(matchStr)); //false
// // '^' 문자열이 포함되어 있는가?
// console.log(" include set ", str.includes("^")); //true


// // early return, early exit
// function updateCheck(user){
//     // 게임을 사용하는 유저의 프로그램 버전이 3보다 작으면 빠져나가게 된다.
//     if(user.version < 3){
//         return; // 함수를 종료하고 빠져나간다.
//     }
//     return;
// }

/**
 * async await 이해하기
 * async 함수는 es8(ecamscript 2017)에서 도입됨
 * async 함수는 함수 안에 await 구문과 함께 비동기 작업을 제어한다
 * await 키워드는 반드시 async 함수 안에서만 유효하다
 * 
 * async 함수의 동작방식
 * - 처음 async 함수가 호출되어 await 키워드가 없는 비동기 작업(Promise)이 실행되면 해당 비동기 함수는 이벤트 루프를 통해 비동기 작업을 처리한다.
 * - 그동안 async 함수는 이러한 비동기 작업이 완료될 때까지 일시 중지상태로 비동기작업(Promise)의 해결을 기다린다.
 * 이 작업이 완료되면 async 함수가 다시 실해오디고 함수 결과를 반환한다.
 * 
 * async 함수를 선언하는 방법
 * - async 함수 선언문(async function)과 표현식(async function expression)이 있다.
 * - 이 async 함수 선언문과 표현식은 함수에서 사용하는 선언문과 표현식과 같다.
 * - 다만, async 함수는 function 선언 앞에 async 키워드가 붙는다.
*/


function doJob(name, person){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(person.stamina > 50){
                resolve({
                    result: `${name} success`
                });
            }else{
                reject(new Error(`${name} failed`));
            }
        }, 1000);
    });
};

// doJob("김병관", {stamina:100});

const hj = {stamina: 30};
const execute = async function(){
    try{
        let v = await doJob("work", hj);
        console.log(v.result);
        v=await doJob("study", hj);
        console.log(v.result);
        v=await doJob("study", hj);
        console.log(v.result);
        v=await doJob("work", hj);
        console.log(v.result);
    } catch(e){
        console.log(e)
    }
}
execute();

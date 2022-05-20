// setTimeout(function(){
// console.log("하이~~~")
// },0);

// arrow function 

// this context of arrow function
// const myObj = {
//     runTimeout(){
//         // setTimeout은 일정시간 후에 특정코드, 함수를 의도적으로 지연한 뒤 실행하고 싶을 때 사용하는 함수
//         setTimeout(function(){
//             // true인 경우 지금 이 영역에서의 this는 window
//             console.log(this === window);
//         },2000);
//     }
// }

// myObj.runTimeout();

// const myObj = {
//     runTimeout(){
//         // setTimeout은 일정시간 후에 특정코드, 함수를 의도적으로 지연한 뒤 실행하고 싶을 때 사용하는 함수
//         setTimeout(function(){
//             // 현재영역에서 this는 window를 가리키고있기 대문에 window.printData()라는 function은 존재하지 않음
//             console.log(this === window);
//         },2000);
//     },

//     printData(){
//         console.log("print data 출력~~~!!");
//     }
// }

// myObj.runTimeout();

// const myObj = {
//     runTimeout(){
//         // setTimeout은 일정시간 후에 특정코드, 함수를 의도적으로 지연한 뒤 실행하고 싶을 때 사용하는 함수
//         setTimeout(function(){
//             this.printData();
//         }.bind(this),2000); //bind란 무엇일까?
//     },

//     printData(){
//         console.log("print data 출력~~~!!");
//     }
// }

// myObj.runTimeout();

// bind() 함수가 아닌 arrow function을 적용하더라도 동일한 결과 도출 가능. bind()를 생략한 상태에서도
// this가 context를 유지함 thus, arrow function은 context를 유지함
const myObj = {
    runTimeout(){
        // arrow function 적용해보자
        setTimeout(()=>{
            this.printData();
        },2000); //bind란 무엇일까?
    },

    printData(){
        console.log("print data 출력~~~!! arrow function");
    }
}

myObj.runTimeout();
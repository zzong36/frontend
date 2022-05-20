// const element = document.querySelector("p");
// const myObj = {
//     register(){
//         element.addEventListener("click", function(evt){
//             this.printData();
//         })
//     },
//     printData(){
//         console.log("clicked~!!");
//     }
// }

// myObj.register();

// 아까전에 사용했던 arrow function을 사용해봄

// 왜 실행 안 됨
const element = document.querySelector("p");
const myObj = {
    register(){
        element.addEventListener("click",(evt) =>{
            this.printData();
        });
    },
    printData(){
        console.log("clicked~!!");
    }
}

myObj.register();
// class People{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     show(){
//         console.log(`${this.name}은 ${this.age}살 입니다.`)
//     }
// }

// const people = new People("김병관", 20);
// people.show();

// // 간단하게 객체 생성 시 아래와 같이 값 설정 가능
// const obj = {
//     name : name,
//     age: age
// }

class Coffee{
    constructor(type, price){
        this.type = type;
        this.price = price;
    }

    get type(){
        return this.type;
    }
    
    set type(value){
        this.type = value;
    }
}

const coffee = new Coffee("라떼", 5000)
console.log(coffee.type)
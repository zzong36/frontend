// 하트(H), 클로버(C), 다이아몬드(D), 스페이드(S) 
let shape = ["H", "C", "D", "S"];
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, "T", "J", "Q", "K"];
let card = [];

for(let i = 0; i < shape.length; i++){
    for(let j = 0; j < number.length; j++){
        card.push(shape[i]+number[j])    
    }
}

console.log(card)

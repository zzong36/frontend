// ##javascript에서 값을 비교해보기 
// ## ==은 값만 같으면, === 값과 타입이 모두 같을때

// console.log(null==undefined); // true
// console.log(null===undefined); // false
// console.log(1=="1");           // true
// console.log("0xff"==255);      // true
// console.log(true==1);          // true
// console.log(true=="1");        // true
// console.log((new String("a")) == "a"); // true
// console.log((new Number(2)) == 2 );    // true
// console.log([2]==2);                  // true
// console.log(isNaN("NaN")); // true
// console.log(isNaN("NAN")); // true
// console.log(isNaN(NaN));   // true
// console.log(NaN===NaN);    // false
// console.log(null===undefined); // false
// console.log(1==="1");          // false
// console.log("0xff"===255);     // false
// console.log(true===1);         // false
// console.log(true==="1");       // false
// console.log((new String("a"))==="a"); // false
// console.log(new Number(2)===2);       // false
// console.log([2]===2);             

var news = [
    {
        "title":"sbs",
        "imgurl":"http://static.naver.net/newsstand/2017/0313/article_img/9054/173200/001.jpg",
        "newslist":[
             "[가보니] 가상 경주도 즐기고, 내 손으로 자동차도 만들고",
             "리캡차'가 사라진다.",
             "갤럭시S8’ 출시? ‘갤노트7’ 처리 계획부터 밝혀야",
             "블로코-삼성SDS, 블록체인 사업 ‘맞손’",
             "[블록체인 톺아보기] 퍼블릭 블록체인의 한계와 프라이빗 블록체인"
        ]
    },
    {
        "title":"mbc",
        "imgurl":"http://static.naver.net/newsstand/2017/0313/article_img/9033/220451/001.jpg",
        "newslist":[
             "Lorem ipsum dolor sit amet, consectetur adipisicin",
             "ipsum dolor sit amet, consectetur adipisicin",
             "dolor sit amet, consectetur adipisicin",
             "amet, consectetur adipisicin"
        ]
    }
];

// let[mbc1,mbc2] = news;
// console.log(mbc2);

let[,{title,imgurl,newslist}] = news;
console.log(title,imgurl,newslist);

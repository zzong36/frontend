export function tarotCard(){
    // 타로 카드 이미지명 배열에 담아 선언 총 22장의 카드
    let tarotCard=["death", "wheel", "empress", "hanged", "temper", "lover", "chariot", "hier", "sun", "moon", "world", "hermit", "magician", "tower", "high", "strength", "justice", "judgement", "emperor", "star", "fool", "devil"];

    // 각 타로 카드의 자리 수를 랜덤하게 바꿈(shuffle)
    let tmp = 0;
    let j = 0;

    for(let i = 0 ; i < tarotCard.length; i++){
        j=Math.floor((Math.random()*21))+1;
        tmp = tarotCard[i];
        tarotCard[i]=tarotCard[j];
        tarotCard[j]=tmp;
    };

    // innerHtml에 들어갈 문구를 for문을 이용해 선언
    let tarotLine=[];
    for(let i = 0; i < tarotCard.length;i++){
        tarotLine[i]=`<figure><img src="img/${tarotCard[i]}.jpg"></figure>\n`
    };
return tarotLine;

};
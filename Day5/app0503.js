/**
 * 명명법
 * - 관습적으로 이렇게 사용하기로 약속을 했기 때문에
 * - 회사마다 다를 수 있음, 프로젝트마다 다를 수 있음
 * 
 * 카멜(camel): 소 - 대 - 소            ex) let coffeeType, makeCoffee(){}
 *            함수, 변수, 메소드
 * 파스칼(pascal): 대 - 대 - 소         ex) class UserInfo{}, function Person(){}
 *               생성자, 클래스
 * lower(전체소문자) : 전체를 소문자로   ex) let, const 예약어, 키워드 
 * upper(전체대문자) : 전체를 대문자로   ex) const PI = 3.14; const PI = Math.Pi; const LOCAl_HOST = "https://www.daum.net"; const DRIVER = "jdbc.oracle.driver.OracleDriver" 
 * 
 */

/**
 * 데이터 타입의 분류
 * 1) 기본타입(primitive type) : int, String, boolean, undefined, null, Symbol
 * 2) 참조타입(reference type/object type) : Object, primitive type이 아닌 것
 * 
 * 기본타입을 제외한 모든 타입은 참조(객체) 타입이다.
 * 
 * pass by value
 * assign by value
 * immutable
 * 
 * pass by reference
 * assign by reference
 * mutable
 * 
 */

/**  
 // 기본타입 pass by value
 let a = 10;
 let b = a; 
 b = 20
 console.log(a, b);
 
 // 참조타입 pass by reference
 let list = [1,2,3,4,5];
let list2 = list;
console.log("list=", list, " list2=", list2);
list2[2]=100;
console.log("list=",list, " list2=", list2)
*/

/**
 * undefined 값이 나오는 경우
 * - 값을 할당받지 못한 변수의 값
 * - 없는 객체의 property를 읽으려고 시도했을 때의 값
 * - 없는 배열의 요소를 읽으려고 시도햇을 때의 값
 * - 아무것도 반환하지 않는 함수가 반환하는 값(WebBrowser에서 return값이 없기에 undefined라고 나옴)
 * - 함수를 호출했을 때 전달받지 못한 인수의 값
 */

// console.log("하이") // 브라우저 콘솔에서 실행할 때 return값이 없으면 undefined 나옴

/**
 * 리터럴 객체의 프로퍼티 값 확인하기
 */

/**
 const coffee = {
     type: "Americano",
     price: 4000
    };
    
    console.log(coffee.price);
    console.log(coffee.syrup); // 없는 속성 값 undefined
    coffee.syrup="설탕많이"; // 속성 추가
    console.log(coffee);
    console.log(coffee.syrup);
    
     delete coffee.price; // 속성 삭제
     console.log(coffee);
     
    
    console.log("price" in coffee); 
    console.log("type" in coffee); 
    
    //coffee 객체에는 없는 속성이나 js 최상위 객체인 Object에 있는 속성도 사용할 수 있기 때문에 true. js 모든 객체는 Object를 상속받음
    console.log("toString" in coffee); 
    */

    /**
     * 해당 객체에 속성이 ㅣㅆ는지 확인하는 ㅕㅇㄴ산자
     * JavaScript에서는 ""와 ''이 같다.
     */

    /**
     // 탬플릿 리터럴
     //``(역따옴표)로 묶은 문자열 의미?
     let strTemplate = `오늘도 벌써 3시간 밖에 안 남았다`;
     console.log(strTemplate);
     
     // 줄바꿈 표시해보기
     let strTemplate2 = `오늘도 벌써 3시간\n밖에 안 남았다`;
     console.log(strTemplate2);
     */

    // 보간 표현식
    /**
     * 템플릿 리터럴 안에 플레이스 홀더를 넣을 수 있다 (what is placeholder?)
     * 플레이스 홀더는 ${...}로 표시가 된다.
     * 플레이스 홀더: 실제 값을 나중에 넣기 위해 확보한 장소
     * ${}를 활용하여 문자열 안에 변수나 표현식의 결과값을 삽입할 수 있다.
     
    let a=2, b=3; // 한 줄에 두 개 선언 가능
     console.log(`${a} + ${b} = ${a+b}`);
     console.log(a+"+"+b+"="+(a+b));
     let now = new Date();
     console.log(`오늘은 ${now.getMonth()+1}월 ${now.getDate()}일 입니다.`)
     */
     
    /**
     // 문자열 리터럴
     let str = String.raw`오늘은 집에가면\n 잠을 잘 자겠죠?`;
     console.log(str);
     
     let str1 = String.raw`test test\n test`;
     console.log(str1);
     */

     /**
          const 사용하는 방법
          - 상수 값을 할당
          // 변수 선언
          const people = {
              userName:"손흥민", 
              age: 30
            };
            
            이 경우 이름 바뀜(변수인데 why?)
            people.userName="IU";
            console.log(people);
            
            // 아래처럼 쓰면 문제생김
            people1 = {
                userName2: "블랙핑크",
                age2: 22
            };
            people1.userName2="이승윤";
            
            console.log(people1);
            */

            //const 예제 2(equal 연산자가 아니면 가능?)
            // const PI =3.14인 경우에는 문제 생김, 객체인 경우 객체 할당할 경우에는 문제 생김, 객체 안의 내용을 바꾸는 것은 문제 없음 그러므로 아래와 같이 새롭게 변수 값을 바꿀 때는 문제가 없다.
            const list = [1,2,3,4,5];
            console.log(list);
            list[2]=100;
            console.log(list);





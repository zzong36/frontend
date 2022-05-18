// 배열
/**
 * 배열은 index로 접근
 
 // 배열은 reference type
 const arr = [2,4,6,8];
 const arr1 = ["2","4","6","8"];
 
 // 빈 배열 선언
 const empty = [];
 console.log(empty);
 
 // 배열 요소 중에서 일부 생략 시 그 요소 생성 안 됨
 const arrRst = [2, ,4];
 console.log(arrRst);
 
 
 //  배열 값에 기본타입, 참조타입 다 가능
 const arrData = [3.14, "pi", {x:1, y:2}, [2,3,4,5]];
 
 // 배열의 length는 요소의 개수 return
 console.log(arrData.length)
 
 //   배열의 length 속성에 현재 배열들의 개수보다 작고 0 보다 큰 정수값을 넣으면 배열의 길이가 줄어듦
 const arrLength=["A", "B", "C", "D"];
 console.log(arrLength.length)
 arrLength.length=2;
 console.log(arrLength.length)
 console.log(arrLength)
 
 //  없는 배열 요소에 값을 대입하면 새로운 요소가 추가
 const arr3 = ["A", "B", "C"]; // 0,1,2
 arr3[3] = "D";
 console.log(arr3);
 
 // push 메소드를 사용하면 요소를 배열 끝에 추가 가능
 const arr4 = ["A", "B", "C", "D"];
 arr4.push("E");
 console.log(arr4)
 
 // const의 immutable array 확인해보기
 function fruit(){
     const list = ["apple", "orange", "watermelon"];
     list = "podo"; // 이 경우 에러 발생
    };
    fruit();
    
    // 아래처럼 하면 에러 안 남
    function fruit2() {
        const list = ["apple", "orange", "watermelon"];
        console.log(list);
        list.push("podo");
        console.log(list)
    };
    
    fruit2();
    */

    const list3 = ["apple", "orange", "watermelon"];
    // list4= list3;
    list4 = [].concat(list3, "banana");
    console.log(list3, list4);

// list3과 list4를 비교해보자
// 값도 같고, 타입도 같아서 아주 완벽하게 똑같을 때 비교하는 값이 ===(동치): 무조건 3개를 쓸 것
console.log(list3===list4); // false로 나옴





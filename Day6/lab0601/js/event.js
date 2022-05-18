/**
 이벤트 처리방법
 1) 객체를 찾고(element, object)
 2) 이벤트를 생성하고
 3) 객체에 붙인다.(AddEventListener)
 
 이벤트 처리 방법
 1) 이벤트 처리기를 등록하는 방법
 <input type="button" onclick="changeColor()"/>
 
 2) DOM 요소 객체의 이벤트 처리기 프로퍼티에 설정
 const btn = document.getElementById("btn"); // id
 const btn = document.querySelector("#btn"); // id
 const btn = document.querySelector(".colorBox");    // class
 btn.onclick = changeColor();
 
 * document.querySelector(): 선택자와 일치하는 문서 내 첫번째 Element 반환
 * addEventListener: document의 특정요소(id, class, tag 등)를 event(ex-click하면 함수 실행)를 등록할 때 사용
 
 3) addEventListener 메소드를 사용하는 방법
 const btn = document.getElementById("btn"); // id
 const btn = document.querySelector("#btn"); // id
 const btn = document.querySelector(".colorBox");    // class
 
 btn1.addEventListener("click", ()=>{
     do something;
    })
    */
   
   // // function을 쓰는 다른 방법
   //     document.addEventListener("DOMContentLoaded", function(){
   //     // alert("잘 들어오나?")
   //     // Element를 const에 넣어서 선택
   //     const boxEle = document.querySelector("#box");
   //     const colorBtnEle = document.querySelector(".colorBtn");
   //     const btnEle = document.querySelector("button");

    document.addEventListener("DOMContentLoaded", ()=>{
        // alert("잘 들어오나?")
        // Element를 const에 넣어서 선택
        const boxEle = document.querySelector("#box");
        const colorBtnEle = document.querySelector(".colorBtn");
        const btnEle = document.querySelector("button");
   

        // 각각의 element에 이벤트를 연결시킨다
        boxEle.addEventListener("click", function(e){
            e.currentTarget.style.backgroundColor = "red";
        });

        colorBtnEle.addEventListener("click", function(e){
            e.currentTarget.style.backgroundColor = "blue";
        });
        
        btnEle.addEventListener("click", function(e){
            e.currentTarget.style.backgroundColor = "gray";
            e.currentTarget.style.padding = "10px 20px" ;
        });

        
    });
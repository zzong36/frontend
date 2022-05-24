// 공통 기능을 구현한 View Import 한다.
import View from "./View.js";

// FormView인지를 알 수 있는 태그 구성
const tag = "[FormView]";

// View 객체를 가져와서 카피해서 새로운 FormView를 만든다.
const FormView = Object.create(View);

// Form으로 선언된 것을 셋팅하는 작업
FormView.setup = function(element){

    this.form=document.querySelector("form");
    this.init(element);
    this.inputElement = element.querySelector('[type=text');
    this.resetElement = element.querySelector('[type=reset');
    
    this.bindEvents();
    this.showResetBtn(false);
    
    return this;
}

// bindEvent 메소드 구현
FormView.bindEvents=function(){
    this.on('submit', e => e.preventDefault());
    // 키를 입력했을 때 처리하는 이벤트 연결
    this.inputElement.addEventListener('keyup', e => this.onKeyup(e));
    this.resetElement.addEventListener('click', e => this.onClickReset);s

}

// bindEvent에서 구현된 onKeyup 발생시 처리될 메소드
FormView.onKeyUp=function(e){
    // 엔터키를 누를 때 처리할 부분 구현
    // 엔터키 세팅
    const enter = 13;
    this.showResetBtn(this.inputElement.value.length);
    // keyCode가 13이면 처리
    if(e.keyCode !== enter) return;
    // enter를 쳤을 때 처리하는 액션 @submit
    this.emit('@submit', {input:this.input.Element.value});
}

FormView.showResetBtn=function(show=true){
    this.resetElement.display=show? 'block': 'none';
}

FormView.onClickReset=function(){
   this.emit('@reset');
  this.showResetBtn(false); 
};

// 외부에서 사용할 수 있도록 export default 처리
export default FormView;

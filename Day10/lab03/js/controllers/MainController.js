// FormView를 가져와서 setup메소드로 셋팅을 한다.
import FormView from "../views/FormViews.js";

const tag = "[MainController]";

// 외부에서 접근할 수 있도록 export 그 안에 가장 기본적인 셋팅을 위한 init() 함수 적용
export default{
    init(){
        console.log(tag, "init()");
        FormView.setup(document.querySelector('form')).on('@submit', e => this.onSubmit(e.detail.input)).on('@reset', e => this.resetForm());
    }, 

    onSubmit(input){
        console.log(tag, 'onSubmit()'+input());
    },

    // reset 이벤트가 일어날 때 처리될 메소드
    resetForm(){
        console.log(tag, "onResetForm()");
    }
}


// FormView를 가져와서 setup메소드로 셋팅을 한다.
import FormView from "../views/FormViews.js";
import SearchResultView from "../views/SearchResultView.js"

const tag = "[MainController]";

// 외부에서 접근할 수 있도록 export 그 안에 가장 기본적인 셋팅을 위한 init() 함수 적용
export default{
    init(){
        console.log(tag, "init()");
        FormView.setup(document.querySelector('form'))
        .on('@submit', e => this.onSubmit(e.detail.input))
        .on('@reset', e => this.resetForm());

        // SearchResultView 셋업할 때 #search-result 엘리먼트를 셋팅해준다.
        SearchResultView.setup(document.querySelector('#search-result'))
    }, 

    // 검색이 실행될 메소드를 구현한다.
    search(query){
        console.log(tag, "search()", query);
    // 서치 결과를 처리할 메소드를 하나 더 호출해준다.
    this.onSearchResult([]);
    // SearchMenu 모델을 매핑시킨다.
    // SearchResultView.
    },

    onSubmit(input){
        console.log(tag, 'onSubmit()', input);
        // 검색을 하고 엔터를 쳤을 경우니까 onSubmit이 일어났을 때
        // 검색하는 메소드가 호출되면 된다.
        this.search(input); 
    },

    // reset 이벤트가 일어날 때 처리될 메소드
    resetForm(){
        console.log(tag, "onResetForm()");
    },

    onSearchResult(data){
        SearchResultView.render(data);
    }
}


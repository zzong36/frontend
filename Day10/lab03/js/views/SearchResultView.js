import View from './View.js'

const tag = '[SearchResultView]'

const SearchResultView=Object.create(View);

SearchResultView.setup = function(element){
    this.init(element);
    this.searchRstE1 = element.querySelector("#search-result");
    return this;
}

// 데이터가 없을 경우와 있을 경우에 대한 처리
SearchResultView.render=function(data=[]){
    console.log(tag, 'render', data);
    this.searchRstE1.innerHTML=data.length?this.getSearchResultHtml(data): "검색결과가 없습니다.";
}

// 검색결과가 존재한다면, html tag가 들어가게 될 예정
SearchResultView.getSearchResultHtml=function(data){
    console.log(tag, 'getSearchResultHtml ', data)
}

SearchResultView.getSearchResultHtml=function(data){

}

export default SearchResultView;
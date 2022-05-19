// log 함수를 다른 곳에서도 사용하기 위해 export 사용
// const와 export default를 같이 사용 시 오류 발생 thus,  const util={}; 만든 후 마지막에 export default함
const util = {
    log(data){
        console.log(data);
    }
};

export default util;
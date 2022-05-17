/**
 * 행위와 속성을 나타내는 형태의 객체
 * javaScript는 정의 한 후 호출해야 실행
 */

const coffee = {
    type: "라떼",
    price: 5500,
    makeCoffee: function () {
        console.log(this.type + "//" + this.price); // this를 붙여줘야 함 why? this라고 정의해줘야 내부 변수를 의미하고 있음을 알 수 있기 때문이다.
    }
}

// 호출
coffee.makeCoffee();


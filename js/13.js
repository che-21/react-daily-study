// 128 page 비동기
// 동기 : 주는 쪽과 받는 쪽이 만나서 자료를 전달하는 방식 (ex.전화)
// 비동기 : 주는 쪽(서버)에서 받는 쪽(클라이언트)을 만나지 않아도 자료를 전달하는 방식 (ex.카톡, 일반 우편)

setTimeout( () => {
    console.log("1번!")
}, 3000)

console.log("2번!")

function orderCoffee( coffee, time){
    setTimeout( ()=> {
        console.log( `${coffee}제조 완료`)
    }, time)
}

orderCoffee("달콤한 커피", 4000)
orderCoffee("레몬 티", 2000)
orderCoffee("시원한 커피", 3000)
console.log("===============")

// 130 콜백함수로 비동기 처리하기

function double(num) {
    setTimeout( () => {
        const doubleNum = num * 2
        //console.log(doubleNum)
        return doubleNum    // 비동기 방식은 return이 아닌 setTimeout이 함수를 끝내므로 결과가 undefined로 나옴, 콜백함수를 쓸 것!
    }, 1000)
}

//console.log(double(10), "~~~~~~")

function double2(num, cb) {
    setTimeout(() => {
        const doubleNum = num * 2
        cb(doubleNum)
    }, 1000)
}   // 비동기 함수

double2(10, (res) => {
    console.log(res, "~~~")
})

// 132 page 프로미스 - 내장 객체(함수) - js가 갖고 있는 기본 객체, 바로 사용할 수 있음
// resolve - 해결, reject - 거부

const promise = new Promise(
    function(resolve, reject) {
        setTimeout( () => {
            //console.log("안녕")
            resolve("로그인 성공")
            //reject("로그인 실패")
        }, 5000 )
    }
)

// 프로미스 객체 생성하면서 수행된 함수의 결과를 사용하기
// .then(콜백훔사) 대기 처리 후 결과 안내
promise.then( function(res) {
    console.log(res, "$$$")
}).catch( function(err) {
    console.log(err, "###")
})
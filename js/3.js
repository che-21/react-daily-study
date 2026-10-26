// 3.js
for( let i=1; i<=100; i+=10 ) {
    console.log(i)
}

// while문
let j = 10; // 10~50까지 함
let sum = 0;
while ( j <= 50 ) {
    sum = sum + j
    j++
}
console.log(sum)

/*
do {
    참이면 처리할 내용1
} while( 조건식 ) {
    참이면 처리할 내용2
}
*/

// 1~100까지의 합을 구하다가 합이 3000 이상이면 멈추기 합을 출력하기
let k=0
sum = 0
do {
    sum = sum + k
    if(sum >= 3000) break
    k++
} while(k <= 100)
console.log(k, sum)

// 함수 function f(x) = 기능(처리할 내용)을 묶어주는 것
// 1단계 함수 만들기(정의하기)
// 2단계 함수 호출

function a() {
    console.log("프린트 해주기")
}

function cal(a, b, c) {
    let max = a
    if(a<b){ max = b }
    if(b<c){ max = c }
    if(c<a){ max = a}
    return max
}

console.log("==============")
console.log(cal(10, 4, 8))

function even() {
    let sum = 0
    let i = 1
    for(i=0; i<=100; i++){
        if(i % 2 == 0) {
            sum += i
        }
    }
    return sum
}
console.log("~~~~~~~~~~~~~~~~")
console.log(even())


function person(name, age, city) {
    console.log(`${name}님은 ${age}살이고 ${city}에 거주합니다`)
}
person("홍길동", 30, "서울")  // 함수 호출
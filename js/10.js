function func({name, age, location}) {
    console.log(name, age, location)
}

let person = {
    name: "이정환",
    age: 25,
    location: "경기도"
}

func(person)

// 98 스프레드 연산자(...) - 여러 개 전개 연산자와 rest 매개변수
let objA = {
    a: 1,
    b: 2
} //객체
let objB = {
    ...objA,
    c: 3,
    d: 4
}
console.log(objB)
console.log("---------")

// 100 page rest 매개변수
function func(...rest) {
    console.log(rest)  // [ 1, 2, 3, 4 ]
}
func(1,2,3,4)

function func2(a, b, ...r) {
    console.log(a)  // 1
    console.log(b)  // 2
    console.log(r)  // [3, 4]
}
func2(1,2,3,4)

// SyntaxError: Rest parameter must be last formal parameter
// rest 파라미터를 앞에 쓰면 오류가 나므로 맨 뒤에 작성할 것!
function func3(...r) {
    console.log(r)  // [ 1, 2, 3, 4 ]
}
func3(1,2,3,4)
console.log("=======================")

// 101
let food = ["짜장면", "피자", "치킨"]   // 배열
const newLength = food.push("탕수육", "라자냐")       // 배열에 탕수육 넣기, 배열에 새로운 값 넣기: push
console.log(food)
console.log(`새로운 배열의 길이 : ${newLength}`)

const removedItem = food.pop() // 제일 마지막에 있는 원소를 내보낸다(꺼낸다)
console.log(removedItem)
console.log(food)

const removedItem2 = food.shift()
console.log(removedItem2)
console.log(food)

const newLength3 = food.unshift("갈비찜")
console.log(food)
console.log(`새로운 배열의 길이 : ${newLength3}`)

const newLength4 = food.unshift("설렁탕", "갈비탕")
console.log(food)
console.log(`새로운 배열의 길이 : ${newLength4}`)

// concat
let arrA3 = [1,2]
let arrB3 = [3,4]
let arrC3 = arrA3.concat(arrB3)
console.log(arrC3)
console.log(arrA3)

let arrA4 = [1,2]   // 배열
let arrB4 = {a:3, b: 4} //객체
let arrC4 = arrA4.concat(arrB4)
console.log(arrC4)
console.log(arrA4)
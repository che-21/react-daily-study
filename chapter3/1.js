let age = 25
age = age + 10
console.log(age)
// 변수 선언 let (var는 가급적 쓰지 말 것)
// 상수 선언 const
const p = 10
c = 20
var c   // 변수 선언을 나중에 해도 위로 끌어 올려서 변수 선언을 해주는 기법 (오래된 변수 선언 방법으로 요즘 사용하지 않음)

let Name = "홍길동"
let age1 = 10
let name = '김수연'
let isOk = true // boolean
let isNull = null   // 자료가 없음
let isUnde = undefined  // 자료가 아직 무엇인지 안 정해짐

let r
console.log(r)

let number = 10
let string = "20"
const result = number + string
console.log(result)

let strA = "10"
let strB = "10개"
// 문자형 -> 숫자형 Number 객체 (대문자면 대체로 객체다)
console.log(Number(strA)+100)

let varA = "하이"
let varB = 0
let varC = ""

let boolA = Boolean(varA);
let boolB = Boolean(varB);
let boolC = Boolean(varC);

console.log(boolA)
console.log(boolB)
console.log(boolC)
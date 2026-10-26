// 105 순회 메서드
function cb(item, idx) {
    console.log(`${idx}번째 요소: ${item}`)
}
const arr = [1,2,3]
arr.forEach(cb) // arr 배열의 원소만큼 cb 함수를 호출

// 위 배열의 합계 구하기
let sum = 0
arr.forEach( (item, idx) => {
    sum = sum + item
    console.log(`${idx}번째 요소: ${item}`)
})
console.log(sum)
console.log("----------------")

// 문제 배열 만들기 name = ["이수지", "이경미", "박지연"]
// 출력할 것: 1번 이수지 2번 이경미 3번 박지연
const name = ["이수지", "이경미", "박지연"];
name.forEach((item, idx) => {
    console.log(`${idx + 1}번 ${item}`);
});
console.log("----------------")

// const scores = [75, 90, 65, 85, 100, 70] 배열 만들고
// 점수가 80점 이상인 사람만 번호와 점수 출력하기
// 출력 결과 2번 90점 4번 85점 5번 100점
const scores = [75, 90, 65, 85, 100, 70]
scores.forEach((score, idx) => {
    if(score >= 80){
        console.log(`${idx + 1}번 ${score}점`)
    }
})

// 107 탐색 메서드
let arr4 = [1,3,5,7,1]
console.log(arr4.indexOf(1,0))  // 1이라는 숫자가 몇번째 인덱스에 있는지 0번째 인덱스부터 찾기
// 구조 배열명.indexOf(찾으려는 원소, 찾는 시작 위치)
console.log("------")

let name2 = ["이수지", "이경미", "박지연"]
console.log(name2.indexOf("박경미", 0))
if(name2.indexOf("이경미", 0) === -1) {
    console.log("우리 학생이 아닙니다.")
} else {
    console.log("우리 학생입니다.")
}
console.log("------")

// findIndex 함수
// 배열명.findIndex( 콜백함수(item, index, array))

function determine(item, idx, arr) {
    if (item % 2 === 0) {
        return true
    } else {
        return false
    }
}
let arr5 = [1, 3, 4, 6, 8]
let index = arr5.findIndex(determine)

console.log(index)
console.log("--------------")


let arr7 = [
    {name: "이종원"},
    {name: "이정환"},
    {name: "신다민"},
    {name: "김효빈"}
]
let findName = arr7.find( (item) => item.name === "이정환")
// find는 원소를 돌려줌 , findIndex는 원소가 몇번째인지 알려줌
console.log(findName)
console.log("--------------")

// 문제: 나이가 20살 아래인 사람 찾기
let arr8 = [
    {name: "이종원", age: 25},
    {name: "이정환", age: 35},
    {name: "신다민", age: 45},
    {name: "김효빈", age: 5}
]
let under20 = arr8.find( (item) => item.age < 20 )
let idxUnder20 = arr8.findIndex( (item) => item.age < 20 )
console.log(`이름: ${under20.name}, 나이: ${under20.age}살, ${idxUnder20+1}번`)

// **** 진짜 중요!! 많이 사용하는 함수, filter, map, forEach
let arr9 = [
    { name: "이종원", hobby: "축구" },
    { name: "이정환", hobby: "영화" },
    { name: "신다민", hobby: "축구" },
    { name: "김효빈", hobby: "노래" }
]
let filterArr = arr9.filter( (item) => item.hobby === '축구' )
console.log(filterArr)
console.log("--------------")

// 80점 이상인 점수만 배열에 담기
const scores11 = [65, 90, 75, 88, 100, 55, 80]
let up80 = scores11.filter( (item) => item >= 80 )
console.log("80점 이상인 점수: " + up80)

// scores11의 점수 중 홀수인 점수만 배열에 담기
let odd = scores11.filter( (item) => item % 2 === 1 )
console.log("홀수인 점수: " + odd)
console.log("------------------")

/*
온라인 쇼핑몰의 상품 목록에서 다음 조건을 모두 만족하는 상품만 추출하세요.
- 가격이 50,000원 이상
- 재고가 10개 이상
- 상품 카테고리가 "전자제품"인 상품
*/
const products = [
    { name: "키보드", category: "전자제품", price: 70000, stock: 15 },
    { name: "마우스", category: "전자제품", price: 30000, stock: 20 },
    { name: "모니터", category: "전자제품", price: 250000, stock: 5 },
    { name: "스피커", category: "전자제품", price: 80000, stock: 12 },
    { name: "의자", category: "가구", price: 150000, stock: 20 },
    { name: "웹캠", category: "전자제품", price: 60000, stock: 10 }
]
let product = products.filter( (item) => item.price >= 50000 && item.stock >= 10 && item.category === "전자제품" )
console.log(product)
console.log("------------------")

/*
학생별 시험 점수와 출석률이 주어져 있습니다. 다음 조건을 만족하는 학생만 추출하세요.
- 국어, 영어, 수학 점수의 평균이 80점 이상
- 출석률이 80% 이상
- 세 과목 중 어느 하나라도 60점 미만이면 제외
*/
const students = [
    { name: "김민수", korean: 90, english: 85, math: 80, attendance: 95 },
    { name: "이영희", korean: 95, english: 55, math: 90, attendance: 100 },
    { name: "박철수", korean: 70, english: 80, math: 85, attendance: 90 },
    { name: "최지우", korean: 88, english: 92, math: 90, attendance: 75 },
    { name: "정하늘", korean: 80, english: 85, math: 90, attendance: 85 },
    { name: "한서준", korean: 60, english: 65, math: 70, attendance: 80 }
]
let student = students.filter( (item) => ( item.korean + item.english + item.math ) / 3 >= 80 &&
                                           item.attendance >= 80 &&
                                           item.korean >= 60 && item.english >= 60 && item.math >= 60
                             )
console.log(student)
console.log("---------------")

// ** map
let arr10 = [1,2,3,4]
let newArr10 = arr10.map( (item) => item*3 )
console.log(newArr10)
console.log("---------------")

let arr11 = [
    { name: "이종원", hobby: "축구" },
    { name: "이정환", hobby: "영화" },
    { name: "신다민", hobby: "축구" },
    { name: "김효빈", hobby: "노래" }
]
let newArr11 = arr11.map( (item) => item.name )
console.log(newArr11) 

/*
각 학생 객체에서 이름을 유지하고, 국어·영어·수학 점수의 합계를 계산하여 새로운 객체 배열을 만드세요.
[
    { name: "김민수", total: 255 },
    { name: "이영희", total: 275 },
    { name: "박철수", total: 225 }
]
*/
const students2 = [
    { name: "김민수", korean: 80, english: 90, math: 85 },
    { name: "이영희", korean: 95, english: 88, math: 92 },
    { name: "박철수", korean: 70, english: 75, math: 80 }
]
const result = students2.map(student => ({
    name: student.name,
    total: student.korean + student.english + student.math
}))
console.log(result)

// 문제 회원의 성인 여부 확인하기
/* member.age >= 20은 비교 연산식입니다.
- 나이가 20세 이상이면 true
- 나이가 20세 미만이면 false
따라서 별도의 if문 없이도 성인 여부를 계산할 수 있습니다. */
/* 결과
[
    { name: "김민수", age: 17, isAdult: false },
    { name: "이영희", age: 25, isAdult: true },
    { name: "박철수", age: 20, isAdult: true },
    { name: "최지우", age: 19, isAdult: false }
]
*/
const members = [
    { name: "김민수", age: 17},
    { name: "이영희", age: 25 },
    { name: "박철수", age: 20 },
    { name: "최지우", age: 19 }
]

const member = members.map(member => {
    return {
        name: member.name,
        age: member.age,
        isAdult: member.age >= 20
    }
})
console.log(member)

// 113 page: sort
let arr12 = [10,5,3]
arr12.sort()
console.log(arr12)  // ["10", "3", "5"] 뭔가 이상한 이유: sort는 모든 자료를 문자로 바꾸어 처리함

function compare(a,b) {
    if(a>b) {
        return 1    // 양수
    }else if (a<b) {
        return -1   // 음수
    } else {
        return 0    // 같으면
    }
}
let arr13 = [10, 5, 3]
arr13.sort(compare)
console.log(arr13)


// 문제1 숫자 오름차순과 내림차순 정렬
// 오름차순: [5, 10, 25, 40, 100]
// 내림차순: [100, 40, 25, 10, 5]
// 힌트: 숫자는 다음과 같이 비교해야 합니다.
// (a, b) => a - b  // 오름차순
// (a, b) => b - a  // 내림차순
const numbers = [40, 5, 100, 25, 10]
const ascending = [...numbers].sort( (a,b) => a-b )
const descending = [...numbers].sort( (a,b) => b-a )

//numbers.sort(ascending) // 오름차순
//numbers.sort(descending)    // 내림차순
console.log( numbers )  // [ 5, 10, 25, 40, 100 ]

// 문제2 문자 오름차순 정렬 (ㄱ-ㅎ순)
const names = ["박철수", "김민수", "최지우", "이영희", "강하늘"]
// localeCompare(): 나라별 언어 비교
const descendingNames = [...names].sort( (a,b) => b.localeCompare(a, "ko"))
console.log(names.sort())   // 오름차순
console.log(names.sort().reverse()) // 내림차순
console.log(descendingNames)    // 내림차순2
console.log("---------------")

//문제3  상품 객체 배열을 가격이 낮은 순서대로 정렬하세요.
const products1 = [
    { name: "노트북", price: 1200000 },
    { name: "마우스", price: 30000 },
    { name: "모니터", price: 350000 },
    { name: "키보드", price: 80000 }
]
/*
[
    { name: "마우스", price: 30000 },
    { name: "키보드", price: 80000 },
    { name: "모니터", price: 350000 },
    { name: "노트북", price: 1200000 }
]
*/
// 가격 정렬
const ascPrice = [...products1].sort( (a,b) => a.price - b.price )
const descPrice = [...products1].sort( (a,b) => b.price - a.price )
console.log("----- [가격 오름차순] -----")
console.log(ascPrice)
console.log("----- [가격 내림차순] -----")
console.log(descPrice)
console.log("==================")

// 이름 정렬
const descName = [...products1].sort( (a,b) => b.name.localeCompare(a.name, "ko"))
const ascName = [...products1].sort( (a,b) => a.name.localeCompare(b.name, "ko"))
console.log("----- [이름 오름차순] -----")
console.log(ascName)
console.log("----- [이름 내림차순] -----")
console.log(descName)

// 문제4 학생 평균 점수 내림차순 정렬하기
/*
 학생별 국어, 영어, 수학 점수가 있습니다.
1. 각 학생의 평균 점수를 계산합니다.
2. 평균 점수가 높은 학생부터 정렬합니다.
3. 평균 점수는 소수점 둘째 자리까지 출력합니다. toFixed(2)
실행결과
[
    { name: "이영희", average: 91.67 },
    { name: "최지우", average: 90.00 },
    { name: "김민수", average: 85.00 },
    { name: "박철수", average: 75.00 }
]
*/
const students1 = [
    { name: "김민수", korean: 80, english: 90, math: 85 },
    { name: "이영희", korean: 95, english: 88, math: 92 },
    { name: "박철수", korean: 70, english: 75, math: 80 },
    { name: "최지우", korean: 90, english: 90, math: 90 }
]

// map을 이용해서 평균을 구하고 sort 정렬하기
const avg = students1.map(item => {
    const average = ((item.korean + item.english + item.math) / 3).toFixed(2)
    return {
        name: item.name,
        avg: average
    }
})
console.log("---- [평균 구하기] ----")
console.log(avg)

const ascScore = [...avg].sort((a, b) => a.avg - b.avg)
const descScore = [...avg].sort((a, b) => b.avg - a.avg)
console.log("---- [sort 오름차순 정렬] ----")
console.log(ascScore)
console.log("---- [sort 내림차순 정렬] ----")
console.log(descScore)

// 115page join : 배열 요소를 모두 연결해 하나의 문자열로 반환
let arr15 = ["안녕", "나는", "이정환"]
console.log(arr15.join())
console.log(arr15.join("-"))
console.log(arr15.join(" "))

// 115 reduce
// 배열명.reduce(( acc, item, index, array) => {} )
let arr16 = [1,2,3,4,5]
let result16 = arr16.reduce( (acc, item) => acc + item, 0 )
console.log(result16)

// 1000 -
let numbers17 = [10,20,30,40,50]
let result17 = numbers17.reduce( (acc, item) => acc + item, 1000 )
console.log(result17)


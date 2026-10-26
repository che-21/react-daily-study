// 71page
const obj = {
    a: 1,
    b: "test"
}

obj.a = 2
obj.c = undefined
delete obj.b
console.log(obj)

// in 연산자
let obj1 = {
    a: 1
}
console.log(obj1.b)

let isPropertyExist = obj1.b !== undefined
console.log(isPropertyExist)    // false

let person = {
    age: 10
}

let isNameExist = "age" in person // person 객체 안에 "age"가 있는가?
console.log(isNameExist) // false

if(!("name" in person)){
    person.name = "홍길동"
}

console.log(person)

// 메서드 = 객체 안에 있는 함수
let person1 = {
    name: "이정환",
    sayHi: function() {
        console.log("===========")
        console.log("안녕")
    },
    add: function(x, y) {
        return x+y
    },
    mul: function(x,y,z) {
        return x*y*z
    },
    getPerson: function(tel, age) {
        let message = `${this.name}씨는 나이가 ${age}살이고 전화번호는 ${tel}입니다.`
        return message
    }
}
person1.sayHi() // 함수 호출
console.log("===========")
console.log(person1.add(10, 20))
console.log(person1.mul(10,20,3)) // 3개 모두 곱하기
console.log(person1.getPerson("010-1234-4567", 29))

let arr = [1, "1", true, null, undefined, () => {}, function(){}, [1,2,3], {a:1}]

console.log("===========")
console.log(arr[8].a)
console.log(arr[7][2])
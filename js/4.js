function a(callback) {
    for(let i=1; i<=10; i++) {
        callback()
    }
}

function h() {
    console.log("안녕")
}

function h2(){   
    console.log("바보")
}

// "안녕" 10번 찍기
// "바보" 10번 찍기
//a(h)
//a(h2)

// 함수 표현식으로 고치기
let b = function(callback) {
    callback()
}

let h3 = function() {
    console.log("안녕")
}

let h4 = function() {
    console.log("바보")
}

let greeting = (name) => `hello ${name}`
const greetingText = greeting("이정환")
console.log(greetingText)


let pass = (score) => {
    let passYn = score >= 80 ? "합격" : "불합격"
    return passYn
}

let score = (name, score) => {
    let result = `${name} 학생은 점수가 ${score}점이며 ${pass(score)} 입니다.`
    return result
}

console.log(score("김정민", 100))
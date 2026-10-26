import "./Body.css"
const Body = () => {
    const number = 4
    const numA = 1
    const numB = 2
    const strA = "안녕"
    const strB = "리엑트"
    const boolA = true
    const boolB = false
    const objA = {a: 1, b: 2}
    const arr = [ 1, 2, 3]
    return(
        <>
            <ul class="body">
                <li>자바 </li>
                <li>html</li>
                <li>css</li>
                <li> { number } </li>
                <li> { numA + numB } </li>
                <li> { strA + " " + strB } </li>
                <li> { String(boolA || boolB) }  </li>
                <li> { arr } </li>
                <li> 객체자료 {objA.a} --- {objA.b} </li>
                <li> 조건부 랜더링 : { number }는 { number % 2 === 0 ? "짝수" : "홀수" } 입니다. </li>
            </ul>
        </>
    )
}

export default Body
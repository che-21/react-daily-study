import "./Header.css"
import React from "react"

const Header = () => {
    console.log("Header 업데이트...")   // Header 컴포넌트 호출, 리렌더 될 때마다 콘솔레 출력

    return(
        <>
            <div className="Header">
                <h3> 오늘은 <img src="../public/date.png" alt="달력이미지"/> </h3>
                <h1> { new Date().toDateString() } </h1>
            </div>
        </>
    )
}
export default Header
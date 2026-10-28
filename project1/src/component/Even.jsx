import { useEffect } from "react"

const Even = () => {
    useEffect( ()=>{
                return () => { console.log("Even 컴포넌트 언마운트") }
    }, [])  // 마운트 될 때 한 번만 콜백함수 수행 (두 번째 파라미터가 빈 배열이므로)

    return(
        <>
            <div> 현재 카운트는 짝수입니다. </div> 
        </>
    )
}
export default Even
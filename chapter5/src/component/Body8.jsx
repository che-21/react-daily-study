import { useRef, useState } from "react"

const Body8 = () => {
    const [ text, setText ] = useState("")
    const textRef = useRef()
    
    const handleOnChange = (e) => {
        setText( e.target.value )
    }
    const handleOnClick = () => {
        alert(text)
        textRef.current.value=""
    }

    return(
        <>
            <input ref={textRef} type="text" value={text} onChange={{handleOnChange}} />
            <button onClick={handleOnClick}> 작성 완료 </button>
        </>
    )
}

export default Body8
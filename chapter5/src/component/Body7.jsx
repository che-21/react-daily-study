import { useState } from "react"

const Body7 = () => {
    const [ state, setState ] = useState({
                                            name: "",
                                            gender: "",
                                            birth: "",
                                            bio: ""
                                        })
    const handleOnChange = (e) => {
        setState({
            ...state,
            [ e.target.name ]: e.target.value
        })
    }

    return(
        <>
            <div>
                <input type="text" nmae="name" value={state.name} onChange={handleOnChange} placeholder="이름" />
            </div>
            <div>
                <select name="gender" value={state.gender} onChange={handleOnChange}>
                    <option key=""></option>
                    //  key 이름은 변수에 담긴 값으로 동적으로 정하고 싶을 때 []을 사용
                    //  key: value; 고정 [key]: value 동적 key 변수의 값을 평가새헛 그 결과를 속성명으로 사용
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input type="date" name="birth" value={state.birth} onChange={handleOnChange} />
            </div>
            <div>
                <textarea name="bio" value={state.bio} onChange={{handleOnChange}}></textarea>
            </div>
        </>
    )
}

export default Body7
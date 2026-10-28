import "./App.css"
import { useState, useEffect, useRef } from "react"
import Viewer from "./component/Viewer"
import Controller from "./component/Controller"
import Even from "./component/Even"

function App() {
  
  const [ count, setCount ] = useState(0)
  const [ text, setText ] = useState("")
  const didMountRef = useRef(false)

  const handleSetCount = (v) => {
    setCount( count + v )
  }

  const handleChangeText = (e) => {
    setText( e.target.value )
  }

/*
  // 두번째 요소인 의존성배열에서 아무것도 전달하지 않으면 useEffect는 컴포넌트가 랜더링 될 때마다 콜백함수 실행
  useEffect( () => {
    if( !didMountRef.current ) {  // 마운트인 상태, 처음인 경우는 false이므로
      didMountRef.current = true
      return
    } else {  // 업데이트 상태
      console.log( '컴포넌트 업데이트...')
    }
  }, [] ) //빈 배열을 전달하면 컴포넌트 마운트 시점에서만 콜백함수를 실행, 클래스에서 생성자와 비슷한 기능

  useEffect( () => {
                      const intervalID = setInterval( () => { console.log("깜빡") }, 1000 )  // 1000ms 밀리세크 = 1초, 1초에 한 번씩 콜백 함수를 실행해라
                      return () => {
                        console.log("크린업~~")
                        clearInterval( intervalID ) // 언마운트
                      }
  })
*/
  return (
    <>
      <div className="App">
          <h1> SImple Counter </h1>
          <section>
            <input type="text" value={text} onChange={ handleChangeText } />
          </section>
          <section>
              <Viewer count={count} />
              { count % 2 === 0 && <Even/>}
          </section>
          <section>
              <Controller handleSetCount={ handleSetCount }></Controller>
          </section>
      </div>
    </>
  )
}

export default App

import React from "react"
import Header from './component/Header'
import Body from "./component/Body"

function App() {
  const data = 'data'
  const MyContext = React.createContext(defaultValue)
  return(
    <>
      <div>
          <Header/>
          <MyContext.Provider value={data}>
            <Body/>
          </MyContext.Provider>
      </div>
    </>
  )
}
export default App
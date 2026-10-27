import "./App.css"
import { useState } from "react"
import Viewer from "./component/Viewer"
import Controller from "./Controller"

function App() {
  
  const [ count, setCount ] = useState(100)
  const handleSetCount = (v) => {
    setCount( count + v )
  }
  return (
    <>
      <div className="App">
          <h1> SImple Counter </h1>
          <section>
              <Viewer count={count} />
          </section>
          <section>
              <Controller handleSetCount={ handleSetCount }></Controller>
          </section>
      </div>
    </>
  )
}

export default App

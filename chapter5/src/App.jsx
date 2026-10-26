import './App.css'
import Header from "./component/Header"
import Header2 from "./component/Header2"
import Body from "./component/Body"
import Body3 from "./component/Body3"

const App = () => {
  const bodyProps = {
    name: "김정환",
    location: "경기도",
    age: "25",
    favorList: ["파스타", "빵", "떡볶이"]
  }
  return (
    <div className='App'>
      <Body3 {...bodyProps} />
      {/*<Header />
      <Header2 />
      <Body />*/}
    </div>
  )
}

export default App

import Header2 from "./component/Header2"
import Body from "./component/Body"
import Body5 from "./component/Body5"
import Body6 from "./component/Body6"
import Body7 from "./component/Body7"

const ChildComp = ()=>{
    return(
        <>
           <h3> Child Component </h3>
        </>
    );
}


const App = () =>{
    const name="이정환"
    const tel="010-1234-5678"
    const bodyProps = {
          city: "서울",
          school: "서울대"
    }

    return(
        <>
          <Body7 />
        </>
    )
}

export default App
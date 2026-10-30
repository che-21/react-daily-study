import React, { useContext } from "react"

const Main = () => {
    const data = useContext(MyContext)
    return(
        <>
            <h1> Main Component </h1>
            <h2> {data.value} </h2>
        </>
    )
}
export default Main
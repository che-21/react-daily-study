import Child from "./Child"
const Body3 = (props) => {
    console.log(props)
    const { name, location, age, favorList } = props
    return(
        <>
            <div> {name} </div>
            <div> {location} </div>
            <div> {age} </div>
            <div> {favorList[0]} </div>

            {/*{favorList.map((favor, index) => (
                <div key={index}>{favor}</div>
            ))}*/}

            <Child location={location} height={"145"} />
        </>
    )
}

export default Body3
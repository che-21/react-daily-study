//import handleSetCount from "./Controller"

const Viewer = (props) => {
    const {count} = props
    return(
        <div>
            <div>현재 카운트: </div>
            {/* <h1>{ handleSetCount }</h1> */}
            <h1>{count}</h1>
        </div>
    )
}
export default Viewer
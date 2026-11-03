import { useState, useContext, useEffect } from "react"
import Button from "../component/Button"
import Header from "../component/Header"
import { DiaryStateContext } from "../App"
import { getMonthRangeByDate } from "../util"
import DiaryList from "../component/DiaryList"

const Home = () => {
    const data = useContext( DiaryStateContext )
    const [pivotDate, setPivotDate] = useState( new Date() )
    const [filteredData, setFilteredData] = useState([])

    const onIncreaseMonth = () => {
        setPivotDate( new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1) )
    }
    const onDecreaseMonth = () => {
        setPivotDate( new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1) )
    }
    const headrTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`

     useEffect( () => { if(data.length >= 1) {
                const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate)
                setFilteredData( data.filter( (it) => beginTimeStamp <= it.data && it.data <= endTimeStamp ) )
                } else {
                    setFilteredData([])
                }}, [data, pivotDate])
0
    return(
        <>
            <Header title={ headrTitle }
                    leftChild={<Button text="<" onclick={ onDecreaseMonth } />}
                    rightChild={<Button text=">" onclick={ onIncreaseMonth } />}/>
            <DiaryList data={filteredData} />

        </>
    )
}
export default Home
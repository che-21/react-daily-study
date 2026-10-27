
const Controller = (props) => {
    const {handleSetCount} = props
    return(
        <>
            <button onClick={ () => handleSetCount(-1) }> -1 </button>
            <button onClick={ () => handleSetCount(-10) }> -1 </button>
            <button onClick={ () => handleSetCount(-100) }> -1 </button>
            <button onClick={ () => handleSetCount(+1) }> -1 </button>
            <button onClick={ () => handleSetCount(+10) }>-1 </button>
            <button onClick={ () => handleSetCount(+100) }> -1 </button>
        </>
    )
}

export default Controller
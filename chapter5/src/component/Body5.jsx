const Body5 = ()=>{

   const handleOnClick = ()=>{
      alert("버튼을 클릭하셨군요!")
   }
   const hadleOnClick2 = (t) =>{
      console.log( t.target.name )
      alert(t.target.name)
   }

    return(
        <>
          <div className="body">
             <button onClick={ handleOnClick }> 클릭하세요 </button>
             <p />
             <button name="A버튼"  onClick={hadleOnClick2}> A버튼 </button>
             <button name="B버튼" onClick={hadleOnClick2}> B버튼 </button>
          </div>
        </>
    )
}
export default Body5
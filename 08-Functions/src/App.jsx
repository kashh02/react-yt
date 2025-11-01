import React from 'react'

const App = () => {
  const PageScrolling = (elem)=>{
    console.log("pagging scrolling......")
    console.log("speed", elem)
    if(elem>0){
      console.log("seedha scrolling")
    }
    else{
      console.log("ulta scroling")
    }
  }
  function btnClicked(){
    console.log("btn is clicked")
  }

  function inputChanging(val){
    // console.log("user is typing")
    console.log(val)
  }
  return (
    <div onWheel={function(elem){
      // console.log(elem.deltaY)
      PageScrolling(elem.deltaY)

    }}>
      {/* <button onClick={btnClicked}>Click here</button>
      <button onClick={function (){
        console.log("hello")
      }}>Hello</button>

      {/* <input onChange={inputChanging} type="text " placeholder='Enter name' /> */}

      {/* one way is this creating a func here only and getting the value  */}
      {/* <input onChange={function(elem){
        console.log(elem.target.value)
      }} type="text" placeholder='Enter your name' /> */}

      {/* another way is now u can call the fucntion and pass the params in it and it will not run automatically */}

      {/* <input onChange={function(elem){
        inputChanging(elem.target.value)
      }} type="text" placeholder='Enter your name' />   */} 

      <div className="page1">h</div>    
      <div className="page2">e</div>
      <div className="page3">e</div>
    </div>
  )
}

export default App


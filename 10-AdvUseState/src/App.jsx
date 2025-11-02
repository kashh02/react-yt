import { useState } from "react"

const App = () => {

  // const [num, setNum] = useState({user:"Kash" , age: 21})
  // const btnClicked = ()=>{
  //   const newNum = {...num}
  //   newNum.user = "Kashish"
  //   newNum.age = 22
  //   setNum(newNum)

  // }
  // const [arr, setarr] = useState([10,20,30])
  // const change =()=>{
  //   const newArr = [...arr]
  //   newArr.push(40)
  //   setarr(newArr)
  // }

  //batch mgmt
  const [a, seta] = useState(4)
  const func = ()=>{
    // seta(a+1)
    // seta(a+1)
    // seta(a+1)
    //this wasnt increasing the a by 3, it was only getting increased by 1 even if we called set three times. UPAR WALA
    seta(prev=>prev+1)
    seta(prev=>prev+1)
    seta(prev=>prev+1)
  }

  return (
    <div>
      {/* <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>Click</button>
      <h1>{arr}</h1>
      <button onClick={change}>click to change array</button> */}
      <h1>Val of a is {a}</h1>
      <button onClick={func}>click meee</button>
    </div>
  )
}

export default App

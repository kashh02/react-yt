import { useState } from 'react'

const App = () => {
  // const [a, seta] = useState(20)
  // const [username, setusername] = useState('Kash')
  // function change(){
  //     seta(a+1)
  //     setusername("Kahsish")
  // }
  
  const [num, setnum] = useState(0)
  //increase
  function increase(){
    setnum(num+1)

  }

  function decrease(){
    setnum(num-1)
  }

  function jumpBy5(){
    setnum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
       <button onClick={jumpBy5}>jump by 5</button>
      {/* <h1>value of a is {a} <br /> value of username is {username}</h1>
      <button onClick={change}>click to change</button> */}
    </div>
  )
}

export default App

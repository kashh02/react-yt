import { useState } from "react";

const App = () => {
  const [title, settitle] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("form submitted by" , title)
    settitle('')

  }
  return (
    <div>
      <form onSubmit= {submitHandler}>
        <input type="text" placeholder='Enter your name'  value={title}
        onChange={(e)=>{
          // console.log("inputtinggg")
          settitle(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

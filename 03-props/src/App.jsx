import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div id='parent'>

      <Card user='Aman' age={18} img="https://images.unsplash.com/photo-1761438180295-9ea187978263?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1964"/>
      <Card user='Kash' age = {21} img="https://images.unsplash.com/photo-1760008486599-e62d30e2ca95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600"/>

    </div>
  )
}

export default App

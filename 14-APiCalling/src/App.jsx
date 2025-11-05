import axios from 'axios'
import { useState } from 'react'


const App = () => {
    //  const getData = async ()=> {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     console.log(response)
    //     const data = await response.json();
    //     console.log(response)
    //     console.log(data)
        //console.log(response.json()) //pending coz .json is async func

        //AXIOS 
        const GetData = async ()=>{
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
          //or
          const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
          console.log(data)
          console.log(response)
          console.log(response.data)
        }
        const [data, setData] = useState([])
        const getImg = async ()=>{
          const response = await axios.get('https://picsum.photos/v2/list')
          setData(response.data)
          console.log(response.data)
        }

      
  

  return (
    <div>
      <button onClick={getImg}>Get Data</button>
      {data.map(function(elem,idx){
        return <h3>hello {elem.author} {idx}</h3>

      })}
    </div>
  )
}

export default App

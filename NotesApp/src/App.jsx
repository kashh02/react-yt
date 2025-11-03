import { useState } from "react";


const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitHandler =(e)=>{
    e.preventDefault();
    // console.log("form submitted")
    // console.log(title, details)

    const copyTask = [...task]
    copyTask.push({title, details})
    // console.log(copyTask)
    setTask(copyTask)
    setTitle('')
    setDetails('')

  }

  const deleteNote =(idx)=>{
    const copyTask = [...task]
    // console.log(idx)
    // console.log(copyTask[idx])

    copyTask.splice(idx,1)
    setTask(copyTask)

  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>

      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='lg:w-1/2 p-10 flex flex-col gap-5  items-start w-1/2'>
        <h1 className="font-bold text-3xl">Add Notes</h1>
        
        <input type="text" 
        placeholder='Enter Notes Heading'
        className='w-full border-2 rounded px-5 py-3 outline-none font-medium'
        value={title}
        onChange={(e)=>{
          // console.log(title)
          setTitle(e.target.value)
        }}
        
        />

        <textarea type="text"
        placeholder='Write Details' 
        className='w-full border-2 h-30 rounded px-5 py-3 outline-none font-medium'
        value={details}
        onChange={(e)=>{
          // console.log(details)
          setDetails(e.target.value)
        }}       
        />

        <button  className='active:scale-95 w-full bg-white text-black border-2 rounded px-5 py-3 outline-none font-medium'
        >
        Add Note</button>

      </form>
      <div className="p-10 lg:border-l-2   lg:w-1/2"> 
      {/* //jisse border sirf large screen mei hi dikhe */}
        <h1 className="text-3xl font-bold ">Recent notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto"> 
          {/* //overflow auto isliye kyuki jyada notes aane pr wo neeche jaakr white screen dikhri thi */}
          {/* <div className="h-52 w-40 bg-white rounded-2xl "></div>
          <div className="h-52 w-40 bg-white rounded-2xl "></div>
          <div className="h-52 w-40 bg-white rounded-2xl "></div> */}
          {task.map(function(elem, idx){
            return  <div key = {idx} className="flex flex-col justify-between items-start relative h-52 w-40 rounded-2xl text-black pt-9 pb-4 px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
             
              <h3 className="font-bold text-lg leading-tight ">{elem.title}</h3>
              <p className="overflow-hidden text-ellipsis line-clamp-4mt-3 leading-tight text-sm font-medium text-gray-500">{elem.details}</p>
              <button onClick={()=>{
                deleteNote(idx)
              }} className="bg-red-500 cursor-pointer active:scale-90 text-white w-full text-xs  py-1 rounded font-bold">Delete
              </button>
            </div>
          })}
             
        </div>
      </div>
    </div>
  )
}

export default App


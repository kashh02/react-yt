import React from 'react'

const RightCardContent = (props) => {
  console.log(props.color)
  return (
    <div>
       
        <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
            <h2 className="h-12 w-12  bg-white rounded-full flex items-center justify-center text-xl font-semibold">{props.id+1}</h2>
            <div>
                <p className="text-shadow-2xs text-lg leading-relaxed mb-14 text-white ">{props.intro}</p>
             
            <div className="flex justify-between">
                <button style={{backgroundColor:props.color}} className="text-white rounded-full px-7 py-2 font-medium ">{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=" text-white rounded-full px-4 py-2 font-medium"><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default RightCardContent

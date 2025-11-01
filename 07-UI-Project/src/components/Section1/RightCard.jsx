import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
  return (
    <div className='h-full overflow-hidden relative w-80 rounded-4xl shrink-0'>
        <img className="h-full w-full object-cover" src={props.img} alt="" />
       <RightCardContent id={props.id} tag={props.tag} intro ={props.intro} color={props.color}/>      
       
      
    </div>
  )
}

export default RightCard

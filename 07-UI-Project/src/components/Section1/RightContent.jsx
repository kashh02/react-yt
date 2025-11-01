
import RightCard from './RightCard'

const RightContent = (props) => {

  return (
    <div id="right" className=' w-2/3 h-full p-5 flex flex-nowrap gap-5  overflow-x-auto'>
        {props.users.map(function(elem,idx){
    return <RightCard key = {idx} id = {idx} img={elem.img} tag={elem.tag} intro={elem.intro} color={elem.color}/>
  })}
      
    </div>
  )
}

export default RightContent

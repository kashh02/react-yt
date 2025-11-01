import 'remixicon/fonts/remixicon.css'
import Herotext from './Herotext'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
      {/* one div for the text content and another for the arrow icon */}
      <Herotext/>
      <Arrow/>
    </div>
  )
}

export default LeftContent

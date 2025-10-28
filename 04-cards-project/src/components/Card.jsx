import {Bookmark} from 'lucide-react'
const Card = (props) => {
  return (
    <div>
                 <div className="card">
        <div>
                  <div className="top">
          <img src={props.brandLogo} alt=''></img>
          <button>Save <Bookmark size={12} color='#b0aeaeff' strokeWidth={1.75}  /> </button>

        </div>
        <div className="center">
          <div>
            <h3>{props.company} <span>{props.date}</span></h3>
            <h1>{props.post}</h1>
          </div>
          <div className='tag'>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>

        </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.loc}</p>
          </div>
          <button>Apply Now</button>

        </div>
      </div>
    </div>
  )
}

export default Card


import Card from './components/Card'
const App = () => {
  const jobs = [
  {
    brandLogo: "https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png",
    companyName: "Google",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$150/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    companyName: "LinkedIn",
    datePosted: "1 week ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    companyName: "Microsoft",
    datePosted: "3 days ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$180/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://cdn.iconscout.com/icon/free/png-256/free-meta-3444366-2871085.png",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$140/hr",
    location: "Delhi, India",
  },
  {
    brandLogo: "https://cdn.iconscout.com/icon/free/png-256/free-apple-853-675472.png",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$200/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
    companyName: "Netflix",
    datePosted: "4 weeks ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$175/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
    companyName: "Tesla",
    datePosted: "1 day ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$160/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/732/732244.png",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UX Researcher",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$100/hr",
    location: "Kolkata, India",
  },
  {
    brandLogo: "https://cdn.iconscout.com/icon/free/png-256/free-openai-1524694-1297229.png",
    companyName: "OpenAI",
    datePosted: "2 months ago",
    post: "AI Research Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$250/hr",
    location: "Remote",
  },
];

  return (
    <div className='parent'>
      {jobs.map(function (elem, idx){
        return <div key={idx}>
                  <Card company = {elem.companyName} 
        date = {elem.datePosted}
        post = {elem.post}
        tag1 = {elem.tag1}
        tag2 = {elem.tag2}
        pay = {elem.pay}
        loc = {elem.location}
        brandLogo = {elem.brandLogo}
        />
          </div>

      })}
    </div>
  )
}

export default App


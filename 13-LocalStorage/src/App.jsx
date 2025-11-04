
const App = () => {
  localStorage.setItem('name' , 'Kash')
  localStorage.setItem('age', '18')
  localStorage.removeItem('age')

  const user = {
    username : 'Kashish',
    age : 20,
    skills : "tech"
  }

  localStorage.setItem('user' , user)
  localStorage.getItem('user')
  //to convert inti string
  localStorage.setItem('user',JSON.stringify(user))

  const a = localStorage.getItem('user')
  console.log(a)
   console.log(typeof(a))
   //wapis object mei convert krna hai
   const b = JSON.parse(localStorage.getItem('user'))
   console.log(b)
  return (
    <div>
      
    </div>
  )
}

export default App

import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
  {
    img : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
    intro : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum culpa recusandae ut reiciendis! Quae, dolores.',
    tag : 'Satisfied',
    color : 'blue'
  },
  {
    img : 'https://plus.unsplash.com/premium_photo-1661641750782-83267bc73817?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=626',
    intro : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusantium inventore ratione! Dolorem, laboriosam tempora.',
    tag : 'Underserved',
    color : 'lightseagreen'
  },
  {
    img : 'https://plus.unsplash.com/premium_photo-1663040518652-9bc24a06df88?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    intro : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ratione distinctio error laborum suscipit quis.',
    tag : 'Underbanked',
    color : 'purple'
  }
  ]  
  return (
    <div>
      <Section1 users = {users}/>
      <Section2/>
    </div>
  )
}

export default App


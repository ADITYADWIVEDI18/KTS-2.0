import React from 'react'
import TeamPage from './TeamPage'
import { Link } from 'react-router-dom'
const KTSteam = () => {
  return (
    <section className='bg-white'>  
     <div className='text-center text-5xl font-bold bg-gradient-to-r from-red-600 to-yellow-500 text-transparent bg-clip-text'> 
      Our Team 
      <Link to='/'><span className='text-blue-500'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="BLUE"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11V8L8 12L12 16V13H16V11H12Z"></path></svg></span></Link>
 </div>

      <div className='w-full h-[100vh] bg-white text-md text-black'>
         <TeamPage/>
    </div>
      
    </section>
  )
}

export default KTSteam
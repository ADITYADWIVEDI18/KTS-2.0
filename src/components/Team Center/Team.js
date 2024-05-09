import React from 'react';
import TeamCard from './TeamCard';
import TeamPage from './TeamPage';
import { Link, Outlet } from 'react-router-dom';

const Team = () => {
  return (
    <div className='m-16'>

    <div>
    <div className='text-[8vh] text-white '>Our <span className='text-blue-500 '>Team</span></div>
    </div>
   
    {/*Carousel*/}
   <Link to='/ktsfamily'>
   <div className='h-48  rounded-full  flex flex-row font-serif justify-center gap-9 items-center text-6xl font-bold '>
        <span className='text-red-500'>Kinesis</span>
        <span className='text-yellow-500'>Technical</span>
        <span className='text-blue-500'>Society</span>
        <span className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="108"  fill="lightgreen"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"></path></svg></span>
    </div>
   </Link>
    <Outlet/>
    
    </div>
  )
}

export default Team
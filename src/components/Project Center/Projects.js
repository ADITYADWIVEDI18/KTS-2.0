import React from 'react'
import git from "../../assets/git.png";

import { Outlet } from 'react-router-dom';

const Projects = () => {
  return (
<div className='m-16'>

<div className='flex flex-row'>
<div className='text-[8vh] text-white '>Our <span className='text-yellow-500 '>Projects</span></div>
<div className='w-24 ml-16'><img src={git}/></div>
</div>

{/*Selected Project*/}

<div className='h-48 bg-red-200 '>
    Projects
</div>
  <Outlet/>

</div> 
)}

export default Projects
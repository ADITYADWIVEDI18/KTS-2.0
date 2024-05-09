import React from 'react'
import chat from "../assets/chat 1.png";
import motion from "../assets/motion.png";

import userimg from "../assets/user.png";
import adrate from "../assets/adrate.png";
import phone from "../assets/phonebook.png";

import { Outlet } from 'react-router-dom';

const Contact = () => {
  return (

    <div className='m-16 flex flex-row justify-between items-center'>

    <div className='flex flex-col'>
    <div className='flex flex-row items-center'>
    <div className='text-[8vh] text-white '>Let's <span className='text-blue-500 '>Talk</span></div>
    <div className='w-36'><img src={chat}/></div>
    </div>

    <p className='text-white'>kldhfgewifhgwfkherwbgfekrghhjegrjfb<br/>hbgshvfdsgjhdsvdfbhsfgsfiyhwgfvrhfsvgrfiysgvbfhsfy<br/>ufgbwhfvrfyuwfrbhrsbfrsufygbdshfbdsfuysvfhsdfbvsiyfgsiufbsf</p>

      <div className='flex flex-col gap-3 my-16'>
      
      <div className="flex flex-row gap-1">
      <img src={userimg}/>
      <input type="text" placeholder="Your Name" class="pb-1 text-sm w-[18rem] px-4 bg-transparent border-b border-gray-400 focus:outline-none mr-5"/>
      <input type='text' placeholder="Type your message" className='pb-1 px-4 text-sm bg-transparent w-[18rem]  border-b border-gray-400 focus:outline-none'/>
      </div>
      
      <div className='flex flex-row gap-1'> <img src={adrate}/> <input type='text' placeholder="Your email address"   className='w-[18rem] px-4 pb-1 text-sm bg-transparent  border-b border-gray-400 focus:outline-none'/></div>
      
      <div  className='flex flex-row gap-1'><img src={phone}></img> <input type='text' placeholder="Your phone number"  className='w-[18rem] px-4 pb-1 text-sm bg-transparent  border-b border-gray-400 focus:outline-none'/></div>

      <div><button className='text-xl font-bold  bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 bg-clip-text text-transparent' >Send</button></div>

     </div>

    </div>

    
    <div><img src={motion}/></div>
    <Outlet/>
    </div>

)
}

export default Contact
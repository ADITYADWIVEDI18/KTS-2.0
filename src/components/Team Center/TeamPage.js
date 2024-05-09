import React from 'react'

import {Member} from  "../../utils/member.js";

import TeamCard from './TeamCard.js';
import { Outlet } from 'react-router-dom';

const TeamPage = () => {
  return (
    <div className='flex flex-row gap-4  items-start p-12'>
       { Member.map((mem)=>(
             <TeamCard key={mem.Name} 
             name={mem['Name ']} 
             domain={mem.Domain}
              github={mem.Position}
              linkedin={mem.Linkedin}
              other={mem['Other Link']}
              image={mem['Image Link']} />
        ))}
        <Outlet/>

    </div>
  )
}

export default TeamPage
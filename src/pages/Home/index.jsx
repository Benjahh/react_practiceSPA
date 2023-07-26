import { SiGithub, SiLinkedin } from 'react-icons/si'
import React from 'react'
import { flexBetweeen } from '../../data'

export const  HomePage = () => {
  return (
    <div id="home" className={`border-green-500 border-2 ${flexBetweeen} flex-col w-full h-full`}> 
      <div className="border-2 w-5/6 items-center gap-8 justify-center flex flex-col border-emerald-900">
          <h1 className="">FIRST NAME JOBPOSITION ETC</h1>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum vel ex impedit eos rem accusantium, tempora sit sint modi provident deserunt dolore dignissimos saepe hic amet quibusdam magni consectetur?</p>
      </div>
      <div  className="border-2 right-0 bottom-0 flex-row flex gap-4 text-yellow-500"> 
        <a><SiGithub/></a>
        <a><SiLinkedin/></a>
      </div>
    </div>
  )
}

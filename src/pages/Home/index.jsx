import { SiGithub, SiLinkedin } from 'react-icons/si'
import React from 'react'

export const  HomePage = () => {
  return (
    <div id="home" className="border-green-500 border-2 justify-center items-center flex w-full h-full"> 
      <div className="border-2 w-3/4 items-center gap-8 justify-center flex flex-col border-emerald-900">
          <h1 className="">DEV TITLE</h1>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum vel ex impedit eos rem accusantium, tempora sit sint modi provident deserunt dolore dignissimos saepe hic amet quibusdam magni consectetur?</p>
      </div>
      <div  className="border-2 flex-row flex border-cyan-900"> 
        <SiGithub/>
        <SiLinkedin/>
      </div>
    </div>
  )
}

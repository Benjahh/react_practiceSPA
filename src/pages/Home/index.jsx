import { SiGithub, SiLinkedin } from 'react-icons/si'
import React from 'react'
import { flexBetweeen } from '../../data'

export const  HomePage = () => {
  return (
    <div 
    id="home" 
    className={` bg-dimPrimaryColor ${flexBetweeen} flex-col w-full h-full`}> 
      <section className="border-2 text-3xl w-5/6 items-center gap-8 justify-center flex flex-col border-emerald-900">
        <h1 className="text-7xl">Hi, Im AFHAÑSI AOISFAH</h1>
        <h2 className='text-6xl'>Full-Stack Web Developer</h2>
      </section>
      <section className="border-2 right-0 bottom-0 flex-row flex gap-4 text-yellow-500"> 
        <a><SiGithub 
        size="40"
        className='bg-black text-white '
        /></a>
        <a><SiLinkedin size="40"/></a>
      </section>
    </div>
  )
}

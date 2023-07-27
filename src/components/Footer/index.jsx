import React from 'react'
import { flexBetweeen } from '../../data'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export const Footer = () => {
  return (
    <div className='bottom-0 h-[100px] w-full justify-between p-6 bg-purple-600 text-white flex-row flex'>
      <section className={`${flexBetweeen} flex-col`}>
        copyright things
      </section>
      <section className={`${flexBetweeen} flex-col gap-4`}>
        links of proffesional stuff
        <a href=""><SiLinkedin/></a>
        <a href=""><SiGithub/></a>
      </section>
    
    </div>
  )
}

import React from 'react'
import { flexBetweeen } from '@/data'

export const AboutPage = () => {
  return (
    <div id='about' className=" bg-dimSecondaryColor justify-center items-center flex w-full h-full">
      <section className={`${flexBetweeen} w-5/6 flex-col gap-8`}>
        <h1 className={`${flexBetweeen} font-bold text-2xl text-blueColor`}>ABOUT ME</h1>
        <div className={`flex flex-col text-md text-left w-3/4 gap-6 text-whiteColor`}>
          <p>Hi, my name is Lucas. I'm a <span className='font-extrabold text-magentaColor'>Computer Engineering</span> student with a passion for <span className='font-extrabold'>Software Engineering</span>.</p>
          <p>I'm currently pursuing <span className='font-extrabold text-magentaColor'>Computer Engineering</span> at <span className='font-extrabold'>UA </span> (Universidad Americana), located in Asuncion, Paraguay.</p>
          <p>I'm a full-stack developer, specializing in the <span className='font-extrabold text-orangeColor'>MERN</span> stack (MongoDB, Express, React, and Node), and I'm keen on building high-quality, scalable web applications.</p>
          <p>My approach to application development is based on several core principles. I prioritize creating <span className='font-extrabold text-purpleColor'>modern</span> user interfaces that are visually <span className='font-extrabold  text-purpleColor'>appealing</span> and easy to use. Additionally, I am committed to ensuring that every application I build performs <span className='font-extrabold  text-purpleColor'>optimally </span>and is <span className='font-extrabold  text-purpleColor'>user-friendly</span>.</p>
          <p>I continuously improve my skills and knowledge by tackling complex challenges and collaborating with others to find creative solutions.</p>
        </div>
        <a 
        download=""
        src=""
        className={`${flexBetweeen} hover:text-blueColor hover:cursor-pointer self-end flex-row rounded-2xl border-[2px] border-blueColor p-2 bg-dimPrimaryColor text-white`} 
        >
          Resume
        </a>
     </section> 
    </div>
  )
}
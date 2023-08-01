import React from 'react'
import { frontEndTech, backEndTech, otherTech } from '@/data' 
import { flexBetweeen } from '@/data'
export const SkillPage = () => {
  
  return (
    <div id='skills' className={`bg-black flex-col gap-2 ${flexBetweeen} w-full h-full`}>
      <h2 className='text-xl '>TITLE</h2>
      <div className="w-5/6 p-2 flex flex-col gap-4 ">
        
        <div className='flex justify-between gap-2 flex-row'>
          <section id='frontend' className=' rounded-md'>
            <h2 className={`flex-col ${flexBetweeen} text-thirdColor>`}>Front-End</h2>
            <div className='flex flex-col'>
                {frontEndTech.map((group) => (
                  <div key={group.id} className='gap-4 p-2 flex flex-row'>
                    {group.techs.map(({Icon, skillName, id})=>(
                        <div key={id} className='p-4 rounded-3xl w-28 h-28 gap-2 items-center bg-firstColor flex-col flex justify-center'>
                          <icon className="text-thirdColor">{Icon}</icon>
                          <h3 className='text-white'>{skillName}</h3>
                        </div>
                    ))}
                  </div>
                ))}
            </div>
          </section>

          <section id='backend' className={`rounded-md h-auto flex flex-col`}>
            <h2 className={`text-thirdColor ${flexBetweeen}`}>Back-End</h2>
              <div  className='flex flex-col justify-end self-end h-full'>
                {backEndTech.map((group) => (
                  <div key={group.id} className='gap-4 p-2 flex flex-row-reverse'>
                    {group.techs.map(({id, skillName, Icon}) => (
                      <div key={id} className='flex flex-col w-28 h-28 rounded-3xl items-center gap-2 bg-firstColor p-4'>
                        <icon className="rounded-md text-thirdColor">{Icon}</icon> 
                        <h3 className='text-white'>{skillName}</h3>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
          </section>
        </div >

          <section id='other' className='rounded-md'> 
          <h2 className='flex flex-row justify-center text-thirdColor'>Additional</h2>
            <div className={`flex-row ${flexBetweeen} gap-6`}>
              {otherTech.map(({skillName, id, Icon})=>(
                <div key={id} className='flex flex-col  w-28 h-28 bg-thirdColor rounded-3xl items-center gap-2 p-4'>
                  <icon className="text-firstColor">{Icon}</icon>
                  <h3 className='text-white'>{skillName}</h3>
                </div>
              ))}
            </div>
          </section>

      </div>
    </div>
  )
}

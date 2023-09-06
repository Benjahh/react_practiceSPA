import React from 'react'
import { frontEndTech, backEndTech, otherTech } from '@/data' 
import { flexBetweeen } from '@/data'
import { FadeInComponent } from '../../components/FramerComponents'
export const SkillPage = () => {
  
  return (
    <div id='skills' className={`bg-dimPrimaryColor flex-col gap-2 ${flexBetweeen} w-full h-full`}>
      <h1 className='text-4xl font-bold text-white'>TECH STACK</h1>
      <h2 className='text-2xl text-greyColor'>A list of many important technologies that im familiar with.</h2>
      <div className="w-5/6 p-2 flex flex-col gap-4 ">
        
        <div className='flex justify-between gap-2 flex-row'>
          <section id='frontend' className=' rounded-md'>
            <h2 className={`flex-col text-xl ${flexBetweeen} text-white`}>Front-End</h2>
            <div className='flex flex-col'>
                {frontEndTech.map((group) => (
                  <div key={group.id} className='gap-4 p-2 flex flex-row'>
                    {group.techs.map(({Icon, skillName, id})=>(
                        <div key={id} className='p-4 hover:shadow-md hover:shadow-orangeColor rounded-3xl w-28 h-28 gap-2 border-2 border-magentaColor items-center bg-dimSecondaryColor flex-col flex justify-center'>
                          <icon className="text-magentaColor">{Icon}</icon>
                          <h3 className='text-white'>{skillName}</h3>
                        </div>
                    ))}
                  </div>
                ))}
            </div>
          </section>

          <FadeInComponent/>

          <section id='backend' className={`rounded-md h-auto flex flex-col`}>
              <div  className='flex flex-col justify-end self-end h-full '>
                <h2 className={`text-white text-xl  ${flexBetweeen}`}>Back-End</h2>
                  {backEndTech.map((group) => (
                    <div key={group.id} className='gap-4 p-2  flex flex-row-reverse'>
                      {group.techs.map(({id, skillName, Icon}) => (
                        <div key={id} className='flex flex-col w-28 h-28 border-2 border-purpleColor rounded-3xl items-center gap-2 bg-dimSecondaryColor p-4'>
                          <icon className="rounded-md text-purpleColor">{Icon}</icon> 
                          <h3 className='text-white'>{skillName}</h3>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
          </section>
        </div >

          <section id='other' className='rounded-md'> 
          <h2 className={`text-white text-xl p-2 ${flexBetweeen}`}>Additional</h2>
            <div className={`flex-row  ${flexBetweeen} gap-6`}>
              {otherTech.map(({skillName, id, Icon})=>(
                <div key={id} className='flex flex-col border-2 border-orangeColor  w-28 h-28 bg-dimSecondaryColor rounded-3xl items-center gap-2 p-4'>
                  <icon className="text-orangeColor">{Icon}</icon>
                  <h3 className='text-white'>{skillName}</h3>
                </div>
              ))}
            </div>
          </section>

      </div>
    </div>
  )
}

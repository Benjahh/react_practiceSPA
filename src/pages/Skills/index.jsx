import React from 'react'
import { frontEndTech, backEndTech, otherTech } from '@/data' 

export const SkillPage = () => {
  const flexBetweeen = "flex justify-center items-center"
  return (
    <div className={`bg-black border-yellow-500 border-2 flex-col gap-2 ${flexBetweeen} w-full h-full`}>
      <h2 className='border-2 border-yellow-300 text-xl '>TITLE</h2>
      <div className="w-5/6 p-2 flex flex-col gap-4 ">
        <section className='flex justify-between gap-2 flex-row border-2  border-orange-300'>

          <div id='frontend' className='border-2 rounded-md border-secondColor'>
            <h2 className={`flex-col ${flexBetweeen} text-thirdColor>`}>Front-End</h2>
            <div id='frontendskills' className='grid p-4 grid-rows-3'>
              	{frontEndTech.map((group) => (
                  <div key={group.id} className='gap-4 border-2 border-yellow-300 p-4 flex flex-row'>
                    {group.techs.map(({Icon, skillName, id})=>(
                        <div key={id} className='gap-2 rounded-3xl w-28 h-28 items-center bg-firstColor flex-col flex justify-center'>
                          <icon className="text-thirdColor">{Icon}</icon>
                          <h3 className='text-secondColor '>{skillName}</h3>
                        </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>

          <div id='backend' className={`border-2 rounded-md h-auto flex flex-col border-secondColor`}>
            <h2 className={`text-thirdColor ${flexBetweeen}`}>Back-End</h2>
              <div id='frontendskills' className='grid grid-rows-2 border-2 h-full justify-end border-green-400'>
                {backEndTech.map((group) => (
                  <div key={group.id} className='gap-4 border-2 border-yellow-300 self-end justify-items-end ju p-4 flex flex-row-reverse'>
                    {group.techs.map(({id, skillName, Icon}) => (
                      <div key={id} className='flex flex-col w-28 h-28 rounded-3xl items-center gap-2 bg-firstColor p-2'>
                        <icon className="rounded-md text-thirdColor">{Icon}</icon> 
                        <h3 className='text-white'>{skillName}</h3>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
          </div>

        </section >

          <div id='other' className='border-2 rounded-md border-secondColor'> 
          <h2 className='flex flex-row justify-center text-thirdColor'>Additional</h2>
           <div className='flex-row flex items-center justify-center gap-6'>
            {otherTech.map(({skillName, id, Icon})=>(
              <div key={id} className=' border-2 border-black flex flex-col items-center gap-2 p-2'>
                <icon className="text-firstColor ">{Icon}</icon>
                <h3 className='text-white'>{skillName}</h3>
              </div>
            ))}
           </div>
          </div>

      </div>
    </div>
  )
}

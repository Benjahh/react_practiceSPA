import React from 'react'
import { frontEndTech, backEndTech, otherTech } from '@/data' 

export const SkillPage = () => {
  return (
    <div className="bg-black border-yellow-500 border-2 justify-center items-center flex-col gap-2 flex w-full h-full">
      <h2 className='border-2 border-yellow-300 text-xl'>TITLE</h2>
      <div className="w-5/6 p-2 flex flex-col gap-4 bg-green-600">
        <section className='flex justify-between gap-2 flex-row'>

          <div id='frontend' className='border-2 rounded-md border-secondColor'>
            <h2 className='flex items-center flex-col text-thirdColor'>Front-End</h2>
            <div id='frontendskills' className='grid grid-cols-3'>
              	{frontEndTech.map((group) => (
                    <div key={group.id} className='gap-2 m-2  only:flex flex-col'>
                      {group.techs.map(({Icon, skillName, id})=>(
                          <div key={id} className='gap-4 items-center bg-firstColor flex-col flex justify-center'>
                            <icon className="text-thirdColor">{Icon}</icon>
                            <h3 className='text-secondColor '>{skillName}</h3>
                          </div>
                      ))}
                    </div>
                ))}
            </div>
          </div>

          <div id='backend' className='border-2 rounded-md border-secondColor'>
            <h2 className='flex justify-center text-thirdColor'>Back-End</h2>
            {backEndTech.map(({skillName, id, Icon})=>(
              <div key={id} className='flex flex-row items-center gap-2 p-2'>
                <icon className="text-firstColor">{Icon}</icon> 
                <h3 className='text-white'>{skillName}</h3>
              </div>
            ))}
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

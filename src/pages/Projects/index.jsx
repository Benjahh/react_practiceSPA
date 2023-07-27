import React from 'react'
import { projects } from '../../data'

export const  ProjectPage  = () => {
  return (
    <div id='projects' className="border-green-300 flex-col justify-center items-center flex w-full h-full">
       <h1> TITLE </h1>  
   
        <section className='border-2 border-rose-600 flex flex-row '>
          {projects.map(({projectLink, projectImage, projectName, projectDescription, projectSkill, id})=>(
            <div key={id} className='gap-4 border-2 border-teal-500'>
              <div className='h-1/2'>
                <img src={projectImage} alt='testing image'></img>
              </div>
              <div>
                {projectSkill.map(({id, skillName, Icon})=>(
                  <div 
                  className='border-2 border-pink-300'
                  key={id}>
                    {skillName}
                    {Icon}    
                  </div>
                ))}
                <title className=''>{projectName}</title>
                <details className=''>{projectDescription}</details>
              </div>
              <div className=''>
                <a src={projectLink} >{projectLink}</a>
              </div>
            </div>
          ))}
        </section>

    </div>
  )
}

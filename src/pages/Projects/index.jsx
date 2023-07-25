import React from 'react'
import { projects } from '../../data'

export const  ProjectPage  = () => {
  return (
    <div className="border-green-300 flex-col justify-center items-center flex w-full h-full">
       <h1> TITLE </h1>  
       <div className='border-2 border-rose-600 flex flex-row'>
        <div>
          {projects.map(({projectLink, projectImage, projectName, projectDescription, projectSkill, id})=>(
            <section key={id}>
              <div>
                <img src={projectImage} alt='testing image'></img>
              </div>
              <div>
                {projectSkill.map(({id, skillName, Icon})=>(
                  <div key={id}>
                    {Icon}   
                  </div>
                ))}
                <title>{projectName}</title>
                <details>{projectDescription}</details>
              </div>
              <div>
                <a>{projectLink}</a>
              </div>
            </section>
          ))}
        </div>
        
       </div>
    </div>
  )
}

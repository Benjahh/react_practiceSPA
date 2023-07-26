import React from 'react'
import { projects } from '../../data'

export const  ProjectPage  = () => {
  return (
    <div id='projects' className="border-green-300 flex-col justify-center items-center flex w-full h-full">
       <h1> TITLE </h1>  
       <div className='border-2 border-rose-600 flex flex-row'>
        <section>
          {projects.map(({projectLink, projectImage, projectName, projectDescription, projectSkill, id})=>(
            <div key={id}>
              <div>
                <img src={projectImage} alt='testing image'></img>
              </div>
              <div>
                {projectSkill.map(({id, skillName, Icon})=>(
                  <div key={id}>
                    {skillName}
                    {Icon}   
                  </div>
                ))}
                <title>{projectName}</title>
                <details>{projectDescription}</details>
              </div>
              <div>
                <a>{projectLink}</a>
              </div>
            </div>
          ))}
        </section>
       </div>
    </div>
  )
}

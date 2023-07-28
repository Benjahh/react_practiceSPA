import React from 'react'
import { flexBetweeen, projects } from '../../data'

export const  ProjectPage  = () => {
  return (
    <div id='projects' className="border-green-300 flex-col justify-center items-center flex w-full h-full">
       <h1> TITLE </h1>  
   
        <section className='border-2 border-rose-600 h-auto grid grid-cols-2 gap-8 '>
          {projects.map(({projectLink, projectImage, projectName, projectDescription, projectSkill, id})=>(
            <div key={id} className='gap-4 border-2 h-auto border-teal-500'>
              
              <div className='border-2 border-pink-400'>
                <img src={projectImage} alt='testing image'></img>
              </div>

              <h2 className='border-2 border-blue-300 '>{projectName}</h2>
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Vitae quas ad, repudiandae minus quis quo veritatis hic voluptates debitis ab ipsa aspernatur tempore culpa iure consequatur quia veniam explicabo officia.
              </p>

              <div className={`${flexBetweeen}`}>
                {projectSkill.map(({id, skillName, Icon})=>(
                  <div 
                  className={`${flexBetweeen} flex-row border-2 border-yellow-400`}
                  key={id}>
                    {skillName}
                    {Icon}    
                  </div>
                ))}
                
              </div>

              <div className='border-2 border-b-red-950'>
                <a src={projectLink} >{projectLink}</a>
              </div>

            </div>
          ))}
        </section>

    </div>
  )
}

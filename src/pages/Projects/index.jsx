import React from 'react'
import { flexBetweeen, projects } from '../../data'
import { SiGithub} from 'react-icons/si'
import { SiLinktree } from 'react-icons/si'

export const  ProjectPage  = () => {
  return (
    <div id='projects' className={`${flexBetweeen} h-auto border-green-300 p-8 flex-col`}>
        <h1> TITLE </h1>  

        <section className='border-2 border-rose-600 w-5/6 grid grid-cols-2 gap-8 '>
          {projects.map(({projectLink, projectImage,projectRepo, projectName, projectDescription, projectSkill, id})=>(
            <div key={id} className='gap-4 flex h-auto flex-col border-2 border-teal-500'>
              
              <div className={`flex border-4 h-auto border-blue-700  flex-col`}>
                
                <img className='border-2 h-1/2 border-pink-400' src={projectImage} alt='testing image'></img>

                <div className={`flex flex-col gap-4 h-full p-2 items border-4 border-yellow-400`}>
              
                  <section className={`${flexBetweeen} flex-col gap-2`}>
                    <h2 className='border-2 border-blue-300 self-start'>{projectName}</h2>
                    <p className='text-left'>{projectDescription}</p>
                  </section>

                  <section className={`${flexBetweeen} flex-row gap-6`}> 
                    {projectSkill.map(({id, skillName, Icon})=>(
                    <div 
                    className={`border-2 border-pink-300  ${flexBetweeen}`}
                    key={id}>
                      {skillName}
                      {Icon}    
                    </div>
                    ))}
                  </section>

                  <section className='border-2 flex flex-row gap-2 p-2   border-red-950'>
                    <a 
                    href={projectLink} 
                    className={` ${flexBetweeen} w-20 flex-row hover:bg-red-400 bg-orange-500 p-1 rounded-sm gap-1`}>
                      Live <SiLinktree/>
                    </a>
                    <a 
                    href={projectRepo}
                    className={`${flexBetweeen} w-20 flex-row hover:bg-red-400 bg-orange-500 p-1 rounded-sm gap-1`}>
                      Source <SiGithub/>
                    </a>
                </section>

                </div>
              </div>
            </div>
          ))}
        </section>

    </div>
  )
}

import React from 'react'
import { flexBetweeen, projects } from '../../data'
import { SiGithub} from 'react-icons/si'
import { SiLinktree } from 'react-icons/si'

export const  ProjectPage  = () => {
  return (
    <div id='projects' className="border-green-300 flex-col justify-center items-center flex w-full h-full">
        <h1> TITLE </h1>  

        <section className='border-2 border-rose-600 w-5/6 h-auto grid grid-cols-2 gap-8 '>
          {projects.map(({projectLink, projectImage,projectRepo, projectName, projectDescription, projectSkill, id})=>(
            <div key={id} className='gap-4 border-2 h-auto border-teal-500'>
              
              <section className='border-2 border-pink-400'>
                <img src={projectImage} alt='testing image'></img>
              </section>

              <div className={`${flexBetweeen} flex-col`}>
              
                <section>
                  <h2 className='border-2 border-blue-300 '>{projectName}</h2>
                  <p className=''>{projectDescription}</p>
                </section>

                <section className={`${flexBetweeen} flex-row gap-6`}> 
                  {projectSkill.map(({id, skillName, Icon})=>(
                  <div 
                  className={`border-2 border-pink-300 ${flexBetweeen}`}
                  key={id}>
                    {skillName}
                    {Icon}    
                  </div>
                  ))}
                </section>

              </div>
              
              <section className='border-2 flex flex-row gap-2 p-2 border-b-red-950'>
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
          ))}
        </section>

    </div>
  )
}

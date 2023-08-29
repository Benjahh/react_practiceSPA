import React from 'react'
import { flexBetweeen, projects } from '../../data'
import { SiGithub} from 'react-icons/si'
import { SiLinktree } from 'react-icons/si'

export const  ProjectPage  = () => {
  return (
    <div id='projects' className={`${flexBetweeen} h-auto bg-dimSecondaryColor  p-8 flex-col`}>
        <div className='w-5/6 flex flex-col gap-4'>
        <h1 className='text-2xl text-white font-bold self-center'> PROJECTS </h1>
          <section className='flex-col border-2 flex gap-4 '>
            {projects.map(({projectLink, projectImage,projectRepo, projectType, reverse, projectName, projectDescription, projectSkill, id})=>(
              <div key={id} className={`gap-4 relative ${flexBetweeen} ${reverse ? "flex-row-reverse" : " flex-row"}`}>
                
                <img 
                  className='rounded-xl bg-yellow-700 w-80 h-1/4 overflow-hidden  top-0 shadow-md' 
                  src={projectImage}
                  alt='testing image'
                />            
                  
                  <div className={`flex flex-col gap-4 p-2 ${reverse ? "left-0" : "right-0"} absolute w-5/6 border-green-300 border-2  `}>
                
                    <section className={`${flexBetweeen} flex-col gap-4`}>
                      <h2 className={`${reverse ? "self-start" : "self-end"}`}>{projectType}</h2>
                      <h2 className={`${reverse ? "self-start" : "self-end"} `}>{projectName}</h2>
                      <p className={`${reverse ? "text-left self-start" : "self-end text-right"}  p-2 rounded-lg bg-dimPrimaryColor`}>{projectDescription}</p>
                    </section>

                    <section className={`${reverse ? "self-start" : "self-end"} items-center flex flex-row gap-6`}> 
                      {projectSkill.map(({id, skillName, color, Icon})=>(
                      <div 
                      className={` bg-dimPrimaryColor rounded-xl  p-[5px] ${flexBetweeen}`}
                      style={{
                        color: color
                      }}
                      key={id}
                      >
                        {skillName}
                      </div>
                      ))}
                    </section>

                    <section className={`flex flex-row gap-2 p-2 ${reverse ? "self-start" : "self-end"} `}>
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
            ))}
          </section>
        </div>
    </div>
  )
}

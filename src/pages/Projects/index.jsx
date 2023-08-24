import React from 'react'
import { flexBetweeen, projects } from '../../data'
import { SiGithub} from 'react-icons/si'
import { SiLinktree } from 'react-icons/si'

export const  ProjectPage  = () => {
  return (
    <div id='projects' className={`${flexBetweeen} h-auto bg-dimSecondaryColor border-green-300 p-8 flex-col`}>
        <div className='w-5/6 flex flex-col gap-4'>
        <h1 className='text-2xl text-white font-bold self-center '> PROJECTS </h1>
          <section className='border-2 border-rose-600  flex-col flex gap-4 '>
            {projects.map(({projectLink, projectImage,projectRepo, reverse, projectName, projectDescription, projectSkill, id})=>(
              <div key={id} className={`gap-4 ${flexBetweeen} border-2 border-teal-500`}>
                
    
                <div className={`flex border-4 ${reverse ? "border-red-700 flex-row-reverse" : " flex-row border-blue-700"} w-1/2 self-center `}>
                  {/*Image section*/}
                  <img 
                    className='border-2 w-80 border-pink-400' 
                    src={projectImage}
                    alt='testing image'
                  />

                  <div className={`flex flex-col gap-4 p-2 items border-4 border-yellow-400`}>
                
                    <section className={`${flexBetweeen}  flex-col gap-2`}>
                      <h2 className={`border-2 border-blue-300  ${reverse ? "self-start" : "self-end"} `}>{projectName}</h2>
                      <p className={`${reverse ? "text-left" : "text-right"}`}>{projectDescription}</p>
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

                    <section className={`border-2 flex flex-row gap-2 p-2 ${reverse ? "self-start" : "self-end"} border-red-950`}>
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
    </div>
  )
}

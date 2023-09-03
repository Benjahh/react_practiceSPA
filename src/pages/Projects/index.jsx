import React from 'react'
import { flexBetweeen, projects } from '../../data'
import { SiGithub } from 'react-icons/si'
import { TbExternalLink } from "react-icons/tb"


export const  ProjectPage  = () => {
  return (
    <div id='projects' className={`${flexBetweeen} h-auto bg-dimSecondaryColor  p-8 flex-col`}>
        <div className={`w-5/6 flex flex-col gap-2`}>
        <h1 className='text-4xl text-white font-bold self-center'> PROJECTS </h1>
        <h2 className='text-3xl text-greyColor self-center'> Projects ive made sharpening my skills</h2>
          <div className='flex-col flex gap-24 mt-8 border-2  '>
            {projects.map(({projectLink, projectImage,projectRepo, projectType, reverse, projectName, projectDescription, projectSkill, id})=>(
              <div key={id} className={` relative flex items-center ${reverse ? "flex-row-reverse" : " flex-row"}`}>
                
                <section className={`w-[700px] self-start h-[340px] ${reverse ? "pr-32" : "pl-24"}`}>
                  <img 
                    className='rounded-3xl bg-yellow-700  h-full w-full overflow-hidden shadow-md shadow-blueColor top-0 ' 
                    src={projectImage}
                    alt='testing image'
                  />                   
                </section>

                  <div className={`flex flex-col gap-4 p-2 ${reverse ? "left-0" : "right-0"} absolute w-5/6 `}>
                
                    <section className={`${flexBetweeen} flex-col gap-2`}>
                      <h3 className={`${reverse ? "self-start" : "self-end"} text-blueColor font-bold text-md`}>{projectType}</h3>
                      <h3 className={`${reverse ? "self-start" : "self-end"} text-xl text-white`}>{projectName}</h3>
                      <p className={`${reverse ? "text-left self-start" : "self-end text-right"} w-7/12 p-4 rounded-xl bg-dimPrimaryColor`}>{projectDescription}</p>
                    </section>

                    <section className={`${reverse ? "self-start" : "self-end"} items-center flex flex-row gap-2`}> 
                      {projectSkill.map(({id, skillName, color, Icon})=>(
                      <div 
                      className={` bg-dimPrimaryColor border-2 text-sm text-dimPrimaryColor font-bold rounded-xl p-1.5 ${flexBetweeen}`}
                      style={{
                        borderColor: color,
                        color: color
                      
                      }}
                      key={id}
                      >
                        {skillName}
                      </div>
                      ))}
                    </section>

                    <section className={`flex flex-row gap-2  ${reverse ? "self-start" : "self-end"} `}>
                      <a 
                      href={projectLink} 
                      className={`${flexBetweeen} flex-row hover:scale-110  bg-dimPrimaryColor p-2 border-[1.6px] border-whiteColor rounded-3xl gap-1 hover:border-blueColor hover:text-blueColor`}>
                        <TbExternalLink size="20"/>
                      </a>
                      <a 
                      href={projectRepo}
                      className={`${flexBetweeen} flex-row hover:scale-110 bg-dimPrimaryColor p-2 border-[1.6px] border-whiteColor  rounded-3xl gap-1 hover:border-blueColor hover:text-blueColor`}>
                         <SiGithub size="20"/>
                      </a>
                     </section>
                  </div>
                
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

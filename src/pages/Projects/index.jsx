import React from 'react'
import { projects } from '../../data'

export const  ProjectPage  = () => {
  return (
    <div className="border-green-300 flex-col justify-center items-center flex w-full h-full">
       <h1> TITLE </h1>  
       <section className='border-2 border-rose-600 flex flex-row'>
        <div className='border-2 border-orange-500'>
            image
        </div>
        <div>
          {projects.map(({projectLink, projectName, projectSkill, id})=>(
            <div key={id}> </div>
          ))}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro illum eveniet, quis necessitatibus optio aperiam culpa ad dolor similique!
            Totam cumque sit iusto, amet blanditiis consectetur vitae enim similique iure.
          </p>
        </div>
        
       </section>
    </div>
  )
}

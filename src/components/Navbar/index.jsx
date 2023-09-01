import React from 'react'
import { Link } from './link'

import { HamburgerMenu } from '../HamburgerMenu'
import { flexBetweeen } from '../../data'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 backdrop-blur-md border-whiteColor border-b-[1px] z-30 w-full py-3">

      <section>
        <div className=" items-center w-5/6 hidden md:flex  justify-between flex-row mx-auto">
          <div>
            Favicon
          </div>
          <div className='flex flex-row gap-6 justify-center items-center'> 
            <Link className={`${flexBetweeen} text-white gap-6 `}/>
            <div  className='rounded-3xl p-2 bg-dimSecondaryColor border-[1.6px] gap-2 flex  border-whiteColor hover:border-blueColor text-white'>
              <a 
                src="" 
                download=""
                className='hover:text-blueColor hover:cursor-pointer '
              >
                Resume
              </a>
                
              <a
                src="https://github.com/Benjahh"
                className=' hover:text-blueColor hover:cursor-pointer '
              >
                Github

              </a>
            </div>  
          </div>
        </div>
      </section>

      <section 
      id='mobilenavbar'
      className='md:hidden'>
        <div className=" bg-blue-200 w-5/6 md:hidden justify-between flex flex-row mx-auto">
          <div>
            Favicon
          </div>
          <HamburgerMenu/>
        </div>
      </section>

    </nav>
  )
}
import React from 'react'
import { Link } from './link'

import { HamburgerMenu } from '../HamburgerMenu'
import { flexBetweeen } from '../../data'

export const Navbar = () => {
  return (
    <nav 
   
    className="fixed top-0 bg-pink-300 z-30 w-full py-6">
      <section>
        <div className=" items-center w-5/6 hidden md:flex  justify-between flex-row mx-auto">
          <div>
            Favicon
          </div>
          <div className='flex flex-row gap-6 justify-center items-center'> 
            <Link className={`${flexBetweeen} gap-6`}/>
            <a 
            src="" 
            download=""
            className='rounded-md p-2 bg-black text-white hover:bg-blue-400 hover:cursor-pointer '
            >
            Resume
            </a>
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
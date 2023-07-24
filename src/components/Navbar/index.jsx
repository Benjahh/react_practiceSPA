import React from 'react'
import { Link } from './link'
import {GiHamburgerMenu} from "react-icons/gi"

export const Navbar = () => {
  return (
    <nav id="navbar" className="fixed top-0 bg-pink-300 z-30 w-full py-6">
      <div className="bg-blue-200 w-5/6 flex justify-between  flex-row mx-auto">
        <div>
          Favicon
        </div>
        <div className='flex flex-row justify-center items-center gap-6'> 
          <Link/>
          <GiHamburgerMenu size="25"/>
        </div>
      </div>

    </nav>
  )
}

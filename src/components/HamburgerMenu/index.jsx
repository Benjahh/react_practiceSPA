import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import { flexBetweeen } from '@/data'
import { Link } from '../Navbar/link'

export const HamburgerMenu = () => {
    const [isMenu, setIsMenu] = useState(false)
  return (
    <div>
        <button 
        onClick={() => setIsMenu(!isMenu)} 
        className={`${flexBetweeen}`}>
            <GiHamburgerMenu size="25"/>
        </button>
        <section className='h-auto w-auto border-2 border-green-600'>
            {isMenu && (
                <div className={`${flexBetweeen} absolute right-0 w-[300px] h-screen bg-yellow-300 items-center justify-between flex-col p-2 gap-6 flex border-rose-900 border-2`}>
                    <Link className={`${flexBetweeen} text-lg text-red-500 flex-col`}/>
                    <a 
                        src="" 
                        download="ht"
                        className='rounded-md p-2 bg-black text-white hover:bg-blue-400 hover:cursor-pointer '
                    >
                        Resume 
                    </a>

                </div>
            )}
        </section>
    </div>
  )
}

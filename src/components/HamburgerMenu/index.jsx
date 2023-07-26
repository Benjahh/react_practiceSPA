import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import { flexBetweeen } from '../../data'

export const HamburgerMenu = () => {
    const [isMenu, setIsMenu] = useState(false)
  return (
    <div>
        <button onClick={() => setIsMenu(!isMenu)} 
        className={`${flexBetweeen}`}>
        <GiHamburgerMenu size="25"/>
        </button>
        <section>
            {isMenu ? (
                <div className='absolute right-0 w-[300px] bg-yellow-300 border-rose-900 border-2'>
                    <p>true</p>
                    <p>true</p>
                    <p>true</p>
                    <p>true</p>
                </div>
            ) : (
                <div>
                    
                </div>
            )}
        </section>
        
    </div>
  )
}

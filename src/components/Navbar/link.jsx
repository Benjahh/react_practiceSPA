import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


export const Link = ({className}) => {
  return (
    <div className={className}>
        <AnchorLink 
          href='#home' 
          className='hover:scale-110'
        >
          Home
        </AnchorLink>
        <AnchorLink 
          href="#about"
          className='hover:scale-110'
        >
          About
        </AnchorLink>
        <AnchorLink 
          href="#skills"
          className='hover:scale-110'
        >
          Skills
        </AnchorLink>
        <AnchorLink 
          href="#projects"
          className='hover:scale-110'
        >
          Projects
        </AnchorLink>
        
    </div>
  )
}

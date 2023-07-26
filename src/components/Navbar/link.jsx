import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Link = ({children}) => {
  return (
    <>
        <AnchorLink href='#home'>Home</AnchorLink>
        <AnchorLink href="#about">About</AnchorLink>
        <AnchorLink href="#skills">Skills</AnchorLink>
        <AnchorLink href="#projects">Projects</AnchorLink>
    </>
  )
}

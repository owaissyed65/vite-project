import React from 'react'
import NavbarDown from './NavbarDown/NavbarDown'
import Navbar from './NavbarFolder/Navbar'

const Header = () => {
  return (
    <>
      <Navbar home='home' skills='skills' experience='experience' project='project' myResume='myResume' icon='logo'/>
      <NavbarDown />
    </>
  )
}

export default Header

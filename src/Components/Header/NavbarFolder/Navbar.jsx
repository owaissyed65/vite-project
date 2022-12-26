import React, { useState } from 'react'
import NavbarStarting from './NavbarStyle'
import { UilBars } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    // div
    <NavbarStarting >
      {/* for left logo */}
      <div className="logo"></div>
      {/* For btw lists */}
      <ul className={`${click !== true ? 'list1' : 'list2'}`}>
        <li><a href="">home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Blog</a></li>
      </ul>
      {/* For Responsiveness */}
      <div className='menu'> <button style={{ backgroundColor: '#34568B', border: 'none' }} onClick={() => click !== true ? setClick(true) : setClick(false)}>{click !== true ? <UilBars size={"4rem"} color='white' /> : <UilTimes size={"4rem"} color='white' />}</button></div>
    </NavbarStarting>
  )
}

export default Navbar

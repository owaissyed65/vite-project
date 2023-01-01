import React, { useState } from 'react'
import NavbarStarting from './NavbarStyle'
import { UilBars } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { motion } from "framer-motion"
import logo from '../../../images/logo.png';
const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    // div
    <NavbarStarting >
      {/* for left logo */}
      <div className="logo"><a href="#"><motion.img initial={{ x: 100 }} whileInView={{ x: 0 }} whileHover={{ y: -2 }} src={logo} alt="" /></a></div>
      {/* For btw lists */}
      <ul className={`${click !== true ? 'list1' : 'list2'}`}>
        <motion.li initial={{ x: 100 }} whileInView={{ x: 0 }} whileHover={{ y: -2 }}><a href="#">home</a></motion.li>
        <motion.li initial={{ x: 100 }} whileInView={{ x: 0 }} whileHover={{ y: -2 }}><a href="#">About</a></motion.li>
        <motion.li initial={{ x: 100 }} whileInView={{ x: 0 }} whileHover={{ y: -2 }}><a href="#">Contact</a></motion.li>
        <motion.li initial={{ x: 100 }} whileInView={{ x: 0 }} whileHover={{ y: -2 }}><a href="#">Blog</a></motion.li>
      </ul>
      {/* For Responsiveness */}
      <div className="menu">
        {
          click !== true ? <motion.button initial={{ x: -100 }}
            whileInView={{ x: 10 }} style={{ backgroundColor: '#34568B', border: 'none', cursor: 'pointer' }} onClick={() => setClick(true)}><UilBars size={"3rem"} color='white' /></motion.button> : <motion.button whileInView={{ x: 0 }} style={{ backgroundColor: '#34568B', border: 'none', cursor: 'pointer' }} onClick={() => setClick(false)}><UilTimes size={"3rem"} color='white' /></motion.button>
        }
      </div>
    </NavbarStarting>

  )
}

export default Navbar

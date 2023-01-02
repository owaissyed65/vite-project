import React, { useState } from 'react'
import NavbarStarting from './NavbarStyle'
import { UilBars } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'
import { motion } from "framer-motion"
import logo from '../../../images/logo.png';
import { Link } from "react-scroll";
const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    // div
    <NavbarStarting >
      {/* for left logo */}
      <div className="logo" ><a href="#"><motion.img initial={{ x: 100 }} whileInView={{ x: -20 }} whileHover={{ y: -2 }} src={logo} alt="" /></a></div>
      {/* For btw lists */}
      <ul className={`${click !== true ? 'list1' : 'list2'}`}>

        <motion.li initial={{ x: 100 }} whileInView={{ x: 0 }} whileHover={{ y: -2 }}><Link activeClass="active" to="navbar" spy={true} smooth={true}>home</Link></motion.li>
        <motion.li initial={{ x: 100 }} whileInView={{ x: 0 }} whileHover={{ y: -2 }}><Link to="skills" spy={true} smooth={true}>Skills</Link></motion.li>
        <motion.li initial={{ x: 100 }} whileInView={{ x: 0 }} whileHover={{ y: -2 }}><Link to="experience" spy={true} smooth={true}>Experience</Link></motion.li>
        <motion.li initial={{ x: 100 }} whileInView={{ x: 0 }} whileHover={{ y: -2 }}><Link to="projects" spy={true} smooth={true}>Projects</Link></motion.li>
        <motion.li initial={{ x: 100 }} whileInView={{ x: 0 }} whileHover={{ y: -2 }}><Link to="hire" spy={true} smooth={true}>My Resume</Link></motion.li>
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

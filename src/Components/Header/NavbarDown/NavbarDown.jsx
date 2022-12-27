import { motion } from "framer-motion"
import React from 'react'
import header from '../../../images/header.jpg'
import NavbarEnding from './NavbarDownStyle'
const NavbarDown = () => {

    return (
        <NavbarEnding>
            <motion.div className='opac'>
                <img src={header} alt="image" />
            </motion.div>
            <div className="box">
                <motion.div initial={{x:-150}} whileInView={{x:0}} className="box1"><h2>{"<Coder>"}</h2><span>who writes efficient and elegant code</span> </motion.div>
                <motion.div initial={{x:-150}} whileInView={{x:0}} className="box2" ><h2>Developer</h2><span>Frontend And Backend Developer</span></motion.div>
            </div>
        </NavbarEnding>
    )
}

export default NavbarDown

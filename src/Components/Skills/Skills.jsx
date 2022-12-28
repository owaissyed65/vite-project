import { motion } from 'framer-motion'
import React from 'react'
import SkillStyle from './SkillStyle'

const Skills = () => {
  return (
    <SkillStyle>
      <h1>My&nbsp;</h1>
      <div className="container">
        <div className="skills">
          <span className='media'>Html5 & CSS3</span>
          <div className='skill-box'>
            <motion.div initial={{ width: '0px' }} whileInView={{ width: '90%' }} className='box css3'><p >90%</p></motion.div>
          </div>
          <span className='media'>JavaScript</span>
          <div className='skill-box'>
            <motion.div initial={{ width: '0px' }} whileInView={{ width: '70%' }} className='box javaScript'><p >70%</p></motion.div>
          </div>
          <span className='media' >Java</span>
          <div className='skill-box'>
            <motion.div initial={{ width: '0px' }} whileInView={{ width: '60%' }} className='box java'><p >60%</p></motion.div>
          </div>
        </div>
        <div className="skills mediaQuery">
          <span className='media'>Reactjs</span>
          <div className='skill-box'>
            <motion.div initial={{ width: '0px' }} whileInView={{ width: '85%' }} className='box reactJs'><p >85%</p></motion.div>
          </div>
          <span className='media'>NodeJS And ExpressJS</span>
          <div className='skill-box'>
            <motion.div initial={{ width: '0px' }} whileInView={{ width: '70%' }} className='box backend'><p >70%</p></motion.div>
          </div>
          <span className='media'>C Language</span>
          <div className='skill-box'>
            <motion.div initial={{ width: '0px' }} whileInView={{ width: '80%' }} className='box clang'><p >85%</p></motion.div>
          </div>
        </div>
      </div>
    </SkillStyle>
  )
}

export default Skills

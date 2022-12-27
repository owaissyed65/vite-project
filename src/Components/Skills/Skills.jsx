import { motion } from 'framer-motion'
import React from 'react'
import SkillStyle from './SkillStyle'

const Skills = () => {
  return (
    <SkillStyle>
      <h1>My&nbsp;</h1>
      <div className="container">
        <div className="skills1">
          <span>Html5 & CSS3</span>
          <div className='skill-box'>
            <motion.div initial={{ width: '0px' }} whileInView={{ width: '90%' }} className='box css3'><p >90%</p></motion.div>
          </div>
          <span>JavaScript</span>
          <div className='skill-box'>
            <motion.div initial={{ width: '0px' }} whileInView={{ width: '70%' }} className='box javaScript'><p >70%</p></motion.div>
          </div>
          <span>Java</span>
          <div className='skill-box'>
            <motion.div initial={{ width: '0px' }} whileInView={{ width: '60%' }} className='box java'><p >60%</p></motion.div>
          </div>
        </div>
        <div className="skills2">
          hello
        </div>
      </div>
    </SkillStyle>
  )
}

export default Skills

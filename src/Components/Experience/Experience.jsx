import { motion } from 'framer-motion';
import React from 'react'
import { Div, DivStyling, ExperienceStyle } from './ExperienceStyle'

const Experience = () => {
  return (
    <DivStyling >
      <h1 id='h1' style={{ textAlign: 'center' }}>My&nbsp;</h1>
      <Div>
        <ExperienceStyle className='experince' >
          <motion.div initial={{ background: 'conic-gradient(#f4392f 0deg, #ededed 0deg)' }} whileInView={{ background: `conic-gradient(#f4392f ${50 * 3.6}deg, #ededed 0deg)` }} className="circle">
            <motion.span id='circle-progress'><span>6 Month </span></motion.span> </motion.div>
          <h1 id='h1-end'>Front-end </h1>
        </ExperienceStyle>
        <ExperienceStyle className='experince'>
          <motion.div initial={{ background: 'conic-gradient(#f4392f 0deg, #ededed 0deg)' }} whileInView={{ background: `conic-gradient(#f4392f ${30 * 3.6}deg, #ededed 0deg)` }} className="circle">
            <motion.span id='circle-progress'><span>3 Month </span></motion.span> </motion.div>
          <h1 id='h1-end'>Backend</h1>
        </ExperienceStyle>
      </Div>
    </DivStyling>
  )
}

export default Experience

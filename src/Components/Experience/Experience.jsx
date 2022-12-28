import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import ExperienceStyle from './ExperienceStyle'

const Experience = () => {

  const endOfProgress = 50;
  const [time, setTime] = useState(0);
  function progress() {
    useEffect(() => {
      const timer = setTimeout(() => {
        setTime(time + 1);
      }, 100);
      if (time === endOfProgress) {
        clearTimeout(timer);
      }

    }, [time]);
    console.log('hello')
  }

  return (
    <ExperienceStyle >
      <motion.div initial={{ background: 'conic-gradient(blue 0deg, #ededed 0deg)' }} whileInView={{ background: `conic-gradient(blue ${50 * 3.6}deg, #ededed 0deg)`, animationDelay: '5s' }} className="circle"><motion.span id='circle-progress'>{time}</motion.span> </motion.div>
    </ExperienceStyle>

  )
}

export default Experience

import React from 'react'
import { ThemeProvider } from 'styled-components'
import Global from './StyledComponent/Global'
import { Theme } from './StyledComponent/ThemeAndVariable.js'
import { motion, useScroll } from "framer-motion";
import Header from './Components/Header/Header'
const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global />

        <Header />
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <div style={{ height: '200vh', backgroundColor: 'black' }}></div>
      </ThemeProvider>
    </>
  )
}

export default App

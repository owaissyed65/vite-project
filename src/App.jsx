import React from 'react'
import { ThemeProvider } from 'styled-components'
import Navbar from './Components/Header/NavbarFolder/Navbar'
import Global from './StyledComponent/Global'
import { Theme } from './StyledComponent/ThemeAndVariable.js'

const App = () => {


  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global />
        <Navbar />
        <div style={{height:'200vh',backgroundColor:'black'}}></div>
      </ThemeProvider>
    </>
  )
}

export default App

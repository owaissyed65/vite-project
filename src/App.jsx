import React from "react";
import { ThemeProvider } from "styled-components";
import Global from "./StyledComponent/Global";
import { Theme } from "./StyledComponent/ThemeAndVariable.js";
import { motion, useScroll } from "framer-motion";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Global />
        <Header />
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress, zIndex: 2}}
        />
        <Skills/>
        <Project/>
      </ThemeProvider>
    </>
  );
};

export default App;

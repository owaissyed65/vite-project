import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Global from "./StyledComponent/Global";
import { motion, useScroll } from "framer-motion";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Projects/Project";
import Footer from "./Components/Footer/Footer";
import Hire from "./Components/Hire/Hire";
import loading from "./images/loading.gif";

const GifDiv = styled.div`
  // background-color:red;
  height: 35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
`;

const App = () => {
  const [state, setstate] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setstate(true);
    }, Math.floor(Math.random() * 10000));
  }, []);
  const { scrollYProgress } = useScroll();
  return state !== true ? (
    <GifDiv>
      <img src={loading} alt="" />
    </GifDiv>
  ) : (
    <>
      <Global />
      <Header />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress, zIndex: 1000 }}
      />
      <Skills />
      <Experience />
      <Project />
      <Hire />
      <Footer />
    </>
  );
};

export default App;

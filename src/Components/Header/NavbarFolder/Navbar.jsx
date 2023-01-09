import React, { useState } from "react";
import NavbarStarting from "./NavbarStyle";
import { UilBars } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import logo from "../../../images/logo.png";
import { Link } from "react-scroll";
import NavbarBlog from "./NavbarBlog";
import { NavLink } from "react-router-dom";
const Navbar = ({ home, skills, experience, project, myResume, icon }) => {

  const [click, setClick] = useState(false);

  return (
    // div
    <NavbarStarting>
      {/* for left logo */}
      {icon === 'logo' ? <div className="logo">
        <Link to="navbar" style={{ cursor: 'pointer' }} smooth>
          <motion.img
            initial={{ x: 100 }}
            whileInView={{ x: -20 }}
            whileHover={{ y: -2 }}
            src={logo}
            alt=""
          />
        </Link>
      </div> : <div className="logo">
        <NavLink to='/'>
          <motion.img
            initial={{ x: 100 }}
            whileInView={{ x: -20 }}
            whileHover={{ y: -2 }}
            src={logo}
            alt=""
          />
        </NavLink>
      </div>}
      {/* For btw lists */}
      <ul className={`${click !== true ? "list1" : "list2"}`}>
        {home === "home" ? (
          <motion.li
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            whileHover={{ y: -2 }}
          >
            <Link activeClass="active" to="navbar" spy={true} smooth={true}>
              {home}
            </Link>
          </motion.li>
        ) : (
          <motion.li
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            whileHover={{ y: -2 }}
          >
            <NavbarBlog blog="home" link="/" />
          </motion.li>
        )}
        {skills === "skills" ? (
          <motion.li
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            whileHover={{ y: -2 }}
          >
            <Link to="skills" spy={true} smooth={true}>
              {skills}
            </Link>
          </motion.li>
        ) : ''}
        {experience === "experience" ? (
          <motion.li
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            whileHover={{ y: -2 }}
          >
            <Link to="experience" spy={true} smooth={true}>
              {experience}
            </Link>
          </motion.li>
        ) : ''}
        {project === "project" ? (
          <motion.li
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            whileHover={{ y: -2 }}
          >
            <Link to="projects" spy={true} smooth={true}>
              {project}
            </Link>
          </motion.li>
        ) : ''}
        {myResume === "myResume" ? (
          <motion.li
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            whileHover={{ y: -2 }}
          >
            <Link to="hire" spy={true} smooth={true}>
              {myResume}
            </Link>
          </motion.li>
        ) : ''}
        <motion.li
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          whileHover={{ y: -2 }}
        >
          <NavbarBlog blog="blog" link="/blog" />
        </motion.li>
      </ul>
      {/* For Responsiveness */}
      <div className="menu">
        {click !== true ? (
          <motion.button
            initial={{ x: -100 }}
            whileInView={{ x: 10 }}
            style={{
              backgroundColor: "#34568B",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setClick(true)}
          >
            <UilBars size={"3rem"} color="white" />
          </motion.button>
        ) : (
          <motion.button
            whileInView={{ x: 0 }}
            style={{
              backgroundColor: "#34568B",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setClick(false)}
          >
            <UilTimes size={"3rem"} color="white" />
          </motion.button>
        )}
      </div>
    </NavbarStarting>
  );
};

export default Navbar;

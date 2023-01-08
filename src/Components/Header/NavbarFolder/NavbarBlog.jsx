import React from 'react'
import { Link } from "react-router-dom";
const NavbarBlog = (props) => {
  return (
    <Link to={`${props.link}`}>{props.blog}</Link>
  )
}

export default NavbarBlog

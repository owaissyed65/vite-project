import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Header/NavbarFolder/Navbar";

const BlogDetails = () => {
  const { params } = useSelector((state) => state);
  return (
    <div>
      <Navbar />
      i am blog BlogDetails{params.params}
    </div>
  )
};

export default BlogDetails;

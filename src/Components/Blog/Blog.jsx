import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { paramsAction } from "../../Redux/actionCreator/action";
import Footer from "../Footer/Footer";
import Navbar from "../Header/NavbarFolder/Navbar";
import { BlogBox, BlogHeading } from "./BlogStyle";

const Blog = () => {
  const item = [
    {
      heading:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elitSuscipit delectus ex aliquid corporis nulla",
      disc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
      sequi eligendi cumque, inventore aperiam rem quaerat! Dicta
      totam quisquam eligendi.`,
      slug: "1",
    },
    {
      heading:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elitSuscipit delectus ex aliquid corporis nulla",
      disc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
      sequi eligendi cumque, inventore aperiam rem quaerat! Dicta
      totam quisquam eligendi.`,
      slug: "2",
    },
    {
      heading:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elitSuscipit delectus ex aliquid corporis nulla",
      disc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
      sequi eligendi cumque, inventore aperiam rem quaerat! Dicta
      totam quisquam eligendi.`,
      slug: "3",
    },
  ];
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: "#e5e7eb", overflowX: "hidden" }}>
      <Navbar />
      <BlogHeading>
        <h1>
          My Blogs&nbsp;<span>{item.length}</span>
        </h1>
      </BlogHeading>
      {item.map((data, index) => {
        return (
          <BlogBox key={index}>
            <div className="blogContentContainer">
              <p>Date</p>
              <Link to={`/blog/details/${data.slug}`} onClick={() => {
                dispatch(paramsAction(data.slug));
              }}>
                <h1>{data.heading}</h1>
              </Link>
              <p className="discription">{data.disc}</p>
              <Link to={`/blog/details/${data.slug}`} onClick={() => {
                dispatch(paramsAction(data.slug));
              }}>
                Read More
              </Link>
            </div>
          </BlogBox>
        );
      })}

      <Footer />
    </div>
  );
};

export default Blog;

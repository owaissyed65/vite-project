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
      slug: "1",
    },
    {
      heading:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elitSuscipit delectus ex aliquid corporis nulla",
      disc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
      sequi eligendi cumque, inventore aperiam rem quaerat! Dicta
      totam quisquam eligendi.`,
      slug: "1",
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
              <a href="">
                <h1>
                  {data.heading}
                </h1>
              </a>
              <p>
                {data.disc}
              </p>
              <Link to={`/blog/details/${data.slug}`}>
                <button
                  onClick={() => {
                    dispatch(paramsAction(data.slug));
                  }}
                >
                  Read More
                </button>
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

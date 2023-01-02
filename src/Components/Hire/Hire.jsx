import React from "react";
import { HireContainer } from "./HireStyle";
import hireme from "../../images/hireme.gif";
import styled from "styled-components";
const Heading = styled.h1`
    // background-color: orange;
    font-size: 3.5rem;
    text-align:center;
    margin-bottom: 4px;
    font-family: ${({ theme }) => theme.nav.fontFamily};
    @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
        margin-bottom:0px;
    }
`;
const Hire = () => {
  return (
    <>
      <Heading>Hire Me</Heading>
      <HireContainer>
        <div className=" box box1" id="hire">
          <p>
            As a <span style={{ color: "#ff0055" }}>web developer</span> with a
            strong foundation in&nbsp;
            <span style={{ color: "#ff0055" }}>computer science</span> and
            experience building interactive and user-friendly websites.
          </p>
          <p>
            I believe my&nbsp; 
            <span style={{ color: "#ff0055" }}>skills and passion</span> make me
            an ideal fit for this role, and I am excited about the opportunity
            to bring value to your organization.
          </p>
          <button className="button-79" role="button">
            <a
              href="https://drive.google.com/file/d/1WfMPocVYE1UifnwvHoCMpm2c8XHjzCSO/view?usp=sharing"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              My Resume
            </a>
          </button>
        </div>
        <div className="box box2">
          <img src={hireme} alt="gif" />
        </div>
      </HireContainer>
    </>
  );
};

export default Hire;

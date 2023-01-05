import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ErrorContainer = styled.div`
  // background-color: red;
  height: 50rem;
  font-family: "'Signika', sans-serif";
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow-x:hidden;
  p {
    font-size: 8rem;
    letter-spacing: 1.5rem;
    font-weight: light;
    span {
      transition: font-size 2s;
      &:hover {
        color: #f4392f;
      }
    }
  }
  .error-content {
    background-color: white;
    padding: 0.4rem;
    position: absolute;
    top: 24rem;
    margin-right: 3.9rem;
    border-radius: 1rem 0 0 0;
    z-index: 1;
    transition: transform 2s;
    &:hover {
      transform: scale(1.5, 1.5);
    }
    span {
      font-size: 1.8rem;
    }
  }
  .error-button {
    margin-top: 2.5rem;
    height: 3rem;
    // border: 2px solid red;
    width: 15rem;
    // background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer: cursor;
    a {
      tex-decoration: none;
      width: 100%;
      height: 100%;

      button {
        background-color: #ff6f61;
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        color: white;
        transition: background-color 1s, transform 1s, color 1s;
        &:hover {
          background-color: #faa59e;
          transform: scale(1.4, 1.4);
          color: black;
        }
      }
    }
  }
  @media screen and (max-width:668px){
    p {
      font-size: 5rem;
      letter-spacing: 1rem;
    }
    .error-button {
      margin-top: 6rem;
  }
`;
const Error = () => {
  return (
    <ErrorContainer>
      <p>
        <span>O</span>
        <span>O</span>
        <span>P</span>
        <span>S</span>
        <span>!</span>
      </p>
      <div className="error-content">
        <span>404 -The Page can't be found</span>
      </div>
      <div className="error-button">
        <Link to="/">
          <button>Go to Homepage</button>
        </Link>
      </div>
    </ErrorContainer>
  );
};

export default Error;

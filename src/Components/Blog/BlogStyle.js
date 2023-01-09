import styled from "styled-components";

export const BlogHeading = styled.div`
  // background-color:yellow;
  text-align: left;
  margin-top: 2rem;
  h1 {
    // background-color:red;
    font-size: 3.8rem;
    display: flex;
    width: 50rem;
    justify-content: center;
    letter-spacing: 2px;
    overflow-x: hidden;
  }
  span {
    &::before {
      content: "(";
    }
    &::after {
      content: ")";
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    h1 {
      width: auto;
      font-size: 3.2rem;
    }
  }
`;
export const BlogBox = styled.div`
  // background-color: yellow;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  margin-top: 4rem;
  min-height: 15rem;
  padding-left: 4rem;
  div.blogContentContainer {
    // background-color: red;
    background-color: #fff;
    min-height:15rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    width: 87rem;
    height: 100%;
    // margin-left:5rem;
    padding: 0.8rem 3.7rem;
    a {
      text-decoration: none;
      color: black;
      h1 {
        font-size: 2.4rem;
        margin-bottom: 1rem;
      }
    }
    p {
      margin-bottom: 1rem;
    }
    p.discription{
      color: rgb(105, 102, 102);
    }
    a {
        &:hover{ 
            cursor:pointer;
        }
    }

  }

  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    // background-color: yellow;
    display: flex;
    height: auto;
    justify-content: center;
    padding-left: 3rem;
    padding-right: 3rem;
    div.blogContentContainer {
      width: auto;
      //   background-color: red;
    }
  }
`;

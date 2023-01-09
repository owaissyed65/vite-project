import styled from "styled-components";

export const ProjectContainer = styled.div`
  // background-color: orange;
  height: 90%;
  width: 80%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  // border:4px solid black;
  border-radius: 18px;
  font-family: ${({ theme }) => theme.nav.fontFamily};
  box-shadow: 1px 1px 10px 3px ${({ theme }) => theme.bg};
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    width: 90%;
  }
`;
export const ProjectImage = styled.div`
  height: 65%;
  width: 100%;
  border-radius: 18px;
  // background-color: aqua;
  img {
    border-radius: 18px;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 1.1rem;
    height: 60%;
    img {
      border-radius: 18px;
      display: inline-block;
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
`;
export const ProjectContent = styled.div`
  height: 35%;
  letter-spacing: 1px;
  width: 100%;
  display: flex;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 1.6rem;
  background-color: white;
  p {
    color: rgb(105, 102, 102);
  }
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    font-size: 1.1rem;
    min-height: 30%;
  }
  button {
    margin-top: 1rem;
    a {
      text-decoration: none;
      color: white;
    }
  }
`;
export const DivContainer = styled.div`
  // background-color: yellow;
  height: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h1 {
    font-size: 3rem;
    span::before{
      content:'';
      animation: project infinite linear 5s forwards;
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    min-height: 80rem;
  }
  @keyframes project {
    0% {
      content: "P";
    }
    15% {
      content: "Pr";
    }
    30% {
      content: "Pro";
    }
    42% {
      content: "Proj";
    }
    55% {
      content: "Proje";
    }
    68% {
      content: "Projec";
    }
    81% {
      content: "Project";
    }
    100% {
      content: "Projects";
    }
    
  }

`;

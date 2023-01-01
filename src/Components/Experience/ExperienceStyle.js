import styled from "styled-components";

export const ExperienceStyle = styled.div`
  // background-color: yellow;
  // border:2px solid black;
  width: 40rem;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.nav.fontFamily};
  flex-direction: column;
  .circle {
    background: conic-gradient(
      ${({ theme }) => theme.hover.color} 0deg,
      #ededed 0deg
    );
    // background: conic-gradient(blue 0deg, #ededed 0deg);
    width: 14rem;
    height: 14rem;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      content: "";
      width: 12rem;
      height: 12rem;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
    }
    #circle-progress {
      span {
        color: red;
      }
    }
    span {
      position: relative;
      font-size: 2rem;
    }
  }
  #h1-end {
    margin-top: 1rem;
  }
`;
export const Div = styled.div`
  // background-color:orange;
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    height: 45rem;
    align-items: center;
    overflow-x: hidden;
  }
`;
export const DivStyling = styled.div`
  #h1 {
    font-size: 3rem;
  }
  #h1::after {
    content: "";
    animation: experience infinite linear 5s forwards;
    font-size: 3rem;
    color: ${({ theme }) => theme.bg};
  }
  @keyframes experience {
    0% {
      content: "E";
    }
    10% {
      content: "Ex";
    }
    20% {
      content: "Exp";
    }
    30% {
      content: "Expe";
    }
    40% {
      content: "Exper";
    }
    50% {
      content: "Experi";
    }
    60% {
      content: "Experie";
    }
    70% {
      content: "Experien";
    }
    85% {
      content: "Experienc";
    }
    100% {
      content: "Experience";
    }
  }
`;

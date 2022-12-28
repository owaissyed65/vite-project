import styled from "styled-components";

const ExperienceStyle = styled.div`
  background-color: yellow;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .circle {
    // background: conic-gradient(blue ${({exp})=>exp}deg, #ededed 0deg);
    background: conic-gradient(blue 0deg, #ededed 0deg);
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
    span {
      position: relative;
      font-size: 2rem;
    }
  }
`;
export default ExperienceStyle;

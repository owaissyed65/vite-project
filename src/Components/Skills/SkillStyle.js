import styled from "styled-components";
const SkillStyle = styled.div`
  font-size: ${({ theme }) => theme.fontSize};
  height: 45rem;
  //   background-color: yellow;
  margin-top: 2rem;
  text-align: center;

  font-family: ${({ theme }) => theme.nav.fontFamily};
  h1 {
    padding-top: 1.5rem;
    &::after {
      content: "";
      color: ${({ theme }) => theme.hover.color};
      animation: skills infinite linear 5s forwards;
    }
  }

  .container {
    // background-color: orange;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    .skills {
      //   background-color: pink;
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: right;
      gap:5px;
      span {
        margin-top: 2rem;
      }
      .box {
        height: 100%;
        border-radius: 2rem;
        p {
          padding-right: 7px;
          height: 100%;
          color: white;
        }
      }
      .css3 {
        width: 90%;
        background-color: #f4392f;
      }
      .javaScript {
        width: 75%;
        background-color: #f4392f;
      }
      .java {
        width: 60%;
        background-color: #f4392f;
      }
      .reactJs {
        width: 85%;
        background-color: #f4392f;
      }
      .clang {
        width: 80%;
        background-color: #f4392f;
      }
      .backend {
        width: 70%;
        background-color: #f4392f;
      }
    }

    .skill-box {
      width: 70%;
      background-color: #ddd;
      height: 5%;
      border-radius: 2rem;
    }
  }
  @keyframes skills {
    0% {
      content: "S";
    }
    10% {
      content: "Sk";
    }
    17% {
      content: "Ski";
    }
    24% {
      content: "Skil";
    }
    34% {
      content: "Skill";
    }
    45% {
      content: "Skills";
    }
    60% {
      content: "E";
    }
    65% {
      content: "Ex";
    }
    70% {
      content: "Exp";
    }
    75% {
      content: "Expe";
    }
    80% {
      content: "Exper";
    }
    85% {
      content: "Expert";
    }
    90% {
      content: "Experti";
    }
    95% {
      content: "Expertis";
    }
    100% {
      content: "Expertise";
    }
  }
@media screen and (max-width:${({ theme }) => theme.media.mobile}){
  .container{
    // background-color:yellow;
    flex-direction: column;
    height:80%;
    position:relative;
    .skills{
      flex:0.5;
      .media{
        margin-top:0.5rem;
      }
    }
    .mediaQuery{
      justify-content:flex-start;
      gap:5px;
    }
    .skill-box {
      width: 70%;
      height: 8%;
      border-radius: 2rem;
      font-size:1rem;
    }
        
  }
}  
`;
export default SkillStyle;

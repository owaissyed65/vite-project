import styled from "styled-components";

const NavbarEnding = styled.div`
  // background-color:blue;
  display: flex;
  position: relative;
  overflow-x: hidden;
  font-family: ${({ theme }) => theme.nav.fontFamily};
  box-shadow: 10px 0px 10px ${({ theme }) => theme.bg};
  div.opac {
    display: flex;
    justify-content: center;
    width: 100%;
    img {
      width: 98.7vw;
    }
  }
  .box {
    font-size: 2rem;
    position: absolute;
    // background-color:yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    height: 100%;
    .box1 {
      // background-color:red;
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      flex-wrap: wrap;
      h2 {
        color: ${({ theme }) => theme.hover.color};
      }
    }
    .box2 {
      // background-color:orange;
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      flex-wrap: wrap;
      h2 {
        color: ${({ theme }) => theme.hover.color};
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    // background-color:red;

    overflow-x: hidden;
    div.opac {
      img {
        width: 98.8vw;
        height: 500px;
      }
    }
    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .box1 {
        // background-color:red;
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        margin-top: 4rem;
      }
      .box2 {
        // background-color:red;
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 16px;
      }
    }
  }
`;
export default NavbarEnding;

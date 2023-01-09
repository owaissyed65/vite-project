import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  min-height: 18rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  .box {
    flex: 1;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    // border: 2px solid black;
  }
  .box1 {
    a{
        text-decoration: none;
        color:#fff;
        cursor: pointer;
        h1 {
          font-size: 6rem;
          letter-spacing: 5px;
        }
    }
    p {
      font-size: 1.6rem;
      letter-spacing: 2px;
    }
  }
  .box2 {
    gap: 1rem;
    .iconsandinfo {
      // background-color: red;
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      width: 25rem;
      p.icons {
        margin-right: 0.8rem;
      }
    }
  }
  .box3 {
    gap: 1rem;
    h1 {
      letter-spacing: 0.3rem;
    }
    div.icon {
      a {
        color: white;
        margin-left: 1rem;
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    flex-direction: column;
    .box{
        margin-top:5px; 
        padding: 5px;
    }
  }
`;

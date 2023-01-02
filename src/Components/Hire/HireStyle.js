import styled from "styled-components";

export const HireContainer = styled.div`
height: 40rem;
display: flex;
padding:2.5rem;
// background-color:yellow;
  .box {
    font-family: ${({ theme }) => theme.nav.fontFamily};
 }
.box1 {
    flex: 1.2;
    height: 100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    padding-right:1.5rem;
    padding-left:1.5rem;
    p{
        text-align:center;
        font-size:2rem;
        word-spacing:1.5px;
        margin-bottom:2px;
        color: rgb(105, 102, 102);
    }
    button{
        margin-top:1.3rem;
    }
  }
  .box2 {
    flex: 0.8;
    height: 100%;
    display:flex;
    align-items:center;
    img {
      display: block;
      width: 100%;
      height: 80%;
      background-color: red;
      object-fit: cover;
      border-radius:15px;
      box-shadow: 1px 1px 10px 3px ${({ theme }) => theme.bg};
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.media.mobile}) {
  .box1{
    justify-content:flex-start;
    p{
        font-size:1.7rem;
    }
  }
  .box2{
    display:none;
  }
}
`;
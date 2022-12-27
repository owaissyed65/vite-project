import { createGlobalStyle } from "styled-components";
const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
html{
    font-size:62.5%
}
.progress-bar {
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    height: 10px;
    background: ${({ theme }) => theme.hover.color};
    transform-origin: 0%;
    @media screen and (max-width:${({ theme }) => theme.media.mobile}){
        top: 0px;
    }
  }
`
export default Global;
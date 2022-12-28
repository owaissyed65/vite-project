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
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    border-readius:5px;
    
    background:#FF6F61;
    //  ${({ theme }) => theme.hover.color};
    transform-origin: 0%;
  }
`;
export default Global;

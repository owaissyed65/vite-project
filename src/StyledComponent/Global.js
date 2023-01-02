import { createGlobalStyle } from "styled-components";
const Global = createGlobalStyle`
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
    z-index:100000000;
    background:#FF6F61;
    //  ${({ theme }) => theme.hover.color};
    transform-origin: 0%;
  }
  .button-79 {
    backface-visibility: hidden;
    background: #332cf2;
    border: 0;
    border-radius: .375rem;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 1.625rem;
    font-weight: 700;
    letter-spacing: -.01em;
    line-height: 1.3;
    padding: 1rem 1.25rem;
    position: relative;
    text-align: left;
    text-decoration: none;
    transform: translateZ(0) scale(1);
    transition: transform .2s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    &:disabled {
        color: #787878;
        cursor: auto;
    }
    &:not(:disabled):hover {
        transform: scale(1.05);
    }
    &:not(:disabled):hover:active {
    transform: scale(1.05) translateY(.125rem);
    }
    &:focus {
    outline: 0 solid transparent;
    }
    &:focus:before {
    border-width: .125rem;
    content: "";
    left: calc(-1*.375rem);
    pointer-events: none;
    position: absolute;
    top: calc(-1*.375rem);
    transition: border-radius;
    user-select: none;
    }
    &:focus:not(:focus-visible) {
    outline: 0 solid transparent;
    }
    &:not(:disabled):active {
    transform: translateY(.125rem);
    }
}
`;
export default Global;

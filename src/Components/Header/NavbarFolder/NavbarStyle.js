import styled from "styled-components";

const NavbarStarting = styled.div`

background-color:${({ theme }) => theme.bg};
font-size:2rem;
display:flex;
height:7.2rem;
font-family:${({ theme }) => theme.nav.fontFamily};
position:sticky;
div.logo{
        flex:1.5;
        // background-color:purple;
        height:100%;
}
ul.list1{
    display:flex;
    flex:2.5;
    // background-color:black;   
    justify-content:center;
    align-items: center;
    li{
        list-style: none;
        text-transform: uppercase;
        padding:1rem;
        margin:0.2rem;        
        a{
            text-decoration: none;   
            color:white;
            text-transform:upperclass;
            &:hover{
                color:${({ theme }) => theme.hover.color}; !important
            }
        }
    }

}
div.menu{
    display:none;
    flex:0.5;
}
@media screen and (max-width:${({theme})=>theme.media.mobile}){
    z-index:1;
    div.menu{
        flex:1.5;
        display:flex;
        justify-content:center;
        height:100%;
        align-items:center;
        
    }
    ul.list1{
        display:none;
    }
    ul.list2{
        background-color:white;
        display:block;
        position:absolute;
        top:7rem;
        height:47vh;
        width:100%;
        text-align:center;
        padding:1rem;
        li{
        list-style: none;
        text-transform: uppercase;
        padding:1.2rem;
        &:hover{
            background-color:${({ theme }) => theme.bg}; !important
        }
            a{
                color:black;
                text-decoration: none;   
                text-transform:upperclass;
                &:hover{
                    color:${({ theme }) => theme.hover.color}; !important
                    
                }
            }
        }
    }
}
`;
export default NavbarStarting

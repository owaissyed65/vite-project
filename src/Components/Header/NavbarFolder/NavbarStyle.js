import styled from "styled-components";

const NavbarStarting = styled.div`
position:Sticky;
top:0;
background-color:${({ theme }) => theme.bg};
font-size:2rem;
display:flex;
height:7.4rem;
font-family:${({ theme }) => theme.nav.fontFamily};
z-index:1;
div.logo{
        flex:1.5;
        // background-color:purple;
        margin-left:2rem;
        text-align:center;
        overflow:hidden;
        a{
            text-decoration: none;   
            img{
                height:14rem;
                // background-color:white;
                filter: invert(100%);
                opacity:3;
                width:14rem;
                padding-bottom:6rem;
                // filter: opacity(2);
            }
        }
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
@media screen and (max-width:${({ theme }) => theme.media.mobile}){
    position:Sticky;
    top:0;
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
        transition: color 2s;
        background-color:white;
        display:block;
        position:absolute;
        top:7rem;
        // height:50vh;
        width:100%;
        text-align:center;
        padding:0.5rem;
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
                color:black;
                &:hover{
                    color:${({ theme }) => theme.hover.color}; !important
                    
                }
            }
        }
    }
}
`;
export default NavbarStarting;

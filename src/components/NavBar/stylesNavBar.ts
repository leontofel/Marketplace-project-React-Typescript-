import styled from "styled-components";
import { backgroundColor, mediumSize, primaryColor, secondaryColor, smallSize, tertiaryColor } from "../../styles/variables";

const NavBarWrapper = styled.nav`
    background-color: ${secondaryColor};
    color: ${tertiaryColor};
    font-size: ${smallSize};
    width: 100vw;
    height: 8vh;
    display: grid;
    grid-template-columns: .3fr 1.5fr 1fr;
    grid-template-rows: 1fr;
    
    button {
        background-color: ${secondaryColor};
        border: none;
        color: ${tertiaryColor};
        margin-left: 1.5rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 50%;
        &:hover {
                border: 3px solid ${backgroundColor};
                padding: .2rem .5rem;
                cursor: pointer;   
        }
    }

    ul {
        margin: 5px;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
       
        li{
            margin-right: 15px; 
            &:hover {
                border: 3px solid ${backgroundColor};
                padding: 0 .5rem;
                cursor: pointer;   
        }
        }
    }
    aside {
        text-align: end;
        padding: .3rem .8rem;
        font-size: ${mediumSize};
        &:hover {
            border: 3px solid ${backgroundColor};
            cursor: pointer;   
        }
        span {
            color: ${primaryColor};
        }
    }
`

export {
    NavBarWrapper
}
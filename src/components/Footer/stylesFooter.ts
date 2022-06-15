import styled from "styled-components";
import { backgroundColor, primaryColor, secondaryColor, tertiaryColor } from "../../styles/variables";

const BackToTop = styled.div`
    background-color: ${primaryColor};
    width: 97.5vw;
    height: 4vh;
    padding: 1rem;
    margin-top: 5rem;
    a {
        padding-left: 37rem;
            text-decoration: none;
            color: white;
            font-size: 1.2rem;
            
    }
    &:hover {
        background-color: ${tertiaryColor};
    }

`


const FooterContainer = styled.footer`
    background-color: ${secondaryColor};
    width: 100vw;
    height: 40vh;
    color: ${backgroundColor};
    

    .footer-menu {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
    margin: 0px 0px 0px 30px;
    h3 {
        font-size: 1.2rem;
        font-weight: bolder;
        padding: 1rem 0px;
    }
    ul {
        display: flex;
        flex-direction: column;
        li {
            padding: 0.2rem;
        }
        li:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
    hr {
        width: 100vw;
    }
    }

    .footer-bottom {
    height: 25vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${primaryColor};
    
    img {
        width: 10vw;
        height: 15vh;
        cursor: pointer;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        margin: 0px 6rem;
        
        li {
            padding: .2rem;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
    }

    .footer-internacional {
        width: 100vw;
    height: 10vh;
    background-color: ${primaryColor};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    }
`;



export {
    FooterContainer, BackToTop
}
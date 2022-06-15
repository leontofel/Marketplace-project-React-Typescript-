import styled from "styled-components";
import { backgroundColor, mediumSize, primaryColor, secondaryColor, smallSize, tertiaryColor } from "../../../styles/variables";


const SideMenuWrapper = styled.div`
    font-size: ${mediumSize};
    max-width: 30vw;
    height: 1000px;
    position: absolute;
    background-color: ${backgroundColor};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1!important;
    transition: width .35s;
    .lz-side-title{
        &:hover{
            background-color: ${tertiaryColor};
            cursor: pointer;
        }
    }
    .side-menu-title {
        background-color: ${primaryColor};
        color: ${backgroundColor};
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        button{
            position: relative;
            left: 0%;
            width: 25%;
            color: ${backgroundColor};
            background-color: rgb(0, 0, 0, 0.1);
        }
    }
    hr{
        width: 30vw;
    }
    h3 {
        color: black;
        padding: 1rem 2rem;
        font-weight: bolder;
    }
    h4 {
        color: black;
        padding: 1rem 2rem;
        font-size: ${smallSize};
        &:hover {
            cursor: pointer;
            background-color: ${secondaryColor};
        }
        span {
            position: absolute;
            left: 80%;
        }
    }
`;

export {
    SideMenuWrapper
}
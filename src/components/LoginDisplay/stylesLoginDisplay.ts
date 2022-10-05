import styled from "styled-components";
import { backgroundColor, primaryColor, secondaryColor, tertiaryColor } from "../../styles/variables";


const LoginDisplayContainer = styled.section`
    width: 35vw;
    height: 65vh;
    margin: 0 auto;
    margin-top: 3rem;
    color: ${backgroundColor};
    background-color: ${primaryColor};
    border: 7px solid ${secondaryColor};
    border-radius: 10%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
        width: 15vw;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        padding: 1.5rem;
        margin: 1rem;
    }
    p {
        font-size: 1rem;
        font-weight: bold;
        margin: 1rem;
    }
    button{
        margin: 1rem;
        width: 10vw;
        height: 10vh;
        background-color: ${tertiaryColor};
        color: white;
        font-size: 1rem;
        border-radius: 6%;
        &:hover {
            padding: 5px;
            background-color: ${backgroundColor};
            color: black;
        }
    }
    a {
        text-decoration: none;
        margin: 1rem;
        color: ${tertiaryColor};
        font-weight: bolder;
    }
`;

export { LoginDisplayContainer };
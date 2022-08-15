import styled from "styled-components";
import { mediumSize, secondaryColor, tertiaryColor } from "../../styles/variables";

const ProductCardContainer = styled.div`
    padding: 1rem;
    margin: 3rem;
    display: flex;
    width: 55vw;
    height: 30vh;
    background-color: ${tertiaryColor};
    border: 10px solid ${secondaryColor};
    
    img {
        max-width: 20vw;
        max-height: 30vh;
    }
    div {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        
    }
    a {
        text-decoration: none; 
    }
    h2 {
        font-size: ${mediumSize};
        font-weight: bold;
        padding: 1rem;
        color: black;
    }
    p{
        padding: 1rem;
        color: white;
    }
`;

export { ProductCardContainer }
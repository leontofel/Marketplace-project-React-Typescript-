import styled from 'styled-components';
import { backgroundColor, mediumSize, secondaryColor, smallSize, tertiaryColor} from '../../styles/variables';

const CardsContainer = styled.section`
    background-color: ${secondaryColor};
    width: 25vw;
    height: 65vh;
    padding: 2rem;
    display: grid;
    color: ${backgroundColor};
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
    border: solid 5px whitesmoke;;
    h2 {
        text-align: center;
        font-size: ${mediumSize};
        font-weight: bolder;
        margin-bottom: 1rem;
        grid-column: 1 / 3;
    }
`;

const Card = styled.div`
    padding: 5px;
    p {
        font-size: ${smallSize};
    }
    h3 {
        font-size: ${mediumSize};
    }
    img {
        max-width: 13vw;
        max-height: 24vh; 
        object-fit: cover;
        &:hover {
            cursor: pointer;
        }
    }
`;

const CardImg = styled.img`
    max-width: 25vw;
    max-height: 50vh;
`;

const SingleCardContainer = styled.div`
    width: 30vw;
    max-height: 65vh;
    margin: 1rem;
    padding: 2rem 0px;
    background-color: ${secondaryColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid 5px white;
    h2{
        font-size: 1.7rem;
        padding-bottom: 1rem;
    }
    h3 {
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
    }
    p {
        font-size: 1rem;
    }
    
`;



export { CardsContainer, Card, CardImg, SingleCardContainer }
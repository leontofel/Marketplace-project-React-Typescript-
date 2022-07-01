import styled from "styled-components";
import { backgroundColor, largeSize, mediumSize, primaryColor, secondaryColor, smallSize, tertiaryColor } from "../../styles/variables";

const ProductDisplayContainer = styled.main`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: .5fr 1fr 1fr;
row-gap: 3rem;
`;

const ProductTitle = styled.section`
max-height: 20vh;
max-width: 30vw;
padding: 1rem;
h2 {
    font-size: calc(${largeSize} - 20px);
    font-weight: bold;
    margin-bottom: 1.5rem;
}
h6 {
    margin-bottom: 2rem;

    span {
        font-size: calc(${mediumSize} + 10px);
        font-weight: bold;
    }
}
div {
    display: flex;
    
}
h5 {
    font-size: calc(${mediumSize} + 10px);
    margin-top: 1rem;
}
ul {
    padding: 1rem;
    font-size: ${mediumSize};
    list-style: circle;
    li {
        margin: .5rem;
    }
}

`;

const AsideProductMenu = styled.aside`
    margin: 1rem;
    padding: 1rem;
    width: 20vw;
    max-height: 70vh;
    border: 2px solid grey;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
        font-size: ${mediumSize};
        span:first-child {
            font-size: calc(${largeSize} - 10px);
            font-weight: bolder;
        }
    }
    h4 {
        margin-top: 2rem;
        font-size: calc(${smallSize} + 2px);
        span:first-child {
            font-weight: bolder;
            color: inherit;
        }
        span {
            color: green;
        }
    }
    div {
        margin: 1rem 0;
        color: ${primaryColor};
        display: flex;
        cursor: pointer;
        &:hover{
            color: ${tertiaryColor};
        }
    }
    h5 {
        font-size: ${mediumSize};
        font-weight: bold;
        color: green;
        margin: 0 0 2rem 0;
    }
    button, .cart-button{
        background: ${primaryColor};
        color: ${backgroundColor};
        padding: .5rem;
        margin: .2rem;
        border-radius: 50px;
        height: 7vh;
        &:hover {
            background: ${tertiaryColor};
            cursor: pointer;
        }
    }
    .cart-button {
        background: ${secondaryColor};
    }
    p{
        margin: 5px;
    }
`;

const CarouselProductWrapper = styled.div`
    div{
        max-width: 30vw;
        background-color: white;
        padding: 2rem;
        margin: 2rem;
    }
   
    img {
        max-width: 40vw;
        height: 60vh;
        object-fit: scale-down;
    }
    button {
        width: 3vw;
        height: 7vh;
        &:hover {
            width: 5vw;
            height: 10vh;  
        }
    }
`;

const ProductDescription = styled.section`
margin: 1rem;
padding: 1rem;



h3 {
        font-size: calc(${largeSize} - 20px);
        color: ${secondaryColor};
        font-weight: bolder;
        margin-bottom: 1.5rem;
    }
    p {
        font-size: ${mediumSize};
        text-align: justify;
        padding: 1rem;
        margin: 1rem;
        line-height: 2.5rem;
    }

`;

const ProductReviews = styled.section`
    margin: 1rem;
    padding: 1rem;
    grid-column: 1 / 2;
    grid-row: 4 / 4;
    h3 {
        font-size: calc(${largeSize} - 15px);
        font-weight: bold;
        color: ${secondaryColor};
        margin-bottom: 1rem;
    }
    h6 {
        font-size: calc(${mediumSize} + 10px);
        margin-bottom: 1rem;
    }
    p {
        font-size: ${mediumSize};
        margin-bottom: 1rem;
        line-height: 2.5rem;
    }
`;

export { CarouselProductWrapper, ProductDisplayContainer, ProductTitle, ProductDescription, ProductReviews, AsideProductMenu }
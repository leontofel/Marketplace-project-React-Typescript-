import styled from "styled-components";


const ProductTypesContainer = styled.section`
    width: 90vw;
    margin-left: 30px;
    overflow-x: auto;
    
    .carousel {
    display: flex;
    
    scroll-behavior: smooth;
}

.item {
    background-color: inherit;
    margin: 0px 10px;
    padding: 0px 10px;
    width: 280px;
    
}

`

const CarouselButtons = styled.div`
display: flex;
justify-content: space-between;
margin-left: 30px;
h2 {
    width: 82.3vw;
    background-color: white;
    text-align: center;
    font-size: 2rem;
    padding-top: 1rem;
    
}
button:hover {
    background-color: rgba(0, 0, 0, 0.055);
    cursor: pointer;
   
}

`



export { ProductTypesContainer, CarouselButtons }
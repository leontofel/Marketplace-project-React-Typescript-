import styled from "styled-components"

  const CarouselWrapper = styled.div`
  width: 100vw;
  display: flex;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  button {
    
    background-color: rgb(0, 0, 0, 0.3);
    border: none;
    color: rgb(0, 0, 0, 1);
    width: 4vw;
    height: 30vh;
    position: absolute;
    top: 35%;
    &:hover {
      cursor: pointer;
      width: 5vw;
      height: 35vh;
      transition: 0.5s;
    }
  }
  .right {
    right: 2%;
  }
  .left {
    left: 2%;
  }
`
const CarouselItem = styled.img`
  width: 100vw;
  height: 70vh;
  background-repeat: no-repeat;
  
`

export { CarouselItem, CarouselWrapper}
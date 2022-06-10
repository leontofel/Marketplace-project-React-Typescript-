import styled from "styled-components"
import { backgroundColor, mediumSize, smallSize } from "../../../styles/variables";

const AddressWrapper = styled.div`
   
    height: 5vh;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    grid-template-rows: 1fr;
    cursor: pointer;
    &:hover{
            border: 3px solid ${backgroundColor};
            padding: 1rem 0;
            cursor: pointer;
        }
    svg {
        grid-column: 1 / 2;
    }
    h4 {
        font-size: ${mediumSize};
        font-weight: bolder;
    }
    h5 {
       font-size: ${smallSize};
    }
    h5, h4 {
        grid-column: 2;
    }
`;

export {
    AddressWrapper
}
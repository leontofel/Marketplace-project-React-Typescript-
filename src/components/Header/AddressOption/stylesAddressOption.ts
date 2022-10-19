import styled from "styled-components"
import { backgroundColor, mediumSize, smallSize } from "../../../styles/variables";

const AddressWrapper = styled.div`
   
    height: 14vh;
    max-width: 20vw;
    margin: 0;
    padding: 0;
    display:flex;
    cursor: pointer;
    
    &:hover{
            border: 3px solid ${backgroundColor};
            padding: 1rem 0;
            cursor: pointer;
        }
    svg {
        margin: .3rem;
    }
    h4 {
        font-size: ${smallSize};
        font-weight: bolder;
        max-width: 50%;
        overflow-wrap: normal;
    }
    h5 {
       font-size: ${smallSize};
    }
`;

export {
    AddressWrapper
}
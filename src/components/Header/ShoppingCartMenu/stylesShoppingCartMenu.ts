import styled from "styled-components";
import { backgroundColor, mediumSize } from "../../../styles/variables";

const ShoppingCartMenuWrapper = styled.div`
    font-size: ${mediumSize};
    font-weight: bold;
    padding-right: 1rem;
    text-align: center;
    &:hover{
        cursor: pointer;
        border: 3px solid ${backgroundColor};
        padding: 1rem;
    }
    span {
        color: yellow;
        font-size: 30px;
        font-weight: bold;
        padding: .3rem;
    }
`

export {
    ShoppingCartMenuWrapper
}
import styled from "styled-components"
import { secondaryColor, smallSize } from "../../../styles/variables"

const SearchWrapper = styled.form`
        width: 25vw;
        display: flex;
        justify-content: center;
        margin: 2rem 0;
        padding: 2rem 0;
        
        select {
            max-width: 6vw;
            padding: ${smallSize};
            &:hover{
                cursor: pointer;
            }
        }
        input {
            width: 80%;
        }
        button {
            background-color: ${secondaryColor};
            width: 10%;
            &:hover {
                background-color: "#2b72e6";
                cursor: pointer;
            }
        }
        
    `

export {
    SearchWrapper
}
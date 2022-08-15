import styled from "styled-components"
import { backgroundColor, mediumSize, primaryColor, smallSize, tertiaryColor } from "../../../styles/variables"

const AccountMenuBarWrapper = styled.div`
    font-size: ${smallSize};
    padding: 1rem;
    &:hover {
        cursor: pointer;
        border: 3px solid ${backgroundColor};
    }
    h3 {
        font-size: ${mediumSize};
        font-weight: bold;
    }
    div {
        background-color: ${backgroundColor};
        color: ${primaryColor};
        position: absolute;
        z-index: 1000;
        height: 75vh;
        width: 30vw;
        display: flex;
        
        justify-content: space-around;
        &:hover {
            cursor: default;
        }
        h6 {
            font-size: 20px;
            font-weight: bold;
        }
        ul {
            flex-direction: column;
            padding: 1rem;
            li {
                margin: 1rem;
                &:hover {
                    text-decoration: underline;
                    cursor: pointer;
                    color: ${tertiaryColor};
                }
            }
        }
    }
`

export {
    AccountMenuBarWrapper   
}
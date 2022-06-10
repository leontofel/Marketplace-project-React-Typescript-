import styled from "styled-components"
import { backgroundColor, mediumSize, smallSize } from "../../../styles/variables"

const AccountMenuBarWrapper = styled.div`
    font-size: ${smallSize};
    &:hover {
        cursor: pointer;
        border: 3px solid ${backgroundColor};
        padding: 1rem;
    }
    h3 {
        font-size: ${mediumSize};
        font-weight: bold;
    }
`

export {
    AccountMenuBarWrapper   
}
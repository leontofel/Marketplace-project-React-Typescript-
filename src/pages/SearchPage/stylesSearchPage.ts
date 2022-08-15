import styled from "styled-components";
import { mediumSize } from "../../styles/variables";

const SearchPageContainer = styled.main`
    margin: 1rem;

    h1 {
        font-size: ${mediumSize};
        font-weight: bold;
        padding: 1rem;
    }
    h2 {
        margin-left: 2rem;
        font-size: ${mediumSize};
    }

`;

export { SearchPageContainer }
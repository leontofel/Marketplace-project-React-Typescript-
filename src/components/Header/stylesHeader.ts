import styled from "styled-components";
import { backgroundColor, primaryColor } from "../../styles/variables";

const HeaderContainer = styled.header`
max-height: 18vh;
background-color: ${primaryColor};
color: ${backgroundColor};
display: flex;
align-items: center;
justify-content: space-between;

`;
const LogoImg = styled.img`
max-width: 15vw;
max-height: 15vh;
padding: 1rem 0 1rem 1rem;
&:hover{
    border: 3px solid ${backgroundColor};
    padding: 1rem;
    cursor: pointer;
}
`;

export { 
    HeaderContainer, LogoImg
}
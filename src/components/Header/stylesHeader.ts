import styled from "styled-components";
import { backgroundColor, primaryColor } from "../../styles/variables";

const HeaderContainer = styled.header`
max-height: 18vh;
background-color: ${primaryColor};
color: ${backgroundColor};
display: flex;
align-items: center;
justify-content: space-evenly;

`;
const LogoImg = styled.img`
max-width: 15vw;
max-height: 15vh;
padding: 10px;
&:hover{
    border: 2px solid ${backgroundColor};
    cursor: pointer;
}
`;

export { 
    HeaderContainer, LogoImg
}
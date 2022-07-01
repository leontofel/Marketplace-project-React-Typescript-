import styled from "styled-components";

interface BannerProps {
    image: string
}

const BannerContainer = styled.section`
background-image: url(${(props: BannerProps) => props.image});
max-width: 60vw;
margin: 1rem;
img {
    width: 60vw;
    height: 60vh;
    
}
h2 {
    color: white;
    font-size: 2rem;
    text-align: center;
}
`

export { BannerContainer }
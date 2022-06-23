import styled from "styled-components";

interface BannerProps {
    image: string
}

const BannerContainer = styled.section`
background-image: url(${(props: BannerProps) => props.image});
max-width: 50vw;

img {
    max-width: 42vw;
    height: 50vh;
    
}
h2 {
    color: white;
    font-size: 2rem;
    position: relative;
    left: 30%;
}
`

export { BannerContainer }
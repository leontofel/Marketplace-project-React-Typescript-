import { CardImg, SingleCardContainer } from "./stylesCard";
import { Link } from 'react-router-dom';


type SingleCardProps = {
    title: string,
    image: string
    link: string
    price?: number,
    productTitle?: string
}

export default function SingleCard({ title, image, link, price, productTitle }: SingleCardProps) {

    return (
        <section>
            <SingleCardContainer>
                <h2>{title}</h2>
                <CardImg src={image} alt="single-card" />
                {productTitle && <div><h3>R$ {price}</h3><p>{productTitle}</p></div>}
                <Link to={link}>Veja mais</Link>
            </SingleCardContainer>
        </section>
    );
}
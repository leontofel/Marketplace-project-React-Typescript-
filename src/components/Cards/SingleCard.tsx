import { CardImg, SingleCardContainer } from "./stylesCard";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import IProduct from "../../types/IProduct";


type SingleCardProps = {
    title: string
}
let defaultProduct: IProduct = {
    _id: '',
    title: '',
    photos: [],
    price: 0,
    comments: [],
    type: '',
    description: '',
    features: [],
    shipping: "" || 0
};

export default function SingleCard({ title }: SingleCardProps) {


    const [product, setProduct]: [IProduct, (product: IProduct) => void] = useState(defaultProduct)
    
    useEffect(() => {
        fetch('http://localhost:8000/products/1').then(res => res.json()).then(data => {
            setProduct(data);
        }).catch(err => console.log(err))
    }, []);

    return (
        <section>
            <SingleCardContainer>
                <h2>{title}</h2>
                <CardImg src={product.photos[0]} alt="single-card" />
                    <div>
                        <h3>R$ {product.price}</h3>
                        <p>{product.title}</p>
                    </div>
                    <Link to={'/product/' + product._id}>Veja mais</Link>
            </SingleCardContainer>
        </section>
    );
}
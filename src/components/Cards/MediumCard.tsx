import { Card, CardImg, CardsContainer } from "./stylesCard";
import { useEffect, useState } from "react";
import IProduct from "../../types/IProduct";
import { Link } from "react-router-dom";


type MediumCardProps = {
    name: string
}

export default function MediumCard({ name }: MediumCardProps) {

    const defaultProduct: IProduct[] = [];
    const [product, setProduct]: [IProduct[], (product: IProduct[]) => void] = useState(defaultProduct)
    useEffect(() => {
        fetch('http://localhost:8000/products/4').then(res => res.json()).then(data => {
            setProduct(data);
        }).catch(err => console.log(err))
    }, []);

    return (
        <section >
            <CardsContainer>
                <h2 >{name}</h2>
                {product.map(item => {
                    return (
                        <Card>
                                <div key={item._id}>
                            <Link to={'/product/' + item._id}>
                                    <img src={item.photos[0]} alt='product pic' />
                            </Link>
                                    <p>{item.title.match(/^\w{3,}/)}</p>
                                    <h3>R$ {item.price}</h3>
                                </div>
                        </Card>
                    );
                })}



            </CardsContainer>
        </section>
    );
}

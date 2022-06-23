import { Card, CardImg, CardsContainer } from "./stylesCard";
import IProduct from "../../types/IProduct";


type MediumCardProps = {
    name: string,
    product: IProduct[],

}

export default function MediumCard({ name, product }: MediumCardProps) {

    return (
        <section >
            <CardsContainer>
                <h2 >{name}</h2>
                {product.map(item => {
                    return (
                        <Card>
                            <div key={item._id}>
                                <CardImg src={item.photos[0]} alt='product pic' />
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

/*
            <CardsContainer>
                <h2 >{title}</h2>
                <Card>
                    <div key={products[0].price + "a"}>
                        <CardImg src={products[0].photos[0]} alt="product " />
                        <p>{products[0].title}</p>
                        <h3>R$ {products[0].price}</h3>
                    </div> 
                </Card>
            </CardsContainer>
*/ 
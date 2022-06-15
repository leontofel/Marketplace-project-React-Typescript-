import { Product } from "../../types/Product";
import { Card, CardImg, CardsContainer } from "./stylesCard";

type MediumCardProps = {
    title: string,
    products: Product[]
}


export default function MediumCard({title, products}: MediumCardProps) {

    
    return(
        <section >
            <CardsContainer>
                <h2 >{title}</h2>
                {products.map(item => {
                    return (
                        <Card>
                            <div key={item.price + "a"}>
                                <CardImg src="https://m.media-amazon.com/images/I/91RL+MhTWbL._AC_SL1500_.jpg" alt="product " />
                                <p>{item.title}</p>
                                <h3>R$ {item.price}</h3>
                            </div> 
                        </Card>
                        
                    );
                })}
            </CardsContainer>
        </section>
    );
}
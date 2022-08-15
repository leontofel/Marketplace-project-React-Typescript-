import { Link } from "react-router-dom";
import IProduct from "../../types/IProduct";
import { ProductCardContainer } from "./stylesProductCard";


export default function ProductCard({ _id, photos, price, shipping, title }: IProduct) {

    return (
        <>

            <ProductCardContainer key={_id} >
                <img src={photos[0]} alt="product searched" />
                <div>
                    <Link to={`/product/${_id}`}>
                        <h2>{title}</h2>
                        <p>Preço: R$ {price.toString().replace('.', ',')}</p>
                        <p>Frete: R${shipping.toString().replace('.', ',')}</p>
                    </Link>
                </div>

            </ProductCardContainer>
        </>
    );
}
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { useVerifyToken } from "../../hooks/useVerifyToken";
import { currentToken } from "../../state/atom";
import { ShoppingCartContainer } from "./stylesShoppingCart";
import { useJwt } from "react-jwt";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import IProduct from "../../types/IProduct";


export default function ShoppingCart() {
    const [openCart, setOpenCart] = useState(false);

    const tokenString = useRecoilValue(currentToken);
    const [tokenValid, tokenContent] = useVerifyToken();
    const { decodedToken, isExpired, reEvaluateToken } = useJwt(tokenString)
    
    const[cart, setCart] = useState<IProduct[]>();
    

    useEffect(() => {
        reEvaluateToken(tokenString);
        
        
    }, [reEvaluateToken, tokenContent, tokenString])



    return (
        <aside>
            <ShoppingCartContainer>
                {isExpired ? (<section>
                    <h3>Carrinho</h3><br></br>
                    <Link to='/login'>Faça o login</Link>
                </section>)
                   :
                    (<section>
                            <button onClick={() => setOpenCart(!openCart)}>
                            <span>0</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                            </svg>
                            <h3>Carrinho</h3>
                        </button>
                        <section className={openCart === true ? " " : "cart-open"}>
                            <h3>Subtotal <br></br> <span> R$ 23 </span></h3>
                        </section>
                    </section>
                    )}
            </ShoppingCartContainer>

        </aside>
    );
}
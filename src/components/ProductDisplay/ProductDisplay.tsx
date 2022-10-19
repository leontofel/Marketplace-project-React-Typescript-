import { useEffect, useState } from "react";
import { useAddress } from "../../hooks/useAddress";
import { useShoppingCart } from "../../hooks/useShoppingCart";
import { useVerifyToken } from "../../hooks/useVerifyToken";
import { IAddress } from "../../types/IAddress";
import IProduct from "../../types/IProduct";
import MediumCard from "../Cards/MediumCard";
import SingleCard from "../Cards/SingleCard";
import Carousel from "../Carousel/Carousel";
import { AsideProductMenu, CarouselProductWrapper, ProductDescription, ProductDisplayContainer, ProductReviews, ProductTitle } from "./stylesProductDisplay";



export default function ProductDisplay({ _id, title, price, description, comments, features, photos, type, shipping }: IProduct) {
    const address = useAddress();
    const {displayCart, addItem, removeItem} = useShoppingCart();


    return (
        <main>
            <ProductDisplayContainer>

                
                (<CarouselProductWrapper><Carousel slots={photos.length} images={photos} /></CarouselProductWrapper>
                
                <section>
                    <ProductTitle>
                        <h2>{title}</h2>
                        <hr />
                        <h6>R$<span> {price.toString().replace('.', ',')}</span></h6>
                        <div>
                            <figcaption>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-file-lock2" viewBox="0 0 16 16">
                                    <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224z" />
                                    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                                </svg>
                                <legend>Pagamentos e Segurança</legend>
                            </figcaption>
                            <figcaption>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>
                                <legend>Enviado pela Leonzon</legend>
                            </figcaption>
                            <figcaption>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-box-seam" viewBox="0 0 16 16">
                                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                                </svg>
                                <legend>Política de devolução</legend>
                            </figcaption>
                        </div>
                        <hr></hr>
                        <h5>Sobre este item</h5>
                        <ul>
                            {features.map(item => {
                                return (
                                    <li>{item}</li>
                                );
                            })}
                        </ul>
                    </ProductTitle>
                </section>

                <aside>
                    <AsideProductMenu>
                        <h3>R$<span> {price.toString().replace('.', ',')}</span> à vista<br></br>
                            Ou em até 12x de R$ {(price / 12).toFixed(2).toString().replace('.', ',')} /mês
                        </h3>

                        {shipping === "free" ? <h4>Entrega: R$ {shipping}. Prazo de 10 dias úteis</h4> : <h4>Entrega GRÁTIS: <span>receba amanhã</span>, se pedir dentro de <span>10hrs</span></h4>}
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            {address !== undefined && <h6>Enviar para {address.street}, {address.number} , {address.complement}, {address.city}, {address.state}, CEP:{address.cep}</h6>}
                        </div>
                        <h5>Em estoque.</h5>
                        <button className="cart-button" onClick={() => addItem(_id)}>Adicionar ao carrinho</button>
                        <button>Comprar agora</button>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                            </svg>
                            <p>Transação segura</p>
                        </div>
                        <p>Enviado por Leonzon</p>
                        <p>Vendido por Leonzon</p>
                    </AsideProductMenu>
                </aside>

                <section>
                    <hr />
                    <ProductDescription>
                        <h3>Descrição do produto </h3>
                        <p>{description}</p>
                    </ProductDescription>
                </section>
                <SingleCard title={"Veja também: "} />

<br></br>
                <section>
                    <hr />
                    <ProductReviews>
                        <h3>Avaliações dos clientes </h3>
                        <ul>
                            {comments.map((item: { name: string, comment: string }) => {
                                return (
                                    <li>
                                        <h6>{item.name}</h6>
                                        <p>{item.comment}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </ProductReviews>
                </section>
                <MediumCard name="Olhe essas ofertas: " />)

            </ProductDisplayContainer>
        </main>
    );
}
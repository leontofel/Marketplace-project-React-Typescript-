import React from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import beleza from '../assets/img/carouselHome/BELEZA.png';
import games from '../assets/img/carouselHome/GAMES.png';
import musica from '../assets/img/carouselHome/MUSIC.png';
import esporte from '../assets/img/carouselHome/SPORT.png';
import Carousel from '../components/Carousel/Carousel';
import MediumCard from '../components/Cards/MediumCard';
import { CardsDisplay } from './stylesHome';
import Footer from '../components/Footer/Footer';
import { Banner } from '../components/Banner/Banner';
import dealCard from '../assets/img/deal-card.jpg';
import SingleCard from '../components/Cards/SingleCard';


export default function Home() {

    const homeCarousel = [games, beleza, musica, esporte]

    
     
    return (
        <>
            <Header />
            <NavBar />
            <Carousel slots={4} images={homeCarousel} />
            <CardsDisplay>
                <MediumCard title={'Continue comprando'} products={[{
                    title: 'Teclado ...',
                    price: 400
                }, {
                    title: 'Teclado ...',
                    price: 400
                },{
                    title: 'Teclado ...',
                    price: 400
                },{
                    title: 'Teclado ...',
                    price: 400
                }]} />
                <MediumCard title={'Novas Ofertas'} products={[{
                    title: 'Teclado ...',
                    price: 400
                }, {
                    title: 'Teclado ...',
                    price: 400
                },{
                    title: 'Teclado ...',
                    price: 400
                },{
                    title: 'Teclado ...',
                    price: 400
                }]} />
                <SingleCard link="/" title="Ofertas do Dia" image="https://images-na.ssl-images-amazon.com/images/G/32/br-crosscategory/2019/dashcard/ofertasdodia/377_Desktop_Dashcard_Deals_379x304._SY304_CB419532277_.jpg" />
                <Banner link="https://www.amazon.com.br/b/?_encoding=UTF8&node=23942993011&pf_rd_r=CZ5T3VQ55D4RYM0CDZQM&pf_rd_p=532f7e15-82ce-40ed-b13b-d12fa4331b5c&pd_rd_r=19889968-f1c8-4702-b72f-343773544183&pd_rd_w=29nnF&pd_rd_wg=Ymkqq&ref_=pd_gw_unk" img="https://m.media-amazon.com/images/I/71n4xMFhmJL._SX3000_.jpg" title="Conheça o Kindle" />
                <MediumCard title={'Em eletrônicos'} products={[{
                    title: 'Teclado ...',
                    price: 400
                }, {
                    title: 'Teclado ...',
                    price: 400
                },{
                    title: 'Teclado ...',
                    price: 400
                },{
                    title: 'Teclado ...',
                    price: 400
                }]} />
                <SingleCard link="/" title="Veja essa oferta: " image="https://m.media-amazon.com/images/I/714OdZEYsHS._AC_SL1500_.jpg" productTitle="Cafeteira Oster OCAF200 TO GO" price={169.99} />
                <Banner link="https://m.media-amazon.com/images/G/32/adplacement/01222433_UAT-BR_CSN_1940_500.jpg" title="Veja o melhor conteúdo" img="https://m.media-amazon.com/images/G/32/adplacement/01222433_UAT-BR_CSN_1940_500.jpg" />
            </CardsDisplay>

            <Footer />
        </>
    );
}

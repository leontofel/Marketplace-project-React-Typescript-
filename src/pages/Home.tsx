import React from 'react';
import Header from '../components/Header/Header';
import NavBar from '../components/NavBar/NavBar';
import beleza from '../assets/img/carouselHome/BELEZA.png';
import games from '../assets/img/carouselHome/GAMES.png';
import musica from '../assets/img/carouselHome/MUSIC.png';
import esporte from '../assets/img/carouselHome/SPORT.png';
import Carousel from '../components/Carousel/Carousel';


export default function Home() {

    const homeCarousel = [games, beleza, musica, esporte]

    return (
        <>
            <Header />
            <NavBar />
            <Carousel slots={4} images={homeCarousel} />
        
        </>
    );
}

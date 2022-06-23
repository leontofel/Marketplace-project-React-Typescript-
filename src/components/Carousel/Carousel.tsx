import { useEffect, useState } from "react";
import { CarouselItem, CarouselWrapper } from "./stylesCarousel";

type CarouselProps = {
    slots: number,
    images: string[]
}

export default function Carousel({ slots, images }: CarouselProps) {

    const [item, setItem] = useState(0)

    useEffect(()=> {
        if(item > (slots - 1)) setItem(0);
        if(item < 0) setItem(3); 
    }, [item, slots, setItem])


    function handleCarouselClick(side: string){
        side === "right" ? setItem(item + 1) : setItem(item - 1);
        return;
    }
    
    function carouselTimer() {
        setInterval(() => {
            handleCarouselClick("right");
        }, 7000)
    }

    return (
        <section>
            <CarouselWrapper>
                <button className="left" onClick={() => handleCarouselClick("left")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" />
                    </svg>
                </button>
                <CarouselItem key={item} src={images[item]} alt={`imagem da `} />
                <button className="right" onClick={() => handleCarouselClick("right")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" />
                    </svg>
                </button>

            </CarouselWrapper>

        </section>

    );
}
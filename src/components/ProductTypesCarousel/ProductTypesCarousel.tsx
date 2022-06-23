
import { CarouselButtons, ProductTypesContainer } from "./stylesProductTypesCarousel";


export default function ProductTypesCarousel() {

    const handleLeftClick = (e: any) => {
        e.preventDefault();
      
    }

    const handleRightClick = (e: any) => {
        e.preventDefault();
        
    }


    return (
        <section>
            <ProductTypesContainer>
                    <div className="carousel"  >
                        <img src="https://images-na.ssl-images-amazon.com/images/G/32/Gateway/BubbleShoveler/407_GW_bubble_200X200_8._CB435613681_.jpg" alt="Eletrônicos" />
                        <img src="https://images-na.ssl-images-amazon.com/images/G/32/Gateway/BubbleShoveler/407_GW_bubble_200X200_4._CB435613686_.jpg" alt="Games" />
                        <img src="https://images-na.ssl-images-amazon.com/images/G/32/Gateway/BubbleShoveler/407_GW_bubble_200X200_10._CB435613681_.jpg" alt="beleza" />
                        <img src="https://images-na.ssl-images-amazon.com/images/G/32/Gateway/BubbleShoveler/407_GW_bubble_200X200_11._CB435613681_.jpg" alt="Casa" />
                        <img src="https://images-na.ssl-images-amazon.com/images/G/32/Gateway/BubbleShoveler/407_GW_bubble_200X200_18._CB435613683_.jpg" alt="Alimentos e bebida" />
                        <img src="https://images-na.ssl-images-amazon.com/images/G/32/Gateway/BubbleShoveler/407_GW_bubble_200X200_1._CB435613680_.jpg" alt="Livros" />
                        <img src="https://images-na.ssl-images-amazon.com/images/G/32/Gateway/BubbleShoveler/407_GW_bubble_200X200_9._CB435613681_.jpg" alt="Papelaria" />
                        <img src="https://images-na.ssl-images-amazon.com/images/G/32/Gateway/BubbleShoveler/407_GW_bubble_200X200_13._CB435613680_.jpg" alt="Moda" />
                        <img src="https://images-na.ssl-images-amazon.com/images/G/32/Gateway/BubbleShoveler/407_GW_bubble_200X200_3._CB435613681_.jpg" alt="Construção" />
                        <img src="https://images-na.ssl-images-amazon.com/images/G/32/Gateway/BubbleShoveler/407_GW_bubble_200X200_7._CB435613681_.jpg" alt="Higiene" />
                        <img src="https://images-na.ssl-images-amazon.com/images/G/32/Gateway/BubbleShoveler/407_GW_bubble_200X200_2._CB435613686_.jpg" alt="Ebooks" />
                    </div>
            </ProductTypesContainer>
            <CarouselButtons>
                <button onClick={handleLeftClick} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </button >
                <h2>Os melhores produtos!</h2>
                <button onClick={handleRightClick} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button >

            </CarouselButtons>
        </section>
    );
}
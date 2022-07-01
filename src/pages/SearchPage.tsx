import axios, {AxiosResponse} from "axios";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import { currentSearch } from "../state/atom";
import IProduct from "../types/IProduct";

let product: IProduct;

export default function SearchPage() {

    const resultSearch = useRecoilValue(currentSearch).replace(" ", "-");
    
    /*
    useEffect(() => {
        
        
    }, [])
    async function getProduct() {
    product = await axios.get<IProduct>('localhost:8000/products/search/', { params: {"title": resultSearch}})
    .then((res: IProduct) => {
        return res
    })
    .catch(err => console.log(err)
    )
}
    */
    
    
    return (
        < >
            <Header/>
            <NavBar />
            
            <h3> Exibindo resultados para {resultSearch} </h3>
            <hr></hr>
            
            <h1>RESULTADOS</h1>
            <h5>O preço e outros detalhes variam de acordo com o tamanho e a cor do produto.</h5>

            {!product && <h2> Desculpe, não encontramos o produto buscado, veja essas outras opções: </h2>}
            {product && <h2>
                {product.title}
            </h2>}
            

            <Footer />

        </>
    );
}
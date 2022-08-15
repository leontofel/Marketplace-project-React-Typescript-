import axios, {AxiosResponse} from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import { currentSearch, currentSearchType } from "../../state/atom";
import IProduct from "../../types/IProduct";


export default function SearchPage() {
    
    const resultSearch = useRecoilValue(currentSearch);
    const resultSearchType = useRecoilValue(currentSearchType);
    
    const productDefault: IProduct = {
        _id: "",
        title: "",
        price: 0,
        description: "",
        photos: [],
        type: "",
        comments: [],
        features: [],
        shipping: "" || 0
    };
    const productTypeDefault: IProduct[] = []
    const [productFound, setProductFound]: [IProduct, (product: IProduct) => void] = useState(productDefault);
    const [productTypeFound, setProductTypeFound]: [IProduct[], (product: IProduct[]) => void] = useState(productTypeDefault);
    


    useEffect(() => {
        
        axios.get<IProduct>('http://localhost:8000/products/search/', { params: {"title": `${resultSearch}`}})
        .then((res: AxiosResponse<IProduct>) => {
            setProductFound(res.data);
        })
        .catch(err => console.log(err)
        )  

        axios.get<IProduct[]>(`http://localhost:8000/products/search/type?type=${resultSearchType}`)
        .then((res: AxiosResponse<IProduct[]>) => {
            setProductTypeFound(res.data);
        })
        .catch(err => console.log(err)
        )
        /*
        fetch(`http://localhost:8000/products/search/type?type=food`)
        .then(res => res.json())
        .then(yo => console.log(yo)
        ).catch(err => console.log(err)
        )   */
        
    }, [resultSearchType])
    
    
    return (
        <>
            <Header/>
            <NavBar />
            
            <h3> Exibindo resultados para {resultSearch} </h3>
            <hr></hr>
            
            <h1>RESULTADOS</h1>
            <p>O preço e outros detalhes variam de acordo com o tamanho e a cor do produto.</p>

            {!productFound && <h2> Desculpe, não encontramos o produto buscado, veja essas outras opções: </h2>}
            {productFound && <h2>
                {productFound.title}
            </h2>}
            

            <Footer />

        </>
    );
}
import axios, {AxiosResponse} from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import { currentSearch, currentSearchType } from "../../state/atom";
import IProduct from "../../types/IProduct";
import { SearchPageContainer } from "./stylesSearchPage";


export default function SearchPage() {
    
    const resultSearch = useRecoilValue(currentSearch);
    const resultSearchType = useRecoilValue(currentSearchType);
    
    const productDefault: IProduct = {
        _id: "",
        title: "",
        price: 0,
        description: "",
        photos: ['', ''],
        type: "",
        comments: [],
        features: [],
        shipping: "" || 0
    };
    const productTypeDefault: IProduct[] = []
    const [productFound, setProductFound]: [IProduct, (product: IProduct) => void] = useState(productDefault);
    const [productTypeFound, setProductTypeFound]: [IProduct[], (product: IProduct[]) => void] = useState(productTypeDefault);



    useEffect(() => {
        
        axios.get<IProduct>(`http://localhost:8000/products/search/?title=${resultSearch}`)
        .then((res: AxiosResponse) => {    
            let product = res.data[0]

            setProductFound({
                _id: product._id,
                title: product.title,
                price: product.price,
                description: product.description,
                photos: product.photos,
                type: product.type,
                comments: product.comments,
                features: product.features,
                shipping: product.shipping
            });   
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
            <SearchPageContainer>
                <h3> Exibindo resultados para {resultSearch} </h3>
                <hr></hr>
                
                <h1>RESULTADOS</h1>
                <p>O preço e outros detalhes variam de acordo com o tamanho e a cor do produto.</p>
            </SearchPageContainer>
            

            {productFound.title === undefined ? <h2>Desculpe não encontramos o produto pesquisado</h2> : <ProductCard _id={productFound._id} title={productFound.title} price={productFound.price} photos={productFound.photos} type={productFound.type} shipping={productFound.shipping} description={""} comments={[]} features={[]} />}
            
            <SearchPageContainer>
                <h2> Veja estes produtos relacionados </h2>
            </SearchPageContainer>

            {productTypeFound.length > 1 && productTypeFound.map((item: IProduct) => {
                return (
                    <ProductCard _id={item._id} title={item.title} price={item.price} description={item.description} photos={item.photos} type={item.type} comments={item.comments} features={item.features} shipping={item.shipping} />
                );
            })}

            <Footer />

        </>
    );
}
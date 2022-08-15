import { useEffect, useState } from "react"
import SingleCard from "../../components/Cards/SingleCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import ProductDisplay from "../../components/ProductDisplay/ProductDisplay";
import IProduct from "../../types/IProduct";

export default function ProductPage() {

    const productId = window.location.href.replace("http://localhost:3000/product/", "");
    
    const defaultProduct: IProduct = {
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
    const [product, setProduct]: [IProduct, (product: IProduct) => void] = useState(defaultProduct)
    
    useEffect(() => {
         fetch(`http://localhost:8000/product/${productId}`).then(res => res.json()).then(data => {
            setProduct(data[0]);
            
    }).catch(err => console.log(err))

    }, [productId, product]);

    return (
        <>
            <Header />
            <NavBar />
            <ProductDisplay _id={product._id} title={product.title} price={product.price}
            description={product.description} comments={product.comments}
            features={product.features} photos={product.photos} type={product.type} shipping={""}            />
            <Footer />
        </>
    )
}
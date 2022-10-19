import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import IProduct from "../types/IProduct"

const useShoppingCart = () => {
    const displayCart = (id: string): IProduct[] => {
        let cartModel: IProduct[] = [] 

        axios.get(`localhost:8000/shopping-cart/${id}`).then((res: AxiosResponse<IProduct[]>) => {
            cartModel = res.data;
        })
        return cartModel;
    }
    const removeItem = async (id: string) => {
        await axios.post(`localhost:8000/shopping-cart`, {id}).then(res => {
            return;
        })
    };
    const addItem = async (id: string) => {
        await axios.post(`localhost:8000/shopping-cart`, {id}).then(res => {
            return;
        })
    }

    return {displayCart, addItem, removeItem}
}

export { useShoppingCart }
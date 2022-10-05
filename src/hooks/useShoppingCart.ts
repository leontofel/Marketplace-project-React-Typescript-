import IProduct from "../types/IProduct"

const useShoppingCart: [IProduct[], (product: IProduct) => void] = [[], (product: IProduct) => {
    useShoppingCart[0].push(product);
}]

export { useShoppingCart }
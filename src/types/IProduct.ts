

export default interface IProduct { 
    _id: string,
    title: string,
    price: number,
    description: string,
    photos: string[],
    type: string,
    comments: [],
    features: [],
    shipping: string | number
}

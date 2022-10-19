import { IAddress } from "./IAddress";

export interface IToken {
    user_id: string,
    user_address: IAddress,
    exp: number,
    iat: number
}
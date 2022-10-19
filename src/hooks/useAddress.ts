import { useVerifyToken } from "./useVerifyToken";
import { useEffect, useState } from "react";
import { IAddress } from "../types/IAddress";


export const useAddress: () => IAddress | undefined = () => {
    const [isExpired, token] = useVerifyToken();
    const[address, setAddress] = useState<IAddress>();

    useEffect(() => {
        if(token !== null && typeof(token) !== "boolean") setAddress(token["user_address"]);

    }, [token])

    
    return address;
}
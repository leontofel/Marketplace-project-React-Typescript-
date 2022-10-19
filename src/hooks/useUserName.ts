import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useVerifyToken } from "./useVerifyToken";

interface User {
    name: string
}

const useUserName = () => {
    let nameModel: string = " "; 
    const [user, setUser] = useState(nameModel);
    const [isExpired, token] = useVerifyToken();

    useEffect(() => {
        if (isExpired === false && token !== null && typeof (token) !== "boolean") {
            axios.get(`http://localhost:8000/user/${token["user_id"]}`)
                .then((res: AxiosResponse<string>) => {
                    setUser(res.data);
                });
        }
    }, [isExpired, token]);

    if(user !== undefined) return  user;
    
}

export { useUserName };
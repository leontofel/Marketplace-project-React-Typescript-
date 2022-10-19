import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentToken } from "../state/atom";
import { useJwt } from "react-jwt";
import { IAddress } from "../types/IAddress";
import { IToken } from "../types/IToken";



export function useVerifyToken() {
    const [token, setToken] = useRecoilState(currentToken);
    const tokenString = useRecoilValue(currentToken);
    const { decodedToken, isExpired }= useJwt<IToken>(tokenString);
     
    
    
    
    return [isExpired, decodedToken];
}
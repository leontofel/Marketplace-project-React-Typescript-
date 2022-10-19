import { atom } from "recoil";
import IProduct from "../types/IProduct";


export const sideNavBarMenu = atom<boolean>({
  key: 'sideNavBarMenu',
  default: false
});

export const currentSearch = atom<string>({
  key: 'currentSearch',
  default: ''
});

export const currentSearchType = atom<string>({
  key: 'currentSearchType',
  default: 'all'
})

export const currentToken = atom<string>({
  key: 'currentToken',
  default: ''
})

export const shoppingCart = atom<IProduct[]>({
  key: 'shoppingCart',
  default: []
})
import { atom } from "recoil";


export const sideNavBarMenu = atom<boolean>({
  key: 'sideNavBarMenu',
  default: false
})
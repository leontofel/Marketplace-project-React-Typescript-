import { atom } from "recoil";


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
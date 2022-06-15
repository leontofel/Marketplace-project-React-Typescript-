import React from 'react';
import logo from '../../assets/img/logo.png';
import AccountMenuBar from './AccountMenuBar/AccountMenuBar';
import AddressOption from './AddressOption/AddressOption';
import OrdersMenu from './OrdersMenu/OrdersMenu';
import SearchBar from './SearchBar/SearchBar';
import ShoppingCartMenu from './ShoppingCartMenu/ShoppingCartMenu';
import { HeaderContainer, LogoImg } from './stylesHeader';


export default function Header() {


    return (
        
            <header id="inicio">
                <HeaderContainer>
                    <LogoImg src={logo} alt="Logo do Marketplace"></LogoImg>
                    <AddressOption /> 
                    <SearchBar />
                    <AccountMenuBar />
                    <OrdersMenu />
                    <ShoppingCartMenu />
                </HeaderContainer>
            </header>        
    )
}
import { useState } from "react";
import { useRecoilState } from "recoil";
import { sideNavBarMenu } from "../../state/atom";
import SideMenu from "./SideMenu/SideMenu";
import { NavBarWrapper } from "./stylesNavBar";

export default function NavBar() {

    const [sideMenu, setSideMenu] = useRecoilState(sideNavBarMenu);
    
    return (
        <nav>
            <NavBarWrapper>
                {sideMenu ? <SideMenu /> :
                    <>
                    <button onClick={() => setSideMenu(!sideMenu)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>Todos
                        </button>
                    </>}
                    <ul>
                        <li>Venda na Leonzon</li>
                        <li>Ofertas do Dia</li>
                        <li>Eletrônicos</li>
                        <li>Computadores</li>
                        <li>Automotivos</li>
                        <li>Ebooks Kindle</li>
                    </ul>
                <aside>
                    <h2><span>LeonzonVideo</span> | Assista a filmes e séries</h2>
                </aside>
            </NavBarWrapper>
        </nav>
    );
}
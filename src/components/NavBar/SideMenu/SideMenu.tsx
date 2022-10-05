import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sideNavBarMenu } from "../../../state/atom";
import { SideMenuWrapper } from "./stylesSideMenu"

export default function SideMenu() {

    const [sideMenu, setSideMenu] = useRecoilState(sideNavBarMenu);

    return(
        <>
            <SideMenuWrapper>
                <div className="side-menu-title">
                    <h2>Olá, faça seu <Link to='/login'>login</Link></h2>
                    <button onClick={() => setSideMenu(!sideMenu)}>X</button>
                </div>
                <div>
                    <h3>Destaques </h3>
                    <h4>Mais vendidos <span>{">"}</span></h4>
                    <h4>Novidades <span>{">"}</span></h4>
                    <h4>Produtos em alta <span>{">"}</span></h4>
                </div>
                <hr/>
                <h3 className="lz-side-title">LeonzonPrime Video</h3>
                <hr />
                <div>
                    <h3>Comprar Por Categoria</h3>
                    <h4>Alimentos e Bebidas <span>{">"}</span></h4>
                    <h4>Esportes<span>{">"}</span></h4>
                    <h4>Eletrônicos<span>{">"}</span></h4>
                </div>
                <hr />
                <div>
                    <h3>Ajuda E Configurações</h3>
                    <h4>Sua Conta</h4>
                    <h4>Ajuda</h4>
                    <h4>Sair</h4>
                </div>
                

            </SideMenuWrapper>
        </>
    );
}
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useUserName } from "../../../hooks/useUserName";
import { currentToken } from "../../../state/atom";
import { AccountMenuBarWrapper } from "./stylesAccountMenuBar";

export default function AccountMenuBar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [token, setToken] = useRecoilState(currentToken);
    const name = useUserName();


    return (
        <>
        <AccountMenuBarWrapper onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
            {name !== undefined ? <h5>Olá, {name}</h5> : <h5>Olá, faça seu login</h5>}
            <h3 >Contas e Listas</h3>
            {menuOpen && <div>
                <div><ul>
                    <h6>Suas Listas</h6>
                    <li>Wish List</li>
                    <li>Lista de compras</li>
                    <li>Criar uma Lista de desejos</li>
                </ul>
                <ul>
                    <h6>Sua conta</h6>
                    <li><Link to='/login'>Sua conta</Link></li>
                    <li>Seus pedidos</li>
                    <li>Sua Lista de desejos</li>
                    <li>Recomendados para você</li>
                    <li>Programe e Poupe</li>
                    <li>Sua assinatura LeonZonPrime</li>
                    <li>Inscrições e assinaturas</li>
                    <li>Música</li>
                    <li>Vídeo</li>
                    <li>Leitura</li>
                    <li>Aplicativos e dispositivos</li>
                    <li>Trocar de conta</li>
                    <li onClick={() => {
                    setToken("")
                    
                    }}> Sair da conta</li>
                </ul>
                </div>
            </div>}
        </AccountMenuBarWrapper>
        </>
    );
}
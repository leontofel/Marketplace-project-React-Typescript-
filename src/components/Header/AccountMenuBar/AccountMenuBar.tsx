import { useState } from "react";
import { Link } from "react-router-dom";
import { AccountMenuBarWrapper } from "./stylesAccountMenuBar";

export default function AccountMenuBar() {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
        <AccountMenuBarWrapper onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
            <h5>Olá, faça seu login</h5>
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
                    <li>Sair da conta</li>
                </ul>
                </div>
            </div>}
        </AccountMenuBarWrapper>
        </>
    );
}
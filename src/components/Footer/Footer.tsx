import { BackToTop, FooterContainer} from "./stylesFooter";
import logo from '../../assets/img/logo.png';

export default function Footer() {

    return (
        <>
            <BackToTop><a href="#inicio">Voltar ao início</a></BackToTop>
            <FooterContainer>
                <section className="footer-menu">
                    <div >
                        <h3>Conheça-nos</h3>
                        <ul>
                            <li>Informações corporativas</li>
                            <li>Carreiras</li>
                            <li>Comunicados à imprensa</li>
                            <li>Comunidade</li>
                            <li>Acessibilidade</li>
                            <li>LeonZon Science</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Ganhe dinheiro conosco</h3>
                        <ul>
                            <li>Publique seus livros</li>
                            <li>Seja um associado</li>
                            <li>Venda na Leonzon</li>
                            <li>Anuncie seus produtos</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Pagamento</h3>
                        <ul>
                            <li>Cartões de crédito</li>
                            <li>Cartões de débito</li>
                            <li>Boleto e pix</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Deixe-nos ajudar você</h3>
                        <ul>
                            <li>Leonzon e Covid-19</li>
                            <li>Sua conta</li>
                            <li>Frete e prazo de entrega</li>
                            <li>Devoluções e reembolsos</li>
                            <li>Gerencie seu conteúdo e dispositivos</li>
                            <li>Ajuda</li>
                        </ul>
                    </div>
                </section>
                <section className="footer-bottom">

                    <img src={logo} alt="Logo do Marketplace"></img>
                    <ul>
                        <li>Condições de uso |</li>
                        <li> Notificações de privacidade |</li>
                        <li> Cookies |</li>
                        <li> Anúncios Baseados em Interesses</li>
                        <li>&copy; 2022 - Leonzon </li>
                    </ul>


                </section>

            </FooterContainer>
        </>
    );
}
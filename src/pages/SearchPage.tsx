import { useRecoilValue } from "recoil";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import { currentSearch } from "../state/atom";

export default function SearchPage() {

console.log(useRecoilValue(currentSearch));


    return (
        <main>
            <Header/>
            <NavBar />
            
            <h3> Exibindo resultados para {useRecoilValue(currentSearch)} </h3>
            <hr></hr>


            <Footer />

        </main>
    );
}
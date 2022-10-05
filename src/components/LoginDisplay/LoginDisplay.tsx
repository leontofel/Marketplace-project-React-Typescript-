import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginDisplayContainer } from "./stylesLoginDisplay";
import { useNavigate } from "react-router-dom";

export default function LoginDisplay() {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin() {

        axios.post('http://localhost:8000/login', {email, password}, {withCredentials: true})
        .then(res => {
            console.log(res);
            alert("usuário logado com sucesso");
            navigate("/");
        })
        .catch(err => console.log(err))
    }

    return (
        <>
            <LoginDisplayContainer>
                <h2>Entre na sua conta: </h2>
                <p>E-mail:</p>
                <input type="email" onChange={e => setEmail(e.target.value)}/>
                <p>Senha:</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
                <button onClick={handleLogin}>Entrar</button>
                <p>Esqueci minha senha</p>
                <Link to="/cadaster">Quero criar uma conta</Link>
            </LoginDisplayContainer>
        </>
    );
}
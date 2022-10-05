import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RegisterDisplayContainer } from "./stylesRegisterDisplay";
//import bcrypt from 'bcrypt';
import { useForm } from "react-hook-form";
import { currentToken } from "../../state/atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

type cepJSON = {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
}

export default function RegisterDisplay() {
    
    const [token, setToken] = useRecoilState(currentToken);
    const navigate = useNavigate();

    // React Hook Forms for new user
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<{email: string, user: string, password: string, streetNumber: string, complement?: string }>();
    const onSubmit = handleSubmit((data: {email: string, user: string, password: string, streetNumber: string, complement?: string }) =>{
        handleSubmitNewUser(data.email, data.user, data.password, data.streetNumber, data.complement);
    });


    const handleSubmitNewUser = async (email: string, user: string, password: string, streetNumber: string, complement?: string) => {

        const newUser = {
            "user": user,
            "email": email,
            "password": password,
            "address": {
                "street": cepRequested.logradouro,
                "number": streetNumber,
                "complement": complement,
                "area": cepRequested.bairro,
                "city": cepRequested.localidade,
                "state": cepRequested.uf,
                "cep": cep
            }
        }
        
          
          axios.post('http://localhost:8000/cadaster', newUser, {withCredentials: true})
            .then(response => {
              setToken(response.data);
              alert("usuário criado com sucesso")
              navigate("/")
            })
            .catch(err => console.log(err));
        
    }

    //CEP Hooks and functions
    const [cep, setCep] = useState("");
    const cepRequestModel: cepJSON = {
        cep: "",
        logradouro: "",
        bairro: "",
        complemento: "",
        ddd: "",
        gia: "",
        ibge: "",
        localidade: "",
        siafi: "",
        uf: ""
    };
    const [cepRequested, setCepRequested] = useState(cepRequestModel);

    
    useEffect(() => {
        if(cep.length === 8) handleCEPRequest()
        async function handleCEPRequest() {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
                .then((res) => {
                    let cepObject = res.data;
                    console.log(res.data);
                    
                    setCepRequested(cepObject);
                    console.log(cepObject);
                });
        }

    }, [cep, cep.length])

    return (
        <>
            <RegisterDisplayContainer>
                <div className="testbox">
                    <h1>Cadastro</h1>

                    <form onSubmit={(e) => { 
                        e.preventDefault();
                        onSubmit();
                        }}>
                        <hr />
                        <hr />
                        <label id="icon" htmlFor="name">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                        </label>
                        <input type="text" {...register("email", {required: true})} placeholder="Email" />

                        <label id="icon" htmlFor="name">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            </svg>
                        </label>
                        <input type="text" {...register("user", {required: true})} placeholder="Nome do usuário" />

                        <label id="icon" htmlFor="name">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                                <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                        </label>
                        <input type="password" {...register("password", {required: true})} placeholder="Digite sua senha" />

                        <hr/>
                        <label id="icon" htmlFor="name">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z" />
                            </svg>
                        </label>
                        <input type="text" maxLength={9} required placeholder="digite seu CEP" onChange={(e) => setCep(e.target.value)}/> 
                        <input type="text" value={cepRequested.logradouro} placeholder="rua"/>
                        <input type="text" {...register("streetNumber", {required: true})} placeholder="número da rua"/>
                        <input type="text" {...register("complement")} placeholder="complemento"/>
                        <input type="text" value={cepRequested.bairro} placeholder="bairro"/>
                        <input type="text" value={cepRequested.localidade} placeholder="cidade"/>
                        <input type="text" value={cepRequested.uf} placeholder="estado"/>
                        <hr />
                        <div className="button">
                            <Link to="/login">Já tenho uma conta</Link>
                            <input type="submit" value="Cadastrar" />
                        </div>
                        <br />
                    </form>
                </div>


            </RegisterDisplayContainer>

        </>
    );
}
import Logo from "./../assets/images/MyWallet.png";
import styledComponents from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function TelaCadastro(){
    const Navigate = useNavigate();
const [valueInputs,setValueInputs]=useState({inputEmail:"",inputSenha:"",inputNome:"",inputReSenha:""})
async function sendForms(e){
    e.preventDefault();
const postSignup="http://localhost:5000/sign-up";
const objPost={
    name:valueInputs.inputNome,
    email:valueInputs.inputEmail,
    password:valueInputs.inputSenha,
    repassword:valueInputs.inputReSenha
};
const promise= axios.post(postSignup,objPost)
promise.then((response)=>{
    alert("cadastro realizado com sucesso")
    Navigate("/")
})
promise.catch((e)=>{
    alert("erro, valide as informações e tente novamente")
})
}
    return(
        <div className="App">
<All>   
        <LogoImage>
        <img src={Logo} alt="logo"/>
        </LogoImage>
        <form onSubmit={sendForms}>
        <input 
            className="inputGeral"
            type="text" 
            value={valueInputs.inputNome}
            onChange={(e)=>{
            setValueInputs({...valueInputs,inputNome:e.target.value})
            }}
            placeholder="  Nome" required>
        </input>    
        <input 
            className="inputGeral"
            type="email" 
            value={valueInputs.inputEmail}
            onChange={(e)=>{
            setValueInputs({...valueInputs,inputEmail:e.target.value})
            }}
            placeholder="  E-mail" required>
        </input>
        <input 
            className="inputGeral" 
            type="password" 
            value={valueInputs.inputSenha} 
            placeholder="  Senha" required
            onChange={(e)=>{
                setValueInputs({...valueInputs,inputSenha:e.target.value})
            }}>

        </input>
        <input 
            className="inputGeral"
            type="password" 
            value={valueInputs.inputReSenha}
            onChange={(e)=>{
            setValueInputs({...valueInputs,inputReSenha:e.target.value})
            }}
            placeholder="  Confirme a senha" required>
        </input>
        <button type="submit" className="buttonGeral">Entrar</button>
        </form>
        <Link to="/">
        <span>Já tem uma conta? Entre agora!</span>
        </Link>
        </All>
        </div>
    )
}
const All=styledComponents.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
    span{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color:#FFFFFF;
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }   
`
const LogoImage= styledComponents.div`
display: flex;
justify-content:center;
img{
margin-top:120px;
margin-bottom:20px;
width:150px;
height:50px;
}
`
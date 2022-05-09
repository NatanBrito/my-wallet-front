import styledComponents from "styled-components";
import { useState, useContext } from "react";
import { TokenContext } from "../context/Token";
import { UserContext } from "../context/User";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../assets/images/MyWallet.png";
export default function TelaLogin(){
const {setUser}=useContext(UserContext)
const {setToken}= useContext(TokenContext)
const Navigate = useNavigate();
const [valueInputs,setValueInputs]=useState({inputEmail:"",inputSenha:""})
function sendForms(e){
    e.preventDefault();
const postSignIn="http://localhost:5000/sign-in";
const objPost={
    email:valueInputs.inputEmail,
    password:valueInputs.inputSenha
}
    const promise= axios.post(postSignIn,objPost)
    promise.then((res)=>{
        const {token,user}=res.data
        setToken(token)
        setUser(user)
        Navigate("/outlay")})
    promise.catch((e)=>{
       alert(e.message)
       setValueInputs({inputEmail:"",inputSenha:""})
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
        <button type="submit" className="buttonGeral">Entrar</button>
        </form>
        <Link to="/sign-up">
        <span>Primeira vez? Cadastre-se!</span>
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
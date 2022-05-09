import styledComponents from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../assets/images/MyWallet.png";
export default function TelaLogin(){
const Navigate = useNavigate();
const [valueInputs,setValueInputs]=useState({inputEmail:"",inputSenha:""})
async function sendForms(e){
    e.preventDefault();
const postSignIn="localhost:5000/sign-in";
const objPost={
    email:valueInputs.inputEmail,
    password:valueInputs.inputSenha
}
try{// testando com try/catch
   await axios.post(postSignIn,objPost)//dando erro nessa bosta
    Navigate("/outlay")
   }catch(e){
       alert("erro")
       console.log(e)
    //    setValueInputs({inputEmail:"",inputSenha:""})
   }
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
import axios from "axios";
import styledComponents  from "styled-components";
import { useState, useContext } from "react";
import { TokenContext } from "../context/Token";
import { Link, useNavigate, Navigate } from "react-router-dom";
export default function Saida(){
    const {Token}=useContext(TokenContext);
    const Navigate = useNavigate();
    const [valueInputs,setValueInputs]=useState({inputDescricao:"",inputValor:""});
    function sendForms(e){
        e.preventDefault();
    const postMessages="http://localhost:5000/messages";
    const objPost={
        value:valueInputs.inputValor,
        describe:valueInputs.inputDescricao,
        type:"saida"
    } 
    const config = {
        headers: {
          Authorization: `bearer ${Token}`,
        },
      };
    const promise= axios.post(postMessages,objPost,config);
    promise.then((res)=>{
    Navigate("/outlay")
    })
    promise.catch((e)=>{
        alert(" algo deu errado...")
        alert(e.message)

    })
}   
    return(
        <All>
        <header>
                <span>Nova Saida</span>
        </header>
        <form onSubmit={sendForms}>
        <input 
            className="inputGeral"
            type="number" 
            value={valueInputs.inputValor}
            onChange={(e)=>{
            setValueInputs({...valueInputs,inputValor:e.target.value})
            }}
            placeholder="  Valor" required>
        </input>
        <input 
            className="inputGeral" 
            type="text" 
            value={valueInputs.inputDescricao} 
            placeholder="  Descrição" required
            onChange={(e)=>{
                setValueInputs({...valueInputs,inputDescricao:e.target.value})
            }}>

        </input>
        <button type="submit" className="buttonGeral">Entrar</button>
        </form>
        </All>
    )
}

const All=styledComponents.div`
display:flex;
flex-direction:column;
align-items:center;
    span{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        color:#FFFFFF;
        cursor: pointer;
    }
    header{
        display:flex;
        width:100%;
        justify-content:space-evenly;
        margin-top:60px;
        margin-bottom:30px;

    }
`


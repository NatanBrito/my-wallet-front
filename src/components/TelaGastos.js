import  styledComponents  from "styled-components";
import logout from "./../assets/images/logout.png";
import { Link, useNavigate } from "react-router-dom";
import xx from "./../assets/images/xx.png";
import yy from "./../assets/images/yy.png";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/User";
import { TokenContext } from "../context/Token";
export default function TelaGastos(){
    const Navigate = useNavigate();
    let earns=0;
    let buy=0;
    const {User,setUser}=useContext(UserContext);
    const {Token,setToken}=useContext(TokenContext);
    const [messages,setMessages]=useState([]) 
    const GETURL="http://localhost:5000/messages";
    const config = {
      headers: {
        Authorization: `bearer ${Token}`,
      },
    };
    useEffect(()=>{
      const promise= axios.get(GETURL,config)
      promise.then((res)=>{
      setMessages(res.data)
      })
      promise.catch((e)=>{
          alert(e.message)

      })
    },[]);
   
    return(
        <Centro>
        <All>
            <header>
                <>
                <span>olá, {User}</span>
                <img onClick={()=>{
                 setToken(null)
                 setUser(null)
                 Navigate("/")
                }} src={logout} alt="sair"/>
                </>
            </header>
            <WhiteBoad>
           {messages.map((msg,index)=>{
               if(msg.type==="entrada"){
                   earns+=msg.value;
               }else{
                buy+=msg.value;
               }
               return( <MessagesUser key={msg.time+index} 
                time={msg.time} describe={msg.describe}
                type={msg.type} value={msg.value} />
              
              )
            })}
            <MessagesUser />
            <Saldo>
            <span>Saldo</span>
            </Saldo>
            <ValorSaldo>
             <span className={earns-buy>0?"entrada":"saida"}>{earns ===0?(earns-buy):(earns-buy)}</span>
            </ValorSaldo>
            </WhiteBoad>
            <Buttons>
            <button onClick={()=>{Navigate("/entradasaida")}} className="afasta buttonAdicionar">
                <img className="img" src={xx} alt="mais"/>
                <span>Nova Entrada</span>
            </button>
            <button onClick={()=>{Navigate("/saida")}} className="buttonAdicionar">
            <img className="img" src={xx} alt="mais"/>
            <span>Nova Saida</span>
            </button>
            </Buttons>
        </All>
        </Centro>   
    )
}
function MessagesUser({time,describe,type,value}){
   return(
   <Message>
            <Esquerda>
             <span className="horario">{time}                      </span>
             <span className="describe">    {describe}</span>
            </Esquerda>
            <Direita>
              <span className={type==="saida"?"saida":"entrada"}>{value}</span>
            </Direita>
            </Message>
   )
}
const ValorSaldo=styledComponents.div`
display:flex;
margin-top:20px;
position:absolute;
bottom:15px;
right:10px;
span{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
}
`
const Saldo=styledComponents.div`
display:flex;
position:absolute;
bottom:15px;
left:10px;
 span{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
}
`
const Message=styledComponents.div`
padding:10px;
display:flex;
justify-content:space-between;
 .entrada{
     color:green;
 }
 .saida{
     color:red;
 }
`
const Esquerda=styledComponents.div`
.horario{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color:gray;
}
.describe{
    
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 16px;
}
`
const Direita=styledComponents.div`
span{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
}
`
const Buttons=styledComponents.div`
margin-top:20px;
.afasta{
    margin-right:15px;
    }
button{
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    border:none;
        .img{
            width:21px;
            height:21px;
            margin-right:110px;
            margin-bottom:60px;
        }
        span{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            color:white;
            
        }
}
:hover{
    color:black;
}
`
const WhiteBoad=styledComponents.div`
width:326px;
height:446px;
background-color:white;
border-radius:5px;
margin-top:20px;
position:relative;
overflow:scroll;
`
const Centro=styledComponents.div`
display:flex;
justify-content:center;

`
const All=styledComponents.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:375px;
.entrada{
    color:green;
}
.saida{
    color:red;
}
    header{
        margin-top:30px;
        width:326px;
        display:flex;
        justify-content:space-between;
            span{
                font-family: 'Raleway';
                font-style: normal;
                font-weight: 700;
                font-size: 26px;
                color:white;
            }
            img:hover{
                transition: 1s;
                width:20px;            
            }
    }
`
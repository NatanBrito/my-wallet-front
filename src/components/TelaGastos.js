import  styledComponents  from "styled-components";
import logout from "./../assets/images/logout.png";
import xx from "./../assets/images/xx.png";
import yy from "./../assets/images/yy.png"

export default function TelaGastos(){
  
    return(
        <Centro>
        <All>
            <header>
                <>
                <span>olá,Fulano</span>
                <img src={logout} alt="sair"/>
                </>
            </header>
            <WhiteBoad>
            <Message>
            <Esquerda>
             <span className="horario">12:51</span>
             <span className="describe"> traasasasalalau</span>
            </Esquerda>
            <Direita>
              <span className="saida ">15500</span>
            </Direita>
            </Message>
            <Message>
            <Esquerda>
             <span className="horario">12:01</span>
             <span className="describe"> tralalau</span>
            </Esquerda>
            <Direita>
              <span className="entrada">500</span>
            </Direita>
            </Message>
            <Message>
            <Esquerda>
             <span className="horario">12:51</span>
             <span className="describe"> traasasasalalau</span>
            </Esquerda>
            <Direita>
              <span className="saida ">15500</span>
            </Direita>
            </Message>
            <Message>
            <Esquerda>
             <span className="horario">12:01</span>
             <span className="describe"> tralalau</span>
            </Esquerda>
            <Direita>
              <span className="entrada">500</span>
            </Direita>
            </Message>
            <Message>
            <Esquerda>
             <span className="horario">12:51</span>
             <span className="describe"> traasasasalalau</span>
            </Esquerda>
            <Direita>
              <span className="saida ">15500</span>
            </Direita>
            </Message>
            <Message>
            <Esquerda>
             <span className="horario">12:01</span>
             <span className="describe"> tralalau</span>
            </Esquerda>
            <Direita>
              <span className="entrada">500</span>
            </Direita>
            </Message>
            <Saldo>
            <span>Saldo</span>
            </Saldo>
            <ValorSaldo>
             <span>151515</span>
            </ValorSaldo>
            </WhiteBoad>
            <Buttons>
            <button className="afasta">
                <img className="img" src={xx} alt="mais"/>
                <span>Nova Entrada</span>
            </button>
            <button>
            <img className="img" src={xx} alt="mais"/>
            <span>Nova <p>Saida</p></span>
            </button>
            </Buttons>
        </All>
        </Centro>   
    )
}
// sumir com os scrolls
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
}
.describe{
    
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
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
            img{
            
            }
    }
`
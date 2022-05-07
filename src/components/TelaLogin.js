import styledComponents from "styled-components";
// import Logo from "./../assets/images/MyWallet.png"; dando problema nesse import
export default function TelaLogin(){
    return(
        <div className="App">
        <LogoImage>
        {/* <img src={Logo} alt="logo"/> */}
        </LogoImage>
        <h1 className="xx"> "cheguei mermão, Tela Login"</h1>
        </div>
    )
}
const LogoImage= styledComponents.div`


`
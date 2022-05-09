import axios from "axios"

export default function EntradaSaida(){
    const config = {
        headers: {
          Authorization: `Bearer 99995a21-a919-4f2f-841b-770d8cdb980d`,
        },
      };
    const promise= axios.get("http://localhost:5000/messages",config)
    promise.then((res)=>{
        console.log(res.data)
    })
    promise.catch((e)=>{
    alert(e)
    })
    return(
        <h4>Entrada e saida de valores</h4>
    )
}
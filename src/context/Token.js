import { createContext,useState } from "react";

export const TokenContext=createContext({});
export default function TokenProvider({children}){
    const [Token,setToken]=useState(null)
    return(
        <TokenContext.Provider value={{Token,setToken}}>
            {children}
        </TokenContext.Provider>
    
    )
    }
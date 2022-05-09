import { createContext,useState } from "react";
export const UserContext=createContext({});
export default function UserProvider({children}){
    const [User,setUser]=useState(null)
    return(
        <UserContext.Provider value={{User,setUser}}>
            {children}
        </UserContext.Provider>
    
    )
    }

import { createContext,useState } from "react";

export  const UserContext = createContext({})
export function GetuseContextProvider({children}){


 const[user,setuser]= useState(null)
 return(
     <UserContext.Provider value={{user,setuser}}>
     {children}
        
     </UserContext.Provider>

 )

}
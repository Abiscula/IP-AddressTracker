import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = (props) => {

    const [data, setData] = useState('') //criando estado que será acessado em qualquer lugar da aplicação
    const [current, setCurrent] = useState({})

    return(
        <AuthContext.Provider value={{data, setData, current, setCurrent}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext) //criando hook personalizado para acesso facilitado ao contexto
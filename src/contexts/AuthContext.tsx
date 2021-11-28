import { createContext, useState, ReactNode } from 'react'

type AuthContextProviderProps = {
    children: ReactNode;
}

type AuthContextType = {
    user: any,
    token: string,
    signIn: (user: any) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState({})
    const [token, setToken] = useState('')

    async function signIn(user: any) {
        setUser({
            ...user.user
        })
        
        setToken(user.token)
    }

    return (
        <AuthContext.Provider value={{user, token, signIn}}>
            {props.children}
        </AuthContext.Provider>
    )
}


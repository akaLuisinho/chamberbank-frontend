import { createContext, useState, ReactNode } from 'react'
import { User } from '../types/user'

type AuthContextProviderProps = {
    children: ReactNode;
}

type AuthContextType = {
    user: any,
    token: string,
    signIn: (user: User) => Promise<void>
    setUser: (user: User | {}) => void
    setToken: (token: string | '') => void
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
        <AuthContext.Provider value={{user, token, signIn, setUser, setToken}}>
            {props.children}
        </AuthContext.Provider>
    )
}


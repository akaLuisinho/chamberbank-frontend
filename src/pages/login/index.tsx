import { useState, FormEvent } from 'react';
import { Container } from './styles'
import { login } from '../../services/user'
// import {  } from 'react-router';

export const Login = () => {
    
    const [password, setPassword] = useState('')
    const [accountCode, setAccountCode] = useState('')

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();

        const user = await login(accountCode, password)

        if(user) {
            console.log(user);
        } else {
            setPassword('')
            setAccountCode('')
        }
    }
    return(
        <Container>
            <h1>Chamberbank!</h1>

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="N° da Conta"
                    value={accountCode}
                    onChange={e => setAccountCode(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">
                    Entrar
                </button>
            </form>
        </Container>
    )
}
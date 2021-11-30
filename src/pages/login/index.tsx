import { useState, FormEvent } from 'react';
import { Container, Form, Input, Button } from './styles'
import { login } from '../../services/user'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'

export const Login = () => {
    
    const [password, setPassword] = useState('')
    const [accountCode, setAccountCode] = useState('')
    const history = useHistory()
    const { signIn } = useAuth()

    const handleLogin = async (event: FormEvent) => {
        event.preventDefault();

        const user = await login(accountCode, password)

        
        if(user) {
            signIn(user)
            history.push('/home')
        } else {
            setPassword('')
            setAccountCode('')
        }
    }
    return(
        <Container>
            <h1>Chamberbank!</h1>

            <Form onSubmit={handleLogin}>
                <Input
                    type="text"
                    placeholder="N° da Conta"
                    value={accountCode}
                    onChange={e => setAccountCode(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button type="submit">
                    Entrar
                </Button>
            </Form>

            <Link to="/signup">Não tem conta?</Link>
        </Container>
    )
}
import { useState, FormEvent } from 'react';
import { Container } from './styles'
import { create } from '../../services/user'
import { Link } from 'react-router-dom'

export const CreateAccount = () => {
    
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const handleCreateAccount = async (event: FormEvent) => {
        event.preventDefault();

        const userCredentials = {
            name,
            cpf,
            email,
            phone,
            password,
        }

        const user = await create(userCredentials)
        
        if(user) {
            console.log(user);
        } else {
            setName('')
            setCpf('')
            setEmail('')
            setPhone('')
            setPassword('')
        }
    }
    return(
        <Container>
            <h1>Chamberbank!</h1>

            <form onSubmit={handleCreateAccount}>
                <input
                    type="text"
                    placeholder="Seu Nome..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Seu CPF..."
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Seu Telefone..."
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Seu Email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                
                <input
                    type="password"
                    placeholder="Sua Senha..."
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">
                    Entrar
                </button>
            </form>

            <Link to="/">Já tem conta?</Link>
        </Container>
    )
}
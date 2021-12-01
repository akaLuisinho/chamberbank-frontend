import { useState, FormEvent } from 'react';
import { Container, Form, Input, Button, CreatedUserCredentials } from './styles'
import { create } from '../../services/user'
import { Link } from 'react-router-dom'
import { User } from '../../types/user'

export const CreateAccount = () => {
    
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState<User>()


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
            setUser(user)
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
            {user && 
                <CreatedUserCredentials>
                    <p>N° da Conta: {user.accountCode}</p>
                    <p>Nome: {user.name}</p>
                    <p>CPF: {user.cpf}</p>
                    <p>Email: {user.email}</p>

                    <div className="account-alert">Guarde o número da conta, você precisará dele para se logar...</div>

                    <Link className='link-class' to='/'>Ir para login</Link>
                </CreatedUserCredentials>
            }
            <Form onSubmit={handleCreateAccount}>
                <Input
                    type="text"
                    placeholder="Seu Nome Completo..."
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Seu CPF..."
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Seu Telefone..."
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Seu Email..."
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                
                <Input
                    type="password"
                    placeholder="Crie uma Senha..."
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">
                    Criar
                </Button>
            </Form>

            <Link to="/">Já tem conta?</Link>
        </Container>
    )
}
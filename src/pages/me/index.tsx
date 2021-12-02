import { useState } from "react";
import { Container, Content, Input, Button, UpdateArea } from "./styles";
import { useHistory } from 'react-router-dom'
import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header";
import { updateUser, deleteUser } from "../../services/user";
import { useAuth } from "../../hooks/useAuth";

export const Me = () => {

    const { token, user, setUser } = useAuth()
    const history = useHistory()
    const [name, setName] = useState(user.name)
    const [cpf, setCpf] = useState(user.cpf)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    

    const handleChange = () => {
        const newUser = {
            ...user,
            name,
            cpf,
            email,
            phone,
        }

        try {
            updateUser(newUser, token)
            setUser(newUser)

            history.push('/home')
        } catch (error) {
            return
        }
    }

    const deleteAccount = () => {
        try {
            deleteUser(token)
            history.push('/')
        } catch (error) {
            return
        }
    }

    return (
        <Container>
            <Content>
                <Header />

                <UpdateArea>
                    <span>Conta: {user.accountCode}</span>
                    <Input
                        type="text"
                        placeholder="Seu Nome..."
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder="Seu CPF..."
                        value={cpf}
                        onChange={(event) => setCpf(event.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder="Seu Email..."
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <Input
                        type="text"
                        placeholder="Seu Telefone..."
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />

                    <Button color={'yellow'} onClick={() => handleChange()}>Alterar Dados</Button>
                    <Button color={'red'} onClick={() => deleteAccount()}>Deletar Conta</Button>
                </UpdateArea>
            </Content>

            <Sidebar />
        </Container>
    )
};
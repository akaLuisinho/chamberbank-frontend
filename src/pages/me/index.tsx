import { useState } from "react";
import { Container, Content, Input, Button, DepositArea } from "./styles";
import { Redirect } from 'react-router-dom'
import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header";
import { updateUser } from "../../services/user";
import { useAuth } from "../../hooks/useAuth";

export const Me = () => {

    const { token, user, setUser } = useAuth()

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

            return <Redirect to="/" />
        } catch (error) {
            return
        }
    }

    return (
        <Container>
            <Content>
                <Header />

                <DepositArea>
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

                    <Button onClick={() => handleChange()}>Alterar Dados</Button>
                </DepositArea>
            </Content>

            <Sidebar />
        </Container>
    )
};
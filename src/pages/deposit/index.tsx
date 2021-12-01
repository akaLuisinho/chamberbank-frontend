import { useState } from "react";
import { Container, Content, Input, Button, DepositArea } from "./styles";
import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header";
import { deposit } from '../../services/deposit'
import { useAuth } from "../../hooks/useAuth";

export const Deposit = () => {

    const [moneyQuantity, setMoneyQuantity] = useState('')
    const { token, user, setUser } = useAuth()

    const handleDeposit = () => {
        const formatedMoneyQuantity = parseInt(moneyQuantity)

        try {
            deposit(formatedMoneyQuantity, token)
            setUser({
                ...user,
                balance: user.balance + formatedMoneyQuantity
            })
            setMoneyQuantity('')
        } catch (error) {
            setMoneyQuantity('')
        }
        
    }

    return (
        <Container>
            <Content>
                <Header />

                <DepositArea>
                    <Input
                        type="number"
                        placeholder="Digite o valor..."
                        value={moneyQuantity}
                        onChange={(event) => setMoneyQuantity(event.target.value)}
                    />

                    <Button onClick={() => handleDeposit()}>Confirmar</Button>
                </DepositArea>
            </Content>

            <Sidebar />
        </Container>
    )
};
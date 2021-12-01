import { useState } from "react";
import { Container, Content, Input, Button, DepositArea } from "./styles";
import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header";
import { deposit } from '../../services/deposit'
import { useAuth } from "../../hooks/useAuth";

export const Deposit = () => {

    const [moneyQuantity, setMoneyQuantity] = useState('')
    const { token } = useAuth()

    const handleDeposit = () => {
        const formatedMoneyQuantity = parseInt(moneyQuantity)

        deposit(formatedMoneyQuantity, token)

        setMoneyQuantity('')
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
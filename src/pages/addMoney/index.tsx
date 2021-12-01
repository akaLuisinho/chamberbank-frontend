import { useState } from "react";
import { Container, Content, Input, Button, DepositArea } from "./styles";
import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header";
import { deposit } from '../../services/deposit'
import { useAuth } from "../../hooks/useAuth";

export const AddMoney = () => {

    const [moneyQuantity, setMoneyQuantity] = useState('')
    const { token } = useAuth()

    const handleAddMoney = () => {
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

                    <Button onClick={() => handleAddMoney()}>Confirmar</Button>
                </DepositArea>
            </Content>

            <Sidebar />
        </Container>
    )
};
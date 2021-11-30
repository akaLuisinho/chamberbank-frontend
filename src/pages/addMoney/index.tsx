import { useState } from "react";
import { Container, Content, Input, Button} from "./styles";
import { Sidebar } from "../../components/Sidebar"
import { addMoney } from '../../services/addMoney'
import { useAuth } from "../../hooks/useAuth";

export const AddMoney = () => {

    const [moneyQuantity, setMoneyQuantity] = useState('')
    const { token } = useAuth()

    const handleAddMoney = () => {
        const formatedMoneyQuantity = parseInt(moneyQuantity)

        addMoney(formatedMoneyQuantity, token)
    }

    return (
        <Container>
            <Content>
                <h1>Chamberbank!</h1>
                <Input
                    type="number"
                    placeholder="Digite o valor..."
                    value={moneyQuantity}
                    onChange={(event) => setMoneyQuantity(event.target.value)}
                />

                <Button onClick={() => handleAddMoney()}>Confirmar</Button>
            </Content>

            <Sidebar />
        </Container>
    )
};
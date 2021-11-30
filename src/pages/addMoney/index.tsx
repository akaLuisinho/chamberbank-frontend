import { useState } from "react";
import { Container, Content } from "./styles";
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
                <input
                    type="number"
                    placeholder="Digite o valor..."
                    value={moneyQuantity}
                    onChange={(event) => setMoneyQuantity(event.target.value)}
                />

                <button onClick={() => handleAddMoney()}>Confirmar</button>
            </Content>

            <Sidebar />
        </Container>
    )
};
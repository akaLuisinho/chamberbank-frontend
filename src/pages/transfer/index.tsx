import { useState, useEffect } from 'react'
import { Container, Content, TransferInputs, TransferResponses, Input, Button } from "./styles";
import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { findUserByAccountCode, transferMoney } from '../../services/transaction'
import { useAuth } from '../../hooks/useAuth';
import { User } from '../../types/user'

export const Transfer = () => {

    const { token } = useAuth()
    const [toAccountCode, setToAccountCode] = useState('')
    const [moneyQuantity, setMoneyQuantity] = useState('')
    const [toUser, setToUser] = useState<User>()    


    useEffect(() => {
        const findToUser = async () => {
            const toUser = await findUserByAccountCode(toAccountCode, token)
    
            setToUser(toUser)
        }

        findToUser()

    }, [toAccountCode, token])

    const handleTransfer = () => {
        const formatedMoneyQuantity = parseInt(moneyQuantity)

        if(toUser) {
            transferMoney(toUser.id, formatedMoneyQuantity, token)
        } else {
            return
        }
    }
    
    return (
        <Container>
            <Content>
                <Header />

                <TransferInputs>
                    <Input
                        type="text"
                        placeholder="N° da Conta..."
                        value={toAccountCode}
                        onChange={(event) => setToAccountCode(event.target.value)}
                    />

                    <Input
                        type="number"
                        placeholder="Digite o Valor..."
                        value={moneyQuantity}
                        onChange={(event) => setMoneyQuantity(event.target.value)}
                    />
                </TransferInputs>
                
                <TransferResponses>
                    {toUser &&
                        <div>
                            <p>Nome:</p><span>{toUser.name}</span>
                        
                            <p>Número da conta:</p><span>{toUser.accountCode}</span>
                            
                            <p>CPF:</p><span>{toUser.cpf}</span>
                        </div>
                    }

                    {toUser && moneyQuantity &&
                        <div>
                            <p>R$ {moneyQuantity} </p>
                            <Button onClick={() => handleTransfer()}>Transferir</Button>
                        </div>
                    }
                </TransferResponses>
            </Content>

            <Sidebar />
        </Container>
    )
};
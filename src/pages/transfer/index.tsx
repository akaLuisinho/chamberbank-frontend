import { useState, useEffect, FormEvent } from 'react'
import { Container, Content, TransferInputs, TransferResponses, Input, Button } from "./styles";
import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { findUserByAccountCode, transferMoney } from '../../services/transaction'
import { useAuth } from '../../hooks/useAuth';
import { User } from '../../types/user'

export const Transfer = () => {

    const { token, user, setUser } = useAuth()
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

    const handleTransfer = (event: FormEvent) => {
        event.preventDefault()

        const formatedMoneyQuantity = parseInt(moneyQuantity)

        if(toUser) {
            transferMoney(toUser.id, formatedMoneyQuantity, token)
            setUser({
                ...user,
                balance: user.balance + formatedMoneyQuantity
            })
            setToAccountCode('')
            setMoneyQuantity('')
        } else {
            return
        }
    }
    
    return (
        <Container>
            <Content>
                <Header />

                <form onSubmit={event => handleTransfer(event)} >
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
                            max={user.balance}
                        />
                    </TransferInputs>
                    
                    <TransferResponses>
                        {toUser &&
                            <div>
                                {user.balance}
                                <p>Nome:</p><span>{toUser.name}</span>
                            
                                <p>Número da conta:</p><span>{toUser.accountCode}</span>
                                
                                <p>CPF:</p><span>{toUser.cpf}</span>
                            </div>
                        }

                        {toUser && moneyQuantity &&
                            <div>
                                <p>R$ {moneyQuantity} </p>
                                <Button type='submit'>Transferir</Button>
                            </div>
                        }
                    </TransferResponses>
                </form>
            </Content>

            <Sidebar />
        </Container>
    )
};
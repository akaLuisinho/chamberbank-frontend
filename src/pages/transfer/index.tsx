import { useState, useEffect } from 'react'
import { Container, Content, SelectAccount, InputQuantity, CheckValues } from "./styles";
import { Sidebar } from "../../components/Sidebar"
import { findUserByAccountCode, transferMoney } from '../../services/transaction'
import { useAuth } from '../../hooks/useAuth';
import { User } from '../../types/user'

export const Transfer = () => {

    const { token } = useAuth()
    const [toAccountCode, setToAccountCode] = useState('')
    const [toUser, setToUser] = useState<User>()    

    const [moneyQuantity, setMoneyQuantity] = useState('')

    useEffect( () => {
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
                <SelectAccount>
                    <input 
                    type="text"
                    placeholder="Digite o número da conta..." 
                    value={toAccountCode}
                    onChange={(event) => setToAccountCode(event.target.value)}
                    />

                    {toUser &&
                    <div>
                        <p>
                            Nome: {toUser.name}
                        </p>
                        <p>
                           Número da conta: {toUser.accountCode}
                        </p>
                        <p>
                            CPF: {toUser.cpf}
                        </p>
                    </div>
                    }

                </SelectAccount>
                
                <InputQuantity>
                    R$<input
                        type="number"
                        placeholder="Digite o valor"
                        value={moneyQuantity}
                        onChange={(event)=> setMoneyQuantity(event.target.value)}
                    />
                </InputQuantity>

                <CheckValues>

                    {toUser && moneyQuantity &&
                    <div>
                    <h2>Confira tudo</h2>

                        <p>valor: R$ {moneyQuantity}</p>
                    

                        <p>para: {toUser.name} </p>
                        <p>conta: {toUser.accountCode} </p>

                        <button onClick={()=> handleTransfer()}>Transferir</button>
                    </div>

                    }
                </CheckValues>
            </Content>

            <Sidebar />
        </Container>
    )
};
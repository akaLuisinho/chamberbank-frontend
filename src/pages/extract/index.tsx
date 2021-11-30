import { useEffect, useState } from "react";
import { Container, Content, Transaction } from "./styles";
import { Sidebar } from "../../components/Sidebar"
import { useAuth } from '../../hooks/useAuth'
import { findTransactionsFromUser } from '../../services/transaction'

export const Extract = () => {

    const { token } = useAuth()
    const [transactions, setTransactions] = useState([])


    useEffect(() => {
        const findTransactions = async () => {
            const transactions = await findTransactionsFromUser(token)

            setTransactions(transactions)
        }   
        findTransactions()
    }, [token])

    return (
        <Container>
                <Content>
                    {transactions.map((transaction: any) =>
                    <Transaction>
                        <p>Id da transferência : {transaction.id}</p>
                        <p>Valor da transferência : {transaction.moneyQuantity}</p>
                        <p>Data da transferência : {transaction.created_at}</p>
                    </Transaction>
                    )}
                </Content>
            <Sidebar />
        </Container>
    )
};
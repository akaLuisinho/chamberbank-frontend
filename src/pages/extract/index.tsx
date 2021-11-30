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

    const formatDate = (date: Date) => {
        console.log(date);
        // const year = date.getUTCFullYear()
        // const month = date.getUTCMonth()
        // const day = date.getUTCDay()

        // return `${day}/${month}/${year}`
    }

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
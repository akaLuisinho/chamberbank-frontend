import { useEffect, useState } from "react";
import { Container, Content, Transaction, TransactionDate, TransactionData, TransactionValue } from "./styles";
import { Sidebar } from "../../components/Sidebar"
import { Header } from "../../components/Header"
import { useAuth } from '../../hooks/useAuth'
import { findTransactionsFromUser } from '../../services/transaction'

export const Extract = () => {

    const { token, user } = useAuth()
    const [transactions, setTransactions] = useState([])


    useEffect(() => {
        const findTransactions = async () => {
            const transactions = await findTransactionsFromUser(token)

            setTransactions(transactions.reverse())
        }   
        findTransactions()
    }, [token])

    const formatDate = (date: string) => {
        const americanDate = date.split('T')
        const [year, month, day] = americanDate[0].split('-')

        return `${day}/${month}/${year}`
    }

    return (
        <Container>
                <Content>
                    <Header />

                    {transactions.map((transaction: any) =>
                    <Transaction>
                        <TransactionDate>
                            <p>{formatDate(transaction.created_at)}</p>
                        </TransactionDate>

                        <TransactionData>
                            {transaction.fromId === user.id && 
                                <TransactionValue color={'red'}>- R$ {transaction.moneyQuantity}</TransactionValue>
                            }
                            
                            {transaction.toId === user.id &&
                                <TransactionValue color={'green'}>+ R$ {transaction.moneyQuantity}</TransactionValue>
                            }
                            <span>ID: {transaction.id}</span>
                        </TransactionData>

                    </Transaction>
                    )}
                </Content>
            <Sidebar />
        </Container>
    )
};
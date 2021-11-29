import { Container } from './styles';
import { useAuth } from '../../hooks/useAuth'
import { Link, Redirect } from 'react-router-dom'
export const Sidebar = () => {
    const { user } = useAuth()

    return(
        <Container>
            {user.name}
            <hr/>

            <p>Valor em conta R$: {user.balance}</p>

            <p><Link to="/home">Home</Link></p>
            <p><Link to="/extract">Extrato</Link></p>
            <p><Link to="/transfer">Transferir</Link></p>
            <p><Link to="/addMoney">Adicionar Dinheiro</Link></p>

        </Container>
    )
}
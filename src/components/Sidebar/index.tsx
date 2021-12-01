import { Container, UserName, LogoutButton } from './styles';
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { RiLuggageDepositLine, RiHomeLine } from 'react-icons/ri'
import { GrMoney } from 'react-icons/gr'
import { BiTransfer } from 'react-icons/bi'
import { CgLogOut } from 'react-icons/cg'
export const Sidebar = () => {
    const { user } = useAuth()

    return(
        <Container>
            <IconContext.Provider value={{className: 'react-icons'}}>
                <UserName>
                    <span>{user.name}</span><br />
                    <span>R$ {user.balance}</span>
                    <hr/>
                </UserName>


                <p><Link className='link-style' to='/home'>
                    <RiHomeLine />Home
                </Link></p>

                <p><Link className='link-style' to="/extract">
                    <GrMoney />Extrato
                </Link></p>

                <p><Link className='link-style' to="/transfer">
                    <BiTransfer />Transferir
                </Link></p>

                <p><Link className='link-style' to="/addMoney">
                    <RiLuggageDepositLine />Depositar
                </Link></p>

                
                <LogoutButton><CgLogOut />Sair</LogoutButton>
            </IconContext.Provider>
        </Container>
    )
}
import { Container, Content, Pages, PageButton, Logo } from './styles'
import { useAuth } from '../../hooks/useAuth'
import { Sidebar } from '../../components/Sidebar'
import { IconContext } from 'react-icons'
import { RiLuggageDepositLine } from 'react-icons/ri'
import { GrMoney } from 'react-icons/gr'
import { BiTransfer } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const Home = () => { 
    const { user, token } = useAuth()

        return (
        <Container>
            <IconContext.Provider value={{className: 'react-icons'}}>
                <Content>
                    <Logo>Chamberbank!</Logo>

                    <Pages>
                        <Link className='link-style' to="/extract">
                            <PageButton>
                                <GrMoney />
                                <p>Extrato</p>
                            </PageButton>
                        </Link>

                        <Link className='link-style' to="/transfer">
                            <PageButton>
                                <BiTransfer />
                                <p>Transferir</p>
                            </PageButton>
                        </Link>

                        <Link className='link-style' to="/addmoney">
                            <PageButton>
                                <RiLuggageDepositLine />
                                <p>Depositar</p>
                            </PageButton>
                        </Link>
                    </Pages>
                </Content>
            </IconContext.Provider>

            <Sidebar />
        </Container>
    )

}
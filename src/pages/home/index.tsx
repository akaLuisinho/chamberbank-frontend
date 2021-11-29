import { Container, Content } from './styles'
import { useAuth } from '../../hooks/useAuth'
import { Sidebar } from '../../components/Sidebar'

export const Home = () => {
    const { user, token } = useAuth()

        return (
        <Container>
            <Content>testing</Content>
            <Sidebar />
        </Container>
    )

}
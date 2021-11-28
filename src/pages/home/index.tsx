import { useEffect } from 'react'
import { Container } from './styles'
import { useAuth } from '../../hooks/useAuth'
import { getHome } from '../../services/user'

export const Home = () => {
    const { user, token } = useAuth()

    useEffect(() => {
        getHome(token, '/user')
    }, [])
    return (
        <Container>
        </Container>
    )
}
import { useEffect } from 'react'
import { Container } from './styles'
import { useAuth } from '../../hooks/useAuth'
export const Home = () => {
    const { user, token } = useAuth()

    useEffect(() => {
        
    }, [])
    return (
        <Container>
        </Container>
    )
}
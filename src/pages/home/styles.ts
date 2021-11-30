import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
`

export const Logo = styled.h1`
    text-align: center;
`

export const Content = styled.div`
    flex: 1;
    height: 100vh;

    .link-style {
        text-decoration: none;
        color: var(--black)
    }
`

export const PageButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 6px;
    background: var(--light-gray);
    border: 1px solid var(--yellow);
    margin: 50px;
    cursor: pointer;

    .react-icons {
        height: 80px;
        width: 80px;
        color: var(--black);
    }

    p { 
        font-size: 1.3em;
        font-weight: 600;
    }

    &:hover {
        opacity: 0.7;
        transition: 1s;
    }
`

export const Pages = styled.div`
    justify-content: center;
    display: grid;
    
    @media (min-width: 951px) {
        grid-template-columns: auto auto auto;
        
    }
    @media (max-width: 950px) {
        grid-template-rows: auto auto auto;
    }
`
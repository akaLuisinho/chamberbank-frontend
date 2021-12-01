import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;
`

export const Logo = styled.h1`
    text-align: center;
    margin-bottom: 100px;
`

export const Content = styled.div`
    flex: 1;
    height: 100vh;
    align-items: center;
    justify-content: center;
    align-self: center;  
`

export const Transaction = styled.div`
    display: grid;
    grid-template-columns: 100px 500px;
    justify-content: center;
    margin-top: 15px;
    
`

export const TransactionDate = styled.div`
    font-weight: bold;
`

export const TransactionValue = styled.div<{color: string}>`
    font-size: 1.3em;
    color: ${props => props.color};
`

export const TransactionData = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--yellow);

    span { 
        font-weight: bold;
        padding: 5px;
    }

    p { 
        font-size: 1em;
    }
`
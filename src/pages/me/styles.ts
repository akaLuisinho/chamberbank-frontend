import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;
`

export const Content = styled.div`
    flex: 1;
    height: 100vh;
`

export const DepositArea = styled.div`
    flex: 1;
    display: flex;
    margin-top: 8%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    background: var(--light-gray);
    font-size: 1em;
    width: 300px;
    height: 40px;
    outline: none;
    border: 1px solid var(--black);
    border-radius: 4px;
    padding: 8px;
    margin: 10px;
    //remove arrow from input type number
    -moz-appearance: textfield;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
`

export const Button = styled.button`
    font-size: 1em;
    width: 315px;
    min-height: 30px;
    padding: 15px;
    margin: 25px;
    cursor: pointer;
    border: 1px solid var(--black);
    border-radius: 2px;
    background-color: var(--yellow);

    &:hover {
        opacity: 0.8;
        transition: 100ms;
    }
`
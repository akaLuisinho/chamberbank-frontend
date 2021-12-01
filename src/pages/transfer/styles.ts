import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;
`

export const Input = styled.input`
    color: var(--black);
    background: var(--dark-gray);
    outline: none;
    border: 0;
    border-bottom: 1px solid var(--black);
    font-size: 1.2em;
    margin: 15px;

    //remove arrow from input type number
    -moz-appearance: textfield;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    };
`

export const Button = styled.button`
    font-size: 1em;
    width: 150px;
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

export const Content = styled.div`
    flex: 1;
    height: 100vh;
`

export const TransferInputs = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
`

export const TransferResponses = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    justify-content: center;
    align-items: center;
    margin-top: 30px; 
    font-size: 1.2em;

    p {
        margin-top: 30px;
        font-weight: bold;
    }
`


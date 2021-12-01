import styled from 'styled-components'

export const Container = styled.div`
    text-align: center;
`

export const Form = styled.form`
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input`
    padding: 5px;
    background: var(--light-gray);
    font-size: 1em;
    width: 300px;
    height: 40px;
    outline: none;
    border: 1px solid var(--black);
    border-radius: 4px;
    margin: 10px;
`

export const Button = styled.button`
    font-size: 1em;
    width: 300px;
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
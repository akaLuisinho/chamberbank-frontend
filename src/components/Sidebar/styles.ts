import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    height: 100vh;
    right: 0;
    width: 15vw;
    max-width: 250px;
    min-width: 100px;
    background: var(--yellow);

    .link-style {
        text-decoration: none;
        color: var(--black);
    }

    .react-icons {
        width: 30px;
        height: 20px;
    }

    p { 
        font-size: 1.3em;
        padding-left: 10px;
        &:hover {
            color: var(--dark-gray);
            opacity: 0.7;
            transition: 80ms;
        }
    }
`

export const UserName = styled.div`
    color: var(--black);
    padding: 5px;

    span { 
        font-size: 1.3em;
        font-weight: 700;
        padding: 10px;
    }

    hr {
        color: var(--dark-gray);
    }
`

export const LogoutButton = styled.button`
    position: absolute;
    width: 100%;
    bottom: 5px;
    font-size: 1.3em;
    padding-left: 10px;
    background: none;
    border: 0;
    text-align: left;
    cursor: pointer;

    &:hover {
        color: var(--dark-gray);
        opacity: 0.7;
        transition: 80ms;
    }
`
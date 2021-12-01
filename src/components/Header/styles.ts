import styled from 'styled-components'
import { MdOutlineKeyboardBackspace as ReturnIcon} from 'react-icons/md';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .react-icons {
        width: 100%;
        height: 100%;
    }
`

export const Button = styled.button`
    position: absolute;
    left: 10px;
    top: 10px;
    width: 35px;
    height: 35px;
    cursor: pointer;
    background: none;
    border: 0;
`


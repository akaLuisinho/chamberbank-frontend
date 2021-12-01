import { Container, Button } from './styles';
import { useHistory } from 'react-router-dom'
import { IconContext } from 'react-icons';
import { MdOutlineKeyboardBackspace as ReturnIcon } from 'react-icons/md';

export const Header = () => {
    
    const history = useHistory()

    return(
        <Container>
            <IconContext.Provider value={{className: 'react-icons'}}>
                <Button onClick={() => {history.goBack()}}><ReturnIcon /></Button>
                <h1>Chamberbank!</h1>
            </IconContext.Provider>
        </Container>
    )
}
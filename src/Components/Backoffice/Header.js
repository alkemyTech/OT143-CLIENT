import { Container } from 'react-bootstrap'
import logo from './../../images/somosMasOrg.png';
import { AiOutlineMenu } from 'react-icons/ai';
import './Header.scss';

const HeaderBackoffice = () => {
    return (
        <Container className='header-container' fluid>
            <img className="header-logo ms-2 me-auto" src={logo} />
            <AiOutlineMenu className="header-menu-icon me-4" />
        </Container>
    );
}

export default HeaderBackoffice;
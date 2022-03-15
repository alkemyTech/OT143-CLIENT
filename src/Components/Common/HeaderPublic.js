import React from 'react';
import { Container, Nav , Navbar } from 'react-bootstrap';
import imgLogo from './../../images/somosMasOrg.png'
const HeaderPublic = () => {
    return ( <>
    <Navbar bg="light">
        <Container>
            <Navbar.Brand >
                <img 
                    alt='NavIMB'
                    src={imgLogo}
                    width="50"
                    height="50"
                    className='d-inline-block aling top'/>
            </Navbar.Brand>{''}
            SomosMas
        </Container>


    </Navbar>
    
    
    </> );
}
 
export default HeaderPublic;
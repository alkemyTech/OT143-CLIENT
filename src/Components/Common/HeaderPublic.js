import React from 'react'; 
import { Container, Nav , Navbar, Button, NavDropdown} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import imgLogo from './../../images/somosMasOrg.png';
import {ABOUT,HOME,CONTACT,TOYS_CAMPAIGN,SCHOOL_CAMPAIGN} from './../../config/router/routes'
import {BsArrowRightCircle, BsFillPersonCheckFill} from 'react-icons/bs';


const HeaderPublic = () => {
    const nav =[
        {path: ABOUT,
        title: "Nosotros"},
        {path: HOME,
        title: ""},
        {path: CONTACT,
        title: "Contacto"},
        {path: TOYS_CAMPAIGN,
        title: "JUGETES"},
        {path: SCHOOL_CAMPAIGN,
        title: "COLEGIOS"},
    ]

    return (<>
    
    <Navbar collapseOnSelect bg="light"  expand="lg" sticky="top">
      <Container>
        <Link to={HOME}>
          <img
            alt='IMGNAV'
            src={imgLogo}
            width='60%'
            height='50%'
            className="d-inline-block align-top"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {nav.map((e, index) => {
              return (<>
              {e.title == "JUGETES" || e.title==="COLEGIOS" ? 
              null : <NavLink key={index} to={e.path} className="nav-link me-auto" activeStyle={{color:"tomato"}} >{e.title}</NavLink> }
              </>
              )
            })}
            {/* mejorar la logica recorriendo con un filter el array y que devuelva los dos elementos que necesito */}
            <NavDropdown title="Campañas"  >
                <NavDropdown.Item >
                    <NavLink activeStyle={{color:"tomato"}} to={nav[3].path}>
                    {nav[3].title}
                    </NavLink>
                    </NavDropdown.Item>
               <NavDropdown.Item> 
                   <NavLink  activeStyle={{color:"tomato"}} to={nav[4].path}>
                   {nav[4].title}
                   </NavLink>
                   </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
             <Nav.Link><NavLink className="text-decoration-none" to='/login'> <BsArrowRightCircle /> Login</NavLink></Nav.Link> 
             <Nav.Link><BsFillPersonCheckFill />UserByProps</Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    
    
    
    </>
    );
}
 
export default HeaderPublic;
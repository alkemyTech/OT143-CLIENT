import React from 'react';
import Carousel from '../Carousel/Carousel';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Miembros from '../Members/Members'; 

const Home = () => {
    return ( <>
    {/* Navbar 
    Crear un componnete aparte para nav y footer*/}
     <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand" href="#!">SomosMas</a>
                <a className="btn btn-primary" href="#signup">Sign Up</a>
            </div>
        </nav>
      
    <div className="container-fluid">
        <Carousel />
        <div className="row text-center my-3">
            <h2 className="display-4">Últimas novedades</h2>
        </div>
        <div className="row justify-content-center">
            <Card style={{ width: '18rem' }} className="m-3">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Link to={`/novedades/${1538}`}><Button variant="primary">Go somewhere</Button></Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="m-3">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="m-3">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="row justify-content-center text-center my-3">
            <div className="col-4">
                <Link to="/novedades"><Button variant="outline-primary d-inline-block">Ver todas</Button></Link>
            </div>
        </div>
        <div className="row">
            <Miembros />
        </div>
    </div>

    
    </>  );
}
 
export default Home;
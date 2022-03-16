import React from 'react';
import Carousel from '../Carousel/Carousel';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Miembros from '../Members/Members';
import Retrato from '../../images/members/Cecilia Mendez.jpeg'
import { NEWS_WEB } from '../../config/router/routes';

const Home = () => {
  return (<>

    <div className="container-fluid p-0">
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
            <Link to={`${NEWS_WEB}/1538`}><Button variant="primary">Go somewhere</Button></Link>
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
          <Link to={NEWS_WEB}><Button variant="outline-primary d-inline-block">Ver todas</Button></Link>
        </div>
      </div>
      <div className="row">
        <Miembros />
      </div>
      <div className="row text-center my-3">
        <h2 className="display-4">Testimonios</h2>
      </div>
      <div className="row justify-content-center">
        <Card style={{ width: '18rem' }} className="m-3">
          <Card.Img variant="top" src={Retrato} />
          <Card.Body>
            <Card.Title>Nombre Persona</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur blanditiis possimus molestias sunt dolorem recusandae maxime distinctio, voluptate totam provident ipsam, similique tenetur est? Rerum cum autem praesentium explicabo.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="m-3">
          <Card.Img variant="top" src={Retrato} />
          <Card.Body>
            <Card.Title>Nombre Persona</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur blanditiis possimus molestias sunt dolorem recusandae maxime distinctio, voluptate totam provident ipsam, similique tenetur est? Rerum cum autem praesentium explicabo.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="m-3">
          <Card.Img variant="top" src={Retrato} />
          <Card.Body>
            <Card.Title>Nombre Persona</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur blanditiis possimus molestias sunt dolorem recusandae maxime distinctio, voluptate totam provident ipsam, similique tenetur est? Rerum cum autem praesentium explicabo.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>


  </>);
}

export default Home;
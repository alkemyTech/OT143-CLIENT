import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFound from "../images/404.jpg";

const PageNotFound = () => {
 return (
  <Container className="mt-4">
   <Row className="justify-content-center">
    <img src={notFound} alt="Error 404 Página no encontrada" style={{ width: "300px" }}></img>
   </Row>
   <Row className="my-4">
    <h5 className="m-0 text-center fw-bold">Parece que la página no existe</h5>
   </Row>
   <Row className="my-4 text-center">
    <Link to="/"><Button>Ir a la página principal</Button></Link>
   </Row>
  </Container>
 )
}

export default PageNotFound;
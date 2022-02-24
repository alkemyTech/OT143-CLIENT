import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Card from "./Card";
import {
  BsNewspaper,
  BsListCheck,
  BsListTask,
  BsChatText,
  BsDiagram3,
  BsFileEarmarkSlides,
  BsFillPeopleFill,
  BsPeople,
} from "react-icons/bs";

const ScreenDashboard = () => {
  return (
    <Container className="py-4">
      <Row className="justify-content-center justify-content-md-between my-2">
        <Card title="Novedades">
          <BsNewspaper size={60} />
        </Card>
        <Card title="Actividades">
          <BsListCheck size={60} />
        </Card>
        <Card title="Categorias">
          <BsListTask size={60} />
        </Card>
        <Card title="Testimonios">
          <BsChatText size={60} />
        </Card>
      </Row>
      <Row className="justify-content-center justify-content-md-between my-2">
        <Card title="Organización">
          <BsDiagram3 size={60} />
        </Card>
        <Card title="Slides">
          <BsFileEarmarkSlides size={60} />
        </Card>
        <Card title="Usuarios">
          <BsFillPeopleFill size={60} />
        </Card>
        <Card title="Miembros">
          <BsPeople size={60} />
        </Card>
      </Row>
    </Container>
  );
};

export default ScreenDashboard;

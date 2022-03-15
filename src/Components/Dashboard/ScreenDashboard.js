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
import { ACTIVITIES, CATEGORIES, MEMBERS, NEWS, ORGANIZATION, SLIDES, TESTIMONIALS, USERS } from "../../config/router/routes";

const ScreenDashboard = () => {
  return (
    <Container className="py-4">
      <Row className="justify-content-center justify-content-md-between my-2">
        <Card title="Novedades" to={NEWS}>
          <BsNewspaper size={60} />
        </Card>
        <Card title="Actividades" to={ACTIVITIES}>
          <BsListCheck size={60} />
        </Card>
        <Card title="Categorias" to={CATEGORIES}>
          <BsListTask size={60} />
        </Card>
        <Card title="Testimonios" to={TESTIMONIALS}>
          <BsChatText size={60} />
        </Card>
      </Row>
      <Row className="justify-content-center justify-content-md-between my-2">
        <Card title="Organización" to={ORGANIZATION}>
          <BsDiagram3 size={60} />
        </Card>
        <Card title="Slides" to={SLIDES}>
          <BsFileEarmarkSlides size={60} />
        </Card>
        <Card title="Usuarios" to={USERS}>
          <BsFillPeopleFill size={60} />
        </Card>
        <Card title="Miembros" to={MEMBERS}>
          <BsPeople size={60} />
        </Card>
      </Row>
    </Container>
  );
};

export default ScreenDashboard;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
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
        <Col md={6} lg={3} className="d-flex justify-content-center">
          <Card title="Novedades" to={NEWS}>
            <BsNewspaper size={60} />
          </Card>
        </Col>
        <Col md={6} lg={3} className="d-flex justify-content-center">
          <Card title="Actividades" to={ACTIVITIES}>
            <BsListCheck size={60} />
          </Card>
        </Col>
        <Col md={6} lg={3} className="d-flex justify-content-center">
          <Card title="Categorias" to={CATEGORIES}>
            <BsListTask size={60} />
          </Card>
        </Col>
        <Col md={6} lg={3} className="d-flex justify-content-center">
          <Card title="Testimonios" to={TESTIMONIALS}>
            <BsChatText size={60} />
          </Card>
        </Col>
        <Col md={6} lg={3} className="d-flex justify-content-center">
          <Card title="Organización" to={ORGANIZATION}>
            <BsDiagram3 size={60} />
          </Card>
        </Col>
        <Col md={6} lg={3} className="d-flex justify-content-center">
          <Card title="Slides" to={SLIDES}>
            <BsFileEarmarkSlides size={60} />
          </Card>
        </Col>
        <Col md={6} lg={3} className="d-flex justify-content-center">
          <Card title="Usuarios" to={USERS}>
            <BsFillPeopleFill size={60} />
          </Card>
        </Col>
        <Col md={6} lg={3} className="d-flex justify-content-center">
          <Card title="Miembros" to={MEMBERS}>
            <BsPeople size={60} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ScreenDashboard;

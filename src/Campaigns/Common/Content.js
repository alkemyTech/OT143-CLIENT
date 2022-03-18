import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Content = ({ title, description, image1, image2, children }) => {
  return (
    <div className="m-3">
      <Row className="text-center mb-3">
        <h3 className="m-0">{title}</h3>
      </Row>
      <Row className="d-flex justify-content-center justify-content-xl-around align-items-center mb-3">
        <Col xl={2} className="d-none d-xl-flex p-4"><img src={image1} alt="Imagen 1" width="100%" style={{ transform: "rotate(10deg)" }} /></Col>
        <Col sm={10} md={8} xl={6}>
          {children}
        </Col>
        <Col xl={2} className="d-none d-xl-flex p-4"><img src={image2} alt="Imagen 2" width="100%" style={{ transform: "rotate(-10deg)" }} /></Col>
      </Row>
      <Row>
        <p align="justify">{description}</p>
      </Row>
      <Row className="d-none d-xl-flex justify-content-around mb-3">
        <Col xl={2} className="p-4"><img src={image1} alt="Imagen 1" width="100%" style={{ transform: "rotate(10deg)" }} /></Col>
        <Col xl={2} className="p-4"><img src={image2} alt="Imagen 2" width="100%" /></Col>
        <Col xl={2} className="p-4"><img src={image1} alt="Imagen 1" width="100%" style={{ transform: "rotate(-10deg)" }} /></Col>
      </Row>
    </div>
  );
};

export default Content;
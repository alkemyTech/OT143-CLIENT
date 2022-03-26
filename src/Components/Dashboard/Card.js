import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardDashboard = (props) => {
  const { title, to, children } = props;
  return (
    <Col
      xs={12}
      sm={6}
      md={6}
      lg={3}
      className="text-center mb-2"
      style={{ width: "12rem" }}
    >
      <Card>
        <Card.Body className="p-2">
          <Card.Title style={{ fontSize: "1em" }}>{title}</Card.Title>
          <Row className="my-2 pt-2">
            <Col>{children}</Col>
          </Row>
        </Card.Body>
        <Row className="mb-2 pb-2">
          <Col xs={4}>
            <Link to={to}><Button variant="success" size="sm">
              Ir
            </Button></Link>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default CardDashboard;

import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const CardDashboard = (props) => {
  const { title, children } = props;
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
        <Card.Link className="mb-2">
          <Button variant="success" size="sm">
            Ir
          </Button>
        </Card.Link>
      </Card>
    </Col>
  );
};

export default CardDashboard;

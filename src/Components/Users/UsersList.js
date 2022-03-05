import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UsersTable from "./UsersTable";

const UsersList = () => {
  const usersMock = [
    { id: 1, name: "Usuario 1", email: "usuario1@gmail.com" },
    { id: 2, name: "Usuario 2", email: "usuario2@hotmail.com" },
    { id: 3, name: "Usuario 3", email: "usuario3@gmail.com" },
    { id: 4, name: "Usuario 4", email: "usuario4@live.com" },
  ];

  return (
    <Container className="mt-3">
      <Row className="mb-2">
        <Col>
          <h2>Usuarios</h2>
        </Col>
        <Col className="text-end">
          <Link to="/backoffice/users/create">
            <Button>Crear</Button>
          </Link>
        </Col>
      </Row>
      <hr />
      <UsersTable users={usersMock} />
    </Container>
  );
};

export default UsersList;

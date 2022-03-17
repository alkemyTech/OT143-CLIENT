import React from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { update, remove } from "../../Services/usersService";

const UsersTable = (props) => {
  const { users } = props;
  return (
    <Table className="text-center">
      <thead>
        <tr>
          <th style={{ width: "30%" }}>Nombre</th>
          <th style={{ width: "30%" }}>Email</th>
          <th style={{ width: "40%" }}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users ? users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Row className="justify-content-center row-cols-1 row-cols-sm-2">
                <Col className="mb-2 mb-sm-0">
                  <Button
                    onClick={() => update(user.id, {
                      name: user.name,
                      email: user.email,
                    })}
                  >
                    <BsPencilSquare />
                  </Button>
                </Col>
                <Col>
                  <Button variant="danger" onClick={() => remove(user.id)}>
                    <BsTrash />
                  </Button>
                </Col>
              </Row>
            </td>
          </tr>
        ))
          :
          <tr className="text-center">
            <td colSpan={3}>No hay usuarios</td>
          </tr>
        }
      </tbody>
    </Table>
  );
};

export default UsersTable;

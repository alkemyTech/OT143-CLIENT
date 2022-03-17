import React, { useEffect } from "react";
import { USER_CREATE } from "../../config/router/routes";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import UsersTable from "./UsersTable";
import { getUsers } from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Common/Loading";

const UsersList = () => {

  const { list: users, status } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Container className="mt-3">
      <Row className="mb-2">
        <Col>
          <h2>Usuarios</h2>
        </Col>
        <Col className="text-end">
          <Link to={USER_CREATE}>
            <Button>Crear</Button>
          </Link>
        </Col>
      </Row>
      <hr />
      {
        status === "success" ?
          <UsersTable users={users} />
          :
          <div className="d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
            <Loading />
          </div>
      }

    </Container>
  );
};

export default UsersList;

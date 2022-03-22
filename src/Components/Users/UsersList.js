import React, { useEffect, useState } from "react";
import { USER_CREATE } from "../../config/router/routes";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import UsersTable from "./UsersTable";
import { getUsers } from "../../features/users/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Common/Loading";
import Pagination from "../Common/Pagination";

const UsersList = () => {

  const { list: users, status } = useSelector(state => state.users);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  const filteredUsers = () => {
    return users.slice(
      currentPage,
      currentPage + 10
    );
  };

  const handlePrevPage = () => {
    if (currentPage > 0)
      setCurrentPage(currentPage - 10);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 10);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Container className="my-3">
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
          <div>
            <UsersTable users={filteredUsers()} />
            <Pagination
              onPrev={handlePrevPage}
              onNext={handleNextPage}
              disabledButtonPrev={currentPage === 0}
              disabledButtonNext={filteredUsers().length < 10}
            />
          </div>
          :
          <div className="d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
            <Loading />
          </div>
      }

    </Container>
  );
};

export default UsersList;

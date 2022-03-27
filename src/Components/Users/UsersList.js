import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { USER_CREATE } from '../../config/router/routes';
import { getUsers } from '../../features/users/usersSlice';
import { update, remove } from "../../Services/usersService";
import { BsPencilSquare, BsTrash, BsPlusCircle } from "react-icons/bs";
import { Button, Table } from "react-bootstrap";
import Loading from '../Common/Loading';
import Pagination from '../Common/Pagination';
import { warningMsg } from '../Alerts/Alert';
import moment from 'moment';
import EditModal from './../Backoffice/EditModal';
import UsersForm from './UsersForm';

const UsersList = () => {
  const { list: users, status } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const [edit, setEdit] = useState({});

  const handleEdit = () => {
    setShowEdit((prev) => !prev);
  };


  const [currentPage, setCurrentPage] = useState(0);

  const filteredUsers = () => {
    return users.slice(
      currentPage,
      currentPage + 10
    );
  }

  const handlePrevPage = () => {
    if (currentPage > 0)
      setCurrentPage(currentPage - 10);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 10);
  };

  useEffect(() => {
    try {
      dispatch(getUsers());
    }
    catch (error) {
      warningMsg("Error. No se pudo cargar los datos");
    }
  }, [dispatch]);


  const middleStyles = { verticalAlign: "middle" };

  return (
    <>
    <EditModal show={showEdit} close={handleEdit}  >
      <UsersForm />
    </EditModal>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <h2 className='text-center'>Usuarios</h2>
            <div className="col text-end mb-2">
              <Link to={USER_CREATE}><Button className='btn-success'>
                <BsPlusCircle /> Crear</Button></Link>
            </div>
            {status === "success" ?
              <div>
                <Table responsive>
                  <thead>
                    <tr>
                      <th style={{ width: "10%" }}>Nombre</th>
                      <th style={{ width: "30%" }}>Email</th>
                      <th style={{ width: "20%" }}>Fecha de creación</th>
                      <th style={{ width: "10%" }} className="text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers().map((user) => (
                      <tr key={user.id}>
                        <td style={middleStyles}>{user.name}</td>
                        <td style={middleStyles}>{user.email}</td>
                        <td style={middleStyles}>{moment(user.created_at).format("MMM Do YY")}</td>
                        <td style={middleStyles}>
                          <div className="row text-center">
                            <div className="mb-1 mb-md-0 col-12 col-md-6">
                              <Button variant='dark' onClick={
                                () =>{
                                  setEdit(user);
                                  handleEdit();
                                }
                              }>
                                <BsPencilSquare />
                              </Button>
                            </div>
                            <div className="col-12 col-md-6">
                              <Button variant='danger' onClick={() => remove(user.id)}>
                                <BsTrash />
                              </Button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <div className="my-3">
                  <Pagination
                    onPrev={handlePrevPage}
                    onNext={handleNextPage}
                    disabledButtonPrev={currentPage === 0}
                    disabledButtonNext={filteredUsers().length < 10}
                  />
                </div>
              </div>
              :
              <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}><Loading /></div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersList;

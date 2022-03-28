import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MEMBER_CREATE } from '../../config/router/routes';
import { getMembers } from '../../features/members/membersSlice';
import { BsPlusCircle, BsPencilSquare, BsTrash } from 'react-icons/bs';
import { Button, Table } from 'react-bootstrap';
import Loading from '../Common/Loading';
import Pagination from '../Common/Pagination';
import { confirmMsg, warningMsg } from '../Alerts/Alert';
import EditModal from './../Backoffice/EditModal'
import MembersEdit from './MembersEdit';
import {remove}from './../../Services/membersService'

const MembersBackofficeList = () => {
  /* const [loading, setLoading] = useState(true); */
  const { list: members } = useSelector(state => state.members);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  const [showEdit, setShowEdit] = useState(false);
  const [edit, setEdit] = useState({});

  const handleEdit = () => {
    setShowEdit((prev) => !prev);
  };


  const filteredMembers = () => {
    return members.slice(
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
      dispatch(getMembers());
    }
    catch (error) {
      warningMsg("Error. No se pudo cargar los datos");
    }
    /* setLoading(false); */

  }, [dispatch]);


  const eliminarClick = (id) => {
    try {
      confirmMsg("Desaparece el miembro permanentemente")
      if(confirmMsg) {
        remove(id)
      }else{
        alert("Error(500)-intente nuvamente");
      }

    } catch (error) {
      console.log(error);
    }
  };

  const middleStyles = { verticalAlign: "middle" };

  return (
    <>

      <EditModal show={showEdit} close={handleEdit} >
        <MembersEdit member={edit} close={handleEdit} />
      </EditModal>

      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <h2 className='text-center'>Miembros</h2>
            <div className="col text-end mb-2">
              <Link to={MEMBER_CREATE}><Button style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}><BsPlusCircle /> Crear</Button></Link>
            </div>
            {members.length === 0 ? <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}><Loading /></div>
              :
              <div>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Foto</th>
                      <th className="text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMembers().map(member => (
                      <tr key={member.id}>
                        <td style={middleStyles}>{member.name}</td>
                        <td style={middleStyles}>
                          <img src={member.image} style={{ height: "80px" }} alt='imagen de miembro' />
                        </td>
                        <td style={middleStyles}>
                          <div className="row text-center">
                            <div className="mb-1 mb-md-0 col-12 col-md-6">
                              <Button onClick={() => {
                                setEdit(member);
                                handleEdit();
                              }} style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}>
                                <BsPencilSquare />
                              </Button>
                            </div>
                            <div className="col-12 col-md-6">
                              <Button variant='danger' onClick={() => eliminarClick(member.id)}>
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
                    disabledButtonNext={filteredMembers().length < 10}
                  />
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default MembersBackofficeList;
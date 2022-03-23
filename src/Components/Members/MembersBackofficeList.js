import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsPlusCircle, BsPencilSquare, BsTrash } from 'react-icons/bs';
import { MEMBER_CREATE } from '../../config/router/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getMembers } from '../../features/members/membersSlice';
import Loading from '../Common/Loading';

const MembersBackofficeList = () => {
  const [ loading, setLoading ] = useState(true);
  const { list: members } = useSelector(state=>state.members);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembers());
    setLoading(false);

  }, [dispatch]);

  const editarClick = () => {
    alert("Click Editar");
  };

  const eliminarClick = () => {
    alert("Click Eliminar");
  };

  loading && <Loading/>

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col">
          <h2 className='text-center'>Miembros</h2>
          <div className="col text-end mb-2">
            <Link to={MEMBER_CREATE}><Button className='btn-success'><BsPlusCircle /> Crear</Button></Link>
          </div>
          <Table className=' table-bordered table-hover'>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Foto</th>
                <th><h5 className='text-center'>⚙</h5></th>
              </tr>
            </thead>
            {members.data?.slice(-7).map(member => (
            <tbody key={member.id}>
              <tr>
                <td>{member.name}</td>
                <td>
                  <img src={member.image} height="80px!important" />
                </td>
                <td >
                  <div className="col mb-2 mb-sm-0 text-center">
                    <Button variant='dark' onClick={() => editarClick()}>
                      <BsPencilSquare />
                    </Button>
                  </div>
                  <div className="col mt-2 mb-sm-0 text-center ">
                      <Button variant='danger' onClick={() => eliminarClick()}>
                        <BsTrash />
                      </Button>
                  </div>
                </td>
              </tr>
            </tbody> 
            ))}
          </Table>
        </div>
      </div>
    </div>
  );          
}

export default MembersBackofficeList;
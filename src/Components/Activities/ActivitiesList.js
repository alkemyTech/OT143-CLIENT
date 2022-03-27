import { useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIVITY_CREATE } from '../../config/router/routes';
import { getActivities } from '../../features/Activities/activitiesSlice';
import { BsPlusCircle, BsPencilSquare, BsTrash } from 'react-icons/bs';
import { Table, Button } from 'react-bootstrap';
import Loading from '../Common/Loading';
import Pagination from '../Common/Pagination';
import { warningMsg } from '../Alerts/Alert';
import moment from 'moment';

const ActivitiesList = () => {

  const { list: activities } = useSelector(state => state.activities);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  const filteredActivities = () => {
    return activities.slice(
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
      dispatch(getActivities());
    } catch (error) {
      warningMsg("Vuelva a intentar - (500)");
    }
  }, [dispatch]);

  const middleStyles = { verticalAlign: "middle" };

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <h2 className='text-center'>Actividades</h2>
            <div className="col text-end mb-2">
              <Link to={ACTIVITY_CREATE}><Button className='btn-success'>
                <BsPlusCircle /> Crear</Button></Link>
            </div>
            {activities.length === 0 ? <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}><Loading /></div>
              :
              <div>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Fecha de creación</th>
                      <th className="text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredActivities().map(act => (
                      <tr key={act.id}>
                        <td style={middleStyles}>{act.name}</td>
                        <td style={middleStyles}>{moment(act.created_at).format("MMM Do YY")}</td>
                        <td style={middleStyles}>
                          <div className="row text-center">
                            <div className="mb-1 mb-md-0 col-12 col-md-6">
                              <Button variant='dark' onClick={() => console.log("Editar")}>
                                <BsPencilSquare />
                              </Button>
                            </div>
                            <div className="col-12 col-md-6">
                              <Button variant='danger' onClick={() => console.log("Eliminar")}>
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
                    disabledButtonNext={filteredActivities().length < 10}
                  />
                </div>

              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesList;








































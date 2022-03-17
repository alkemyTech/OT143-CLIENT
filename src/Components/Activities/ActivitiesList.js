import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import Loading from '../Common/Loading';
import { successMsg, warningMsg } from '../Alerts/Alert';
import { ACTIVITY_CREATE } from '../../config/router/routes';
import { getActivities } from '../../features/Activities/activitiesSlice';
import { useDispatch,useSelector } from 'react-redux';

const ActivitiesList = () => {
  const {list: activities} = useSelector(state=>state.activities);
  const dispatch =useDispatch();

  useEffect(() => {
   const result =  dispatch(getActivities())
    console.log(result)
    
  }, [dispatch]);

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="card">
            <h1 className="d-flex justify-content-center mt-3">Actividades</h1>
            <Link to={ACTIVITY_CREATE}>
              <button className="btn btn-sm text-white bg-primary col-1 offset-11">
                Crear
              </button>
            </Link>

            {activities !== '' ? (
              <table className="table mb-4">
                {console.log(activities)}
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {actividades.data.map(act => {
                    return (
                      <Fragment key={act.id}>
                        <tr>
                          <th scope="row" className="col-3">
                            {act.name}
                          </th>
                          <td className="col-4">
                            <img
                              src={act.image}
                              style={{ maxWidth: '50%' }}
                              alt="Imagen de actividades"
                              className=""
                            />
                          </td>
                          <td className="col-3">{act.created_at}</td>
                          <td className="col-2">
                            <button className="btn btn-sm bg-secondary m-3 text-white pb-2">
                              <FaPencilAlt />
                            </button>
                            <button className="btn btn-sm bg-danger m-3 text-white pb-2">
                              <FaTrashAlt />
                            </button>
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })} */}
                </tbody>
              </table>
            ) : (
              <div className="d-flex justify-content-center mt-5 mb-5">
                <div className="d-flex justify-content-center " role="status">
                  <Loading />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivitiesList;

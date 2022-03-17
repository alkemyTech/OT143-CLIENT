import React, { useEffect, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import Loading from '../Common/Loading';
import {  warningMsg } from '../Alerts/Alert';
import { ACTIVITY_CREATE } from '../../config/router/routes';
import { getActivities } from '../../features/Activities/activitiesSlice';
import { useDispatch,useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import {getAllData} from './../../Services/activitiesService';


const ActivitiesList = () => {
  const [isFetching,setIsFetching] = useState(true);
  const {list: activities} = useSelector(state=>state.activities);
  const dispatch =useDispatch();

  useEffect(() => {
    console.log(getAllData().then((res)=>res));
      const cargaData = ( ) =>{
     
        setTimeout(()=>{
          dispatch(getActivities())
          setIsFetching(false)
        },2000)
      
      }

    try {
      cargaData()
    } catch (error) {
      warningMsg("Vuelva a intentar")
    }
      
  }, [dispatch]);

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
            <h1 className="d-flex justify-content-center mt-3">Actividades</h1>
            <Link to={ACTIVITY_CREATE}>
              <button className="btn btn-sm text-white bg-primary col-1 offset-11">
                Crear
              </button>
            </Link>
          
                <div className="row justify-content-center mx-2">
                { isFetching && <Loading />}
                </div>
                <Table className=' table-bordered table-hover mx-2 my-2'>
                
                <thead>
                  <tr>
                   
                    <th scope="col">Name </th>
                    <th scope="col">Image</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                
                <tbody>   
                  
                 {activities.data?.map(act => {
                    return (
                        <>

                        <tr key={act.id}>
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
                              </>
                          );
                        })} 
                        </tbody>
                  </Table>
                  </div>
                  </div>
                  </div>
          </>
  );
};

export default ActivitiesList;

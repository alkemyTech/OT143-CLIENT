import React from 'react';
import {Button, Table} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import {BsPlusCircle, BsPencilSquare, BsTrash } from 'react-icons/bs';
import imagenCM from "./../../images/members/Cecilia Mendez.jpeg";
import imagenMF from './../../images/members/Marco Fernandez.jpg' ;
import imagenMG from './../../images/members/Marita Gomez.jpeg' ;

const MembersBackofficeList = () => {
    const miembros =[
        {id:"1", nombre:"Cecilia Mendez" , imagen:imagenCM},
        {id:"2", nombre:"Marco Fernandez", imagen:imagenMF},
        {id:"3", nombre:"Maria Garcia", imagen:imagenMG}
    ];

    const  editarClick = ()=>{
        alert("Click Editar")
    }
    const eliminarClick = ()=>{
        alert("Click Eliminar")
    }
    return ( <>
    <div className="container mt-2">
        <div className="row">
            <div className="col">
                <h2 className='text-center'>Miembros</h2>
                <div className="col text-end mb-2">
                    <Button className='btn-success'>
                   <BsPlusCircle  />  <Link to="/backoffice/members/create" > Crear  </Link>
                    </Button>
                </div>
                <Table className=' table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Foto</th>
                            <th><h5 className='text-center'>⚙</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                    {miembros?.map((miembro)=>(
                        <tr key={miembro.id}>
                         
                        <td>{miembro.nombre}</td>
                        <td>
                            <img src={miembro.imagen}  height="80px!important" />
                        </td>
                        <td >
                            <div className="col mb-2 mb-sm-0 text-center">
                            <Button variant='dark' onClick={()=>editarClick()}>
                            <BsPencilSquare /> 
                            </Button>
                            </div>
                            <div className="col mt-2 mb-sm-0 text-center ">
                            <Button variant='danger' onClick={()=>eliminarClick()}>
                            <BsTrash />
                            </Button>
                            </div>
                        </td>                     
                    </tr>
                    ))}                       
                    </tbody>
                </Table>


            </div>
        </div>
    </div>
    
    </> );
}
 
export default MembersBackofficeList;
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsPlusCircle, BsPencilSquare, BsTrash } from 'react-icons/bs';
import moment from 'moment';
import { CATEGORY_CREATE } from '../../config/router/routes';

const CategoriesListBackoffice = () => {
  const listCategorias = [
    { id: "1", name: "Categoria1", createdAt: moment() },
    { id: "2", name: "Categoria2", createdAt: moment() },
    { id: "3", name: "Categoria3", createdAt: moment() },
  ]

  return (<>
    <div className="container mt-2">
      <div className="row">
        <div className="col">
          <h2 className='text-center bg-ligth'>Listado Categorias</h2>
          <div className="col text-end mb-2">
            <Link to={CATEGORY_CREATE}><Button className='btn-success'>
              <BsPlusCircle /> Agregar Categoria</Button></Link>
          </div>
          <Table>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Fecha de creacion</th>
                <th>⚙</th>
              </tr>
            </thead>
            <tbody>
              {listCategorias?.map((categoria) => (
                <tr key={categoria.id}>
                  <td>{categoria.name}</td>
                  <td>{categoria.createdAt.format("MMM Do YY")}</td>
                  <td>
                    <div className="col mb-2 mb-sm-0 text-center">
                      <Button variant='dark' onClick={() => console.log("Editar")}>
                        <BsPencilSquare />
                      </Button>
                    </div>
                    <div className="col mt-2 mb-sm-0 text-center ">
                      <Button variant='danger' onClick={() => console.log("Eliminar")}>
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


  </>);
}

export default CategoriesListBackoffice;
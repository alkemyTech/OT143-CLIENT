import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORY_CREATE } from '../../config/router/routes';
import { getAll } from "../../Services/serviceCategories";
import { BsPlusCircle, BsPencilSquare, BsTrash } from 'react-icons/bs';
import { Button, Table } from 'react-bootstrap';
import Loading from '../Common/Loading';
import Pagination from '../Common/Pagination';
import { warningMsg } from '../Alerts/Alert';
import moment from 'moment';
import EditModal from './../Backoffice/EditModal';
import CategoriesForm from './CategoriesForm';

const CategoriesListBackoffice = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
  const [edit, setEdit] = useState({});

  const handleEdit = () => {
    setShowEdit((prev) => !prev);
  };


  const filteredCategories = () => {
    return categories.slice(
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
    getAll().then(response => setCategories(prevCategories => prevCategories = response.data.data))
      .catch(error => warningMsg("Error. No se pudo cargar los datos."));
  }, []);

  const middleStyles = { verticalAlign: "middle" };

  return (<>
    <EditModal show={showEdit} close={handleEdit}>
      <CategoriesForm categories={edit} />
    </EditModal>
    <div className="container mt-2">
      <div className="row">
        <div className="col">
          <h2 className='text-center'>Categorías</h2>
          <div className="col text-end mb-2">
            <Link to={CATEGORY_CREATE}><Button style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}>
              <BsPlusCircle /> Crear</Button></Link>
          </div>
          {
            categories.length === 0 ? <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}><Loading /> </div>
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
                    {filteredCategories().map((category) => (
                      <tr key={category.id}>
                        <td style={middleStyles}>{category.name}</td>
                        <td style={middleStyles}>{moment(category.created_at).format("MMM Do YY")}</td>
                        <td style={middleStyles}>
                          <div className="row text-center">
                            <div className="mb-1 mb-md-0 col-12 col-md-6">
                              <Button onClick={() => {
                                setEdit(category);
                                handleEdit();
                              }} style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}>
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
                    disabledButtonNext={filteredCategories().length < 10}
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

export default CategoriesListBackoffice;
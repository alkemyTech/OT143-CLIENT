import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONY_CREATE } from '../../config/router/routes';
import testimonialsService from '../../Services/testimonialsService';
import { BsPlusCircle, BsPencilSquare, BsTrash } from 'react-icons/bs';
import { Button, Table } from 'react-bootstrap';
import Loading from '../Common/Loading';
import Pagination from '../Common/Pagination';
import { warningMsg } from '../Alerts/Alert';
import moment from 'moment';

const TestimonialsListBackoffice = () => {

  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredTestimonials = () => {
    return testimonials.slice(
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
    testimonialsService.get().then(response => {
      setTestimonials(prevTestimonials => prevTestimonials = response.data);
    }).catch(error => warningMsg("Error. No se pudo cargar los datos."));
  }, []);

  const middleStyles = { verticalAlign: "middle" };

  return (<>
    <div className="container mt-2">
      <div className="row">
        <div className="col">
          <h2 className='text-center'>Testimonios</h2>
          <div className="col text-end mb-2">
            <Link to={TESTIMONY_CREATE}><Button className='btn-success'>
              <BsPlusCircle /> Crear</Button></Link>
          </div>
          {testimonials.length === 0 ? <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
            <Loading />
          </div>
            :
            <div>
              <Table responsive>
                <thead>
                  <tr>
                    <th style={{ width: "15%" }} >Nombre</th>
                    <th>Imagen</th>
                    <th style={{ width: "35%" }}>Descripción</th>
                    <th style={{ width: "20%" }}>Fecha de creación</th>
                    <th style={{ width: "30%" }} className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTestimonials().map((testimony) => (
                    <tr key={testimony.id}>
                      <td style={middleStyles}>{testimony.name}</td>
                      <td style={middleStyles}><img src={testimony.image} style={{ height: "80px" }} alt='imagen del testimonio' /></td>
                      <td style={middleStyles}>{testimony.description}</td>
                      <td style={middleStyles}>{moment(testimony.created_at).format("MMM Do YY")}</td>
                      <td style={middleStyles}>
                        <div className="row text-center align-items-center">
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
                <Pagination onPrev={handlePrevPage}
                  onNext={handleNextPage}
                  disabledButtonPrev={currentPage === 0}
                  disabledButtonNext={filteredTestimonials().length < 10}
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

export default TestimonialsListBackoffice;
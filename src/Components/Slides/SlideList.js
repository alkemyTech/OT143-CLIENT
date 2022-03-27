import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { SLIDE_CREATE } from "../../config/router/routes";
import { getSlides } from '../../features/Slides/slidesSlice';
import { update, remove } from "../../Services/slideService";
import { BsPlusCircle, BsPencilSquare, BsTrash } from 'react-icons/bs';
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Loading from "../Common/Loading";
import Pagination from "../Common/Pagination";
import { warningMsg } from "../Alerts/Alert";
import EditModal from './../Backoffice/EditModal';
import SlidesForm from './SlidesForm';

const SlideList = () => {
  const { list: slides } = useSelector(state => state.slides);
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const [edit, setEdit] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const handleEdit = () => {
    setShowEdit((prev) => !prev);
  };



  const filteredSlides = () => {
    return slides.slice(
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
      dispatch(getSlides());
    }
    catch (error) {
      warningMsg("Error. No se pudo cargar los datos");
    }
  }, [dispatch]);

  const middleStyles = { verticalAlign: "middle" };

  return (
    <>
      <EditModal show={showEdit} close={handleEdit}>
        <SlidesForm />
      </EditModal>
      <Container className="mt-2">
        <Row>
          <h2 className='text-center'>Slides</h2>
          <Col className="text-end mb-2">
            <Link to={SLIDE_CREATE}> <Button style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}>
              <BsPlusCircle /> Crear</Button>
            </Link>
          </Col>
          {slides.length === 0 ? <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}><Loading /></div> :
            <div>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Orden</th>
                    <th>Imagen</th>
                    <th>Título</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSlides().map((slide) => (
                    <tr key={slide.id}>
                      <td style={middleStyles}>{slide.order}</td>
                      <td style={middleStyles}><img src={slide.image} style={{ height: "80px" }} alt="imagen de slide" /></td>
                      <td style={middleStyles}>{slide.name}</td>
                      <td style={middleStyles}>
                        <div className="row text-center">
                          <div className="mb-1 mb-md-0 col-12 col-md-6">
                            <Button onClick={handleEdit} style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}>
                              <BsPencilSquare />
                            </Button>
                          </div>
                          <div className="col-12 col-md-6">
                            <Button variant='danger' onClick={() => remove(slide.id)}>
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
                  disabledButtonNext={filteredSlides().length < 10}
                />
              </div>
            </div>
          }
        </Row>
      </Container>
    </>

  )
}

export default SlideList;
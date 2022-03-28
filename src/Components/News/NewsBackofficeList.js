import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NEWS_CREATE } from "../../config/router/routes";
import { getNews } from "./../../features/news/newsSlice";
import { BsPlusCircle, BsPencilSquare, BsTrash } from "react-icons/bs";
import { Container, Button, Table, Row, Col } from "react-bootstrap";
import Loading from "../Common/Loading";
import Pagination from '../Common/Pagination';
import { confirmMsg, warningMsg } from '../Alerts/Alert';
import moment from "moment";
import EditModal from './../Backoffice/EditModal';
import NewsForm from './NewsForm';
import {remove}from './../../Services/news'

const NewsBackofficeList = () => {
  const { list: news, status } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const [showEdit, setShowEdit] = useState(false);
  const [edit, setEdit] = useState({});
  const routerHistory = useHistory()

  const handleEdit = () => {
    setShowEdit((prev) => !prev);
  };


  const [isFetching, setIsFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredNews = () => {
    return news.slice(
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
    setIsFetching(true);
    dispatch(getNews());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'success') {
      setIsFetching(false);
    } else if (status === 'failed') {
      warningMsg('Error al cargar novedades');
      setIsFetching(false);
    }
  }, [status]);

  const eliminarClick = (id) => {
    try {
      confirmMsg("Desaparece el miembro permanentemente")
      if(confirmMsg) {
        const result  = remove(id);
        routerHistory.push('/backoffice/news')
        
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
      <EditModal show={showEdit} close={handleEdit}>
        <NewsForm news={edit} close={handleEdit} />
      </EditModal>
      <Container className="mt-2">
        <Row>
          <Col>
            <h2 className="text-center">Novedades</h2>
            <div className="col text-end mb-2">
              <Link to={NEWS_CREATE}>
                <Button style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}>
                  <BsPlusCircle /> Crear
                </Button>
              </Link>
            </div>
            {isFetching ? <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}><Loading /></div>
              :
              <div>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Imagen</th>
                      <th>Fecha de creación</th>
                      <th className="text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredNews().map(news => (
                      <tr key={news.id}>
                        <td style={middleStyles}>{news.name}</td>
                        <td style={middleStyles}><img src={news.image} style={{ height: "80px" }} alt='imagen de novedad' /></td>
                        <td style={middleStyles}>{moment(news.created_at).format("MMM Do YY")}</td>
                        <td style={middleStyles}>
                          <div className="row text-center">
                            <div className="mb-1 mb-md-0 col-12 col-md-6">
                              <Button onClick={() => {
                                setEdit(news);
                                handleEdit()
                              }} style={{ backgroundColor: "#9AC9FB", borderColor: "#9AC9FB" }}>
                                <BsPencilSquare />
                              </Button>
                            </div>

                            <div className="mb-1 mb-md-0 col-12 col-md-6">
                              <Button variant='danger' onClick={() => eliminarClick(news.id)}>
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
                    disabledButtonNext={filteredNews().length < 10}
                  />
                </div>
              </div>
            }
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NewsBackofficeList;
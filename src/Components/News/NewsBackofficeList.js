import { Container, Button, Table, Row, Col } from "react-bootstrap";
import { BsPlusCircle, BsPencilSquare, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { NEWS_CREATE } from "../../config/router/routes";
import Loading from "../Common/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "./../../features/news/newsSlice";
import { useEffect, useState } from "react";
import { warningMsg } from '../Alerts/Alert';

const NewsBackofficeList = () => {
  const { list: news } = useSelector((state) => state.news);
  const { status: status } = useSelector((state) => state.news);
  const [isFetching, setIsFetching] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'success') {
      setIsFetching(false);
    } else if (status === 'failed'){
      warningMsg('Error al cargar novedades');
      setIsFetching(false);
    }
  }, [status]);

  return (
    <Container className="mt-2">
      <Row>
        <Col>
          <h2 className="text-center">Novedades</h2>
          <div className="col text-end mb-2">
            <Link to={NEWS_CREATE}>
              <Button className="btn-success">
                <BsPlusCircle /> Crear
              </Button>
            </Link>
          </div>
          <Table bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Fecha de creación</th>
                <th>
                  <h5 className="text-center">⚙</h5>
                </th>
              </tr>
            </thead>
            {isFetching ? (
              <Loading />
            ) : (
              <tbody>
                {news.map((news) => (
                  <tr key={news.id}>
                    <td>{news.name}</td>
                    <td>
                      <img src={news.image} style={{ height: "80px" }} />
                    </td>
                    <td>{news.created_at}</td>
                    <td>
                      <Col className="text-center">
                        <Button className="mb-2" variant="dark">
                          <BsPencilSquare />
                        </Button>
                      </Col>
                      <Col className="text-center">
                        <Button variant="danger">
                          <BsTrash />
                        </Button>
                      </Col>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsBackofficeList;

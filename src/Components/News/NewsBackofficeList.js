import { Container, Button, Table, Row, Col } from "react-bootstrap";
import { BsPlusCircle, BsPencilSquare, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import image from "../../images/members/Cecilia Mendez.jpeg";

const NewsBackofficeList = () => {
  const newsMock = [
    {
      id: 2,
      name: "Titulo de prueba 1",
      image: image,
      createdAt: "Fecha",
    },
    {
      id: 1,
      name: "Titulo de prueba 2",
      image: image,
      createdAt: "Fecha",
    },
    {
      id: 3,
      name: "Titulo de prueba 3",
      image: image,
      createdAt: "Fecha",
    },
  ];

  return (
    <Container className="mt-2">
      <Row>
        <Col>
          <h2 className="text-center">Novedades</h2>
          <div className="col text-end mb-2">
            <Button className="btn-success">
              <BsPlusCircle />{" "}
              <Link
                className="text-decoration-none text-white px-2"
                to="/backoffice/news/create"
              >
                Crear
              </Link>
            </Button>
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
            <tbody>
              {newsMock.map((news) => (
                <tr key={news.id}>
                  <td>{news.name}</td>
                  <td>
                    <img src={news.image} style={{ height: "80px" }} />
                  </td>
                  <td>{news.createdAt}</td>
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
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsBackofficeList;

import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { Link } from "react-router-dom";

const SlideList = ()=>{
    const listOfMockSlides = [
        {id: 1, image: "imagen1", title: "Diapositiva 1", order: "Slide n°1"},
        {id: 2, image: "imagen2", title: "Diapositivs 2", order: "Slide n°2"},
        {id: 3, image: "imagen3", title: "Diapositiva 3", order: "Slide n°3"}
    ];

    return(
        <Container className="pt-5">
            <Row>
                <Col sm={6}>
                    <h4>Slides</h4>
                </Col>
                <Col sm={6} className="text-center">
                    <Link to="/backoffice/slides/create" className="btn btn-primary">Crear</Link>
                </Col>
                <Col>
                    <Table>
                        <thead>
                            <tr>
                                <th>Orden</th>
                                <th>Imagen</th>
                                <th>Titulo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOfMockSlides?.map((slide) =>( 
                                <tr key={slide.id}>
                                    <td>{slide.order}</td>
                                    <td><img src={slide.image} alt="slide"/></td>
                                    <td>{slide.title}</td>
                                    <td>
                                        <Button variant="primary" className="m-1"
                                        onClick={() => console.log("Editar")}>
                                            <BsPencilSquare /> 
                                        </Button>
                                        <Button variant="danger" className="m-1"
                                        onClick={() => console.log("Eliminar")}>
                                            <BsTrash />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default SlideList;
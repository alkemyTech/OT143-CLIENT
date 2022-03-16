import { useEffect } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { BsPencilSquare, BsTrash } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { getSlides } from '../../features/Slides/slidesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SLIDE_CREATE } from "../../config/router/routes";

const SlideList = ()=>{
    const { list: slides } = useSelector(state => state.slides)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSlides());
    }, [dispatch])

return (
    <Container className="pt-5">
        <Row>
            <Col sm={6}>
            <h4>Slides</h4>
            </Col>
            <Col sm={6} className="text-center">
            <Link to={SLIDE_CREATE} className="btn btn-primary">Crear</Link>
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
                {slides.data?.map((slide) => (
                    <tr key={slide.id}>
                    <td>{slide.order}</td>
                    <td><img style={{width: "200px"}} src={slide.image} alt="slide" /></td>
                    <td>{slide.name}</td>
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
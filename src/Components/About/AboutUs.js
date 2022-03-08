import {Container, Row} from 'react-bootstrap';
import Title from '../Title/Title';

const AboutUs =({about})=>{
    return(
        <Container fluid>
            <Row>
                <Title text={'Nosotros'}/>
                <p>{about}</p>
            </Row>
        </Container>
    )
}
export default AboutUs;
import { Card } from 'react-bootstrap';
import './Cards.scss';
import placeholder from './../../images/somosMasOrg.png'

const Cards = ({ image, title, content }) => {
    return (
        <Card className="card" bg="light">
            <Card.Header className="card-title">{title}</Card.Header>
            <Card.Img className="card-img" variant="top" src={!image ? placeholder : image} />
            <Card.Body className="flex-column h-100">
                <Card.Text className="card-content">{content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cards;
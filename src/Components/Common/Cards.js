import { Card } from 'react-bootstrap';
import './Cards.scss';
import placeholder from './../../images/somosMasOrg.png'

const Cards = ({ image, title, content }) => {
    return (
        <Card className="card" bg="light">
            <Card.Img variant="top" src={!image ? placeholder : image} />
            <Card.Body>
                <Card.Title className="card-title">{title}</Card.Title>
                <Card.Text className="card-content">{content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cards;
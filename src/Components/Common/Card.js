import { Card } from 'react-bootstrap';
import './Card.scss';

const Cards = ({ image, name, content }) => {
    return (
        <Card className="card" bg="light">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title className="card-title">{name}</Card.Title>
                <Card.Text className="card-content">{content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cards;
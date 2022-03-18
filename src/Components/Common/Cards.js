import { Card } from 'react-bootstrap';
import './Cards.scss';
import placeholder from './../../images/somosMasOrg.png'

const Cards = ({ image, title, content }) => {
  return (
    <Card className="card-common m-5" bg="light">
      <Card.Img className="card-img" variant="top" src={!image ? placeholder : image} />
      <Card.Title className="card-title px-2">{title}</Card.Title>
      <Card.Body className="flex-column h-100">
        <Card.Text className="card-content">{content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
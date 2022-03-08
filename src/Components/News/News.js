import Title from "../Title/Title";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import './News.scss'

const News = (data) => {

  const cards = data;

  return (
    <>
      {/* <Title text="Novedades" />
      <Container className="news-card-container my-5 py-4 px-5" fluid>
        {!cards ? null : cards.map((card) => (
              <Card className="news-card" bg="light">
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                  <Card.Title className="card-title">{card.name}</Card.Title>
                  <Card.Text className="card-content">{card.content}</Card.Text>
                </Card.Body>
              </Card>
            ))}
      </Container> */}
    </>
  );
};

export default News;

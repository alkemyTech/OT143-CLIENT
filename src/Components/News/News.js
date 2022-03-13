import { useEffect, useState } from 'react';
import Title from "../Title/Title";
import Container from "react-bootstrap/Container";
import './News.scss'
import newsService from '../../Services/news';
import { warningMsg } from '../Alerts/Alert';

const News = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const cargaDatos = async() => {
      try {
        const result = await newsService.getAll();
        setNews(result.slice(0, 20));
      } catch (error) {
        warningMsg("Error al cargar los datos (error 500)");
      }
    }
    cargaDatos();
  }, [])

  return (
    <>
      <Title text="Novedades" />
      <Container className="news-card-container my-5 py-4 px-5" fluid>
        {news.length === 0 ? null : news.map((card) => (
              <Card className="news-card" bg="light">
                <Card.Img variant="top" src={card.image} />
                <Card.Body>
                  <Card.Title className="card-title">{card.name}</Card.Title>
                  <Card.Text className="card-content">{card.content}</Card.Text>
                </Card.Body>
              </Card>
            ))}
      </Container>
    </>
  );
};

export default News;

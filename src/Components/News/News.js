import { useEffect, useState } from 'react';
import Title from "../Title/Title";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import './News.scss'
import newsService from '../../Services/news';
import { warningMsg } from '../Alerts/Alert';
import Loading from '../Common/Loading';

const News = () => {

  const [news, setNews] = useState([]);
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    setIsFetching(true);
    const cargaDatos = async() => {
      try {
        const result = await newsService.getAll();
        setNews(result.slice(0, 20));
        setIsFetching(false);
      } catch (error) {
        warningMsg("Error al cargar los datos (error 500)");
        setIsFetching(false);
      }
    }
    cargaDatos();
  }, [])

  return (
    <>
      <Title text="Novedades" />
      <div className="m-0 row justify-content-center">
          { isFetching && <Loading />}
      </div>
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

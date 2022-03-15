import { useEffect, useState } from 'react';
import Title from "../Title/Title";
import Container from "react-bootstrap/Container";
import './News.scss'
import newsService from '../../Services/news';
import { warningMsg } from '../Alerts/Alert';
import Card from './../Common/Cards'

const News = () => {

  const [news, setNews] = useState([]);

  useEffect(() => {
    const cargaDatos = async() => {
      try {
        const result = await newsService.getAll();
        setNews(result.slice(0, 20));
      } catch (error) {
        console.log(error)
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
              <Card title={card.title} content={card.content} image={card.image} />
            ))}
      </Container>
    </>
  );
};

export default News;

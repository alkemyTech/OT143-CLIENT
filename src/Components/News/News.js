import { useEffect, useState } from 'react';
import Title from "../Title/Title";
import Container from "react-bootstrap/Container";
import './News.scss'
import { getAll } from '../../Services/news';
import { warningMsg } from '../Alerts/Alert';
import Card from './../Common/Cards'
import Loading from '../Common/Loading';

const News = () => {

  const [news, setNews] = useState([]);
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    setIsFetching(true);
    const cargaDatos = async () => {
      try {
        const result = await getAll();
        setNews(result.slice(0, 20));
        setIsFetching(false);
      } catch (error) {
        console.log(error);
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
        {isFetching && <Loading />}
      </div>
      <Container className="news-card-container my-5 py-4 px-5" fluid>
        {news.length === 0 ? null : news.map((card) => (
          <Card effect title={card.title} content={card.content} image={card.image} />
        ))}
      </Container>
    </>
  );
};

export default News;

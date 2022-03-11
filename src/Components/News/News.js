import Title from "../Title/Title";
import Container from "react-bootstrap/Container";
import Cards from '../Common/Cards';
import { useEffect, useState } from 'react';
import newsService from "../../Services/news";
import './News.scss';


const News = () => {

  const [data, setData] = useState();

  useEffect(async ()=>{
    const data = await newsService.getAll();
    setData(data);
  })

  return (
    <>
      <Title text="Novedades" />
      <Container className="news-card-container my-5 py-4 px-5" fluid>
        {data && data.map((data) => (
          <Cards image={data.image} title={data.name} content={data.content} />
        ))}
      </Container>
    </>
  );
};

export default News;

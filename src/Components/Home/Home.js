import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import { Button } from 'react-bootstrap';
import Cards from '../Common/Cards';
import { Link, useHistory } from 'react-router-dom';
import Miembros from '../Members/Members';
import { NEWS_WEB } from '../../config/router/routes';
import { getAll } from '../../Services/news';
import Loading from '../Common/Loading';
import Testimonials from './../Testimonials/Testimonials';


const Home = () => {
  const [lastNews, setLastNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`${NEWS_WEB}/${id}`);
  };

  useEffect(() => {
    getAll().then(response => {
      setLastNews(response.slice(-4));
      setLoading(false);
    });
  }, []);

  useEffect(()=>{

  },[])

  return (
    <>
      <div className="container-fluid p-0">
        <Carousel />
        <div className="container-fluid mt-5">
          <div className="row text-center my-3">
            <h2 className="display-4">Últimas novedades</h2>
          </div>
        </div>
        {
          loading ?
            <Loading />
            :
            <>
              <div className="container-fluid">
                <div className="d-flex flex-wrap justify-content-center">
                  {
                    lastNews.length > 0 && lastNews.map((news, index) => (
                      <Cards effect key={index} title={news.name} content={news.content} image={news.image} onClick={() => handleClick(news.id)} />
                    ))
                  }
                </div>
                <div className="container-fluid">
                  <div className="row justify-content-center text-center my-3">
                    <div className="col-4">
                      <Link to={NEWS_WEB}><Button variant="outline-primary d-inline-block">Ver todas</Button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
        }
        <div className="container-fluid text-center mt-5 my-3">
            <h2 className="display-4">Miembros</h2>
          </div>
        <div className="container-fluid">
          <Miembros />
        </div>
        <div className="container-fluid mt-5">
          <div className="row text-center my-3">
            <h2 className="display-4">Testimonios</h2>
          </div>
        </div>
       <Testimonials />
      </div>
    </>);
}

export default Home;
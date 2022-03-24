import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import { Button } from 'react-bootstrap';
import Cards from '../Common/Cards';
import { Link, useHistory } from 'react-router-dom';
import Miembros from '../Members/Members';
import Retrato from '../../images/members/Cecilia Mendez.jpeg'
import { NEWS_WEB } from '../../config/router/routes';
import { getAll } from '../../Services/news';
import Loading from '../Common/Loading';


const Home = () => {
  const [lastNews, setLastNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const handleClick = (id) => {
    history.push(`${NEWS_WEB}/${id}`);
  };

  useEffect(() => {
    getAll().then(response => {
      setLastNews(response.slice(-3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="container-fluid p-0">
        <Carousel />
        <div className="row text-center my-3">
          <h2 className="display-4">Últimas novedades</h2>
        </div>
        {
          loading ?
            <Loading />
            :
            <>
              <div className="d-flex flex-wrap justify-content-center">
                {
                  lastNews.length > 0 && lastNews.map((news, index) => (
                    <Cards key={index} title={news.name} content={news.content} image={news.image} onClick={() => handleClick(news.id)} />
                  ))
                }
              </div>
              <div className="row justify-content-center text-center my-3">
                <div className="col-4">
                  <Link to={NEWS_WEB}><Button variant="outline-primary d-inline-block">Ver todas</Button></Link>
                </div>
              </div>
            </>
        }
        <div className="row">
          <Miembros />
        </div>
        <div className="row text-center my-3">
          <h2 className="display-4">Testimonios</h2>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <Cards title="Card title" image={Retrato} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur blanditiis possimus molestias sunt dolorem recusandae maxime distinctio, voluptate totam provident ipsam, similique tenetur est? Rerum cum autem praesentium explicabo." />

          <Cards title="Card title" image={Retrato} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur blanditiis possimus molestias sunt dolorem recusandae maxime distinctio, voluptate totam provident ipsam, similique tenetur est? Rerum cum autem praesentium explicabo." />

          <Cards title="Card title" image={Retrato} content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur blanditiis possimus molestias sunt dolorem recusandae maxime distinctio, voluptate totam provident ipsam, similique tenetur est? Rerum cum autem praesentium explicabo." />
        </div>
      </div>
    </>);
}

export default Home;
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Title from '../../Title/Title';
import { useParams } from 'react-router-dom';
import Loading from '../../Common/Loading';
import { warningMsg } from '../../Alerts/Alert';
// import axios from 'axios';

//CARGA DE DATOS DE LA API.
// const result = await axios.get(`http://ongapi.alkemy.org/api/news/${params.id}`)
// .then((res)=>{
// })
// .catch((err)=>{
// });
const NewsDetail = () => {
  const params = useParams();
  const [news, setNews] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    console.log(params.id);
    setIsFetching(true);
    const cargaDetail = async () => {
      try {
        const res = {
          data: {
            name: "Detalle de la novedad",
            image: "IMG",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, accusantium.",
            updated_at: Date()
          }
        }
        res.data ? setNews(res.data) :
          console.log("RES", res, "STATE", news)
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
        warningMsg("Error 404 no hay noticias");
      }
    }
    cargaDetail();
  }, []);

  return (
    <>
      {news ?
        <Title text={news.name} />
        :
        <Title text="Detalle de la novedad" />
      }

      <div className="m-0 row justify-content-center">
        {isFetching && <Loading />}
      </div>
      {news ?
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-center">
                <img className="img-fluid" src={news.image} alt="imagen de la novedad" />
              </div>
              <div className="text-center">
                <p>{news.content}</p>
                <p>Fecha: {Date(news.updated_at)}</p>
              </div>
            </div>
          </div>
        </div>
        :
        ""
      }
    </>
  );
}

export default NewsDetail;
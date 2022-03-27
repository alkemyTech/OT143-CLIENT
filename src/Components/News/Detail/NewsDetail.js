import React, { useEffect, useState } from "react";
import Title from "../../Title/Title";
import { useParams } from "react-router-dom";
import Loading from "../../Common/Loading";
import { Get } from "./../../../Services/publicApiService";
import ComentariosNewsDetail from "./ComentariosNewsDetail";
import moment from "moment";
import { warningMsg } from "./../../Alerts/Alert";
import './news-details.scss';

const NewsDetail = () => {
  const [news, setNews] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    Get(`news`, id)
      .then((res) => {
        console.log(res.data.data);
        setNews(res.data.data);
        setIsFetching(false);
      })
      .catch((error) => {
        console.log(error);
        warningMsg("Error Al cargar Novedad");
      });
  }, []);

  return (
    <>
      <Title />
      <div className="news__container">
            {isFetching & (news.length === 0) ? (
              <div className="text-center">
                {" "}
                <Loading />{" "}
              </div>
            ) : (
              <>
              <div className="news__container__banner">
                <img
                  className="img-fluid"
                  src={news.image}
                  alt="ImagenDetalleNovedades"
                />
                <div className="news__container__banner__text">
                  <h1 className="news__title">{news.name}</h1>
                  <p>{moment(news.created_at).format("LL")}</p>
                </div>
              </div>
                <div className="news__container__text">
                  <p dangerouslySetInnerHTML={{ __html: news.content }}></p>
                  <div className="row justify-content-center news__container__text__comentarios">
                    <div className="text-center">
                      <ComentariosNewsDetail id={id} />
                    </div>
                  </div>
                </div>
              </>
            )}
      </div>
    </>
  );
};

export default NewsDetail;

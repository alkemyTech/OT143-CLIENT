import React, { useEffect, useState } from "react";
import Title from "../../Title/Title";
import { useParams } from "react-router-dom";
import Loading from "../../Common/Loading";
import { Get } from "./../../../Services/publicApiService";
import ComentariosNewsDetail from "./ComentariosNewsDetail";
import moment from "moment";
import { warningMsg } from "./../../Alerts/Alert";

const NewsDetail = () => {
  const regex = /(<([^>]+)>)/gi;
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
      <div className="container">
        <div className="row">
          <div className="col">
            {isFetching & (news.length === 0) ? (
              <div className="text-center">
                {" "}
                <Loading />{" "}
              </div>
            ) : (
              <>
                <img
                  className="img-fluid my-2"
                  src={news.image}
                  alt="ImagenDetalleNovedades"
                />

                <div className="text-center">
                  <h1>{news.name}</h1>
                  <h3>Fecha de la noticia</h3>
                  <p>{moment(news.created_at).format("LL")}</p>
                  {/* sacar etiquetas html */}
                  <p dangerouslySetInnerHTML={{ __html: news.content }}></p>
                  <div className="row justify-content-center">
                    <div className="text-center">
                      <ComentariosNewsDetail id={id} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;

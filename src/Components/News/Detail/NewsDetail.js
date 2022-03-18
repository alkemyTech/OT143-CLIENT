import React, { useEffect,useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Title from '../../Title/Title';
import { useParams } from 'react-router-dom';
import Loading from '../../Common/Loading';
import Skeleton from '../../Common/Skeleton';
import {Get} from './../../../Services/publicApiService';
import { warningMsg } from '../../Alerts/Alert';

const NewsDetail = () => {
    const params = useParams();
    const [news,setNews] = useState();
    const [newsApi,setNewsApi] = useState();
    const [isFetching, setIsFetching] = useState(true);

    useEffect(()=>{
        const cargaDetail = async () =>{
                try {
                    
                    const res = {
                        data :{
                            image : "IMG",
                            content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, accusantium.",
                            updated_at: Date(),
                        }
                    }
                    res.data ? setNews(res.data) :
                    console.log("RES", res,"STATE" ,news) 
                    setIsFetching(false);
                } catch (error) {
                    setIsFetching(true);
                    warningMsg("Error 404 no hay noticias");
                }
        }
        cargaDetail();
        
    },[]);


    return ( <>
    
    <Title  />

    <div className="m-0 row justify-content-center">
        { isFetching && <Loading />}
    </div>
    {news ? 
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="text-center">

                <img  className="img-fluid" src={news.image} alt="ImagenDetalleNovedades"/>

                </div>
                <div className="text-center" >
                    <h1>DetalleNovedades</h1>
                    <p >{news.content}</p>
                    <p >Fecha: {Date(news.updated_at)}</p>
                    </div>
                    <h4 className='text-center'> "Seccion Comentarios 👇"</h4>
                    <div className="row text-center" >
                      {isFetching && <Loading /> }
                    </div>



            </div>
        </div>
    </div>
    
    : ""}
    
    </> );
}

export default NewsDetail;
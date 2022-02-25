import React, { useEffect,useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Title from '../../Title/Title';
import { useParams } from 'react-router-dom';
import Loading from '../../Common/Loading';
import axios from 'axios';

const NewsDetail = () => {
    const params = useParams();
    const [news,setNews] = useState();
    const [isFetching, setIsFetching] = useState(false)
    useEffect(()=>{
        
        console.log(params.id);
        setIsFetching(true);
        const cargaDetail = async () =>{
            const result = await axios.get(`http://ongapi.alkemy.org/api/news/${params.id}`)
            .then((res)=>{
                setIsFetching(false);
                res.data ? setNews(res.data) :
                console.log("NoId")     
            })
            .catch((err)=>{
                alert("Error 404 no hay noticias");    
                console.log(err)
            });
        }
        
        cargaDetail();
       
    },[])
    return ( <>
    <Title text={"Novedades"} />
    <div className="m-0 row justify-content-center">
        { isFetching && <Loading />}
    </div>
    {news ? 
    <div className="container">
        <div className="row">
            <div className="col">
                {console.log(news)}
                <div className="text-center">

                <img  className="img-fluid" src={news.data.image} alt="imagenNews"/>

                </div>
                <div className="text-center">
                    <h1>Informacion</h1>
                    <p>{news.data.content }</p>
                    <p>Fecha: {Date(news.data.updated_at)}</p>
                </div>


            </div>
        </div>
    </div>
    
    : ""}
    
    </> );
}
 
export default NewsDetail;
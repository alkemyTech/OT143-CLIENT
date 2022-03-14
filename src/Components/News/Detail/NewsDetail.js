import React, { useCallback, useEffect,useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Title from '../../Title/Title';
import { useParams } from 'react-router-dom';
import Loading from '../../Common/Loading';
import Skeleton from '../../Common/Skeleton';
import {Get} from './../../../Services/publicApiService';
// import axios from 'axios';

//CARGA DE DATOS DE LA API.
   // const result = await axios.get(`http://ongapi.alkemy.org/api/news/${params.id}`)
   // .then((res)=>{
   // })
   // .catch((err)=>{
   // });
const NewsDetail = () => {
    const params = useParams();
    const [news,setNews] = useState();
    const [newsApi,setNewsApi] = useState();
    const [y,setY]=useState(document.scrollingElement.scrollHeight);
    const [scrollDirection,setScrollDirection]  = useState(false)
    const [isFetching, setIsFetching] = useState(false);


    const handleScroll = useCallback ((e)=>{
        const scrollHeight = window.height*0.8
        setY(window.scrollY);
        console.log("",y)
        console.log(scrollHeight);
        if (y  > scrollHeight ){
            console.log("DOWN");
                setScrollDirection(true) 
                try {
                    Get(`novedades`,`${1538}`).then((res)=>{
                        setNewsApi(res.data);
                        setScrollDirection(false);
                        return true; 
                    }).catch(()=>{
                        setScrollDirection(true);
                        setNewsApi({error:"Intenal Server Error(500)"});
                        return false;
                    });
                } catch (error) {
                    setScrollDirection(false)                   
                }            
        }
        ;
    },[y]);


    useEffect(()=>{
        setIsFetching(true);
        const cargaDetail = async () =>{
                try {
                    
                    const res = {
                        data :{
                            image : "IMG",
                            content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, accusantium.",
                            updated_at: Date(),
                        }
                    }
                    setIsFetching(false);
                    res.data ? setNews(res.data) :
                    console.log("RES", res,"STATE" ,news) 
                } catch (error) {
                    setIsFetching(false);
                    alert("Error 404 no hay noticias");    
                    console.log(error)
                }
           
        }
        cargaDetail();
            document.addEventListener('scroll',handleScroll);
            return ()=>{document.removeEventListener('scroll',handleScroll)};
        
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
                <div className="text-center">
                    <h1>DetalleNovedades</h1>
                    <p >{news.content}</p>
                    <p >Fecha: {Date(news.updated_at)}</p>
                    <div className="row">
                    <div className="col text-center">
                        
                    </div>
                
                    </div>
                        {newsApi && scrollDirection ? newsApi.error : <h4> "Seccion Comentarios 👇"</h4>}
                    </div>
                    <div  onScroll={handleScroll}>
                    {scrollDirection ?     <Skeleton />   :  <p>{newsApi?.data}</p>}
                    </div>
                    
            </div>
        </div>
    </div>
    
    : ""}
  
    
    </> );
}
 
export default NewsDetail;
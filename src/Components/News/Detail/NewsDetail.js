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

    const handleScroll = (e)=>{     
       //corregir
        document.addEventListener('scroll',(e)=>{
            if ( y < window.scrollY && window.scrollY > 150 ){
                    try {
                        setScrollDirection(true);
                        Get(`news`,`${1539}`).then((res)=>{
                            setNewsApi(res.data);
                            setScrollDirection(false);
                            document.removeEventListener('scroll',handleScroll)
                        }).catch(()=>{
                            setScrollDirection(true);
                            setNewsApi({error:"Intenal Server Error(500)"});
                            
                        });
                    } catch (error) {
                        setScrollDirection(false)                   
                    }
                }  
           setY(window.scrollY); 

        },[])
    };
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
                <div className="text-center" onScroll={handleScroll()}>
                    <h1>DetalleNovedades</h1>
                    <p >{news.content}</p>
                    <p >Fecha: {Date(news.updated_at)}</p>
                    </div>
                    <h4 className='text-center'> "Seccion Comentarios 👇"</h4>
                    <div className="row text-center" >
                      {scrollDirection ? <Skeleton /> : <p>{newsApi?.data.name}</p>}
                    </div>



            </div>
        </div>
    </div>
    
    : ""}
    
    </> );
}
 
export default NewsDetail;
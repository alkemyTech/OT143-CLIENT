import React, { useEffect, useState } from 'react';
import Title from '../../Title/Title';
import { useParams } from 'react-router-dom';
import Loading from '../../Common/Loading';
import {Get} from './../../../Services/publicApiService';
import ComentariosNewsDetail from './ComentariosNewsDetail';
import moment from 'moment';
import {warningMsg} from './../../Alerts/Alert'


const NewsDetail = () => {
    const regex = /(<([^>]+)>)/ig;
    const [news,setNews] = useState([]);
    const [isFetching,setIsFetching] = useState(true)
    const {id} = useParams();
    useEffect(()=>{
        Get(`news`,id).then((res)=>
           {
            console.log(res.data.data)
            setNews(res.data.data)
            setIsFetching(false)})
          .catch((error)=>{
              console.log(error);
              warningMsg("Error Al cargar Novedad")
          })
    },[])
    return ( <>
    
    <Title  />
    <div className="container">
        <div className="row">
            <div className="col">
                
                {isFetching & news.length===0 ? <div className="text-center"> <Loading /> </div>: 
                <>
                <img  className="img-fluid my-2" src={news.image}alt="ImagenDetalleNovedades"/>

                    <div className="text-center">
                        <h1>{news.name}</h1>
                        <h3>Fecha de la noticia</h3>
                        <p>{moment(news.created_at).format('LL')}</p>
                        {/* sacar etiquetas html */}
                        <p >Descripcion:{news.content} </p>
                        <div className="row">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, odio nihil. Perspiciatis obcaecati, amet nesciunt dolores minima commodi, dolorum dolorem tempora veritatis nam molestias pariatur nisi rerum harum voluptatibus. Voluptatum dolorum a officiis possimus? Repellendus hic cupiditate est quos iusto consequuntur eligendi alias reprehenderit cum libero! Aut, impedit natus molestias id, dolore libero, magni dicta amet obcaecati molestiae eligendi ipsa reprehenderit eaque veritatis aliquam voluptas eum commodi sit distinctio aspernatur facilis vero nihil. Facilis vel molestias, quo quos autem porro. Similique sequi laboriosam, veniam est et labore. Cupiditate, doloribus! Nobis corrupti officiis quasi eum, soluta nesciunt est illum molestias labore non perferendis, ipsum, impedit recusandae aliquid cupiditate possimus facilis provident pariatur magni. Consectetur, cupiditate repudiandae. Doloribus aliquam impedit quisquam ipsum magnam sint ipsa nam? Officiis tenetur molestias, soluta iure saepe tempora sunt sequi, ad placeat voluptatem animi deleniti fuga, fugiat omnis veniam quia laborum doloremque! Cupiditate magni facere vitae delectus, aliquid, officiis eum fuga distinctio dignissimos voluptate, cumque porro in? Voluptate.
                            <div className="col text-center" >
                            <ComentariosNewsDetail  id={id}/>
                            </div>
                        
                        </div>
                    
                    </div>             
                    </>
            }
        </div>
        </div>
    </div>
    

    </> );
}
 
export default NewsDetail;
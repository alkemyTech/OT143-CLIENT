import React, { useEffect,useState,useRef } from 'react';
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
    const [isInViewPor, setIsInViewport] =useState(false);

    const root=useRef()

    // useEffect(()=>{
    //     const obs = new IntersectionObserver(onIntersection,{threshold:0});
    //     obs.observe(root.current);
    //     function onIntersection(entries){
    //         const {isIntersecting} = entries[0];
    //         if (isIntersecting){obs.disconnect};
    //         setTimeout(() => {
                
    //             setIsInViewport(isIntersecting);
    //             setIsFetching(false)
    //         }, 3000);
    //     }
    // },[]);

    const handleScroll  = () =>{
        const obs = new IntersectionObserver(onIntersection,{threshold:0});
        obs.observe(root.current);
        function onIntersection(entries){
            const {isIntersecting} = entries[0]
            if (isIntersecting)
                {obs.disconnect()};
            setIsInViewport(isIntersecting);
            setIsFetching(false)
        } 
    }

    return ( <>
    
    <Title  />

    <div className="m-0 row justify-content-center">
    </div>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="text-center">

                <img  className="img-fluid"  alt="ImagenDetalleNovedades"/>

                </div>
                <div className="text-center" >
                    <h1>DetalleNovedades</h1>
                    <p >{}</p>
                    <p >Fecha: {Date()}</p>
                    </div>
                    <h4  className='text-center'> "Seccion Comentarios 👇"</h4>


                    
                    <div   className="row text-center"   >
                      {isFetching && <Loading /> }
                      <div ref={root}>

                      </div>
                      <div onScroll={handleScroll}>
                          
                      </div>
                      {!isInViewPor && <Skeleton />}
                    </div>



            </div>
        </div>
    </div>
    
    </> );
}

export default NewsDetail;
import React,{useEffect, useState} from 'react';
import Skeleton from '../../Common/Skeleton';
import {Get} from './../../../Services/publicApiService';
const ComentariosNewsDetail = ({id}) => {

    const [inViewPort,setInviewPort] = useState(false);
    const [skeleton,setSkeleton] = useState(true);
    const [coments,setComents] = useState([]);
    useEffect(()=>{
        const scrollComent  = (entries )=>{
            const el = entries[0];
            if(el.isIntersecting){  
                console.log("ESTAMOS ACA");
                Get('comments').then((res)=>{ 
                    //filtro por new_id el comentario de cada noticia.
                    const comentFilter = res.data.data.filter(coment=>coment.new_id===id);
                    setComents(comentFilter)
                    obs.disconnect();
                }).catch(error=>console.log(error));
                //para demorar un y que se vea como se muestra el Skeleton, luego sacar el setTimeOut
                setTimeout(()=>{
                    setInviewPort(true);
                    setSkeleton(false);
                },3000)
             
            }
        }
        const obs = new IntersectionObserver(scrollComent,{
        })
        obs.observe(document.getElementById('comentarios'))
    },[])
    return ( <>
        <section id="comentarios">
            {skeleton  ? <Skeleton /> :
                coments.map(e=>
                    <p>{e.text}</p>)
            }
            {coments.length===0 && !skeleton ? <h4>No hay comentarios </h4>: null}
        </section>
    </> );
}
 
export default ComentariosNewsDetail;
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
                    setComents(res.data.data.filter(coment=>coment.new_id=== id))
                }).catch(error=>console.log(error));

                setInviewPort(true);
                setSkeleton(false);
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
        </section>
    </> );
}
 
export default ComentariosNewsDetail;
import React, { useCallback, useEffect,useRef,useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Title from '../../Title/Title';
import { useParams } from 'react-router-dom';
import Loading from '../../Common/Loading';
import Skeleton from '../../Common/Skeleton';
import {Get} from './../../../Services/publicApiService';
import ComentariosNewsDetail from './ComentariosNewsDetail';


const NewsDetail = () => {
    const [news,setNews] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        Get(`news`,id).then((res)=>
           { console.log(res.data.data)
          setNews(res.data.data)})
          .catch(error=>console.log(error))
    },[])
    return ( <>
    
    <Title  />

    <div className="m-0 row justify-content-center">
    </div>
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="text-center">

                <img  className="img-fluid" alt="ImagenDetalleNovedades"/>

                </div>
                <div className="text-center">
                    <h1>DetalleNovedades</h1>
                    <p ></p>
                    <p >Fecha:{news.content} </p>
                    <div className="row">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum molestiae quo deserunt necessitatibus saepe similique sunt odit doloribus, aperiam dolore fuga, laudantium at animi. Atque deserunt debitis, architecto, possimus nobis dolorum autem fugiat nisi labore voluptatem hic necessitatibus a laudantium, eveniet cum sequi? Quidem quas deserunt id cum blanditiis ullam? Veritatis ratione placeat fuga asperiores a! Aliquid et ducimus deserunt fugiat sed corporis ea enim distinctio voluptate ipsam! Eligendi autem fugit quas at distinctio obcaecati praesentium neque, modi aliquam aperiam qui impedit repellendus deleniti fugiat quaerat aspernatur, iste libero amet optio eos quos itaque rem ipsa? Maiores, magnam tempore doloremque eum, facilis laboriosam necessitatibus, odit sit accusantium minus ipsam soluta voluptas consectetur. Suscipit ratione sint eius. Quibusdam aperiam aut sapiente quia mollitia corrupti consectetur consequatur sequi! Illum sint architecto eos incidunt ab, in molestiae magnam perspiciatis ratione tenetur, obcaecati deleniti. Laudantium commodi inventore animi eveniet suscipit ipsum quae, consectetur eaque aspernatur accusantium saepe, dicta, molestiae alias reprehenderit. Modi, cumque accusamus doloribus vitae recusandae sit labore, sequi repellat impedit ullam quidem a rerum magni facilis molestias. Autem natus distinctio quo laudantium ut inventore doloribus aut id veritatis, commodi accusamus corporis vero ducimus odio quos ipsa! Ut architecto eius, alias eum natus nihil dolor autem minima? Necessitatibus sapiente velit inventore laborum ea laboriosam cupiditate minus quasi dicta a iusto ipsum animi facere perspiciatis optio eaque, quia dolorem dolores sequi obcaecati nam quibusdam. Asperiores quasi quia nobis fugiat commodi velit ab sint voluptatem repellendus aliquid nihil excepturi, officiis obcaecati adipisci vero, hic id repudiandae reiciendis in dignissimos. Tempore asperiores quam nostrum, dolore maiores omnis id recusandae harum quae adipisci molestias veritatis doloremque, odit expedita accusantium laboriosam exercitationem earum. Impedit facere explicabo adipisci repellendus obcaecati nulla aliquid voluptas quis pariatur aut sequi reprehenderit neque ducimus, commodi laboriosam tempora, amet ea fugit aspernatur, quaerat enim possimus. Non placeat quibusdam numquam autem blanditiis cupiditate ipsum quod optio voluptatem, ab et, itaque consequuntur. Voluptatibus porro quis dolorum aspernatur et asperiores sunt dolor molestiae neque similique qui illum sapiente, inventore, obcaecati impedit at? Distinctio aperiam velit excepturi voluptates alias eaque obcaecati nostrum, provident cum natus, aspernatur labore adipisci optio sit ea? Id culpa quo itaque quidem harum est reiciendis laborum hic voluptatem ad! Ea expedita doloremque ratione possimus quidem autem nisi aliquam nesciunt nobis, harum eveniet repellat accusamus labore! Possimus sint quis qui optio tempore nemo nobis cupiditate natus quibusdam et sapiente molestias, doloremque perferendis distinctio aperiam, repellendus itaque quo eligendi placeat ducimus obcaecati asperiores similique. Atque qui accusamus exercitationem, accusantium nobis labore, esse expedita sint nemo vitae voluptates eos architecto, consequuntur obcaecati soluta asperiores? Temporibus iste perferendis repudiandae amet veniam ipsum quos, est praesentium error eos illum odit debitis nesciunt quaerat, aliquam aspernatur reiciendis dolores maiores vel pariatur. Ut, molestiae quisquam eveniet debitis vel, consequatur quaerat, magni cupiditate eos voluptatem deleniti. Asperiores accusamus saepe hic suscipit quidem unde delectus id tempore magnam, minima exercitationem pariatur consectetur, voluptatibus, officiis dolores et sint similique adipisci atque quasi. Nobis mollitia libero sed aspernatur eaque placeat dolor nemo autem perferendis vero.
                        
                        <div className="col text-center" >
                        <ComentariosNewsDetail  id={id}/>
                        </div>
                    
                    </div>
                </div>


            </div>
        </div>
    </div>
    
    </> );
}
 
export default NewsDetail;
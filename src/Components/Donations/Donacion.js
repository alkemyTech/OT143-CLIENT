import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Donacion.css'

const getFetch = new Promise((resolve, reject)=>{
    const condition = true
    if(condition){
        setTimeout(()=>{
            resolve(resolve)
        },2000)
    }else {
        setTimeout(()=>{
            reject('404')
        },2000)
    }
})

const Donacion = ({textDonation}) => {
    const [loading, setLoading] = useState(true)
    
    useEffect(() =>{
        getFetch
        .then (res => console.log(res))
        .catch(err => console.log(err))
        .finally(() => setLoading(false)) 
    })
    
    return ( 
        
            <div>
                { loading ? <div class="text-center spin" style="width: 3rem; height: 3rem;">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div> : 
                    <>
                        <div className='textDonacion'>
                            <h2>ONG</h2>
                            <p className='animate__animated animate__fadeInUpBig animate__delay-1s textAnimation'>{textDonation}</p>
                        </div>
                        <div className='botonDonar'>
                            <h4>Ahora a través de mercado pago hace tu Donacion!</h4>
                            <Link to='/gracias' className='linkBtn'>
                                <button type='button' className='btn btn-outline-primary col-12'><span className='botonMercado'>Dona con</span><img src="https://img.icons8.com/color/48/000000/mercado-pago.png" alt='mercado pago' /></button>
                            </Link>
                        </div> 
                    </>
                }
            </div>
    )
}

export default Donacion
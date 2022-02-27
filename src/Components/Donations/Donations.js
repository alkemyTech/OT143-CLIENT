import React from 'react'
import { Link } from 'react-router-dom'


const Donations = () => {
  return (
      <>
        <Link to='/donar'>{/* este boton iria por ejemplo en el navBar, y nos renderiza al componente donacion, en donde paso por prop el texto dinamico de la tarea */}
            <button 
                className='btn btn-primary' 
                textDonation='Dona por favor para esta causa.De corazón cualquier colaboración será grandemente valorada infinitas gracias.'>Donar
            </button>
        </Link>
      </>
  )
}

export default Donations
import React from 'react';
import Carousel from '../Carousel/Carousel';

const Home = () => {
    return ( <>
    {/* Navbar 
    Crear un componnete aparte para nav y footer*/}
     <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <a className="navbar-brand" href="#!">SomosMas</a>
                <a className="btn btn-primary" href="#signup">Sign Up</a>
            </div>
        </nav>
      
    <div className="container-fluid">
        <Carousel />

        
        <div className="row text-center my-3">
            <h2 className="display-4">Últimas novedades</h2>
        </div>
    </div>

    
    </>  );
}
 
export default Home;
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

        
        <div className="row ">
            <div className="col">
                <div class="jumbotron jumbotron-fluid bg-danger">
                <div class="container">
                <h1 class="display-4">Novedades ONG</h1>
                <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, neque.</p>
                </div>
                </div>
            </div>
            <div className="col">
            <div class="jumbotron jumbotron-fluid bg-warning">
                <div class="container">
                <h1 class="display-4">Titulos novedades</h1>
                <p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium nisi rerum mollitia enim sed expedita, et tenetur? Nulla magnam earum vitae nemo dignissimos officiis ad, totam ab dolore! Suscipit porro, fugiat, sed enim quidem dolor sequi labore sit culpa rerum facere soluta sunt perspiciatis. Repellat.</p>
                </div>
                </div>

            </div>


        </div>
        
    </div>

    
    </>  );
}
 
export default Home;
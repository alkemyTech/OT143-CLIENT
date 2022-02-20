import React, { useState, useEffect } from 'react';
import './styles.css';
import {ReactComponent as LeftArrow} from "./img/iconmonstr-angel-left-thin.svg";
import {ReactComponent as RightArrow} from "./img/iconmonstr-angel-right-thin.svg";
import axios from 'axios';

const baseURL = "http://ongapi.alkemy.org/api/slides";

const Carousel = () => {
    const [images, setImages] = useState([]);    
    const [desc, setDesc] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [selectedDesc, setSelectedDesc] = useState(desc[0]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data.data.map((img) => {
                    console.log(img)
                    images.push(img.image);
                    desc.push(img.description)
                }
            ));
        })
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            selectNewImage(selectedIndex, images);
        }, 5000);
        return () => clearInterval(interval);
    })

    const selectNewImage = (index, images, next = true) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex =  next ? 
                                    condition ? selectedIndex + 1 : 0
                                    :
                                    condition ? selectedIndex - 1 : images.length - 1;
                setSelectedImage(images[nextIndex]);
                setSelectedDesc(desc[nextIndex]);
                setSelectedIndex(nextIndex);
        }, 500);
    }

    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    }

    const next = () => {
        
        selectNewImage(selectedIndex, images);
    }

    return (
        <div className="carousel">
            <img src={selectedImage} alt="portada" className={`carousel__portada ${loaded ? "loaded" : ""}`}  onLoad={() => setLoaded(true)} />
            <div className="carousel__desc">
                <p>{selectedDesc}</p>
            </div>
            <div className="carousel__btns">
                <button onClick={previous}>
                    <LeftArrow />
                </button>
                <button >
                    <RightArrow onClick={next}/>
                </button>
            </div>
        </div>
    )
}

export default Carousel;
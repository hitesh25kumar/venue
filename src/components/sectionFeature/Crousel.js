import React from 'react';
import Slider from "react-slick";

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';
const Crousel = () => {

    const settings ={
        dots:true,
        infinite:true,
        autoplay:true,
        speed: 100
    }
    return (
        <div className="carrousel_wrapper" style={{overflow: 'hidden',height: `${window.innerHeight}px`,background:'red'}}>
             <Slider {...settings}>
            
            <div className="carrousel_image" style={{background: `url(${slide_one})`, height: `${window.innerHeight}px`}}>
            <img src={ slide_one } />
            </div>
            <div className="carrousel_image" style={{background: `url(${slide_two})`, height: `${window.innerHeight}px`}}>
            <img src={ slide_two } />
            </div>
            <div className="carrousel_image" style={{background: `url(${slide_three})`, height: `${window.innerHeight}px`}}>
            <img src={ slide_three } />
            </div>
            </Slider>
        </div>
       
    );
};

export default Crousel;
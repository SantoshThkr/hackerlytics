import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpeg";
import img2 from "../assets/4.jpeg";

const Services = () => {
  return (
    <div className='services'>
        <Carousel infiniteLoop autoPlay >

            <div>
                <img src={img1} alt="Item1" />
                <p>Full Dev</p>
            </div>

            <div>
                <img src={img2} alt="Item2" />
                <p>Full IT Service</p>
            </div>

        </Carousel>
    </div>
  )
}

export default Services
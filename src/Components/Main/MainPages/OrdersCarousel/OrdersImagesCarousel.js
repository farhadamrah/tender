import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../assets/images/Carousel/carousel_photo-1.jpg';
import img2 from '../../../../assets/images/Carousel/carousel_photo-2.jpg';
import img3 from '../../../../assets/images/Carousel/carousel_photo-3.jpg';

const OrdersImagesCarousel = (data) => {
  return (
    <Carousel>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
    </Carousel>
  );
};

export default OrdersImagesCarousel;

import React from 'react';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import './HomePage.scss';

import img1 from '../../../../assets/images/Carousel/carousel_photo-1.jpg';
import img2 from '../../../../assets/images/Carousel/carousel_photo-2.jpg';
import img3 from '../../../../assets/images/Carousel/carousel_photo-3.jpg';
import img4 from '../../../../assets/images/Carousel/carousel_photo-4.jpg';

const HeaderCarousel = () => {
  return (
    <>
      <Carousel autoplay autoplaySpeed='20' dotPosition='top'>
        <div>
          <img src={img1} alt='' />
        </div>
        <div>
          <img src={img2} alt='' />
        </div>
        <div>
          <img src={img3} alt='' />
        </div>
        <div>
          <img src={img4} alt='' />
        </div>
      </Carousel>
    </>
  );
};

export default HeaderCarousel;

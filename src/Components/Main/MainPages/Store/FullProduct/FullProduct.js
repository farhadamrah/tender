import React from 'react';
import './FullProduct.scss';
import { useParams } from 'react-router-dom';

import { Rate } from 'antd';

const FullProduct = ({ productData }) => {
  const { id } = useParams();

  return (
    <div>
      <div className='product-box' key={productData.index}>
        <div className='image-container'>
          <img src={productData.image} alt='mebel' />
        </div>
        <div className='content'>
          <div className='content__label'>
            <span className='product-title'>{productData.title}</span>
            <span className='product-cost'>{`${productData.cost} AZN`}</span>
          </div>
          <div className='rating'>
            <Rate defaultValue={productData.rating} />
          </div>
          <span className='product-comments'>{`${productData.comment} rəy`}</span>
          <span className='product-location'>{productData.location}</span>
        </div>
      </div>
    </div>
  );
};

export default FullProduct;

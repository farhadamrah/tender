import React from 'react';
import './FullProduct.scss';
import { useParams } from 'react-router-dom';

import { Rate } from 'antd';

const FullProduct = ({ productData }) => {
  const { id } = useParams();

  return (
    <>
      {productData
        .filter((product) => product.id === parseInt(id))
        .map((product, index) => (
          <div className='product-box' key={index}>
            <div className='image-container'>
              <img src={product.image} alt='mebel' />
            </div>
            <div className='content'>
              <div className='content__label'>
                <span className='product-title'>{product.title}</span>
                <span className='product-cost'>{`${product.cost} AZN`}</span>
              </div>
              <div className='rating'>
                <Rate defaultValue={product.rating} />
              </div>
              <span className='product-comments'>{`${product.comment} rəy`}</span>
              <span className='product-location'>{product.location}</span>
            </div>
          </div>
        ))}
    </>
  );
};

export default FullProduct;

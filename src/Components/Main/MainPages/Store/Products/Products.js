import React from 'react';
import { Link } from 'react-router-dom';
import './Products.scss';
import { Rate } from 'antd';

const Products = ({ productData }) => {
  return (
    <>
      <div className='product-boxes'>
        {productData.map((product, index) => (
          <Link to={`/store/${product.id}`}>
            <div className='product-box' key={index}>
              <div className='image-container'>
                <img src={product.images[0]} alt='mebel' />
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
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;

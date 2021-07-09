import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Products.scss';
import { Rate } from 'antd';

const Products = ({ productData }) => {
  return (
    <>
      {productData.map((product, index) => (
        <div className='product-boxes'>
          <Link to={`/store/products/${productData.id}`}>
            <div className='product-box' key={product.index}>
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
          </Link>
        </div>
      ))}
    </>
  );
};

export default Products;

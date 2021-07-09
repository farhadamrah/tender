import React from 'react';
import './FullProduct.scss';

import { Rate } from 'antd';

const FullProduct = ({ productData }) => {
  return (
    <div>
      <div className='product-box' key={'storeData.id'}>
        <div className='image-container'>
          <img src={'storeData.image'} alt='mebel' />
        </div>
        <div className='content'>
          <div className='content__label'>
            <span className='product-title'>{'storeData.title'}</span>
            <span className='product-cost'>{`${'storeData.cost'} AZN`}</span>
          </div>
          <div className='rating'>
            <Rate defaultValue={'storeData.rating'} />
          </div>
          <span className='product-comments'>{`${'storeData.comment'} rəy`}</span>
          <span className='product-location'>{'storeData.location'}</span>
        </div>
      </div>
    </div>
  );
};

export default FullProduct;

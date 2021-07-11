import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Rate } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComments,
  faExclamationTriangle,
  faEye,
  faHeart,
  faMapMarkerAlt,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import OrdersImagesCarousel from '../../OrdersCarousel/OrdersImagesCarousel';
import './FullProduct.scss';

const FullProduct = ({ productData }) => {
  const { id } = useParams();

  return (
    <>
      {productData
        .filter((product) => product.id === Number(id))
        .map((product, index) => (
          <div className='fullProduct' key={index}>
            <OrdersImagesCarousel className='fullProduct__carousel'>
              {product.images.map((img) => (
                <img src={img} alt='product-img' />
              ))}
            </OrdersImagesCarousel>
            <div className='fullProduct__row'>
              <span className='fullProduct__row--title'>{product.title}</span>
              <span className='fullProduct__row--cost'>{`${product.cost} AZN`}</span>
            </div>
            <div className='fullProduct__rating'>
              <Rate defaultValue={product.rating} />
            </div>
            <span className='fullProduct__location'>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              {product.location}
            </span>
            <span className='fullProduct__comments'>
              <FontAwesomeIcon icon={faComments} />
              <span className='label'>Rəylər: </span>
              <span className='green'>+{product.feedbacks.green}</span>
              <span className='line'>|</span>
              <span className='blue'>{product.feedbacks.blue}</span>
              <span className='line'>|</span>
              <span className='red'>-{product.feedbacks.red}</span>
            </span>
            <span className='fullProduct__view'>
              <FontAwesomeIcon icon={faEye} />
              {`Cəmi baxış: ${product.view}`}
            </span>
            <Link to='#' className='fullProduct__seller'>
              Satıcının başqa məhsullarına bax
            </Link>
            <div className='fullProduct__btns'>
              <div className='order'>
                <FontAwesomeIcon icon={faShoppingCart} />
                Sifariş et
              </div>
              <div className='complain'>
                <FontAwesomeIcon icon={faExclamationTriangle} />
              </div>
              <div className='wishlist'>
                <FontAwesomeIcon icon={faHeart} />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default FullProduct;

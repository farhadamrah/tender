import React from 'react';
import './ProduceOrders.scss';
import {
  faUserCircle,
  faClock,
  faCalendarAlt,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Filter from '../../Filter/Filter';
import SearchBar from '../../SearchBar/SearchBar';
import ProduceOrdersData from './ProduceOrdersData';
import ServiceOrders from '../ServiceOrders/ServiceOrders';
const ProduceOrders = () => {
  return (
    <>
      {/* <Filter />
      <SearchBar /> */}
      {/* <div className='produce-container'>
        {ProduceOrdersData.map((data) => (
          <div className='produce'>
            <div className='produce__content'>
              <h1 className='produce__title'>{data.title}</h1>
              <FontAwesomeIcon icon={faUserCircle} className='produce__image' />
              <p className='produce__feedbacks'>
                <span className='green'>{data.feedbacks.green}</span>
                <span>|</span>
                <span className='red'>{data.feedbacks.red}</span>
                <span>|</span>
                <span className='blue'>{data.feedbacks.blue}</span>
              </p>
              <h1 className='produce__header'>{data.header}</h1>
              <button type='button' className='produce__details-btn'>
                Ətraflı
              </button>
            </div>

            <div className='produce__footer'>
              <div className='produce__time footer-item'>
                <FontAwesomeIcon icon={faClock} className='footer__icon' />
                <span className='footer__text'>{`${data.addedDate} gün əvvəl`}</span>
              </div>
              <div className='produce__date footer-item'>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className='footer__icon'
                />
                <span className='footer__text '>{`${data.deadLine}-dək`}</span>
              </div>
              <div className='produce__offer footer-item'>
                <FontAwesomeIcon icon={faComment} className='footer__icon' />
                <span className='footer__text'>{`${data.order} təklif`}</span>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <ServiceOrders />
    </>
  );
};

export default ProduceOrders;

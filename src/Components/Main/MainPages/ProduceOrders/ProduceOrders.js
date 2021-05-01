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

const ProduceOrders = () => {
  return (
    <>
      <Filter />
      <SearchBar />
      <div className='tender-container'>
        {ProduceOrdersData.map((data) => (
          <div className='tender'>
            <div className='tender__content'>
              <h1 className='tender__title'>{data.title}</h1>
              <FontAwesomeIcon icon={faUserCircle} className='tender__image' />
              {/* <img src={'tender image'} alt="" /> */}
              <p className='tender__feedbacks'>
                <span className='green'>{data.feedbacks.green}</span>
                <span>|</span>
                <span className='red'>{data.feedbacks.red}</span>
                <span>|</span>
                <span className='blue'>{data.feedbacks.blue}</span>
              </p>
              <h1 className='tender__header'>{data.header}</h1>
              <button type='button' className='tender__details-btn'>
                Ətraflı
              </button>
            </div>

            <div className='tender__footer'>
              <div className='tender__time footer-item'>
                <FontAwesomeIcon icon={faClock} className='footer__icon' />
                <span className='footer__text'>{`${data.addedDate} gün əvvəl`}</span>
              </div>
              <div className='tender__date footer-item'>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className='footer__icon'
                />
                <span className='footer__text '>{`${data.deadLine}-dək`}</span>
              </div>
              <div className='tender__offer footer-item'>
                <FontAwesomeIcon icon={faComment} className='footer__icon' />
                <span className='footer__text'>{`${data.order} təklif`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProduceOrders;
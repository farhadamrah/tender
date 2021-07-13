import React from 'react';
import { Link } from 'react-router-dom';
import {
  faUserCircle,
  faMoneyBill,
  faClock,
  faCalendarAlt,
  faComment,
  faEye,
  faBriefcase,
  faComments,
  faPlaceOfWorship,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProduceOrder = ({ produceOrdersData }) => {
  return (
    <>
      {produceOrdersData.map((produceData, index) => (
        <div className='produce-container' key={`produce-${index}`}>
          <div className='produce'>
            <div className='produce__content'>
              <h1 className='produce__title'>{produceData.title}</h1>
              <FontAwesomeIcon icon={faUserCircle} className='produce__image' />
              <p className='produce__feedbacks'>
                <span className='green'>{produceData.feedbacks.green}</span>
                <span>|</span>
                <span className='red'>{produceData.feedbacks.red}</span>
                <span>|</span>
                <span className='blue'>{produceData.feedbacks.blue}</span>
              </p>
              <h1 className='produce__header'>{produceData.header}</h1>
              <Link to={`/produce-orders/${produceData.id}`}>
                <button type='button' className='produce__details-btn'>
                  Ətraflı
                </button>
              </Link>
            </div>
            <div className='produce__footer'>
              <div className='produce__time footer-item'>
                <FontAwesomeIcon icon={faClock} className='footer__icon' />
                <span className='footer__text'>{`${produceData.addedDate} gün əvvəl`}</span>
              </div>
              <div className='produce__date footer-item'>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className='footer__icon'
                />
                <span className='footer__text '>{`${produceData.deadLine}-dək`}</span>
              </div>
              <div className='produce__offer footer-item'>
                <FontAwesomeIcon icon={faComment} className='footer__icon' />
                <span className='footer__text'>{`${produceData.order} təklif`}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProduceOrder;

import React from 'react';
import { Link } from 'react-router-dom';
import {
  faUserCircle,
  faMoneyBill,
  faClock,
  faCalendarAlt,
  faComment,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServiceOrder.scss';

const ServiceOrder = ({ serviceData }) => {
  return (
    <>
      {serviceData.map((service, index) => (
        <div className='service-order' key={index}>
          <div className='tender__content'>
            <h1 className='tender__title'>{service.title}</h1>
            <FontAwesomeIcon icon={faUserCircle} className='tender__image' />
            {/* <img src={'tender image'} alt="" /> */}
            {/* <p className='tender__feedbacks'>
            <span className='green'>{service.feedbacks.green}</span>
            <span>|</span>
            <span className='red'>{service.feedbacks.red}</span>
            <span>|</span>
            <span className='blue'>{service.feedbacks.blue}</span>
        </p> */}
            <h1 className='tender__header'>{service.header}</h1>
            <div className='price'>
              <FontAwesomeIcon icon={faMoneyBill} className='price__icon' />
              <span className='price__text'>{`${service.price} AZN`}</span>
            </div>
            <Link to={`/service-orders/${service.id}`}>
              <button type='button' className='tender__details-btn'>
                Ətraflı
              </button>
            </Link>
          </div>
          <div className='tender__footer'>
            <div className='tender__time footer-item'>
              <FontAwesomeIcon icon={faClock} className='footer__icon' />
              <span className='footer__text'>{service.addedDate}</span>
            </div>
            <div className='tender__date footer-item'>
              <FontAwesomeIcon icon={faCalendarAlt} className='footer__icon' />
              <span className='footer__text '>{`${service.deadLine}-dək`}</span>
            </div>
            <div className='tender__offer footer-item'>
              <FontAwesomeIcon icon={faComment} className='footer__icon' />
              <span className='footer__text'>{`${service.order} təklif`}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceOrder;

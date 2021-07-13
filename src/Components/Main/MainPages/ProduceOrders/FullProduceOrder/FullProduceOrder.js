import React from 'react';
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
import OrdersImagesCarousel from '../../OrdersCarousel/OrdersImagesCarousel';
import { useParams } from 'react-router-dom';

import './FullProduceOrder.scss';

const FullProduceOrder = ({ produceOrdersData }) => {
  const { id } = useParams();
  return (
    <>
      {produceOrdersData
        .filter((produceData) => produceData.id === Number(id))
        .map((produceData, index) => (
          <div>
            <div className='fullService-order container' key={index}>
              <div
                className='fullService-order__content'
                style={{ padding: '1rem 1.3rem 0.5rem' }}
              >
                <div className='fullService-order__header'>
                  <div className='fullService-order__header--profile'>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className='fullService-order__header--profile__img'
                    />
                  </div>
                  <div className='fullService-order__header--texts'>
                    <h4 className='texts__title'>{produceData.title}</h4>
                    <p className='texts__registrationDate'>
                      Saytda qeydiyyatdan keçib: {produceData.registrationDate}
                      gün
                    </p>
                    <p className='texts__feedbacks'>
                      <span>İcraçıların rəyləri: </span>
                      <span className='green'>
                        {produceData.feedbacks.green}
                      </span>
                      <span>|</span>
                      <span className='red'>{produceData.feedbacks.red}</span>
                      <span>|</span>
                      <span className='blue'>{produceData.feedbacks.blue}</span>
                    </p>
                  </div>
                </div>
                <div className='fullService-order__body'>
                  <h1 className='fullService-order__body--title'>
                    {produceData.header}
                  </h1>
                  <span className='fullService-order__body--price'>
                    <FontAwesomeIcon
                      icon={faMoneyBill}
                      style={{ marginRight: '0.5rem' }}
                    />
                    {`${produceData.price} AZN`}
                  </span>
                  <p className='fullService-order__body--deadLine'>
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      style={{ marginRight: '0.2rem', fontSize: '1rem' }}
                    />
                    Təkliflər {produceData.deadLine} tarixinədək qəbul edlir
                  </p>
                  <p className='fullService-order__body--article'>
                    {produceData.about}
                  </p>
                  <OrdersImagesCarousel />
                </div>
              </div>

              <div className='fullService-order__footer'>
                <div>
                  <div className='order__type footer-item'>
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className='footer__icon'
                    />
                    <span className='footer__text'>{produceData.location}</span>
                  </div>
                  <div className='order__time footer-item'>
                    <FontAwesomeIcon icon={faClock} className='footer__icon' />
                    <span className='footer__text'>
                      {produceData.addedDate}
                    </span>
                  </div>
                </div>
                <div>
                  <div className='order__offer footer-item'>
                    <FontAwesomeIcon icon={faEye} className='footer__icon' />
                    <span className='footer__text'>{`Cəmi baxış: ${produceData.views}`}</span>
                  </div>
                  <div className='order__date footer-item'>
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className='footer__icon'
                    />
                    <span className='footer__text '>{`${produceData.deadLine}-dək`}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='suggestions'>
              <h2 className='suggestions__header'>
                <FontAwesomeIcon icon={faComments} />
                İcraçıların təklifləri <span>{produceData.order}</span>
              </h2>
              <div className='container'>
                Cəmi {produceData.order} təklif. Təkliflər haqqında məlumat
                almaq üçün qeydiyyatdan keçin və ya daxil olun
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default FullProduceOrder;

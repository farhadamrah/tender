import React from 'react';
import './About-ServiceOrders.scss';
import TenderData from '../ServiceOrdersData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const AboutServiceOrders = () => {
  return (
    <>
      <div className='service-orders__about'>
        {TenderData.map((data) => (
          <div className='service-order container' key={data.key}>
            <div className='service-order__header'>
              <div className='service-order__header--profile'>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className='service-order__header--profile__img'
                />
              </div>
              <p className='service-order__header--registrationDate'>
                Saytda qeydiyyatdan keçib 29 gün
              </p>
              <h4>Sifarişçi</h4>
              <p className='tender__feedbacks'>
                <span className='green'>{data.feedbacks.green}</span>
                <span>|</span>
                <span className='red'>{data.feedbacks.red}</span>
                <span>|</span>
                <span className='blue'>{data.feedbacks.blue}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default AboutServiceOrders;

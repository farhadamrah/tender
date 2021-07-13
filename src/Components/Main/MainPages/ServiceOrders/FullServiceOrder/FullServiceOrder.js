import React from 'react';
import { useParams } from 'react-router-dom';
import {
  faUserCircle,
  faMoneyBill,
  faClock,
  faCalendarAlt,
  faComments,
  faMapMarkerAlt,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrdersImagesCarousel from '../../OrdersCarousel/OrdersImagesCarousel';
import './FullServiceOrder.scss';

const FullServiceOrder = ({ serviceData }) => {
  const { id } = useParams();
  return (
    <>
      {serviceData
        .filter((service) => service.id === Number(id))
        .map((service, index) => (
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
                    <h4 className='texts__title'>{service.title}</h4>
                    <p className='texts__registrationDate'>
                      Saytda qeydiyyatdan keçib: {service.registrationDate}
                    </p>
                    <p className='texts__feedbacks'>
                      <span>İcraçıların rəyləri: </span>
                      <span className='green'>+{service.feedbacks.green}</span>
                      <span>|</span>
                      <span className='blue'>{service.feedbacks.blue}</span>
                      <span>|</span>
                      <span className='red'>-{service.feedbacks.red}</span>
                    </p>
                  </div>
                </div>
                <div className='fullService-order__body'>
                  <h1 className='fullService-order__body--title'>
                    {service.header}
                  </h1>
                  <span className='fullService-order__body--price'>
                    <FontAwesomeIcon
                      icon={faMoneyBill}
                      style={{ marginRight: '0.5rem' }}
                    />
                    {`${service.price} AZN`}
                  </span>
                  <p className='fullService-order__body--deadLine'>
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      style={{ marginRight: '0.2rem', fontSize: '1rem' }}
                    />
                    Təkliflər {service.deadLine} tarixinədək qəbul edlir
                  </p>
                  <p className='fullService-order__body--article'>
                    {service.about}
                  </p>
                  <OrdersImagesCarousel>
                    {service.images.map((img) => (
                      <img src={img} alt='image' />
                    ))}
                  </OrdersImagesCarousel>
                  <h2>Əlaqə məlumatları</h2>
                  <div className='fullService-order__body--contact'>
                    <div className='fullService-order__body--contact__left'>
                      <span>Web-sayt:</span>
                      <span>E-mail:</span>
                      <span>Whatsapp:</span>
                    </div>
                    <div className='fullService-order__body--contact__right'>
                      <span>
                        <a href='http://www.webdizayn.az' target='_blank'>
                          {service.contact.site}
                        </a>
                      </span>
                      <span> {service.contact.email}</span>
                      <span> {service.contact.whatsapp}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='fullService-order__footer'>
                <div>
                  <div className='order__type footer-item'>
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className='footer__icon'
                    />
                    <span className='footer__text'>{service.location}</span>
                  </div>
                  <div className='order__time footer-item'>
                    <FontAwesomeIcon icon={faClock} className='footer__icon' />
                    <span className='footer__text'>{service.addedDate}</span>
                  </div>
                </div>
                <div>
                  <div className='order__offer footer-item'>
                    <FontAwesomeIcon icon={faEye} className='footer__icon' />
                    <span className='footer__text'>{`Cəmi baxış: ${service.views}`}</span>
                  </div>
                  <div className='order__date footer-item'>
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className='footer__icon'
                    />
                    <span className='footer__text '>{`${service.deadLine}-dək`}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='suggestions'>
              <h2 className='suggestions__header'>
                <FontAwesomeIcon icon={faComments} />
                İcraçıların təklifləri <span>{service.order}</span>
              </h2>
              <div className='container'>
                Cəmi {service.order} təklif. Təkliflər haqqında məlumat almaq
                üçün qeydiyyatdan keçin və ya daxil olun
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default FullServiceOrder;

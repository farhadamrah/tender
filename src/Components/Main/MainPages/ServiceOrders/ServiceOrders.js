import React from 'react';
import {
  Link,
  Switch,
  useRouteMatch,
  Route,
  useParams,
} from 'react-router-dom';
import {
  faUserCircle,
  faMoneyBill,
  faClock,
  faCalendarAlt,
  faComment,
  faEye,
  faComments,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServiceOrdersData from './ServiceOrdersData';
import Filter from '../../Filter/Filter';
import SearchBar from '../../SearchBar/SearchBar';
import OrdersImagesCarousel from '../OrdersCarousel/OrdersImagesCarousel';
import './ServiceOrders.scss';
import '../../Main.scss';

const ServiceOrders = () => {
  const { url, path } = useRouteMatch();

  const ServiceOrder = ({ data }) => {
    const { serviceId } = useParams();
    const serviceData =
      data ||
      ServiceOrdersData[
        ServiceOrdersData.findIndex((i) => i.id === +serviceId)
      ];
    return data ? (
      <>
        <div className='tender' key={`order-${serviceData.id}`}>
          <div className='tender__content'>
            <h1 className='tender__title'>{serviceData.title}</h1>
            <FontAwesomeIcon icon={faUserCircle} className='tender__image' />
            {/* <img src={'tender image'} alt="" /> */}
            <p className='tender__feedbacks'>
              <span className='green'>{serviceData.feedbacks.green}</span>
              <span>|</span>
              <span className='red'>{serviceData.feedbacks.red}</span>
              <span>|</span>
              <span className='blue'>{serviceData.feedbacks.blue}</span>
            </p>
            <h1 className='tender__header'>{serviceData.header}</h1>
            <div className='price'>
              <FontAwesomeIcon icon={faMoneyBill} className='price__icon' />
              <span className='price__text'>{`${serviceData.price} AZN`}</span>
            </div>
            <Link to={`${url}/${serviceData.id}`}>
              <button type='button' className='tender__details-btn'>
                Ətraflı
              </button>
            </Link>
          </div>
          <div className='tender__footer'>
            <div className='tender__time footer-item'>
              <FontAwesomeIcon icon={faClock} className='footer__icon' />
              <span className='footer__text'>{serviceData.addedDate}</span>
            </div>
            <div className='tender__date footer-item'>
              <FontAwesomeIcon icon={faCalendarAlt} className='footer__icon' />
              <span className='footer__text '>{`${serviceData.deadLine}-dək`}</span>
            </div>
            <div className='tender__offer footer-item'>
              <FontAwesomeIcon icon={faComment} className='footer__icon' />
              <span className='footer__text'>{`${serviceData.order} təklif`}</span>
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className='service-order container' key={serviceData.id}>
          <div
            className='service-order__content'
            style={{ padding: '1rem 1.3rem 0.5rem' }}
          >
            <div className='service-order__header'>
              <div className='service-order__header--profile'>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className='service-order__header--profile__img'
                />
              </div>
              <div className='service-order__header--texts'>
                <h4 className='texts__title'>{serviceData.title}</h4>
                <p className='texts__registrationDate'>
                  Saytda qeydiyyatdan keçib: {serviceData.registrationDate}
                </p>
                <p className='texts__feedbacks'>
                  <span>İcraçıların rəyləri: </span>
                  <span className='green'>{serviceData.feedbacks.green}</span>
                  <span>|</span>
                  <span className='red'>{serviceData.feedbacks.red}</span>
                  <span>|</span>
                  <span className='blue'>{serviceData.feedbacks.blue}</span>
                </p>
              </div>
            </div>
            <div className='service-order__body'>
              <h1 className='service-order__body--title'>
                {serviceData.header}
              </h1>
              <span className='service-order__body--price'>
                <FontAwesomeIcon
                  icon={faMoneyBill}
                  style={{ marginRight: '0.5rem' }}
                />
                {`${serviceData.price} AZN`}
              </span>
              <p className='service-order__body--deadLine'>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  style={{ marginRight: '0.2rem', fontSize: '1rem' }}
                />
                Təkliflər {serviceData.deadLine} tarixinədək qəbul edlir
              </p>
              <p className='service-order__body--article'>
                {serviceData.about}
              </p>
              <OrdersImagesCarousel />
              <h2>Əlaqə məlumatları</h2>
              <div className='service-order__body--contact'>
                <div className='service-order__body--contact__left'>
                  <span>Web-sayt:</span>
                  <span>E-mail:</span>
                  <span>Whatsapp:</span>
                </div>
                <div className='service-order__body--contact__right'>
                  <span>
                    <a href='http://www.webdizayn.az' target='_blank'>
                      {serviceData.contact.site}
                    </a>
                  </span>
                  <span> {serviceData.contact.email}</span>
                  <span> {serviceData.contact.whatsapp}</span>
                </div>
              </div>
            </div>
          </div>

          <div className='service-order__footer'>
            <div>
              <div className='order__type footer-item'>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className='footer__icon'
                />
                <span className='footer__text'>{serviceData.location}</span>
              </div>
              <div className='order__time footer-item'>
                <FontAwesomeIcon icon={faClock} className='footer__icon' />
                <span className='footer__text'>{serviceData.addedDate}</span>
              </div>
            </div>
            <div>
              <div className='order__offer footer-item'>
                <FontAwesomeIcon icon={faEye} className='footer__icon' />
                <span className='footer__text'>{`Cəmi baxış: ${serviceData.views}`}</span>
              </div>
              <div className='order__date footer-item'>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className='footer__icon'
                />
                <span className='footer__text '>{`${serviceData.deadLine}-dək`}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='suggestions'>
          <h2 className='suggestions__header'>
            <FontAwesomeIcon icon={faComments} />
            İcraçıların təklifləri <span>{serviceData.order}</span>
          </h2>
          <div className='container'>
            Cəmi {serviceData.order} təklif. Təkliflər haqqında məlumat almaq
            üçün qeydiyyatdan keçin və ya daxil olun
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className='tender-container'>
        <Switch>
          <Route path={`${path}/:serviceId`} exact>
            <ServiceOrder />
          </Route>
          <Route path={path}>
            <Filter />
            <SearchBar />
            {ServiceOrdersData.map((data) => (
              <ServiceOrder data={data} />
            ))}
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default ServiceOrders;

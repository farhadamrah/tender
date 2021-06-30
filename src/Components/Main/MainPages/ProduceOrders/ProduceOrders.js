import React from 'react';
import './ProduceOrders.scss';
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
  faBriefcase,
  faComments,
  faPlaceOfWorship,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Filter from '../../Filter/Filter';
import SearchBar from '../../SearchBar/SearchBar';
import ProduceOrdersData from './ProduceOrdersData';
import OrdersImagesCarousel from '../OrdersCarousel/OrdersImagesCarousel';

const ProduceOrders = () => {
  const { url, path } = useRouteMatch();

  const ProduceOrder = ({ data }) => {
    const { produceId } = useParams();
    const produceData =
      data ||
      ProduceOrdersData[
        ProduceOrdersData.findIndex((i) => i.id === +produceId)
      ];
    return data ? (
      <>
        <div className='produce-container' key={`produce-${produceData.id}`}>
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
              <Link to={`${url}/${produceData.id}`}>
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
      </>
    ) : (
      <>
        <div className='service-order container' key={produceData.id}>
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
                <h4 className='texts__title'>{produceData.title}</h4>
                <p className='texts__registrationDate'>
                  Saytda qeydiyyatdan keçib: {produceData.registrationDate} gün
                </p>
                <p className='texts__feedbacks'>
                  <span>İcraçıların rəyləri: </span>
                  <span className='green'>{produceData.feedbacks.green}</span>
                  <span>|</span>
                  <span className='red'>{produceData.feedbacks.red}</span>
                  <span>|</span>
                  <span className='blue'>{produceData.feedbacks.blue}</span>
                </p>
              </div>
            </div>
            <div className='service-order__body'>
              <h1 className='service-order__body--title'>
                {produceData.header}
              </h1>
              <span className='service-order__body--price'>
                <FontAwesomeIcon
                  icon={faMoneyBill}
                  style={{ marginRight: '0.5rem' }}
                />
                {`${produceData.price} AZN`}
              </span>
              <p className='service-order__body--deadLine'>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  style={{ marginRight: '0.2rem', fontSize: '1rem' }}
                />
                Təkliflər {produceData.deadLine} tarixinədək qəbul edlir
              </p>
              <p className='service-order__body--article'>
                {produceData.about}
              </p>
              <OrdersImagesCarousel />
            </div>
          </div>

          <div className='service-order__footer'>
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
                <span className='footer__text'>{produceData.addedDate}</span>
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
            Cəmi {produceData.order} təklif. Təkliflər haqqında məlumat almaq
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
          <Route path={`${path}/:produceId`} exact>
            <ProduceOrder />
          </Route>
          <Route path={path}>
            <Filter />
            <SearchBar />
            {ProduceOrdersData.map((data) => (
              <ProduceOrder data={data} />
            ))}
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default ProduceOrders;

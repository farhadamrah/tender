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
  faClock,
  faCalendarAlt,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Filter from '../../Filter/Filter';
import SearchBar from '../../SearchBar/SearchBar';
import ProduceOrdersData from './ProduceOrdersData';

const ProduceOrders = () => {
  const { url, path } = useRouteMatch();

const ProduceOrder = () => {
  const { produceId } = useParams();
  const produceData =
    data || ProduceOrdersData[ProduceOrdersData.findIndex((i) => i.id === +produceId)];
  return data ? (
    <>
      <Filter />
      <SearchBar />
      <div className='produce-container'>
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
              <button type='button' className='produce__details-btn'>
                Ətraflı
              </button>
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
     <div className='service-order container' key={orderData.id}>
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
                <h4 className='texts__title'>Sifarişçi</h4>
                <p className='texts__registrationDate'>
                  Saytda qeydiyyatdan keçib 29 gün
                </p>
                <p className='texts__feedbacks'>
                  <span>İcraçıların rəyləri: </span>
                  <span className='green'>{orderData.feedbacks.green}</span>
                  <span>|</span>
                  <span className='red'>{orderData.feedbacks.red}</span>
                  <span>|</span>
                  <span className='blue'>{orderData.feedbacks.blue}</span>
                </p>
              </div>
            </div>
            <div className='service-order__body'>
              <h1 className='service-order__body--title'>
                Şirkətin işçiləri üçün uniforma və sair promo məhsullarının
                istehsalı üçün tender elan olunur
                {/* {data.title} */}
              </h1>
              <span className='service-order__body--price'>
                <FontAwesomeIcon
                  icon={faMoneyBill}
                  style={{ marginRight: '0.5rem' }}
                />
                0 AZN
              </span>
              <p className='service-order__body--deadLine'>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  style={{ marginRight: '0.2rem', fontSize: '1rem' }}
                />
                Təkliflər 09.06.2021 tarixinə dək qəbul edlir
              </p>
              <p className='service-order__body--article'>
                Berlin MP mağazaları şəbəkəsinin işçilərinin gündəlik iş
                geyimlərinin tikilməsi və sair promo işləri üçün tender elan
                olunur.
              </p>
            </div>
          </div>

          <div className='service-order__footer'>
            <div>
              <div className='order__type footer-item'>
                <FontAwesomeIcon icon={faBriefcase} className='footer__icon' />
                <span className='footer__text'>{`Birdəfəlik sifariş`}</span>
              </div>
              <div className='order__time footer-item'>
                <FontAwesomeIcon icon={faClock} className='footer__icon' />
                <span className='footer__text'>{`26.05.2021 в 14:14`}</span>
              </div>
            </div>
            <div>
              <div className='order__offer footer-item'>
                <FontAwesomeIcon icon={faEye} className='footer__icon' />
                <span className='footer__text'>{`Cəmi baxış: 311`}</span>
              </div>
              <div className='order__date footer-item'>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className='footer__icon'
                />
                <span className='footer__text '>{`09.06.2021-dək`}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='suggestions'>
          <h2 className='suggestions__header'>
            <FontAwesomeIcon icon={faComments} />
            İcraçıların təklifləri <span>{`2`}</span>
          </h2>
          <div className='container'>
            Cəmi 2 təklif. Təkliflər haqqında məlumat almaq üçün qeydiyyatdan
            keçin və ya daxil olun
          </div>
        </div>
    </>
  )
};

export default ProduceOrders;

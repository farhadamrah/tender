import React from 'react';
import {
  Link,
  Switch,
  useRouteMatch,
  Route,
  useParams,
} from 'react-router-dom';
import './ServiceOrders.scss';
import '../../Main.scss';
import {
  faUserCircle,
  faMoneyBill,
  faClock,
  faCalendarAlt,
  faComment,
  faEye,
  faBriefcase,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TenderData from './ServiceOrdersData';
import Filter from '../../Filter/Filter';
import SearchBar from '../../SearchBar/SearchBar';

const ServiceOrders = () => {
  const { url, path } = useRouteMatch();

  const ServiceOrder = ({ data }) => {
    const { orderId } = useParams();
    const orderData =
      data || TenderData[TenderData.findIndex((i) => i.id === +orderId)];
    return data ? (
      <>
        <div className='tender' key={`order-${orderData.id}`}>
          <div className='tender__content'>
            <h1 className='tender__title'>{orderData.title}</h1>
            <FontAwesomeIcon icon={faUserCircle} className='tender__image' />
            {/* <img src={'tender image'} alt="" /> */}
            <p className='tender__feedbacks'>
              <span className='green'>{orderData.feedbacks.green}</span>
              <span>|</span>
              <span className='red'>{orderData.feedbacks.red}</span>
              <span>|</span>
              <span className='blue'>{orderData.feedbacks.blue}</span>
            </p>
            <h1 className='tender__header'>{orderData.header}</h1>
            <div className='price'>
              <FontAwesomeIcon icon={faMoneyBill} className='price__icon' />
              <span className='price__text'>{`${orderData.price} AZN`}</span>
            </div>
            <Link to={`${url}/${orderData.id}`}>
              <button type='button' className='tender__details-btn'>
                Ətraflı
              </button>
            </Link>
          </div>
          <div className='tender__footer'>
            <div className='tender__time footer-item'>
              <FontAwesomeIcon icon={faClock} className='footer__icon' />
              <span className='footer__text'>{`${orderData.addedDate} gün əvvəl`}</span>
            </div>
            <div className='tender__date footer-item'>
              <FontAwesomeIcon icon={faCalendarAlt} className='footer__icon' />
              <span className='footer__text '>{`${orderData.deadLine}-dək`}</span>
            </div>
            <div className='tender__offer footer-item'>
              <FontAwesomeIcon icon={faComment} className='footer__icon' />
              <span className='footer__text'>{`${orderData.order} təklif`}</span>
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
    );
  };

  return (
    <>
      <div className='tender-container'>
        <Switch>
          <Route path={`${path}/:orderId`} exact>
            <ServiceOrder />
          </Route>
          <Route path={path}>
            <Filter />
            <SearchBar />
            {TenderData.map((data) => (
              <ServiceOrder data={data} />
            ))}
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default ServiceOrders;

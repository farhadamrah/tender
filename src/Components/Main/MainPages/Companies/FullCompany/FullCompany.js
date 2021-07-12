import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useParams } from 'react-router-dom';
import './FullCompany.scss';

const FullCompany = ({ companyData }) => {
  const { id } = useParams();
  return (
    <>
      {companyData
        .filter((fullCompany) => fullCompany.id === Number(id))
        .map((fullCompany, index) => (
          <div className='fullCompany' key={index}>
            <div className='fullCompany__header'>
              <div className='fullCompany__header--left'>
                <img src={fullCompany.image} alt='fullCompany_logo' />
              </div>
              <div className='fullCompany__header--right'>
                <h1 className='fullCompany__header--right__title'>
                  {fullCompany.name}
                </h1>
                <h3 className='fullCompany__header--right__service'>
                  {fullCompany.service}
                </h3>
                <div className='fullCompany__header--right__feedbacks-container'>
                  <span className='feedbacks-container__label'>Rəylər:</span>
                  <div className='feedbacks'>
                    <span className='green'>{fullCompany.feedbacks.green}</span>
                    <span>|</span>
                    <span className='red'>{fullCompany.feedbacks.red}</span>
                    <span>|</span>
                    <span className='blue'>{fullCompany.feedbacks.blue}</span>
                  </div>
                </div>
                <p className='fullCompany-rating-container'>
                  <span className='fullCompany-rating__label'>Reytinq:</span>
                  <span className='fullCompany-rating'>
                    {fullCompany.rating}
                  </span>
                </p>
              </div>
            </div>
            <div className='fullCompany__content'>{fullCompany.text}</div>
            <div className='fullCompany__experience'>
              <span className='word'>Təcrübə: </span>
              <span className='year'>{`${fullCompany.experience} il`}</span>
            </div>
            <div className='fullCompany__contact'>
              <span>Əlaqə</span>
              {fullCompany.contact.map((number) => (
                <>
                  <div className='fullCompany__contact--inside'>
                    <FontAwesomeIcon icon={faPhone} />
                    <span>{number}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
        ))}
    </>
  );
};

export default FullCompany;

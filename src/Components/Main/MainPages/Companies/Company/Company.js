import React from 'react';
import { Link } from 'react-router-dom';
import './Company.scss';

const Company = ({ companyData }) => {
  return (
    <>
      {companyData.map((company, index) => (
        <Link to={`/companies/${company.id}`}>
          <div className='company' key={index}>
            <div className='company__header'>
              <div className='company__header--left'>
                <img src={company.image} alt='company_logo' />
              </div>
              <div className='company__header--right'>
                <h1 className='company__header--right__title'>
                  {company.name}
                </h1>
                <h3 className='company__header--right__service'>
                  {company.service}
                </h3>
                <div className='company__header--right__feedbacks-container'>
                  <span className='feedbacks-container__label'>Rəylər:</span>
                  <div className='feedbacks'>
                    <span className='green'>{company.feedbacks.green}</span>
                    <span>|</span>
                    <span className='red'>{company.feedbacks.red}</span>
                    <span>|</span>
                    <span className='blue'>{company.feedbacks.blue}</span>
                  </div>
                </div>
                <p className='company-rating-container'>
                  <span className='company-rating__label'>Reytinq:</span>
                  <span className='company-rating'> {company.rating}</span>
                </p>
              </div>
            </div>
            <div className='company__content'>{company.text}</div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Company;

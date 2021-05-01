import React from 'react';
import Filter from '../../Filter/Filter';
import SearchBar from '../../SearchBar/SearchBar';
import { servicesData, companyData } from './CompaniesData';
import './Companies.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Companies = () => {
  return (
    <>
      <div className='companies-container'>
        <Filter />
        <SearchBar />
        <div className='services-list-container'>
          <h1>TenderWorld platformasında icraçılar</h1>
          <h2>
            {'607'} peşəkar və {'432'} xidmət arasından sizə lazım olanı seçin
          </h2>
          <ul className='companies__list'>
            {servicesData.map((dataItem) => (
              <li>
                <p>{dataItem.name}</p>
                <span>{dataItem.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='line' />

        {companyData.map((company) => (
          <div className='company'>
            <div className='company__header'>
              <div className='company__header--left'>
                <img src={company.image} alt='unilegal' />
              </div>
              <div className='company__header--right'>
                <h1 className='company-title'>{company.name}</h1>
                <h3 className='company-service'>{company.service}</h3>
                <div className='company-feedbacks-container'>
                  <span className='company-feedbacks__label'>Rəylər:</span>
                  <div className='company-feedbacks'>
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
        ))}
      </div>
    </>
  );
};

export default Companies;

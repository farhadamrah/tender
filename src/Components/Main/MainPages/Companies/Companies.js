import React from 'react';
import { Route, Switch } from 'react-router';
import Filter from '../../Filter/Filter';
import SearchBar from '../../SearchBar/SearchBar';
import { servicesData, companyData } from './CompaniesData';
import './Companies.scss';
import Company from './Company/Company';
import FullCompany from './FullCompany/FullCompany';

const Companies = () => {
  return (
    <>
      <Switch>
        <Route exact path='/companies'>
          <div className='companies-container'>
            <Filter />
            <SearchBar />
            <div className='services-list-container'>
              <h1>TenderWorld platformasında icraçılar</h1>
              <h2>
                {'607'} peşəkar və {'432'} xidmət arasından sizə lazım olanı
                seçin
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
          </div>
          <Company companyData={companyData} />
        </Route>

        <Route path='/companies/:id'>
          <FullCompany companyData={companyData} />
        </Route>
      </Switch>
    </>
  );
};

export default Companies;

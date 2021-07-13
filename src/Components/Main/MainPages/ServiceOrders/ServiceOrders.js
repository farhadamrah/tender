import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Filter from '../../Filter/Filter';
import SearchBar from '../../SearchBar/SearchBar';
import ServiceOrdersData from './ServiceOrdersData';
import './ServiceOrders.scss';
import '../../Main.scss';
import ServiceOrder from './ServiceOrder/ServiceOrder';
import FullServiceOrder from './FullServiceOrder/FullServiceOrder';

const ServiceOrders = () => {
  return (
    <>
      <div className='tender-container'>
        <Switch>
          <Route exact path='/service-orders'>
            <Filter />
            <SearchBar />
            <ServiceOrder serviceData={ServiceOrdersData} />
          </Route>
          <Route path='/service-orders/:id'>
            <FullServiceOrder serviceData={ServiceOrdersData} />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default ServiceOrders;

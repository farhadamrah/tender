import React from 'react';
import './ProduceOrders.scss';
import {
  Link,
  Switch,
  useRouteMatch,
  Route,
  useParams,
} from 'react-router-dom';

import Filter from '../../Filter/Filter';
import SearchBar from '../../SearchBar/SearchBar';
import ProduceOrdersData from './ProduceOrdersData';
import OrdersImagesCarousel from '../OrdersCarousel/OrdersImagesCarousel';
import ProduceOrder from './ProduceOrder/ProduceOrder';
import FullProduceOrder from './FullProduceOrder/FullProduceOrder';

const ProduceOrders = () => {
  return (
    <>
      <div className='tender-container'>
        <Switch>
          <Route exact path='/produce-orders'>
            <Filter />
            <SearchBar />
            <ProduceOrder produceOrdersData={ProduceOrdersData} />
          </Route>
          <Route path='/produce-orders/:id'>
            <FullProduceOrder produceOrdersData={ProduceOrdersData} />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default ProduceOrders;

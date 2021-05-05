import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './MainPages/Sign/Login/Login';
import Register from './MainPages/Sign/Register/Register';
import Rules from './MainPages/Sign/Register/RegisterRules/Rules';
import FindPassword from './MainPages/Sign/Login/FindPassword/FindPassword';
import AddOrder from './MainPages/AddOrder/AddOrder';
import ServiceOrders from './MainPages/ServiceOrders/ServiceOrders';
import ProduceOrders from './MainPages/ProduceOrders/ProduceOrders';
import Companies from './MainPages/Companies/Companies';
import Store from './MainPages/Store/Store';
import HomePage from './MainPages/HomePage/HomePage';
import './Main.scss';

const Main = () => {
  return (
    <>
      <main className='main'>
        <section className='main-container'>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/find-password' component={FindPassword} />
            <Route path='/register' component={Register} />
            <Route path='/rules' component={Rules} />
            <Route path='/add-order' component={AddOrder} />
            <Route path='/service-orders' component={ServiceOrders} />
            <Route path='/produce-orders' component={ProduceOrders} />
            <Route path='/companies' component={Companies} />
            <Route path='/store' component={Store} />
            <Route path='/' component={HomePage} />
          </Switch>
        </section>
      </main>
    </>
  );
};

export default Main;
